import { Box, Pagination } from "@mui/material";
import React from "react";
import JobItem from "./components/JobItem";
import SearchAppBar from "./components/SearchAppBar";
import jobs from "./jobs.json";

function App() {
  return (
    <div>
      <SearchAppBar />
      <div style={{ maxWidth: "1150px", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            margin: "3rem",
            gap: "3rem",
          }}
        >
          {jobs.slice(0, 5).map((job) => (
            <JobItem job={job} />
          ))}
        </Box>
        <Box display="flex" justifyContent="center">
          <Pagination
            count={10}
            color="error"
            sx={{ button: { color: "#ffffff" } }}
          />
        </Box>
      </div>
    </div>
  );
}

export default App;
