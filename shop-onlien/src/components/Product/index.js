import {useEffect, useState} from "react";
import {getProductList} from "../../service/productService";
import "./Product.scss"
import ProductItem from "./ProductItem";
function Product(){
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchApi = async ()=> {
            const result = await getProductList();
            setProduct(result);
        }
        fetchApi();
    }, []);

    return(
        <>
            <div className="product">
                {product.map(item => (
                   <ProductItem   item={item}  key={item.id}  />
                ))}

            </div>
        </>
    )
}
export default Product;