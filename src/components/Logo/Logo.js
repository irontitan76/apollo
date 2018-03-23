import React, { Component } from 'react';
import './Logo.css'

class Logo extends Component {
  render() {
    const { viewBox, height, width, direction } = this.props;

    let vb = viewBox || '0 0 480 270';
    let h = height || 240;
    let w = width || 450;
    let d = direction || 'vertical';

    let points1, points2, points3, transform;

    if ( d === 'horizontal' ) {
      points1 = '71.4,5.7 81.7,31.5 62.7,61.9 36.9,61.9';
      points2 = '110.1,91.2 88.1,94.3 66.6,61.9 79.8,40.3';
      points3 = '9.2,84.1 20.5,65 65.2,65 77.8,84.1';
      transform = 'matrix(1 0 0 1 118.5051 67.3164)';
    } else {
      points1 = '251.8,67.3 262,93.2 243.1,123.6 217.3,123.6';
      points2 = '290.4,152.8 268.4,156 247,123.6 260.1,102';
      points3 = '189.6,145.8 200.8,126.6 245.6,126.6 258.2,145.8';
      transform = 'matrix(1 0 0 1 5.1445 242.0322)';
    }

    return (
      <svg className='svg'
        version='1.1'
        viewBox={ vb }
        height={ h }
        width={ w }>
        <g>
          <text transform={ transform }>
            <tspan x='0' y='0' className='st0 st1 st2'>APOLLO </tspan>
            <tspan x='210' y='0' className='st0 st3 st2'>INDUSTRIES</tspan>
          </text>
          <g>
            <polygon className='st4' points={ points1 }/>
            <polygon className='st4' points={ points2 }/>
            <polygon className='st4' points={ points3 }/>
          </g>
        </g>
      </svg>
    )
  }
}

export default Logo;
