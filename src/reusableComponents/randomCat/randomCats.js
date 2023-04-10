import React, { useEffect, useState } from 'react';



function RandomCats(props) {
    const [catsData, setcatsData] = useState([])
    let [randomNum, setRandomNum] = useState(0)
    let [clicks, setClics] = useState(false)

    function randommizer() {
        setRandomNum(Math.floor(Math.random() * catsData.length))
    }

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => setcatsData(data))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        if (catsData.length) {
            randommizer()
        }
    }, [catsData.length, clicks])



    return (
        <div className='container text-white p-2 mt-2 d-flex justify-content-center align-items-center rounded bbt'>
            {catsData.length ? (
                <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                    <button className='btn btn-secondary' onClick={() => clicks ? setClics(false) : setClics(true)}>Random Cat</button>
                    <img src={`https://cdn2.thecatapi.com/images/${catsData[randomNum].reference_image_id}.jpg`} width="200px" height="200px" />
                    <div>{catsData[randomNum].name}</div>
                    <div className='btn btn-primary'><a target='_blank' rel="noreferrer" href={catsData[randomNum].wikipedia_url}>Aditional Information</a></div>
                </div>
            ) : (<div>Loading...</div>)}
        </div>
    );
}
export default RandomCats