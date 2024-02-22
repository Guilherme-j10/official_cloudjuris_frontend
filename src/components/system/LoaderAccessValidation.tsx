import { Loader2 } from 'lucide-react';

export const LoaderAccessValidation: React.FC = () => {
  return(
    <div className="w-full min-h-[100vh] flex justify-center flex-col items-center">
      <Loader2
        width={100}
        height={100}
        className='animate-spin text-blue-500'
      />
      <h1 className='font-bold text-gray-500 mt-5 text-[1.5em]'>Verificando acesso...</h1>
    </div>
  );
}