import axios from 'axios'
import React, { useContext, useEffect} from 'react'
import { ecommercecontext } from '../App'

function Product() {

    const {product , setProducts , cart ,setCart} = useContext(ecommercecontext)

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((result) => {
            // console.log(result)
            setProducts(result.data.products)
        })
    }, [])
    // console.log(product)

    function carthandler(element){
        setCart([...cart,element])
        localStorage.setItem('setcart',JSON.stringify(cart))
    }
    // console.log(cart)

    return (
        <div className='apidata'>
            {
                product.map((element , index)=>{
                    return(
                        <div className='dataset' key={index}>
                            <img src={element.images[0]} alt='thumbnail'></img>
                            <h2>{element.title}</h2>
                            <h2>Price : {element.price}/-</h2>
                            <h3>Category : {element.category}</h3>
                            <h3>Rating : {element.rating}</h3>
                            <h3>Stock : {element.stock}</h3>
                            <p>{element.description}</p>
                            <a href='' onClick={(e)=>{e.preventDefault();carthandler(element)}}>Add To Cart</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product