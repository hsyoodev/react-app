import React from 'react';

import Badge from 'react-bootstrap/Badge';
import styles from '../styles/Threats.module.css';

function Threats(props) {
  return (
    <div
      className={`${styles.border} ${styles.bggray} ${styles.center} ${styles.margin}`}
    >
      <h1>{props.data.locationName}</h1>
      <h1>{props.data.description}</h1>
      <Badge bg="primary">Primary</Badge>
    </div>
  );
}

export default Threats;
