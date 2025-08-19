import { RiCloseFill, RiMenuFill } from '@remixicon/react'
import React, { useEffect, useRef, useState } from 'react'
import { navItems } from '../constant/data'
const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const headerRef = useRef(null)

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 100) { 
                headerRef.current.classList.add('active')
            }else{
                headerRef.current.classList.remove('active')
            }

        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
  return (
    <header className='header' ref={headerRef}>
        <div className="container relative flex justify-between items-center">
                <a href="#">
                    <img src="/images/Logo.png" alt="logo" width={115} height={59} />
                </a>

            {/* Mobile Menu */}
            <div className={`navbar ${isOpen ? 'active' : ''}`}>
                <button onClick={handleClick} className='ml-auto mb-10'>
                <RiCloseFill size={30} /> 
                </button>
                <ul className="flex flex-col justify-center items-center gap-10 h-full">
                    {navItems.map((item)=>(
                        <li key={item.id}>
                            <a href={item.href} className='hover:text-sky-600 transition-colors font-medium text-lg'>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <a href="#" className="secondary-btn mt-auto">Get Started</a>
            </div>
            {/* menu toggle */}
            <button onClick={handleClick} className="md:hidden">
                     <RiMenuFill size={30} color='white' />
            </button>
            {/* lg menu */}
            <ul className="hidden md:flex md:items-center md:justify-center gap-10">
                {navItems.map((item)=>(
                    <li key={item.id}>
                        <a href={item.href} className='text-lg font-semibold hover:text-neutral-300 transition-colors duration-300'>{item.label}</a>
                    </li>
                ))}
                <a href="#" className="primary-btn">Get Started</a>
            </ul>
            {/* overlay */}
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={handleClick}></div>
        </div>
    </header>
  )
}

export default Header