import React, { Component, PropTypes } from 'react'

export default class Postcard extends Component {
  static propTypes = {
    style: PropTypes.object,
    image: PropTypes.any,
    height: PropTypes.any,
    size: PropTypes.any,
    cover: PropTypes.bool,
    round: PropTypes.bool,
    width: PropTypes.any
  };

  render () {
    let { height, cover, width, image, size, round, style } = this.props
    let theStyle = {}
    if (size) {
      theStyle = {
        width: size,
        height: size,
        borderRadius: round ? size : 0
      }
    } else {
      theStyle = {
        width,
        height,
        borderRadius: round ? height : 0
      }
    }
    return <div
      style={{
        backgroundImage: "url('" + image + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: cover ? 'cover' : 'contain',
        ...theStyle,
        ...style
      }} />
  }
}
