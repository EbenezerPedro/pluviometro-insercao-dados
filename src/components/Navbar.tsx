import { Droplets } from 'lucide-react';
import { Link } from "react-router-dom";
import { useAuth } from './context/context';

export default function Navbar() {
  const { userStatus, setUserStatus } = useAuth();

  return (
    <nav className="bg-emerald-700 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Droplets className="h-6 w-6" />
          <span className="font-bold text-xl">LOGO</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-emerald-200">Início</a>
          <a href="#sobre" className="hover:text-emerald-200">Sobre</a>
          <Link to="DadosColect" >Dados Coletados</Link>
          <a href="#FAQ" className="hover:text-emerald-200">Ajuda</a>

          {userStatus ? (
            <div className="flex items-center gap-3">
              {/* Mostrar opção "Cadastrar Dados" se o usuário estiver logado */}
              <Link to="/CadastrarDados" className="bg-white text-emerald-700 px-4 py-1.5 rounded-full hover:bg-emerald-100">
                Cadastrar Dados
              </Link>

              {/* Mostrar botão Sair */}
              <button onClick={() => setUserStatus(false)} className="bg-white text-emerald-700 px-4 py-1.5 rounded-full hover:bg-emerald-100">
                Sair
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/acessar" className="hover:text-emerald-200">Acessar</Link>
              <Link to="/cadastro" className="bg-white text-emerald-700 px-4 py-1.5 rounded-full hover:bg-emerald-100">
                Cadastrar
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
