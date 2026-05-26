import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Clock, Phone } from 'lucide-react';

interface LocationSectionProps {
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function LocationSection({ imageUrl, imageAlt, reverse = false }: LocationSectionProps) {
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
        <h2 className="text-2xl sm:text-3xl mb-6">Nossa Localização</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Endereço</h3>
              <p className="text-sm sm:text-base">Rua das Flores, 123 - Guamá</p>
              <p className="text-sm sm:text-base">Belém, PA - CEP 66075-000</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Horário de Funcionamento</h3>
              <p className="text-sm sm:text-base">Segunda a Sexta: 9h às 19h</p>
              <p className="text-sm sm:text-base">Sábado: 9h às 17h</p>
              <p className="text-sm sm:text-base">Domingo: 10h às 14h</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Contato</h3>
              <p className="text-sm sm:text-base">(91) 98765-4321</p>
              <p className="text-sm sm:text-base">contato@lojajumper.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
