import { useEffect, useRef, useState } from 'react';
import CV from "../../assets/images/MathiasJACQUART_CV.jpg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  console.log(isVisible);
  
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);  // déclenchement de l'animation quand l'élément entre dans la vue
        }
      },
      {

      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Nettoyage de l'observer quand le composant est démonté
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
    <section  className=''>
    <div className='mt-16 font-textPrimary container mx-auto portrait px-10 sm:px-0 py-5 sm:py-0'>

        <div className="flex flex-wrap flex-row items-center justify-between ">
          <div className="w-full  lg:w-2/5  ">
          <h3 className='text-primary font-semibold sm:text-left text-center b-5 text-2xl'>Mes compétences</h3>
          <div className={`flex flex-col `} ref={ref}> 
          <h4 className='font-semibold text-dynamic  font-textSecondary text-xl'>Front-end</h4>          
            <div className="skills-progress">
            <Accordion elevation={0}
                sx={{ boxShadow: 'none', margin:"0px 0px", }} 
                expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">ReactJS</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-70">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel1' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe", padding:"0px" }}>
                    <Typography>
                    <div className='skill-detail'>
                        <p className='m-0'>Création de composants réutilisables basés sur l’UI.</p>
                        <p>Gestion de l’état local et global avec React Hooks.</p>
                        <p>Utilisation de React Router pour le routage dynamique.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel2'} 
                onChange={handleChange('panel2')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary ">Javascript</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-70">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel2' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe" ,padding:"0px"}}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Manipulation DOM pour interactivité des pages.</p>
                        <p>Gestion des événements et appels API asynchrones.</p>
                        <p>Programmation orientée objet et fonctionnelle.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel3'} 
                onChange={handleChange('panel3')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel3-content"
                    id="panel1-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">NextJS</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-50">
                            <span className="tooltip">50%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel3' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe",padding:"0px" }}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Gestion du routage dynamique et des pages statiques.</p>
                        <p>Mise en place d’applications React avec rendu côté serveur (SSR).</p>
                        <p>Utilisation des API routes de Next.js.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel4'} 
                onChange={handleChange('panel4')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">SCSS</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-80">
                            <span className="tooltip">80%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel4' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe", padding:"0px" }}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Utilisation de mixins, variables et fonctions pour une meilleure gestion du CSS.</p>
                        <p>Organisation des fichiers et réutilisabilité des styles avec SCSS.</p>
                        <p>Compilation de SCSS vers CSS pour production.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

    

            </div>
        </div>
          <div className='flex flex-col'>
          <h4 className='font-textSecondary font-semibold text-dynamic text-xl'>Back-end</h4>              
          <div className="skills-progress">
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel5'} 
                onChange={handleChange('panel5')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel5-content"
                    id="panel5-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">NodeJS</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-70">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel5' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe",padding:"0px" }}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Création de serveurs web avec Express.js.</p>
                        <p>Gestion des fichiers et des flux de données côté serveur.</p>
                        <p>Authentification et autorisation (JWT).</p>
                        <p>Gestion de la base de données avec MongoDB ou SQL.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel6'} 
                onChange={handleChange('panel6')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel6-content"
                    id="panel6-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">NoSQL</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-70">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel6' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe" ,padding:"0px"}}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Modélisation de schémas flexibles basés sur des documents.</p>
                        <p>Création et gestion de collections et documents.</p>
                        <p>Gestion de la base de données dans des environnements de production.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel7'} 
                onChange={handleChange('panel7')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel7-content"
                    id="panel7-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">SQL</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-30">
                            <span className="tooltip">30%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel7' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe" ,padding:"0px"}}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Écriture de requêtes SQL pour extraire et manipuler des données.</p>
                        <p>Gestion des bases de données relationnelles (MySQL, PostgreSQL, etc.).</p>
                        <p>Création de tables, relations et contraintes.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel8'} 
                onChange={handleChange('panel8')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel8-content"
                    id="panel8-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">Mongoose</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-70">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel8' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe",padding:"0px" }}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Connexion entre MongoDB et Node.js à l’aide de Mongoose.</p>
                        <p>Définition et gestion des schémas et modèles.</p>
                        <p>CRUD (Create, Read, Update, Delete) avec Mongoose.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

    

            </div>
        </div>
          <div className='flex flex-col'>
          <h4 className='font-textSecondary font-semibold text-dynamic text-xl'>Conception et gestion</h4>           
          <div className="skills-progress">
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel9'} 
                onChange={handleChange('panel9')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel9-content"
                    id="panel9-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">Figma</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-70">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel9' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe",padding:"0px" }}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Conception d’interfaces utilisateur (UI) interactives.</p>
                        <p>Utilisation des composants réutilisables et design systems.</p>
                        <p>Création de prototypes cliquables.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel10'} 
                onChange={handleChange('panel10')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel10-content"
                    id="panel10-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">Photoshop</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-30">
                            <span className="tooltip">30%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel10' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe" ,padding:"0px"}}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Retouche d’images et création graphique.</p>
                        <p>Utilisation avancée des calques et effets.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel11'} 
                onChange={handleChange('panel11')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel11-content"
                    id="panel11-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">Trello</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-50">
                            <span className="tooltip">50%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel11' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe" ,padding:"0px"}}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Création et gestion de tableaux pour l’organisation de projets.</p>
                        <p>Utilisation des cartes pour suivre les tâches et leur progression.</p>
                        <p>Intégration avec d’autres outils (Google Drive, Slack, GitHub) pour optimiser le flux de travail.</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                sx={{ boxShadow: 'none', margin:"0px 0px" }} 
                expanded={expanded === 'panel12'} 
                onChange={handleChange('panel12')}
             >
                <AccordionSummary
                    sx={{ padding: '0px', backgroundColor: "#E3DBDe", borderBottomColor: '#E3DBDe', margin:"0px 0px" }}
                    aria-controls="panel12-content"
                    id="panel12-header"
                >
                    <div className='flex flex-col w-full'>
                    <p className="title text-tertiary">GitHub</p>

                    <div className="skill-box flex flex-row items-center">
                        <div className="skill-bar">
                        <span className="skill-per skill-70">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                        <ArrowDownwardIcon
                        sx={{
                            color: '#E3DBDe',
                            backgroundColor: "#29514e",
                            borderRadius: "100px",
                            transform: expanded === 'panel12' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        />
                    </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ backgroundColor: "#E3DBDe",padding:"0px"}}>
                    <Typography>
                    <div className='skill-detail'>
                        <p>Gestion de dépôts de code source (version control).</p>
                        <p>Utilisation des branches pour développement collaboratif.</p>
                        <p>Résolution des conflits de fusion (merge).</p>
                    </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

    

            </div>
        </div>


          </div>
          <div className="w-full  flex flex-col items-center lg:w-1/2">
            <img className='hidden photo-CV lg:block border' src={CV} alt="CV Mathias Jacquart" />
            <a href="FRONT\src\assets\images\MathiasJACQUART_CV.pdf" download="CV_Mathias_JACQUART.pdf">
            <button className="button mt-14" type="button" >
                <span className="button__text">Télécharger le CV</span>
                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
            </button>
            </a>
          </div>
        </div>


    </div>
  </section>
  )
}
