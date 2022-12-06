import { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { ProductDetails } from "../components/ProductDetails";
import { ModalContext } from "../context/ModalContext";
import { useProduct } from "../hooks/products";
import { Iproduct, ProductProps } from "../models";
import { Product } from "../components/Product";

export function FindProductId(productId: number, products: Iproduct[]): Iproduct {
    const pr: Iproduct = {
        id: productId,
        title: 'undefined',
        price: productId,
        description: 'undefined',
        category: 'undefined',
        image: 'undefined',
        rating: {
            rate: productId,
            count: productId
        }
    };
    let result: Iproduct = pr;

    products.forEach((e) => {
        if (e.id == productId)
            result = e

    })
    return result
}


export function ProductDetailsPage() {
    const { products, loading, error } = useProduct()
    const params = useParams();
    const productId = parseInt(String(params.id?.slice(1)))
    const product: Iproduct = FindProductId(productId, products);

    return <>
        <div className="containerDetails">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {/* <p>{productId}</p> */}
            <ProductDetails product={product} key={productId} />
        </div>
    </>
}