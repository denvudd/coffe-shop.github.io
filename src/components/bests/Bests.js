import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import Spinner from '../spinner/Spinner';
import ProductCard from '../productCard/ProductCard';
import './bests.scss';

function Bests() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState('loading');
  const {request} = useHttp();

  useEffect(() => {
    request("http://localhost:3001/bests")
          .then(data => setGoods(data))
          .then(() => setLoading('loaded'))
          .catch(err => console.log(err))
  }, [])

  const renderGoods = (arr) => {
    if (loading === 'loaded') {
      return arr.map(({title, price, src, country, id}, index) => {
        return (
            <ProductCard 
                        title={title} 
                        price={price} 
                        src={src} 
                        country={country}
                        userid={id}
                        id={id}
                        key={index} />
        )
      }).slice(0, 3);
    } else {
      return;
    }
  }

  const spinner = loading === 'loading' ? <Spinner/> : null;
  const goodsList = loading === 'loaded' ? renderGoods(goods) : null;

  return (
    <section className="bests">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Our best</h2>
          </div>
        </div>
        <div className="bests-inner">
          {spinner}
          {goodsList}
        </div>
      </div>
    </section>
  )
}

export default Bests;