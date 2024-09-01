import styled from "styled-components";
import { motion } from 'framer-motion';

export const Section = styled.section`
  display: flex;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #fff, #f0f0f0, #DEE6F21);
`;

export const PaletteWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%);
  padding: 2rem;
  overflow-y: auto;
  flex-shrink: 0; /* Prevent shrinking */
`;

export const Palette = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Circle = styled(motion.div)`
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CircleImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
`;

export const DetailsWrapper = styled.div`
  flex-grow: 1;
  background: #F6F8FB;
  backdrop-filter: blur(10px);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`;

export const ProjectTitle = styled.h2`
  font-size: 3rem;
  color: #000;
  margin-bottom: 1rem;
`;

export const ProjectSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px; /* Adjust based on design */
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
  float: left;
  margin-right: 1rem;
`;

export const Video = styled.video`
  width: 100%;
  max-width: 400px; /* Adjust based on design */
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #000;
  margin-bottom: 1rem;
  overflow-wrap: break-word; /* Ensure text wraps properly */
`;

export const Link = styled.a`
  color: #ffdd00;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6f00;
  }
`;