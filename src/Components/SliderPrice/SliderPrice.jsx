import React from 'react';
import css from './SliderPrice.module.css';
import { Slider } from 'antd';

const SliderPrice = ({ sliderValues, onSliderChange }) => {
  return (
    <div className={css.slider}>
       <p> <hr className={css.lineVeritcal}/>Interval de pret </p>
      <Slider
        range
        min={0}
        max={2000}
        value={sliderValues}
        onChange={onSliderChange}
        tooltip={{
          open: true,
        }}
      />
    </div>
  );
};

export default SliderPrice;
