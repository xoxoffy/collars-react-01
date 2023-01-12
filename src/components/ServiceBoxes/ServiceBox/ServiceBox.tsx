import React from 'react';
import './ServiceBox.css';

interface Props {
  serviceName: string;
  isNew: boolean;
}

const ServiceBox: React.FunctionComponent<Props> = ({
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
