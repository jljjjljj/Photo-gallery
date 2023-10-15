import * as React from "react";
import Sidebar from "../components/Sidebar";
import MouseTrail from "../components/mouseTrail";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import "../components/style.css";
import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function Animation() {
  const [open, setOpen] = React.useState(false);
  const Buttonstart = styled(Button)({
    width: "200px",
    height: "60px",
    fontSize: "18px",
    backgroundColor: "#E91E63",
    transition: "all 0.3s ease",
    position: "absolute",
    top: "550px",
    left: "44px",
    "&:hover": {
      backgroundColor: "#fff",
      borderColor: "#0062cc",
      color: "#000",
      transform: "scale(1.1)",
    },
  });
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#353e42",
        }}
      >
        {!open && (
          <>
            <img src="/3d.jpg" style={{ width: "100%", height: "100%" }} />
            <Buttonstart variant="contained" onClick={handleClick}>
              <PlayCircleOutlineIcon
                style={{
                  padding: 5,
                }}
              />
              View
            </Buttonstart>
          </>
        )}
        {open && (
          <>
            <video controls style={{ width: "80%", marginTop: "70px" }}>
              <source src="/0001.mp4" type="video/mp4" />
            </video>
          </>
        )}

        <MouseTrail />
      </div>
    </>
  );
}
