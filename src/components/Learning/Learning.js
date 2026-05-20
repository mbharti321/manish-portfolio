import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Chip,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "./Learning.css";

const demos = [
  {
    key: "hilbert",
    title: "Hilbert Curve",
    description:
      "Interactive visual playground exploring Hilbert curves and their construction.",
    url: "/hilbert-curve.html",
    icon: <PlayCircleFilledIcon fontSize="large" />,
  },
  {
    key: "merkle",
    title: "Merkle Tree",
    description:
      "A playable guide to Merkle trees, hashing and proofs using an interactive playground.",
    url: "/mekle-tree.html",
    icon: <MenuBookIcon fontSize="large" />,
  },
];

function Learning() {
  const [active, setActive] = useState(demos[0].key); // load first demo by default

  const activeDemo = demos.find((d) => d.key === active) || demos[0];

  const handleOpenNew = (url) => {
    window.open(url, "_blank", "noopener");
  };

  return (
    <section id="learn">
      <Container maxWidth="lg" className="learn-container">
        <Typography
          variant="h4"
          gutterBottom
          className="learn-title"
        ></Typography>
        <Typography variant="h4" gutterBottom className="workexp-title">
          Learn & Play
        </Typography>
        <Grid container spacing={2} className="learn-grid">
          {demos.map((demo) => (
            <div key={demo.key}>
              <Card
                className={`learn-card ${active === demo.key ? "active" : ""}`}
              >
                <CardContent className="learn-card-content">
                  <Box className="learn-icon-wrap">{demo.icon}</Box>
                  <Box className="learn-card-body">
                    <div className="learn-card-head">
                      <Typography variant="h6" className="learn-card-title">
                        {demo.title}
                      </Typography>
                      {active === demo.key && (
                        <Chip
                          label="LIVE"
                          size="small"
                          color="primary"
                          className="live-chip"
                        />
                      )}
                    </div>
                    <Typography variant="body2" className="learn-card-desc">
                      {demo.description}
                    </Typography>
                  </Box>
                  <Box className="learn-card-actions">
                    <Button
                      variant={active === demo.key ? "contained" : "outlined"}
                      size="small"
                      startIcon={<VisibilityIcon />}
                      onClick={() => setActive(demo.key)}
                      className={
                        active === demo.key ? "btn-primary" : "btn-outline"
                      }
                    >
                      {active === demo.key ? "Viewing" : "Load"}
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      startIcon={<LaunchIcon />}
                      onClick={() => handleOpenNew(demo.url)}
                      aria-label="Open in new tab"
                      className="btn-open"
                    >
                      Open in new tab
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </div>
          ))}
        </Grid>

        <Box className="learn-iframe-wrap">
          <Box className="learn-iframe-toolbar">
            <Typography variant="subtitle1" className="learn-iframe-title">
              {activeDemo.title}
            </Typography>
            <Box className="learn-iframe-actions">
              <Button
                size="small"
                startIcon={<OpenInNewIcon />}
                onClick={() => handleOpenNew(activeDemo.url)}
                className="btn-text"
              >
                Open in new tab
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() =>
                  window.open(activeDemo.url, "_blank", "noopener")
                }
                className="btn-primary"
              >
                Popout
              </Button>
            </Box>
          </Box>

          <iframe
            key={activeDemo.key}
            title={activeDemo.title}
            src={activeDemo.url}
            className="learn-iframe"
            sandbox="allow-scripts allow-same-origin allow-forms"
            loading="lazy"
          />
        </Box>
      </Container>
    </section>
  );
}

export default Learning;
