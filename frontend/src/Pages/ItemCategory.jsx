import React, { useContext, useEffect, useState } from "react";
import "./Style/ItemCategory.css";
import Item from "../Components/Item/Item";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { ShopContext } from "../Context/ShopContext";
import { Box, Button, Typography } from "@mui/material";
const ItemCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const [favor, setFavor] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [special, setSpecial] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);

  const handleBannerChange = () => {
    switch (props.category) {
      case "coffee":
        return {
          h1: "COFFEE",
          p1: "Coffee: the favorite drink of the civilized world.",
          p2: "Thomas Jefferson",
          h2Style: "coffee_h1",
          p1Style: "coffee_p1",
          p2Style: "coffee_p2",
        };
      case "tea":
        return {
          h1: "TEA",
          p1: "Tea is quiet and our thirst for tea is never far from our craving for beauty",
          p2: " James Norwood Pratt",
          h2Style: "tea_h1",
          p1Style: "tea_p1",
          p2Style: "tea_p2",
        };
      case "bean and seed":
        return {
          h1: "SEED",
          p1: "From a coffee bean springs energy and ambition; ",
          p2: "From a tea seed, serenity and contemplation.",
          h2Style: "seed_h1",
          p1Style: "seed_p1",
          p2Style: "seed_p2",
        };
      default:
        return {
          h1: "",
          p1: "",
          p2: "",
          h2Style: "",
          p1Style: "",
          p2Style: "",
        };
    }
  };
  const { h1, p1, p2, h2Style, p1Style, p2Style } = handleBannerChange();

  const renderFavorOptionItem = () => {
    if (props.category === "tea") {
      return (
        <div>
          <Typography
            variant="h5"
            sx={{ fontSize: { lg: "24px", md: "24px", sm: "20px", xs: '16px' } }}
          >
            Favor
          </Typography>
          <FormGroup className="item_category-checkbox">
            <FormControlLabel
              control={<Checkbox checked={favor === "Light Favor"} />}
              onClick={handleFavorChange}
              name="Light Favor"
              label="Light Favor"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={favor === "Strong Favor"} />}
              onClick={handleFavorChange}
              name="Strong Favor"
              label="Strong Favor"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={favor === "Special Leaf"} />}
              onClick={handleFavorChange}
              name="Special Leaf"
              label="Special Leaf"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
          </FormGroup>
        </div>
      );
    } else if (props.category === "coffee") {
      return (
        <div>
          <Typography
            variant="h5"
            sx={{ fontSize: { lg: "24px", md: "24px", sm: "20px", xs: '16px' } }}
          >
            Favor
          </Typography>
          <FormGroup className="item_category-checkbox">
            <FormControlLabel
              control={<Checkbox checked={favor === "Light Favor"} />}
              onClick={handleFavorChange}
              name="Light Favor"
              label="Light Favor"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={favor === "Strong Favor"} />}
              onClick={handleFavorChange}
              name="Strong Favor"
              label="Strong Favor"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={favor === "Good With Milk"} />}
              onClick={handleFavorChange}
              name="Good With Milk"
              label="Good With Milk"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
          </FormGroup>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderTypeOptionItem = () => {
    if (props.category === "tea") {
      return (
        <div>
          <Typography variant="h5"  sx={{ fontSize: { lg: "24px", md: "24px", sm: "20px", xs: '16px' } }}>Type</Typography>
          <FormGroup className="item_category-checkbox">
            <FormControlLabel
              control={<Checkbox checked={type === "Tea Bag"} />}
              onClick={handleTypeChange}
              name="Tea Bag"
              label="Tea Bag"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={type === "Powdered Tea"} />}
              onClick={handleTypeChange}
              name="Powdered Tea"
              label="Powdered Tea"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
          </FormGroup>
        </div>
      );
    } else if (props.category === "coffee") {
      return (
        <div>
          <Typography variant="h5"  sx={{ fontSize: { lg: "24px", md: "24px", sm: "20px", xs: '16px' } }}>Type</Typography>
          <FormGroup className="item_category-checkbox">
            <FormControlLabel
              control={<Checkbox checked={type === "Regular"} />}
              onClick={handleTypeChange}
              name="Regular"
              label="Regular"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={type === "Decaf"} />}
              onClick={handleTypeChange}
              name="Decaf"
              label="Decaf"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
          </FormGroup>
        </div>
      );
    } else {
      return (
        <div>
          <Typography variant="h5"  sx={{ fontSize: { lg: "24px", md: "24px", sm: "20px", xs: '16px' } }}>Type</Typography>
          <FormGroup className="item_category-checkbox">
            <FormControlLabel
              control={<Checkbox checked={type === "Coffee Bean"} />}
              onClick={handleTypeChange}
              name="Coffee Bean"
              label="Coffee Bean"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={type === "Tea Seed"} />}
              onClick={handleTypeChange}
              name="Tea Seed"
              label="Tea Seed"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
          </FormGroup>
        </div>
      );
    }
  };

  const renderSpecialOptionItem = () => {
    if (props.category === "tea") {
      return (
        <div>
          <Typography variant="h5"  sx={{ fontSize: { lg: "24px", md: "24px", sm: "20px", xs: '16px' } }}>Forms</Typography>
          <FormGroup className="item_category-checkbox">
            <FormControlLabel
              control={<Checkbox checked={special === "Pound"} />}
              onClick={handleSpecialChange}
              name="Pound"
              label="Pound"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={special === "Bags"} />}
              onClick={handleSpecialChange}
              name="Bags"
              label="Bags"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={special === "Tin Can"} />}
              onClick={handleSpecialChange}
              name="Tin Can"
              label="Tin Can"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
          </FormGroup>
        </div>
      );
    } else if (props.category === "coffee") {
      return (
        <div>
          <Typography variant="h5"  sx={{ fontSize: { lg: "24px", md: "24px", sm: "20px", xs: '16px' } }}>Grind</Typography>
          <FormGroup className="item_category-checkbox">
            <FormControlLabel
              control={<Checkbox checked={special === "Espresso"} />}
              onClick={handleSpecialChange}
              name="Espresso"
              label="Espresso"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={special === "Manual Drip"} />}
              onClick={handleSpecialChange}
              name="Manual Drip"
              label="Manual Drip"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={special === "Auto Drip"} />}
              onClick={handleSpecialChange}
              name="Auto Drip"
              label="Auto Drip"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
            />
          </FormGroup>
        </div>
      );
    } else {
      return null;
    }
  };

  const handleFavorChange = (e) => {
    const value = e.target.name;
    setFavor(favor === value ? "" : value);
  };
  const handlePriceChange = (e) => {
    const value = e.target.name;
    setPrice(price === value ? "" : value);
  };

  const handleTypeChange = (e) => {
    const value = e.target.name;
    setType(type === value ? "" : value);
  };

  const handleSpecialChange = (e) => {
    const value = e.target.name;
    setSpecial(special === value ? "" : value);
  };
  useEffect(() => {
    setFavor("");
    setPrice("");
    setSpecial("");
    setType("");
    setFilterProduct(
      all_product.filter((product) => product.category === props.category)
    );
  }, [all_product, props.category]);

  const handleSearchItem = () => {
    let products = all_product.filter(
      (product) => product.category === props.category
    );

    if (favor) {
      products = products.filter((product) => product.favor === favor);
    }
    if (type) {
      products = products.filter((product) => product.type === type);
    }
    if (props.category === "tea") {
      if (special) {
        products = products.filter((product) => product.form === special);
      }
    } else if (props.category === "coffee") {
      if (special) {
        products = products.filter((product) => product.grind === special);
      }
    }
    if (price === "above") {
      products = products.filter((product) => product.price >= "20");
    } else if (price === "below") {
      products = products.filter((product) => product.price < "20");
    }

    setFilterProduct(products);
  };

  return (
    <Box className="item_category">
      <Box className="item_category_banner">
        <img src={props.banner} alt="" />
        <h2 className={h2Style}>{h1}</h2>
        <p className={p1Style}>{p1}</p>
        <p className={p2Style}>{p2}</p>
      </Box>
      <Box className="item_category-detail">
        <Box className="item_category-option">
          <div>
            {props.category !== "bean and coffee"
              ? renderFavorOptionItem()
              : null}
          </div>
          <div>
            <Typography variant="h5"  sx={{ fontSize: { lg: "24px", md: "24px", sm: "20px", xs: '16px' } }}>Price</Typography>
            <FormGroup className="item_category-checkbox">
              <FormControlLabel
                control={<Checkbox checked={price === "above"} />}
                onClick={handlePriceChange}
                name="above"
                label="Above $20"
                sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
              />
              <FormControlLabel
                control={<Checkbox checked={price === "below"} />}
                onClick={handlePriceChange}
                name="below"
                label="Below $20"
                sx={{
                "& .MuiTypography-root": {
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px"                  },
                },
              }}
              />
            </FormGroup>
          </div>
          <div>{renderTypeOptionItem()}</div>
          {props.category !== "bean and coffee"}
          <div>
            {props.category !== "bean and coffee"
              ? renderSpecialOptionItem()
              : null}
          </div>
          <div className="item_category-option_search">
            <Button
              variant="contained"
              onClick={handleSearchItem}
              sx={{
                backgroundColor: "#342B2B",
                "&:hover": {
                  backgroundColor: "gray",
                  color: "#342B2B",
                },
                fontSize:{
                    lg: '16px',
                    md: '16px',
                    sm: '12px',
                    xs: '8px'
                }
              }}
            >
              Search
            </Button>
          </div>
        </Box>
        <Box className="item_category-item">
          {filterProduct.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                small_description={item.small_description}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCategory;
