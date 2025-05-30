'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function Lobby() {
  const router = useRouter();
  const { signOut, user } = useAuth();

  return (
    <div className="page-container">
      <div className="section-container">
        <div className="glass-card rounded-2xl overflow-hidden animate-fadeIn">
          <div className="bg-gradient-to-r from-agro-green-600 to-agro-green-500 p-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Olá, {user?.split('@')[0]}</h1>
              <p className="text-white/80 mt-1">O que você gostaria de fazer hoje?</p>
            </div>
            <button 
              onClick={signOut}
              className="btn-secondary"
            >
              Sair
            </button>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                onClick={() => router.push('/escolher-cultura')}
                className="glass-card p-8 rounded-xl text-left card-hover group"
              >
                <h3 className="text-xl font-semibold text-agro-green-700 mb-2 
                             group-hover:text-agro-green-600 transition-colors">
                  Escolher Princípio Ativo
                </h3>
                <p className="text-agro-brown-600">
                  Selecione o princípio ativo para seus produtos
                </p>
              </button>
              
              <button 
                onClick={() => router.push('/cadastrar-produto')}
                className="glass-card p-8 rounded-xl text-left card-hover group"
              >
                <h3 className="text-xl font-semibold text-agro-green-700 mb-2 
                             group-hover:text-agro-green-600 transition-colors">
                  Cadastrar Produto
                </h3>
                <p className="text-agro-brown-600">
                  Adicione novos produtos ao seu catálogo
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}