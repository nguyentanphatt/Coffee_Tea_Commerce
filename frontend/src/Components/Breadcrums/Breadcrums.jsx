import React from "react";
import "./Breadcrums.css";
import { Link } from "react-router-dom";
import { Breadcrumbs, Box, Typography } from "@mui/material";
const Breadcrums = (props) => {
  const { product } = props;

  const categoryChange = () => {
    switch (product.category) {
      case "coffee":
        return {
          category: "Coffee",
          path: "/coffee",
        };
      case "tea":
        return {
          category: "Tea",
          path: "/tea",
        };
      case "bean and seed":
        return {
          category: "Bean And Seed",
          path: "/seed",
        };
      default:
        return {
          category: "",
        };
    }
  };

  const { category, path } = categoryChange();

  return (
    <Box mt={3}
      sx={{
        ml:{
          lg: 25,
          md: 25,
          sm: 20,
          xs: 10
        }
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" style={{ textDecoration: "none", color: "inherit"}}> 
          Home
        </Link>
        {category && (
          <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
            {category}
          </Link>
        )}
        <Typography fontWeight={600}>{product.name}</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrums;
