import './Footer.css';

const Footer = ({listitem}) => {
    return(
        <>
            <footer>
                <div className='bg-black p-6'>
                    <div className='robotics'>
                        <div className='d-flex justify-content-around flex-column'>

                            {listitem.map((curElem)=>{
                                return (
                                    <div className='b-1'>
                                <h1 className='mb-2'>{curElem.title}</h1>
                                <p>
                                    <a href='/'>{curElem.title1}</a>
                                </p>
                                <p>
                                    <a href='/'>{curElem.title2}</a>
                                </p>
                                <p>
                                    <a href='/'>{curElem.title3}</a>
                                </p>
                            </div>
                                )
                            })}
                            

                            <div className='b-1'>
                                <h1 className='mb-2'>News Letter</h1>
                                <div className='mb-1'>
                                    <input type='text' placeholder='Your Email Address' class='email-input'/>
                                </div>
                                <div>
                                    <button class='btn btn-danger'>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer