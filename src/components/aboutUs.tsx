import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const AboutUs = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div id="aboutUs" className="flex h-screen bg-gray-100">
      {/* Left Side: Arrows and Card Section */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="relative w-full max-w-lg flex items-center">
          {/* Left Arrow */}
          <IoIosArrowBack
            className="text-7xl cursor-pointer text-gray-500 hover:text-indigo-500 mr-4"
            onClick={handleFlip}
          />

          <div className="perspective-1000 w-full h-full">
            <div
              className={`relative w-full h-96 p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {!isFlipped ? (
                  <div className="front w-full">
                    <h3 className="text-indigo-500 text-xl font-bold mb-4 text-center">As a User</h3>
                    <p className="text-gray-700 text-lg text-center px-4">
                      Ordizy is a time-saving app that lets you order on the go, schedule a pickup time, and grab your items from the shop with ease. No more searching for products or waiting in lines—just scan the QR code at the shop and pick up your parcel hassle-free.
                    </p>
                  </div>
                ) : (
                  <div className="back w-full">
                    <h3 className="text-indigo-500 text-xl font-bold mb-4 text-center">As a Shop</h3>
                    <p className="text-gray-700 text-lg text-center px-4">
With the Ordizy platform, shops don't need their own website to sell products. They can simply showcase their store on the Ordizy app and start selling with ease. It’s a hassle-free way to reach customers and manage sales—all through a single app.                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <IoIosArrowForward
            className="text-7xl cursor-pointer text-gray-500 hover:text-indigo-500 ml-4"
            onClick={handleFlip}
          />
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <img src="src/assets/images/aboutUs.png" alt="About Us" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default AboutUs;
