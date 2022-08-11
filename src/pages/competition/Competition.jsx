import React, { Component } from 'react';
import Navbars from '../../components/Navbars';

class Competition extends Component {
    render() {
        return (
            <div>
                <Navbars/>
                  <div className='flex h-screen justify-center items-center'>
        <h1 className='font-bold text-8xl'>COMPETITION COMING SOON !!!!!</h1>
    </div>
            </div>
        );
    }
}

export default Competition;