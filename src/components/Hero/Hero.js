import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there! <br />
          Myself Punith
        </SectionTitle>
        <SectionText>
          I write Javascript and react to build modern websites
        </SectionText>
        <a href="https://drive.google.com/file/d/19AUpQmss1iAsfOg6CE_qpOwh2Tt54VpB/view">
          {" "}
          <Button>Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
