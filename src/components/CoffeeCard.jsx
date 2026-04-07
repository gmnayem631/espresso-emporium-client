import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, photo, name, supplier, price } = coffee;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.isConfirmed);

        // Deleting a coffee
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log("after delete", data);
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
              console.log(result.isConfirmed);
            }
          });
      }
    });
  };
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
      {/* Image */}
      <div className="relative h-64 bg-gray-100">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">Chef: {supplier}</p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-[#1a3a4a]">${price}</p>

          <div className="flex gap-2">
            {/* Edit Button */}
            <Link to={`/updateCoffee/${_id}`}>
              <button className="w-9 h-9 bg-[#F5E8C7] hover:bg-[#e8d4a3] flex items-center justify-center rounded transition-colors">
                ✏️
              </button>
            </Link>
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(_id)}
              className="w-9 h-9 bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center rounded transition-colors"
            >
              🗑
            </button>
          </div>
        </div>
      </div>
      <Link to={`/coffee/${_id}`} className="btn w-full bg-[#D2B48C]">
        View Details
      </Link>
    </div>
  );
};

export default CoffeeCard;
