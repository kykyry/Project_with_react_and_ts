import { useContext, useState } from "react";
import { useProduct } from "../hooks/products";
import { Iproduct, ProductProps } from "../models";


// function FindProductId<Iproduct>(productId: number): any {
//     const { products } = useProduct()
//     console.log(productId, products)
//     products.forEach((e) => {
//         console.log(e);

//         if (e.id == productId) {
//             console.log("yeho");
//             return e
//         }
//         else

//             console.log(e.id, productId)
//     })
//     { products.map(prod => console.log(prod)) }

//     products.map((e) => {
//         console.log(e);

//         if (e.id == productId) {
//             console.log("yeho");
//             return e
//         }
//         else

//             console.log(e.id, productId)
//     })
//     console.log('blin')
    
// }

export function ProductDetails({ product }: ProductProps) {
    
    const [details, setDetails] = useState(false)
    // const product:Iproduct = FindProductId(productId);

    const btnBg = details ? 'btnDetailsHide' : 'btnDetailsShow'

    return (
        <div className="productDetails">
            <div>
                <img src={product.image} alt={product.title} />
            </div><div className="productDetailsInfo">
                <p className="productDetailsTitle" >{product.title}</p>
                <p>Price: {product.price}$</p>
                <p>Category: {product.category}</p>
                <p className="productDetailsRate">Rate: {product.rating?.rate}</p>
                <button
                    className={btnBg}
                    onClick={() => setDetails(state => !state)}>
                    {details ? 'Hide Details' : 'Show Details'}
                </button>
                {details &&
                    <div>{product.description}
                    </div>
                }
            </div>
        </div>
    )
}