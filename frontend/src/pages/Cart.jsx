import React from 'react'
import API from '../api'
import { useCart } from '../context/CartContext'
import InCartCard from '../components/InCartCard'
import { useState } from 'react'

const Cart = () => {

    const {cart} = useCart()
    console.log((cart))
    const items = cart?.items || []
  return (
    <div className='mt-4 ms-3 d-flex' style={{minHeight:'100vh'}}>
        <div>
            {
                items.length ?
                cart.items.map((elem)=>{
                    return (
                    <InCartCard title={elem.book.title} price={elem.price} image={elem.book.image} id ={elem.book._id} key={elem._id} count={elem.quantity} desc={elem.book.description}></InCartCard>
                    )
                })
                :
                <div className='d-flex flex-column align-items-center vw-100'>
                    <h1>Your cart is empty</h1>
                    <p>return to home page and start shopping</p>
                </div>
            }            
        </div>

        <div className="d-flex justify-content-center w-25">
            {
                items.length > 0 &&
                <div>
                    <h3>Order Information:</h3>
                    <p className='fs-5'>titles: {items.length}</p>
                    <p className='fs-5'>total price: ${cart.total}</p>
                    <button className='btn navButton'>checkout</button>
                </div>
                 
            }
            
        </div>
        
    </div>
  )
}

export default Cart