import { useState, useEffect } from "react";
import { NaveSides } from "./../types/naveSides";

export const useNave = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [x,setX] = useState(0);
  const [side, setSide] = useState<NaveSides>("left");

  useEffect( () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    setX(w/2);

    setPos((pos) => ({
      
      x: w / 2,
      y: h - 80,
    }));
   
  }, []);

  //canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
  const moveLeft = () => {

    console.log(" x"+x);
    console.log("pos y"+pos.y);
    
    setPos((pos) => ({
      x: canMove(pos.x - 5, pos.y) ? pos.x - 5 : pos.x,
      y: pos.y,
    }));
    //mostra(pos.x, pos.y);
    setSide("left");
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: canMove(pos.x + 5, pos.y) ? pos.x + 5 : pos.x,
      y: pos.y,
    }));
    //mostra(pos.x, pos.y);
    setSide("right");
  };

  const canMove = (x: number, y: number) => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    return true;
  };

 

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
    //atira,
  };
};
