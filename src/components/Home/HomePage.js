import { Container } from 'react-bootstrap'
import vd_homepage from '../../Assets/homepage.mp4'
import { NavLink } from 'react-router-dom';

import './HomePage.scss'

const HomePage = (props) => {
    return (

        <Container className="homepage-container">

            <div className="homepage-container-1">
                <div className="homepage-container-video">
                    <video autoPlay muted loop className='w-100'>
                        <source
                            src={vd_homepage}
                            type='video/mp4'
                        />
                    </video>
                </div>
                <div className='homepage-container-content'>
                    <div className='homepage-container-content-h1 h1'>
                        <h1>Forms <br /> that break <br /> the norm</h1>
                    </div>
                    <div className='homepage-container-content-h2 h2'>
                        <h2>
                            <span>Get more data - like signups, feedback,and anything else - with forms designed to be
                                <strong> refreshingly different.</strong>
                            </span>
                        </h2>
                    </div>
                    <div className='homepage-container-content-navlink'>
                        <NavLink to='/signup' >Get started - it's free</NavLink>
                    </div>
                </div>
            </div>

        </Container >
    )
}
export default HomePage