import React from "react";

export const Footer = () => {
  return (
    <footer className="footer bg-black text-white md:flex text-sm p-12 justify-start text-gray-400 font-light">
      <FooterItem1 />
      <FooterItem2 />
      <FooterItem3 />
      <FooterItem4 />
    </footer>
  );
};

export function FooterItem1() {
  return (
    <div className="lg:w-1/4 footer-col-wrap footer-first-col">
      <div className="text-lg mb-10">
        {" "}
        <span className="pl-5 footer-col-header">VENDOR</span>
      </div>

      <div className="text-sm pl-5">
        <p className="text-grey-p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          consequatur iste tenetur vero quos eum?
        </p>
        <p className=" pt-3">
          {" "}
          <i className="fas fa-envelope"></i>{" "}
          <span className="icon-text pl-4">support@organic.com</span>{" "}
        </p>
        <p className=" pt-3">
          {" "}
          <i className="fas fa-phone"></i>{" "}
          <span className="icon-text pl-4">(+1) 234 456 7891</span>{" "}
        </p>
        <p className=" pt-3">
          {" "}
          <i className="fas fa-home"></i>{" "}
          <span className=" pl-3 whitespace-pre-wrap">
            Level 13, Elizabeth St, Melbourne, Victoria 3000, Australia
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export function FooterItem2() {
  return (
    <div className="lg:w-1/4 footer-col-wrap">
      <div className="logo-wrap text-lg mb-10">
        {" "}
        <span className="pl-5">USEFUL LINKS</span>
      </div>
      <div className="text-sm pl-5">
        <ul className="list-item">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Our Products</a>
          </li>
          <li>
            <a href="/">Our Service</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">New Blog</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export function FooterItem3() {
  return (
    <div className="lg:w-1/4 footer-col-wrap">
      <div className="logo-wrap text-lg mb-10">
        <span className="pl-5">OUR SERVICES</span>
      </div>
      <div className="text-sm pl-5">
        <ul className="list-item">
          <li>
            <a href="/">online Shoppinf</a>
          </li>
          <li>
            <a href="/">Free Home Delivery</a>
          </li>
          <li>
            <a href="/">Return Money</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Delivery on Place</a>
          </li>
          <li>
            <a href="/">Wishlist</a>
          </li>
          <li>
            <a href="/">Discount</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function FooterItem4() {
  return (
    <div className="lg:w-1/4 footer-col-wrap">
      <div className="logo-wrap text-lg mb-10">
        <span className="">NEWS LETTER</span>
      </div>
      <div className="text-sm pl-5">
        <p className="text-grey-p mb-3">Subscribe To Our News Letter</p>
        <form name="newsletter" className="mt-2">
          <input
            type="text"
            placeholder="Name"
            className="mb-2 p-2 bg-grey border-green w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="mb-2 p-2 bg-grey border-green w-full"
          />
          <button
            type="submit"
            className="mb-2 w-full text-center d-block my-btn font-bold bg-green-500 hover:bg-green-300	py-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
