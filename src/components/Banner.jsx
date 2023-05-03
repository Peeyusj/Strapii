import React from 'react'
import '../styles/Banner.css'
import im from '../assets/7476.png'


const Banner = () => {
  return (
    <div className='banner'>
        <div className="bannerinner" style={{width:"90%",margin:"0 auto"}}>
        <h3 style={{color}}>Attractions</h3>
        <h4>Explore Them. Explore Sidhbari. </h4>
        <div className='cardouter'>
            <div className="card">
                <div><img src={im} alt="immmmm" /> </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at 
                    necessitatibus sequi rem. Optio autem sit magnam deserunt doloremque 
                    cumque, non nulla nobis temporibus sint, omnis nostrum, animi velit hic!</div>
                <div></div>
                <div style={{color:"white",width:"30%",backgroundColor:"#FC916A",borderRadius:"3px",border:"none",marginTop:"1.5rem"}}>Explore</div>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Banner