import Specialist from './Specialist/Specialist';
import './Specialists.css';
import { specialistsData } from '../../data/specialistsData';
import { useRef } from 'react';
import React from 'react';

const Specialists: React.FunctionComponent = React.forwardRef((ref) => {
  const mappedSpecialists = specialistsData.map((specialist) => {
    return (
      <Specialist
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
});

export default Specialists;
