import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AvatarCircles from "@/components/avatarcircles";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useScrollContext } from '@/contexts/ScrollContext';

const Recommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { registerSection, unregisterSection, getSectionProgress } = useScrollContext();
  const scrollYProgress = getSectionProgress('recommendations');

  useEffect(() => {
    registerSection('recommendations', sectionRef);
    return () => unregisterSection('recommendations');
  }, [registerSection, unregisterSection]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    
    window.addEventListener("resize", checkIfMobile);
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  
  const recommendations = [
    {
      name: "Wayne Klapwyk",
      position: "Technical Product Manager at Skillable",
      text: "Jon is a thorough professional. He can take a project on spec and build out exactly what you are looking for or, if you prefer, can go totally creative and produce designs that are modern, innovative, and exactly what you need. His ability to work with you is something you just don't see every day. Give Jon a ring and ask him about what makes him tick. You won't be disappointed.",
      imageUrl: "/images/recommendations/wayne.jpg",
    },
    {
      name: "Heidi Gonzales",
      position: "Senior Experience Specialist at Center for Internet Security",
      text: "I have had the pleasure of working with Jon for two years. He's creative, dedicated and conscientious. When we collaborate on projects, he listens intently to determine project needs and delivers exceptional work efficiently and effectively. He grasps the big picture while capturing the details. That keen understanding sets Jon’s work apart and makes him a joy to partner on projects with. I feel fortunate to have had the opportunity to work with Jon. He is exceptionally talented.",
      imageUrl: "/images/recommendations/heidi.jpg",
    },
    {
      name: "David Johnson",
      position: "Growth Product Manager",
      text: "Jonathon is one of the most dynamic software engineers I've had the privilege of working alongside. Intelligent, thoughtful, and thorough: Jon seeks to understand and solve problems efficiently and effectively. Always willing to fight for what's right and always willing to go the extra mile. Combining cutting-edge frontend practices with a strong design background, I'd recommend Jon for any software development problem or project!",
      imageUrl: "/images/recommendations/David.jpg",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recommendations.length) % recommendations.length);
  };

  return (
    <div
      ref={sectionRef}
      className="section-container relative bg-blue min-h-screen p-5 flex flex-col justify-between"
    >
      <div 
        className={`
          ${isMobile ? 'flex-col pt-[40%]' : 'flex-row h-full'} 
          flex justify-center items-center mx-5 gap-5
        `}
      >
        {isMobile ? (
          <Card className="w-full relative mt-16 border-3 border-white">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div className="relative w-32 h-32 rounded-full border-3 border-white overflow-hidden">
                <Image
                  src={recommendations[currentIndex].imageUrl}
                  alt={recommendations[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <CardContent className="pt-20 pb-4">
              <div className="text-center">
                <h3 className="font-bold">{recommendations[currentIndex].name}</h3>
                <p className="text-sm text-gray-500">{recommendations[currentIndex].position}</p>
              </div>
              <div className="flex justify-center mt-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-left">{recommendations[currentIndex].text}</p>
            </CardContent>
          </Card>
        ) : (
          recommendations.map((rec, index) => (
            <Card key={index} className="flex-1 relative border-3 border-white">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <AvatarCircles 
                  imageUrl={rec.imageUrl}
                  alt={rec.name}
                  scrollYProgress={scrollYProgress}
                />
              </div>
              <CardContent className="pt-20 pb-4">
                <div className="text-center">
                  <h3 className="text-xl">{rec.name}</h3>
                  <p className="text-sm text-gray-500">{rec.position}</p>
                </div>
                <div className="flex justify-center mt-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-left">{rec.text}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
      {isMobile && (
        <div className="flex justify-between w-full mb-5">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handlePrev}
            className="hover:bg-blue-600"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous Recommendation</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNext}
            className="hover:bg-blue-600"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next Recommendation</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Recommendations;