import { Heart, Users, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12">Quem Somos</h2>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl mb-4">Projeto Jumper - Moda com Propósito</h3>
          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            A Jumper nasceu no coração de Belém, no bairro do Guamá, com um propósito claro:
            democratizar a moda e trazer estilo acessível para todos. Somos mais do que uma loja
            de roupas, somos um projeto que acredita no poder transformador da moda.
          </p>
          <p className="text-base sm:text-lg mb-6 leading-relaxed">
            Cada peça que oferecemos é cuidadosamente selecionada pensando em você, que busca
            qualidade, tendência e preços justos. Nossa missão é fazer você se sentir bem consigo
            mesmo, expressando sua personalidade através do que veste.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-red-500" />
            <h4 className="text-lg sm:text-xl mb-2">Paixão pelo que Fazemos</h4>
            <p className="text-sm sm:text-base">Cada cliente é único e merece atenção especial na escolha do seu estilo.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-blue-500" />
            <h4 className="text-lg sm:text-xl mb-2">Comunidade Local</h4>
            <p className="text-sm sm:text-base">Orgulhosamente do Guamá, atendendo Belém e região com carinho.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-green-500" />
            <h4 className="text-lg sm:text-xl mb-2">Qualidade Acessível</h4>
            <p className="text-sm sm:text-base">Produtos de qualidade com preços que cabem no seu bolso.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
