import { Instagram, MapPin } from 'lucide-react';

export default function FloatingButtons() {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/lojajumper', '_blank');
  };

  const handleLocationClick = () => {
    const address = 'Rua das Flores, 123 - Guamá, Belém - PA';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50">
      <button
        onClick={handleInstagramClick}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={handleLocationClick}
        className="bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
        aria-label="Localização"
      >
        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}
