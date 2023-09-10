import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/style.css";
export default function Show() {
  return (
    <div>
      <Header />
      <p className="genshin"></p>

      <Navbar />

      <div
        style={{
          height: "40vh",
          backgroundColor: "#1b1c1c",
          overflow:'hidden'
        }}
      >
        <div
          style={{
         
            width: "90%",
            margin:"5% auto",
            display: "flex", // 使用 Flex 布局
            justifyContent: "space-between", // 将元素平均分布在空间内
            alignItems: "flex-end", // 垂直对齐到底部
          }}
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
        </div>
      </div>
    </div>
  );
}
