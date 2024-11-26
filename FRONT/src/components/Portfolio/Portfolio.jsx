import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import azertype from "../../assets/images/sites/azertype.png"
import chloe from "../../assets/images/sites/chloejacquart.png"
import festconnect from "../../assets/images/sites/festconnect.png"
import nba from "../../assets/images/sites/nba.png"
import videovibe from "../../assets/images/sites/videovibes.png"
import portfoliov1 from "../../assets/images/sites/portfoliov1.png"
import tmdb from "../../assets/images/sites/tmdb.png"
import quizz from "../../assets/images/sites/quizz.png"
import Slider from "react-slick";


export default function Portfolio() {

  const projet = [
    {
      id:"1",
      name:"Fest Connect",
      category:"Projet de formation",
      image:festconnect,
      stackFront:["ReactJS", "JavaScript", "SCSS"],
      stackBack:["NodeJS", "ExpressJS", "Mongoose", "API externes"],
      description:"Single Page Application développée dans le cadre de mon projet de formation, que je continue à développer en autonomie. Données utilisateurs enregistrées et sécurisées en base de données mySQL, Serveur API Express/NodeJS avec architecture REST et gestion du CRUD, avec entre autres un panel Admin.",
      URL:"https://fest-connect.onrender.com"
    },
    {
      id:"2",
      name:"Chloé Jacquart Studio ",
      category:"Stage de fin de formation",
      image:chloe,
      stackFront:["Wordpress", "Elementor", "CSS"],
      stackBack:["PHP", "PHPMyAdmin", "MySQL"],
      description:"Site vitrine dans le cadre de mon stage de fin de formation. Wordpress et Elementor pour m'exercer sur ces CMS et pour que le client puisse modifier son contenu via son panel administrateur.",
      URL:'http://dev.chloejacquart.com'
    },
    {
      id:"3",
      name:"Quizz Musical",
      category:"Application SPA",
      image:quizz,
      stackFront:["ReactJS", "Javascript", "CSS"],
      stackBack:["NodeJS", "ExpressJS", "Mongoose", "API externes", "WebSockets"],
      description:"Application SPA dans le cadre d'un travail pratique. Jeu en ligne avec un mode multijoueur. Utilisation des WebSockets dans le back-end",
      URL:'https://quizz-musical.onrender.com'
    },
    {
      id:"4",
      name:"Site Portfolio V1",
      category:"Site internet personnel",
      image:portfoliov1,
      stackFront:["HTML", "CSS", "Javascript"],
      stackBack:["PHP", "AJAX"],
      description:"Premier site Portfolio pour trouver un stage et m'exercer au HTML, CSS, Javascript dans mes débuts pour trouver une alternance",
      URL:'https://mathiasjacquartv1.netlify.app'
    },
    {
      id:"5",
      category:"SPA | Exercice",
      name:"Video Vibes",
      image:videovibe,
      stackFront:["ReactJS", "JavaScript", "SCSS"],
      stackBack:["NodeJS", "ExpressJS", "Mongoose", "MongoDB", "Firebase"],
      description:"Application dans le cadre d'un exercice de formation. Utilisation du CRUD pour stocker une vidéo dans le cloud Firebase. Affichage dynamique en front-end des vidéos stockés. Gestion SignUp | SignIn"
    },
    {
      id:"6",
      name:"TheMovieDB",
      category:"Exercice",
      image:tmdb,
      stackFront:["HTML", "CSS", "Javascript"],
      stackBack:["API externes"],
      description:"Application dans le cadre d'un exercice de formation. Utilisation et intégration d'une API externe dans le front-end.",
      URL:"https://tmdb-mathias-jacquart.netlify.app"
    },
    {
      id:"7",
      category:"SPA | Exercice",
      name:"NBA Application",
      image:nba,
      stackFront:["ReactJS", "JavaScript", "SCSS"],
      stackBack:["NodeJS", "ExpressJS", "Mongoose", "MongoDB", "API externes"],
      description:"Single Page Application dans le cadre d'un exercice de formation. Apprentissage des composants, props, POO, avec le framework ReactJS",
      URL:"https://exonba.netlify.app/"
    },
    {
      id:"8",
      category:"Exercice",
      name:"Azertype",
      image:azertype,
      stackFront:["HTML", "CSS", "Javacript"],
      stackBack:[],
      description:"Application dans le cadre d'un exercice OpenClassrooms. Apprentissage du Javascript. ",
    },
  ]
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:false,
          dots: true,
        }
      }
    ]
  };
   const [openModal, setOpenModal] = useState(null)
  console.log(openModal);
  
   const handleOpenModal = (id) => { 
    setOpenModal(id);
   }

   const handleCloseModal = () => { 
    setOpenModal(null)
   }

   
  return ( 
    <section id="portfolio"className='portfolio'>
      <div className=' container mx-auto sm:px-0 py-5 sm:py-0'>
      <h3 className='text-primary text-center sm:text-left mb-10 font-semibold text-2xl'>Portfolio</h3>
      <div className='carousel'>

      <Slider {...settings} className='' >
      {
        projet && projet.map((p) => (
          <div key={p.id}className='portfolio-card '>
          <div className='portfolio-overlay' >
          <p className='text-primary text-2xl font-textSecondary mb-2'>{p.name}</p>
          <p className='text-white font-textPrimary text-lg mb-2'>{p.category}</p>
          <button onClick={() => handleOpenModal(p.id)} className='font-textPrimary text-xs sm:text-sm mj-btn-primary'>EN SAVOIR PLUS</button>
          </div>
          <img className='portfolio-img' src={p.image} alt="fest connect preview" />
          {/* <p className='text-primary text-xl font-semibold py-2'>Fest Connect</p> */}
        </div>
        ))
      }

      </Slider>
      {openModal && 
        <div  className="modalbg" onClick={handleCloseModal}>
          {projet.filter(p => p.id === openModal).map ((p) => ( 
        <div key={p.id} className="modal-content flex flex-col" onClick={(e) => e.stopPropagation()}>
          <div className='flex justify-end'>
            <i onClick={handleCloseModal} className="fa-solid fa-xmark"></i>
          </div>
          <div className='text-center text-2xl font-textSecondary text-primary'>

            <p>
              {p.name}
            </p>
          </div>
          <div className='my-4 px-3 font-textPrimary'>
            <p>
              {p.description}
            </p>
          </div>
          <div className='flex flex-row justify-around my-5'>
            <div className='flex flex-col '>
              <p className='mb-2 font-textPrimary text-primary font-bold '>Stack FRONT</p>
              {p.stackFront && p.stackFront.map((sf, index)=> 
              <p className='font-textPrimary' key={index}>{sf}</p>
              )}
            </div>
            <div className='flex flex-col'>
            <p className='mb-2 font-textPrimary text-primary font-bold '>Stack BACK</p>
            {p.stackBack && p.stackBack.map((sb, index)=> 
              <p  className='font-textPrimary' key={index}>{sb}</p>
              )}
            </div>
          </div>
          <div className='flex justify-center mt-2'>
            <a target="_blank" className='mj-btn-primary text-center text-xl' href={p.URL}>Visiter le site</a>
          </div>
        </div>
        ))}
        </div>
      

      }

      </div>
    </div>


    </section>
  )
}
