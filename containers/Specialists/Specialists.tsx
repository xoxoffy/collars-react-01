import './Specialists.css';
import { specialistsData } from '../../src/data/specialistsData';
import React from 'react';
import Specialist from './../../src/components/Specialists/Specialist/Specialist';

const Specialists: React.FunctionComponent = () => {
  const mappedSpecialists = specialistsData.map((specialist, key) => {
    return (
      <Specialist
        key={key}
        firstName={specialist.firstName}
        lastName={specialist.lastName}
        position={specialist.position}
        description={specialist.description}
        imgURL={specialist.imgURL}
      />
    );
  });

  return (
    <div className="specialists-container">
      <div className="specialists-header">
        <h1>Nasi specjaliści</h1>
      </div>
      <div className="specialists">{mappedSpecialists}</div>
    </div>
  );
};

export default Specialists;
