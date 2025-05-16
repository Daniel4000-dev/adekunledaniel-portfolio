"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"
import { ResumeSection } from "@/components/molecules/resumeSection"
import { EducationItem } from "@/components/molecules/educationItem"
import { ExperienceItem } from "@/components/molecules/experienceItem"
import { SkillBar } from "@/components/molecules/skillBar"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { AchievementCard } from "@/components/molecules/achievementCard"

export function ResumeTemplate() {
  const professionalSkills = [
    { name: "UI/UX Design", percentage: 95 },
    { name: "Web Design", percentage: 90 },
    { name: "Mobile App Design", percentage: 85 },
    { name: "Wireframing", percentage: 92 },
  ]

  const technicalSkills = [
    { name: "Figma", percentage: 98 },
    { name: "Adobe XD", percentage: 95 },
    { name: "Sketch", percentage: 90 },
    { name: "Adobe Photoshop", percentage: 85 },
  ]

  const achievements = [
    {
      title: "25+ Design Awards",
      description: "Recognized for excellence in UI/UX and product design across multiple platforms and competitions.",
      icon: "🏆",
    },
    {
      title: "450+ Projects Completed",
      description: "Successfully delivered over 450 design projects for clients across various industries.",
      icon: "✅",
    },
    {
      title: "10+ Years Experience",
      description: "A decade of professional experience in product design, UI/UX, and digital experiences.",
      icon: "⏱️",
    },
    {
      title: "100% Client Satisfaction",
      description: "Maintained perfect client satisfaction ratings throughout my professional career.",
      icon: "⭐",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <AnimatedText text="My Resume" className="mb-6 text-5xl font-bold md:text-6xl" />
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              A comprehensive overview of my professional experience, education, and skills in product design.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <Button className="bg-brand-orange hover:bg-brand-orange/90">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ResumeSection title="Work Experience" icon="💼">
            <div className="space-y-16">
              <ExperienceItem
                company="Cinetstox"
                location="Mumbai"
                period="Sep 2023 - Present"
                position="Lead UX Designer"
                description="Leading the UX design team in creating intuitive and engaging user experiences for digital media investment platforms. Responsible for establishing design systems, conducting user research, and overseeing the implementation of design solutions."
                isOrange={true}
                index={0}
              />

              <ExperienceItem
                company="Sugee Pvt limited"
                location="Mumbai"
                period="Sep 2020 - July 2023"
                position="UI/UX Designer"
                description="Designed user interfaces and experiences for financial technology products, focusing on loan management systems for rural sectors. Collaborated with product managers and developers to create intuitive, accessible designs that addressed the unique needs of rural users."
                isOrange={false}
                index={1}
              />

              <ExperienceItem
                company="Cognizant"
                location="Mumbai"
                period="Sep 2016 - July 2020"
                position="Experience Designer"
                description="Created user-centered designs for enterprise clients across healthcare, finance, and retail sectors. Conducted user research, developed wireframes and prototypes, and collaborated with cross-functional teams to implement design solutions that improved user satisfaction and business metrics."
                isOrange={true}
                index={2}
              />
            </div>
          </ResumeSection>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container">
          <ResumeSection title="Education & Certifications" icon="🎓">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <EducationItem
                degree="Master of Design"
                institution="National Institute of Design"
                period="2014 - 2016"
                description="Specialized in User Experience Design with focus on digital interfaces and interactive systems."
                index={0}
              />

              <EducationItem
                degree="Bachelor of Fine Arts"
                institution="Sir J.J. Institute of Applied Art"
                period="2010 - 2014"
                description="Studied visual communication, graphic design, and digital media with honors."
                index={1}
              />

              <EducationItem
                degree="Certified UX Professional"
                institution="Nielsen Norman Group"
                period="2018"
                description="Comprehensive certification in user experience research, design, and evaluation methodologies."
                index={2}
              />

              <EducationItem
                degree="Google UX Design Professional Certificate"
                institution="Google"
                period="2020"
                description="Advanced training in UX design processes, including research, wireframing, prototyping, and testing."
                index={3}
              />
            </div>
          </ResumeSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ResumeSection title="Professional Skills" icon="🛠️">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold">Design Skills</h3>
                <div className="space-y-6">
                  {professionalSkills.map((skill, index) => (
                    <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} index={index} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold">Tools & Software</h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </ResumeSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-black py-16 md:py-24 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <AnimatedText text="Achievements & Milestones" className="mb-6 text-4xl font-bold md:text-5xl" />
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Key accomplishments and milestones from my professional journey in design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.title}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
