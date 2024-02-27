import React from 'react'
import image1 from '../asserts/1.png'
import image2 from '../asserts/2.png'
import image3 from '../asserts/3.png'
import './Body.css'

function Body() {
  const sectors = [
    "CHEMICALS &PROCESS POWER ",
    
    "WATER WASTE WATER",
    "OILS GAS",
    "PHARMA","SUGARS DISTILLERIES",
    "PAPER PULP",
    "MARINE DEFENCE",
    "METAL MINING",
    "FOOD BEVERAGE",
    "PETROCHEMICAL REFINERIES",
    "SOLAR",
    "BUILDING HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE RESIDENTIAL"
    
   
  ];
  return (
    <div className='body'>
    <div className='section1'>
        <div className="s1Left">
          <img src={image1} alt="trophy" />
        </div>
        <div className="s1Right">
          <div className="bodyText1">
            <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <ul>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
          </div>
          <img src={image2} alt="felicitation" />
          <div className="bodyText2">
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
    </div>
    <p className="bodyText3">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
    <div className="image3rd">
      <img src={image3} alt="products" className='image-3'/>
    </div>
     <p className="bodyText4">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    <h3 className="bodyText5">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
    <div className='sector_main'>
    <ul className="bodyText6">
      {sectors.map((sector, index) => (
          <div className='sector_items'>
            <li  key={index} className='sector_li'>
              {sector} 
              </li>
              <span>|</span>
              </div> 
        ))}
    </ul></div>
    </div>
  )
}

export default Body