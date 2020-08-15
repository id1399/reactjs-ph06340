import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import firebase from '../../../../../firebase'

const Addproduct = ({ onAdd, categories }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    // const [valueInput, setValueInput] = useState({});
    // const onHandleChange = (e) => {
    //     const { name, value } = e.target;
    //     setValueInput({
    //         ...valueInput,
    //         [name]: value
    //     })
    // }
    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo folder chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        let uploadTask = storageRef.put(file);

        // thực hiện việc đầy ảnh lên firebase
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);

        // lấy ảnh từ Firebase
        firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
            // Tạo object mới chứa toàn bộ thông tin từ input
            let num = Math.random();
            let n = num.toString()
            const newData = {
                id: n.substr(2, 9),
                ...data,
                image: url,
                statusI: 1
            }
            // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
            // console.log(newData)
            onAdd(newData)
            history.push('/admin/products')

        })
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Errors</h6>
                </div>
                <div className="card-body">
                    <div className="err" style={{ color: 'red', fontWeight: 600, display: 'grid' }}>
                        {errors.name && errors.name.type === "required" && <span>Bạn hãy nhập Name</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Nhập 5 ký tự trở lên</span>}
                        {errors.image && errors.image.type === "required" && <span>Bạn hãy thêm ảnh</span>}
                        {errors.price && errors.price.type === "required" && <span>Bạn hãy nhập giá</span>}
                        {errors.priceSale && errors.priceSale.type === "required" && <span>Bạn hãy nhập giá Sale</span>}
                        {errors.shortDes && errors.shortDes.type === "required" && <span>Bạn hãy nhập miêu tả ngắn</span>}
                        {errors.des && errors.des.type === "required" && <span>Bạn hãy nhập miêu tả</span>}
                    </div>
                </div>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ADD Product</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Category</label>
                            <select name="cateId" className="form-control" ref={register}>
                                {categories.map((cate, index) => (
                                    <option key={index} value={cate.id}
                                        selected={cate.id == 1}
                                    >{cate.name}</option>
                                ))}
                            </select>
                        </div>
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
                                        ref={register}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Price</label>
                            <input type="number" className="form-control" name="price" id="exampleInputPrice" placeholder="Price" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Price Sale</label>
                            <input type="number" className="form-control" name="priceSale" id="exampleInputPrice" placeholder="Price Sale" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Short desc</label>
                            <input type="text" className="form-control" name="shortDes" id="exampleInputPrice" placeholder="Short Desc" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Desc</label>
                            <textarea class="form-control" name="des" rows="5" id="comment" ref={register({ required: true })}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproduct
