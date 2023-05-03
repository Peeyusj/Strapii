import React, { useState, useEffect } from 'react'

const Banner2 = () => {
    const [data1, setData1] = useState([]);
    useEffect(() => {
        let fetchin = async () => {
            try {
                let res = await fetch("http://localhost:1337/api/bannertwos?populate=*");
                let result = await res.json();
                setData1(result.data)
                console.log(result.data)
            } catch (error) {
                console.log(error);
            }

        }
        fetchin();
    }, [])
    return (
        <div style={{ width: "100%", position: "relative", top: "8rem" }}>
            <div >
                <h1 style={{ textAlign: "center" }} >Experiences</h1>
                <h4 style={{ textAlign: "center" }}>Share some of our Chinmaya Mission journeys</h4>
                <div style={{ display: "flex", flexWrap: "wrap", height: "22rem", flexDirection: "column" }}>
                    {data1.map((item) => <div style={{ width: "33.3%" }} key={item.key}>
                        <img style={{ width: "100%" }} src={`http://localhost:1337${item.attributes.imaban.data[0].attributes.url}`} alt="" />
                    </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Banner2
