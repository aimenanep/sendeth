import React from 'react'
import logo from "../assets/img/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { InvertColors } from '@mui/icons-material';




export default function Navbar() {
  return (
    
        <nav className='flex p-4 bg-[#242526]'>
            <div className="flex ">
                <img  src={logo} className="w-[190px]" style={{filter:"invert(1)"}}/>
            </div>
            <div className='grow flex items-center justify-right md:justify-center'>
                    <ul className="inline-flex gap-4">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Portfolio</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                    
            </div>
            <div className="flex items-center">
                <div className="relative mx-4">
                        <SearchIcon className="absolute inset-y-1/2 left-1" style={{transform:"translateY(-50%)"}}/>
                        <input type="text" className='rounded-lg bg-[#42414d] p-1 pl-8' />
                        
                    </div>
                <ShoppingCartIcon />
            </div>
        </nav>    
  )
}
