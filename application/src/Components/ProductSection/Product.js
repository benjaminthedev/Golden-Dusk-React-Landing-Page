import './Product.scss';
import { useState } from 'react'

const Product = () => {

    const [mlState, setmlState] = useState("fiftyML");

      const urls = {
            fiftyML: "https://sunnamusk.com/basket/?add-to-cart=427369",
            oneHundredML: "https://sunnamusk.com/basket/?add-to-cart=427370"
        };



    return (
        <>
            <div className="product__wrapper">

                <div className="product__logo">
                    <div className="intro">
                        <img src="https://sunnamusk.com/wp-content/uploads/2020/11/Emblem-gold-2.svg" className="symbol" alt="" loading="lazy" height="50" width="312"/>
                            <h3 className="product__heading1">CLASSIC SIGNATURE COLLECTION</h3> 
                            <h4 className="product__heading2">A MODERN AND TIMELESS SCENT</h4> 
                            <img src="https://sunnamusk.com/wp-content/uploads/2021/11/Golden-Dust.svg" className="size-full" alt="" loading="lazy" height="163.21" width="384.51"/> 
                    </div>
                </div>

                <div className="product__image">
                    
                </div>

                <div className="product__purchase">
                    <h1>£50.00 </h1>

                    <p>Just a sprinkling of Golden Dust adds a touch of magic to this unique floral musk.  Rich Damascena rose makes a perfect combination with fresh grapefruit, before entering a sweet vanilla heart and finally resting on a syrupy balsamic and amber base. </p>


                <div class="selectorVolume">



                     <select
                        className="custom-select"
                        value={mlState}
                        onChange={(e) => {
                        const selectedML = e.target.value;
                        setmlState(selectedML);
                        }}
                    >
                    
                        <option value="fiftyML" className="options">50 ML</option>
                        <option value="oneHundredML" className="options">100 ML</option>
                    
                    
                    </select>

                    <a href={urls[mlState]} className="addToBag">
                        Add To Bag
                    </a>    
                    
                </div>
                    
                </div>
             </div>
        </>
    )
}

export default Product
