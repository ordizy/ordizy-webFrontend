import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="bg-white sticky top-0 z-50 px-5 shadow-md">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Text Section */}
                    <div className="flex items-center space-x-2">
                        <img className="h-16 w-32" src="src/assets/images/logo-removedbg.png" alt="Logo" />
                    </div>
                    {/* Navigation and Buttons */}
                    <div className="flex items-center space-x-4 ml-auto">
                        <div className="hidden md:flex space-x-4">
                            <Link 
                                to="home" 
                                smooth={true} 
                                duration={500} 
                                className="relative text-blue-500 px-2 py-2 rounded-md text-lg font-medium group cursor-pointer"
                            >
                                Home
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform duration-300 group-hover:scale-x-100 scale-x-0 origin-left"></span>
                            </Link>
                            <Link 
                                to="aboutUs" 
                                smooth={true} 
                                duration={500} 
                                className="relative text-blue-500 px-2 py-2 rounded-md text-lg font-medium group cursor-pointer"
                            >
                                About Us
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform duration-300 group-hover:scale-x-100 scale-x-0 origin-left"></span>
                            </Link>
                            <Link 
                                to="feedback" 
                                smooth={true} 
                                duration={500} 
                                className="relative text-blue-500 px-2 py-2 rounded-md text-lg font-medium group cursor-pointer"
                            >
                                Feedback
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform duration-300 group-hover:scale-x-100 scale-x-0 origin-left"></span>
                            </Link>
                            <Link 
                                to="contactUs" 
                                smooth={true} 
                                duration={500} 
                                className="relative text-blue-500 px-2 py-2 rounded-md text-lg font-medium group cursor-pointer"
                            >
                                Contact Us
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform duration-300 group-hover:scale-x-100 scale-x-0 origin-left"></span>
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <a href="/login" className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                            <a href="/register" className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
