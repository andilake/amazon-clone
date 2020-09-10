import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Checkout() {
    const[{ basket, user }, dispatch] =useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                
                <div>
                    <h3>{user ? 'Hi ' + user?.email + '!' : 'Hello Guest'}</h3>
                    <div className="checkout__title">
                        <h2>Shopping Cart</h2>
                        <small>Price</small>
                    </div>
                
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                
                
                <CurrencyFormat renderText={(value) => (
                    <>
                        <p className="checkout__subtotal">{basket?.length==0 ? "Your shopping cart is empty" : 'Subtotal (' + basket?.length + ' items): ' + value}</p>
                    </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
