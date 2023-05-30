import React, { Fragment } from 'react'
import { NavLink,  Outlet} from 'react-router-dom'
import logo from './assets/shared/desktop/logo.svg'

export default function RootLayout() {
  return (
    <Fragment>
    <header className=' px-[16.5rem] py-[2.8rem]'>
        <nav className='flex justify-between items-center'>
            <NavLink to={'/'}><img src={logo} alt="Photosnap Logo" className='w-[17rem] '/></NavLink>
            <div className='flex justify-between w-[26.9rem]'>
            <NavLink className={`nav-items`} to={'stories'}>stories</NavLink>
            <NavLink className={`nav-items`} to={'features'}>features</NavLink>
            <NavLink className={`nav-items`} to={'pricing'}>pricing</NavLink>
            </div>
            <div>
            <NavLink to={'/'} className={`btn bg-black text-white btn_default`}>get an invite</NavLink>
            <button className='md:hidden'>toggle</button>
            </div>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    </Fragment>
  )
}
