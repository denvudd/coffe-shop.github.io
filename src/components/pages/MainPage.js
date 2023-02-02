import { Helmet } from 'react-helmet';
import Bests from '../bests/Bests';
import BeansHr from '../beansHr/BeansHr';

function MainPage() {
  return (
    <>
      <Helmet>
        <meta name="description"
              content={'Coffe good information'}
        />
        <title>Coffee house</title>
      </Helmet>
      <main className="intro main-intro">
        <div className="container">
          <div className="intro-inner">
            <div className="intro-title">
              <h1>Everything You Love About Coffee</h1>
            </div>
            <BeansHr/>
            <div className="intro-text">
              <p>We makes every day full of energy and taste</p>
              <p>Want to try our beans?</p>
            </div>
            <div className="intro-button">
              <button className="btnMore">More</button>
            </div>
          </div>
        </div>
      </main>
        <section className="about">
          <div className="container">
            <div className="section-header">
              <div className="section-title">
                <h2>About Us</h2>
              </div>
              <div className="section-logo">
                <BeansHr isBlack={true}/>
              </div>
            </div>
            <div className="about-inner__text">
              <div className="about-text big-text">
                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.</p>
                <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.</p>
              </div>
            </div>
          </div>
        </section>
      <Bests/>
    </>
  )
}

export default MainPage;