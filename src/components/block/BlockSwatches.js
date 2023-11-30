import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import { Swatch } from '../common'

export const BlockSwatches = ({ colors, onClick, onSwatchHover, onResetBtnClick, isBackgroundColorPicker }) => {
  const styles = reactCSS({
    'default': {
      swatches: {
        marginRight: '-10px',
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
      },
      clear: {
        clear: 'both',
      },
    },
  })

  return (
    <div style={ styles.swatches }>
      { map(colors, (c) => (
        <Swatch
          key={ c }
          color={ c }
          style={ styles.swatch }
          onClick={ onClick }
          onHover={ onSwatchHover }
          focusStyle={{
            boxShadow: `0 0 4px ${ c }`,
          }}
        />
      )) }
      {isBackgroundColorPicker && (
        <div onClick={ () => onResetBtnClick() } style={{ ...styles.swatches, cursor: 'pointer', marginBottom: '5px', borderRadius: '4px' }}>
          <svg width="15" height="15" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.9826 0C35.1679 0 37.75 2.58214 37.75 5.76736V31.9826C37.75 35.1679 35.1679 37.75 31.9826 37.75H5.76736C2.58214 37.75 0 35.1679 0 31.9826V5.76736C0 2.58214 2.58214 0 5.76736 0H31.9826ZM31.9826 3.14583H5.76736C4.31953 3.14583 3.14583 4.31953 3.14583 5.76736V31.9826C3.14583 33.4305 4.31953 34.6042 5.76736 34.6042H31.9826C33.4305 34.6042 34.6042 33.4305 34.6042 31.9826V5.76736C34.6042 4.31953 33.4305 3.14583 31.9826 3.14583Z" fill="#212121" />
            <line x1="7.72806" y1="8.1934" x2="30.7281" y2="30.1934" stroke="black" strokeWidth="5" />
          </svg>
        </div>
      )}

      <div style={ styles.clear } />
    </div>
  )
}

export default BlockSwatches
