import React from 'react'
import photoBio from "../../assets/images/photo-bio.jpg"

export default function Portrait() {
  return (
    <section id="portrait"className='portrait-container'>

      <div className='font-textPrimary container px-10 sm:px-0 py-5 sm:py-0 mx-auto portrait'>
          <div className="flex flex-wrap flex-row justify-between ">
            <div className="w-full   lg:w-3/5 lg:order-1 order-2 ">
            <h3 className='text-primary font-semibold sm:text-left text-center py-6 '>Mon Portrait</h3>
              <p className='py-5 text-lg text-tertiary sm:text-left text-center'>
              Le sourire d'enfer, c'est moi, <strong>Mathias, 25 ans et apprenti développeur !</strong>
              </p>
              <p className='py-5 text-lg text-tertiary sm:text-left text-center'>
              J'aime <strong> apprendre, écouter, partager et CODER.</strong>
              </p>
              <p className='py-5  text-lg text-tertiary sm:text-left text-center'>
              En formation autodidacte depuis un an et fraîchement <strong>diplômé du TP de Développeur Web</strong>, je souhaite poursuivre mon cursus dans la Conception et le Développement d'Applications. 
              </p>

              <p className='py-5 text-lg text-tertiary sm:text-left text-center'>
              D’un naturel curieux, logique et pragmatique, j’aimerais intégrer un poste de <strong>développeur Web en alternance</strong> afin de monter en compétence technique.
              </p>
            </div>
            <div className="w-full photo-portrait  lg:w-1/3">
              <img src={photoBio} className="photo-img" alt="photo portrait mathias" />
            </div>
            
          </div>
          <div id='skills'></div>

      </div>
      {/* <svg className="separator separator--down" width="100%" height="100%" viewBox="0 0 100 10" preserveAspectRatio="none"> 
        <path className="path-anim separator__path" data-path-to="M 0 0 C 29 6 78 17 100 0 L 100 10 H 0 Z" vectorEffect="non-scaling-stroke" d="M 0 0 C 23.7851 3.6296 69.9406 13.2074 100 0 L 100 10 H 0 Z"></path> 
      </svg> */}
     
    </section>
  )
}
