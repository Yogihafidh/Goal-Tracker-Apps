import { useState } from "react";
import Button from "./Button.js";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  function handleLogin() {
    onLogin(name);
  }

  return (
    <div className="login">
      <p>What your name?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button className={"button"} onClick={handleLogin}>
        Click
      </Button>
    </div>
  );
}
