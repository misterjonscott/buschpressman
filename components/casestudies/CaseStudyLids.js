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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
`;

const GridItem = styled.div`
  text-align: center;
`;

const Caption = styled.p`
  font-size: 0.8em;
  padding: 0 0.5em;
`;

const CaseStudyLids = () => {
  const [refCheckout, CheckoutisInView] = useInView({
      triggerOnce: true, // Only trigger once when element comes into view
      threshold: 0.1, // Adjust threshold as needed
  });
  const [refCart, CartisInView] = useInView({
      triggerOnce: true, // Only trigger once when element comes into view
      threshold: 0.1, // Adjust threshold as needed
  });
  const [refBuilding, BuildingisInView] = useInView({
      triggerOnce: true, // Only trigger once when element comes into view
      threshold: 0.1, // Adjust threshold as needed
  });

  return <div>
    <CaseStudyStyle.CaseStudyHeader>
      <div id="title">
        <h1>Smart Shopping</h1>
        <CaseStudyStyle.BackLink to='/case-study'>
          <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333008 5L5.33301 0V10L0.333008 5Z" />
          </svg>
          Back to Case Studies
        </CaseStudyStyle.BackLink>
        <CaseStudyStyle.Tags>
          <CaseStudyStyle.Tag>UI Developer</CaseStudyStyle.Tag> <CaseStudyStyle.Tag>UX Designer</CaseStudyStyle.Tag>
        </CaseStudyStyle.Tags>
      </div>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        id='brand'
      >
        <img src="./img/casestudies/CaseStudyLidsActive.png" alt="Lids Case Study" />
      </motion.div>
    </CaseStudyStyle.CaseStudyHeader>
    <CaseStudyStyle.CaseStudyContainer>
      <section>
        <h2>Introduction</h2>
        <p>Lids, a leading retailer for hats and headwear, caters to a diverse audience passionate about expressing themselves through style.  In 2009, we embarked on a project to enhance the online shopping experience for Lids customers.  This case study dives into the design process and solutions implemented to streamline the checkout process, improve the shopping cart functionality, and create engaging homepages across various teams and organizations within Lids.</p>
      </section>
      <section>
        <h2>Project Overview</h2>
        <TwoColumn>
          <div>
            <h3>The Challenge</h3>
            <p>Lids' online checkout was clunky, confusing users and leading to abandoned carts. The shopping cart didn't incentivize completion, and managing multiple team homepages with a shared codebase proved difficult to balance brand identity and efficiency.</p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>We streamlined checkout, reducing friction and cart abandonment. The shopping cart now incentivizes completion with features like progress indicators and product recommendations. We tackled the homepage challenge with a shared codebase design system, ensuring brand consistency while allowing for unique team identities.</p>
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
            <p>Understanding customer pain points through research fueled a smoother checkout and shopping cart experience. We minimized steps, provided clear information, and nudged users towards purchase completion.</p>
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
            <p>A well-defined information architecture (IA) prioritized intuitive navigation on redesigned homepages. This user-focused approach ensured effortless product discovery across all Lids brands.</p>
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
            <p>A design system provided a shared codebase for efficient development of unique homepages. This system maintained a consistent user experience across Lids brands while allowing each team to showcase their distinct visual identity.</p>
          </motion.div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Faster to Finish: Optimizing the Checkout Process</h2>
        <p>Who needs checkout marathons? I revamped Lids' checkout into a single, smooth journey. Users see a sneak peek of the next step, keeping them moving forward. Real-time validation catches errors on the fly, and completion cards on the side let users easily review and edit any section. Boom! Less frustration, clear sailing, and happy Lids customers!</p>
        <GridContainer>
          <GridItem>
            <motion.div
              ref={refCheckout}
              animate={CheckoutisInView ? { y: 0, opacity: 1 } : {}}
              initial={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <img src="./img/casestudies/lids/checkoutProcess01.png" alt="Component notation" />
            </motion.div>
            <Caption>While the user completes Billing Information, the tab for Shipping Information is revealed.  This shows the user what to expect, and the accordion styling makes the whole checkout process appear on one page.</Caption>
          </GridItem>
          <GridItem>
            <motion.div
              ref={refCheckout}
              animate={CheckoutisInView ? { y: 0, opacity: 1 } : {}}
              initial={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            >
              <img src="./img/casestudies/lids/checkoutProcess02.png" alt="Component notation" />
            </motion.div>
            <Caption>As this system handled form validation through PHP, we’d check each form when the user selected the first element of the next section.</Caption>
          </GridItem>
          <GridItem>
            <motion.div
              ref={refCheckout}
              animate={CheckoutisInView ? { y: 0, opacity: 1 } : {}}
              initial={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
            >
              <img src="./img/casestudies/lids/checkoutProcess03.png" alt="Component notation" />
            </motion.div>
            <Caption>Upon correcting errors, users can simply click the first field in the next section to seamlessly progress.</Caption>
          </GridItem>
          <GridItem>
            <motion.div
              ref={refCheckout}
              animate={CheckoutisInView ? { y: 0, opacity: 1 } : {}}
              initial={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
            >
              <img src="./img/casestudies/lids/checkoutProcess04.png" alt="Component notation" />
            </motion.div>
            <Caption>After the user has completed all fields required for the checkout process, we show a final review before allowing submission.</Caption>
          </GridItem>
          <GridItem>
            <motion.div
              ref={refCheckout}
              animate={CheckoutisInView ? { y: 0, opacity: 1 } : {}}
              initial={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
            >
              <img src="./img/casestudies/lids/checkoutProcess05.png" alt="Component notation" />
            </motion.div>
            <Caption>If the user needs to go back and edit a filled section, they may select the “edit” control on any section to open it and make changes.</Caption>
          </GridItem>
          <GridItem />
        </GridContainer>
      </section>      
      <section>
        <h2>Boosting Conversions: A Shopping Cart Designed to Sell</h2>
        <TwoColumn>
          <motion.div
              ref={refCart}
              initial={{ x: '-100%', opacity: 0 }}
              animate={CartisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className='center'
          >
            <img src="./img/casestudies/lids/shoppingCart.png" alt="Shopping Cart Redesign" />
          </motion.div>
          <div>
          <p>We turned Lids' shopping cart into a conversion champion!  Dual columns streamline the experience while subtly nudging purchases. Clear product details and easy edits are on the right, with timely nudges to reach free shipping. Convenient buttons for "Continue Shopping" and "Checkout" are always at hand. Transparency reigns with detailed breakdowns of each charge.  Plus, a peek at hot picks tempts them to add more! Trustworthy checkout icons round out the experience. This cart empowers decisions and drives those sweet conversions!</p>
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>Building Blocks: A Flexible System for Team Fan Shops</h2>
        <TwoColumn>
          <motion.div
              ref={refBuilding}
              initial={{ x: '-100%', opacity: 0 }}
              animate={BuildingisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className='center'
          >
            <img src="./img/casestudies/lids/buildingBlocks.png" alt="Building Blocks" />
          </motion.div>
          <div>
          <p>To streamline development and maintain brand consistency across all Lids team fan shops, we established a modular design system. This system utilizes a core set of reusable components that can be customized to reflect the unique visual identity of each team. Each component offers two width options, allowing for strategic use of "pop-out" elements to create visual hierarchy and draw user attention. </p>

          <p>The system follows a clear structure,  consisting of:</p>

          <ul>
            <li><strong>Page Header:</strong> Houses essential elements like logos and search functionality.</li>
            <li><strong>Navigation:</strong> Provides intuitive access to key team and product categories.</li>
            <li><strong>Shipping Promotion (Optional):</strong> Highlights current shipping offers.</li>
            <li><strong>Hero Banner:</strong> A prominent visual showcase for featured products or promotions.</li>
            <li><strong>SEO Text:</strong> Search engine optimized content to improve discoverability.</li>
            <li><strong>Optional Search Tools:</strong> Advanced filtering options for a refined browsing experience.</li>
            <li><strong>Email Lead Generation:</strong> Encourages signups for promotions and exclusive offers.</li>
            <li><strong>Secondary Banners:</strong> Additional promotional space for targeted campaigns.</li>
            <li><strong>Footer:</strong> Provides essential information and links.</li>
          </ul>

          <p>While all team fan shops adhere to this core structure, each section can be adjusted in height as needed to accommodate specific content requirements. This flexibility empowers individual teams to tailor their online presence while maintaining a consistent user experience across the Lids brand. </p>
          </div>
        </TwoColumn>
      </section>
      <section>
        <div className='center'>
              <img src="./img/casestudies/lids/fanShops.png" alt="Lids Fan Shops" />
        </div>
      </section>
      <section>
        <h2>Key Takeaways</h2>
        <ThreeColumnBlocks>
          <div className='block'>
            <div className='title'>
              <h4>User-Centered Optimization</h4>
            </div>
            <p>By prioritizing user research and understanding customer pain points, we redesigned the checkout process and shopping cart for a smoother and more efficient shopping experience.  This led to features that minimized steps, provided clear information, and nudged users towards completing their purchases.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <h4>Building Blocks for Efficiency</h4>
            </div>
            <p>Building homepages for all of Lids' teams was a challenge. Enter the design system!  This shared codebase lets us develop pages quickly, but with a twist: pre-built components and two width options allow for customization.  Consistent user experience across the board, but each team gets to shine with their own unique look and feel.</p>
          </div>
          <div className='block'>
            <div className='title'>
              <h4>Data-Driven Decisions</h4>
            </div>
            <p>While not explicitly mentioned in the case study examples, it's important to highlight the value of data-driven decision making.  By tracking key metrics (e.g., checkout abandonment rate, shopping cart conversion rate), we could measure the success of the redesign efforts. This data provided valuable insights for further optimization and ensured our design solutions were aligned with business goals.</p>
          </div>
        </ThreeColumnBlocks>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>This Lids case study demonstrates the power of user-centered design, efficient design systems, and data-driven decision making. Through these strategies, we were able to significantly enhance the online shopping experience for Lids customers, streamlining the checkout process, creating engaging homepages, and ultimately contributing to a more successful online business presence for the Lids brand and its various teams.</p>
      </section>
    </CaseStudyStyle.CaseStudyContainer>
  </div>
};

export default CaseStudyLids;