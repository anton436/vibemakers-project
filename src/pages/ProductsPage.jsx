// import { Box, Typography } from '@mui/material';
import React from "react";

import {
    Checkbox,
    createTheme,
    Divider,
    Link,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import ProductList from "../components/Products/ProductList";

const theme = createTheme();
const Left = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1024,
                lg: 1150,
                xl: 1536,
            },
        },
    });

    const filterNew = ["Athletes", "Collaborations", "Must-Haves", "Shops"];
    const color = [
        "black",
        "blue",
        "aqua",
        "red",
        "pink",
        "orange",
        "yellow",
        "green",
        "aqua",
        "brown",
        "grey",
    ];
    const size = [
        1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
        10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17,
    ];
    const price = ["$19 - $30", "$31 - $50", "$51 - $100", "$101 +"];
    const apparel = [
        "Accessories",
        "Bodysuits",
        "Dresses",
        "Hoodies",
        "Jackets",
        "Leggings",
        "Outerwear",
        "Pants",
        "Polos",
        "Rompers",
    ];
    const shoeStyle = ["High Top", "Low Top", "Mid Top", "Sandal", "Slide"];
    const collections = [
        "Axilus 2 Energized",
        "Axilus Jr",
        "Cage",
        "Disruptor 2",
        "Double Bounce",
        "Drifter",
        "Electrove",
        "F-13",
        "F-14",
        "Fila Orbit",
    ];
    const benefits = [
        "Anti-Odor Fabric",
        "CoolMax® Technology",
        "Forza Ball Short",
        "Forza Sculpting Fabric",
        "Recycled Materials",
        "Stretch Fabric",
        "uv_rotection",
        "UV Protection",
        "Wicking and Breathable Fabric",
    ];
    const collabarations = [
        "FILA x 2PAC",
        "MSGM x FILA",
        "The Museum DC x FILA",
    ];
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "10px",
                            marginLeft: "10%",
                            marginRight: "10%",
                            marginBottom: "10px",
                            marginTop: "10px",
                        }}
                    >
                        <Link href="https://www.fila.com/search?cgid=root">
                            FILA /{"shoes "}
                        </Link>
                    </Typography>
                </Box>

                <Box sx={{ position: "relative" }}>
                    <img
                        src="https://i.shgcdn.com/1e2ce2e7-63d8-4bc1-ae1d-4c910df9ce52/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                        width="100%"
                        height="30%"
                        alt="banner"
                    />

                    <Typography
                        align="center"
                        sx={{
                            position: "absolute",
                            fontSize: "40px",
                            top: "0",
                            right: "0",
                            left: "0",
                            lineHeight: "3",
                            fontWeight: "800",
                        }}
                    >
                        Shoes + Sneakers
                    </Typography>
                    <Typography
                        align="center"
                        sx={{
                            position: "absolute",
                            fontSize: "18px",
                            right: "0",
                            left: "0",
                            bottom: "0",
                            top: "50%",
                            [theme.breakpoints.up("md")]: {
                                top: "60%",
                            },
                            [theme.breakpoints.up("sm")]: {
                                top: "65%",
                            },
                        }}
                    >
                        The Latest Styles for Men + Women
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ margin: "20px", width: "100%" }}>
                <Box sx={{ width: "35%" }}>
                    <Typography
                        sx={{
                            margin: "0 20%",
                            width: "50%",
                            color: "#0b1f3f",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        FILTER
                    </Typography>
                    <Divider
                        sx={{
                            width: "60%",
                            margin: "10px auto",
                            border: "1px solid",
                            backgroundColor: "black",
                        }}
                    ></Divider>
                </Box>

                <Box sx={{ display: "flex" }}>
                    <Box align="center" sx={{ width: "35%" }}>
                        <Box align="left" sx={{ width: "60%" }}>
                            <Typography
                                sx={{
                                    padding: "0%",
                                    margin: "0%",
                                    color: "#0b1f3f",
                                    fontWeight: "bold",
                                }}
                            >
                                New
                            </Typography>
                            <List sx={{ marginBottom: "20px" }}>
                                {filterNew.map((i, index) => (
                                    <ListItem
                                        key={index}
                                        sx={{
                                            padding: "0%",
                                            margin: "0%",
                                            fontSize: "80%",
                                        }}
                                    >
                                        {i}
                                    </ListItem>
                                ))}
                            </List>
                            <Accordion
                                sx={{
                                    border: "none",
                                    p: 0,
                                    boxShadow: "none",
                                }}
                                expanded={expanded === "panel1"}
                                onChange={handleChange("panel1")}
                            >
                                <AccordionSummary
                                    sx={{ padding: 0 }}
                                    expandIcon={<AddIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography
                                        sx={{
                                            width: "50%",
                                            flexShrink: 0,
                                            color: "#0b1f3f",
                                            fontWeight: "bold",
                                            padding: "7px 0",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        COLOR
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        margin: "0px",
                                    }}
                                >
                                    {color.map((i, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                borderRadius: "50%",
                                                border: "1px solid black",
                                                backgroundColor: `${i}`,
                                                width: "35px",
                                                height: "35px",
                                                margin: "10px",
                                            }}
                                        ></Box>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{ border: "none", p: 0, boxShadow: "none" }}
                                expanded={expanded === "panel2"}
                                onChange={handleChange("panel2")}
                            >
                                <AccordionSummary
                                    sx={{ padding: 0 }}
                                    expandIcon={<AddIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography
                                        sx={{
                                            width: "50%",
                                            flexShrink: 0,
                                            color: "#0b1f3f",
                                            fontWeight: "bold",
                                            padding: "7px 0",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        SIZE
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {size.map((i, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    border: "1px solid black",
                                                    color: "#0b1f3f",
                                                    fontWeight: "bold",
                                                    fontSize: "12px",
                                                    borderRadius: "50%",
                                                    width: "30px",
                                                    height: "30px",
                                                    textAlign: "center",
                                                    margin: "3px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                {i}
                                            </Box>
                                        ))}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{ border: "none", p: 0, boxShadow: "none" }}
                                expanded={expanded === "panel3"}
                                onChange={handleChange("panel3")}
                            >
                                <AccordionSummary
                                    sx={{ padding: 0 }}
                                    expandIcon={<AddIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography
                                        sx={{
                                            width: "50%",
                                            flexShrink: 0,
                                            color: "#0b1f3f",
                                            fontWeight: "bold",
                                            padding: "7px 0",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        PRICE
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {price.map((i, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ fontSize: "13px" }}
                                        >
                                            <Checkbox />
                                            {i}
                                        </ListItem>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{ border: "none", p: 0, boxShadow: "none" }}
                                expanded={expanded === "panel4"}
                                onChange={handleChange("panel4")}
                            >
                                <AccordionSummary
                                    sx={{ padding: 0 }}
                                    expandIcon={<AddIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography
                                        sx={{
                                            width: "60%",
                                            flexShrink: 0,
                                            color: "#0b1f3f",
                                            padding: "7px 0",
                                            fontWeight: "bold",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        APPAREL STYLE
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {apparel.map((i, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ fontSize: "13px" }}
                                        >
                                            <Checkbox />
                                            {i}
                                        </ListItem>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{ border: "none", p: 0, boxShadow: "none" }}
                                expanded={expanded === "panel5"}
                                onChange={handleChange("panel5")}
                            >
                                <AccordionSummary
                                    expandIcon={<AddIcon />}
                                    sx={{ padding: 0 }}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography
                                        sx={{
                                            width: "50%",
                                            flexShrink: 0,
                                            color: "#0b1f3f",
                                            fontWeight: "bold",
                                            padding: "7px 0",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        SHOE STYLE
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {shoeStyle.map((i, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ fontSize: "13px" }}
                                        >
                                            <Checkbox />
                                            {i}
                                        </ListItem>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{ border: "none", p: 0, boxShadow: "none" }}
                                expanded={expanded === "panel6"}
                                onChange={handleChange("panel6")}
                            >
                                <AccordionSummary
                                    expandIcon={<AddIcon />}
                                    sx={{ padding: 0 }}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography
                                        sx={{
                                            width: "50%",
                                            flexShrink: 0,
                                            color: "#0b1f3f",
                                            fontWeight: "bold",
                                            padding: "7px 0",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem",
                                            },
                                        }}
                                    >
                                        COLLECTIONS
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {collections.map((i, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ fontSize: "13px" }}
                                        >
                                            <Checkbox />
                                            {i}
                                        </ListItem>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{ border: "none", p: 0, boxShadow: "none" }}
                                expanded={expanded === "panel7"}
                                onChange={handleChange("panel7")}
                            >
                                <AccordionSummary
                                    expandIcon={<AddIcon />}
                                    sx={{ padding: 0 }}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography
                                        sx={{
                                            width: "50%",
                                            flexShrink: 0,
                                            color: "#0b1f3f",
                                            fontWeight: "bold",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem",
                                            },
                                            padding: "7px 0",
                                        }}
                                    >
                                        BENEFITS
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {benefits.map((i, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ fontSize: "13px" }}
                                        >
                                            <Checkbox />
                                            {i}
                                        </ListItem>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{ border: "none", p: 0, boxShadow: "none" }}
                                expanded={expanded === "panel8"}
                                onChange={handleChange("panel8")}
                            >
                                <AccordionSummary
                                    expandIcon={<AddIcon />}
                                    sx={{ padding: 0 }}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography
                                        sx={{
                                            width: "50%",
                                            flexShrink: 0,
                                            color: "#0b1f3f",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem",
                                            },
                                            fontWeight: "bold",
                                            padding: "7px 0",
                                        }}
                                    >
                                        COLLABORATIONS
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {collabarations.map((i, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ fontSize: "13px" }}
                                        >
                                            <Checkbox />
                                            {i}
                                        </ListItem>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Divider
                            sx={{
                                width: "60%",
                                margin: "10px",
                                border: "1px solid",
                                backgroundColor: "black",
                            }}
                        ></Divider>
                    </Box>
                    <Box sx={{ width: "65%" }}>
                        <ProductList />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Left;
