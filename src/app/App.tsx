import VideoHero from './components/VideoHero';
import ProductSection from './components/ProductSection';
import LocationSection from './components/LocationSection';
import AboutSection from './components/AboutSection';
import CouponForm from './components/CouponForm';
import FAQSection from './components/FAQSection';
import FloatingButtons from './components/FloatingButtons';
import SEOHead from './components/SEOHead';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead />
      <VideoHero />

      <AboutSection />

      <div className="max-w-7xl mx-auto py-12 sm:py-16 space-y-12 sm:space-y-20 px-4">
        <ProductSection
          imageUrl="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          imageAlt="Roupas na loja Ivonne Store em Belém"
          reverse={false}
        />

        <LocationSection
          imageUrl="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          imageAlt="Interior da loja Ivonne Store no Guamá"
          reverse={true}
        />

        <ProductSection
          imageUrl="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          imageAlt="Coleção de roupas Ivonne Store"
          reverse={false}
        />
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-blue-50 py-12 sm:py-16">
        <CouponForm />
      </div>

      <FAQSection />

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">Ivonne Store</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Loja de roupas no Guamá, Belém/PA. O lugar de comprar barato!
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">Contato</h3>
              <p className="text-sm sm:text-base text-gray-400">Rua das Flores, 123 - Guamá</p>
              <p className="text-sm sm:text-base text-gray-400">Belém, PA</p>
              <p className="text-sm sm:text-base text-gray-400">(91) 98765-4321</p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/ivonnestore" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://wa.me/5591987654321" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-sm sm:text-base text-gray-400">&copy; 2026 Ivonne Store - Loja de Roupas. Todos os direitos reservados.</p>
            <div className="mt-4">
              <a
                href="/admin"
                className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Área do Funcionário
              </a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingButtons />
    </div>
  );
}