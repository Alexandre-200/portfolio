import { useNave } from "@/hooks/useNave";
import { useState, useEffect } from "react";
import * as C from "../components/Nave/styles";


export default function Home() {
  const [tema, setTema] = useState("light");
  const [dir, setDir] = useState(0);

  const nave = useNave();

  useEffect(() => {
    const theme = localStorage.getItem("tema") || "light";
    setTema(theme);
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
       
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        nave.moveLeft();
        break;
      case "KeyW":
      case "ArrowUp":
        nave.moveUp();
        break;
      case "KeyD":
      case "ArrowRight":
        nave.moveRight();
        break;
      case "KeyS":
      case "ArrowDown":
        nave.moveDown();
        break;
    }
  };

  const mudarTema = () => {
    const theme = tema == "light" ? "dark" : "light";
    localStorage.setItem("tema", theme);
    setTema(theme);
  };

  return (
    <div className={tema}>
      <C.Container left={nave.x} size={40} top={nave.y}></C.Container>
      <div className="background flex">
        <h1 className="text">Ola tema</h1>

        <button onClick={mudarTema}>Mudar</button>
      </div>
    </div>
  );
}
