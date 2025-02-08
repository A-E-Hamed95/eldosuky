import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import styles from "./Services.module.css";
import kitchen from "../../assets/services/kitchen.jpg";
import dressing from "../../assets/services/dressing.jpg";
import windowImg from "../../assets/services/windowImg.jpg";

const Services = () => {
  const services = [
    {
      title: "Custom Kitchen Designs",
      description:
        "Transform your kitchen into a masterpiece with our custom designs that combine functionality and elegance. Whether it's a modern look or a classic style.",
      imageUrl: kitchen,
    },
    {
      title: "Luxury Dressing Rooms",
      description:
        "Create a luxurious dressing room that blends style and organization. Our expert designers craft bespoke wardrobes and storage solutions tailored to your needs.",
      imageUrl: dressing,
    },
    {
      title: "Energy-Efficient Windows",
      description:
        "Our energy-efficient windows are designed to reduce your energy bills while providing superior insulation and a modern look.",
      imageUrl: windowImg,
    },
  ];

  return (
    <Box className={styles.container}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#232F63",
          textTransform: "uppercase",
        }}
      >
        Our Expert Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper className={styles.serviceCard} elevation={3}>
              <Box
                sx={{
                  backgroundImage: `url(${service.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px",
                  borderRadius: "8px",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  textAlign: "center",
                  color: "#232F63",
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  textAlign: "center",
                  padding: "0 20px",
                  color: "#555",
                }}
              >
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
