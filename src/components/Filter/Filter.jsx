import { Component } from 'react';
import PropTypes from 'prop-types'; 
import css from './Filter.module.css';


export const Filter = ({ value, onChange }) => (
  <label className={css.label}>
    Filter contacts by name:
    <input className={css.text} type="text" value={value} onChange={onChange} />
  </label>
);


