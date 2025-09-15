import React from 'react';
import styled from 'styled-components';
import { breakpoints, linebreak } from '../breakpoints';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as CaseStudyStyle from './CaseStudyStyles';

const BreakMobile = styled.br`
  /* Apply line break styles for mobile */
  ${linebreak.mobile}
`;


const CircleContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.primaryPurple};
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  margin-right: 0.5em;
`;

const TwoColumn = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
  & > div {
    flex: 1;
    padding-right: 1em;
    @media (max-width: ${breakpoints.mobile}) {
      padding-right: 0;
    }
    &:last-of-type {
      padding: 0;
    }
  }
  div.center {
    text-align: center;
  }
  img {
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
  .waveform {
    width: 500px;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
`;

const ThreeColumnBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    grid-template-columns: unset;
  }
  .block {
    border: 2px solid ${props => props.theme.primaryPurple};
    border-radius: ${props => props.theme.smallBorderRadius};
    margin-right: 1em;
    padding: 0.5em;
    @media (max-width: ${breakpoints.mobile}) {
      width: calc(100% - 20px);
      margin-bottom: 20px;
    }
    &:last-child {
      margin-right: 0;
    }
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      h4, svg {
        display: inline;
        font-size: 1.1em;
      }
      h4 {
        margin: 0 0 0 0.5em;
      }
    }
  }
`;

const CircleNumberContainer = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-left: 1em;
    font-weight: normal;
  }
`;

const CircleNumber = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${props => props.theme.primaryPurple};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30pt;
`;

const PurpleBorder = styled.div`
  border: 2px solid ${props => props.theme.primaryPurple};
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: 1em;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 2em;
  }
  ul {
    margin: 0 0 0 1em;
    padding: 0;
    li {
      margin-bottom: 1em;
    }
  }
