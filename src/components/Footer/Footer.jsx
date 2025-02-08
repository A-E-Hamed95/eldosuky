import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email, post to an API, etc.)
    console.log("Message Submitted:", message);
    setMessage("");
  };

  return (
    <Box className={styles.footerContainer}>
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left Section: Logo */}
        <Grid item xs={12} sm={2} className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Grid>

        {/* Middle Section: Contact Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className={styles.contactTitle}>
            Contact
          </Typography>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <LocationOn className={styles.contactIcon} />
              <Typography variant="body2" className={styles.contactInfo}>
                10th of Ramadan City: El-Jawhara Mall, El Desouky Office, 1st
                Floor.
                <br />
                Minya El-Qamh: In front of the Boys' Industrial School, next to
                the Cooperation Petrol Station.
              </Typography>
            </li>
            <li className={styles.contactItem}>
              <Phone className={styles.contactIcon} />
              <Typography variant="body2" className={styles.contactInfo}>
                01007799575
                <br />
                01117799056
              </Typography>
            </li>
            <li className={styles.contactItem}>
              <Email className={styles.contactIcon} />
              <Typography variant="body2" className={styles.contactInfo}>
                eldosukykitchens@gmail.com
              </Typography>
            </li>
          </ul>
        </Grid>

        {/* Right Section: Message Form */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className={styles.formTitle}>
            Send us a message
          </Typography>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Name and Phone Input */}
            <Grid container spacing={3}>
              {" "}
              {/* Increased the spacing between inputs */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  className={styles.textField}
                  InputProps={{
                    style: {
                      backgroundColor: "white", // White background
                      color: "grey", // Grey text color
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "grey", // Grey label color
                    },
                  }}
                  style={{ marginBottom: "1rem" }} // Adds spacing below the input
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Phone"
                  variant="outlined"
                  fullWidth
                  className={styles.textField}
                  InputProps={{
                    style: {
                      backgroundColor: "white", // White background
                      color: "grey", // Grey text color
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "grey", // Grey label color
                    },
                  }}
                  style={{ marginBottom: "1rem" }} // Adds spacing below the input
                />
              </Grid>
            </Grid>

            {/* Message Input */}
            <TextField
              label="Your Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="outlined"
              fullWidth
              className={styles.textField}
              InputProps={{
                style: {
                  backgroundColor: "white", // White background
                  color: "grey", // Grey text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "grey", // Grey label color
                },
              }}
              style={{ marginBottom: "1rem" }} // Adds spacing below the input
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={styles.submitButton}
            >
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>

      {/* Social Media Section */}
      <Box className={styles.socialMediaContainer}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className={styles.socialMediaIcon} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className={styles.socialMediaIcon} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <YouTube className={styles.socialMediaIcon} />
        </a>
      </Box>

      {/* Copyright Section */}
      <Box className={styles.copyrightContainer}>
        <Typography variant="body2" className={styles.copyrightText}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
