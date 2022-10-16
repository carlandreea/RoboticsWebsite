import './Contact.css'
function Contact(){
    return(
        <>
            <section>
                <div className='w-60 p-6'>
                    <div className='w-60'>
                        <p className='lh-2 mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='mb-1'>
                            <input className='email-input' placeholder='Your Email Address' type='text'/>
                        </div>
                        <div>
                            <button className='btn btn-danger'>SUBSCRIBE</button>
                        </div>
                        <div className='mt-4 d-flex justify-content-around fs-30 myIcon'>
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-linkedin'></i>
                            <i className='fab fa-github'></i>
                            <i className='fab fa-youtube'></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact