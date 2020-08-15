import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
// import About from '../pages/views/Main/Blog'
import Home from '../pages/views/Main/Home'
import Addproduct from '../pages/views/Admin/Products/Addproduct';
import Shop from '../pages/views/Main/Shop';
import Editproduct from '../pages/views/Admin/Products/Editproduct';
import CateManager from '../pages/views/Admin/Categories';
import Addcategory from '../pages/views/Admin/Categories/Addcategory';
import Editcategory from '../pages/views/Admin/Categories/Editcategory';
import Detail from '../pages/views/Admin/Products/Detail';
import ShopD from '../pages/views/Main/Shop/shop';
import DetailProduct from '../pages/views/Main/DetailShop';
import Blog from '../pages/views/Main/Blog';
//datafake



const Routers = ({
    products, onRemove, onAdd, onUpdate,
    categories, onRemoveC, onAddc, onUpdateC,
    status
}) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager
                                    products={products}
                                    status={status}
                                    categories={categories} onRemove={onRemove}
                                />
                            </Route>
                            <Route path='/admin/product/add'>
                                <Addproduct onAdd={onAdd} categories={categories} />
                            </Route>
                            <Route path='/admin/product/:id'>
                                <Editproduct status={status} products={products} categories={categories} onUpdate={onUpdate} />
                            </Route>
                            <Route path='/admin/View-product/:id'>
                                <Detail products={products} />
                            </Route>
                            <Route path='/admin/categories'>
                                <CateManager categories={categories} onRemoveC={onRemoveC} products={products} />
                            </Route>
                            <Route path='/admin/category/add'>
                                <Addcategory onAddc={onAddc} />
                            </Route>
                            <Route path='/admin/category/:id'>
                                <Editcategory categories={categories} onUpdateC={onUpdateC} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            {/* <Route path="/about">
                                <About />
                            </Route> */}
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/shop">
                                <Shop products={products} categories={categories} />
                            </Route>
                            <Route path="/shopp/:id">
                                <ShopD products={products} categories={categories} />
                            </Route>
                            <Route path="/product-detail/:id">
                                <DetailProduct products={products} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
