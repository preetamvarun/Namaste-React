
import './Shimmer.css';

const Shimmer = () => {
    return (
        <div style={{display : 'flex', flexWrap : 'wrap', justifyContent : 'center', alignItems : 'center', marginTop : '2rem'}}>
            {Array(15).fill('').map((m,index) => <div className='Shimmer-div' key={index}></div>)}
        </div>
    )
}

export default Shimmer;