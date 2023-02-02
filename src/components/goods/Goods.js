import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';

import ProductCard from '../productCard/ProductCard';
import Spinner from '../spinner/Spinner';
import './goods.scss';

function Goods() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState('loading');
  const [category, setCategory] = useState([{id: 'All', name: 'All'}, 
                                            {id: 'Brazil', name: 'Brazil'}, 
                                            {id: 'Kenya', name: 'Kenya'},
                                            {id: 'Columbia', name: 'Columbia'}]);
  const [searchValue, setSearchValue] = useState('');
  const [currentGoods, setCurrentGoods] = useState(goods);
  
  const {request} = useHttp();

  useEffect(() => {
    request("http://localhost:3001/goods")
          .then(data => setGoods(data))
          .then(() => setLoading('loaded'))
          .catch(err => console.log(err));

  }, []);

  useEffect(() => {
    onLoaded();
  }, [goods])

  const onLoaded = () => {
    if (loading === 'loaded') {
      setCurrentGoods(goods);
    }
  }

  const onChangeCategory = (id) => {
    const filteredGoods = goods.filter(item => item.country === id);

    if (loading === 'loaded') {
      setCurrentGoods(goods);

      if (filteredGoods.length !== 0) {
        setCurrentGoods(filteredGoods);
      } else {
        setCurrentGoods(goods);
      }

    }
  }

  const onChangeSearch = (searchValue) => {
    let filteredGoods = [];

    if (loading === 'loaded') {
      if (searchValue === '') {
        console.log('here')
        setCurrentGoods(goods);
      } else {
        console.log(searchValue);
        filteredGoods = goods.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
      }

      if (filteredGoods.length !== 0) {
        console.log(goods)
        setCurrentGoods(filteredGoods);
      } else {
        console.log('empty');
        setCurrentGoods(goods);
      }
    }
  }

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
                        key={index}/>
        )
      }).slice(0, 6);
    } else {
      return;
    }
  }

  const spinner = loading === 'loading' ? <Spinner/> : null;
  const goodsList = loading === 'loaded' ? renderGoods(currentGoods) : null;
  const categories = category.map((item, index) => {
    return (
      <button className={`goods-filter__button`}
              key={item.id}
              onClick={() => { onChangeCategory(item.id); }} >{item.name}</button> 
    )
  })

  return (
    <>
      <div className="goods-panel">
        <div className="goods-search">
          <label className="goods-search__label">Looking for</label>
          <input type="text" 
                 className="goods-search__input" 
                 placeholder='start typing here...'
                 value={searchValue}
                 onChange={e => {onChangeSearch(searchValue); setSearchValue(e.target.value)}} />
        </div>
        <div className="goods-filter">
          <div className="goods-filter__text">
            <span>Or filter</span>
          </div>
          <div className="goods-filter__inner">
            {categories}
          </div>
        </div>
      </div>
      <div className="goods-inner">
        {spinner}
        {goodsList}
      </div>
    </>
  )
}

export default Goods;