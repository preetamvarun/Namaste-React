import { useRouteError } from "react-router-dom"

export const Error = () => {
    const {status, statusText, data} = useRouteError();
    return (
        <div>
            <h1>Oops! {status} {statusText}</h1>
            <p>{data}</p>
        </div>
    )
}
