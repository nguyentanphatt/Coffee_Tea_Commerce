import React from "react";
import "./Style/HelpCenter.css";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
const HelpCenter = () => {

  const links = [
    { label: "Copyright && Policy", path: "/helpcenter/copyright_policy" },
    { label: "Safety Card", path: "/helpcenter/safety_card" },
    { label: "Shipping", path: "/helpcenter/shipping" },
    { label: "Selling Rule", path: "/helpcenter/selling_rule" },
    { label: "Your Satisfaction", path: "/helpcenter/your_satisfaction" },
  ];

  return (
    <Box className="helpcenter_container">
      <Typography
        variant="h3"
        sx={{
          color: "#3d3434",
          fontWeight: "bold",
          mt: {
            lg: 5,
            md: 4,
            sm: 3,
            xs: 4,
          },
          mb: {
            lg: 5,
            md: 5,
            sm: 3,
            xs: 1,
          },
          fontSize: {
            lg: "48px",
            md: "40px",
            sm: "35px",
            xs: "20px",
          },
          textAlign: "center",
        }}
      >
        Help Center
      </Typography>
      <Stack
        spacing={3}
        sx={{
          ml: {
            lg: 40,
            md: 30,
            sm: 15,
            xs: 5,
          },
          mt: {
            xs: 4
          },
          mb: {
            xs: 5
          }
        }}
      >
        {links.map((link) => (
          <Box mt={2}>
            <Typography 
              component={Link}
              to={link.path}
              variant="h5"
              sx={{
              color: "red",
              textDecoration: "none",
              fontSize: {
                lg: "24px",
                md: "24px",
                sm: "20px",
                xs: "16px",
                },
              }}
            >{link.label}</Typography>
            <Typography
            variant="body1"
            sx={{
              fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
            }}
          >
            About everything you should be know about {link.label}
          </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default HelpCenter;
