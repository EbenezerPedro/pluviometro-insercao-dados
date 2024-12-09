import { useState } from "react";
import api from "../axios.config";
import { useNavigate } from "react-router-dom";
 // Importa a configuração do axios

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    matricula: "",
    endereco: "",
    escola: "",
    password: "",
    confirmPassword: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      setError("As senhas não correspondem!");
      return;
    }

    try {
      const response = await api.post("users/signup", { 
        name: formData.name,
        email: formData.email,
        matricula: formData.matricula,
        escola:formData.escola,
        endereco: formData.endereco,
        password: formData.password,
        confirm_password:formData.confirmPassword
      });

      alert("Cadastro realizado com sucesso!😊");
      setFormData({
        name: "",
        email: "",
        matricula: "",
        endereco: "",
        escola: "",
        password: "",
        confirmPassword: "",
      });


      if(response.status == 201){
        navigate("/"); 
      }

    } catch (error: any) {
      setError(
        error.response?.data?.message || "Ocorreu um erro ao cadastrar. Tente novamente 😒"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-2 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Cadastro</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos do Formulário */}
        {Object.keys(formData).map((field, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={field}
              className="block text-gray-700 font-medium mb-1 capitalize"
            >
              {field === "confirmPassword" ? "Confirmar Senha" : field}:
            </label>
            <input
              id={field}
              name={field}
              type={field.includes("password") ? "password" : "text"}
              placeholder={field}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className={`w-full bg-emerald-700 text-white py-2 px-4 rounded-lg transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-800"
          }`}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};
