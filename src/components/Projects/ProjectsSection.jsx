import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./ProjectsSection.module.css";
import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.jpg";
import project3 from "../../assets/projects/project3.jpg";

const projects = [
  {
    title: "Kitchens",
    description:
      "Modern, stylish, and functional kitchen designs tailored for your space.",
    imageUrl: project1,
  },
  {
    title: "Dressing Rooms",
    description:
      "Elegant and spacious dressing rooms designed for comfort and organization.",
    imageUrl: project2,
  },
  {
    title: "Windows",
    description:
      "Energy-efficient and aesthetically pleasing windows for a brighter home.",
    imageUrl: project3,
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate(`/projects-details/${title.toLowerCase().replace(/\s+/g, "-")}`);
  };

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
        Our Signature Creations!
      </Typography>
      <Box className={styles.cards_container}>
        {projects.map((project, index) => (
          <Card key={index} className={styles.card} onClick={() => handleCardClick(project.title)}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mt: 2,
                    textAlign: "center",
                    color: "#232F63",
                  }}
                >
                  {project.title}
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
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
