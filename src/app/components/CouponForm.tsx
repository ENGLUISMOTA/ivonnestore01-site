import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Gift } from 'lucide-react';

interface FormData {
  name: string;
  whatsapp: string;
  instagram: string;
  acceptMarketing: boolean;
  acceptTerms: boolean;
}

// ─── CONFIGURAÇÕES DO CUPOM ────────────────────────────────────────────────
// Altere estas variáveis para mudar o prefixo do código e a validade do cupom
const COUPON_PREFIX = 'IVONNE';          // prefixo do código gerado
const COUPON_VALID_UNTIL = '31/07/2026'; // data de validade exibida ao cliente
// ──────────────────────────────────────────────────────────────────────────

// ─── SUPABASE CONFIG ──────────────────────────────────────────────────────
// Cole aqui a URL e a chave anon do seu projeto Supabase
// Veja o arquivo SETUP_SUPABASE.md para instruções detalhadas
const SUPABASE_URL = 'https://srgkbigqtctyzqyvyiis.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyZ2tiaWdxdGN0eXpxeXZ5aWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NDAxNTQsImV4cCI6MjA5NTMxNjE1NH0.jFMb8st5JI0VIZylaZ2jw5i_ld5L4ittGakFVtbBcKU';
// ──────────────────────────────────────────────────────────────────────────

async function saveToSupabase(data: {
  name: string;
  whatsapp: string;
  instagram: string;
  coupon_code: string;
  marketing_consent: boolean;
}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/coupon_registrations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Erro ao salvar: ${error}`);
  }
}

export default function CouponForm() {
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>({
    defaultValues: {
      acceptMarketing: false,
      acceptTerms: false
    }
  });

  const acceptMarketing = watch('acceptMarketing');
  const acceptTerms = watch('acceptTerms');

  const generateCouponCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem caracteres ambíguos
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${COUPON_PREFIX}${code}`;
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const newCoupon = generateCouponCode();

    try {
      await saveToSupabase({
        name: data.name,
        whatsapp: data.whatsapp,
        instagram: data.instagram,
        coupon_code: newCoupon,
        marketing_consent: data.acceptMarketing,
      });

      setCouponCode(newCoupon);
      reset();
    } catch (error) {
      console.error('Erro ao salvar cadastro:', error);
      setSubmitError('Ocorreu um erro ao gerar seu cupom. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <Gift className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl mb-2">Ganhe 10% de Desconto!</h2>
          <p className="text-base sm:text-lg">Cadastre-se e receba seu cupom exclusivo</p>
          <p className="text-sm text-gray-600 mt-2">Válido até {COUPON_VALID_UNTIL}</p>
        </div>

        {!couponCode ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Nome Completo
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Nome é obrigatório' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu nome"
              />
              {errors.name && (
                <p className="text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="whatsapp" className="block mb-2 font-semibold">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                {...register('whatsapp', {
                  required: 'WhatsApp é obrigatório',
                  pattern: {
                    value: /^[0-9\s\-\(\)]+$/,
                    message: 'Número inválido'
                  }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(91) 98765-4321"
              />
              {errors.whatsapp && (
                <p className="text-red-600 mt-1">{errors.whatsapp.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="instagram" className="block mb-2 font-semibold">
                Instagram
              </label>
              <input
                id="instagram"
                type="text"
                {...register('instagram', { required: 'Instagram é obrigatório' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="@seuusuario"
              />
              {errors.instagram && (
                <p className="text-red-600 mt-1">{errors.instagram.message}</p>
              )}
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <input
                id="acceptMarketing"
                type="checkbox"
                {...register('acceptMarketing', {
                  required: 'Você precisa aceitar para gerar o cupom'
                })}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="acceptMarketing" className="cursor-pointer text-sm sm:text-base text-gray-700">
                Aceito receber informações sobre novidades e promoções
              </label>
            </div>
            {errors.acceptMarketing && (
              <p className="text-red-600 text-sm -mt-2">{errors.acceptMarketing.message}</p>
            )}

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <input
                id="acceptTerms"
                type="checkbox"
                {...register('acceptTerms', {
                  required: 'Você precisa aceitar os termos da promoção'
                })}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="acceptTerms" className="cursor-pointer text-sm sm:text-base text-gray-700">
                Aceito os <span 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowTermsModal(true);
                  }}
                  className="font-bold text-blue-600 hover:text-blue-800 underline decoration-2 cursor-pointer"
                >termos</span> da promoção
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-600 text-sm -mt-2">{errors.acceptTerms.message}</p>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={!acceptMarketing || !acceptTerms || isSubmitting}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Gerando cupom...' : 'Gerar Meu Cupom'}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6">
              <p className="text-lg mb-4">Seu cupom de desconto:</p>
              <div className="bg-white border-2 border-dashed border-green-500 rounded-lg p-4">
                <p className="text-3xl font-bold text-green-600 tracking-widest">{couponCode}</p>
              </div>
              <p className="mt-4 text-sm font-semibold">10% de desconto em qualquer compra!</p>
              <p className="mt-2 text-xs text-gray-600">Válido até {COUPON_VALID_UNTIL}</p>
              <p className="mt-3 text-sm text-gray-700">
                Apresente este código na loja ou pelo WhatsApp
              </p>
            </div>
            <button
              onClick={() => setCouponCode(null)}
              className="text-blue-600 hover:underline"
            >
              Fazer novo cadastro
            </button>
          </div>
        )}
      </div>

      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Termos da Promoção</h3>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>Para garantir o seu cupom de 10% de desconto, é obrigatório cumprir o seguinte termo:</p>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-blue-900 font-semibold flex items-center gap-3">
                <span className="text-xl">📸</span>
                <span>Seguir o perfil da loja no Instagram!</span>
              </div>
              <p className="text-xs text-gray-500">
                O perfil do Instagram inserido no cadastro será verificado no momento de aplicar o desconto em sua compra.
              </p>
            </div>
            <button
              onClick={() => setShowTermsModal(false)}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Entendi e Aceito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
