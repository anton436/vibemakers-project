import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const navItems = ["USA", "Contact Us", "Corparate"];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});

function UpNavbar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "35px" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#03234c", height: "35px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.up("sm")]: {
              minHeight: "35px",
            },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              width: "33%",
            }}
          >
            <Box
              sx={{
                display: "block",
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              <Box sx={{ display: "flex", marginLeft: "20px" }}>
                <MailOutlineOutlinedIcon />

                <Typography
                  sx={{
                    fontSize: "12px",
                    margin: "6px 0 0 2px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/auth")}
                >
                  Sign Up to Join FILA
                </Typography>
              </Box>
            </Box>
          </Typography>

          <Typography
            align="center"
            sx={{
              width: "33%",
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
              textAlign: "center",
              fontSize: "13px",
            }}
          >
            FREE STANDARD SHIPPING
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "33%",
              justifyContent: "flex-end",
            }}
          >
            {navItems.map((item) => (
              <Button
                onClick={() => navigate("/auth")}
                key={item}
                sx={{
                  color: "#fff",
                  fontSize: "10px",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default UpNavbar;
