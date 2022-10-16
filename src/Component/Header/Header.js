import {useState} from 'react'
import './Header.css'

function Header(){
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    return(
        <>
           <header>
                <div className='d-flex justify-content-between nav align-center'>
                    <div className='logo'>SHAMSKUHS <br/>ROBOTICS</div>
                    <div className=
                    {hamburgerOpen ? "nav-brand expanded": 'nav-brand'} id='nav-links'>
                        <ul className='navbar d-flex'>
                            <li className='nav-list ml-2 p-1'>
                                <a href='/about'>About</a>
                                <ul className='nav-content'>
                                    <li><a href='/leadership'>Leadership</a></li>
                                    <li><a href='/leadership'>award</a></li>
                                    <li><a href='/leadership'>meet the team</a></li>
                                </ul>
                            </li>
                            <li className='nav-list ml-2 p-1'>
                                <a href='/about'>Robots</a>
                                <ul className='nav-content'>
                                    <li className='sub-nav-list'><a href='/sophia'>sophia</a>
                                        <ul className='sub-nav-content'>
                                            <li><a href='/beingsophia'>being sophia</a></li>
                                            <li><a href='/beingsophia'>art by sophia the robot</a></li>
                                            <li><a href='/beingsophia'>sophia 2022</a></li>
                                            <li><a href='/beingsophia'>sophiadao</a></li>
                                        </ul>
                                    </li>
                                    <li><a href='/sophia'>little sophia</a></li>
                                    <li><a href='/sophia'> all robots</a></li>
                                </ul>
                            </li>
                            <li className='nav-list ml-2 p-1'>
                                <a href='/about'>Resource</a>
                            </li>
                            <li className='nav-list ml-2 p-1'>
                                <a href='/about'>Contact</a>
                            </li>
                        </ul>
                        <button className='hamburger' onClick={() => {
                            setHamburgerOpen(!hamburgerOpen)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </button>
                    </div>
                </div>
           </header>
        </>
    )
}

export default Header