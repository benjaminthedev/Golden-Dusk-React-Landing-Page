import React from 'react'

const Product = () => {
    return (
        <>
            <div classNameName="product__wrapper">

                <div classNameName="product__logo">
                    <h1>Logo Section</h1>
                </div>

                <div classNameName="product__image">
                    <h1>Product Image</h1>
                </div>

                <div classNameName="product__purchase">
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
