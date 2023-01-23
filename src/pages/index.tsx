import { useState, useEffect } from "react";

export default function Home() {
  const [tema, setTema] = useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("tema") || "light";
    setTema(theme);
  }, []);

  const mudarTema = () => {
    const theme = tema == "light" ? "dark" : "light";
    localStorage.setItem("tema", theme);
    setTema(theme);
  };

  return (
    <div className={tema}>
      <div className="background flex">
        <h1 className="text">Ola tema</h1>
        <button onClick={mudarTema}>Mudar</button>
      </div>
    </div>
  );
}
