import React from 'react'
import { useCart } from '../context/CartContext'
const InCartCard = ({image, price, title, id, count, desc}) => {
    const {removeItem, decrementBook, incrementBook} = useCart()
  return (
    <div>
        <div className="card mb-3" style={{maxWidth: "720px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} alt="" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-around h-100">
                        <div>
                            <h5 className="card-title">
                                {title}
                            </h5>
                            <p className="card-text">Price: ${price}</p>                            
                            <p className="card-text">{desc}</p>                            
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-danger' onClick={()=>removeItem(id)}>delete</button>
                            <div className='d-flex gap-2 align-items-center'>
                                <button className="btn btn-outline-danger" onClick={()=>decrementBook(id)}>-</button>
                                <p>{count}</p>
                                <button className="btn btn-outline-secondary" onClick={()=>incrementBook(id)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InCartCard