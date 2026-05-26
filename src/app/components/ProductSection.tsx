import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductSectionProps {
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ProductSection({ imageUrl, imageAlt, reverse = false }: ProductSectionProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 items-center`}>
      <div className="w-full md:w-1/2">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-2xl sm:text-3xl mb-4">Produtos de Qualidade</h2>
        <p className="text-base sm:text-lg mb-6">
          Oferecemos uma seleção cuidadosa de produtos para atender seu estilo e necessidades.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">✓</span>
            <span className="text-sm sm:text-base">Roupas de alta qualidade</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">✓</span>
            <span className="text-sm sm:text-base">Acessórios exclusivos</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">✓</span>
            <span className="text-sm sm:text-base">Calçados para todas as ocasiões</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">✓</span>
            <span className="text-sm sm:text-base">Novidades toda semana</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
