'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockSwatches = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockSwatches = exports.BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      onResetBtnClick = _ref.onResetBtnClick;

  var styles = (0, _reactcss2.default)({
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

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_common.Swatch, {
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
    _react2.default.createElement(
      'div',
      { onClick: function onClick() {
          return onResetBtnClick();
        }, style: _extends({}, styles.swatches, { cursor: 'pointer', marginBottom: '5px' }) },
      _react2.default.createElement(
        'svg',
        { width: '15', height: '15', viewBox: '0 0 38 38', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement('path', { d: 'M31.9826 0C35.1679 0 37.75 2.58214 37.75 5.76736V31.9826C37.75 35.1679 35.1679 37.75 31.9826 37.75H5.76736C2.58214 37.75 0 35.1679 0 31.9826V5.76736C0 2.58214 2.58214 0 5.76736 0H31.9826ZM31.9826 3.14583H5.76736C4.31953 3.14583 3.14583 4.31953 3.14583 5.76736V31.9826C3.14583 33.4305 4.31953 34.6042 5.76736 34.6042H31.9826C33.4305 34.6042 34.6042 33.4305 34.6042 31.9826V5.76736C34.6042 4.31953 33.4305 3.14583 31.9826 3.14583Z', fill: '#212121' }),
        _react2.default.createElement('line', { x1: '7.72806', y1: '8.1934', x2: '30.7281', y2: '30.1934', stroke: 'black', strokeWidth: '5' })
      )
    ),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports.default = BlockSwatches;