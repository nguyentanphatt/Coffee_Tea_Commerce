import React, { useState, useEffect } from "react";
import upload_img from "../assets/frontend/upload_area.svg";
import { useNavigate } from "react-router-dom";
import {
  FormControlLabel,
  TextField,
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Avatar,
} from "@mui/material";

const Selling = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [formData, setFormData] = useState({
    sellEmail: "",
    sellName: "",
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: null,
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:4000/getuserdata", {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        });
        const data = await response.json();
        if (data.success) {
          setFormData((prevFormData) =>({
            ...prevFormData,
            sellEmail: data.user.email,
            sellName: data.user.name,
          }));
        } else {
          alert("Please login to use");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleChangeValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    let responseImage;
    const imageFormData = new FormData();
    imageFormData.append("product", formData.image);
    try {
      responseImage = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: imageFormData,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      return;
    }

    const imageData = await responseImage.json();
    console.log(imageFormData);

    if (imageData.success) {
      const sellingDetails = {
        ...formData,
        image: imageData.image_url,
        type: formData.type,
      };

      try {
        const responseSelling = await fetch(
          "http://localhost:4000/addsellingitem",
          {
            method: "POST",
            headers: {
              Accept: "applocation/json",
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
            body: JSON.stringify(sellingDetails),
          }
        );
        const data = await responseSelling.json();
        if (data.success) {
          alert("Selling Added");
          window.location.reload("/");
        } else {
          console.log("Failed to add");
        }
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
      console.log("Fail to update");
    }
  };
  return (
    <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
    >
      <Typography variant="h4" color="#3d3434" fontWeight={700} m={4}
        sx={{
          fontSize: {
            lg: '34px',
            md: '34px',
            sm: '28px',
            xs: '20px'
          }
        }}
      >
        Wanna to make profit? Give us more information!!
      </Typography>
      <Box sx={{
        width:{
          lg: '40%',
          md: '60%',
          sm: '70%',
          xs: '70%'
        }
      }}>
        <TextField
          type="text"
          name="sellEmail"
          label="Email"
          variant="outlined"
          disabled
          value={formData.sellEmail}
          onChange={handleChangeValue}
          placeholder="Email"
          fullWidth
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
                  height: {
                    lg: "auto",
                    md: "auto",
                    sm: "auto",
                    xs: "30px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { sx: "12px" },
                  top: {
                    lg: "-3px",
                    md: "-3px",
                    sm: "-3px",
                    xs: "-7px",
                  }, 
                  transform: {
                    xs: "translate(14px, 10px) scale(1)",
                    sm: "translate(14px, 20px) scale(1)",
                  }, 
                },
                "& .MuiInputLabel-shrink": {
                  transform: { xs: "translate(14px, -10px) scale(0.75)" },
                },
          }}
        />
        <TextField
          type="text"
          name="sellName"
          label="Your Name"
          variant="outlined"
          value={formData.sellName}
          onChange={handleChangeValue}
          placeholder="Your name"
          fullWidth
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#5d5d5d",
                    borderWidth: "2px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D3434",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3D3434",
                  },
                  height: {
                    lg: "auto",
                    md: "auto",
                    sm: "auto",
                    xs: "30px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { sx: "12px" },
                  top: {
                    lg: "-3px",
                    md: "-3px",
                    sm: "-3px",
                    xs: "-7px",
                  }, 
                  transform: {
                    xs: "translate(14px, 10px) scale(1)",
                    sm: "translate(14px, 20px) scale(1)",
                  }, 
                },
                "& .MuiInputLabel-shrink": {
                  transform: { xs: "translate(14px, -10px) scale(0.75)" },
                },
          }}
        />
        <TextField
          type="text"
          name="name"
          label="Item Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChangeValue}
          placeholder="Item name"
          fullWidth
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#5d5d5d",
                    borderWidth: "2px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D3434",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3D3434",
                  },
                  height: {
                    lg: "auto",
                    md: "auto",
                    sm: "auto",
                    xs: "30px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { sx: "12px" },
                  top: {
                    lg: "-3px",
                    md: "-3px",
                    sm: "-3px",
                    xs: "-7px",
                  }, 
                  transform: {
                    xs: "translate(14px, 10px) scale(1)",
                    sm: "translate(14px, 20px) scale(1)",
                  }, 
                },
                "& .MuiInputLabel-shrink": {
                  transform: { xs: "translate(14px, -10px) scale(0.75)" },
                },
          }}
        />
        <TextField
          type="text"
          name="price"
          label="Price"
          variant="outlined"
          value={formData.price}
          onChange={handleChangeValue}
          placeholder="Price"
          fullWidth
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#5d5d5d",
                    borderWidth: "2px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D3434",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3D3434",
                  },
                  height: {
                    lg: "auto",
                    md: "auto",
                    sm: "auto",
                    xs: "30px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { sx: "12px" },
                  top: {
                    lg: "-3px",
                    md: "-3px",
                    sm: "-3px",
                    xs: "-7px",
                  }, 
                  transform: {
                    xs: "translate(14px, 10px) scale(1)",
                    sm: "translate(14px, 20px) scale(1)",
                  }, 
                },
                "& .MuiInputLabel-shrink": {
                  transform: { xs: "translate(14px, -10px) scale(0.75)" },
                },
          }}
        />
        <TextField
          type="text"
          name="quantity"
          label="Quantity"
          variant="outlined"
          value={formData.quantity}
          onChange={handleChangeValue}
          placeholder="Quantity"
          fullWidth
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#5d5d5d",
                    borderWidth: "2px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D3434",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3D3434",
                  },
                  height: {
                    lg: "auto",
                    md: "auto",
                    sm: "auto",
                    xs: "30px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { sx: "12px" },
                  top: {
                    lg: "-3px",
                    md: "-3px",
                    sm: "-3px",
                    xs: "-7px",
                  }, 
                  transform: {
                    xs: "translate(14px, 10px) scale(1)",
                    sm: "translate(14px, 20px) scale(1)",
                  }, 
                },
                "& .MuiInputLabel-shrink": {
                  transform: { xs: "translate(14px, -10px) scale(0.75)" },
                },
          }}
        />
      </Box>
      <Box sx={{
        width:{
          lg: '40%',
          md: '60%',
          sm: '70%',
          xs: '70%'
        }
      }}>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ color: "#3d3434" }}>
            Type:
          </FormLabel>
          <RadioGroup
            name="category"
            value={formData.category}
            onChange={handleChangeValue}
            row
          >
            <FormControlLabel
              value="coffee"
              control={<Radio />}
              label="Coffee"
            />
            <FormControlLabel value="tea" control={<Radio />} label="Tea" />
            <FormControlLabel
              value="bean and seed"
              control={<Radio />}
              label="Bean and Seed"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{
        width:{
          lg: '40%',
          md: '60%',
          sm: '70%',
          xs: '70%'
        }
      }}>
        <Typography variant="subtitle1" color="#3d3434">
          Image:
        </Typography>
        <label htmlFor="file-input" style={{ cursor: "pointer" }}>
          <Box
            border={1}
            borderColor="grey.400"
            borderRadius="4px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={100}
            height={100}
            bgcolor="#fff"
          >
            <Avatar
              src={
                selectedImage ? URL.createObjectURL(selectedImage) : upload_img
              }
              alt="Selected"
              variant="square"
              sx={{
                width: "100%",
                height: "100%",
                display: selectedImage ? "block" : "none",
              }}
            />
            {!selectedImage && (
              <Typography variant="body2" color="textSecondary">
                Upload
              </Typography>
            )}
          </Box>
        </label>
        <input
          type="file"
          id="file-input"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </Box>
      <Box sx={{
        width:{
          lg: '40%',
          md: '60%',
          sm: '70%',
          xs: '70%'
        }
      }} mt={2}>
        <Typography variant="subtitle1" color="#3d3434">
          Description:
        </Typography>
        <TextField
          name="description"
          value={formData.description}
          onChange={handleChangeValue}
          multiline
          rows={6}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Button
        size="large"
        variant="contained"
        onClick={handleSubmit}
        sx={{
          border: "2px solid #3d3434",
          color: "#fff",
          backgroundColor: "#3d3434",
          mt: 3,
          width: {
            lg: '300px',
            md: '300px',
            sm: '250px',
            xs: '200px'
          },
          height: {
            lg: '60px',
            md: '60px',
            sm: '50px',
            xs: '40px'
          },
          fontWeight: "500",
          fontSize: {
            lg: 18, md: 18, sm: 18, xs: 14
          },
          mb: 5,
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Selling;
