import React from 'react';
import '../styles/FeaturedProducts.css'

/**
 * Renders the FeaturedProducts component.
 * 
 * @returns {JSX.Element} The FeaturedProducts component
 */
export function FeaturedProducts() {
    return (
        <section className='featured-products'>
            {/* Section title */}
            <h2>Featured Products</h2>

            {/* Products grid */}
            <div className='products'>
                <div className='product'>Product 1</div>
                <div className='product'>Product 2</div>
                <div className='product'>Product 3</div>
            </div>
        </section>
    );
}

export default FeaturedProducts;