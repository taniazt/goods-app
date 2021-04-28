import React from 'react';
import './GoodsItem.scss';
import PropTypes from 'prop-types';

export const GoodsItem = ({ ...goodsItem }) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">
        {goodsItem.name}
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        {goodsItem.label}
      </div>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item">Price: {goodsItem.price}</div>
      <a href="#" className="card-footer-item">Add to busket</a>
    </footer>
  </div>
);
