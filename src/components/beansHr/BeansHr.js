import beansLogo from '../../resources/img/beans-hr-logo.svg';
import beansLogoBlack from '../../resources/img/beans-hr-logo-black.svg';
import './beanshr.scss';

function BeansHr({isBlack}) {
  return (
    <div className="beans-hr">
      <hr className={isBlack ? 'hr-black' : ''}/>
      <div className="beans-logo">
        <img src={isBlack ? beansLogoBlack : beansLogo} alt="Beans Logo" />
      </div>
      <hr className={isBlack ? 'hr-black' : ''}/>
    </div>
  )
}

export default BeansHr;