import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    console.log("update coffee");

    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // updating coffee info to DB
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee updated successfully",
            showCancelButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="min-h-screen my-10 bg-[#EAE8E3] rounded-lg">
      <div className="max-w-4xl mx-auto py-10 px-6">
        {/* Header */}
        <div className="">
          <h2 className="rancho text-4xl text-[#1a3a4a] text-center mb-3 px-8">
            Update Coffee
          </h2>
        </div>

        {/* Form Card */}
        <form onSubmit={handleUpdateCoffee} className="rounded-lg p-10">
          {/* Row 1: Name & Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                placeholder="Enter coffee quantity"
                className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Supplier & Taste */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Category & Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Enter coffee price"
                className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Row 4: Photo (full width) */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            className="w-full py-3 rounded-sm cursor-pointer text-white bg-[#D2B48C] font-semibold text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all duration-150"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
