import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    // sending new coffee to server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="min-h-screen my-10 bg-[#EAE8E3] rounded-lg">
      <div className="max-w-4xl mx-auto py-10 px-6">
        {/* Header */}
        <div className="text-center mb-10 px-8">
          <h2 className="rancho text-4xl text-[#1a3a4a] mb-4">
            Add New Coffee
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleAddCoffee} className="rounded-lg p-10">
          {/* Row 1: Name & Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
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
                placeholder="Enter coffee taste"
                className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Category & Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
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
              placeholder="Enter photo URL"
              className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            className="w-full py-3 rounded-sm cursor-pointer text-white bg-[#D2B48C] font-semibold text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all duration-150"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
