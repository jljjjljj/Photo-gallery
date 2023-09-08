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
  padding: theme.spacing(5),
  width: "800px",
  textAlign: "center",
  fontSize: 48,
  fontWeight: 700,
  color: "white",
}));

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
          width: "100%",
          height: "800px",
          minWidth: "500px",
          minHeight: "700px",
          overflow: "hidden",
          backgroundImage: 'url("/img/bg4.gif")',
          backgroundSize: "cover",
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
            <Button
              variant="contained"
              style={{
                width: "200px",
                height: "60px",
                fontSize: "18px",
                backgroundColor: "#1198d8",
              }}
              onClick={handleClick}
            >
              <PlayCircleOutlineIcon
                style={{
                  padding: 5,
                }}
              />
              Start
            </Button>
          </div>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
