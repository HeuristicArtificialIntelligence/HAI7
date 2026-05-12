"use client";

import { SectionBorder } from "../components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import hagent from "../assets/images/hai7-agent.png";
import hchat from "../assets/images/hai7-chat.png";
import hlms from "../assets/images/hai7-lms.png";

const products = [
  {
    title: "Hai7 Agent",
    description:
      "An internal AI assistant that connects with your data to answer queries, automate workflows, and support teams. Ideal for HR, IT, and internal analytics.",
    imageAlt: "Hai7 Agent Screenshot",
    imageUrl: hagent, // Replace with real screenshot
    link: "https://agent.hai7.ai",
    tag: "Internal AI Assistant",
  },
  {
    title: "Hai7 Chat",
    description:
      "A customer-facing AI chatbot that delivers real-time support, handles inquiries, and enhances user experience across your website or platform.",
    imageAlt: "Hai7 Chat Screenshot",
    imageUrl: hchat, // Replace with real screenshot
    link: "https://chat.hai7.ai",
    tag: "Customer AI Chatbot",
  },
  {
    title: "Hai7 LMS",
    description:
      "An AI-assisted learning management system designed to personalize learning, track progress, and support interactive training across teams and organizations.",
    imageAlt: "Hai7 LMS Screenshot",
    imageUrl: hlms, // Replace with real screenshot
    link: "https://lms.hai7.ai",
    tag: "AI-Powered Learning Platform",
  },
];

export const Products = () => {
  return (
    <section id="products">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center text-gray-200">
              Explore Our AI-Powered Products
            </h2>
            <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
              Built for scale and productivity — Hai7.ai products help teams automate and simplify customer, internal, and training operations through intelligent conversation.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.title}
                  className={twMerge(
                    "border border-[var(--color-border)] rounded-3xl p-6 flex flex-col bg-gray-900 shadow-xl"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img
                    src={typeof product.imageUrl === "string" ? product.imageUrl : product.imageUrl?.src}
                    alt={product.imageAlt}
                    className="w-full h-48 object-cover rounded-xl"
                    />


                  </motion.div>
                  <div className="mt-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-100">{product.title}</h3>
                    <p className="text-sm text-violet-400 mb-2">{product.tag}</p>
                    <p className="text-gray-400 text-base">{product.description}</p>
                  </div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="mt-6"
                    block
                    variant="primary"
                  >
                    Visit {product.title}{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </Button>
                  </a>
                  
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Products;
