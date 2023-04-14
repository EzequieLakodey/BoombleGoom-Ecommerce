// React
import React from "react";
import { useState } from "react";

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

// Components

// Router Dom

// Axios

// Material Ui
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";

/* Imports */

const ItemsCounter = ({ initial }) => {
  const { cart, AddItemsToCart } = useContext(CartContext);

  const [count, setCount] = useState(initial);

  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div>
        <IconButton onClick={remove}>
          <RemoveIcon fontSize="large" />
        </IconButton>

        <TextField
          id="filled-basic"
          label="Quantity"
          variant="filled"
          value={count}
          sx={{ width: 0.1 }}
        />

        <IconButton onClick={add}>
          <AddIcon fontSize="large" />
        </IconButton>

        <Container
          sx={{
            display: "flex",

            justifyContent: "center",
          }}>
          <CardActions>
            <Button variant="contained" onClick={AddItemsToCart}>
              Add to cart
            </Button>
          </CardActions>
        </Container>
      </div>
    </div>
  );
};

export default ItemsCounter;
