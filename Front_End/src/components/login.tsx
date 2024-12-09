import { useState } from "react";
import api from "../axios.config"; // Importa a configuração do axios
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/context";

export const Login = () => {

  const { setUserStatus } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para envio do login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/users/signin", {
        email: formData.email,
        password: formData.password,
      });
       

     if(response.status == 200) {
       setUserStatus(true)
       navigate("/")
     } else {
      setError(
         "Erro ao tentar fazer login. Verifique suas credenciais."
      );
     }

    } catch (error: any) {
      setError(
        error.response?.data?.message || "Erro ao tentar fazer login. Verifique suas credenciais."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo de Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Senha:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

    
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className={`w-full bg-emerald-700 text-white py-2 px-4 rounded-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-800"
            }`}
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-emerald-700 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
