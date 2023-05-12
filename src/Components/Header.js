import React, { useContext } from 'react';
import { ecommercecontext } from '../App';
import { Link } from 'react-router-dom';


function Header() {

    const { cart } = useContext(ecommercecontext)
    let data = JSON.parse(localStorage.getItem("setcart"))
    
    return (
        <div className='conhead'>
            <div className='conleft'>
                <h3>Shopping Cart</h3>
            </div>
            <div className='conright'>
                <Link to={'./login'}><h3>Login</h3></Link>
                <Link to={'/cart'}><h3>Cart<span>{cart.length}</span></h3></Link>
            </div>
        </div>
    )
}

export default Header