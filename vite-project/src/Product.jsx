import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Product = () => {
  const [data, setData] = useState();
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch("https://api.pujakaitem.com/api/products");
        const data = await res.json();
        console.log("data=>", data);
        setData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  return (
    <>
      {
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap items-center justify-evenly gap-5">
              {data?.map((item) => {
                // const [name, price, image, category] = item;
                const name = item.name;
                const price = item.price;
                const image = item.image;
                const category = item.category;
                console.log("Testing ", item.category);

                return (
                  <div
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-lg"
                    key={item.id}>
                    <NavLink
                      to="/Single/:id"
                      className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={image}
                      />
                    </NavLink>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {name}
                      </h2>
                      <p className="mt-1">$ {price} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Product;
