/**
 * MediaGrid Component
 *
 * This component displays a responsive masonry-style media grid with support for images and videos.
 * Users can view media in a modal by clicking on an item and load additional items if available.
 *
 * - **Props**:
 *   - `itemData`: Array of media items to display.
 *   - `mediaSection`: String indicating the type of media ("videos" or other).
 *   - `setLoadMore`: Function to handle loading more media items.
 *
 * - **Features**:
 *   - Responsive grid layout dynamically adjusts columns based on screen size.
 *   - Modal for viewing selected media in detail.
 *   - "Load More" button to fetch additional items if total items are below the maximum limit.
 *
 * - **Utilities**:
 *   - `srcset`: Generates responsive image URLs for optimized loading.
 *   - Breakpoint detection using Material-UI's `useMediaQuery` and `useTheme`.
 */

import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Divider,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MainSectionText from "./MainSectionText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function srcset(image, size, rows, cols) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MediaGrid({ itemData, mediaSection, setLoadMore }) {
  const MAX_TOTAL_ITEMS = 20;
  console.log(itemData.length);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleLoadMore = () => {
    setLoadMore(true);
  };
  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const getColumns = () => {
    if (isSmallScreen) return 2;
    if (isMediumScreen) return 3;
    return 5;
  };

  return (
    <>
      <ImageList
        sx={{
          width: "100%",
          maxWidth: 1200,
          height: "100%",
          margin: "0 auto",
        }}
        variant="masonry"
        cols={getColumns()}
        rowHeight={230}
      >
        {itemData.map((item) => (
          <>
            <ImageListItem
              key={item.thumbnail}
              cols={1}
              rows={1}
              onClick={() => handleOpen(item)}
              className="cursor-pointer"
            >
              <img
                {...srcset(item.thumbnail, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                className="thumbnail"
              />
            </ImageListItem>
          </>
        ))}
      </ImageList>
      {itemData.length < MAX_TOTAL_ITEMS ? (
        <Button
          sx={{
            width: 150,
            margin: "0 auto",
            backgroundColor: "#314353",
            color: "#fcf4e9",
          }}
          onClick={handleLoadMore}
        >
          Load More
          <ExpandMoreIcon />
        </Button>
      ) : (
        <Typography sx={{ margin: "0 auto" }}>Nothing more to show.</Typography>
      )}
      <MainSectionText />
      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {mediaSection !== "videos" && selectedImage && (
            <>
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <Typography variant="h6" m={2} textAlign="center">
                {selectedImage.title}
              </Typography>
              <Divider flexItem orientation="horizontal" />
              <Typography variant="h6" m={2} textAlign="center">
                by {selectedImage.photographer}
              </Typography>
            </>
          )}
          {mediaSection === "videos" && selectedImage && (
            <>
              <video
                controls
                src={selectedImage.videoUrl}
                alt={selectedImage.title}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <Typography variant="h6" m={2} textAlign="center">
                by {selectedImage.photographer}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
