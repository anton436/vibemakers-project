import * as React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import { Button, Typography, useMediaQuery } from "@mui/material";

import "./Cart.css";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  //   const isMobile = useMediaQuery({
  //     query: "(max-width: 786px)"
  //   });

  return (
    <table>
      <tr className=" cart-desktop tr-head">
        <th className=" item" align="left">
          ITEM
        </th>
        <th className=" headqty">QTY</th>
        <th align=" center">ITEM PRICE</th>
        <th align=" right">SUBTOTAL</th>
      </tr>

      {cart.products.map((row) => (
        <tr className="row">
          <td valign="top" align="left" className="cart-desktop img-descr">
            <img className="cartimg" src={row.item.picture} alt="noe" />
            <div className="name-qty">
              <p className="name">{row.item.name}</p>
              <p className="qty">Qty: {row.count}</p>
            </div>
          </td>
          <td className="cart-desktop" valign="top">
            <input
              className="counter"
              min={1}
              max={100}
              type="number"
              value={row.count}
              onChange={(e) => changeProductCount(e.target.value, row.item.id)}
            />
            <p
              className="remove"
              align="left"
              sx={{ display: "block" }}
              onClick={() => deleteCartProduct(row.item.id)}
            >
              Remove
            </p>
          </td>
          <td valign="top" className="prices cart-desktop" align="center">
            <p className="cart-price">${row.item.price}</p>
          </td>
          <td className="cart-desktop" valign="top" align="right">
            <p className="subprice">${row.subPrice}</p>
          </td>

          <td className="cart-phone">
            <img className="cartimg" src={row.item.picture} alt="noe" />
            <div className="name-qty">
              <p className="name">{row.item.name}</p>
              <p className="qty">Qty: {row.count}</p>

              <p className="cart-price">${row.item.price}</p>

              <input
                className="counter"
                min={1}
                max={100}
                type="number"
                value={row.count}
                onChange={(e) =>
                  changeProductCount(e.target.value, row.item.id)
                }
              />
              <p
                className="remove"
                align="left"
                sx={{ display: "block" }}
                onClick={() => deleteCartProduct(row.item.id)}
              >
                Remove
              </p>
              <p className="subprice">Subtotal: ${row.subPrice}</p>
            </div>
          </td>
        </tr>
      ))}
    </table>

    // <TableContainer sx={{ width: "65%" }} component={Paper}>
    //   <Table sx={{}} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Picture</TableCell>

    //         <TableCell align="center">Count</TableCell>
    //         <TableCell align="center">Price</TableCell>
    //         <TableCell align="center">subPrice</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {cart?.products.map((row) => (
    //         <TableRow
    //           key={row.item.id}
    //           sx={{
    //             "&:last-child td, &:last-child th": {
    //               border: 0,
    //             },
    //           }}
    //         >
    //           <TableCell component="th" scope="row" sx={{ display: "flex" }}>
    //             <img src={row.item.picture} width="70" height="70" alt="" />
    //             <p>{row.item.name}</p>
    //           </TableCell>

    //           <TableCell align="center" sx={{width:'20%'}}>
    //             <input
    //               min={1}
    //               max={100}
    //               type="number"
    //               value={row.count}
    //               onChange={(e) =>
    //                 changeProductCount(e.target.value, row.item.id)
    //               }
    //               sx={{ display: "block", width:'90px'}}
    //             />

    //             <Typography
    //               align="left"
    //               sx={{ display: "block" }}
    //               onClick={() => deleteCartProduct(row.item.id)}
    //             >
    //               delete
    //             </Typography>
    //           </TableCell>
    //           <TableCell align="center">
    //             {row.item.price} {row.item.price / 2}
    //           </TableCell>
    //           <TableCell align="center">{row.subPrice}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <Button onClick={() => cartCleaner()}>
    //     Buy now For {cart?.totalPrice}$
    //   </Button>
    // </TableContainer>
  );
}
