import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'

const Shop = ({ products, categories }) => {
    let { id } = useParams();
    console.log(id)
    return (
        <div>
            <div>ádasda</div>
            <div>ádasda</div>
            <div>ádasda</div>
            <div className="breadcumb_area bg-img" style={{ backgroundImage: 'url(img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>dresses</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="shop_grid_area section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="shop_sidebar_area">
                                <div className="widget catagory mb-50">
                                    <h6 className="widget-title mb-30">Catagories</h6>
                                    <div className="catagories-menu">
                                        <ul id="menu-content2" className="menu-content collapse show">
                                            {/* Single Item */}
                                            {categories.map(({ id, name }, index) => (
                                                <li data-toggle="collapse" key={index} data-target="#shoes" className="collapsed">
                                                    <Link to={`/shopp/${id}`}>{name}</Link>
                                                </li>
                                            ))}
                                            {/* end Single Item */}
                                        </ul>
                                    </div>
                                </div>
                                {/* ##### Single Widget ##### */}
                                <div className="widget price mb-50">
                                    {/* Widget Title */}
                                    <h6 className="widget-title mb-30">Filter by</h6>
                                    {/* Widget Title 2 */}
                                    <p className="widget-title2 mb-30">Price</p>
                                    <div className="widget-desc">
                                        <div className="slider-range">
                                            <div data-min={49} data-max={360} data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min={49} data-value-max={360} data-label-result="Range:">
                                                <div className="ui-slider-range ui-widget-header ui-corner-all" />
                                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                            </div>
                                            <div className="range-price">Range: $49.00 - $360.00</div>
                                        </div>
                                    </div>
                                </div>
                                {/* ##### Single Widget ##### */}
                                <div className="widget color mb-50">
                                    {/* Widget Title 2 */}
                                    <p className="widget-title2 mb-30">Color</p>
                                    <div className="widget-desc">
                                        <ul className="d-flex">
                                            <li><a href="#" className="color1" /></li>
                                            <li><a href="#" className="color2" /></li>
                                            <li><a href="#" className="color3" /></li>
                                            <li><a href="#" className="color4" /></li>
                                            <li><a href="#" className="color5" /></li>
                                            <li><a href="#" className="color6" /></li>
                                            <li><a href="#" className="color7" /></li>
                                            <li><a href="#" className="color8" /></li>
                                            <li><a href="#" className="color9" /></li>
                                            <li><a href="#" className="color10" /></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* ##### Single Widget ##### */}
                                <div className="widget brands mb-50">
                                    {/* Widget Title 2 */}
                                    <p className="widget-title2 mb-30">Brands</p>
                                    <div className="widget-desc">
                                        <ul>
                                            <li><a href="#">Asos</a></li>
                                            <li><a href="#">Mango</a></li>
                                            <li><a href="#">River Island</a></li>
                                            <li><a href="#">Topshop</a></li>
                                            <li><a href="#">Zara</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="shop_grid_product_area">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="product-topbar d-flex align-items-center justify-content-between">
                                            {/* Total Products */}
                                            <div className="total-products">
                                                <p><span>186</span> products found</p>
                                            </div>
                                            {/* Sorting */}
                                            <div className="product-sorting d-flex">
                                                <p>Sort by:</p>
                                                <form action="#" method="get">
                                                    <select name="select" id="sortByselect">
                                                        <option value="value">Highest Rated</option>
                                                        <option value="value">Newest</option>
                                                        <option value="value">Price: $$ - $</option>
                                                        <option value="value">Price: $ - $$</option>
                                                    </select>
                                                    <input type="submit" className="d-none" defaultValue />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {products.map((product, index) => (
                                        <div key={index} className="col-12 col-sm-6 col-lg-4">
                                            <div className="single-product-wrapper">
                                                {/* Product Image */}
                                                <Link className="product-img" to={`/product-detail/${product.id}`} >
                                                    <img src={product.image} alt="" />
                                                    {/* Hover Thumb */}
                                                    {/* <img className="hover-img" src="img/product-img/product-1.jpg" alt="" /> */}
                                                    {/* Favourite */}
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart" />
                                                    </div>
                                                </Link>
                                                {/* Product Description */}
                                                <div className="product-description">
                                                    <span>topshop</span>
                                                    <a href="single-product-details.html">
                                                        <h6>{product.name}</h6>
                                                    </a>
                                                    <p className="product-price">$<del>{product.price}</del></p>
                                                    <p className="product-price">${product.priceSale}</p>
                                                    {/* Hover Content */}
                                                    <div className="hover-content">
                                                        {/* Add to Cart */}
                                                        <div className="add-to-cart-btn">
                                                            <a href="#" className="btn essence-btn btn-primary">Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>
                            {/* Pagination */}
                            <nav aria-label="navigation">
                                <ul className="pagination mt-50 mb-70">
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left" /></a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">21</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* ##### Shop Grid Area End ##### */}
        </div>
    )
}

Shop.propTypes = {

}

export default Shop
