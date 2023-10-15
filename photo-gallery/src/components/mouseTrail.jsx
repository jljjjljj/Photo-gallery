import React, { useEffect, useRef } from "react";
import "../components/MouseParticles.css";

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let trail = [];
const handleMouseMove = (e) => {
  trail.push({ x: e.clientX, y: e.clientY });

  // 控制拖尾的最大长度
  if (trail.length > 25) {
    trail.shift();
  }

  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

 // 创建彩虹渐变
  const rainbowGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  rainbowGradient.addColorStop(0, "#ff0d0d");
  rainbowGradient.addColorStop(1 / 6, "#ff9000");
  rainbowGradient.addColorStop(2 / 6, "#ffe200");
  rainbowGradient.addColorStop(3 / 6, "#abff00");
  rainbowGradient.addColorStop(4 / 6, "#00fffb");
  rainbowGradient.addColorStop(5 / 6, "#00a1ff");
  rainbowGradient.addColorStop(1, "#ba00ff");

  // 设置彩虹渐变为线条颜色
  ctx.strokeStyle = rainbowGradient;
  ctx.lineWidth = 3;
  ctx.globalAlpha = 1;
  ctx.shadowColor = "#fff"; // 发光颜色
  ctx.shadowBlur = 10; // 发光模糊半径

  for (let i = 0; i < trail.length; i++) {
    const alpha = i / trail.length; // 计算逐渐减小的不透明度
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(trail[i].x, trail[i].y);
    ctx.lineTo(trail[i + 1] ? trail[i + 1].x : trail[i].x, trail[i + 1] ? trail[i + 1].y : trail[i].y);
    ctx.stroke();
  }
};

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-trail" width={window.innerWidth} height={window.innerHeight} />;
};

export default MouseTrail;

