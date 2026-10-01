import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

   const [settingData, setsettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
        address: import.meta.env.VITE_APP_ADDRESS,
        map1: import.meta.env.VITE_APP_MAP1,
        email: import.meta.env.VITE_APP_EMAIL,
        phone: import.meta.env.VITE_APP_PHONE,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        twitter: import.meta.env.VITE_APP_TWITTER,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        instagram: import.meta.env.VITE_APP_INSTAGRAM,
        youtube: import.meta.env.VITE_APP_YOUTUBE,

    })

const [email , setEmail] = useState("")

 const postData = (e) => {
  e.preventDefault();

  alert("Thank you! You have successfully subscribed.");

  setEmail("");
};
   
  return (
    <footer className="bg-gray-800 text-white mt-1">

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        
        <div>
          <h1 className="text-2xl font-bold tracking-wide mb-3">{settingData.siteName}</h1>
          <p className="text-gray-300 text-sm  font-semibold">
            We provide the best products with amazing quality and affordable prices.
            Stay connected with us for more updates.
          </p>
          <div className="flex flex-col  gap-3 mt-4">
            <Link to=""><i className="fa-solid fa-envelope text-xl mr-2"></i> {settingData.email}</Link>
            <Link to=""><i className="fa-solid fa-location-dot text-xl mr-2"></i> {settingData.address}</Link>
            <Link to=""><i className="ri-phone-line text-xl mr-2"></i> {settingData.phone}</Link>
            <Link to=""><i className="ri-whatsapp-line text-xl mr-2"></i> {settingData.whatsapp}</Link>
          </div>
        </div>


        <div>
          <h1 className="text-2xl font-bold mb-4">Links</h1>
          <div className="flex flex-col gap-2 text-sm font-semibold gap-5 ">
            <Link to="/" className="hover:text-yellow-400 transition"> <i className="fa fa-angle-right mr-2"></i> Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition"><i className="fa fa-angle-right mr-2"></i> About</Link>
            <Link to="/shop" className="hover:text-yellow-400 transition"><i className="fa fa-angle-right mr-2"></i> Shop</Link>
            <Link to="/feature" className="hover:text-yellow-400 transition"><i className="fa fa-angle-right mr-2"></i> Feature</Link>
            <Link to="/contactus" className="hover:text-yellow-400 transition"><i className="fa fa-angle-right mr-2"></i> Contact</Link>
          </div>
        </div>


        <div>
          <h1 className="text-2xl font-bold mb-4">Newsletter</h1>

          <p className="text-gray-300 text-sm mb-4  font-semibold">
            Subscribe to ApniShop newsletter for latest products, exclusive deals,
            and special discounts.
          </p>
          <form onSubmit={postData}>
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-black outline-none"
                required
               onChange={(e)=>setEmail(e.target.value)}
              />
              <button type="submit"  className="bg-yellow-400 px-4 py-2 font-semibold hover:bg-yellow-300 transition">
                Subscribe
              </button>
            </div>
          </form>
          <div className="mt-6">
            <h1 className="text-xl font-semibold">Follow us</h1>
            <div className="flex gap-4 mt-3">
              <Link to="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="ri-youtube-line text-4xl hover:text-red-500 transition"></i>
              </Link>

              <Link to="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-box-fill text-4xl hover:text-red-500 transition"></i></Link>

              <Link to="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="ri-facebook-circle-fill text-4xl hover:text-red-500 transition"></i></Link>
              <Link to="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="ri-instagram-line text-4xl hover:text-red-500 transition"></i></Link>
              <Link to="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="ri-twitter-line text-4xl hover:text-red-500 transition"></i></Link>
            </div>

          </div>
        </div>

      </div>


      <div className="text-center text-gray-400 text-sm py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} {settingData.siteName}. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;