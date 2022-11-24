import { useContext, useState } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
// import {products} from "./data/products"
import { useProduct } from "../hooks/products";
import { Iproduct } from "../models";

export function ProductPage(){
    const { products, loading, error, addProduct } = useProduct()
  const { modal, open, close } = useContext(ModalContext)
  const createHandler = (product: Iproduct) => {
    close()
    addProduct(product)
  }

  return <div className="container">
    <button onClick={() => open()}>Add new product </button>
    {modal && <Modal title="Create new product" onClose={() => close()}>
      <CreateProduct onCreate={createHandler} />
    </Modal>}
    {loading && <Loader />}
    {error && <ErrorMessage error={error} />}
    {products.map(prod => <Product product={prod} key={prod.id} />)}
  </div>
}