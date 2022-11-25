import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import React from "react";
import Connect from "../components/ContactUs/Connect";
import ContactUs from "../components/ContactUs/ContactUs";
import GoogleMap from "../components/ContactUs/GoogleMap";

const theme = createTheme();
const ContactUsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", mt: 4, color: "#0b1f3f" }}>
       <ContactUs/>
        <Box sx={{ width: "50%" }}>
          <Connect />
          <GoogleMap />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContactUsPage;
