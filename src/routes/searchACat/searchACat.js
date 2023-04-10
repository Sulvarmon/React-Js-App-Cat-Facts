import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../../reusableComponents/header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./searchACat.css"
import ACat from '../../reusableComponents/aCat/aCat';

function SearchACat(props) {

    const [catsData, setCatsData] = useState([])

    function triggerSearch() {
        let searchBtn = document.querySelector(".search_icon")
        searchBtn.click()
    }

    function changePlaceholder() {
        document.querySelector('.search_fild ').value = ''
        triggerSearch()
        let serachOption = document.querySelector(".search_option").value
        switch (serachOption) {
            case "Breed":
                document.querySelector(".search_fild").placeholder = "Type Cat Breed Name";
                break;
            case "Life Span":
                document.querySelector(".search_fild").placeholder = "Type Cat Age";
                break;
            case "Temperament":
                document.querySelector(".search_fild").placeholder = "Type Cat Temperament";
                break;
            default:
                break;
        }
    }

    function searchCatFnc() {
        let searchFild = document.querySelector(".search_fild").value.toLowerCase();
        let serachOption = document.querySelector(".search_option").value
        let fildLength = searchFild.length
        let searchCatContainer = document.querySelector('.search_cat_cont')
        searchCatContainer.innerHTML = ""

        if (searchFild !== '') {
            switch (serachOption) {
                case "Breed":

                    for (let i = 0; i < catsData.length; i++) {
                        if (searchFild === catsData[i].name.substring(0, fildLength).toLowerCase()) {
                            let element = document.createElement("div")
                            createRoot(element).render(<ACat name={catsData[i].name} img={catsData[i].reference_image_id} origin={catsData[i].origin} temperament={catsData[i].temperament} lifeSpan={catsData[i].life_span} description={catsData[i].description} wiki={catsData[i].wikipedia_url} />);
                            searchCatContainer.appendChild(element)
                        }
                    }
                    break;
                case "Life Span":
                    for (let i = 0; i < catsData.length; i++) {
                        if (searchFild === catsData[i].life_span.split('-')[0].trim()) {
                            let element = document.createElement("div")
                            createRoot(element).render(<ACat name={catsData[i].name} img={catsData[i].reference_image_id} origin={catsData[i].origin} temperament={catsData[i].temperament} lifeSpan={catsData[i].life_span} description={catsData[i].description} wiki={catsData[i].wikipedia_url} />);
                            searchCatContainer.appendChild(element)
                        }
                    }
                    break;
                case "Temperament":
                    for (let i = 0; i < catsData.length; i++) {
                        let temperamentArr = catsData[i].temperament.split(',')
                        for (let j = 0; j < temperamentArr.length; j++) {
                            if (searchFild === temperamentArr[j].trim().toLowerCase()) {
                                let element = document.createElement("div")
                                createRoot(element).render(<ACat name={catsData[i].name} img={catsData[i].reference_image_id} origin={catsData[i].origin} temperament={catsData[i].temperament} lifeSpan={catsData[i].life_span} description={catsData[i].description} wiki={catsData[i].wikipedia_url} />);
                                searchCatContainer.appendChild(element)
                            }
                        }

                    }
                    break;
                default:
                    break;
            }

        }
    }

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => setCatsData(data))
            .catch(error => console.log(error));
    })

    return (
        <div className='container-md g-0 overflow-hidden' >
            <Header />
            <div className='text-white d-flex flex-column  align-items-center p-2 gap-2 bbt mt-2'>
                <div className='h1 text-warning'>Search A Cat</div>
                <div className='d-flex flex-column align-items-center flex column gap-2 p-2 mt-2 border'>
                    <div className='d-flex gap-2 p-2'>
                        <div>Search A Cat By :</div>
                        <div>
                            <select className='search_option' onChange={changePlaceholder}>
                                <option>Breed</option>
                                <option>Life Span</option>
                                <option>Temperament</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex gap-2 align-items-center '>
                        <div><input className='search_fild rounded p-2' type='text' placeholder='Type Cat Name' onKeyUp={triggerSearch} /></div>
                        <div className='search_icon cp hl' onClick={searchCatFnc}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    </div>
                </div>
                <div className='search_a_cat_main_cont p-2 mt-2 text-white'>
                    <div className='search_cat_cont d-flex flex-wrap gap-2 p-2 justify-content-center'></div>
                </div>

            </div>

        </div>
    );
}
export default SearchACat