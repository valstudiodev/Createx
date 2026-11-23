import { Container, Section } from '@/shared/primitives';
import React from 'react';
import AboutStudyingProcessContent from './AboutStudyingProcessContent';
import image from "../assets/about-study-process.png";
import './aboutStydyingProcess.scss';

interface AboutStudyingProcessProps {
  className?: string;
}

function AboutStudyingProcess({
  className = ''
}: AboutStudyingProcessProps): React.JSX.Element {
  const aboutStudyingProcess = 'about-studying-process'
  return (
    <Section className={`${aboutStudyingProcess} ${className}`}>
      <Container className={`${aboutStudyingProcess}__container`}>
        <AboutStudyingProcessContent
          className={`${aboutStudyingProcess}__content`}
        />
        <div className={`${aboutStudyingProcess}__image`}>
          <img
            aria-hidden='true'
            src={image} alt="" />
        </div>
      </Container>
    </Section>
  );
}

export default AboutStudyingProcess;