import React from 'react';
import Product from "./Product"
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg" alt="Home"/>
            
                <div className="home__row">
                    <Product id="0012" title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray" image="https://images-na.ssl-images-amazon.com/images/I/71Ha06XS-VL._AC_SL1500_.jpg" price={349.99} rating={5} />
                    <Product id="0013" title="HyperX Cloud Flight - Wireless Gaming Headset" image="https://images-na.ssl-images-amazon.com/images/I/71ap89elAuL._AC_SL1428_.jpg" price={139.99} rating={4} />
                    <Product id="0014" title="Final Fantasy XV Royal Edition - PlayStation 4" image="https://images-na.ssl-images-amazon.com/images/I/91D-QQpIN%2BL._SL1500_.jpg" price={19.58} rating={5} />
                </div>

                <div className="home__row">
                    <Product id="0015" title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide" image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg" price={278.99} rating={4} />
                    <Product id="0016" title="DIERYA Mechanical Gaming Keyboard 60% True RGB Backlit Bluetooth" image="https://images-na.ssl-images-amazon.com/images/I/61zMq16ZDxL._AC_SL1200_.jpg" price={54.99} rating={4} />
                </div>

                <div className="home__row">
                    <Product id="0017" title="Persona 5 Royal: Standard Edition - PlayStation 4" image="https://images-na.ssl-images-amazon.com/images/I/81BgoNw%2BWuL._SL1500_.jpg" price={39.99} rating={4} />
                    <Product id="0018" title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD" image="https://images-na.ssl-images-amazon.com/images/I/81mZ4eDWYkL._AC_SL1500_.jpg" price={551.00} rating={5} />
                    <Product id="0019" title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card" image="https://images-na.ssl-images-amazon.com/images/I/61445UADu9L._AC_SL1000_.jpg" price={410.00} rating={5} />
                </div>
            </div>

        </div>
    )
}

export default Home;
