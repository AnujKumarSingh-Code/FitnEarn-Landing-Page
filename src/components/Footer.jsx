import fit from "../assests/fit.png"
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaTwitter , FaApple, FaGooglePlay } from "react-icons/fa";


export default function Footer() {

    return (
        <footer className="bg-[#2d1a17] text-white py-10 px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <div className="flex items-center mb-4">
                        <img src={fit} alt="fit" className="h-8 w-9" />
                        <h2 className="text-2xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text ml-2">
                            FitnEarnPal
                        </h2>
                    </div>
                    <p className="text-sm">
                        FitnEarnPal is your all-in-one place where you can train people as per your schedule. It's a place where you
                        can upload workout videos, create live sessions, write blogs, and much more. Available on Android and iOS. Join our
                        community of coaches today!
                    </p>
                    <p className="mt-4 flex text-sm items-center">
                        <FaEnvelope className="h-4 w-5 text-white-500 mr-2" />
                        <a href="mailto:help-support@fitnearn.com" className="hover:underline">
                             help-support@fitnearn.com 
                        </a>
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="/twitter" className="text-black">
                            <FaTwitter className="text-xl  hover:text-white" /> 
                        </a>
                        <a href="/facebook" className="text-black">
                            <FaFacebook className="text-xl hover:text-white" />
                        </a>
                        <a href="/instagram" className="text-black">
                            <FaInstagram className="text-xl  hover:text-white" />
                        </a>
                        <a href="/github" className="text-black">
                            <FaGithub className="text-xl   hover:text-white" />
                        </a>
                    </div>
                </div>

                
                <div className='ml-40'>
                    <h3 className="text-lg font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/home" className="hover:underline text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/flow" className="hover:underline  text-gray-300">
                                How it works
                            </a>
                        </li>
                        <li>
                            <a href="/features" className="hover:underline  text-gray-300">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="/signUp" className="hover:underline  text-gray-300">
                                Sign Up Form
                            </a>
                        </li>
                    </ul>
                </div>

                
                <div className='ml-20'>
                    <h3 className="text-lg font-bold mb-4">Policies</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/aboutUs" className="hover:underline  text-gray-300">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/policy" className="hover:underline  text-gray-300">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:underline  text-gray-300">
                                Terms & Conditions
                            </a>
                        </li>
                        <li> 
                            <a href="/dataDeletion" className="hover:underline  text-gray-300">
                                Data Deletion
                            </a>
                        </li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-lg font-bold mb-4">Download Now</h3>
                    <div className="space-y-4">
                        <button
                            href="/appleStore"
                            className="flex items-center w-52 px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:opacity-90   text-center "
                        >
                            <FaApple className="w-10 h-10 mr-2" />
                            <div className="text-left">
                                <p className="text-xs">Download on the</p>
                                <p className="text-xl font-semibold">App Store</p>
                            </div>
                            
                        </button>
                        <button
                            href="/appStore"
                            className="flex items-center w-52 px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:opacity-90   text-center "
                        >
                            <FaGooglePlay className="w-10 h-10 mr-2" />
                            <div className="text-left">
                                <p className="text-xs">Download on the</p>
                                <p className="text-xl font-semibold">App Store</p>
                            </div>
                            
                        </button>
                    </div>
                </div>
            </div>

            <hr className="my-8 border-gray-600" />

            
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>© Copyright 2024, All Rights Reserved.</p>
                <p>
                    Made with ❤️ in India 
                </p>
                <p>
                    Reg@2024 
                </p>
            </div>
        </footer>
    );
};

