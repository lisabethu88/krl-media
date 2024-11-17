/**
 * MainSection Component
 *
 * This component serves as the main content area of the application, dynamically rendering different sections
 * such as images, videos, digital art, about, news, or contact based on the `selectedSection` prop.
 *
 * - **Props**:
 *   - `selectedSection` (string): Indicates the currently selected section to be displayed.
 *
 * - **State Variables**:
 *   - `imageItems`, `videoItems`, `digitalArtItems` (arrays): Store the media items for respective categories.
 *   - `loadMore` (boolean): Determines if more items need to be fetched for infinite scrolling.
 *   - `imagePage`, `videoPage`, `digitalArtPage` (numbers): Keep track of pagination for API requests.
 *
 * - **API Integration**:
 *   - Fetches images, videos, and digital art items from the Pexels API using `axios`.
 *   - Handles errors and processes API responses to format data for display.
 *
 * - **Effects**:
 *   - First `useEffect` triggers the initial data fetch whenever the `selectedSection` changes.
 *   - Second `useEffect` handles fetching additional items when `loadMore` is set to `true`.
 *
 * - **Dynamic Content**:
 *   - Renders the appropriate child component (`MediaGrid`, `AboutSection`, `NewsSection`, `ContactSection`)
 *     based on the `selectedSection`.
 *
 * - **Styling**:
 *   - Styled using Material-UI's `Box` component with custom layout and color properties.
 */
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import MediaGrid from "./MediaGrid";
import axios from "axios";
import AboutSection from "./AboutSection";
import NewsSection from "./NewsSection";
import ContactSection from "./ContactSection";

function MainSection({ selectedSection }) {
  // constants
  const MAX_ITEMS_PER_PAGE = 5;

  // state variables
  const [imageItems, setImageItems] = useState([]);
  const [videoItems, setVideoItems] = useState([]);
  const [digitalArtItems, setDigitalArtItems] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [imagePage, setImagePage] = useState(1);
  const [digitalArtPage, setDigitalArtPage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);

  // api calls

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://api.pexels.com/v1/curated", {
        headers: {
          Authorization:
            "WMdegqP7WfSZeteSgAII0QrpZ9MmhxXvYlKf60ozyaLxEsj4vMRm9baZ",
        },
        params: {
          per_page: MAX_ITEMS_PER_PAGE,
          page: imagePage,
        },
      });

      const images = response.data.photos.map((photo) => {
        return {
          img: photo.src.original,
          title: photo.alt || "Untitled",
          thumbnail: photo.src.small,
          photographer: photo.photographer || "Unknown",
          orientation: photo.width > photo.height ? "landscape" : "portrait",
          rows: 1,
          cols: 1,
        };
      });
      setImageItems((prevItems) => [...prevItems, ...images]);
      setImagePage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching images from Pexels:", error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "https://api.pexels.com/videos/popular",
        {
          headers: {
            Authorization:
              "WMdegqP7WfSZeteSgAII0QrpZ9MmhxXvYlKf60ozyaLxEsj4vMRm9baZ",
          },
          params: {
            per_page: MAX_ITEMS_PER_PAGE,
            page: videoPage,
          },
        }
      );

      const videos = response.data.videos.map((video) => {
        return {
          videoUrl: video.video_files[0]?.link || "",
          title: video.user.name || "Untitled",
          thumbnail: video.image,
          photographer: video.user.name || "Unknown",
          orientation: video.width > video.height ? "landscape" : "portrait",
          rows: 1,
          cols: 1,
        };
      });

      setVideoItems((prevItems) => [...prevItems, ...videos]);
      setVideoPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching videos from Pexels:", error);
    }
  };

  const fetchDigitalArtImages = async () => {
    try {
      const response = await axios.get("https://api.pexels.com/v1/search", {
        headers: {
          Authorization:
            "WMdegqP7WfSZeteSgAII0QrpZ9MmhxXvYlKf60ozyaLxEsj4vMRm9baZ",
        },
        params: {
          query: "digital art",
          per_page: MAX_ITEMS_PER_PAGE,
          page: digitalArtPage,
        },
      });

      const images = response.data.photos.map((photo) => ({
        img: photo.src.original,
        title: photo.alt || "Untitled",
        thumbnail: photo.src.small,
        photographer: photo.photographer || "Unknown",
        orientation: photo.width > photo.height ? "landscape" : "portrait",
        rows: 1,
        cols: 1,
      }));

      setDigitalArtItems((prevItems) => [...prevItems, ...images]);
      setDigitalArtPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching digital art images from Pexels:", error);
    }
  };
  useEffect(() => {
    setImageItems([]);
    setDigitalArtItems([]);
    setVideoItems([]);
    switch (selectedSection) {
      case "images":
        fetchImages();
        break;
      case "videos":
        fetchVideos();
        break;
      case "digital art":
        fetchDigitalArtImages();
        break;
      default:
        return;
    }
    setLoadMore(false);
  }, [selectedSection]);

  useEffect(() => {
    if (loadMore) {
      switch (selectedSection) {
        case "images":
          fetchImages();
          break;
        case "videos":
          fetchVideos();
          break;
        case "digital art":
          fetchDigitalArtImages();
          break;
        default:
          return;
      }
      setLoadMore(false);
    }
  }, [loadMore]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        backgroundColor: "#fcf4e9",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        marginX: 1,
        marginY: 5,
      }}
    >
      {/* switch out the component based on which navigation item is selected */}
      {(selectedSection === "images" ||
        selectedSection === "videos" ||
        selectedSection === "digital art") && (
        <MediaGrid
          setLoadMore={setLoadMore}
          mediaSection={selectedSection}
          itemData={
            selectedSection === "images"
              ? imageItems
              : selectedSection === "videos"
              ? videoItems
              : digitalArtItems
          }
        />
      )}
      {selectedSection === "about" && <AboutSection />}
      {selectedSection === "news" && <NewsSection />}
      {selectedSection === "contact" && <ContactSection />}
    </Box>
  );
}

export default MainSection;
