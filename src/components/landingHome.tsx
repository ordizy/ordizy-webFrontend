const App = () => (
    <div className="relative h-screen bg-white overflow-hidden">
        {/* Container for content */}
        <div className="relative z-10 flex h-full items-center px-8">
            {/* Text Section */}
            <div className="flex-grow flex items-center justify-start pr-8">
                <div className="text-black max-w-md ml-16">
                    <h1 className="text-6xl font-bold mb-6 leading-tight">
                        Save your time with <span className="text-indigo-500">order online</span> and pickup
                    </h1>
                    <p className="text-xl">
                        Get your favorite items faster and hassle-free with our efficient online ordering system.
                    </p>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0 w-1/3 flex items-center justify-end">
                <img src="src/assets/images/signin.png" alt="Logo" className="h-1/3 w-auto" />
            </div>
        </div>
    </div>
);

export default App;
