import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee}) => {
    const {_id, name, quantity, supplier, photoUrl} = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
            }
          })
    }
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
                <button  className='bg-indigo-800 hover:bg-indigo-950 px-1 py-1 text-white rounded-xl'>view</button>
                <br />
                <Link to={`updateCoffee/${_id}`}>
                    <button className='bg-indigo-800 hover:bg-indigo-950 px-1 text-white rounded-xl'>Edit</button>
                </Link>
                <br />
                <button onClick={()=>handleDelete(_id)} className='bg-indigo-800 hover:bg-indigo-950 px-1 text-white rounded-xl'>X</button>
            </div>
            </div>
        </div>
    );
};

export default CoffeeCard;