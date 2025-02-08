import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import testimonials from "../../assets/data/Testimonials";
import styles from "./ReviewsPage.module.css";

const ReviewsPage = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.heading}>
        All Reviews
      </Typography>

      <Box className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} className={styles.card}>
            <CardContent>
              <Box className={styles.header}>
                <Avatar className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </Avatar>
                <Typography className={styles.name}>
                  {testimonial.name}
                </Typography>
              </Box>

              <Typography className={styles.text}>
                "{testimonial.text}"
              </Typography>

              <Typography variant="caption" className={styles.date}>
                {new Date(testimonial.date).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewsPage;
