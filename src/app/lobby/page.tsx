'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function Lobby() {
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen bg-agro-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-agro-green-600 p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Escolha sua Ação</h1>
            <button 
              onClick={signOut}
              className="bg-white text-agro-green-600 py-2 px-4 rounded-lg hover:bg-agro-green-50 transition-colors font-medium"
            >
              Sair
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                onClick={() => router.push('/escolher-ativo')}
                className="bg-white border-2 border-agro-green-600 text-agro-green-600 py-6 px-4 rounded-xl hover:bg-agro-green-50 transition-colors font-medium text-lg flex items-center justify-center space-x-2"
              >
                <span>Escolher Princípio Ativo</span>
              </button>
              <button 
                onClick={() => router.push('/cadastrar-produto')}
                className="bg-white border-2 border-agro-green-600 text-agro-green-600 py-6 px-4 rounded-xl hover:bg-agro-green-50 transition-colors font-medium text-lg flex items-center justify-center space-x-2"
              >
                <span>Cadastrar Produto</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 