import React, { Component, PropTypes } from 'react'
import moment from 'moment'

let localStyles = {
  wrap: {
    margin: '0px 0px 8px 0',
    padding: '8px 0',
    borderBottom: '1px solid rgba(155,155,155,0.3)'
  },
  topSection: {
  },
  timeSection: {
    fontSize: '0.8em',
    color: '#333',
    padding: '3px 8px',
    margin: 'auto 0px'
  },
  position: {
    fontWeight: 'bold'
  },
  org: {
    display: 'inline'
  }
}
export default class WorkItem extends Component {
  static propTypes = {
    style: PropTypes.object,
    topStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    org: PropTypes.string,
    // icon: PropTypes.any,
    last: PropTypes.bool,
    startDate: PropTypes.any,
    endDate: PropTypes.any,
    position: PropTypes.any,
    highlights: PropTypes.arrayOf(PropTypes.string)
    // title: PropTypes.string
  };
  static defaultProps = {
    highlights: []
  };
  buildJobDurationString (duration) {
    let timeString = ''
    if (duration.get('years') > 0) {
      let years = duration.get('years')
      timeString += years + (years === 1 ? ' year' : ' years')
    }
    if (duration.get('months') > 0) {
      let months = duration.get('months')
      timeString += ' ' + months + (months === 1 ? ' month' : ' months')
    }
    return timeString
  }
  render () {
    let { last,
          org,
          highlights,
          startDate,
          endDate,
          position,
          topStyle,
          contentStyle,
          titleStyle,
          style } = this.props
    let startMoment = moment(startDate)
    let endMoment = endDate ? moment(endDate) : false
    let jobDurationTime = endMoment ? endMoment.diff(startMoment) : moment().diff(startMoment)
    let jobDuration = moment.duration(jobDurationTime)
    let durationString = this.buildJobDurationString(jobDuration)
    if (last) {
      localStyles.wrap.borderBottom = null
    }
    return <div style={{ ...localStyles.wrap, ...style }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '100%', ...localStyles.topSection, ...topStyle }}>
          <div style={{ ...localStyles.position, ...topStyle }}>
            {position}
          </div>
          {
            org
            ? <div style={localStyles.org}>{org}</div>
            : null
          }
        </div>
        <div style={{ flexShrink: 0, ...localStyles.timeSection, ...titleStyle }}>
          <div style={{ margin: '0 4px' }} className='glyphicon glyphicon-time' />
          {durationString}
          <span style={{ paddingLeft: 8 }}>
            {startMoment.format('MMM, YYYY')} - {endMoment ? endMoment.format('MMM, YYYY') : 'Present'}
          </span>
        </div>
      </div>
      <div style={{ ...localStyles.description, ...contentStyle }}>
        <ul>
          { highlights.map((p, i) => <li key={i}>{p}</li>) }
        </ul>
      </div>
    </div>
  }
}
