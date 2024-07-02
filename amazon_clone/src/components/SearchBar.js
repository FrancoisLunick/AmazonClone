// ==========================================================================
// IMPORTS
// ==========================================================================
import React from 'react';
import '../styles/SearchBar.css';

// ==========================================================================
// COMPONENT DEFINITION
// ==========================================================================

/**
 * Renders the SearchBar component.
 * 
 * @returns {JSX.Element} The SearchBar component
 */
function SearchBar() {

    return (
        <div className="search-bar">
            
            {/* Category Dropdown */}
            <select className="search-category">
                <option value="All">All</option>
            </select>

            {/* Search Input */}
            <input type="text" placeholder="Search Amazon" />

            {/* Search Button */}
            <button type="submit" className="search-button">
                <img src="./search.svg" alt="Search" className="search-icon"/>
            </button>
        </div>
    );
}
// ==========================================================================
export default SearchBar;