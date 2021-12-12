import React from "react";
import image1 from "../assets/smallchops.jpg";
import image3 from "../assets/paprika.jpg";
import image4 from "../assets/noodles.jpg";
const teaserData = [
  {
    name: "Green Salad",
    price: "$8.45",
    imgId: image1,
    id: 1,
    time: 206,
    dayText: "Days",
  },
  {
    name: "Beef Hamburger",
    price: "$12.5",
    imgId: image3,
    id: 2,
    time: "04",
    dayText: "Hours",
  },
  {
    name: "Roast Paprica",
    price: "$7.00",
    imgId: image4,
    id: 3,
    time: 38,
    dayText: "Mins",
  },
  {
    name: "Fried Noodles",
    price: "$10.00",
    imgId: image3,
    id: 4,
    time: 52,
    dayText: "Sec",
  },
];

const DateCounter = () => {
  return (
    <div className="counter flex flex-center justify-evenly text-white relative py-2">
      {teaserData.map((timeVal) => {
        const { time, dayText, id } = timeVal;
        return (
          <div key={id} className="time-item">
            <p className="font-bold ">{time}</p>
            <h5>{dayText}</h5>
          </div>
        );
      })}
    </div>
  );
};
const Teaser = () => {
  return (
    <div>
      <div className="teaser-container text-white">
        <div className="teaser-heading pt-10 pb-8 text-center">
          <h2>Hurry Up!</h2>
          <h1 className='text-5xl text-center font-bolder'>DEAL OF THE WEEK</h1>
          <p>lorem ipsum dolor sit amet lorem is awesome</p>
        </div>
        <DateCounter />
        <div className="food-card text-green bg-white flex flex-center justify-between">
          {teaserData.map((menu) => {
            const { id, name, price, imgId } = menu;
            return (
              <div key={id} className="text-center">
                <img src={imgId} alt="meal" className="rounded-full block" />
                <div className='mt-6'>
                  <h5 className="text-sm menu-name pb-3">{name}</h5>
                  <p className="menu-price text-medium">{price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Teaser;
