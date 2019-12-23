import React, { Component, PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import ClearIcon from 'material-ui/svg-icons/content/clear'

export default class PortfolioInfo extends Component {
  static propTypes = {
    // style: PropTypes.object,
    config: PropTypes.object,
    technology: PropTypes.any,
    item: PropTypes.object,
    focusRow: PropTypes.func
    // image: PropTypes.any,
    // height: PropTypes.any,
    // width: PropTypes.any
  };

  render () {
    let { config, technology, item, focusRow } = this.props
    let { title, subtitle, desc } = item
    let imgStyle = {
      margin: '4px 0px 4px 8px'
    }
    return <div style={{ position: 'relative', ...config.style }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <div className='flex'>
          <span style={{ float: 'left', flexShrink: 0 }}>
            <IconButton style={{ width: 24, height: 24, padding: '12px 0px' }}>
              <ClearIcon
                onClick={focusRow} />
            </IconButton>
          </span>
          <div style={{ flex: 1, display: 'block', padding: 5 }}>
            <div style={{ flexShrink: 0, marginBottom: 5 }}>
              <div style={{ fontSize: '2em', whiteSpace: 'nowrap' }}>
                {title}
              </div>
              <div>For: {subtitle}</div>
            </div>
            <div>
              <div>{desc}</div>
            </div>
          </div>
          <div style={{ textAlign: 'right', padding: '5px 0px' }}>
            <div><b>Tech Used:</b></div>
            {
technology
? technology.map(t => <img style={imgStyle} src={t} key={t} height={32} />)
: null
}
          </div>
        </div>
      </div>
    </div>
  }
}
