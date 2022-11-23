import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PaymentIcon from "@mui/icons-material/Payment";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

import "./style.css";
import { Button, CardContent } from "@mui/material";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { getProductDetails, productDetails } = useProducts();
  const { id } = useParams(
    useEffect(() => {
      getProductDetails(id);
    }, [])
  );

  let sizes = [
    7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15, 16, 17, 18, 19,20,21
  ];

  const [size, setSize] = useState();

  function sizesIndex(item) {
    setSize(item);
  }
  const LiItems = [
    "leather / textile / synthetic",
    "embossed FILA logos on tongue, quarter, and instep",
    "embossed FILA basketball logo on adjustable heel strap",
    "perforated and reflective detailing on eyerow",
    "embossed detailing on sidewall",
    "cushioned heel collar and mesh tongue",
    "adjustable heel strap",
  ];

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <Button
            onClick={() => navigate(`/products`)}
            sx={{ color: "black", backgroundColor: "whitesmoke" }}
          >
            Disabled
          </Button>
        </div>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent:'center'

          }}
        >
          <Typography gutterBottom variant="h3" component="div">
            <img src={productDetails.picture} alt="" />
          </Typography>
        </Box>

        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent sx={{ width: "100%", fontWeight: "bold" }}>
            <Typography gutterBottom variant="h4" component="div">
              {productDetails.name}
            </Typography>

            <Typography sx={{ fontSize: "25px", color: "green" }}>
              ${productDetails.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productDetails.description}
            </Typography>
          </CardContent>

          <div>
            АЙЖАМАЛ ТЫ ГДЕ АЙЖАМАЛ ТЫ ГДЕ АЙЖАМАЛ ТЫ ГДЕ АЙЖАМАЛ ТЫ ГДЕ АЙЖАМАЛ
            ТЫ ГДЕ АЙЖАМАЛ ТЫ ГДЕ АЙЖАМАЛ ТЫ ГДЕ АЙЖАМАЛ ТЫ ГДЕ 
            
           
          </div>

          <Box sx={{ width: "50%" }}>
            <Box
              sx={{ display: "flex", justifyContent: "start" }}
              className="sizes__top"
            >
              <Typography sx={{ fontSize: "12px", color: "rgb(46, 44, 44)" }}>
                Size Guide {size}
              </Typography>
              <Typography
                sx={{
                  color: "rgb(46, 44, 44)",
                  fontSize: "12px",
                  fontWeight: "600",
                  borderBottom: "1px solid rgb(46, 44, 44)",
                }}
              ></Typography>
            </Box>
            <Box
              className="sizes__block"
              sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}
            >
              {sizes.map((item) => (
                <Typography
                  style={{
                    cursor: "pointer",
                    width: "30px",
                    height: "30px",
                    border: "1px solid grey",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px 15px",
                    fontSize: "12px",
                    color: "grey",
                  }}
                  key={item}
                  onClick={() => sizesIndex(item)}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>


          
          <div>
            <Box sx={{ width: "100%" }}>
              <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ fontWeight: "700" }}>
                    Features & Specs
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {LiItems.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <AirportShuttleIcon />
                  Free Shipping & Easy Returns
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <PaymentIcon />
                  Multiple Payment Options
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <HelpOutlineIcon />
                </Typography>
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetails;
