<div className="w-3/4">
  {/* Grid */}
  <div className="w-full h-auto grid grid-cols-3 grid-rows-4 gap-4">
    {currentItems.map((p, inx) => {
      return (
        <div
          className="p-5 rounded shadow shadow-gray-500"
          key={`ProductGrid-${inx}`}
          style={{
            border: "1px solid rgba(180, 180, 180)",
          }}
        >
          <img
            src={p.image[0]}
            alt={`ProductGrid-${inx}`}
            className="min-h-60 max-h-60 w-auto mx-auto"
          />
          <div className="w-full h-32 flex flex-col justify-between">
            <p className="w-full font-semibold">
              {`${p.title.substring(0, 50)}...`}
            </p>
            <p className="text-blue-500 font-semibold">${p.price}</p>
            <div>
              <button
                className="w-32 p-2 rounded bg-[#292560] text-white font-semibold
                     hover:bg-[#FDB03D]"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* React Pagination */}
  <div className="flex overflow-x-auto sm:justify-center my-7">
    <Pagination
      currentPage={currentPage}
      totalPages={product.length / itemsPerPage}
      onPageChange={onPageChange}
    />
  </div>
</div>;
