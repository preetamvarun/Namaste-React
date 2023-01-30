import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>This an about page</h1>
            <p> I am currently at lesson number : 7🚀. It's name is finding the path.
            It's time to learn react routing. Both static routing and dynamic routing.</p>
            <Outlet/>
        </div>
    )
}

export default About;