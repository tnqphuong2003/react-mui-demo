import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function JobItem({ job }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        elevation={12}
        sx={{
          width: 300,
          height: 240,
          padding: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          {job.title}
        </Typography>
        <Divider />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div>
            {job.skills.slice(0, 4).map((skill) => (
              <Chip
                size="small"
                color="error"
                label={skill}
                sx={{
                  m: "2px",
                  fontSize: 8,
                  height: 16,
                  display: "inline-flex",
                }}
              />
            ))}
          </div>
          <Typography
            variant="body1"
            sx={{ fontSize: 14, margin: "8px 0px 0px" }}
            color="text.secondary"
          >
            {job.description}
          </Typography>
          <Box sx={{ marginTop: "auto", textAlign: "center" }}>
            <Button
              size="small"
              sx={{
                color: "black",
                backgroundColor: "#ffa726",
                padding: "4px 10px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>

    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       {job.title}
    //     </Typography>
    //     <Divider />
    //     {job.skills.slice(0, 4).map((skill) => (
    //       <Chip color="error" label={skill} />
    //     ))}
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       adjective
    //     </Typography>
    //     <Typography variant="body2">{job.description}</Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}
