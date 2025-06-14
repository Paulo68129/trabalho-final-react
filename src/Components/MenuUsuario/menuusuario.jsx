import styles from "./menuusuario.module.css";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export function MenuUsuario() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://sua-api.com/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.warn("Erro ao sair (ignorado para segurança):", error);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <div className={styles.menuDeUsuario}>
      <img src="https://i.postimg.cc/3xFL6Xcs/0Perfil.png" alt="Foto de Perfil" className={styles.avatar} />
      <div className={styles.suspenso}>
        <ul>
          <li onClick={() => navigate("/perfil")}>Perfil</li>
          <li onClick={() => navigate("/pedidos")}>Meus Pedidos</li>
          <li onClick={() => navigate("/favoritos")}>Favoritos</li>
          <li onClick={() => navigate("/configuracoes")}>Configurações</li>
          <li onClick={handleLogout}>Sair</li>
        </ul>
      </div>
    </div>
  );
}
