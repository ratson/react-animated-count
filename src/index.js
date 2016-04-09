import {Motion, spring, presets} from 'react-motion'
import React, {PropTypes} from 'react'

const AnimatedCount = ({count}) => {
  return (
    <Motion defaultStyle={{x: 0}} style={{x: spring(count, presets.gentle)}}>
      {value => <span>{Math.floor(value.x)}</span>}
    </Motion>
  )
}

AnimatedCount.propTypes = {
  count: PropTypes.number.isRequired,
}

export default AnimatedCount
