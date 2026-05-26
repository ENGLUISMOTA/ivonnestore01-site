import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Qual é a política de troca?',
    answer: 'Aceitamos trocas em até 7 dias após a compra, desde que o produto esteja em perfeito estado, com etiquetas e na embalagem original. A troca pode ser feita por outro produto ou crédito na loja.'
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos dinheiro, cartões de crédito e débito (Visa, Mastercard, Elo), Pix e parcelamento em até 3x sem juros no cartão de crédito.'
  },
  {
    question: 'Vocês fazem entrega?',
    answer: 'Sim! Fazemos entregas em Belém e região. O prazo varia de 1 a 3 dias úteis dependendo do bairro. Consulte o valor do frete pelo WhatsApp (91) 98765-4321.'
  },
  {
    question: 'Como funciona o cupom de desconto?',
    answer: 'Ao se cadastrar no site, você recebe um cupom de 10% de desconto válido para sua primeira compra. Basta apresentar o código no momento da compra na loja física ou informar pelo WhatsApp.'
  },
  {
    question: 'Posso reservar um produto?',
    answer: 'Sim! Entre em contato pelo WhatsApp ou Instagram, envie a foto do produto desejado e podemos reservar por até 24 horas para você.'
  },
  {
    question: 'Vocês têm loja física?',
    answer: 'Sim! Nossa loja fica na Rua das Flores, 123 - Guamá, Belém/PA. Venha nos visitar de segunda a sábado, das 9h às 19h, e aos domingos das 10h às 14h.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12">Perguntas Frequentes</h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-base sm:text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-2">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
