import React, { Fragment } from 'react'
import { NavLink,  Outlet} from 'react-router-dom'
import logo from './assets/shared/desktop/logo.svg'

// Components Imports
import ToggleBtn from './Components/ToggleBtn'

export default function RootLayout() {
  return (
    <Fragment>
    <header className=' px-[2.4rem] md:px-[3.9rem] lg:px-[16.5rem] py-[1.6rem]'>
        <nav className='flex justify-between items-center'>
            <NavLink to={'/'}><img src={logo} alt="Photosnap Logo" className='w-[17rem] '/></NavLink>
            <div className='md:flex justify-between w-[26.9rem] hidden items-center'>
            <NavLink className={`nav-items`} to={'stories'}>stories</NavLink>
            <NavLink className={`nav-items`} to={'features'}>features</NavLink>
            <NavLink className={`nav-items`} to={'pricing'}>pricing</NavLink>
            </div>
            <div>
            <NavLink to={'/'} className={`btn bg-black text-white btn_default hidden md:flex `}>get an invite</NavLink>
            <ToggleBtn/>
            </div>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    </Fragment>
  )
}
