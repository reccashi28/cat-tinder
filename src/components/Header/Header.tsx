import React from 'react'
import logo from '../../assets/Logo.svg'
function Header() {
    return (
        <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
            <div>
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Header
