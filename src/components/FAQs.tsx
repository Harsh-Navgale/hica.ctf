"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import {motion , AnimatePresence} from 'framer-motion';
const items = [
  {
    question: "What is a CTF (Capture The Flag) competition?",
    answer:
      "A CTF is a cybersecurity challenge where participants solve puzzles or exploit real-world vulnerabilities to find hidden strings called 'flags'. These flags are submitted to earn points, compete on a scoreboard, and showcase hacking skills.",
  },
  {
    question: "What types of challenges do you offer?",
    answer:
      "We offer a wide range of challenges across domains like Web Exploitation, Mobile Hacking, Cryptography, Reverse Engineering, Binary Exploitation, and Cloud Security — all designed to simulate real-world attack surfaces.",
  },
  {
    question: "Is this platform suitable for beginners?",
    answer:
      "Yes! Our platform includes beginner-friendly challenges, guided labs, and detailed explanations to help you learn from scratch. You can gradually progress to advanced challenges as your skills grow.",
  },
  {
    question: "Do you support team-based CTFs or events?",
    answer:
      "Absolutely. Our platform allows users to form teams, collaborate on challenges, and participate in hosted or private CTF events with live scoring and dashboards.",
  },
];

const AccordinationItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> :<PlusIcon />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div id="faqs" className="overflow-x-hidden max-w-screen bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
