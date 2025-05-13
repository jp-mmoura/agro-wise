'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/lobby');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const success = await signIn(email, password);
    if (success) {
      router.push('/lobby');
    } else {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-agro-green-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-agro-green-600 p-6">
            <h1 className="text-2xl font-bold text-white text-center">Bem-vindo de volta</h1>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-agro-brown-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-agro-brown-200 focus:ring-2 focus:ring-agro-green-500 focus:border-agro-green-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-agro-brown-700 mb-1">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-agro-brown-200 focus:ring-2 focus:ring-agro-green-500 focus:border-agro-green-500 transition-colors"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-agro-green-600 text-white py-3 px-4 rounded-lg hover:bg-agro-green-700 transition-colors font-medium"
            >
              Entrar
            </button>
            <div className="text-center text-sm">
              <span className="text-agro-brown-600">Não tem uma conta? </span>
              <Link href="/signup" className="text-agro-green-600 hover:text-agro-green-700 font-medium">
                Criar conta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 