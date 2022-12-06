import { useState } from "react"
import { Iproduct, ProductProps } from "../models"
import { Link } from 'react-router-dom'


export function PathGenerate(id:number):string{
    return ('/productDetails:'+ id)
    }

export function Product({ product }: ProductProps) {
    // const [details, setDetails] = useState(false)

    // const btnBg = details ? 'btnHide' : 'btnShow'
    return (
        <div className="product">
            <Link to={PathGenerate(product.id)} className='toProductDetailsLink'>
            <img src={product.image} alt={product.title} />
            <p className="productTitle" >{product.title}</p>
            <p>{product.price}$</p>
            <p className="productRate">Rate: <span>{product.rating?.rate}</span></p>
            {/* <button
                className={btnBg}
                onClick={() => setDetails(state => !state)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details &&
                <div>{product.description}
                </div>
            } */}
            </Link>
        </div>
    )
}