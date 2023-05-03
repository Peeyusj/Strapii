import React from 'react'
import '../styles/home.css'
import im from '../assets/7476.png'
const Home = () => {
  return (
    <div style={{background:`url(${im})`}} className='homeouter'>
<div className="paraa">
<div style={{color:"white"}}>
It's time to give back to our communities where we live, work, and evolve.
</div>
<button style={{color:"white",width:"30%",backgroundColor:"#FC916A",borderRadius:"3px",border:"none",marginTop:"1.5rem"}}>Explore</button>
</div>
    </div>
  )
}

export default Home