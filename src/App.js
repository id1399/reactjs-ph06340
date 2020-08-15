import React, { useState, useEffect } from 'react';
import Routers from './routers'
import apiRequest from './api/productApi';
import apiCate from './api/categoryApi';
import apiStt from './api/statusApi';

// import AddProduct from './components/AddProduct';
function App() {

  const [products, setProducts] = useState([apiRequest]);
  const [categories, setCates] = useState([apiCate]);
  const [status, setStatus] = useState([apiStt]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    const getCates = async () => {
      try {
        const { data } = await apiCate.getAll();
        setCates(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    const getStt = async () => {
      try {
        const { data } = await apiStt.getAll();
        setStatus(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
    getCates();
    getStt();
  },
    []);

  //Product
  const onHandleRemove = async (id) => {
    try {
      apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleUpdate = (updateProduct) => {
    const resporn = apiRequest.update(updateProduct.id, updateProduct);
    const newProducts = products.map(product => (
      product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts)
  }
  //Search

  //Category 
  // Remove
  const removeCate = async (id) => {
    try {
      const { data } = await apiCate.remove(id);
      const newCates = categories.filter(category => category.id !== id);
      if (window.confirm("Delete the item?")) {
        setCates(newCates);
      }

    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Thêm 
  const handleAddc = async (category) => {
    try {
      const { data } = await apiCate.create(category)
      setCates([
        ...categories,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  //Update Category
  const updateCate = (updateCategory) => {
    const newCates = categories.map(cate => (
      cate.id === updateCategory.id ? updateCategory : cate
    ));
    localStorage.setItem('categories', JSON.stringify(newCates))
    setCates(newCates)
  }

  return (
    <div className="App">
      <Routers
        products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate}
        categories={categories} onRemoveC={removeCate} onAddc={handleAddc} onUpdateC={updateCate}
        status={status}
      />
    </div>
  )

}
export default App;