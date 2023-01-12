import React from 'react';
import './ServiceBoxes.css';
import { services } from '../../data/serviceBoxData';
import ServiceBox from './ServiceBox/ServiceBox';

const ServiceBoxes: React.FunctionComponent = () => {
  const mappedServiceBoxes = services.map((services, key) => {
    return (
      <ServiceBox
        key={key}
        serviceName={services.serviceName}
        isNew={services.isNew}
      />
    );
  });
  return (
    <div className="service-boxes-container">
      <div className="service-boxes-title">
        <h1>Czym zajmuje sie nasza firma?</h1>
      </div>
      <div className="service-boxes">{mappedServiceBoxes}</div>
    </div>
  );
};

export default ServiceBoxes;
