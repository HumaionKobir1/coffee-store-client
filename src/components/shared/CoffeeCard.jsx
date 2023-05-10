import React from 'react';

const CoffeeCard = ({coffee}) => {
    const {name, quantity, supplier, photoUrl} = coffee;
    return (
        <div>
            <div className=" rounded overflow-hidden shadow-lg flex justify-between gap-2 items-center">
            <img className="" src={photoUrl} alt={name} />
            <div className="px-6 py-4 space-y-3">
                <div className="font-bold text-xl mb-2 space-y-3">{name}</div>
                <p className="text-gray-700 text-base mb-2">
                Supplier: {supplier}
                <br />
                Quantity: {quantity}
                </p>
            </div>
            <div className="px-6 py-4 space-y-4">
                <button>view</button>
                <br />
                <button>Edit</button>
                <br />
                <button>X</button>
            </div>
            </div>
        </div>
    );
};

export default CoffeeCard;