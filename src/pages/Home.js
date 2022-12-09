import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';
import Advertiment from '../components/Advertiment';

const Home = () => {
    return (
        <>
        <div className='container'>

                        <Advertiment/>
        </div>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;