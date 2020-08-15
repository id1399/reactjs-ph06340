import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'

const DetailProduct = ({ products }) => {
    let { id } = useParams();
    const product = products.filter(product => product.id === id)
    return (
        <div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div></div>
            {/* ##### Single Product Details Area Start ##### */}
            {product.map((pr, index) => (
                <section key={index} className="single_product_details_area d-flex align-items-center">
                    {/* Single Product Thumb */}

                    <div className="single_product_thumb clearfix">
                        <div className="">
                            <img src={pr.image} alt="" />
                        </div>
                    </div>
                    <div className="single_product_desc clearfix">
                        <span>{pr.shortDes}</span>
                        <a href="cart.html">
                            <h2>{pr.name}</h2>
                        </a>
                        <p className="product-price"><span className="old-price">${pr.price}</span> ${pr.priceSale}</p>
                        <p className="product-desc">{pr.des}</p>
                        {/* Form */}
                        <form className="cart-form clearfix" method="post">
                            {/* Select Box */}
                            <div className="select-box d-flex mt-50 mb-30">
                                <select name="select" id="productSize" className="mr-5">
                                    <option value="value">Size: XL</option>
                                    <option value="value">Size: X</option>
                                    <option value="value">Size: M</option>
                                    <option value="value">Size: S</option>
                                </select>
                                <select name="select" id="productColor">
                                    <option value="value">Color: Black</option>
                                    <option value="value">Color: White</option>
                                    <option value="value">Color: Red</option>
                                    <option value="value">Color: Purple</option>
                                </select>
                            </div>
                            {/* Cart & Favourite Box */}
                            <div className="cart-fav-box d-flex align-items-center">
                                {/* Cart */}
                                <button type="submit" name="addtocart" value={5} className="btn essence-btn btn-primary">Add to cart</button>
                                {/* Favourite */}
                                <div className="product-favourite ml-4">
                                    <a href="#" className="favme fa fa-heart" />
                                </div>
                            </div>
                        </form>
                    </div>


                </section>))}
            {/* ##### Single Product Details Area End ##### */}
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
