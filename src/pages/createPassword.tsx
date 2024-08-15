
const OtpAndPasswordCard = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="p-8">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img src="src/assets/images/logo-removedbg.png" alt="Logo" className="h-16 w-auto" />
        </div>
        
        {/* OTP and Password Title */}
        <div className="text-center uppercase tracking-wide text-md font-medium text-black mb-1">Enter OTP and Set Password</div>
        <div className="text-center uppercase tracking-wide text-xl text-indigo-500 font-semibold mb-6">Create Password</div>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="emailOtp" className="block text-sm font-medium text-gray-700">Email OTP</label>
            <input type="text" id="emailOtp" name="emailOtp" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
          </div>
          <div>
            <label htmlFor="phoneOtp" className="block text-sm font-medium text-gray-700">Phone Number OTP</label>
            <input type="text" id="phoneOtp" name="phoneOtp" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-1/2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpAndPasswordCard;
