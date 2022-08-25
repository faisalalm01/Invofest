import "./index.css";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Workshop from "./pages/workshop/workshop";
import Competition from "./pages/competition/Competition";
import Talkshow from "./pages/talkshow/talkshow";
import TimelineAcara from "./pages/Timeline/TimelineAcara";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Competition" element={<Competition />} />
          <Route path="/Talkshow" element={<Talkshow />} />
          <Route path="/Workshop" element={<Workshop/>} />
          <Route path="/Jadwal" element={<TimelineAcara/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import Particles from 'react-tsparticles';
// import Navbars from './components/Navbars';
// import { loadFull } from "tsparticles"

// function App (){
//   const particlesInit = async (main) => {
//     console.log(main);
//     await loadFull(main);
//   };
//   const particlesLoaded = (container) => {
//     console.log(container);
//   };
//   return (
//     <div className="App">

//      <Particles
//           id="tsparticles"
//           init={particlesInit}
//           loaded={particlesLoaded}
//               options={{
//             background: {
//               color: '#162747',
//             },
//             fpsLimit: 40,
//             interactivity: {
//               detectsOn: 'canvas',
//               events: {
//                 resize: true
//               },
//             },
//             particles: {
//               color: {
//                 value: "#f1f1f1"
//               },
//               number: {
//                 density: {
//                   enable: true,
//                   area: 1080
//                 },
//                 limit: 0,
//                 value: 500,
//               },
//               opacity: {
//                 animation: {
//                   enable: true,
//                   minimumValue: 0.5,
//                   speed: 1,
//                   sync: false,
//                 },
//                 random: {
//                   enable: true,
//                   minimumValue: 0.1,
//                 },
//                 value: 1,
//               },
//               shape: {
//                 type: 'circle',

//               },
//               size: {
//                 random: {
//                   enable: true,
//                   minimumValue: 0.5
//                 },
//                 value: 1
//               }
//             }
//           }}
//       />
//   </div>
//   );
// }

// export default App;
