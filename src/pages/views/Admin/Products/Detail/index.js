import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Detail = ({ products }) => {
    let { id } = useParams();
    const product = products.find(product => product.id === id);

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Product Detail</h6>
                </div>
                <div className="card-body">
                    <div style={{ width: 900 }}>
                        <div className="float-left" style={{ width: 200 }}><img src={product.image} alt="" width={200} /></div>
                        <div className="float-left ml-30" style={{ width: 600 }}>
                            <p style={{ fontWeight: 600, fontSize: 30 }}>{product.name}</p>
                            <p style={{ color: 'red', fontSize: 20 }}><del>${product.price}</del></p>
                            <p style={{ color: 'red', fontSize: 20 }}>${product.priceSale}</p>
                            <p style={{ fontSize: 15 }}>{product.shortDes}</p>
                            <p style={{ fontSize: 15 }}>{product.des}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Detail.propTypes = {

}

export default Detail
