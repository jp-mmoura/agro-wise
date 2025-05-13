'use client';
import { useRouter } from 'next/navigation';

export default function EscolherCultura() {
  const router = useRouter();

  const handleSelect = (cultura: string) => {
    localStorage.setItem('selectedCultura', cultura);
    router.push('/escolher-ativo');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-agro-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Escolha a Cultura</h1>
        <div className="space-y-4">
          <button onClick={() => handleSelect('cafe')} className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors">Café</button>
          <button onClick={() => handleSelect('milho')} className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors">Milho</button>
          <button onClick={() => handleSelect('soja')} className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors">Soja</button>
        </div>
      </div>
    </div>
  );
} 