import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import Button from "../../styles/GlobalComponents/Button";

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <h3 style={{ margin: "20px" }}>
      {" "}
      Recieved first place in esamudaay hackathon{" "}
    </h3>
    <a href="https://drive.google.com/file/d/1nvrWbfkEER208QOgyzTbosyo3lz5Wy4S/view">
      <Button>Certificate</Button>
    </a>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
