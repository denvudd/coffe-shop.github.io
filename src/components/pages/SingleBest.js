import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';

import Spinner from '../spinner/Spinner';
import BeansHr from '../beansHr/BeansHr';

function SingleBest() {
  const [good, setGood] = useState([]);
  const [loading, setLoading] = useState('loading');
  const { userid } = useParams();

  const {request} = useHttp();

  useEffect(() => {
    request("http://localhost:3001/bests")
          .then(data => setGood(data))
          .then(() => setLoading('loaded'))
          // .then(() => console.log('loaded'))
          .catch(err => {console.log(err); setLoading('error')});

  }, []);

  const renderGood = (arr) => {
    if (loading === 'loaded') {
      return arr.filter(({id}) => {
        if (id === +userid) {
          return id;
        } 
      }).map(({title, price, biggerImg, country, description}, index) => {
        console.log('2')
        return (
          <div className="about-inner" key={index}>
            <div className="about-photo">
              <img src={biggerImg} alt="About" />
            </div>
            <div className="about-text__inner">
              <div className="section-header">
                <div className="section-title">
                  <h2>{title}</h2>
                </div>
                <div className="section-logo">
                  <BeansHr isBlack={true}/>
                </div>
              </div>
                <div className="about-text left-text">
                  <p><strong>Country: </strong>{country}</p>
                  <p><strong>Description: </strong>{description}</p>
                  <p><strong>Price: </strong><span className="about-price">{price}$</span></p>
                </div>
            </div>
          </div>
        )
      });
    } else {
      console.log('error');
      setLoading('error');
    }
  }

  const spinner = loading === 'loading' ? <Spinner/> : null;
  const error = loading === 'error' ? (
    <div className="notExist">
      <div className="container">
        <div className="notExist-inner">
          <div className="section-header">
            <div className="section-title">
              <h2>This product does not exist</h2>
            </div>
          </div>
          <div className="notExist-text">
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
  const goodElem = loading === 'loaded' ? renderGood(good) : null;

  return (
    <>
      <Helmet>
        <meta name="description"
              content={'Coffe good information'}
        />
        <title>Best good coffee</title>
      </Helmet>
      <main className="intro default-intro">
        <div className="container">
          <div className="intro-inner">
            <div className="intro-title">
              <h1>Our Coffee</h1>
            </div>
          </div>
        </div>
      </main>
      <section className="about">
            <div className="container">
              {spinner}
              {error}
              {goodElem}
            </div>
          </section>
    </>
  )
}

export default SingleBest;