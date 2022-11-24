import { useState } from "react"
import { Iproduct } from "../models"

interface ProductProps {
    product: Iproduct
}
export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnBg = details ? 'btnHide' : 'btnShow'
    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <p style={{fontSize: '18px', fontWeight: 'bold'}}>{product.title}</p>
            <p>{product.price}</p>
            <button
            className={btnBg}
                onClick={() => setDetails(state => !state)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && 
            <div>{product.description}
            <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating?.rate}</span></p>
            </div>
            }
        </div>
    )
}