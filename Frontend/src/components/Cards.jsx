import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card md:w-72 md:h-96 w-80 h-auto bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="md:h-48 h-40 cursor-pointer overflow-hidden">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body h-32 p-2 cursor-pointer">
            <h2 className="card-title text-lg  font-bold mb-2 truncate">
              {item.name}
            </h2>
            <p className="text-sm line-clamp-3">{item.title}</p>
            <div className="card-actions flex justify-between items-center mt-2">
              <div className="badge badge-outline text-sm">${item.price}</div>
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

// Previous code
{
  /* <div className="mt-4 my-3 p-3">
  <div className="card w-80 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
    <figure style={{ height: '60%', overflow: 'hidden' }}>
      <img
        src={item.image}
        alt="Shoes"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </figure>
    <div className="card-body h-40 p-2">
      <h2 className="card-title text-lg font-bold mb-2">
        {item.name}
        <div className="badge badge-secondary">{item.category}</div>
      </h2>
      <p className="text-sm">{item.title}</p>
      <div className="card-actions flex justify-between items-center mt-2">
        <div className="badge badge-outline text-sm">${item.price}</div>
        <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
          Buy Now
        </div>
      </div>
    </div>
  </div>
</div> */
}
