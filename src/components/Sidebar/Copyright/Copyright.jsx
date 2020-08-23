import React from 'react';
import PropTypes from 'prop-types';
import styles from './Copyright.module.scss';

const Copyright = ({ copyright }) => (
  <div className={styles.copyright}>{copyright}</div>
);

Copyright.propTypes = {
  copyright: PropTypes.string.isRequired,
};
export default Copyright;
