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
        <a href="https://drive.google.com/file/d/1ktsGMMgi4kuidcIvCSgbs0o8mSoqi5oh/view?usp=sharing">
          {" "}
          <Button>Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
