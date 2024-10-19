import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react'
import './productdetails.css'
import { getProductID } from '../../ApiService/api'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {

        const fetchProductDetails = async ()=>{
            
                const data = await getProductID(id);
                setProductDetails(data);
    
        };

        fetchProductDetails();
        

    },[id]);

    const handleBuyNow =() => {
      window.confirm("The product is out of stock")
    }

    
  return (
    <div className='product-details-container'>
        <img src={productDetails.image} alt='' className='product-image'/>

        <div className='product-info'>
            <h2 className='product-title'>{productDetails.title}</h2>
            <p className='product-description'>{productDetails.description}</p>
            <p className='product-price'>${productDetails.price}</p>
                <button className='buy-now-btn' onClick={handleBuyNow}>Buy Now</button>
                <Link to='/' className='back-button'>
                <button className='go-back-btn'>Go back Home</button>
                </Link>
                
        </div>


    </div>
  )
}
export default ProductDetails