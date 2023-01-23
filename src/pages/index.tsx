import { useNave } from "@/hooks/useNave";
import { useState, useEffect } from "react";
import * as C from "../components/Nave/styles";

export default function Home() {
  const [tema, setTema] = useState("light");

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
      case "KeyD":
      case "ArrowRight":
        nave.moveRight();
        break;
      case "ArrowUp":
        atira();
        break;
    }
  };

  const mudarTema = () => {
    const theme = tema == "light" ? "dark" : "light";
    localStorage.setItem("tema", theme);
    setTema(theme);
  };

  const atira = () => {
   
    const x = nave.x;
    const y = nave.y;

    const t = document.createElement("div");
    const att1 = document.createAttribute("class");
    const att2 = document.createAttribute("style");
    att1.value = "tiro";
    att2.value = "top:" + x + "px; left:" + y + "px;";
    t.setAttributeNode(att1);
    t.setAttributeNode(att2);
    document.body.appendChild(t);
  };

 

  return (
    <div className={`${tema} `}>
      <C.Container
        left={nave.x}
        size={40}
        top={nave.y}
        className="nave"
      ></C.Container>
      <div className="background flex">
        <h1 className="text">Ola tema</h1>
        <button onClick={mudarTema}>Mudar</button>
      </div>
    </div>
  );
}
