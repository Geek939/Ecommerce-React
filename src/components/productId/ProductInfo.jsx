import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
import "./styles/Productinfo.css"


const positionImages = ["first", "second", "third"]

const ProductInfo = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    const [currentImage, setCurrentImage] = useState(0)

    const dispatch = useDispatch()

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    
    const handleLess = () => {
        const newValue = quantity - 1
        if(newValue>=1){
            setQuantity(newValue)
        }
    }

    const handleAddProduct = () =>{
        const data={
            id: product.id,
            quantity: quantity
        }
        dispatch(addProductCart(data))

    }

    const handleClickLeft = () => {
        const newValue = currentImage - 1
        if (newValue >= 0){
            setCurrentImage(newValue)
        } 
        else 
        {
            setCurrentImage(positionImages.lenght - 1)
        }
    }

    const handleClickRight = () => {
        const newValue = currentImage + 1
        if (newValue <= 2){
            setCurrentImage(newValue)
        } 
        else
        {
            setCurrentImage(0)
        }

    }




  return (
    <article className='productInfo'>
        <div className='productInfo__slider'>
            <div className={`productInfo__slider-container ${positionImages[currentImage]}`}>
            <img src={product?.productImgs[0]} alt="" />
            <img src={product?.productImgs[1]} alt="" />
            <img src={product?.productImgs[2]} alt="" />
        </div>
        <i onClick={handleClickLeft}  class='productInfo__slider-arrowLeft bx bxs-left-arrow'></i>
        <i onClick={handleClickRight} class='productInfo__slider-arrowRight bx bxs-right-arrow'></i>
        </div>
        <div>
        <h2 className='productInfo__title'>{product?.title}</h2>
        <p className='pruductInfo__description'>{product?.description}</p>
        <footer className='productInfo__footer'>
            <div className='productInfo__container-price'>
                <h3 className='productInfo__price-title'>Price</h3>
                <span className='productInfo__price'>{product?.price}</span>
            </div>
        
            <div className='productInfo__container-quantity'>
                <h3 className='productInfo__quantity-title'>Quantity</h3>
                <div className='productInfo__container-counter'>
                    <div className='productInfo__minus' onClick={handleLess}>-</div>
                    <div className='productInfo__counter'>{quantity}</div>
                    <div className='productInfo__plus' onClick={handlePlus}>+</div>
                </div>
            </div>
            <button onClick={handleAddProduct} className='productInfo__btn'>Add to cart  <i className='bx bx-cart'></i></button>
        </footer>
        </div>
    </article>
  )
}

export default ProductInfo