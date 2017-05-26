import React, { Component, PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import GlobeIcon from 'material-ui/svg-icons/social/public'
import InfoIcon from 'material-ui/svg-icons/action/info'

export default class PortfolioCard extends Component {
  static propTypes = {
    style: PropTypes.object,
    image: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    openInfo: PropTypes.func,
    focus: PropTypes.number,
    row: PropTypes.number,
    link: PropTypes.string,
    n: PropTypes.number,
    children: PropTypes.any
  };
  constructor (props) {
    super(props)
    this.handleOpen = this.handleOpen.bind(this)
  }
  handleOpen () {
    let { row, n } = this.props
    this.props.openInfo(row, n)
  }
  render () {
    let {
      focus,
      title,
      n,
      subtitle,
      link,
      image,
      style } = this.props

    return <div
      className='relative hvrWrap'
      style={{
        backgroundImage: "url('" + image + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        ...style,
        boxShadow: (focus === n ? '0px 0px 8px 0px #0288d1' : '0px 0px 4px 0px #555')
      }}>
      <div className='hvrLink' />
      <div className='hvrShade' />

      <div className='hvrAppear' style={{ color: 'white' }}>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: 10 }}>
          <div className='h5'>{ subtitle }</div>
          <div className='h4' style={{ margin: 0 }}>{ title }</div>
        </div>
        <div className='hvrAppearDown' style={{ color: 'white' }}>
          <IconButton
            onClick={this.handleOpen}
            color='white'
            tooltip='Info'>
            <InfoIcon color='white' />
          </IconButton>
          <a href={link || '#'} target='_blank'>
            <IconButton
              color='white'
              tooltip='Website'>
              <GlobeIcon color='white' />
            </IconButton>
          </a>
          { this.props.children }
        </div>
      </div>
    </div>
  }
}
