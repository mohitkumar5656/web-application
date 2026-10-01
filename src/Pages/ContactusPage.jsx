import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
    const [settingData, setsettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
        address: import.meta.env.VITE_APP_ADDRESS,
        map1: import.meta.env.VITE_APP_MAP1,
        map1: import.meta.env.VITE_APP_MAP2,
        email: import.meta.env.VITE_APP_EMAIL,
        phone: import.meta.env.VITE_APP_PHONE,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        twitter: import.meta.env.VITE_APP_TWITTER,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        instagram: import.meta.env.VITE_APP_INSTAGRAM,
        youtube: import.meta.env.VITE_APP_YOUTUBE,

    })
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const hasEmpty = Object.values(data).some((x) => x.trim() === "");
        if (hasEmpty) {
            setShowError(true);
            return;
        }
        setMessage("Thanks for contacting us! We will reach out soon.");
        setData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
        setShowError(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            
            <div className="text-center mb-12">
                <h5 className="text-blue-500 uppercase tracking-wider font-semibold mb-2">
                    Any Questions?
                </h5>
                <h1 className="text-4xl font-bold">Please Feel Free To Contact Us</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                <div className="space-y-6">

                    <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <div className="bg-blue-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fa fa-location-arrow text-white"></i>
                        </div>
                        <Link to={settingData.map1} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                            {settingData.address}
                        </Link>
                    </div>


                    <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <div className="bg-blue-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <Link to="mailto:" className="text-blue-600 hover:text-blue-800">
                            {settingData.email}
                        </Link>
                    </div>


                    <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <div className="bg-blue-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fa fa-phone text-white"></i>
                        </div>
                        <Link to="tel:" className="text-blue-600 hover:text-blue-800">
                            {settingData.phone}
                        </Link>
                    </div>


                    <div className="bg-gray-100 rounded-lg p-6 text-center space-x-4">
                        <Link to="#" className="text-blue-600 hover:text-blue-800">
                            <i className="fab fa-facebook text-2xl"></i>
                        </Link>
                        <Link to="#" className="text-blue-600 hover:text-blue-800">
                            <i className="fab fa-twitter text-2xl"></i>
                        </Link>
                        <Link to="#" className="text-blue-600 hover:text-blue-800">
                            <i className="fab fa-instagram text-2xl"></i>
                        </Link>
                        <Link to="#" className="text-blue-600 hover:text-blue-800">
                            <i className="fab fa-linkedin text-2xl"></i>
                        </Link>
                    </div>
                </div>




                <div className="bg-white shadow-lg rounded-lg p-8">
                    {message && <p className="text-green-500 text-lg mb-4">{message}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                className={`w-full border ${showError && !data.name ? "border-red-500" : "border-gray-300"
                                    } rounded px-3 py-2`}
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    className={`w-full border ${showError && !data.email ? "border-red-500" : "border-gray-300"
                                        } rounded px-3 py-2`}
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={data.phone}
                                    onChange={handleChange}
                                    className={`w-full border ${showError && !data.phone ? "border-red-500" : "border-gray-300"
                                        } rounded px-3 py-2`}
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={data.subject}
                                onChange={handleChange}
                                className={`w-full border ${showError && !data.subject ? "border-red-500" : "border-gray-300"
                                    } rounded px-3 py-2`}
                                placeholder="Subject"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea
                                name="message"
                                value={data.message}
                                onChange={handleChange}
                                className={`w-full border ${showError && !data.message ? "border-red-500" : "border-gray-300"
                                    } rounded px-3 py-2`}
                                rows="4"
                                placeholder="Your Message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUsPage;