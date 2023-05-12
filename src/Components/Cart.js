import React, { useContext } from 'react'
import { ecommercecontext } from '../App'

function Cart() {

    const {cart} = useContext(ecommercecontext)
   

  return (
    <div className='cartone'>
        {
            cart.map((item , index)=>{
                return(
                    <div className='cartset' key={index}>
                        <img src={item.images[0]}></img>
                        <h3>{item.title}</h3>
                        <h3>Price : {item.price}</h3>
                        <h3>Rate : {item.rating}</h3>
                        <h3>Category : {item.category}</h3>
                        <h3>Stock : {item.stock}</h3>
                        <p>{item.description}</p>

                    </div>
                )
            })
        }
    </div>
  )
}

export default Cart