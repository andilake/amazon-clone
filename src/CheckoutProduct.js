import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({ id, image, title, price, rating, hideButton}) {
    const [ { basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () =>
    {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=""/>

            <div className='checkoutProduct__info'>
                <div className='checkoutProduct_info_title'>
                    <p className='checkoutProduct__title'>{title}</p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (<p>⭐</p>))
                    }
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
                </div>
        </div>
    )
}

export default CheckoutProduct
