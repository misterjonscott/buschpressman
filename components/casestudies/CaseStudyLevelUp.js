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

const CaseStudyLevelUp = () => {
  const [refAnatomy, AnatomyisInView] = useInView({
      triggerOnce: true,
      threshold: 0.0,
  });

  return <div>
    <CaseStudyStyle.CaseStudyHeader>
      <div id="title">
        <h1>Pocket Finance</h1>
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
        <img src="./img/casestudies/CaseStudyLevelUpActive.png" alt="LevelUp Case Study" />
      </motion.div>
    </CaseStudyStyle.CaseStudyHeader>
    <CaseStudyStyle.CaseStudyContainer>
      <section>
        <h2>Introduction</h2>
        <p>Our mobile app simplifies financial education through intuitive swipe gestures and interactive modules. Users build sound money management skills in budgeting, saving, and investing, guided by personalized recommendations. Extensive user research ensures an engaging and effective learning experience.</p>
      </section>
      <section>
        <h2>Project Overview</h2>
        <TwoColumn>
          <div>
            <h3>The Challenge</h3>
            <p>Create an intuitive platform for financial literacy education.</p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>Mobile app with swipe gestures, interactive modules, and personalized recommendations.</p>
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
            <p>Understanding our users' needs is key. We empathize with their financial challenges and design features that resonate with their unique goals.  The app's core focuses on essential features for effective learning.</p>
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
            <p>We prioritized a user-centric design. The app's navigation is structured for seamless access to educational resources, ensuring a smooth learning experience.</p>
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
            <p>The app's design is visually engaging and fosters comprehension. We use clear icons, readable fonts, and captivating visuals to create an interface that complements user interaction and enhances learning.</p>
          </motion.div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Wireframing and Journey Mapping</h2>
        <p>Journey maps and prototypes are our secret weapons for crafting a powerful financial education app. We map user journeys, from initial steps to financial mastery, to understand their needs and emotions. Prototypes bring our ideas to life, letting users interact and provide feedback. This rapid cycle of testing and refinement ensures a smooth, intuitive app that empowers users to achieve financial well-being. </p>
        <div className='center'>
              <img src="./img/casestudies/levelup/UserFlowDiagram.png" alt="User flow diagram" />
        </div>
      </section>
      <section>
        <TwoColumn>
          <motion.div
              ref={refAnatomy}
              initial={{ x: '-100%', opacity: 0 }}
              animate={AnatomyisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className='center'
          >
            <img src="./img/casestudies/levelup/componentNotation.png" alt="Component notation" />
          </motion.div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h2>Anatomy of a Course</h2>
            <p>Each callout type (quiz, Did you know?, recap, and task/activity) has a unique icon and color-coded border for easy recognition. We designed them to be minimal and helpful, guiding your learning without being overwhelming.</p>
            <p>Throughout the lesson, you'll also see a variety of visuals to keep things engaging. Images and videos will stretch across your entire screen for maximum impact, while illustrations will be centered for a clean, focused look.</p>
            <p>This guide provides the development team with key details for styling these elements. Look for the orange arrows highlighting these details for a quicker build process.</p>
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>User Journeys: Exploring Different Financial Goals.</h2>
        <p>Our app takes you on personalized journeys that unlock financial knowledge step-by-step.  Here's a glimpse into four key journeys:</p>
        <p><strong>Determining Your Monthly Income:</strong>  Start with a clear picture! This journey kicks off with a Course Overview explaining the importance of income awareness.  Interactive features like income calculators and illustrated examples guide you through identifying all your income sources.  Wrap up with a personalized breakdown of your monthly inflow, ready for budgeting.</p>
        <div className='center'>
              <img src="./img/casestudies/levelup/determiningMonthlyIncome.png" alt="Determining Your Monthly Income: Flow" />
        </div>
      </section>
      <section>
        <p><strong>Explore Budget Tracking Options:</strong> Feeling overwhelmed by budgeting? Not anymore! The "Explore Budget Tracking Options" journey introduces you to various budgeting methods through engaging illustrations and interactive quizzes.  Match your financial personality to the perfect budgeting style, ensuring a comfortable and sustainable approach.  Swipe left for the next step!</p>
        <div className='center'>
              <img src="./img/casestudies/levelup/exploreBudgetTrackingOptions.png" alt="Explore Budget Tracking Options: Flow" />
        </div>
      </section>
      <section>
        <p><strong>Classifying Needs vs Wants</strong>:  Mastering the art of "needs vs. wants" empowers smart spending. This journey starts with a Course Overview highlighting the difference.  Interactive exercises like sorting games and illustrated scenarios help you categorize expenses effectively.  Conclude by feeling confident in prioritizing your needs and making informed spending decisions.</p>
        <div className='center'>
              <img src="./img/casestudies/levelup/classifyingNeedsVsWants.png" alt="Classifying Needs Vs Wants: Flow" />
        </div>
      </section>
      <section>
        <p><strong>Listing Your Goals:</strong>  Let's turn financial dreams into reality! This journey begins with a Course Overview on setting achievable goals.  Interactive tools like guided prompts and vision board creation walk you through defining your short and long-term financial aspirations.  Finish by feeling motivated with a clear roadmap to your financial goals.</p>
        <div className='center'>
              <img src="./img/casestudies/levelup/listingYourGoals.png" alt="Listing Your Goals: Flow" />
        </div>
        <p>Throughout each journey, clear introductions and concluding summaries ensure you grasp the concepts.  Swipe left after each lesson to progress and unlock new financial mastery!</p>
      </section>
      <section>
        <h2>Key Takeaways</h2>
        <ThreeColumnBlocks>
          <div className='block'>
            <div className='title'>
              <h4>Personalized Learning</h4>
            </div>
            <p>Our app tailors the journey to your needs, offering interactive tools and engaging visuals to make financial literacy fun and accessible.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <h4>Step-by-step Guidance</h4>
            </div>
            <p>Each journey starts with clear introductions and concludes with actionable takeaways, ensuring you grasp the concepts and build confidence.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <h4>Interactive Exploration</h4>
            </div>
            <p>Swipe through interactive exercises, quizzes, and illustrations to discover the right budgeting style, categorize expenses wisely, and set achievable financial goals.</p>
          </div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>I UX-engineered a mobile app prototype to gamify financial literacy. Users embark on interactive journeys like "Budget Tracking Bootcamp" and "Needs vs. Wants Showdown." Clear intros, engaging visuals, and fun exercises guide them towards financial well-being.  This case study highlights the power of UX design in crafting educational experiences that are both informative and delightful!</p>
      </section>
    </CaseStudyStyle.CaseStudyContainer>
  </div>
};

export default CaseStudyLevelUp;