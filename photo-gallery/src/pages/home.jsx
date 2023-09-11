import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
const defaultTheme = createTheme();
const dividerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "200px",
};
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backdropFilter: "blur(15px)",
  padding: theme.spacing(2),
  marginTop: "65px",
  textAlign: "center",
  fontSize: 40,
  fontWeight: 700,
  color: "white",
}));

const Buttonstart = styled(Button)({
  width: "200px",
  height: "60px",
  fontSize: "18px",
  backgroundColor: "#E91E63",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#0062cc",
    color: "#000",
    transform: "scale(1.1)",
  },
});

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/show", { replace: true });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth="xl"
        style={{
          height: "100vh",
          overflow: "hidden",
          backgroundImage: 'url("/img/ass1.jpg")',
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="md">
          <div style={dividerStyle}>
            <Div>Welcome to my gallery</Div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Buttonstart variant="contained" onClick={handleClick}>
              <PlayCircleOutlineIcon
                style={{
                  padding: 5,
                }}
              />
              Start
            </Buttonstart>
          </div>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
