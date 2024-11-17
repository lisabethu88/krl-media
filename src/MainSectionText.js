/**
 * MainSectionText Component
 *
 * This component displays descriptive and promotional content for a team of designers and developers,
 * emphasizing their expertise and services.
 *
 * - **Structure**:
 *   - A parent `Box` component acts as a container with responsive and centered styling.
 *   - Contains two sections:
 *     1. "About" section with an introduction to the team's skills and mission.
 *     2. "News" section featuring a breakdown of services offered (e.g., branding, websites, digital media).
 *
 * - **Content**:
 *   - Uses Material-UI `Typography` for headings and body text.
 *   - Dividers provide clear separation between sections.
 *   - Icons (`CircleIcon`) and styled subheadings visually represent different service categories.
 *
 * - **Styling**:
 *   - Flexbox is used for layout and alignment, with responsive adjustments for smaller screens.
 *   - Custom colors and spacing create a professional and cohesive appearance.
 *   - Ensures text alignment and margin properties optimize readability and presentation.
 */
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const MainSectionText = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        maxWidth: 500,
        margin: "1rem auto",
        marginBottom: "5rem",
        textAlign: "center",
      }}
    >
      <Box id="about" display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4" textTransform={"uppercase"}>
          Hi there!{" "}
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography variant="body">
          We are a team of Graphic Designers, UX designers and Web Developers
          with years of experience working independently with artists, creative
          thinkers, non-profits and small businesses. We have clients all over
          the world and have successfully launched businesses for satisfied and
          happy customers. We are passionate about helping people and companies
          present the best sides of them- selves. Logos and branding stay a
          while websites and launches printed and digital
        </Typography>
      </Box>
      <Box id="news" display="flex" flexDirection={"column"} gap={4}>
        <Divider orientation="horizontal" flexItem />
        <Typography variant="h4" textTransform={"uppercase"}>
          Stay a while
        </Typography>
        <Box
          display={"flex"}
          gap={4}
          textTransform={"uppercase"}
          flexDirection={{ xs: "column", sm: "row" }}
          width={{ xs: 200, sm: "inherit" }}
        >
          <Box color="#d96a48">
            <CircleIcon fontSize={"large"} sx={{ marginBottom: 2 }} />
            <Typography variant="h6">Logos and branding </Typography>
          </Box>
          <Box color="#68a7a0">
            <CircleIcon fontSize={"large"} sx={{ marginBottom: 2 }} />
            <Typography variant="h6">websites and launches</Typography>
          </Box>
          <Box color="#e7b454">
            <CircleIcon fontSize={"large"} sx={{ marginBottom: 2 }} />
            <Typography variant="h6">printed and digital</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainSectionText;
