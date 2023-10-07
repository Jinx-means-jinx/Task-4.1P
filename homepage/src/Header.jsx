import React from 'react'   
import './Header.css'   

function Header(props)
{
    return<div className='header-div'><h1>DevLink Marketplace</h1> 
    <h4>
    <a className='firstLink' href="#"> Find DEV</a>
    <a className='secondLink' href="#"> Find Jobs</a>
    <a className='thirdLink' href="#"> Login</a>
    <a className='fourthLink' href="#"> Create Account</a>
    </h4> 
   
 
    </div>
}

export default Header