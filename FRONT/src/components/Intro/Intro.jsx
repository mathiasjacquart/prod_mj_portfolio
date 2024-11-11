import React, { useState, useEffect } from 'react'

import Typewriter from 'typewriter-effect';
import styles from "./Intro.module.scss"

export default function Intro() {
  
   const [endType, setEndType] = useState(false);
   const [endLanguage, setEndLanguage] = useState(false);
   const quantity = 15;
   const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

   const languages = ['JavaScript', 'ReactJS', "NextJS", 'Node.js', 'NoSQL', 'SCSS'];
   const colors = ['#74c69d', '#70a9a1', '#9ec1a3', '#cfe0c3', '#9fbda9',"#95d5b2"]; 

   // INTERVALLE COULEUR DES LANGAGES
   useEffect(() => {
    if (endType) {
      const interval = setInterval(() => {
        setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [endType]);

  // TIMER Typewritter
   useEffect(() => {
    const timer = setTimeout(() => {
      setEndType(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);
  // TIMER Language
   useEffect(() => {
    const timer = setTimeout(() => {
      setEndLanguage(true);
    }, 11000);

    return () => clearTimeout(timer); 
  }, []);


  return (
    <div className={styles.bgOverlay}>
    <div className={styles.fireflies}>
    {[...Array(quantity)].map((_, i) => (
        <div key={i} className={styles.firefly}></div>
      ))}
          <section className='introduction flex-col '>
        <div>
            <p className="text-xl lg:text-3xl">
            <Typewriter className=""
            options={{
                delay: 200,
                autoStart: true,
                loop: false,
                // cursor: endType ? '|' : '',
            }}
            onInit={(typewriter) => {
                typewriter
                .typeString(`Hello WORLD !`)
                .pauseFor(4000)
                .deleteChars(7) 
                .typeString('VISITEUR !')
                .pauseFor(4000)
                .deleteChars(10) 
                .typeString('RECRUTEUR ?!')
                .pauseFor(4000)
                .start();
                
            }}
            />
            </p>

        </div>
        <div>
          <h1 className ="text-3xl lg:text-6xl text-white">
          {
                endType &&
                <Typewriter className="typewriter2 "
                options={{
                    delay: 200,
                    autoStart: true,
                    cursor: ""
                }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString(`Mathias JACQUART`)
                    .pauseFor(1000)
                    .start();
                    
                }}
                />
            }
          </h1>

            </div>
            <div>
            <h2 className="text-xl lg:text-4xl text-white">
            <Typewriter className=""
            options={{
                delay: 200,
                autoStart: true,
                loop: false,
                cursor: "",
            }}
            onInit={(typewriter) => {
                typewriter
                .pauseFor(6000)
                .typeString('Développeur Web Junior')
                .start();
                
            }}
            />
            </h2>

        </div>
            {endLanguage && (
                    <p
                    className="language-loop text-xl lg:text-2xl"
                    style={{ color: colors[currentLanguageIndex], transition: 'color 0.5s' }}
                    >
                    {languages[currentLanguageIndex]}
                    </p>
                )}

        <a id="scroll-up" className="scroll-bottom" href="#portrait">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path fill="rgba(255,255,255,1)" d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z">
            </path>
          </svg>
        </a>



    </section>
    </div>

    </div>
  )
}
