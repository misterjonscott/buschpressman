'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
};

const CaseStudySkillable: React.FC = () => {
  const [refCompetitive, CompetitiveIsInView] = useInViewAnimation();
  const [refDraft, DraftisInView] = useInViewAnimation();
  const [refAdvancedFiltering, AdvancedFilteringIsInView] = useInViewAnimation();
  const [refAdvancedFiltering2, AdvancedFiltering2IsInView] = useInViewAnimation();
  const [refAdvancedFiltering3, AdvancedFiltering3IsInView] = useInViewAnimation();
  const [refAdvancedFiltering4, AdvancedFiltering4IsInView] = useInViewAnimation();
  const [refAdvancedFiltering5, AdvancedFiltering5IsInView] = useInViewAnimation();
  const [refCardDesign, CardDesignisInView] = useInViewAnimation();
  const [refCardVariations, CardVariationsIsInView] = useInViewAnimation();
  const [refGridAndList, GridAndListisInView] = useInViewAnimation();
  const [refConclusion, ConclusionIsInView] = useInViewAnimation();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-1 px-6 rounded-lg">
        <div className="mx-auto flex items-center justify-between">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-title">
              Course Library
            </h1>
          </div>
          <div className="relative w-[200px] aspect-square">
            <Image
              src="/images/casestudies/CaseStudySkillableActive.webp"
              alt="Skillable Case Study Active"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Skillable TMS needed a UX refresh to compete. As a UX engineer, I championed user feedback and online learning trends. We revamped browsing with grid/list views for choice, and empowered learners with new filters: Favorites, Review Ratings & Current Status. These let users personalize their journey, make informed decisions, and track progress seamlessly. Boom! Happy learners, happy Skillable.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Competitive Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Because there are many existing TMS platforms, that people are already using and familiar with, we should reference what&apos;s already working in the market. We&apos;ll take note of what features and controls each competitor has before deciding if it suits our needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In this case, I discovered that most TMS platforms included filtering options, but the options are overwhelming and occupy too much space. Furthermore, each TMS displayed a matrix of courses, but few offered control over their display or pagination.
              </p>
            </div>
            <motion.div
              ref={refCompetitive}
              initial={{ opacity: 0 }}
              animate={CompetitiveIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/casestudies/skillable/competitiveanalysis.webp"
                alt="Competetive Analysis"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Initial Draft</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                We knew we wanted to support a grid and list layout, as well as pagination, and view controls. In this step, we rough out what the grid page looks like, and find the best placement for the pagination and display controls.
              </p>
              <motion.div
                ref={refDraft}
                initial={{ opacity: 0 }}
                animate={DraftisInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Image
                  src="/images/casestudies/skillable/initialdraft.webp"
                  alt="Initial Draft"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={DraftisInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Image
                src="/images/casestudies/skillable/initialdraftcontrols.webp"
                alt="Initial Draft Controls"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Advanced Filtering (with layers)</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our competitive analysis demonstrated that effective filtering occupies a large amount of screen space. This advanced filtering concept was my solution to conserve space, while making the process easy to use and understand.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center">
                <div className="w-12 h-12 border-2 border-purple-600 rounded-full flex justify-center items-center text-3xl font-semibold">1</div>
                <h4 className="ml-4 text-xl font-semibold">Activate Filter Options</h4>
              </div>
              <motion.div
                ref={refAdvancedFiltering}
                initial={{ opacity: 0 }}
                animate={AdvancedFilteringIsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center my-4"
              >
                <Image
                  src="/images/casestudies/skillable/activatefilteroptions.webp"
                  alt="Activate Filter Options"
                  width={500}
                  height={500}
                />
              </motion.div>
              <div className="p-4 border-2 border-purple-600 rounded-lg">
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>When Filter Options is clicked, the Filter Options button gets a bottom arrow to show it&apos;s expanded, and the Add New button appears, already active and ready.</li>
                  <li>Total count of favorites is displayed. If there are not favorites, don&apos;t display.</li>
                  <li>Favorites and Review Rating are standard, other filter categories are dynamic, based on available results.</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-12 h-12 border-2 border-purple-600 rounded-full flex justify-center items-center text-3xl font-semibold">2</div>
                <h4 className="ml-4 text-xl font-semibold">Choose a Category</h4>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={AdvancedFilteringIsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center my-4"
              >
                <Image
                  src="/images/casestudies/skillable/chooseacategory.webp"
                  alt="Choose a filter category"
                  width={500}
                  height={500}
                />
              </motion.div>
              <div className="p-4 border-2 border-purple-600 rounded-lg">
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>When a filter category is chosen, the submenu appears.</li>
                  <li>The user may make more than one selection, and can then click Apply, or click outside of the filtering element.</li>
                  <li>If the user clicks outside of this menu without a selection, the display will revert to the Add New button without automatically popping the submenu.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 border-2 border-purple-600 rounded-full flex justify-center items-center text-3xl font-semibold">3</div>
            <h4 className="ml-4 text-xl font-semibold">Editing Selected Filters</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                ref={refAdvancedFiltering2}
                initial={{ opacity: 0 }}
                animate={AdvancedFiltering2IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center my-4"
              >
                <Image
                  src="/images/casestudies/skillable/exportselectedfilters.webp"
                  alt="Export selected filters"
                  width={500}
                  height={500}
                />
              </motion.div>
              <div className="p-4 border-2 border-purple-600 rounded-lg">
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>When Filter is chosen, the filter&apos;s controller appears, populated with the choice or choices (if allowed).</li>
                  <li>the user can click to edit their choices (using the same menu as they chose to select them, or remove that filter using the X button. They can also add another filter at this stage.</li>
                  <li>When editing a filter, the currently selected choices should be anchored to the top of the list.</li>
                  <li>Filter selections can be applied by clicking the checkmark on the filter controller, or by clicking the Apply button.</li>
                </ul>
              </div>
            </div>
            <div>
              <motion.div
                ref={refAdvancedFiltering3}
                initial={{ opacity: 0 }}
                animate={AdvancedFiltering3IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center my-4"
              >
                <Image
                  src="/images/casestudies/skillable/editmode.webp"
                  alt="Edit mode"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 border-2 border-purple-600 rounded-full flex justify-center items-center text-3xl font-semibold">4</div>
            <h4 className="ml-4 text-xl font-semibold">Final Details</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                ref={refAdvancedFiltering4}
                initial={{ opacity: 0 }}
                animate={AdvancedFiltering4IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center my-4"
              >
                <Image
                  src="/images/casestudies/skillable/finaldetails.webp"
                  alt="Final details for filtering"
                  width={500}
                  height={500}
                />
              </motion.div>
              <div className="p-4 border-2 border-purple-600 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  If many filters are chosen, and we run out of screen width, the filter controls and Add New button should wrap to the next line.
                </p>
              </div>
            </div>
            <div>
              <motion.div
                ref={refAdvancedFiltering5}
                initial={{ opacity: 0 }}
                animate={AdvancedFiltering5IsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center my-4"
              >
                <Image
                  src="/images/casestudies/skillable/finaldetails2.webp"
                  alt="Final Details for filtering pt2"
                  width={500}
                  height={500}
                />
              </motion.div>
              <div className="p-4 border-2 border-purple-600 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Clicking Filter Options when the filters are populated will hide the filter controls, and remove the downward arrow from the Filter Options button, while retaining the overall count of selected filter categories. Clicking this button again will show the filters as before.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Card Design</h2>
          <motion.div
            ref={refCardDesign}
            initial={{ opacity: 0 }}
            animate={CardDesignisInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Image
              src="/images/casestudies/skillable/carddesign.webp"
              alt="Card Design"
              width={1000}
              height={500}
            />
          </motion.div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Card Variations</h2>
          <div className="text-center">
            <motion.div
              ref={refCardVariations}
              initial={{ opacity: 0 }}
              animate={CardVariationsIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <Image
                src="/images/casestudies/skillable/cardvariations.webp"
                alt="Card Variations"
                width={1000}
                height={500}
              />
              <Image
                src="/images/casestudies/skillable/cardvariationslist.webp"
                alt="Card Variations (list view)"
                width={1000}
                height={500}
              />
            </motion.div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Grid & List Views</h2>
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <motion.div
              ref={refGridAndList}
              initial={{ opacity: 0 }}
              animate={GridAndListisInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/casestudies/skillable/coursecataloggrid.webp"
                alt="Course Catalog Grid"
                width={500}
                height={500}
              />
            </motion.div>
            <div>
              <p className="text-muted-foreground leading-relaxed">With the card design complete, we can update the layout with the new cards.</p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={GridAndListisInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Image
                src="/images/casestudies/skillable/coursecataloglist.webp"
                alt="Course Catalog List View"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Conclusion</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Skillable&apos;s users are now able to browse, filter and sort available courses to find their own interest or study. We&apos;ve added more features than competing TMS platforms currently offer, and we&apos;ve done it in such a way that we can reuse the design for other listing pages, as well as intermingle cards for Learning Paths and Courses together which solves another need.
              </p>
            </div>
            <motion.div
              ref={refConclusion}
              initial={{ opacity: 0 }}
              animate={ConclusionIsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/casestudies/skillable/conclusion.webp"
                alt="Conclusion. Jon is good at UX Design."
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseStudySkillable;