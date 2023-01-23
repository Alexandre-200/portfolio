import { useState, useEffect } from "react";
import { NaveSides } from "./../types/naveSides";

export const useNave = () => {
  const [pos, setPos] = useState({ x: 100, y: 200 });
  const [side, setSide] = useState<NaveSides>("left");

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setPos((pos) => ({
      x: w / 2,
      y: h -80,
    }));
  }, []);

  //canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
  const moveLeft = () => {
    setPos((pos) => ({
      x: canMove(pos.x - 10, pos.y) ? pos.x - 10 : pos.x,
      y: pos.y,
    }));

    setSide("left");
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: canMove(pos.x + 10, pos.y) ? pos.x + 10 : pos.x,
      y: pos.y,
    }));

    setSide("right");
  };



  const canMove = (x: number, y: number) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    console.log("x " + pos.x + " y " + pos.y);
    return true;
  };

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
   
  };
};
