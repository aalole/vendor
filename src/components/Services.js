import React from "react";
const servicesData = [
  {
    id: 1,
    iconName: "fas fa-menorah",
    title: "Birthday Party",
    details: "I am the confidence of those who loves great meal",
  },
  {
    id: 2,
    iconName: "fas fa-users",
    title: "Events Party",
    details: "I am the confidence of those who loves great meal",
  },
  {
    id: 3,
    iconName: "fas fa-utensils",
    title: "Private Dining",
    details: "I am the confidence of those who loves great meal",
  },
  {
    id: 4,
    iconName: "fas fa-menorah",
    title: "Charity Events",
    details: "I am the confidence of those who loves great meal",
  },
];

const Services = () => {
  return (
    <div>
      <div className=" services-container mt-10 mb-10 pt-10 pb-20 px-auto">
        <div className="services-header text-center pt-5 pb-12">
          <h1 className="text-5xl pt-3 pb-3 font-bold text-white">
            BEST SERVICES
          </h1>
          <p className="font-normal text-sm text-white">
            This is some awesome services in our vendor
          </p>
        </div>
        <div className="all-services flex flex-center justify-around align-center text-white pb-20">
          {servicesData.map((service) => {
            const { id, iconName, title, details } = service;
            return (
              <div className="service text-center pl-5 pr-5 py-4" key={id}>
                <i className={`${iconName} text-3xl`}></i>
                <h3 className='font-bold text-lg py-3'>{title}</h3>
                <p>{details}</p>
                <div className="w-10 h-1 bg-white text-center mx-auto mt-5"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
