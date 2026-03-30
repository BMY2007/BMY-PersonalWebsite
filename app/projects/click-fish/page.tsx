"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FishPage() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showText, setShowText] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setCount((c) => c + 1);

    setClicked(true);
    setTimeout(() => setClicked(false), 120);

    setShowText(true);
    setTimeout(() => setShowText(false), 600);
  };

  return (
    <div style={styles.container}>
      
      {/* 返回按钮 */}
      <button style={styles.backBtn} onClick={() => router.push("/")}>
        返回首页
      </button>

      {/* 图片 */}
      <img
  src={clicked ? "/images/p2.png" : "/images/p1.png"}
  alt="fish"
  style={{
    ...styles.image,
    transform: clicked ? "scale(0.9)" : "scale(1)",
    transition: "0.1s",
  }}
  onClick={handleClick}
/>

      {/* 提示 */}
      {showText && <div style={styles.text}>摸鱼成功！</div>}

      {/* 计数 */}
      <div style={styles.counter}>已摸鱼：{count} 次
        <div>成就：</div>
        {count >= 10 && <div>😎 摸鱼达人</div>}
        {count >= 20 && <div>👍 摸鱼高手</div>}
        {count >= 30 && <div>👻 摸鱼鬼才</div>}
        {count >= 40 && <div>🔥 摸鱼王者</div>}
        {count >= 50 && <div>🐉 摸鱼宗师</div>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "10px 16px",
    border: "1px solid white",
    borderRadius: "10px",
    background: "transparent",
    color: "white",
    cursor: "pointer",
  },
  image: {
    width: "150px",
    height: "150px",
    cursor: "pointer",
  },
  text: {
    marginTop: "10px",
    color: "#4ade80",
    fontSize: "18px",
  },
  counter: {
    marginTop: "20px",
    fontSize: "22px",
    fontWeight: "bold",
  },
};