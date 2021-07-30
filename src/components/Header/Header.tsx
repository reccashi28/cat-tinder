import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../assets/Logo.svg'
import { AppState } from '../../types'

function Header() {
    const { categorySelected } = useSelector( (state: AppState) => state.cats)

    return (
        <div style={{height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px'}}>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                {categorySelected ? <h5>{">"}{categorySelected}</h5> : ""}
            </div>
        </div>
    )
}

export default Header
