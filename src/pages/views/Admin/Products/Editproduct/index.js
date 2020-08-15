import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import firebase from '../../../../../firebase'


const Editproduct = ({ products, onUpdate, categories, status }) => {
    const { register, handleSubmit, errors } = useForm();

    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);

    const [currentProduct, setCurrentProduct] = useState(product);
    let imageC = currentProduct.image
    const onHandleSubmit = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        let uploadTask = storageRef.put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
        // firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {})
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                if (url) {
                    const newData = {
                        id,
                        ...data,
                        image: url
                    }
                    onUpdate(newData)
                }
            })
        })
        // onUpdate(newData)
        history.push('/admin/products');
    }
    // const onHandleChange = e => {
    //     const { name, value } = e.target;
    //     setCurrentProduct({
    //         ...currentProduct,
    //         [name]: value
    //     })
    // }
    return (
        <div>
            <div className="err" style={{ color: 'red', fontWeight: 600, display: 'grid' }}>
                {errors.name && errors.name.type === "required" && <span>Bạn hãy nhập Name</span>}
                {errors.name && errors.name.type === "minLength" && <span>Nhập 5 ký tự trở lên</span>}
                {errors.image && errors.image.type === "required" && <span>Bạn hãy thêm ảnh</span>}
                {errors.price && errors.price.type === "required" && <span>Bạn hãy nhập giá</span>}
                {errors.priceSale && errors.priceSale.type === "required" && <span>Bạn hãy nhập giá Sale</span>}
                {errors.shortDes && errors.shortDes.type === "required" && <span>Bạn hãy nhập miêu tả ngắn</span>}
                {errors.des && errors.des.type === "required" && <span>Bạn hãy nhập miêu tả</span>}
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Edit Product</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Category</label>
                            <select name="cateId" className="form-control" ref={register} >
                                {categories.map((cate, index) => (
                                    <option key={index} value={cate.id}
                                        selected={cate.id == currentProduct.cateId}
                                    >{cate.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Name</label>
                            <input type="text" className="form-control" name="name" id="exampleInputName" defaultValue={currentProduct.name} ref={register({ required: true, minLength: 5 })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" ref={register} className="custom-file-input" id="inputGroupFile02"
                                        name="image"
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Price</label>
                            <input type="number" className="form-control" name="price" id="exampleInputPrice" defaultValue={currentProduct.price} ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Price Sale</label>
                            <input type="number" className="form-control" name="priceSale" id="exampleInputPrice" defaultValue={currentProduct.priceSale} ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Short desc</label>
                            <input type="text" className="form-control" name="shortDes" id="exampleInputPrice" defaultValue={currentProduct.shortDes} ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Status</label>
                            <select name="statusI" className="form-control" ref={register}>
                                {status.map((stt, index) => (
                                    <option key={index} value={stt.id}
                                        selected={stt.id == currentProduct.statusI}
                                    >{stt.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Desc</label>
                            <textarea class="form-control" name="des" rows="5" id="comment" defaultValue={currentProduct.des} ref={register({ required: true })}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

Editproduct.propTypes = {
    products: PropTypes.array
}

export default Editproduct
