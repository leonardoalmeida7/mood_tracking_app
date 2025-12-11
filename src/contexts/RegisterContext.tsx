import { createContext, useState, useContext } from "react";

type RegisterContextType = {
  name: string;
  email: string;
  password: string;
  profileImage: File | null;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setProfileImage: (file: File | null) => void;
  resetForm: () => void;
  resetForm2: () => void;
};

export const RegisterContext = createContext<RegisterContextType | null>(null);

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  
  const resetForm2 = () => {
    setName("");
    setProfileImage(null);
  };


  return (
    <RegisterContext.Provider
      value={{
        name,
        email,
        password,
        profileImage,
        setName,
        setEmail,
        setPassword,
        setProfileImage,
        resetForm,
        resetForm2,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
};
