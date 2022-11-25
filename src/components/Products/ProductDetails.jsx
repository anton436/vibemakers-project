// import React, { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useProducts } from "../../contexts/ProductContextProvider";

// const ProductDetails = () => {
//   const navigate = useNavigate();
//   const { getProductDetails, productDetails, deleteProduct } = useProducts();
//   const { id } = useParams();
//   useEffect(() => {
//     getProductDetails(id);
//   }, []);

//     const { id } = useParams();
//     const navigate = useNavigate();
//     useEffect(() => {
//         getProductDetails(id);
//     }, []);
//     return (
//         <div>
//             {productDetails.name} {productDetails.price}
//             <button onClick={() => navigate(`/edit/${id}`)}>EDIT</button>
//             <button
//                 onClick={() => {
//                     deleteProduct(id);
//                     navigate("/products");
//                 }}
//             >
//               <Typography sx={{ fontSize: "12px", color: "rgb(46, 44, 44)" }}>
//                 Size Guide {size}
//               </Typography>
//               <Typography
//                 sx={{
//                   color: "rgb(46, 44, 44)",
//                   fontSize: "12px",
//                   fontWeight: "600",
//                   borderBottom: "1px solid rgb(46, 44, 44)",
//                 }}
//               ></Typography>
//             </Box>
//             <Box
//               className="sizes__block"
//               sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}
//             >
//               {sizes.map((item, index) => (
//                 <Typography
//                   sx={{
//                     cursor: "pointer",
//                     width: "30px",
//                     height: "30px",
//                     border: color ? "1px solid red" : "1px solid gray",
//                     borderRadius: "50%",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     margin: "10px 15px",
//                     fontSize: "12px",
//                     color: "grey",
//                   }}
//                   key={item}
//                   onClick={() => {
//                     sizesIndex(item);
//                     // changeColor()
//                   }}
//                   // onMouseOver={(e) => changeColor(e)}
//                 >
//                   {item}
//                 </Typography>
//               ))}
//             </Box>
//           </Box>

//           <ProductCounter />
//           <div>
//             <Box sx={{ width: "100%" }}>
//               <Accordion sx={{ width: "100%" }}>
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel1a-content"
//                   id="panel1a-header"
//                 >
//                   <Typography sx={{ fontWeight: "700" }}>
//                     Features & Specs
//                   </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <ul>
//                     {LiItems.map((item) => (
//                       <li>{item}</li>
//                     ))}
//                   </ul>
//                 </AccordionDetails>
//               </Accordion>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <Typography
//                   sx={{ display: "flex", alignItems: "center", color: "gray" }}
//                 >
//                   <AirportShuttleIcon />
//                   Free Shipping & Easy Returns
//                 </Typography>
//                 <Typography
//                   sx={{ display: "flex", alignItems: "center", color: "gray" }}
//                 >
//                   <PaymentIcon />
//                   Multiple Payment Options <HelpOutlineIcon />
//                 </Typography>
//                 <Typography
//                   sx={{ display: "flex", alignItems: "center" }}
//                 ></Typography>
//               </Box>
//             </Box>
//           </div>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// export default ProductDetails;
