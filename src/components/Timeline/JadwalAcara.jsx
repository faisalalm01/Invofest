import React from 'react'
import { Chrono } from "react-chrono";


 const JadwalAcara = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
 
      }, 
      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
 
      },
      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
 
      },
      {
        title: "May 1940",
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
     theme={{
      primary: 'black',
      secondary: 'blue',
      cardBgColor: 'gray',
      // cardForeColor: 'violet',
      titleColor: 'black',
      titleColorActive: 'red',}}
    enableOutline mode="VERTICAL_ALTERNATING" itemWidth={320} />
  </div>
  )
}

export default JadwalAcara