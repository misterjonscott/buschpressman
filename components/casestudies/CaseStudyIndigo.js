import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as CaseStudyStyle from './CaseStudyStyles';

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

const CaseStudyIndigo = () => {

  const [refRemodel, RemodelisInView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });

  const [refConclusion, ConclusionisInView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });

  return <div>
    <CaseStudyStyle.CaseStudyHeader>
      <div id="title">
        <h1>Bioscience w/Ease</h1>
        <CaseStudyStyle.BackLink to='/case-study'>
          <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333008 5L5.33301 0V10L0.333008 5Z" />
          </svg>
          Back to Case Studies
        </CaseStudyStyle.BackLink>
        <CaseStudyStyle.Tags>
          <CaseStudyStyle.Tag>UX Designer</CaseStudyStyle.Tag> <CaseStudyStyle.Tag>Print Designer</CaseStudyStyle.Tag>
        </CaseStudyStyle.Tags>
      </div>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        id='brand'
      >
        <img src="./img/casestudies/CaseStudyIndigoActive.png" alt="Indigo Case Study Active" />
      </motion.div>
    </CaseStudyStyle.CaseStudyHeader>
    <CaseStudyStyle.CaseStudyContainer>
      <section>
        <h2>Introduction</h2>
        <p>Indigo's primary product reads the output from Mass Spectrometry machines, and delivers human-readable results without the training required to read and analyze the test results without years of medical training.  Unfortunately, while the software's capability was amazing, accurate and much faster than human review, it was also difficult to use and properly configure.</p>
      </section>
      <section>
        <h2>Project Overview</h2>
        <TwoColumn>
          <div>
            <h3>The Challenge</h3>
            <p>While the software's capability is incredible, it still required someone with training to understand what the terminology meant, how to configure the tests, and overall be usable without requiring a doctor's precious time.</p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>We must research, interview, and fully understand the user's process so we can break it down into simpler steps that anyone could accomplish, all while keeping the barrier to entry low with a simplified interface.</p>
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
            <p>I met with all internal stakeholders possible, many of whom had worked in the field and had a deep understanding of the process such that they could explain it to me.  </p>

            <p>I was also able to interview current users of the system to learn what they wanted, what they expected, and best of all what they thought they'd like to see.</p>
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
            <p>Because this process was somewhat complex to configure, we'll break it into simpler steps.  We can't simply make a step-by-step list, though, so we need to group or eliminate steps wherever possible.</p>
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
            <p>While there were few restrictions on the visual styling of this interface, it must look approachable to people without specialized medical training. </p>

            <p>Ideally we want this to look simple, while being deeply complex behind the scenes.</p>
          </motion.div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Remodeling the Dashboard</h2>
        <motion.div
            ref={refRemodel}
            initial={{ y: '100%', opacity: 0 }}
            animate={RemodelisInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className='center'
        >
          <img src="./img/casestudies/indigo/dashboardBeforeAndAfter.png" alt="Dashboard before and after" />
        </motion.div>
      </section>
      <section>
        <h2>Reduce Clutter, Direct Attention</h2>
        <TwoColumn>
          <div style={{flex: 2}}>
            <p>Any batches that are already cancelled or certified no longer need attention, and are very rarely viewed, so we don't need to sacrifice valuable screen space to display them.  In this iteration, I used a tabbed approach to show only active batches, but the user can easily view the completed batches with a single click.</p>

            <p>This declutters the display, calling more attention to where it's needed, while making the matrix feel more approachable.</p>
          </div>
          <div>
            <img src="./img/casestudies/indigo/reducedClutter.png" alt="Reducing Clutter" />
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>Reusable Filtering</h2>
        <TwoColumn>
        <div style={{flex: 2}}>
            <p>The existing filter column displayed all possible filters and all possible values, occupying more screen space than necessary, and introducing unnecessary visual clutter.</p>

            <p>I replaced lists of checkbox-selected elements with a single input where the user clicks to display a scrolling dropdown of all available options, and can select one or more.  Just as simple as unchecking a checkbox, the user can click the X icon to remove a filter parameter.</p>

            <p>By user request, we added the ability to save filtering states, so a complex system of filters can be loaded instantly.  </p>
            <div className='center'>
              <img src="./img/casestudies/indigo/filteringOptions.png" alt="Filtering Magic" />
            </div>
          </div>
          <div className='center'>
            <img src="./img/casestudies/indigo/filterMenu.png" alt="Filter Menu" />
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>Dashboard Conclusion</h2>
        <p>Overall the dashboard appears much more professional and polished, making it easier to get work done.  Filtering is simplified, unnecessary results are hidden, and color coding is used to highlight the batches that require immediate attention.  This redesigned dashboard contains all of the same information, but in a much more approachable and finished format that users absolutely loved. </p>
        <motion.div
            ref={refConclusion}
            initial={{ y: '100%', opacity: 0 }}
            animate={ConclusionisInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className='center'
        >
          <img src="./img/casestudies/indigo/dashboardConclusion.png" alt="Dashboard before and after" />
        </motion.div>
      </section>
      <section>
        <h2>Controlling the Flow</h2>
        <p>Configuration of this software is largely done on the Lots & Levels configuration screen, but the existing flow was confusing and led users to call for help more often than not.  Simply redesigning the flow made the process obvious and clear.</p>
        <div className='center'>
              <img src="./img/casestudies/indigo/lotsAndLevels.png" alt="Lots and Levels Configuration" />
        </div>
      </section>
      <section>
        <h2>Combining to Simplify</h2>
        <p>Configuration of users occured on 3 separate screens, with one allowing new users to be added, the next allowing management of user accounts, and yet another screen just to manage complex user permissions.</p>
        <p>I combined all of these activities into a single interface saving time for our users, but also simplifying debugging and development processes for our developers.</p>
        <div className='center'>
              <img src="./img/casestudies/indigo/userManagement.png" alt="User Configuration" />
        </div>
      </section>
      <section>
        <h2>Branding</h2>
        <p>Configuration of users occured on 3 separate screens, with one allowing new users to be added, the next allowing management of user accounts, and yet another screen just to manage complex user permissions.</p>
        <p>I combined all of these activities into a single interface saving time for our users, but also simplifying debugging and development processes for our developers.</p>
        <div className='center'>
              <img src="./img/casestudies/indigo/indigoBranding.png" alt="Indigo Branding" />
              <p>I created these and other video assets, for various uses as well.  I'm sharing them because I loved animating these isometric designs.</p>
              <div className='center'>
                <img src="./img/casestudies/indigo/IndigoComputer.gif" alt="Indigo Computer Animation" />
                <img src="./img/casestudies/indigo/IndigoServer.gif" alt="Indigo Server Animation" />
              </div>
        </div>
      </section>
      <section>
        <h2>Key Takeaways</h2>
        <ThreeColumnBlocks>
          <div className='block'>
            <div className='title'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7207 16.5728L10.3606 8.19163C10.8028 7.39142 11.0555 6.48592 11.0555 5.51724C11.0555 2.48486 8.57068 0 5.51724 0C2.46381 0 0 2.48486 0 5.51724C0 8.54962 2.46381 11.0555 5.51724 11.0555C6.48592 11.0555 7.39142 10.8028 8.19163 10.3606L12.9929 15.1619L11.7083 16.4464C11.3504 16.8044 11.3504 17.3519 11.7083 17.7099L13.7299 19.7315C14.0879 20.0895 14.6354 20.0895 14.9934 19.7315L16.278 18.447L16.5517 18.7207C16.8465 19.0155 17.2466 19.1629 17.6257 19.1629C18.0047 19.1629 18.4048 19.0155 18.6997 18.7207C19.3103 18.1311 19.3103 17.1624 18.7207 16.5728ZM3.05344 5.51724C3.05344 4.16952 4.14846 3.05344 5.51724 3.05344C6.88602 3.05344 7.98105 4.16952 7.98105 5.51724C7.98105 6.88602 6.86496 7.98105 5.51724 7.98105C4.14846 8.00211 3.05344 6.88602 3.05344 5.51724Z" fill="black"/>
              </svg>
              <h4>Simplification</h4>
            </div>
            <p>Often we find great products created by talented engineers, but the interface is too complex for a new user.  By simplifying the inputs, reordering how things are configured and presenting a visually easy-to-follow process, we made a complex medical application approachable by most anyone in the organization.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7207 16.5728L10.3606 8.19163C10.8028 7.39142 11.0555 6.48592 11.0555 5.51724C11.0555 2.48486 8.57068 0 5.51724 0C2.46381 0 0 2.48486 0 5.51724C0 8.54962 2.46381 11.0555 5.51724 11.0555C6.48592 11.0555 7.39142 10.8028 8.19163 10.3606L12.9929 15.1619L11.7083 16.4464C11.3504 16.8044 11.3504 17.3519 11.7083 17.7099L13.7299 19.7315C14.0879 20.0895 14.6354 20.0895 14.9934 19.7315L16.278 18.447L16.5517 18.7207C16.8465 19.0155 17.2466 19.1629 17.6257 19.1629C18.0047 19.1629 18.4048 19.0155 18.6997 18.7207C19.3103 18.1311 19.3103 17.1624 18.7207 16.5728ZM3.05344 5.51724C3.05344 4.16952 4.14846 3.05344 5.51724 3.05344C6.88602 3.05344 7.98105 4.16952 7.98105 5.51724C7.98105 6.88602 6.86496 7.98105 5.51724 7.98105C4.14846 8.00211 3.05344 6.88602 3.05344 5.51724Z" fill="black"/>
              </svg>
              <h4>Decluttering</h4>
            </div>
            <p>Because the software is so featureful, and configurable, it can be very easy for the user to get lost, confused, and, worst of all, make mistakes when reviewing medical results.</p>

            <p>Decluttering and redesigning the appearance reduces that confusion and helps the user get work done efficiently.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7207 16.5728L10.3606 8.19163C10.8028 7.39142 11.0555 6.48592 11.0555 5.51724C11.0555 2.48486 8.57068 0 5.51724 0C2.46381 0 0 2.48486 0 5.51724C0 8.54962 2.46381 11.0555 5.51724 11.0555C6.48592 11.0555 7.39142 10.8028 8.19163 10.3606L12.9929 15.1619L11.7083 16.4464C11.3504 16.8044 11.3504 17.3519 11.7083 17.7099L13.7299 19.7315C14.0879 20.0895 14.6354 20.0895 14.9934 19.7315L16.278 18.447L16.5517 18.7207C16.8465 19.0155 17.2466 19.1629 17.6257 19.1629C18.0047 19.1629 18.4048 19.0155 18.6997 18.7207C19.3103 18.1311 19.3103 17.1624 18.7207 16.5728ZM3.05344 5.51724C3.05344 4.16952 4.14846 3.05344 5.51724 3.05344C6.88602 3.05344 7.98105 4.16952 7.98105 5.51724C7.98105 6.88602 6.86496 7.98105 5.51724 7.98105C4.14846 8.00211 3.05344 6.88602 3.05344 5.51724Z" fill="black"/>
              </svg>
              <h4>Polishing</h4>
            </div>
            <p>While the software worked well, it looked like something engineers designed for engineers to use.  Redesigning the interface to be modern and approachable lowers the perceived barrier to entry, and suggests confidence that the software is refined and worthy of the user's trust.</p>
          </div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>Decoding the results of a complex medical testing process is no easy task, even when you've created software that can decode those results very quickly.  My changes resulted in a much easier, and more approachable, system that no longer required the valuable time of trained medical staff for initial review, allowing doctors to focus on other tasks, only addressing the most confusing of results.</p>
      </section>
    </CaseStudyStyle.CaseStudyContainer>
  </div>
};

export default CaseStudyIndigo;