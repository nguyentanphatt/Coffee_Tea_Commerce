import React from "react";
import "./Style/ContactUs.css";
import face_dark from "../assets/frontend/face_dark.png";
import x_dark from "../assets/frontend/x_dark.png";
import you_dark from "../assets/frontend/you.png";
import insta_dark from "../assets/frontend/insta_dark.png";
import contact_img from "../assets/frontend/contact_us.jpg";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  InputBase,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const ContactUs = () => {
  return (
    <Box className="contactus_container">
      <Typography
        variant="h3"
        sx={{
          color: "#3d3434",
          fontWeight: "bold",
          mt: {
            lg: 5,
            md: 4,
            sm: 3,
            xs: 2,
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
        }}
      >
        Contact Us
      </Typography>
      <Box className="contactus_form">
        <Box className="contactus_ourContact">
          <Box sx={{ width: {
            lg: '50%',
            md: '50%',
            sm: '50%',
            xs: '60%'
          } }}>
            <List
              sx={{
                width: "100%",
                ml: {
                  lg: 10,
                  md: 0,
                  sm: 0,
                  xs: 0,
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#3d3434",
                  fontWeight: "bold",
                  ml: {
                    lg: 15,
                    md: 8,
                    sm: 8,
                    xs: 1,
                  },
                  fontSize: {
                    lg: "24px",
                    md: "24px",
                    sm: "20px",
                    xs: "16px",
                  },
                }}
              >
                Our Contact
              </Typography>
              <ListItem sx={{ py: { xs: 0 }, px: { xs: 0 } }}>
                <ListItemIcon
                  sx={{
                    "@media (max-width:500px)": {
                      minWidth: 16,
                    },
                  }}
                >
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Location"
                  secondary="16A Avalon St, Heimal Captital"
                  primaryTypographyProps={{
                    fontSize: {
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "12px",
                    },
                    mr: {},
                  }}
                  secondaryTypographyProps={{
                    fontSize: {
                      lg: "14px",
                      md: "14px",
                      sm: "12px",
                      xs: "10px",
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ py: { xs: 0 }, px: { xs: 0 } }}>
                <ListItemIcon sx={{
                    "@media (max-width:500px)": {
                      minWidth: 16,
                    },
                  }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary="+809809809"
                  primaryTypographyProps={{
                    fontSize: {
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "12px",
                    },
                  }}
                  secondaryTypographyProps={{
                    fontSize: {
                      lg: "14px",
                      md: "14px",
                      sm: "12px",
                      xs: "10px",
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ py: { xs: 0 }, px: { xs: 0 } }}>
                <ListItemIcon sx={{
                    "@media (max-width:500px)": {
                      minWidth: 16,
                    },
                  }}>
                  <EmailOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary="CoffeeLY@gmail.com"
                  primaryTypographyProps={{
                    fontSize: {
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "12px",
                    },
                  }}
                  secondaryTypographyProps={{
                    fontSize: {
                      lg: "14px",
                      md: "14px",
                      sm: "12px",
                      xs: "10px",
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>
          <Box className="contactImg">
            <img src={contact_img} alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            ml: {
              lg: 10,
              md: 8,
              sm: 5,
              xs: 4,
            },
            mt: {
              lg: 5,
              md: 5,
              sm: 3,
              xs: 2,
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#3d3434",
              fontWeight: "bold",
              mb: {
                lg: 5,
                md: 4,
                sm: 3,
                xs: 2,
              },
              fontSize: {
                lg: "24px",
                md: "24px",
                sm: "20px",
                xs: "18px",
              },
            }}
          >
            If you want to get more news. Give us your email contact
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              alignItems: {
                lg: "flex-start",
                md: "flex-start",
                sm: "flex-end",
                xs: "flex-end",
              },
            }}
          >
            <InputBase
              placeholder="Your Email"
              sx={{
                width: {
                  lg: "50%",
                  md: "50%",
                  sm: "90%",
                  xs: "90%",
                },
                mr: {
                  lg: 3,
                  md: 3,
                  sm: 3,
                  xs: 3,
                },
                border: "2px solid #3d3434",
                paddingLeft: "10px",
                height: {
                  lg: "40px",
                  md: "40px",
                  sm: "40px",
                  xs: "20px",
                },
                fontSize: {
                  lg: "16px",
                  md: "16px",
                  sm: "16px",
                  xs: "10px",
                },
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#3d3434",
                fontWeight: "600",
                height: {
                  lg: "42px",
                  md: "40px",
                  sm: "30px",
                  xs: "20px",
                },
                mt: {
                  lg: 0,
                  md: 0,
                  sm: 2,
                  xs: 1,
                },
                width: {
                  lg: "100px",
                  md: "80px",
                  sm: "20%",
                  xs: "10%",
                },
                mr: {
                  lg: 0,
                  md: 0,
                  sm: 3,
                  xs: 3,
                },
                fontSize: {
                  lg: "16px",
                  md: "16px",
                  sm: "16px",
                  xs: "10px",
                },
                "&:hover": {
                  backgroundColor: "gray",
                  color: "#342B2B",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            ml: {
              lg: 10,
              md: 10,
              sm: 5,
              xs: 3,
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#3d3434",
              fontWeight: "bold",
              mb: {
                lg: 5,
                md: 4,
                sm: 2,
                xs: 1,
              },
              mt: {
                lg: 5,
                md: 5,
                sm: 5,
                xs: 2,
              },
              fontSize: {
                lg: "24px",
                md: "24px",
                sm: "20px",
                xs: "18px",
              },
            }}
          >
            You can contact us through our social
          </Typography>
          <div className="social_img">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={face_dark} alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x_dark} alt="" />
            </a>
            <a
              href="https://x.com/?lang=vi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={you_dark} alt="" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta_dark} alt="" />
            </a>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
