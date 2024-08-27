const ContactUsPage = () => {
    return (
      <div id="contactUs" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 pt-20">
        {/* QR Code Section */}
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6 mb-12 max-w-4xl w-full">
          <img 
            src='src/assets/images/qr1.svg' // Replace with your card image path
            alt="QR Card" 
            className="w-1/3 h-auto rounded-lg mr-6"
          />
          <div className="flex flex-col justify-center w-2/3">
            <h1 className="text-2xl font-bold mb-4">Scan the QR Code to Download "Ordizy"</h1>
            <p className="text-gray-700 text-lg">
              Simply scan the QR code with your mobile device to quickly download and install "Ordizy".
            </p>
          </div>
        </div>
  
        {/* Contact Us Section */}
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <img 
            src='src/assets/images/contacUs.png' // Replace with your contact card image path
            alt="Contact Card" 
            className="w-1/3 h-auto rounded-lg mr-6"
          />
          <div className="flex flex-col justify-center w-2/3">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="flex flex-col">
              <div className="flex mb-2">
                <strong className="w-1/3 text-right pr-4">Email:</strong>
                <p className="text-gray-700">support@ordizy.com</p>
              </div>
              <div className="flex mb-2">
                <strong className="w-1/3 text-right pr-4">Phone:</strong>
                <p className="text-gray-700">+1 (234) 567-8901</p>
              </div>
              <div className="flex">
                <strong className="w-1/3 text-right pr-4">Address:</strong>
                <p className="text-gray-700">1234 Main Street, Suite 100, City, State, ZIP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUsPage;
  