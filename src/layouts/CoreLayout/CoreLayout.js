import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ location, children }) => (
  <div className='' style={{}}>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  location : React.PropTypes.object.isRequired
}

export default CoreLayout
