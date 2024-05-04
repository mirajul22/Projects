import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Trustate = () => {
  const [count, setCount] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {count && (
                    <CountUp start={0} end={2700} duration={2} delay={1} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed text-center">Orders</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {count && (
                    <CountUp start={0} end={1800} duration={2} delay={1} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed text-center">Delievery</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {count && (
                    <CountUp start={0} end={1000} duration={2} delay={1} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed text-center">Products</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 text-center">
                  {count && (
                    <CountUp start={0} end={500} duration={2} delay={1} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed text-center">Feedback</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default Trustate;
