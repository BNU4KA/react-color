import React from 'react';
import reactCSS from 'reactcss';
import map from 'lodash-es/map';

import { Swatch } from '../common';

export var BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      onResetBtnClick = _ref.onResetBtnClick;

  var styles = reactCSS({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return React.createElement(
    'div',
    { style: styles.swatches },
    map(colors, function (c) {
      return React.createElement(Swatch, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick: onClick,
        onHover: onSwatchHover,
        focusStyle: {
          boxShadow: '0 0 4px ' + c
        }
      });
    }),
    React.createElement(
      'div',
      { onClick: function onClick() {
          return onResetBtnClick();
        }, style: styles.swatches },
      React.createElement(
        'svg',
        { width: '22', height: '22', viewBox: '0 0 22 22', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement('path', { d: 'M31.9826 0C35.1679 0 37.75 2.58214 37.75 5.76736V31.9826C37.75 35.1679 35.1679 37.75 31.9826 37.75H5.76736C2.58214 37.75 0 35.1679 0 31.9826V5.76736C0 2.58214 2.58214 0 5.76736 0H31.9826ZM31.9826 3.14583H5.76736C4.31953 3.14583 3.14583 4.31953 3.14583 5.76736V31.9826C3.14583 33.4305 4.31953 34.6042 5.76736 34.6042H31.9826C33.4305 34.6042 34.6042 33.4305 34.6042 31.9826V5.76736C34.6042 4.31953 33.4305 3.14583 31.9826 3.14583Z', fill: '#212121' })
      )
    ),
    React.createElement('div', { style: styles.clear })
  );
};

export default BlockSwatches;