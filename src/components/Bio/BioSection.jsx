import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./BioSection.module.css";

const BioSection = () => {
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
        Eldosuky
      </Typography>
      <Typography variant="body1" className={styles.bioText}>
        Since 2013, El Desouky has been redefining kitchen and window
        craftsmanship by blending advanced technology, sophisticated designs,
        and unparalleled expertise. With a 10-year warranty on every product, we
        guarantee quality you can trust and elegance that lasts
      </Typography>
    </Box>
  );
};

export default BioSection;
