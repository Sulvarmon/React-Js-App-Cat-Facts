import { useState, useEffect } from "react"
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';



function Carousel() {

    const [count, setCount] = useState(0);


    function defLeftProp() {
        let carouselItemsArray = document.querySelectorAll(".carousel_item")
        let widthOfCarouselItem = carouselItemsArray[0].offsetWidth
        for (let i = 0; i < carouselItemsArray.length; i++) {
            carouselItemsArray[i].style.left = (count + i) * widthOfCarouselItem + "px"
        }
    }

    let decreaseCount = () => {
        let carouselItemsArray = document.querySelectorAll(".carousel_item")
        if (Math.abs(count) < carouselItemsArray.length - 1) {
            setCount(count - 1)
        }
        for (let i = 0; i < carouselItemsArray.length; i++) {
            carouselItemsArray[i].style.transition = '0.3s ease-in-out'
        }
    }

    let increaseCount = () => {
        if (Math.abs(count) > 0) {
            setCount(count + 1)
        }
    }

    useEffect(() => {
        defLeftProp()
    }, [count])

    return (
        <div>
            <div className="carousel_content_cont d-flex  overflow-hidden">
                <div className="carousel_left_arr ms-2 cp" onClick={increaseCount}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size={'2x'} />
                </div>
                <div className="carousel_right_arr me-2 cp" onClick={decreaseCount}>
                    <FontAwesomeIcon icon={faArrowCircleRight} size={'2x'} />
                </div>
                <div className="carousel_item user-select-none border bg-dark text-white">some text1</div>
                <div className="carousel_item user-select-none border bg-dark text-white">some text2</div>
                <div className="carousel_item user-select-none border bg-dark text-white">some text3</div>
                <div className="carousel_item user-select-none border bg-dark text-white">some text4</div>
                <div className="carousel_item user-select-none border bg-dark text-white">some text5</div>
            </div>
        </div>
    )
}

export default Carousel