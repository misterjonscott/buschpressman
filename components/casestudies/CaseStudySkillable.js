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

const TwoColumn = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
  & > div {
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

const CaseStudySkillable = () => {
  const [refDraft, DraftisInView] = useInView({
      triggerOnce: true, // Only trigger once when element comes into view
      threshold: 0.2, // Adjust threshold as needed
  });
  const [refCardDesign, CardDesignisInView] = useInView({
    triggerOnce: true, // Only trigger once when element comes into view
    threshold: 0.1, // Adjust threshold as needed
  });
  const [refGridAndList, GridAndListisInView] = useInView({
      triggerOnce: true, // Only trigger once when element comes into view
      threshold: 0.2, // Adjust threshold as needed
  });

  return <div>
    <CaseStudyStyle.CaseStudyHeader id='CaseStudyHeader'>
      <div id="title">
        <h1>Course Library</h1>
        <CaseStudyStyle.BackLink to='/case-study'>
          <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333008 5L5.33301 0V10L0.333008 5Z"/>
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
        <img src="./img/casestudies/CaseStudySkillableActive.png" alt="Skillable Case Study Active" />
      </motion.div>
    </CaseStudyStyle.CaseStudyHeader>
    <CaseStudyStyle.CaseStudyContainer>
      <section>
        <h2>Introduction</h2>
        <p>Skillable TMS needed a UX refresh to compete. As a UX engineer, I championed user feedback and online learning trends. We revamped browsing with grid/list views for choice, and empowered learners with new filters: Favorites, Review Ratings & Current Status.  These let users personalize their journey, make informed decisions, and track progress seamlessly. Boom! Happy learners, happy Skillable.</p>
      </section>
      <section>
        <h2>Project Overview</h2>
        <TwoColumn>
          <div>
            <h3>The Challenge</h3>
            <p>Skillable provides a TMS, but it was regarded by some as lackluster, and needed a fresh look and new features to compete with other more-rounded TMS platforms.</p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>Integrate as many new features as possible, including a fully responsive design, and advanced filtering features.  This new design should support Learning Paths, on-demand subscriptions and classes.  </p>
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
            <p>Deep user research (surveys, interviews, observations) revealed attendee pain points and menu system improvement opportunities.</p>
          </motion.div>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className='block'
          >
            <div className='title'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 0.359558C1.56242 0.359558 0.666992 1.25499 0.666992 2.35956V9.69289C0.666992 10.7975 1.56242 11.6929 2.66699 11.6929H8.00033C9.10489 11.6929 10.0003 10.7975 10.0003 9.69289V2.35956C10.0003 1.25499 9.10489 0.359558 8.00033 0.359558H2.66699Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.3337 20.3596C12.2291 20.3596 11.3337 19.4641 11.3337 18.3596V11.0262C11.3337 9.92166 12.2291 9.02623 13.3337 9.02623H18.667C19.7716 9.02623 20.667 9.92166 20.667 11.0262V18.3596C20.667 19.4641 19.7716 20.3596 18.667 20.3596H13.3337Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.666992 15.0262C0.666992 13.9217 1.56242 13.0262 2.66699 13.0262H8.00033C9.10489 13.0262 10.0003 13.9217 10.0003 15.0262V18.3596C10.0003 19.4641 9.10489 20.3596 8.00033 20.3596H2.66699C1.56242 20.3596 0.666992 19.4641 0.666992 18.3596V15.0262Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.3337 7.69289C12.2291 7.69289 11.3337 6.79746 11.3337 5.69289V2.35956C11.3337 1.25499 12.2291 0.359558 13.3337 0.359558H18.667C19.7716 0.359558 20.667 1.25499 20.667 2.35956V5.69289C20.667 6.79746 19.7716 7.69289 18.667 7.69289H13.3337Z" fill="black"/>
              </svg>
              <h4>Information Architecture</h4>
            </div>
            <p>Designed a clear and organized information architecture for the TMS course library. Intuitive menus, robust search, and clickable hotspots empower users to navigate effortlessly and explore seamlessly.</p>
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
            <p>Maintained user familiarity within the TMS redesign, addressing requests like optional list/grid views. We maximized functionality in a limited space.</p>
          </motion.div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Competitive Analysis</h2>
        <TwoColumn>
          <div>
            <p>Because there are many existing TMS platforms, that people are already using and familiar with, we should reference what's already working in the market.  We'll take note of what features and controls each competitor has before deciding if it suits our needs.</p>
            <p>In this case, I discovered that most TMS platforms included filtering options, but the options are overwhelming and occupy too much space.  Furthermore, each TMS displayed a matrix of courses, but few offered control over their display or pagination.</p>
          </div>
          <img src="./img/casestudies/skillable/competitiveanalysis.png" alt="Competetive Analysis" />
        </TwoColumn>
      </section>
      <section>
        <h2>Initial Draft</h2>
        <TwoColumn>
          <div>
            <p>We knew we wanted to support a grid and list layout, as well as pagination, and view controls.  In this step, we rough out what the grid page looks like, and find the best placement for the pagination and display controls.</p>
            <motion.div
                ref={refDraft}
                initial={{ x: '-100%', opacity: 0 }}
                animate={DraftisInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className='center'
            >
              <img src="./img/casestudies/skillable/initialdraft.png" alt="Competetive Analysis" />
            </motion.div>
          </div>
          <motion.div
              ref={refDraft}
              initial={{ x: '100%', opacity: 0 }}
              animate={DraftisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className='center'
          >
            <img src="./img/casestudies/skillable/initialdraftcontrols.png" alt="Competetive Analysis" />
          </motion.div>
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
            <div className='center'>
              <img src="./img/casestudies/skillable/activatefilteroptions.png" alt="Activate Filter Options" />
            </div>
            <PurpleBorder>
              <ul>
                <li>When Filter Options is clicked, the Filter Options button gets a bottom arrow to show it's expanded, and the Add New button appears, already active and ready.</li>
                <li>Total count of favorites is displayed.  If there are not favorites, don't display.</li>
                <li>Favorites and Review Rating are standard, other filter categories are dynamic, based on available results.  </li>
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
            <div className='center'>
              <img src="./img/casestudies/skillable/chooseacategory.png" alt="Choose a filter category" />
            </div>
            <PurpleBorder>
              <ul>
                <li>When a filter category is chosen, the submenu appears.</li>
                <li>The user may make more than one selection, and can then click Apply, or click outside of the filtering element.</li>
                <li>If the user clicks outside of this menu without a selection, the display will revert to the Add New button without automatically popping the submenu.</li>
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
              <img src="./img/casestudies/skillable/exportselectedfilters.png" alt="Export selected filters" />
            </div>
            <PurpleBorder>
              <ul>
                <li>When Filter is chosen, the filter's controller appears, populated with the choice or choices (if allowed).</li>
                <li>the user can click to edit their choices (using the same menu as they chose to select them, or remove that filter using the X button. They can also add another filter at this stage.</li>
                <li>When editing a filter, the currently selected choices should be anchored to the top of the list.</li>
                <li>Filter selections can be applied by clicking the checkmark on the filter controller, or by clicking the Apply button.</li>
              </ul>
            </PurpleBorder>
          </div>
          <div>
            <div className='center'>
              <img src="./img/casestudies/skillable/editmode.png" alt="Edit mode" />
            </div>
          </div>
        </TwoColumn>
      </section>
      <section>
        <CircleNumberContainer>
          <CircleNumber>
            4
          </CircleNumber>
          <h4>Final Details</h4>
        </CircleNumberContainer>
        <TwoColumn>
          <div>
            <div className='center'>
              <img src="./img/casestudies/skillable/finaldetails.png" alt="Final details for filtering" />
            </div>
            <PurpleBorder>
              <p>If many filters are chosen, and we run out of screen width, the filter controls and Add New button should wrap to the next line.</p>
            </PurpleBorder>
          </div>
          <div>
            <div className='center'>
              <img src="./img/casestudies/skillable/finaldetails2.png" alt="Final Details for filtering pt2" />
            </div>
            <PurpleBorder>
              <p>Clicking Filter Options when the filters are populated will hide the filter controls, and remove the downward arrow from the Filter Options button, while retaining the overall count of selected filter categories.  Clicking this button again will show the filters as before.</p>
            </PurpleBorder>
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>Card Design</h2>
        <motion.div
                ref={refCardDesign}
                initial={{ y: '100%', opacity: 0 }}
                animate={CardDesignisInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className='center'
            >
              <img src="./img/casestudies/skillable/carddesign.png" alt="Card Design" />
        </motion.div>
      </section>
      <section>
        <h2>Card Variations</h2>
        <div className='center'>
              <img src="./img/casestudies/skillable/cardvariations.png" alt="Card Variations" />
              <img src="./img/casestudies/skillable/cardvariationslist.png" alt="Card Variations (list view)" />
        </div>
      </section>
      <section>
        <h2>Grid & List Views</h2>
        <TwoColumn>
          <motion.div
              ref={refGridAndList}
              initial={{ x: '-100%', opacity: 0 }}
              animate={GridAndListisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <img src="./img/casestudies/skillable/coursecataloggrid.png" alt="Course Catalog Grid" />
          </motion.div>
          <p><br /><br />With the card design complete, we can update the layout with the new cards.</p>
          <motion.div
              ref={refGridAndList}
              initial={{ x: '100%', opacity: 0 }}
              animate={GridAndListisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className='center'
          >
            <img src="./img/casestudies/skillable/coursecataloglist.png" alt="Course Catalog List View" />
          </motion.div>
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
            <p>The filtering system was designed to occupy as little space as possible, while offering even more functionality than many competing TMS platforms.</p>
            <p>Users see only the filters they have chosen, and can make changes to those filters, or remove them, easily.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7207 16.5728L10.3606 8.19163C10.8028 7.39142 11.0555 6.48592 11.0555 5.51724C11.0555 2.48486 8.57068 0 5.51724 0C2.46381 0 0 2.48486 0 5.51724C0 8.54962 2.46381 11.0555 5.51724 11.0555C6.48592 11.0555 7.39142 10.8028 8.19163 10.3606L12.9929 15.1619L11.7083 16.4464C11.3504 16.8044 11.3504 17.3519 11.7083 17.7099L13.7299 19.7315C14.0879 20.0895 14.6354 20.0895 14.9934 19.7315L16.278 18.447L16.5517 18.7207C16.8465 19.0155 17.2466 19.1629 17.6257 19.1629C18.0047 19.1629 18.4048 19.0155 18.6997 18.7207C19.3103 18.1311 19.3103 17.1624 18.7207 16.5728ZM3.05344 5.51724C3.05344 4.16952 4.14846 3.05344 5.51724 3.05344C6.88602 3.05344 7.98105 4.16952 7.98105 5.51724C7.98105 6.88602 6.86496 7.98105 5.51724 7.98105C4.14846 8.00211 3.05344 6.88602 3.05344 5.51724Z" fill="black"/>
              </svg>
              <h4>Differing Perspectives</h4>
            </div>
            <p>Our competitive research showed a variety fo tiled and listed layouts, and our users were divided on which they preferred.</p>
            <p>We satisfy both groups with this new design, where either view is an option, and that option is saved in the user's account for future use.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7207 16.5728L10.3606 8.19163C10.8028 7.39142 11.0555 6.48592 11.0555 5.51724C11.0555 2.48486 8.57068 0 5.51724 0C2.46381 0 0 2.48486 0 5.51724C0 8.54962 2.46381 11.0555 5.51724 11.0555C6.48592 11.0555 7.39142 10.8028 8.19163 10.3606L12.9929 15.1619L11.7083 16.4464C11.3504 16.8044 11.3504 17.3519 11.7083 17.7099L13.7299 19.7315C14.0879 20.0895 14.6354 20.0895 14.9934 19.7315L16.278 18.447L16.5517 18.7207C16.8465 19.0155 17.2466 19.1629 17.6257 19.1629C18.0047 19.1629 18.4048 19.0155 18.6997 18.7207C19.3103 18.1311 19.3103 17.1624 18.7207 16.5728ZM3.05344 5.51724C3.05344 4.16952 4.14846 3.05344 5.51724 3.05344C6.88602 3.05344 7.98105 4.16952 7.98105 5.51724C7.98105 6.88602 6.86496 7.98105 5.51724 7.98105C4.14846 8.00211 3.05344 6.88602 3.05344 5.51724Z" fill="black"/>
              </svg>
              <h4>Reusable Components</h4>
            </div>
            <p>The initial request was to create a new way display for Course galleries, but we were able to make this design work for all cases.</p>
            <p>We can support Courses, Learning Paths (series of courses) and Classes, viewed in the layout you prefer, saving precious development time.</p>
          </div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Conclusion</h2>
        <TwoColumn>
          <div>
            <p>Skillable's users are now able to browse, filter and sort available courses to find their own interest or study.  We've added more features than competing TMS platforms currently offer, and we've done it in such a way that we can reuse the design for other listing pages, as well as intermingle cards for Learning Paths and Courses together which solves another need.</p>
          </div>
          <div>
            <img src="./img/casestudies/skillable/conclusion.png" alt="Conclusion.  Jon is good at UX Design." />
          </div>
        </TwoColumn>
      </section>
    </CaseStudyStyle.CaseStudyContainer>
  </div>
};

export default CaseStudySkillable;