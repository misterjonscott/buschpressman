"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom hook for intersection observer
const useInViewAnimation = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
};

const CaseStudyLids: React.FC = () => {
  const [refDataManager, dataManagerIsInView] = useInViewAnimation();
  const [refAccountManager, accountManagerIsInView] = useInViewAnimation();
  const [refAccountImpersonation, accountImpersonationIsInView] =
    useInViewAnimation();
  const [refUsersAndRoles, usersAndRolesIsInView] = useInViewAnimation();
  const [refSharing, sharingIsInView] = useInViewAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-1 px-6 rounded-lg">
        <div className="mx-auto flex items-center justify-between">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 pacifico-font">
              Smart Shopping
            </h1>
          </div>
          <div className="relative w-[200px] aspect-square">
            <Image
              src="/images/casestudies/CaseStudyLidsActive.png"
              alt="Lids Case Study"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Introduction Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Introduction</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Lids, a leading retailer for hats and headwear, caters to a diverse audience passionate about expressing themselves through style.  In 2009, we embarked on a project to enhance the online shopping experience for Lids customers.  This case study dives into the design process and solutions implemented to streamline the checkout process, improve the shopping cart functionality, and create engaging homepages across various teams and organizations within Lids.</p>
        </section>

        {/* Project Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Project Overview</h2>
          <p>temp</p>
          <div>
            <h3>The Challenge</h3>
            <p>Lids' online checkout was clunky, confusing users and leading to abandoned carts. The shopping cart didn't incentivize completion, and managing multiple team homepages with a shared codebase proved difficult to balance brand identity and efficiency.</p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>We streamlined checkout, reducing friction and cart abandonment. The shopping cart now incentivizes completion with features like progress indicators and product recommendations. We tackled the homepage challenge with a shared codebase design system, ensuring brand consistency while allowing for unique team identities.</p>
          </div>
        </section>

        {/* Faster to Finish: Optimizing the Checkout Process Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Faster to Finish: Optimizing the Checkout Process</h2>
          <p className="text-muted-foreground leading-relaxed">Who needs checkout marathons? I revamped Lids' checkout into a single, smooth journey. Users see a sneak peek of the next step, keeping them moving forward. Real-time validation catches errors on the fly, and completion cards on the side let users easily review and edit any section. Boom! Less frustration, clear sailing, and happy Lids customers!</p>
          <div className="grid grid-cols-3 gap-4">
              <div>
                <motion.div
                  ref={refDataManager}
                  initial={{ opacity: 0 }}
                  animate={dataManagerIsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-video"
                >
                  <Image
                    src="/images/casestudies/lids/checkoutProcess01.png"
                    alt="Component notation"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
                <p className="text-muted-foreground leading-relaxed">While the user completes Billing Information, the tab for Shipping Information is revealed.  This shows the user what to expect, and the accordion styling makes the whole checkout process appear on one page.</p>
              </div>
              <div>
                <motion.div
                  ref={refDataManager}
                  initial={{ opacity: 0 }}
                  animate={dataManagerIsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-video"
                >
                  <Image
                    src="/images/casestudies/lids/checkoutProcess02.png"
                    alt="Component notation"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
                <p className="text-muted-foreground leading-relaxed">As this system handled form validation through PHP, we&apos;d check each form when the user selected the first element of the next section.</p>
              </div>
              <div>
                <motion.div
                  ref={refDataManager}
                  initial={{ opacity: 0 }}
                  animate={dataManagerIsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-video"
                >
                  <Image
                    src="/images/casestudies/lids/checkoutProcess03.png"
                    alt="Component notation"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
                <p className="text-muted-foreground leading-relaxed">Upon correcting errors, users can simply click the first field in the next section to seamlessly progress.</p>
              </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <motion.div
                    ref={refDataManager}
                    initial={{ opacity: 0 }}
                    animate={dataManagerIsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-video"
                  >
                    <Image
                      src="/images/casestudies/lids/checkoutProcess04.png"
                      alt="Component notation"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </motion.div>
                  <p className="text-muted-foreground leading-relaxed">After the user has completed all fields required for the checkout process, we show a final review before allowing submission.</p>
                </div>
                <div>
                  <motion.div
                    ref={refDataManager}
                    initial={{ opacity: 0 }}
                    animate={dataManagerIsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-video"
                  >
                    <Image
                      src="/images/casestudies/lids/checkoutProcess05.png"
                      alt="Component notation"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </motion.div>
                  <p className="text-muted-foreground leading-relaxed">If the user needs to go back and edit a filled section, they may select the “edit” control on any section to open it and make changes.</p>
                </div>
              </div>
        </section>

        {/* Boosting Conversions: A Shopping Cart Designed to Sell Section */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              ref={refDataManager}
              initial={{ opacity: 0 }}
              animate={dataManagerIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-video"
            >
              <Image
                src="/images/casestudies/lids/shoppingCart.png"
                alt="Shopping Cart Redesign"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Boosting Conversions: A Shopping Cart Designed to Sell</h2>
              <p className="text-muted-foreground leading-relaxed">We turned Lids' shopping cart into a conversion champion!  Dual columns streamline the experience while subtly nudging purchases. Clear product details and easy edits are on the right, with timely nudges to reach free shipping. Convenient buttons for "Continue Shopping" and "Checkout" are always at hand. Transparency reigns with detailed breakdowns of each charge.  Plus, a peek at hot picks tempts them to add more! Trustworthy checkout icons round out the experience. This cart empowers decisions and drives those sweet conversions!</p>
            </div>
          </div>
        </section>

        {/* Building Blocks: A Flexible System for Team Fan Shops */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              ref={refDataManager}
              initial={{ opacity: 0 }}
              animate={dataManagerIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-video"
            >
              <Image
                src="/images/casestudies/lids/buildingBlocks.png"
                alt="Building Blocks"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Building Blocks: A Flexible System for Team Fan Shops</h2>
              <p className="text-muted-foreground leading-relaxed">To streamline development and maintain brand consistency across all Lids team fan shops, we established a modular design system. This system utilizes a core set of reusable components that can be customized to reflect the unique visual identity of each team. Each component offers two width options, allowing for strategic use of "pop-out" elements to create visual hierarchy and draw user attention. </p>

          <p className="text-muted-foreground leading-relaxed">The system follows a clear structure,  consisting of:</p>

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

          <p className="text-muted-foreground leading-relaxed">While all team fan shops adhere to this core structure, each section can be adjusted in height as needed to accommodate specific content requirements. This flexibility empowers individual teams to tailor their online presence while maintaining a consistent user experience across the Lids brand. </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-video">
              <Image
                src="/images/casestudies/lids/fanShops.png"
                alt="Lids Fan Shops"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Conclusion</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This Lids case study demonstrates the power of user-centered design, efficient design systems, and data-driven decision making. Through these strategies, we were able to significantly enhance the online shopping experience for Lids customers, streamlining the checkout process, creating engaging homepages, and ultimately contributing to a more successful online business presence for the Lids brand and its various teams.</p>
        </section>
      </main>
    </div>
  );
};

export default CaseStudyLids;
