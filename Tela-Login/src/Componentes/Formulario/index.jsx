import { useState } from "react";

import "./formulario.css";

function Formulario() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const enviofeito = (event) => {
    event.preventDefault();
    console.log("aconteceu");
  };

  return (
    <div>
      <form className="form" onSubmit={enviofeito}>
        <h1>LOGIN</h1>
        <label htmlFor="usuario">usuario</label>
        <input
        id="usuario"
          type="text"
          placeholder="Usuario"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div>
        <label for="senha">senha</label>
        <input
        id="senha"
          type="password"
          placeholder="qual sua sennha?"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Formulario;
