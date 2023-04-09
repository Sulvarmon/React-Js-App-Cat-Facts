import React, { useEffect, useState } from 'react';
import "./grid.css"

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
                        <div className='grid_cont mt-5'>
                            {grid.map((item, index) => (
                                <div key={index} className='d-flex flex-column gap-2 p-2 align-items-center border rounded'>
                                    <div className='text-info'>{eval(props.name)}</div>
                                    <img src={`https://cdn2.thecatapi.com/images/${catsData[item].reference_image_id}.jpg`} width="200px" height="200px" />
                                    <div>
                                        <div><b className='text-warning'>Temperament :</b> {eval(props.info1)}</div>
                                        <div className='mt-2'><b className='text-warning'>Description :</b> {eval(props.info2)}</div>
                                    </div>
                                    <div><a target="_blank" rel="noreferrer" href={catsData[item].wikipedia_url}>Aditional Information</a></div>
                                </div>
                            ))}
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