import React, { useState } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

import {
  ProjectTitle,
  ProjectSubtitle,
  Image,
  DetailsWrapper,
  Section,
  PaletteWrapper,
  Palette,
  Circle,
  CircleImage,
  Video,
  Text,
  Link
} from './projectStyles';

import scream from "../Images/scream.png";
import game from "../Images/game.png";
import ai from "../Images/ai.png";
import mood from "../Images/mood.jpg";
import screamVideo from "../Videos/actionpaint.mov";
import how from "../Videos/howpaint.mov";
import loreal1 from "../Images/loreal1.png";
import loreal2 from "../Images/loreal2.png";
import loreal3 from "../Images/loreal3.png";
import wire1 from "../Images/wire1.png";
import wire2 from "../Images/wire2.png";
import fda from "../Images/fda.png";
import trash from "../Images/trash.png";


const work = [
  {
    title: "The Scream That Actually Screams",
    subtitle: "A Musical Painting made with IOT sensors",
    mediaType: ["image", "video"],
    mediaSrc: [scream, screamVideo, how],
    description: "An interactive art installation that brings Edvard Munch's 'The Scream' to life through sound and technology.",
  },
  {
    title: "AI Designed Gown",
    mediaType: "image",
    mediaSrc: [mood, ai, mood],
    description: "A dress designed with generative AI, transforming a curated moodboard into a stunning, wearable piece of art.",
  },
  {
    title: "AromaSense", 
    subtitle:"Top 10 US Finalist for L'Oréal Brandstorm 2023",
    mediaType: "image",
    mediaSrc: [loreal3, loreal1, loreal2],
    description: " At the core of L'Oréal's beauty tech strategy lies a commitment to personalization and inclusivity. Through their Beauty Tech division, they push the boundaries of innovation in the beauty industry, creating highly personalized and inclusive solutions. We are dedicated to addressing individual consumer needs to enable seamless online-offline experiences and utilizing AI for enhanced personalization. Collaborative efforts with startups further underscore their commitment to developing innovative beauty products and services.   Our product capitalizes on the burgeoning sector of L'Oréal perfumes by introducing them to people's homes through VR headsets. This innovative solution enables users to blend L'Oréal scents by scanning their mood, facial expressions, and voice, immersing them in an aromatherapy zen space to fully appreciate their custom scent creation. Upon completion, users can personalize the 3D design of the bottle and conveniently purchase it from the L'Oréal store. This initiative not only expands L'Oréal's presence into the VR realm but also taps into an underdeveloped market, enhancing accessibility and engagement with our brand.",
  }, 
  { 
    title: "Dinosaur Space Bar Game", 
    subtitle: "Raspberry Pi Game - IOT Sensor Project", 
    mediaType: "image",
    mediaSrc: [game],
    description: "An educational clock game inspired by the Chrome dinosaur game, built on a Raspberry Pi.", 
    link: "https://github.com/Khushibhansali/Interactive-Lab-Hub/tree/Fall2023/Lab%202",
  },
  {
    title:"Evaluation of Monocular and Binocular Contrast Sensitivity on Virtual Reality Head-Mounted Displays",
    subtitle: "IEEE 2024 Poster",
    mediaType: "image",
    mediaSrc: [fda],
    description: "Virtual reality (VR) creates an immersive experience by rendering a pair of graphical views on a head-mounted display (HMD). However, spatial variation of image quality on VR HMDs can potentially lead to nonuniform monocular views and binocular disparity. In this study, we begin to bridge the gap between monocular and binocular image quality evaluation by developing a WebXR test platform to perform human observer experiments. Specifically, monocular and binocular contrast sensitivity functions (CSFs) are obtained using varied interpupillary distance (IPD) conditions. The result demonstrates that monocular image quality degrades when gazing at the periphery of display field of view (FOV) especially for mismatched IPD settings. Binocular contrast perception is dominated by the monocular view on a VR HMD with superior image quality measured by the contrast.//           For human subjects using the appropriate IPD configuration on the HMD, the CSF is optimized at the center of display FOV. It has been reported that optical aberration of the HMD lens degrades the contrast and effective resolution at the periphery of VR display FOV, resulting in degraded CSFs for targets away from the center location. IPD misalignment, where the IPD of the subject does not match physical lens displacement of the HMD, negatively affects the monocular image quality. Interocular contrast sensitivity variation is substantially pronounced for subjects with larger IPD than that of the HMD, where the measured CSF favors nasal eye rotation (e.g., right eye rotating towards left). It is also demonstrated that binocular CSF does not always equal to the monocular perception. The difference is particularly enhanced for misaligned IPD between the human subject and HMD optics.  This work is developed by Khushi Bhansali with mentorship of Chumin Zhao at US FDA.  It has been published at IEEE VR 2024 and is a regulatory science tool at US FDA. The mention of commercial products, their sources, or their use in connection with material reported herein is not to be construed as either an actual or implied endorsement of such products by the Department of Health and Human Services." ,
    link: "https://khushibhansali.github.io/WebXR-contrast-sensitivity-tool/fda",
  }, 
  {
    title: "WireBend 3D Software",
    mediaType: "image",
    mediaSrc: [wire2, wire1],
    description: "The goal of this project is to make 3D wire bending more accessible to different users by creating a wire bending software (in a 3D environment) that allows users to create different designs possible by the wire bender, without needing any code. By integrating the machine's constraints into the software, we ensure that users' designs are feasible and accurately reflect what the wire bender can produce, while also alerting users to potential manufacturing issues in their design. Building on the strong foundation and cohesive team dynamics established during Homework 1, we unanimously chose to maintain the same team composition for this project. Paul’s interest in 3D design software and physical engineering of objects was the backbone of this homework and his experience in Unity was the reason this homework was successfully implemented, Paul continued to play the role of the software developer of this homework where he handled most of the backend functions in C# and Unity, including creating a wire object, bending the wire, rotating the wire, extending the angle of the bend, checking for collision with the machine, displaying dimension info to name a few. Harshini and William played a cross-role as Designers and Developers by taking the initiative of planning the UI while discussing with Paul and Khushi to check feasibility in Unity, as well as implementing the UI in Unity. Additionally, they worked on adding extra functionalities like orbiting, panning, and zooming to the game camera that Paul implemented, ensuring these features were compatible and user-friendly with both a mouse and trackpad. William also wrote the function to export the coordinates to a CSV file (including the scaling applied to the coordinates to match real world dimensions). Both Harshini and WIlliam confirmed the scaling was accurate on the WireBender machine. William also imported Tobi's wire bender design into Unity, enhanced the scene's visuals, and refactored the codebase to streamline function mappings for the wire to keyboard and UI buttons. Khushi designed the home screen and tutorial for the environment along with ensuring quality control by testing if every feature was functional. Khushi, Harshini and William tested out if the generated coordinates from the wire bends created in the unity environment were correctly imported and oriented into the Wire Terminal software ensuring proper scaling and dimensions to create the real-life wire bends.",
    link: "https://github.com/bisson2000/INFO5380-HW2/tree/main",
  }, 
  {
    title: "Smart Trash Can",
    subtitle: "IOT Sensor Project",
    mediaType: "image",
    mediaSrc: [trash],
    description: "The project presents an innovative system designed to recognize recyclable objects, compost, batteries, and trash, aiming to contribute to environmental conservation, waste reduction, and consumer education while offering convenience. Targeting general public spaces like airports, cafeterias, malls, and stadiums, it caters to busy individuals who might lack the knowledge or time to sort their trash effectively. Utilizing teachable machine technology and integrating multiple sensors, such as qwiic connectors, servo motors, LED strips, buttons, and OLED screens, the system provides real-time feedback. It notifies users when the trash is full, needs emptying, and can even suggest replacements for discarded items via platforms like Amazon or Instacart. Additionally, the system displays the total quantity of each recycled or disposed material, enhancing user awareness and participation in recycling efforts. An essential feature is its capability for failure correction and improve-ment, where users can notify the system if an item is misclassi-fied. This prompts the trashcan to capture a picture of the object, enabling better future classification and continuous learning. The team seeks feedback on this interaction, particularly on improving the system's leaming process from these user inputs. Employing advanced teachable machine technology, the system dynamically recognizes and classifies objects, continuously improving accuracy. Integrating various sensors such as qwiic connectors, servo motors, and LED strips, it offers real-time feedback, including notifications when bins are full.. Additionally, it displays the quantity of recycled materials, encouraging active participation and responsibility. The system learns from errors through user feedback, capturing data for better future classification. Lessons learned from development include insights into sensor integration, error handling, and user-centric design, emphasizing iterative improvement and adaptability for sustainability and widespread adoption. William Reid and Khushi Bhansali developed the code to open the bins via servo control, developed the code for user feedback/misclassification/correction, developed code to display and keep track of items recycled and display such statistics to the user, designed background, target and statistics layout for iPad screen to show statistics on how much has been trashed and what the current label is of the item being trashed.",
    link: "https://github.com/bisson2000/INFO5380-HW2/tree/main",
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Section>
      <PaletteWrapper>
        <Palette>
          {work.map((project, index) => (
            <Circle
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveProject(project)}
            >
              <CircleImage src={project.mediaType === "image" ? project.mediaSrc[0] : null} alt={project.title} />
            </Circle>
          ))}
        </Palette>
      </PaletteWrapper>

      <DetailsWrapper>
        {activeProject ? (
          <>
            <ProjectTitle>{activeProject.title}</ProjectTitle>
            {activeProject.subtitle && <ProjectSubtitle>{activeProject.subtitle}</ProjectSubtitle>}
            {activeProject.mediaType === "video" ? (
              activeProject.mediaSrc.map((src, i) => (
                <Video key={i} controls>
                  <source src={src} type="video/mp4"/>
                  Your browser does not support the video tag.
                </Video>
              ))
            ) : (
              activeProject.mediaSrc.map((src, i) => (
                <Image key={i} src={src} alt={activeProject.title}/>
              ))
            )}
            <Text>{activeProject.description}</Text>

            <Link>View Project here: {activeProject.link}</Link>
          </>
        ) : (
          <Text>Please select a project from the palette to view details.</Text>
        )}
      </DetailsWrapper>
    </Section>
  );
};

export default Projects;
