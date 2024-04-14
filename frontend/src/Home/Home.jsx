import './Home.css'
import '../bootstrap-5.3.2-dist/css/bootstrap.min.css'
import heroimage from '../assets/fit-people.png'
import Navbar from '../Components/Navbar/Navbar'
import Categories from '../Components/Categories/Categories'
import Message from '../Components/Message/Message'
import Products from '../Products/Products'
import Footer from '../Components/Footer/Footer'
import React, { useState, useRef ,useEffect} from 'react';

function Home() {

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [userId, setUserId] = useState('');

    const productsRef = useRef(null);
    const handleSearchBarClick = () => {
        if (productsRef.current) {
            productsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Retrieve userId from localStorage
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);
    return (
        <>
            <Navbar setSearchTerm={setSearchTerm} handleSearchBarClick={handleSearchBarClick} />

            <section id='home'>
                <div className='hero container-fluid d-flex justify-content-between'>
                    <div>
                        <h1 className='container mt-5 ms-5'>Best way to stay Fit</h1><br />
                        <h3 className='container ms-5'>Make elegant choices for your life with us</h3>
                        <a href="#products">
                            <button type='button' className='hero-button rounded-5'>
                                <b>Our Products</b>
                            </button>
                        </a>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={heroimage} height={570} className='hero-image pe-4 pb-5' onDragStart={handleDragStart}></img>
                    </div>
                </div>
            </section>

            <section id='categories'>
                <Categories />
            </section>

            <section id="message">
                <Message />
            </section>

            <section id='products'>
                <Products searchTerm={searchTerm} ref={productsRef} userId={userId}  />
            </section>

            <section id='contacts'>
                <Footer />
            </section>
        </>
    )
}

export default Home