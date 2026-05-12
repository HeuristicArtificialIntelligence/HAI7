"use client";

import { SectionBorder } from "../components/SectionBorder";
import { SectionContent } from "./SectionContent";
import riandp from "../assets/images/rian-dp.png";

export const About = () => {
return (
<section id="about">
<div className="container">
<SectionBorder borderTop>
<SectionContent>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-200">
About Hai7.ai
</h2>
<p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto text-lg">
Hai7.ai is a digital-native startup focused on building intelligent, scalable AI solutions to redefine how businesses interact, learn, and operate.
</p>
        <div className="mt-12 space-y-12 text-gray-300 text-base leading-relaxed max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-violet-400 mb-2 text-center sm:text-left">
              🚀 Our Mission
            </h3>
            <p>
              We aim to empower teams with cutting-edge AI tools that enhance productivity, automate communication, and personalize digital experiences across industries.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-violet-400 mb-2 text-center sm:text-left">
              💡 What We Do
            </h3>
            <p>Our current product suite includes:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Hai7 Agent</strong> – Internal AI assistant for data-driven support and automation.</li>
              <li><strong>Hai7 Chat</strong> – Customer-facing chatbot for instant AI-powered support.</li>
              <li><strong>Hai7 LMS</strong> – AI-enhanced learning platform for personalized training.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-violet-400 mb-4 text-center sm:text-left">
              👥 The Team
            </h3>
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
              <img
                src={typeof riandp === "string" ? riandp : riandp?.src}
                alt="Rian Hussain"
                className="w-24 h-24 rounded-full object-cover border-2 border-violet-400 shadow-md"
              />
              <div className="text-center sm:text-left">
                <p>
                  Hai7.ai was founded by a lean, agile team of AI engineers, product designers, and cloud specialists passionate about building intelligent systems that scale. The founding team brings experience across AI/ML, full-stack engineering, and enterprise consulting.
                </p>
                <p className="mt-4">
                  <strong>Founder:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/rian-hussain-576a62287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-300 underline hover:text-violet-200"
                  >
                    Rian Hussain
                  </a>{" "}
                  – A technology entrepreneur focused on ethical and scalable AI development, with experience in building secure infrastructure, intelligent platforms, and consulting across early-stage tech.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-violet-400 mb-2 text-center sm:text-left">
              🌐 Where We Are Now
            </h3>
            <p>
                <a 
                    href="https://www.linkedin.com/company/hai7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-300 underline hover:text-violet-200"
                >
                Hai7.ai
                </a>{" "}
               is currently in stealth mode, but all our products are fully functional and accessible via private URLs. We're focused on onboarding early partners and refining user experience before public launch.
            </p>
          </div>
        </div>
      </SectionContent>
    </SectionBorder>
  </div>
</section>
);
};

export default About;