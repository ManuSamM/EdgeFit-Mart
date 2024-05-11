import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import muscle from '../../assets/muscle.png'
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import './Navbar.css'

function Navbar({ setSearchTerm, handleSearchBarClick }) {

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleHomeClick = () => {
        // Check if the current location is the home page
        if (window.location.pathname === '/') {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav id="navbar" className='container-fluid d-flex ps-4 align-items-center justify-content-start'>
                <div className='container d-flex w-25 justify-content-start'>
                    <img id="logo" src={muscle} height={38} onDragStart={handleDragStart} />
                    <div id='brandname'>
                        EdgeFit Mart
                    </div>
                </div>
                <div className="container w-50 d-flex justify-content-evenly align-items-center">
                    <Link to="/" className='nav-link' onClick={handleHomeClick}>Home</Link>
                    <a href='#categories' className='nav-link'>Categories</a>
                    <a href='#products' className='nav-link'>Products</a>
                    <a href='#contacts' className='nav-link'>Contacts</a>
                </div>
                <div className='search-container d-flex justify-content-start align-items-center w-25'
                    onClick={handleSearchBarClick}>
                    <input type="text" placeholder="Search" className='search-bar container rounded-4'
                        onChange={handleSearchChange} />
                    <FaSearch className='search-icon' />
                </div>
                <div className='container w-25 d-flex justify-content-end align-items-center'>
                    <Link to='/cart'> <FaShoppingCart className='me-4 icon-style' /></Link>
                    <Link to='/wishlist'><TiHeartFullOutline className='me-4 icon-style' /></Link>
                    <Link to='/signin'><MdAccountCircle className='me-2 icon-style' /></Link>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    setSearchTerm: PropTypes.string.isRequired,
    handleSearchBarClick: PropTypes.string.isRequired,
}
export default Navbar