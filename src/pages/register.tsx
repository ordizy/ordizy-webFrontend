
import { useNavigate } from 'react-router-dom';

const SignupCard = () => {
  const navigate = useNavigate();

  const handleNext = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Navigate to the "create-password" route
    navigate('/create-password');
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="p-8">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img src="src/assets/images/logo-removedbg.png" alt="Logo" className="h-16 w-auto" />
        </div>
        
        {/* Signup Title */}
        <div className="text-center uppercase tracking-wide text-md font-medium text-black mb-1">Welcome to Ordizy</div>
        <div className="text-center uppercase tracking-wide text-xl text-indigo-500 font-semibold mb-6">Register</div>
        
        <form className="space-y-4" onSubmit={handleNext}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" name="terms" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                By clicking, you agree to Ordizy's Terms and Conditions
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-1/2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Next
            </button>
          </div>
        </form>
        
        {/* Already have an account? */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-500 font-medium">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
