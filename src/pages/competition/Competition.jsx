// <<<<<<< HEAD
// import React, { Component } from 'react';
// import { Image } from 'react-bootstrap';
// import Navbars from '../../components/Navbars';
// import LandingPage from '../LandingPage/LandingPage';

// class Competition extends Component {
//     render() {
//         return (
//             <div>
//     <LandingPage/>
//                 <Navbars/>
//                   <div className='flex h-screen justify-center items-center'>
//         <h1 className='font-bold text-8xl'>COMPETITION COMING SOON !!!!!</h1>
//     </div>
//     <div>
//     <Image className='' src="Assets/ig.png" fluid />
//     </div>
//             </div>
//         );
//     }
// =======
import React, { Component } from "react";
import Banner from "../../components/Banner";
import Cards from "../../components/com/Cards";
import Navbars from "../../components/Navbars";

class Competition extends Component {
  render() {
    return (
      <div>
        <Navbars />
        {/* <div className='flex h-screen justify-center items-center'>
        <h1 className='font-bold text-8xl'>COMPETITION COMING SOON !!!!!</h1>
    </div> */}
            <Banner/>
            <Cards />
            
        </div>
    );
  }
// >>>>>>> 48ef886b423ea862e83efaa229e06a00dca8843a
}

export default Competition;
