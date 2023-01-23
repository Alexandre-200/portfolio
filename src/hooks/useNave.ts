import { useState, useEffect } from "react";
import { NaveSides } from "./../types/naveSides";

export const useNave = () => {
  const [pos, setPos] = useState({ x: 100, y: 200 });
  const [side, setSide] = useState<NaveSides>("down");

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
      x: canMove(pos.x - 5, pos.y) ? pos.x - 5 : pos.x,
      y: pos.y,
    }));

    setSide("left");
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: pos.x + 5,
      y: pos.y,
    }));

    setSide("right");
  };

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y + 5,
    }));

    setSide("down");
  };

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y - 5,
    }));

    setSide("up");
  };

  const canMove = (x: number, y: number) => {
    const h = window.screen.height;
    const w = window.screen.width;
    console.log("x " + pos.x + " y " + pos.y);
    return true;
  };

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  };
};
