import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
    const [productsData, setProductsData] = useState([])
    
    axios
    .get("https://fakestoreapi.com/products")
    .then((response)=>{
        let data = response.data;
        setProductsData(data);
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
    
  return (
    <div>
        <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto p-10">
            {
                productsData.map((product)=>{
                    return(
                        <div key={product.id} className=" p-4 rounded-lg shadow-xl border hover:border-gray-200">
                            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4"/>
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-700 mb-2">${product.price}</p>
                            <p className="text-gray-600 text-sm">{product.category}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home
