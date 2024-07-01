import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid, CardMedia, Paper } from '@mui/material';
import frontMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10_0.png";
import backMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10_1.png";
import sideMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10.png";
import display from "../bambuPics/display_screen.png";
import thingyverse from "../bambuPics/thingyverse.png";
import bstudio from "../bambuPics/bstudio.png";

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
  { 
    step: 5, 
    title: "Download STL Files", 
    description: "Find and download STL files from online repositories such as Thingiverse, MyMiniFactory, or Cults3D.",
    details: "Ensure the STL files are compatible with your printer's specifications. Verify the dimensions and check for any errors in the model using a 3D modeling software.",
    image: thingyverse 
  },
  { 
    step: 6, 
    title: "Use Bambu Studio Software & Convert to Gcode", 
    description: "Import the STL file into the Bambu Studio software and configure the print settings.",
    details: "Choose the right printer model, select the X1 Carbon 0.4 nozzle, textured PEI plate, and adjust the support settings. Select tree support if your model requires complex supports. Tree support provides optimal support with minimal material usage. Choose the right type of PLA filament for your print job. Consider color, quality, and brand. Once satisfied, click the slice button to convert the STL file to G-code necessary for printing.",
    image: bstudio 
  },
  { 
    step: 7, 
    title: "Send the Gcode with USB or Over Wi-Fi", 
    description: "Transfer the G-code file to the printer via USB drive or Wi-Fi.",
    details: "Ensure the file is correctly loaded on the printer and start the print job from the printer's menu.",
    image: display 
  },
];

const ImageCarousel = () => {
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Box>
          <CardMedia 
            component="img" 
            image={steps[activeStep].image} 
            alt={steps[activeStep].title} 
            className="main-image" 
            sx={{ width: '100%', height: '400px', objectFit: 'contain', marginBottom: '20px' }} 
          />
          <Typography variant="subtitle1" mt={2}>{steps[activeStep].title}</Typography>
        </Box>
      </Box>
      <Box mt={8} className="step-by-step">
        <Typography variant="h4" component="h2" gutterBottom>Detailed Guide: {steps[activeStep].title}</Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h6" component="h3">{steps[activeStep].description}</Typography>
          <Typography variant="body1" mt={2}>{steps[activeStep].details}</Typography>
        </Paper>
      </Box>
      <br/><br/><br/><br/><br/><br/>
      <footer className="footer">
        <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#59595c', width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
          <Typography variant="body2">&copy; 2024 Cornell Tech Makerspace. All rights reserved.</Typography>
          <Typography variant="body2">
            Contact us: <a href="mailto:info@cornelltechmakerspace.com" style={{ color: 'white' }} >info@cornelltechmakerspace.com</a>
          </Typography>
        </Box>
      </footer>

    </Container>

  );
};

export default ImageCarousel;
