import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const FeedbackSection = () => {
  const feedbacks = [
    {
      name: "John Doe",
      stars: 5,
      content: "Ordizy made my shopping experience so much easier! I love the convenience of ordering and picking up without any hassle.",
      image: "src/assets/images/profile1.jpg"
    },
    {
      name: "Jane Smith",
      stars: 4,
      content: "Great app! It saved me a lot of time. I especially like the QR code pickup feature.",
      image: "src/assets/images/profile2.jpg"
    },
    {
      name: "Sam Wilson",
      stars: 5,
      content: "Fantastic service! Easy to use and very efficient. I highly recommend it to anyone looking to streamline their shopping.",
      image: "src/assets/images/profile3.jpg"
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextFeedback = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  const visibleFeedbacks = [
    feedbacks[startIndex],
    feedbacks[(startIndex + 1) % feedbacks.length],
    feedbacks[(startIndex + 2) % feedbacks.length]
  ];

  return (
    <div id="feedback" className="relative h-[90.5vh] w-full bg-blue-100 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('src/assets/images/bg2.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          opacity: 0.5
        }}
      ></div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="bg-white bg-opacity-70 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Customers Say</h2>
          <div className="flex items-center justify-center">
            <button onClick={prevFeedback} className="mr-4 p-2 bg-gray-200 rounded-full">
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visibleFeedbacks.map((feedback, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-center mb-4">
                    <img src={feedback.image} alt={`${feedback.name}'s profile`} className="h-16 w-16 rounded-full" />
                  </div>
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: feedback.stars }, (_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-yellow-500" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{feedback.name}</h3>
                  <p className="text-gray-700 text-center">{feedback.content}</p>
                </div>
              ))}
            </div>
            <button onClick={nextFeedback} className="ml-4 p-2 bg-gray-200 rounded-full">
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
