'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, type ProductFormData } from '@/lib/validations';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function CadastrarProduto() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Produto cadastrado:', data);
      toast.success('Produto cadastrado com sucesso!');
      router.push('/lobby');
    } catch (error) {
      toast.error('Erro ao cadastrar produto');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="section-container">
        <div className="glass-card rounded-2xl overflow-hidden animate-fadeIn">
          <div className="bg-gradient-to-r from-agro-green-600 to-agro-green-500 p-8">
            <h1 className="text-2xl font-bold text-white">Cadastrar Produto</h1>
            <p className="text-white/80 mt-1">Preencha os dados do novo produto</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-agro-brown-700 mb-1">
                  Nome do Produto
                </label>
                <input
                  {...register('nome')}
                  type="text"
                  className="input-field"
                  disabled={isSubmitting}
                />
                {errors.nome && (
                  <p className="text-red-600 text-sm mt-1">{errors.nome.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="preco" className="block text-sm font-medium text-agro-brown-700 mb-1">
                  Preço (R$)
                </label>
                <input
                  {...register('preco')}
                  type="number"
                  step="0.01"
                  min="0"
                  className="input-field"
                  disabled={isSubmitting}
                />
                {errors.preco && (
                  <p className="text-red-600 text-sm mt-1">{errors.preco.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="descricao" className="block text-sm font-medium text-agro-brown-700 mb-1">
                  Descrição
                </label>
                <textarea
                  {...register('descricao')}
                  rows={3}
                  className="input-field"
                  disabled={isSubmitting}
                />
                {errors.descricao && (
                  <p className="text-red-600 text-sm mt-1">{errors.descricao.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="quantidade" className="block text-sm font-medium text-agro-brown-700 mb-1">
                  Quantidade
                </label>
                <input
                  {...register('quantidade')}
                  type="number"
                  min="0"
                  className="input-field"
                  disabled={isSubmitting}
                />
                {errors.quantidade && (
                  <p className="text-red-600 text-sm mt-1">{errors.quantidade.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="fornecedor" className="block text-sm font-medium text-agro-brown-700 mb-1">
                  Fornecedor
                </label>
                <input
                  {...register('fornecedor')}
                  type="text"
                  className="input-field"
                  disabled={isSubmitting}
                />
                {errors.fornecedor && (
                  <p className="text-red-600 text-sm mt-1">{errors.fornecedor.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <span className="animate-spin mr-2">⏳</span>
                    Cadastrando...
                  </span>
                ) : (
                  'Cadastrar'
                )}
              </button>
              
              <button
                type="button"
                onClick={() => router.push('/lobby')}
                className="btn-secondary w-full"
                disabled={isSubmitting}
              >
                Voltar ao Menu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}