`;

const CaseStudySharpen = () => {
  const [refFlow, FlowisInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
  });
  const [refReporting, ReportingisInView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });
  const [refFiltering, FilteringisInView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });
  return <div>
    <CaseStudyStyle.CaseStudyHeader id='CaseStudyHeader'>
      <div id="title">
        <h1>VoIP Analytics</h1>
        <CaseStudyStyle.BackLink to='/case-study'>
          <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333008 5L5.33301 0V10L0.333008 5Z" />
          </svg>
          Back to Case Studies
        </CaseStudyStyle.BackLink>
        <CaseStudyStyle.Tags>
          <CaseStudyStyle.Tag>UX Designer</CaseStudyStyle.Tag>
        </CaseStudyStyle.Tags>
      </div>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        id='brand'
      >
        <img src="./img/casestudies/CaseStudySharpenActive.png" alt="Sharpen Case Study Active" />
      </motion.div>
    </CaseStudyStyle.CaseStudyHeader>
    <CaseStudyStyle.CaseStudyContainer>
      <section>
        <h2>Introduction</h2>
        <p>Sharpen's CCaaS software cuts through the noise with user-centric design and innovative features.  Enhanced communication channels and productivity tools streamline operations, elevate customer interactions, and boost agent performance – all driven by prioritizing user feedback. This sets a new standard for contact center excellence.</p>
      </section>
      <section>
        <h2>Project Overview</h2>
        <TwoColumn>
          <div>
            <h3>The Challenge</h3>
            <p>With a growing customer base, the request for enhanced analytics seems to grow exponentially.  It's critical that the customer be able to ensure enhanced quality through the Sharpen CCaaS platform by monitoring call and service quality as well as to report that data to all stakeholders.</p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>Reporting must be simple to generate and access, requiring a straightforward interface that doesn't require specialized training.  Additionally, we need a way to review call history with regards to the many nuances that could occur in calls.</p>
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>My Process</h2>
        <ThreeColumnBlocks>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className='block'
          >
            <div className='title'>
              <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9853 10.1542C11.8589 10.0699 11.7114 10.091 11.6061 10.1753C10.5529 10.9546 9.26804 11.3969 7.85677 11.3969C6.4455 11.3969 5.16061 10.9335 4.10743 10.1753C4.00211 10.091 3.8336 10.091 3.72828 10.1542C1.24276 11.755 0 14.8935 0 18.4954C0 20.9809 15.7135 20.9809 15.7135 18.4954C15.7135 14.8935 14.4708 11.755 11.9853 10.1542Z" fill="black"/>
                <path d="M7.85677 9.75398C10.451 9.75398 12.554 7.65096 12.554 5.05677C12.554 2.46257 10.451 0.359558 7.85677 0.359558C5.26257 0.359558 3.15956 2.46257 3.15956 5.05677C3.15956 7.65096 5.26257 9.75398 7.85677 9.75398Z" fill="black"/>
              </svg>
              <h4>User-Centric Approach</h4>
            </div>
            <p>I empathize with the user, understanding what they need in order to call a job “well done”, and in this case that's easy access to quality assurance tools, without being overwhelmed by options.</p>
          </motion.div>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className='block'
          >
            <div className='title'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66699 0.359558C1.56242 0.359558 0.666992 1.25499 0.666992 2.35956V9.69289C0.666992 10.7975 1.56242 11.6929 2.66699 11.6929H8.00033C9.10489 11.6929 10.0003 10.7975 10.0003 9.69289V2.35956C10.0003 1.25499 9.10489 0.359558 8.00033 0.359558H2.66699Z" fill="black"/>
                <path d="M13.3337 20.3596C12.2291 20.3596 11.3337 19.4641 11.3337 18.3596V11.0262C11.3337 9.92166 12.2291 9.02623 13.3337 9.02623H18.667C19.7716 9.02623 20.667 9.92166 20.667 11.0262V18.3596C20.667 19.4641 19.7716 20.3596 18.667 20.3596H13.3337Z" fill="black"/>
                <path d="M0.666992 15.0262C0.666992 13.9217 1.56242 13.0262 2.66699 13.0262H8.00033C9.10489 13.0262 10.0003 13.9217 10.0003 15.0262V18.3596C10.0003 19.4641 9.10489 20.3596 8.00033 20.3596H2.66699C1.56242 20.3596 0.666992 19.4641 0.666992 18.3596V15.0262Z" fill="black"/>
                <path d="M13.3337 7.69289C12.2291 7.69289 11.3337 6.79746 11.3337 5.69289V2.35956C11.3337 1.25499 12.2291 0.359558 13.3337 0.359558H18.667C19.7716 0.359558 20.667 1.25499 20.667 2.35956V5.69289C20.667 6.79746 19.7716 7.69289 18.667 7.69289H13.3337Z" fill="black"/>
              </svg>
              <h4>Information Architecture</h4>
            </div>
            <p>I determine the MVP as an interface with the ability to capture the most critical details, realizing user feedback will inform our next features.  I'll create a checklist of the required features and critical “nice to haves” and ensure that we have all of them, but also design in such a way as to allow growth.</p>
          </motion.div>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
            className='block'
          >
            <div className='title'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.4531 12.1602L5.48508 13.1922C5.69569 13.4028 5.69569 13.7609 5.48508 13.9715C5.37978 14.0768 5.25341 14.1189 5.10599 14.1189C4.95856 14.1189 4.81114 14.0768 4.72689 13.9715L3.69491 12.9395L2.41019 14.2242L3.44218 15.2562C3.65279 15.4668 3.65279 15.8248 3.44218 16.0354C3.33687 16.1408 3.21051 16.1829 3.06308 16.1829C2.91566 16.1829 2.78929 16.1197 2.68399 16.0354L1.63094 14.9824L0.598958 16.0144C0.240923 16.3724 0.240923 16.9621 0.620019 17.3202L3.37899 20.0791C3.56854 20.2476 3.80021 20.3529 4.03188 20.3529C4.26355 20.3529 4.49522 20.2687 4.68477 20.0791L10.0132 14.7507L5.92736 10.686L4.4531 12.1602Z" fill="black"/>
                <path d="M20.0592 3.37786L17.3002 0.618881C16.9633 0.281906 16.3525 0.281906 15.9945 0.618881L14.9835 1.65086L16.0155 2.68285C16.2261 2.89346 16.2261 3.25149 16.0155 3.4621C15.9102 3.5674 15.7839 3.63059 15.6364 3.63059C15.489 3.63059 15.3416 3.5674 15.2573 3.4621L14.2254 2.43012L12.9406 3.71483L13.9726 4.74681C14.1832 4.95742 14.1832 5.31546 13.9726 5.52607C13.8673 5.63137 13.741 5.67349 13.5935 5.67349C13.4461 5.67349 13.2987 5.63137 13.2144 5.52607L12.1403 4.45196L10.645 5.94728L14.7098 10.012L20.0592 4.66257C20.2277 4.49408 20.333 4.26241 20.333 4.00968C20.333 3.75695 20.2277 3.54634 20.0592 3.37786Z" fill="black"/>
                <path d="M6.71005 3.53316L3.52313 6.72008L14.3199 17.5169L17.5069 14.33L6.71005 3.53316Z" fill="black"/>
                <path d="M18.7113 15.551L18.2901 15.1298L15.0888 18.31L15.5101 18.7312C15.6364 18.8576 15.7839 18.9208 15.9523 18.9629L18.3954 19.3631C18.943 19.4473 19.4063 18.984 19.3221 18.4364L18.9219 15.9933C18.9009 15.8248 18.8377 15.6564 18.7113 15.551Z" fill="black"/>
                <path d="M2.74717 5.94728L5.92736 2.76709L4.64265 1.48238C4.32673 1.16646 3.82127 1.16646 3.50536 1.48238L1.46245 3.52528C1.14654 3.8412 1.14654 4.34666 1.46245 4.66257L2.74717 5.94728Z" fill="black"/>
              </svg>
              <h4>Visual Design</h4>
            </div>
            <p>The design of this system has to be completely cohesive with the existing call management system, and fit all MVP requirements while maintaining room for growth as feature requests emerge.</p>
          </motion.div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Requirements Gathering</h2>
        <TwoColumn>
          <div>
            <p>Before we can determine the Minimum Viable Product (MVP) we have to understand our requirements.  In this case we're able to start with the limitations of our current system, what we can report on based on what information is stored in the database.  With that in mind, we group those concepts and break them down into a process.</p>

            <p>When building a report, we can be sure that you'll want to report on a specific group of users, for a specific period of time, and that you'll want some (or all) of the details we've collected in the database.  We can also be sure that nobody wants to be confused or do more work than necessary.</p>

            <p>This is a depiction of the database fields that we're able to use, when the target group has been selected.  To choose the group we're reporting on, we can divide the groups by purpose, to make the selection more direct.</p>
          </div>
          <div>
            <img src="./img/casestudies/sharpen/requirementsgathering.png" alt="Requirements Gathering" />
          </div>
        </TwoColumn>
      </section>
      <section>
          <h2>Defining the Flow</h2>
          <TwoColumn>
              <div>
                  <p>Aiming for simplicity, we place the start of our flow in the top center of the screen. When visiting the Report Builder, report creation will automatically be the default state.</p>
                  <div>
                      <div><CircleContainer>1</CircleContainer>Select the group to report on</div>
                      <div><CircleContainer>2</CircleContainer>Select the members you want included</div>
                      <div><CircleContainer>3</CircleContainer>Select a single date range of data</div>
                      <div><CircleContainer>4</CircleContainer>Select the report details (functions)</div>
                      <div><CircleContainer>5</CircleContainer>Preview your report, and save</div>
                  </div>
              </div>
              <motion.div
                  ref={refFlow}
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={FlowisInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className='center'
              >
                  <img src="./img/casestudies/sharpen/DefiningTheFlow.png" alt="Defining the Flow" />
              </motion.div>
          </TwoColumn>
      </section>
      <section>
        <h2>Reporting Made Simple</h2>
        <TwoColumn>
          <div>
            <div>With only 5 clicks, a new report can be generated and exported in a variety of formats, previewed on the screen, or used as a basis for a new report, reducing the clicks even further for commonly created reports.</div>
            <p>While the Report Builder displays recently created reports on the left side of the screen, the report viewer follows suit with the same placement, but adding sort functionality to help find the report you need.</p>
          </div>
          <motion.div
              ref={refReporting}
              initial={{ x: '100%', opacity: 0 }}
              animate={ReportingisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className='center'
          >
            <img src="./img/casestudies/sharpen/ReportingMadeSimple.png" alt="Reporting Made Simple" />
          </motion.div>
        </TwoColumn>
      </section>
      <section>
        <h2>Diving Deeper into Analytics</h2>
        <TwoColumn>
          <div>
            <p>Ensuring quality communications doesn't stop with call length and other numeric data.  We want to be able to review those calls, and understand what happened.</p>

            <p>Because there may be long pauses for various reasons, or increased volume indicating heated interaction, I built in a waveform visualizer.  The user can easily see where the line was silent, or where shouting begins.  This makes the review process remarkably faster and therefore more reviews can occur ensuring quality overall.</p>
          </div>
          <div>
            <img className="waveform" src="./img/casestudies/sharpen/WaveformAnalytics.png" alt="Waveform Analytics" />
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>Advanced Filtering <BreakMobile /> (with layers)</h2>
        <p>Our competitive analysis demonstrated that effective filtering occupies a large amount of screen space.  This advanced filtering concept was my solution to conserve space, while making the process easy to use and understand.</p>
        <TwoColumn>
          <div>
            <CircleNumberContainer>
              <CircleNumber>
                1
              </CircleNumber>
              <h4>Activate Filter Options</h4>
            </CircleNumberContainer>
            <motion.div
                ref={refFiltering}
                initial={{ x: '-100%', opacity: 0 }}
                animate={FilteringisInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className='center'
            >
              <img src="./img/casestudies/sharpen/Filtering01.png" alt="Activate Filter Options" />
            </motion.div>
            <PurpleBorder>
              <ul>
                <li>User chooses a filter type from a dropdown list of selections.</li>
              </ul>
            </PurpleBorder>
          </div>
          <div>
            <CircleNumberContainer>
              <CircleNumber>
                2
              </CircleNumber>
              <h4>Choose a Category</h4>
            </CircleNumberContainer>
            <motion.div
                ref={refFiltering}
                initial={{ x: '100%', opacity: 0 }}
                animate={FilteringisInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className='center'
            >
              <img src="./img/casestudies/sharpen/Filtering02.png" alt="Choose a filter category" />
            </motion.div>
            <PurpleBorder>
              <ul>
                <li>The user may make more than one selection, and can then click Apply, or click outside of the filtering element. </li>
              </ul>
            </PurpleBorder>
          </div>
        </TwoColumn>
      </section>
      <section>
        <CircleNumberContainer>
          <CircleNumber>
            3
          </CircleNumber>
          <h4>Editing Selected Filters</h4>
        </CircleNumberContainer>
        <TwoColumn>
          <div>
            <div className='center'>
              <img src="./img/casestudies/sharpen/Filtering03.png" alt="Export selected filters" />
            </div>
            <PurpleBorder>
              <ul>
                <li>Filters can be removed simply by clicking the X on each filter element, or can add more by clicking in the input to their right.</li>
              </ul>
            </PurpleBorder>
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>Key Takeaways</h2>
        <ThreeColumnBlocks>
          <div className='block'>
            <div className='title'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7207 16.5728L10.3606 8.19163C10.8028 7.39142 11.0555 6.48592 11.0555 5.51724C11.0555 2.48486 8.57068 0 5.51724 0C2.46381 0 0 2.48486 0 5.51724C0 8.54962 2.46381 11.0555 5.51724 11.0555C6.48592 11.0555 7.39142 10.8028 8.19163 10.3606L12.9929 15.1619L11.7083 16.4464C11.3504 16.8044 11.3504 17.3519 11.7083 17.7099L13.7299 19.7315C14.0879 20.0895 14.6354 20.0895 14.9934 19.7315L16.278 18.447L16.5517 18.7207C16.8465 19.0155 17.2466 19.1629 17.6257 19.1629C18.0047 19.1629 18.4048 19.0155 18.6997 18.7207C19.3103 18.1311 19.3103 17.1624 18.7207 16.5728ZM3.05344 5.51724C3.05344 4.16952 4.14846 3.05344 5.51724 3.05344C6.88602 3.05344 7.98105 4.16952 7.98105 5.51724C7.98105 6.88602 6.86496 7.98105 5.51724 7.98105C4.14846 8.00211 3.05344 6.88602 3.05344 5.51724Z" fill="black"/>
              </svg>
              <h4>Simple Yet Complex</h4>
            </div>
            <p>The filtering system was designed to occupy as little space as possible, but offer multiple depths of filtering which could be nested deeper if more advanced filtering was requested.</p>
            <p>Users see only the filters they have chosen, and can remove them, easily.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7207 16.5728L10.3606 8.19163C10.8028 7.39142 11.0555 6.48592 11.0555 5.51724C11.0555 2.48486 8.57068 0 5.51724 0C2.46381 0 0 2.48486 0 5.51724C0 8.54962 2.46381 11.0555 5.51724 11.0555C6.48592 11.0555 7.39142 10.8028 8.19163 10.3606L12.9929 15.1619L11.7083 16.4464C11.3504 16.8044 11.3504 17.3519 11.7083 17.7099L13.7299 19.7315C14.0879 20.0895 14.6354 20.0895 14.9934 19.7315L16.278 18.447L16.5517 18.7207C16.8465 19.0155 17.2466 19.1629 17.6257 19.1629C18.0047 19.1629 18.4048 19.0155 18.6997 18.7207C19.3103 18.1311 19.3103 17.1624 18.7207 16.5728ZM3.05344 5.51724C3.05344 4.16952 4.14846 3.05344 5.51724 3.05344C6.88602 3.05344 7.98105 4.16952 7.98105 5.51724C7.98105 6.88602 6.86496 7.98105 5.51724 7.98105C4.14846 8.00211 3.05344 6.88602 3.05344 5.51724Z" fill="black"/>
              </svg>
              <h4>Quality at a Glance</h4>
            </div>
            <p>The waveform visualizer placed beside a “notes” section allows the reviewer to easily see an overview of the conversation.  The notes could reference a time within the call, or detail difficulty on the call, which can be easily analyzed without the guesswork.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7207 16.5728L10.3606 8.19163C10.8028 7.39142 11.0555 6.48592 11.0555 5.51724C11.0555 2.48486 8.57068 0 5.51724 0C2.46381 0 0 2.48486 0 5.51724C0 8.54962 2.46381 11.0555 5.51724 11.0555C6.48592 11.0555 7.39142 10.8028 8.19163 10.3606L12.9929 15.1619L11.7083 16.4464C11.3504 16.8044 11.3504 17.3519 11.7083 17.7099L13.7299 19.7315C14.0879 20.0895 14.6354 20.0895 14.9934 19.7315L16.278 18.447L16.5517 18.7207C16.8465 19.0155 17.2466 19.1629 17.6257 19.1629C18.0047 19.1629 18.4048 19.0155 18.6997 18.7207C19.3103 18.1311 19.3103 17.1624 18.7207 16.5728ZM3.05344 5.51724C3.05344 4.16952 4.14846 3.05344 5.51724 3.05344C6.88602 3.05344 7.98105 4.16952 7.98105 5.51724C7.98105 6.88602 6.86496 7.98105 5.51724 7.98105C4.14846 8.00211 3.05344 6.88602 3.05344 5.51724Z" fill="black"/>
              </svg>
              <h4>Reduced Reporting Time</h4>
            </div>
            <p>The Report Builder allows reports to be generated more easily, and therefore reporting will be completed more often.  These reports can be saved or simply referenced from the interface to match any business model.</p>
          </div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Conclusion</h2>
        <TwoColumn>
          <div>
            <p>Call Centers using Sharpen's CCaaS are able to refine their call quality, easily spotting issues like excessive hold times, heated interactions, and long stretches of wasted time, all of which matters to a quality call center.</p>

            <p>Furthermore our reporting model allows anyone with access the ability to quickly and easily generate reports which can be exported in a variety of formats and shared with stakeholders or added to larger reports for a fuller picture.</p>
          </div>
          <div>
            <img src="./img/casestudies/sharpen/Conclusion.png" alt="Conclusion.  Jon is good at UX Design." />
          </div>
        </TwoColumn>
      </section>
    </CaseStudyStyle.CaseStudyContainer>
  </div>
};

export default CaseStudySharpen;