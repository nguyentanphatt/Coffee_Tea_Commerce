import React from "react";
import "./Reviews.css";
//import black_star from '../../assets/frontend/black_star.png'
import { Box, Typography, Rating, Paper } from "@mui/material";
const Reviews = ({ name }) => {
  const reviews = [
    {
      user: "Specter",
      date: "12/2/2022",
      content: `${name} is a good choice for one who just started drink coffee`,
      rating: 5,
    },
    {
      user: "Gladia",
      date: "12/2/2022",
      content: `${name} is very good and have cheap price`,
      rating: 5,
    },
    {
      user: "Skadi",
      date: "12/2/2022",
      content: `Using ${name} with a litter milk then you will have a nice day`,
      rating: 5,
    },
    {
      user: "Homuculus",
      date: "12/2/2022",
      content: `${name} is my favorite and the delivery is fast too`,
      rating: 5,
    },
  ];

  return (
    <Box sx={{ maxWidth: 1600, margin: "auto", padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="#3d3434" gutterBottom>
          Reviews
        </Typography>

        {reviews.map((review, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Box>
              <Typography variant="body1" fontWeight="bold">
                {review.user} published {review.date}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {review.content}
              </Typography>
            </Box>
            <Rating
              value={review.rating}
              readOnly
              sx={{ alignSelf: "center" }}
            />
          </Paper>
        ))}
      </Paper>
    </Box>
  );
};

export default Reviews;
