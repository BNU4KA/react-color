var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import reactCSS from 'reactcss';
import map from 'lodash-es/map';

import { Swatch } from '../common';

export var BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      onResetBtnClick = _ref.onResetBtnClick,
      isBackgroundColorPicker = _ref.isBackgroundColorPicker;

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
    isBackgroundColorPicker && React.createElement(
      'button',
      { onClick: function onClick() {
          return onResetBtnClick();
        }, style: _extends({}, styles.swatches, { cursor: 'pointer', marginBottom: '5px', borderRadius: '4px', borderWidth: '3px', padding: '3px', width: '100%' }) },
      'Remove Background'
    ),
    React.createElement('div', { style: styles.clear })
  );
};

export default BlockSwatches;