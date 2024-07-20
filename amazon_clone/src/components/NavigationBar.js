import React from 'react';
import '../styles/NavigationBar.css'
import SearchBar from '../components/SearchBar';

/**
 * Renders the NavigationBar component.
 * 
 * @returns {JSX.Element} The NavigationBar component 
 */
export function NavigationBar() {
    return (
        <nav className='navigation-bar'>
            {/* Site title */}
            <h1>Amazon Clone</h1>

            {/* Search Bar */}
            <SearchBar/>

            {/* Navigation links */}
            <ul>
                <li><a href='/'>Homepage</a></li>
                <li><a href='/login'>Login</a></li>
                <li><a href='/signup'>Signup</a></li>
                <li><a href='/cart'>Cart</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;