import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import testimonials from "../../assets/data/Testimonials";
import styles from "./Testimonials.module.css"; // Import CSS module

const Testimonials = () => {
  const navigate = useNavigate();

  // Sort testimonials by date (newest first) and get the latest 3
  const latestTestimonials = [...testimonials]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <Box className={styles.container}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className={styles.heading}
      >
        What Our Clients Say
      </Typography>

      {latestTestimonials.map((testimonial, index) => (
        <Accordion key={index} className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={styles.summary}
          >
            <Avatar className={styles.avatar}>
              {testimonial.name.charAt(0)}
            </Avatar>
            <Typography className={styles.name}>{testimonial.name}</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.text}>
              "{testimonial.text}"
            </Typography>
            <Typography variant="caption" className={styles.date}>
              {new Date(testimonial.date).toLocaleDateString()}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* View More Button */}
      <Button
        variant="contained"
        className={styles.viewMoreButton}
        onClick={() => navigate("/reviews")}
      >
        View More
      </Button>
    </Box>
  );
};

export default Testimonials;
