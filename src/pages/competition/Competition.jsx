
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Navbars from '../../components/Navbars';
import LandingPage from '../LandingPage/LandingPage';

class Competition extends Component {
    render() {
        return (
            <div>
    <LandingPage/>
                <Navbars/>
                  <div className='flex h-screen justify-center items-center'>
        <h1 className='font-bold text-8xl'>COMPETITION COMING SOON !!!!!</h1>
    </div>
    <div>
    <Image className='' src="Assets/ig.png" fluid />
    </div>
            </div>
        );
    }
// >>>>>>> 55f409941f34e96d57551d66aabb4ee867515b3f
}

export default Competition;
