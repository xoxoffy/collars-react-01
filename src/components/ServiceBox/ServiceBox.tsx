import React from 'react';
import './ServiceBox.css';
import IServiceBox from './../../../types/serviceBox.interface';

const ServiceBox: React.FunctionComponent<IServiceBox> = ({
  serviceName = 'Usługa',
  isNew = false,
}) => {
  return (
    <div className="service-box">
      {isNew && <div className="isNewCircle"></div>}
      <h3>{serviceName}</h3>
      {isNew ? <div className="newText">(nowość)</div> : null}
    </div>
  );
};

export default ServiceBox;
