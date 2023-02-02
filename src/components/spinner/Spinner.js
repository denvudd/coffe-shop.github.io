import { SpinnerCircular } from 'spinners-react';
import './spinner.scss';

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <SpinnerCircular size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
    </div>
  )
}

export default Spinner;