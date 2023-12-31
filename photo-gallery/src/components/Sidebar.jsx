import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

import "../components/style.css";
import { Button } from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const Buttonback = styled(Button)({
  marginLeft: "auto",
  color: "white",
  border: "1px solid white",
  width: "10px",
  "&:hover": {
    // 在这里定义鼠标悬停时的样式
    backgroundColor: "white", // 例如，改变背景颜色
    color: "black", // 改变文字颜色
  },
});
const ListItemhover = styled(ListItem)({
  textAlign: "center",
  transition: "transform 0.3s ease" /* 设置动画持续时间和缓动函数 */,

  "&:hover": {
    // 在这里定义鼠标悬停时的样式
    backgroundColor: "#161b20", // 例如，改变背景颜色
    transform: "scale(0.9)",
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const menuItems = [
  { text: "Photo", path: "/show" },
  { text: "Video", path: "/video" },
  { text: "Animation", path: "/animation" },
];

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Gallery show
          </Typography>
          <Buttonback
            variant="outlined"
            href="#outlined-buttons"
            onClick={handleClick}
          >
            Back
          </Buttonback>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "white" }} />
            ) : (
              <ChevronRightIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItemhover key={index} disablePadding>
              <ListItemButton to={item.path}>
                <ListItemIcon>
                  {(() => {
                    switch (item.text) {
                      case "Photo":
                        return <InsertPhotoIcon style={{ color: "white" }} />;
                      case "Animation":
                        return <ViewInArIcon style={{ color: "white" }} />;
                      case "Video":
                        return <SlowMotionVideoIcon style={{ color: "white" }} />;
                      default:
                        return null; // 如果文本不匹配任何情况，可以返回 null 或其他默认内容
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItemhover>
          ))}
        </List>
      </Drawer>
    </>
  );
}
