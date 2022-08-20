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
        <a href="https://docs.google.com/document/d/1MSNW_Wes8rMqkcZMFWOXSAw7aFkB-VR0awUBKCCJn80/edit?usp=sharing">
          {" "}
          <Button>Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;