import React, { useEffect, useState } from 'react';
import "./grid.css"
import ACat from '../aCat/aCat';

function Grid(props) {
    const [catsData, setcatsData] = useState([])

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => setcatsData(data))
            .catch(error => console.log(error));
    }, [])
    let grid = []
    for (let i = 0; i < props.arrLength; i++) {
        grid.push(i)

    }

    return (
        <div>
            {
                catsData.length ? (
                    <div className='text-white mt-5 p-2 bbt'  >
                        <div className='h2 text-center text-warning' style={{ letterSpacing: "10px" }}>{props.title}</div>
                        <div className='d-flex justify-content-center'>
                            <div className='grid_cont mt-5 border rounded'>
                                {grid.map((item, index) => (
                                    <div key={index}>
                                        <ACat name={catsData[item].name} img={catsData[item].reference_image_id} origin={catsData[item].origin} temperament={catsData[item].temperament} lifeSpan={catsData[item].life_span} description={catsData[item].description} wiki={catsData[item].wikipedia_url} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )
            }
        </div>


    );
}
export default Grid