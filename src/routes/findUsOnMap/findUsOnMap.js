import React from 'react';
import Header from '../../reusableComponents/header/header';

function FindUsOnMap(props) {
    return (
        <div className='container-md g-0 overflow-hidden'>
            <Header />
            <div className='text-white d-flex flex-column align-items-center  p-2 gap-2 bbt mt-2'>
                <div className='h1 text-warning'>Find Us On Map</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda at, exercitationem voluptas vero non sit atque reprehenderit quo totam aperiam earum optio quae, officia suscipit laborum esse, sequi perferendis fugit!</p>
                <p>Nemo doloribus quidem explicabo quisquam fugit tenetur labore! Officia itaque porro quisquam. Aliquid fugit blanditiis laboriosam eos accusantium nobis itaque tenetur id, assumenda nulla sapiente porro possimus doloremque alias animi.</p>
                <p>Sapiente eaque velit deleniti voluptate amet soluta hic minus et fugit quod recusandae iusto officiis, qui corporis minima vel itaque illum modi, error nesciunt. Nemo molestiae qui quis eum ab.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15396.641726000698!2d-45.440955139590095!3d61.15950542080172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4eabe12f451d09bb%3A0x42645db648bba447!2sNarsarsuaq%20Museum!5e0!3m2!1sen!2sge!4v1681128744664!5m2!1sen!2sge" style={{ width: "100%", height: "700px" }}></iframe>
            </div>
        </div>
    );
}
export default FindUsOnMap