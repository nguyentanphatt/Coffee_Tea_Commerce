import React, { useState, useEffect } from "react";
import "./AboutContactDetail.css";
import { Box, Typography, Button } from "@mui/material";
const AboutContactDetail = ({ image, title, content, isReversed }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <Box className={`aboutContactcontainer ${isReversed ? "reversed" : ""}`}
    >
      <img src={image} alt="" />
      <Box className="aboutContact_text">
      {!isExpanded && (
          <Typography
            variant="h4"
            sx={{
              color: '#3d3434',
              fontWeight: '600',
              textAlign: 'center',
              fontSize: {
                lg: '34px',
                md: '30px',
                sm: '24px',
                xs: '18px',
              },
            }}
          >
            {title}
          </Typography>
        )}
        <Typography
          className={`textContent ${
            isSmallScreen && !isExpanded ? "truncated" : ""
          }`}
          variant="body1"
          sx={{
            color: "#666",
            mt: { lg: 4, md: 4, sm: 1, xs: 1 },
            fontSize: {
              lg: "16px",
              md: "14px",
              sm: "12px",
              xs: "10px",
            },
            display: "webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: isSmallScreen && !isExpanded ? 3 : 6,
          }}
        >
          {content}
        </Typography>
        {isSmallScreen && (
          <Box>
            <Button onClick={toggleContent} variant="contained" sx={{ textTransform: "none",
            width:{
                xs: '50%'
            },
            fontSize: {
                xs: '9px'
            },
            mt: {
                xs: 1
            },
            height:{
                xs: '20px'
            },
            '@media (max-width: 400px)': {
                width: '80%',
            },
           }}>
            {isExpanded ? "View Less" : "View More"}
          </Button>
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default AboutContactDetail;
