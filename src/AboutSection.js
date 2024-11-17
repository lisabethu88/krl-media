/**
 * AboutSection Component
 *
 * This component renders the "About" section of the website, featuring:
 * - An introduction to the team and their mission.
 * - A description of the services provided by the agency.
 * - A showcase of team members with bios and roles.
 * - Responsive design and styling using Material-UI (MUI) components.
 *
 */

import { Box, Avatar, Divider, Typography } from "@mui/material";
import React from "react";
import officePhoto from "./assets/pexels-fauxels-3183150.jpg";

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          maxWidth: 500,
          margin: "1rem auto",
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
            with years of experience working independently with artists,
            creative thinkers, non-profits and small businesses. We have clients
            all over the world and have successfully launched businesses for
            satisfied and happy customers. We are passionate about helping
            people and companies present the best sides of them- selves. Logos
            and branding stay a while websites and launches printed and digital
          </Typography>
        </Box>
      </Box>
      <img
        src={officePhoto}
        alt={"KRL office meeting"}
        className="m-5 max-w-[1000px] w-full"
      />

      <Typography variant="h4" textTransform={"uppercase"}>
        Meet our Team
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          spacing={1}
          gap={3}
          sx={{ margin: "1.25rem" }}
          direction={{ sm: "column", md: "row" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#d96a48",
              color: "#fcf4e9",
              padding: 2,
              maxWidth: { sm: 350 },
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                height: 200,
                maxWidth: 300,
              }}
            >
              <Avatar
                alt="Kim"
                src="https://avatar.iran.liara.run/public/girl"
                sx={{
                  width: 150,
                  height: 150,
                  boxShadow: "5px 5px 1px 2px #8f432c",
                }}
              />
              <div>
                <h3>Kim</h3>
                <h5>
                  <b>UX Designer</b>
                </h5>
              </div>
            </Box>
            <Typography>
              Kim believes that great design starts with understanding people.
              As our UX Designer, she’s dedicated to creating intuitive digital
              experiences that engage and inspire users. Her background in
              psychology and human-computer interaction gives her a unique
              perspective on crafting designs that are as functional as they are
              beautiful. Outside of work, Kim enjoys mentoring aspiring
              designers, testing out new productivity tools, and curating
              playlists for every mood.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#314353",
              color: "#fcf4e9",
              padding: 2,
              maxWidth: { sm: 350 },
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                height: 200,
                maxWidth: 300,
              }}
            >
              <Avatar
                alt="Ryan"
                src="https://avatar.iran.liara.run/public/boy"
                sx={{
                  width: 150,
                  height: 150,
                  boxShadow: "5px 5px 1px 2px #212c36",
                }}
              />
              <div>
                <h3>Ryan</h3>
                <h5>
                  <b>Senior Graphic Designer</b>
                </h5>
              </div>
            </Box>
            <Typography>
              With a knack for creating eye-catching visuals, Ryan specializes
              in crafting logos and branding that stand the test of time. His
              passion for design comes from a lifelong love of art and
              storytelling, which he channels into creating unique identities
              for our clients. Whether it's a bold rebrand or a fresh new logo,
              Ryan's designs leave a lasting impression. When he's not sketching
              out concepts, you'll find him exploring art galleries or cooking
              up new recipes at home.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#68a7a0",
              color: "#fcf4e9",
              padding: 2,
              maxWidth: { sm: 350 },
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                height: 200,
                maxWidth: 300,
              }}
            >
              <Avatar
                alt="Lisa"
                src="https://avatar.iran.liara.run/public/girl"
                sx={{
                  width: 150,
                  height: 150,
                  boxShadow: "5px 5px 1px 2px #3d615d",
                }}
              />
              <div>
                <h3>Lisa</h3>
                <h5>
                  <b>Frontend Web Developer</b>
                </h5>
              </div>
            </Box>
            <Typography>
              Lisa turns ideas into fully functional websites, bringing a
              seamless user experience to life. With a background in art and
              coding, she thrives at the intersection of creativity and
              technology. Lisa loves collaborating with clients to ensure every
              pixel tells their story. Over the years, she’s worked with
              non-profits, small businesses, and creative entrepreneurs to help
              bring their visions online. When she's not coding, Lisa enjoys
              experimenting with digital illustration or hiking the trails near
              her home.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
