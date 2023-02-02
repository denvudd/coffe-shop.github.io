import { Helmet } from 'react-helmet';
import Goods from '../goods/Goods';
import BeansHr from '../beansHr/BeansHr';

import aboutPhoto from '../../resources/img/about-photo2.jpg';

function Pleasure() {
  return (
    <>
      <Helmet>
        <meta name="description"
              content={'Coffe good information'}
        />
        <title>Pleasure</title>
      </Helmet>
      <main className="intro pleasure-intro">
        <div className="container">
          <div className="intro-inner">
            <div className="intro-title">
              <h1>For your pleasure</h1>
            </div>
          </div>
        </div>
      </main>
      <section className="about">
        <div className="container">
          <div className="about-inner">
            <div className="about-photo">
              <img src={aboutPhoto} alt="About" />
            </div>
            <div className="about-text__inner">
              <div className="section-header">
                <div className="section-title">
                  <h2>About our beans</h2>
                </div>
                <div className="section-logo">
                  <BeansHr isBlack={true}/>
                </div>
              </div>
                <div className="about-text small-text">
                  <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p> 
                  <p>Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions.</p>
                  <p>As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-primary" />
      <section className='goods'>
        <div className="container">
          <Goods/>
        </div>
      </section>
    </>
  )
}

export default Pleasure;