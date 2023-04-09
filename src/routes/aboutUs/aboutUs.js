import React from 'react';
import Header from '../../reusableComponents/header/header';
import office from "../../img/ofiice.jpg"

function AboutUs(props) {
    return (
        <div className='container-md g-0 overflow-hidden'>
            <Header />
            <div className='text-white d-flex flex-column justify-content-between align-items-center p-2 gap-2 bbt mt-2'>
                <div className='h1 text-warning'>About us</div>
                <div className='container'>
                    <p style={{ textIndent: "20px" }}>enim in tempor voluptate ullamco cillum esse quis occaecat fugiat incididunt. Aliquip sunt mollit sunt velit eiusmod proident veniam commodo officia non. Officia irure nostrud incididunt ex eu exercitation quis aliqua deserunt enim aliquip. Labore nulla duis aliquip minim nostrud non pariatur mollit magna id consectetur duis cillum. Lorem culpa culpa elit voluptate anim minim eu velit.
                        Veniam non ullamco Lorem incididunt incididunt veniam deserunt quis Lorem. Velit amet id mollit anim excepteur ex anim est fugiat non Lorem quis in. Proident esse minim fugiat cillum aliqua.
                        Eu ad
                    </p>
                    <div className='d-flex justify-content-center m-2'><img src={office} alt='ofiice' /></div>
                    <p style={{ textIndent: "20px" }}>
                        anim enim excepteur officia voluptate laboris cillum  dolor laboris ullamco. Commodo sunt excepteur officia magna quis commodo in ea. Ad deserunt sit nostrud exercitation elit cillum velit. Cillum labore sunt nulla minim qui pariatur officia laborum. Aliqua veniam mollit aute consequat et.
                        Minim veniam voluptate aliquip aliquip nisi esse est aute anim Lorem. Amet quis exercitation velit et sint anim excepteur. Quis enim eiusmod qui pariatur mollit consectetur aliquip irure excepteur reprehenderit et elit. Voluptate do dolor sit do velit voluptate qui fugiat esse excepteur.
                        Magna enim commodo occaecat amet ex ex ex. Ex non deserunt ex dolore tempor. Culpa dolore anim amet consequat qui labore. Culpa occaecat magna nostrud quis amet excepteur aliquip culpa officia reprehenderit ullamco incididunt culpa. Ex irure reprehenderit do ad incididunt reprehenderit ea et commodo ut officia ex.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default AboutUs