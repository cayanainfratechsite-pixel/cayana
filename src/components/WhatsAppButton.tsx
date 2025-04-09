import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '918908012233'; // Replace with your actual WhatsApp number

  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div className="bg-white text-gray-800 rounded-lg py-2 px-4 shadow-lg text-sm whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute bottom-0 right-4 w-2 h-2 -mb-1 rotate-45 bg-white"></div>
        </div>
      </div>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce-slow"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
