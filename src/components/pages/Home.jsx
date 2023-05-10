import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../shared/CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();

    return (
        <div>
            <h1>Hot Hot Coffee: {coffees.length}</h1>

            <div className='grid md:grid-cols-2 gap-5 w-9/12 mx-auto'>
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id}
                        coffee={coffee}
                        ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;