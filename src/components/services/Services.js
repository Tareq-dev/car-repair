import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Master Services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  className="w-100"
                  src="https://i.ibb.co/rm1Jh68/s1.webp"
                  alt=""
                />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">AC Servicing</p>
                <Link to="/getting-services">
                  <button className="btn btn-primary mt-2 py-1">
                    Get Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  className="w-100"
                  src="https://i.ibb.co/42PJng1/s2.png"
                  alt=""
                />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Appliance Repair</p>
                <Link to="/getting-services">
                  <button className="btn btn-primary mt-2 py-1">
                    Get Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img src="https://i.ibb.co/Jr9dFKb/s3.png" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  274
                </h2>
                <p className="leading-relaxed">Painting</p>
                <Link to="/getting-services">
                  <button className="btn btn-primary mt-2 py-1">
                    Get Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img src="https://i.ibb.co/J34X1Q2/s4.png" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  146
                </h2>
                <p className="leading-relaxed">Water Purifier</p>
                <Link to="/getting-services">
                  <button className="btn btn-primary mt-2 py-1">
                    Get Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
