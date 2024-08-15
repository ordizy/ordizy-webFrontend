const LoginCard = () => {
    return (
      <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <img src="src/assets/images/logo-removedbg.png" alt="Logo" className="h-16 w-auto" />
          </div>
          
          {/* Signup Title */}
          <div className="text-center uppercase tracking-wide text-md font-medium text-black mb-1">Welcome to Ordizy</div>
          <div className="text-center uppercase tracking-wide text-xl text-indigo-500 font-semibold mb-6">Login</div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 bg-gray-100 hover:border-4 transition-all duration-200 px-1 h-8" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input id="remember" name="remember" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-1/2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginCard;
  