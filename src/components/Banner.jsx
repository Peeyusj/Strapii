import React, { useState, useEffect } from 'react'
import '../styles/Banner.css'



const Banner = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let fetchin = async () => {
            try {
                let res = await fetch("http://localhost:1337/api/banners?populate=*");
                let result = await res.json();
                setData(result.data)

            } catch (error) {
                console.log(error);
            }

        }
        fetchin();
    }, [])

    return (

        <div className='banner'>
            <div className="bannerinner" style={{ width: "90%", marginInline: "auto" }}>
                <h3 style={{ color: "#FC916A", textAlign: "center" }}>Attractions</h3>
                <h4 style={{ textAlign: "center" }}>Explore Them. Explore Sidhbari. </h4>
                <div className='cardouter' >
                    {data.map((item) => <div className="card" key={item.id}>
                        <div><img src={`http://localhost:1337${item.attributes.imgpo.data.attributes.url}`} alt="immmmm" /> </div>
                        <h3 style={{ color: "#FC916A", textAlign: "center" }}>{item.attributes.heading}</h3>
                        <div style={{ textAlign: "center", width: "90%" }}>{item.attributes.desc}</div>
                        <div></div>
                        <div style={{ color: "white", width: "30%", backgroundColor: "#FC916A", borderRadius: "3px", border: "none", marginTop: "1.5rem", marginBottom: "1rem", textAlign: "center" }}>Explore</div>
                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default Banner