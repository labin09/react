import React from "react";
import product from "./data/product";
import featureProducts from "./data/featureProducts";


function Products(){
    let data ={
        title:"Products",
    };
    return(
        <>
        <h1>{data.title}</h1>
            <h3>featured products</h3>
            <ul className="aalu">
                {
                featureProducts.map(el=>{
                    return <li className="product">
                        <img src={el.thumbnail} />
                        <span className="badge">{el.category}</span>
                        <p>{el.title}</p>
                        <p>${el.price}</p>
                    </li>
                })
                }
                </ul>
<h3>All Products</h3>
        <ul className="p2">
        {product.map((el)=>{
            return <li className="products" key={el.id}>
<img src={el.thumbnail} />
<span className="badge1">{el.category}</span>
<p>{el.title}</p>
<p>${el.price}</p>

            </li>;
        })}
    </ul>        
        </>
    );
}
export default Products;