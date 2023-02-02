import { Link } from 'react-router-dom';
import './productcard.scss';

function ProductCard({title, price, src, country, id, userid}) {
  if (userid < 20) { // if /bests
    return (
      <Link to={`/ourcoffee/${userid}`}>
        <div className="good-card">
          <div className="good-card__img">
            <img src={src} alt="" />
          </div>
          <div className="good-card__title">
            <span>{title}</span>
          </div>
          <div className="good-card__country">
            <span>{country}</span>
          </div>
          <div className="good-card__price">
            <span>{price}$</span>
          </div>
        </div> 
      </Link>
    )
  }
   else {
    return (
      <Link to={`/${userid}`}>
        <div className="good-card">
          <div className="good-card__img">
            <img src={src} alt="" />
          </div>
          <div className="good-card__title">
            <span>{title}</span>
          </div>
          <div className="good-card__country">
            <span>{country}</span>
          </div>
          <div className="good-card__price">
            <span>{price}$</span>
          </div>
        </div> 
      </Link>
    )
   }
}

export default ProductCard;