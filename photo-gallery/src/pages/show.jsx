import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../components/style.css";
export default function Show() {
  return (
    <div>
      <Sidebar />
      <p className="genshin"></p>
      <Navbar />

      <div
        style={{
          height: "40vh",
          backgroundColor: "#1b1c1c",
          overflow: "hidden",
          position: "relative",
        }}
      >

        <div
          style={{
            margin: "5% auto",
            display: "flex", // 使用 Flex 布局

            animation: "scroll 15s linear infinite",
            whiteSpace: "nowrap",
            position: "absolute",
            justifyContent: "space-between", // 将元素平均分布在空间内
            alignItems: "flex-end", // 垂直对齐到底部
          }}
          onMouseEnter={() => {
            // 鼠标悬停时停止滚动
            const element = document.querySelector(".scrolling-container");
            if (element) {
              element.style.animationPlayState = "paused";
            }
          }}
          onMouseLeave={() => {
            // 鼠标离开时恢复滚动
            const element = document.querySelector(".scrolling-container");
            if (element) {
              element.style.animationPlayState = "running";
            }
          }}
          className="scrolling-container" // 为了在JavaScript中选择元素
        >
          <img
            src="/img/11.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/22.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/33.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/44.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/11.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/22.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/33.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/44.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/11.jpg"
            style={{
              width: "22%",
            }}
          ></img>
          <img
            src="/img/22.jpg"
            style={{
              width: "22%",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}
