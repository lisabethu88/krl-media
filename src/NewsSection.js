/**
 * NewsSection Component
 *
 * This component displays a curated list of news items in a visually appealing grid format.
 * Each news item includes an image, title, and author, with an "info" icon for additional interactivity.
 *
 * - **Features**:
 *   - Responsive `ImageList` layout for displaying news items.
 *   - Customizable grid with options for row and column spans for featured items.
 *   - Includes a subheader with a "NEWS" label at the top.
 *   - Uses Material-UI components for styling and responsiveness.
 *
 * - **Highlights**:
 *   - Lazy loading for optimized image performance.
 *   - Interactive "info" icon for potential future functionality or links.
 *
 * - **Data**:
 *   - `itemData`: Array of news items with properties such as `img`, `title`, `author`, and layout-specific attributes (e.g., `rows`, `cols`).
 */
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function NewsSection() {
  return (
    <ImageList sx={{ maxWidth: 500, margin: "0 auto" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader
          component="h3"
          sx={{
            textAlign: "center",
            fontSize: "2.125rem",
            background: "none",
          }}
        >
          NEWS
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

// AI in webdesign, Project Moo, Digital Media Storm, Responsive Design unleashed, Ethics in Ai

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AI in Webdesign",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1530497430277-ffaa9d73109a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Project Moo",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Digital Media Storm",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1519124080359-bfc4bb96f9aa?q=80&w=1678&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Responsive Design Unleashed",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ethics in AI",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1532178324009-6b6adeca1741?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Evolution of Creative Mediums",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Art of Interactive Prototyping",
    author: "@tjdragotta",
  },

  {
    img: "https://images.unsplash.com/photo-1552871419-81ba9b1aa9c9?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Future of Immersive Media",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
];
