import React from "react";
import "./Style/HelpCenter.css";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
const HelpCenter = () => {
  return (
    <Box className="helpcenter_container">
      <Typography
        variant="h3"
        sx={{
          color: "#3d3434",
          fontWeight: "bold",
          mt: 5,
          mb: 5,
          textAlign: "center",
        }}
      >
        Help Center
      </Typography>
      <Stack
        spacing={3}
        sx={{
          ml: 40,
        }}
      >
        <Box className="helpcenter_content">
          <Typography
            component={Link}
            to={`/helpcenter/copyright_policy`}
            variant="h5"
            sx={{
              color: "red",
              textDecoration: "none",
            }}
          >
            Copyright && Policy
          </Typography>
          <Typography variant="body1">
            About everything you should be know about Copyright && Policy
          </Typography>
        </Box>
        <Box className="helpcenter_content">
          <Typography
            component={Link}
            to={`/helpcenter/safety_card`}
            variant="h5"
            sx={{
              color: "red",
              textDecoration: "none",
            }}
          >
            Safety Card
          </Typography>
          <Typography variant="body1">
            About everything you should be know about Safety Card
          </Typography>
        </Box>
        <Box className="helpcenter_content">
          <Typography
            component={Link}
            to={`/helpcenter/shipping`}
            variant="h5"
            sx={{
              color: "red",
              textDecoration: "none",
            }}
          >
            Shipping
          </Typography>
          <Typography variant="body1">
            About everything you should be know about Shipping
          </Typography>
        </Box>
        <Box className="helpcenter_content">
          <Typography
            component={Link}
            to={`/helpcenter/selling_rule`}
            variant="h5"
            sx={{
              color: "red",
              textDecoration: "none",
            }}
          >
            Selling Rule
          </Typography>
          <Typography variant="body1">
            About everything you should be know about Selling Rule
          </Typography>
        </Box>
        <Box className="helpcenter_content">
          <Typography
            component={Link}
            to={`/helpcenter/your_satisfaction`}
            variant="h5"
            sx={{
              color: "red",
              textDecoration: "none",
            }}
          >
            Your Satisfaction
          </Typography>
          <Typography variant="body1">
            About everything you should be know about Your satisfaction
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default HelpCenter;
