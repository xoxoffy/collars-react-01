import Specialist from './Specialist/Specialist';
import './Specialists.css';

const Specialists: React.FunctionComponent = () => {
  return (
    <div className="specialists-container">
      <div className="specialists-header">
        <h1>Nasi specjaliści</h1>
      </div>
      <div className="specialists">
        <Specialist />
        <Specialist />
      </div>
    </div>
  );
};

export default Specialists;
