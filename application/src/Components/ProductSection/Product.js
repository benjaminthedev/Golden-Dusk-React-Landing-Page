import './Product.scss';

const Product = () => {
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
                    <h1>£50.00 or 4 payments of £12.50 with Clearpay</h1>

                    <p>Devastatingly elegant, this fragrance captivates with its woody base, floral heart and notes of citrus to culminate in our top selling fragrance.</p>

                    <div className="form-fields">
                        <div className="dynamic-select-field">
                        <label  for="p-quantity">QTY: <span> 1</span> <i className="far fa-chevron-down"></i></label>
                        <select id="fet-quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                        <div className="js-div"><div value="1" data-value="1">1</div><div value="2" data-value="2">2</div><div value="3" data-value="3">3</div><div value="4" data-value="4">4</div><div value="5" data-value="5">5</div></div></div>
                        <div className="dynamic-select-field fet-dynamic-size">
                        <label >SIZE: <span>100ML</span> <i className="far fa-chevron-down"></i></label>
                        <select id="fet-variation">
                        <option data-slug="100-ml" value="100-ml">100ML</option>
                        </select>
                        <div className="js-div"><div data-slug="100-ml" value="100-ml" data-value="100-ml">100ML</div></div></div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Product
