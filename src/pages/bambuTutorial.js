import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardMedia, CardContent, Paper } from '@mui/material';
import "./coursework.css";
import frontMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10_0.png";
import backMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10_1.png";
import sideMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10.png";
import display from "../bambuPics/display_screen.png";

const steps = [
  { 
    step: 1, 
    title: "Turn on the 3D Printer", 
    description: "Plug in the Bambu 3D printer and press the power button located on the front. Wait for the display screen to light up and show the home menu.",
    details: "Ensure that the printer is placed on a stable surface. Check the power connections and make sure the power outlet is working correctly. Refer to the user manual for troubleshooting if the printer does not turn on.",
    image: backMachine 
  },
  { 
    step: 2, 
    title: "Load the Filament", 
    description: "Load the filament into the printer by opening the filament compartment and inserting the filament spool. Follow the on-screen instructions to feed the filament into the extruder.",
    details: "Make sure the filament is properly seated in the spool holder. Cut the end of the filament at an angle to help it feed smoothly. If the filament does not feed correctly, you may need to adjust the tension or clean the extruder.",
    image: sideMachine 
  },
  { 
    step: 3, 
    title: "Set Up the Print Job", 
    description: "Using the software provided, set up your print job by selecting the 3D model file and adjusting the print settings. Transfer the file to the printer via USB or Wi-Fi.",
    details: "Choose the appropriate print settings such as layer height, print speed, and infill density. Make sure the print bed is leveled before starting the print. Use the slicing software to preview the print and check for any issues.",
    image: frontMachine 
  },
  { 
    step: 4, 
    title: "Start and Monitor the Print", 
    description: "Start the print job and monitor the progress through the display screen. Ensure that the first few layers are printing correctly.",
    details: "Stay nearby during the initial layers to make sure the print adheres to the bed. If the print fails to stick, you may need to clean the bed or adjust the bed temperature. Use the pause and resume functions if necessary.",
    image: display 
  },
];

const ImageCarousel = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Container maxWidth="lg" className="interactive-guide">
      <Typography variant="h2" component="h1" gutterBottom>Learn How to Use the Bambu 3D Printer</Typography>
      <Box mb={4} className="step-buttons">
        <Grid container spacing={2}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Button 
                variant={index === activeStep ? "contained" : "outlined"} 
                color="primary" 
                onClick={() => setActiveStep(index)} 
                fullWidth
              >
                Step {step.step}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Box>
          <CardMedia component="img" image={steps[activeStep].image} alt={steps[activeStep].title} className="main-image" />
        </Box>
      </Box>
      <Box mt={8} className="step-by-step">
        <Typography variant="h4" component="h2" gutterBottom>Detailed Guide: {steps[activeStep].title}</Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h6" component="h3">{steps[activeStep].description}</Typography>
          <Typography variant="body1" mt={2}>{steps[activeStep].details}</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ImageCarousel;
