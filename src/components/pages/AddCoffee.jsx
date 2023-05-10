import React from 'react';

const AddCoffee = () => {
    return (
        <div className='mt-10'>
            
            <div className="mx-auto shadow-md rounded px-8 md:px-16 pt-6 pb-8 mb-4 flex flex-col my-2 md:w-1/2 bg-[#F4F3F0]">
            <h1 className='text-3xl font-bold text-center mb-3'>Add new coffee</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque ut fuga? Quibusdam, placeat voluptatum dolor itaque perspiciatis corporis facilis dolores expedita fugit magni obcaecati et pariatur, vitae accusamus ipsa?</p>
            <div className="-mx-3 md:flex mb-6 mt-10">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="coffee-name">
                    Coffee Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="coffee-name" type="text" placeholder="Enter coffee name" />
                </div>
                <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="available-quantity">
                    Available Quantity
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="available-quantity" type="number" placeholder="Enter available quantity" />
                </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="supplier-name">
                    Supplier Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="supplier-name" type="text" placeholder="Enter supplier name" />
                </div>
                <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="taste">
                    Taste
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="taste" type="text" placeholder="Enter taste" />
                </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                    Category
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="category" type="text" placeholder="Enter category" />
                </div>
                <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="details">
                    Details
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="details" type="text" placeholder="Enter details" />
                </div>
            </div>
            <div className="-mx-3 mb-6">
                <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="photo-url">
                Photo URL
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="photo-url" type="text" placeholder="Enter photo URL" />
                </div>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                ADD COFFEE
                </button>
                </div>
            </div>

        </div>
    );
};

export default AddCoffee;