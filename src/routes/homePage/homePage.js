import React from 'react';
import Carousel from '../../reusableComponents/carousel/carousel';
import Header from '../../reusableComponents/header/header';
import RandomCats from '../../reusableComponents/randomCat/randomCats';
import Grid from '../../reusableComponents/grid/grid';


function HomePage(props) {
    return (
        <div className='container-md g-0 overflow-hidden'>
            <Header />
            <RandomCats />
            <Grid arrLength={5} name="catsData[item].name" title="Some Popular Cats" info1="catsData[item].temperament" info2="catsData[item].description" />
        </div>
    );
}
export default HomePage