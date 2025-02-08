import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./ProjectsDetails.module.css";

const ProjectsDetails = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const loadProjects = async () => {
      try {
        let projectData;
        if (category === "kitchens") {
          projectData = await import("../../assets/data/Kitchens");
        } else if (category === "dressing-rooms") {
          projectData = await import("../../assets/data/DressingRooms");
        } else if (category === "windows") {
          projectData = await import("../../assets/data/Windows");
        }

        setProjects(projectData.default);
      } catch (error) {
        console.error("Error loading project data:", error);
      }
    };

    loadProjects();
  }, [category]);

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
        {category.replace("-", " ").toUpperCase()}
      </Typography>
      <Box className={styles.cards_container}>
        {projects.map((project, index) => (
          <Card key={index} className={styles.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={project.image}
                alt={project.description}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#232F63",
                  }}
                >
                  {project.material}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", padding: "0 20px", color: "#555" }}
                >
                  {project.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#777",
                  }}
                >
                  Estimated time: {project.estimatedTime}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsDetails;
