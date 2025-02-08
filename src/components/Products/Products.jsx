import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import pricings from "../../assets/data/Pricings";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.heading}>
        Our Kitchen Models
      </Typography>

      <Box className={styles.grid}>
        {pricings.map((product, index) => (
          <Card key={index} className={styles.card}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.modelName}
              className={styles.image}
            />
            <CardContent>
              <Typography variant="h6" className={styles.modelName}>
                {product.modelName}
              </Typography>
              <Typography className={styles.material}>
                <strong>Material:</strong> {product.material}
              </Typography>
              <Typography className={styles.estimatedTime}>
                <strong>Estimated Time:</strong> {product.estimatedTime}
              </Typography>
              <Typography className={styles.price}>
                <strong>Price:</strong> {product.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
