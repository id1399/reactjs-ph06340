import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CateManager = ({ categories, products, onRemoveC }) => {
    const [count, setCount] = useState(0)
    const removeCate = (id) => {
        onRemoveC(id)
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Des</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name, image, des }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{
                                            index + 1
                                        }</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{des}</td>
                                        <td>1
                                        </td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/category/${id}`}>Edit</Link>
                                            <button className="btn btn-danger" onClick={() => {
                                                if (window.confirm("Delete the item?")) {
                                                    removeCate(id)
                                                }
                                            }
                                            } >Xóa</button>
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

CateManager.propTypes = {

}

export default CateManager
