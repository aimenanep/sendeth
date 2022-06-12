import React, {useRef, useState} from 'react'
import Navbar from './components/Navbar'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EthForm from './components/EthForm';
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Latest from "./components/latest"




export default function App() {

 

  const [selected, set_selected] = useState(0)


  const slider = useRef(null);

  const next=()=> {
    slider.current.slickNext();
  }
  const previous=()=> {
    slider.current.slickPrev();
  }

  const backgrounds=["","!bg-indigo-500"]

  return (

      <div className='dark'>
        <ul className={`background ${backgrounds[selected]}`} >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

        <div className="relative w-full">
        <div className="absolute inset-y-1/2 left-1 md:left-7 flex items-center justify-center bg-white rounded-full p-3 w-5 h-5 cursor-pointer" onClick={()=>previous()}  style={{transform:"translateY(-50%)",zIndex:999}}>
          <ArrowBackIosIcon sx={{fontSize:"2.5"}} style={{fill:"#000",transform: "translateX(15%)"}}/>
        </div>
        <div className="absolute inset-y-1/2 right-1 md:right-7 flex items-center justify-center bg-white rounded-full p-3 w-5 h-5 cursor-pointer" onClick={()=>next()} style={{transform:"translateY(-50%)",zIndex:999}}>
          <ArrowForwardIosIcon sx={{fontSize:"2.5"}} style={{fill:"#000",transform: "translateX(5%)"}}/>
        </div>

            <Slider 
              arrows={false}
              ref={slider}
              afterChange={(index)=>set_selected(index)}
            >
            <div>
              <EthForm/>
            </div>
            <div>
            <Latest/>
            </div>
          </Slider>
        </div>
      </div>

  )
}
