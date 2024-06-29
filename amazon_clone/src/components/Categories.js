import React from "react";
import '../styles/Categories.css';

/**
 * Renders the Categories component.
 * 
 * @returns {JSX.Element} The Categories component 
 */
function Categories() {
    return (
        <section className="categories">
            {/* Section title */}
            <h2>Categories</h2>

            {/* Categories grid */}
            <div className="category-list">
                <div className="category"> Category 1</div>
                <div className="category"> Category 1</div>
                <div className="category"> Category 1</div>
            </div>
        </section>
    );
}

export default Categories;