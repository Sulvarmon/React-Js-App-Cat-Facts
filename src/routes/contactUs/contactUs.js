import React from 'react';
import Header from '../../reusableComponents/header/header';

function ContactUs(props) {
    return (
        <div className='container-md g-0 overflow-hidden'>
            <Header />
            <div className='text-white d-flex flex-column align-items-center  p-2 gap-2 bbt mt-2'>
                <div className='h1 text-warning'>Contacts</div>
                <form action='#' className='d-flex flex-column align-items-center'>
                    <div className='border d-flex flex-column align-items-center gap-2 p-2 '>
                        <div className='text-warning '>Contact Information</div>
                        <div className='d-flex flex-column align-items-end gap-2'>
                            <div className='d-flex gap-2'><div>First Name</div> <input name='nameFirst' className='p-2' type='text' placeholder='First Name' /></div>
                            <div className='d-flex gap-2'><div>Last Name</div><input name='nameSecond' className='p-2' type='text' placeholder='Last Name' /></div>
                            <div className='d-flex gap-2'><div>Email</div><input name='email' className='p-2' type='email' placeholder='Email' /></div>
                        </div>
                    </div>

                    <div className='border d-flex flex-column align-items-center mt-5 gap-2 p-2'>
                        <div className='text-warning '>Write us Your Message</div>
                        <textarea className='border p-2 ' name='msg' rows={4} cols={25}></textarea>
                    </div>
                    <div className='mt-3'> <input className='btn btn-primary' name='submitMail' type='submit' value={"Send"} />  </div>
                </form>
            </div>
        </div>
    );
}
export default ContactUs