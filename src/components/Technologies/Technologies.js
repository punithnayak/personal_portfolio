import React from 'react';
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Modern HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tailwindcss and bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
