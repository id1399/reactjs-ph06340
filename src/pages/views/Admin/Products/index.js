import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const ProductsManager = ({ products, categories, status, onRemove, search }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
    const [serach, setSearch] = useState()
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" name="serach" ref={register} />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"><span>Action</span>
                                        <button className="ml-2 btn btn-danger"
                                        >Remove All</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{
                                            categories.map((cate, index) => (
                                                <div key={index} >{product.cateId === cate.id &&
                                                    <div>{cate.name}</div>
                                                }</div>
                                            ))
                                        }</td>
                                        <td>{product.name}</td>
                                        <td><img src={product.image} alt="" width="50" /></td>
                                        <td>${product.priceSale}</td>
                                        <td>{
                                            status.map((stt, index) => (
                                                <div key={index} >{product.statusI == stt.id &&
                                                    <div>{stt.name}</div>
                                                }</div>
                                            ))
                                        }</td>
                                        <td>
                                            <Link className="btn btn-info" to={`/admin/View-product/${product.id}`}>Detail</Link>
                                            <Link className="btn btn-primary" to={`/admin/product/${product.id}`}>Edit</Link>
                                            <button className="btn btn-danger" onClick={() => {
                                                if (window.confirm("Delete the item?")) {
                                                    removeHandle(product.id)
                                                }
                                            }
                                            }>Del</button>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
