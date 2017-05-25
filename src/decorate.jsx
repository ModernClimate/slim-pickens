import React from 'react'
import SlimContainer from './SlimContainer'

export default Component => props => (
  <SlimContainer {...props}>
    <Component {...props} />
  </SlimContainer>
)

