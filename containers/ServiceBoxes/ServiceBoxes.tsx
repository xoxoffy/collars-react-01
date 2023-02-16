import React from 'react';
import ServiceBox from './../../src/components/ServiceBoxes/ServiceBox/ServiceBox';
import { services } from './../../src/data/serviceBoxData';
import './ServiceBoxes.css';

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
