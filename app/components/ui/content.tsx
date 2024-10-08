import React from "react";
import { Home01Icon, CheckmarkCircle01Icon } from "hugeicons-react";

const Content: React.FC = () => {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <Home01Icon size={32} />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                High experience
              </h4>
              <p className="font-normal text-gray-500 text-md">
                With extensive experience in software development, I have a deep
                understanding of designing, building, and maintaining complex
                applications across various platforms. Proficient in multiple
                programming languages, development frameworks, and modern
                software architecture, I am skilled at delivering high-quality,
                scalable solutions that meet client needs. My expertise extends
                to debugging, performance optimization, and agile methodologies,
                ensuring efficient and effective development processes.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <CheckmarkCircle01Icon size={32} />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Success side projects
              </h4>
              <p className="font-normal text-gray-500 text-md">
                Successfully developed and delivered side projects in software
                development, showcasing creativity, technical expertise, and
                problem-solving skills. These projects range from web
                applications, mobile apps to AI solutions, demonstrating a
                strong ability to turn ideas into functional, well-optimized
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Portfolio
              </h1>
              <p className="font-normal text-gray-500 text-xs md:text-base">
                I have brought here my biggest and favorite works <br /> as a
                professional.
              </p>
            </div>
            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  01
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    AI Chatbot
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    An AI chatbot designed to engage in intelligent <br />
                    real-time conversations offering personalized assistance
                    <br /> information, and solutions. <br /> It adapts to user
                    input, providing responses <br />
                    that are relevant and context-aware enhancing <br />
                    productivity and user experience.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  02
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Solar panel installation web app
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A user-friendly web app for solar panel installation
                    <br /> that streamlines the entire process from initial
                    assessment to final installation. <br /> Features include
                    customizable quotes, project management tools <br /> and
                    integration with local regulations. <br /> Helping users
                    make informed decisions and optimize their solar energy
                    solutions.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  03
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Dental clinic management system
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A robust dental clinic management system that simplifies
                    clinic operations <br />
                    and enhances patient experience. This system offers features
                    like <br />
                    digital patient records, appointment scheduling, treatment
                    history tracking, and
                    <br />
                    billing management, enabling clinics to operate efficiently
                    while ensuring <br /> high-quality care for patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Below is a summary of the places I studied
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2013 – 2018
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Computer Science
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  UNAH
                </h6>
                <span className="w-14 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2023 – 2024
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Mathematics for machine Learning
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  London College
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <p className="font-medium text-gray-700 text-xs md:text-base">
              In my many years of experience, I use Node.js and Python for
              backend projects and React and Next.js for <br /> front-end
              projects. I create designs based on Figma and use AWS for cloud
              services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
