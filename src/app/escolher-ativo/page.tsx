'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const activeIngredients = [
  'Glifosato',
  'Atrazina',
  '2,4-D',
  'Clorpirifós',
  'Imidacloprido',
  'Tiametoxam',
  'Azoxistrobina',
  'Lambda-cialotrina',
  'Epoxiconazol',
  'Protioconazol'
];

export default function EscolherAtivo() {
  const router = useRouter();
  const [selectedAtivo, setSelectedAtivo] = useState<string | null>(null);

  const handleSelect = (ativo: string) => {
    setSelectedAtivo(ativo);
    localStorage.setItem('selectedAtivo', ativo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-agro-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Escolher Princípio Ativo</h1>
        <div className="space-y-4 mb-8">
          {activeIngredients.map((ativo) => (
            <button
              key={ativo}
              onClick={() => handleSelect(ativo)}
              className={`w-full py-3 px-4 rounded-md transition-colors ${
                selectedAtivo === ativo
                  ? 'bg-green-700 text-white'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {ativo}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          <button 
            className="btn-primary w-full"
            onClick={() => router.push('/cadastrar-produto')}
            disabled={!selectedAtivo}
          >
            Escolher
          </button>
          <button 
            className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors"
            onClick={() => router.push('/lobby')}
          >
            Voltar ao Menu
          </button>
        </div>
      </div>
    </div>
  );
} 