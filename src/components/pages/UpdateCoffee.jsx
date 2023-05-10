import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, photoUrl} = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photoUrl};
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
}
    return (
        <div className='mt-10'>
            
            <form onSubmit={handleUpdateCoffee}>
                <h1 className='text-3xl font-semibold text-center'>{name}</h1>
                <div className="mx-auto shadow-md rounded px-8 md:px-16 pt-6 pb-8 mb-4 flex flex-col my-2 md:w-1/2 bg-[#F4F3F0]">
                <div className="-mx-3 md:flex mb-6 mt-10">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="coffee-name">
                        Coffee Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="coffee-name" type="text" name='name' defaultValue={name} placeholder="Enter coffee name" />
                    </div>
                    <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="available-quantity">
                        Available Quantity
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="available-quantity" type="number" name='quantity' defaultValue={quantity} placeholder="Enter available quantity" />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="supplier-name">
                        Supplier Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="supplier-name" type="text" name='supplier' defaultValue={supplier}  placeholder="Enter supplier name" />
                    </div>
                    <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="taste">
                        Taste
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="taste" type="text" name='taste' defaultValue={taste} placeholder="Enter taste" />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="category" type="text" name='category' defaultValue={category} placeholder="Enter category" />
                    </div>
                    <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="details">
                        Details
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="details" type="text" name='details' placeholder="Enter details" />
                    </div>
                </div>
                <div className="-mx-3 mb-6">
                    <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="photo-url">
                    Photo URL
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="photo-url" type="text" name='photoUrl' defaultValue={photoUrl} placeholder="Enter photo URL" />
                    </div>
                    </div>
                    <div className="flex items-center justify-between">
                    <input type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="UPDATE COFFEE" />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default UpdateCoffee;