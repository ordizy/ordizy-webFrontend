const App = () => (
    <div id="home" className="relative h-[90.5vh] w-full bg-blue-900 overflow-hidden">
        {/* Background Image */}
        <div 
            className="absolute inset-0 z-0" 
            style={{ 
                backgroundImage: "url('src/assets/images/bg1.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                opacity: 0.8 
            }}
        ></div>

        {/* Container for content */}
        <div className="relative z-10 flex h-full items-start pt-20 px-8"> {/* Changed from items-center to items-start and added pt-10 */}
            {/* Text Section */}
            <div className="flex-grow flex items-center justify-start pr-8">
                <div className="text-white max-w-md ml-16">
                    <h1 className="text-6xl font-bold mb-6 leading-tight">
                        Save your time with <span className="text-yellow-300">order online</span> and pickup
                    </h1>
                    <p className="text-2xl text-gray-200">
                        Get your favorite items faster and hassle-free with our efficient online ordering system.
                    </p>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0 w-1/3 flex items-center justify-end">
                <img src="src/assets/images/signin.png" alt="Logo" className="h-2/3 w-auto" />
            </div>
        </div>
    </div>
);

export default App;
