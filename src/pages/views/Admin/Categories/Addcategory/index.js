import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import firebase from './../../../../../firebase'
import $ from 'jquery'

const Addcategory = ({ onAddc }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onHandleSubmit = (data) => {
        //upload
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        let uploadTask = storageRef.put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
        // firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {})
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                let num = Math.random();
                let n = num.toString()
                const newData = {
                    id: n.substr(2, 9),
                    ...data,
                    image: url
                }
                // console.log(newData)
                onAddc(newData)
                history.push('/admin/categories')
            })
        })
    }
    return (
        <div>
            <div className="err" style={{ color: 'red', fontWeight: 600, display: 'grid' }}>
                {errors.name && errors.name.type === "required" && <span>Bạn hãy nhập Name</span>}
                {errors.name && errors.name.type === "minLength" && <span>Nhập 5 ký tự trở lên</span>}
                {errors.image && errors.image.type === "required" && <span>Bạn hãy thêm ảnh</span>}
                {errors.desc && errors.desc.type === "required" && <span>Bạn hãy thêm ảnh</span>}
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ADD Product</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Name</label>
                            <input type="text" className="form-control" name="name" id="exampleInputName" placeholder="Name" ref={register({ required: true, minLength: 5 })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile02"
                                        name="image"
                                        ref={register({ required: true })}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Desc</label>
                            <input type="text" className="form-control" name="des" id="exampleInputPrice" placeholder="Desc" ref={register({ required: true })} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addcategory
