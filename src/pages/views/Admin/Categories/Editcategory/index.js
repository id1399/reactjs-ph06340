import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import firebase from './../../../../firebase'


const Editcategory = ({ categories, onUpdateC }) => {
    const { register, handleSubmit, errors } = useForm();

    let { id } = useParams();
    let history = useHistory();
    const category = categories.find(category => category.id === id);

    const [currentCategory, setCurrentCategory] = useState(category);

    const onHandleSubmit = (data) => {
        onUpdateC(currentCategory);
        history.push('/admin/categories');
    }

    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentCategory({
            ...currentCategory,
            [name]: value
        })
    }
    return (
        <div>
            <div className="err" style={{ color: 'red', fontWeight: 600, display: 'grid' }}>
                {errors.name && errors.name.type === "required" && <span>Bạn hãy nhập Name</span>}
                {errors.name && errors.name.type === "minLength" && <span>Nhập 5 ký tự trở lên</span>}
                {errors.image && errors.image.type === "required" && <span>Bạn hãy thêm ảnh</span>}
                {errors.des && errors.des.type === "required" && <span>Bạn hãy nhập giá</span>}
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ADD Product</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Name</label>
                            <input type="text" className="form-control" name="name" id="exampleInputName" value={currentCategory.name} onChange={onHandleChange} ref={register({ required: true, minLength: 5 })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile02"
                                        name="image"
                                        ref={register}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Desc</label>
                            <input type="text" className="form-control" name="des" id="exampleInputDes" value={currentCategory.des} onChange={onHandleChange} ref={register({ required: true })} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

Editcategory.propTypes = {
}

export default Editcategory
