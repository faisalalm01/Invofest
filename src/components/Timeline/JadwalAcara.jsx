import React from 'react'
import { Chrono } from "react-chrono";


 const JadwalAcara = () => {
    const items = [{
        title: "Oktober 2022",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
 
      }, 
      {
        title: "Oktober 2022",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
 
      },
      {
        title: "Oktober 2022",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
 
      },
      {
        title: "Oktober 2022",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
 
      },
     
    ];
  
  return (
    <div className='container text-center'>
      <h3 className='py-4 pt-5'>Timeline Acara</h3>
    <Chrono items={items} 
    style={{ width: '500px', height: '950px' }}
     theme={{
      primary: 'black',
      secondary: 'white',
      cardBgColor: 'gray',
      // cardForeColor: 'violet',
      titleColor: 'black',
      titleColorActive: 'black',}}
     mode="VERTICAL" itemWidth={90} />
   
  </div>
  )
}

export default JadwalAcara