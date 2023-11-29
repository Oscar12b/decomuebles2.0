import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './componentes/principal/navbar';
import Footer from './componentes/principal/Footer';
import Navigation from './componentes/navigation/Nav';
import Products from "./componentes/products/Products";
import products from "./componentes/db/Data";
import Recommended from "./componentes/recommended/Recommended";
import Sidebar from "./componentes/sidebar/Sidebar";
import Card from "./componentes/components/Card";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Tienda.css'



export default function Tienda() {
    
    const [selectedCategory, setSelectedCategory] = useState(null);

    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // ------------ Button Filtering -----------
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);

    return (
        <div>
            <header>
                <Navbar />
            </header>
                         <Navigation query={query} handleInputChange={handleInputChange} />
                         <Sidebar handleChange={handleChange} />
                         <Recommended handleClick={handleClick} />
                         <Products result={result} />
            <footer style={{marginLeft:'26.25rem'}}>
                <Footer />
            </footer>
        </div>
    );
}