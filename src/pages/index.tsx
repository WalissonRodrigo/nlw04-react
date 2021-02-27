import styles from "../styles/pages/Login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import Cookies from "js-cookie";

function Login() {
  const [userName, setUserName] = useState("");
  const router = useRouter();
  function handleLogin() {
    Cookies.set("userName", userName);
    router.push("/home");
  }
  return (
    <div className={styles.container}>
      <div className={styles.formLogin}>
        <img src="/logo-full.svg" alt="Logo do MoveIt" />
        <strong>Bem-vindo</strong>
        <div>
          <img src="/icons/github.svg" alt="icone do github" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            <img
              src="/icons/arrow-submit.svg"
              alt="icone do botão de submissão do formulário de login"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
