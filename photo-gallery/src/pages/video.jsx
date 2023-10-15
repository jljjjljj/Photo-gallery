import * as React from "react";
import Sidebar from "../components/Sidebar";

import "../components/style.css";
import { Button } from "@mui/material";
import MouseTrail from "../components/mouseTrail";


export default function Video() {

  return (
    <>
      <Sidebar />
      <MouseTrail />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor:"#353e42"
        }}
      >
        <video  controls style={{width:"80%",marginTop:"70px"}}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
