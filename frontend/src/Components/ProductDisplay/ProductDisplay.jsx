import React, { useContext, useState } from "react";
import black_star from "../../assets/frontend/black_star.png";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import { Box, Typography, Button, Rating } from "@mui/material";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [count, setCount] = useState(1);

  const specialType = () => {
    switch (product.category) {
      case "coffee":
        return {
          type: "Type:",
          typeInfo: product.type,
          special: "Grind:",
          specialInfo: product.grind,
        };
      case "tea":
        return {
          type: "Type:",
          typeInfo: product.type,
          special: "Forms:",
          specialInfo: product.form,
        };
      case "bean and seed":
        return {
          type: "Type:",
          typeInfo: product.type,
          special: "",
          specialInfo: "",
        };
      default: {
        return {
          type: "",
          typeInfo: "",
          special: "",
          specialInfo: "",
        };
      }
    }
  };

  const { type, typeInfo, special, specialInfo } = specialType();

  const handleChangeNumber = (value) => {
    if (value === "-") {
      setCount((prev) => (prev > 1 ? prev - 1 : 1));
    } else if (value === "+") {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <Box className="product_display_container">
      <Box className="product_display_img">
        <img src={product.image} alt="" />
        <Box className="product_display_nextImg">
          <div className="product_display_next"></div>
          <div className="product_display_next"></div>
          <div className="product_display_next"></div>
          <div className="product_display_next"></div>
        </Box>
      </Box>
      <Box className="product_display_info">
        <Box>
          <Typography
            variant="h4"
            color="#3d3434"
            fontWeight={700}
            sx={{
              fontSize: {
                lg: "34px",
                md: "34px",
                sm: "25px",
                xs: "20px"
              },
            }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                lg: "16px",
                md: "16px",
                sm: "14px",
                xs: "12px"
              },
              mt:{
                lg: 2, md: 2, sm: 1, xs: 0
              },
              mb:{
                lg: 2, md: 2, sm: 1, xs: 0
              }
            }}
          >
            {product.small_description}
          </Typography>
        </Box>
        <Box className="product_display_rating">
          <Rating value={5} readOnly sx={{ alignSelf: "center", fontSize:{
                  lg: '24px',
                  md: '20px',
                  sm: '18px',
                  xs: '16px'
                } }} />
          <Typography
            variant="body1"
            ml={1}
            sx={{
              fontSize: {
                lg: "16px",
                md: "16px",
                sm: "14px",
                xs: "10px"
              },
            }}
          >
            50+ reviews
          </Typography>
        </Box>
        <Box sx={{
          mt:{
            lg: 2, md: 2, sm: 1, xs: 0
          }
        }}>
          <Typography variant="h6" color="#3d3434" mr={2} sx={{
            fontSize: {
                lg: '20px',
                md: '20px',
                sm: '16px',
                xs: '14px'
            }
          }}>
            {type} {typeInfo}
          </Typography>
          <Typography variant="h6" color="#3d3434" sx={{
            fontSize: {
                lg: '20px',
                md: '20px',
                sm: '16px',
                xs: '14px'
            }
          }}>
            {special} {specialInfo}
          </Typography>
        </Box>
        <Typography variant="h4" color="#3d3434" fontWeight={700} mt={2}
            sx={{
                fontSize: {
                  lg: "34px",
                  md: "34px",
                  sm: "25px",
                  xs: "25px"
                },
              }}
        >
          ${product.price}
        </Typography>
        <Box className="product_display_add">
          <Button
            size="small"
            onClick={() => handleChangeNumber("-")}
            sx={{
              backgroundColor: "#3d3434",
              color: "#fff",
              fontSize: {
                lg: 16, md: 16, sx: 14, xs: 14
              },
              height: {
                lg: '30px',
                md: '30px',
                sm: '20px',
                xs: '20px'
              },
            }}
          >
            -
          </Button>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              width: "30px",
              color: "#3d3434",
            }}
          >
            {count}
          </Typography>
          <Button
            size="large"
            onClick={() => handleChangeNumber("+")}
            sx={{
              backgroundColor: "#3d3434",
              color: "#fff",
              fontSize: {
                lg: 16, md: 16, sx: 14, xs: 10
              },
              height: {
                lg: '30px',
                md: '30px',
                sm: '20px',
                xs: '20px'
              },
              width: {
                lg: '50px',
                xs: '20px'
              }
            }}
          >
            +
          </Button>
        </Box>
        <Button
          onClick={() => {
            addToCart(product.id, count);
          }}
          sx={{
            backgroundColor: "#3d3434",
            fontWeight: "600",
            width: {
              lg: '50%',
              md: '50%',
              sm: '50%',
              xs: '100%'
            },
            height: {
                lg: 50,
                md: 40,
                sm: 30,
                xs: 25
            },
            color: "#fff",
            fontSize: {
                lg: 20,
                md: 18,
                sm: 14,
                xs: 12
            },
            "&:hover": {
              background: "lightgray",
              color: "#3d3434",
            },
          }}
        >
          ADD TO CART
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDisplay;
