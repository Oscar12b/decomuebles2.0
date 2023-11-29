import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AiFillStar } from "react-icons/ai";
import Navbar from './componentes/principal/navbar';
import Footer from './componentes/principal/Footer';
import Navigation from './componentes/navigation/Nav';
import Products from "./componentes/products/Products";
import Recommended from "./componentes/recommended/Recommended";
import Sidebar from "./componentes/sidebar/Sidebar";
import Card from "./componentes/components/Card";
import { Container, Row, Col } from 'react-bootstrap';
import './Tienda.css'

export default function Tienda() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");

    // Cargar datos desde la API al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://decomuebles-api.up.railway.app/g/MostrarMuebles");
                const data = await response.json();
                const mappedData = data.map(item => ({
                    img: item.img,
                    title: item.title,
                    star: <AiFillStar className="rating-star" />,
                    reviews: `(${item.reviews} reviews)`,
                    prevPrice: item.prevPrice,
                    newPrice: item.newPrice,
                    company: item.company,
                    color: item.color,
                    category: item.category
                }));
                console.log(mappedData);
                setProducts(mappedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        if (query) {
            filteredProducts = filteredItems;
        }

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
            <Navigation query={query} handleInputChange={handleInputChange} style={{ paddingtop : "10%" }}/>
            <Sidebar handleChange={handleChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result} />
            <footer style={{marginLeft:'26.25rem'}}>
                <Footer />
            </footer>
        </div>
    );
}
