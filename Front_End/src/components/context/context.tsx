import { createContext, useContext, useState, ReactNode } from "react";


// Tipo para o contexto de autenticação
interface AuthContextData {
  userStatus: boolean;
  setUserStatus: React.Dispatch<React.SetStateAction<boolean>>
//   login: (userData: User) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userStatus, setUserStatus] = useState<boolean>(false);

//   const login = (userData: User) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData)); // Armazena no localStorage para persistência
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

  return (
    <AuthContext.Provider
      value={{
        userStatus,
        setUserStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
