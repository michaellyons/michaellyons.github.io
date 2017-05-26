import React from 'react'
import PropTypes from 'prop-types'
import './HomeView.scss'
import { Postcard, PortfolioInfo, PortfolioCard } from 'components/Display'
import IconButton from 'material-ui/IconButton'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import Header from 'components/Header'
import { TransitionMotion, spring } from 'react-motion'
import { WorkItem } from 'components/Resume'
import Youtube from 'react-youtube'
import PORT_ITEMS from '../assets/portfolioItems'
import skillTree from '../assets/skills'
import workExperience from '../assets/experience'

const intro = `I am a Full Stack NodeJS Developer with 5 years of \
professional experience working on modern (SPA) projects. I currently use the MERN stack to \
build my applications.`

const interests =
`I am interested in applications/robotics for automated \
food production, and concerned about the lack of entertaining, \
educational content for Thorium nuclear energy.`

const currentPlace = `I am the primary Software Engineer building and managing \
a custom application that handles media inventory and resource/logistics management for \
i720.`

let postcardStyle = {
  margin: '8px auto',
  borderRadius: 4,
  paddingTop: '60%',
  boxShadow: '0px 2px 4px 0px #666'
}

export class HomeView extends React.Component {
  static propTypes = {
    home: PropTypes.object,
    focus: PropTypes.object,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    watchVid: PropTypes.func,
    stopVid: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      widthB: 800
    }
    this.receiveData = this.receiveData.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.getWidth = this.getWidth.bind(this)
    this.buildRows = this.buildRows.bind(this)
    this.buildItem = this.buildItem.bind(this)
    this.focusItem = this.focusItem.bind(this)
    this.watchVid = this.watchVid.bind(this)
    this.addRows = this.addRows.bind(this)
    this.reduceRows = this.reduceRows.bind(this)
  }
  componentDidMount () {
    this.handleResize()
    console.log('Home Mounted!')
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount () {
    console.log('Home Unmounted!')
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize () {
    let sizes = this.getWidth()
    this.setState({ ...sizes })
  }
  getWidth () {
    let width = window.outerWidth
    let widthB = document.getElementById('container').offsetWidth
    console.log(widthB)
    return { width, widthB }
  }
  addRows () {
    this.props.increment()
  }
  reduceRows () {
    this.props.decrement()
  }
  receiveData (data) {
    this.setState({ data })
  }
  focusItem (row, item) {
    console.log('Focus: ', row, item)
    this.props.focus(row, item)
  }
  buildRow (items, i) {
    let { focus, focusRow } = this.props.home
    let isFocus = focusRow === i
    let array = isFocus ? [focus] : []
    return <div className='col-xs-12 flex flexW pad0' key={i}>
      {items}
      <TransitionMotion
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        styles={array.map(item => ({
          key: item + '',
          style: { height: spring(140) }
        }))}>
        {interpolatedStyles =>
                // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
          <div className='col-xs-12 cPad'>
            {interpolatedStyles.map(config => {
              let item = PORT_ITEMS[config.key]
              return <PortfolioInfo
                key={config.key}
                config={config}
                technology={item.technology.map(k => skillTree[k] ? skillTree[k].image : null)}
                focusRow={this.focusItem}
                item={PORT_ITEMS[config.key]} />
            })}
          </div>
              }
      </TransitionMotion>
    </div>
  }
  watchVid () {
    console.log('Will watch video')
    this.props.watchVid()
  }
  buildItem (itm, i, row) {
    let { home } = this.props
    let { focus } = home
    let isFocus = focus === i
    return <div
      key={i}
      className='col-xs-6 col-md-3 cPad'
      style={{ borderRadius: 6, background: isFocus && 'lightblue' }}>
      {
                itm
                ? <PortfolioCard
                  key={i}
                  n={i}
                  focus={focus}
                  row={row}
                  openInfo={this.focusItem}
                  style={postcardStyle}
                  width='100%'
                  {...itm} />
                : null
              }
    </div>
  }
  buildRows () {
    let { width } = this.state
    let { home } = this.props
    let { show } = home
    let rows = []
    let rowCount = width >= 992 ? 4 : 2
    for (let i = 0; i < show; i++) {
      let row = []
      for (let u = 0; u < rowCount; u++) {
        let n = i * rowCount + u
        row[u] = this.buildItem(PORT_ITEMS[n], n, i)
      }
      let rowArray = this.buildRow(row, i)
      rows[i] = rowArray
    }
    return rows
  }
  willEnter () {
    return { height: 0 }
  }
  willLeave () {
    // triggered when c's gone. Keeping c until its width/height reach 0.
    return { height: spring(0), opacity: 0 }
  }
  render () {
    let { home } = this.props
    let { widthB } = this.state
    let { show, showVideo } = home
    let portfolioRows = this.buildRows()

    let maxRows = portfolioRows.length >= (parseInt(PORT_ITEMS.length / 4) + (PORT_ITEMS.length % 4 > 0 ? 1 : 0))
    let summaryTextStyle = {
      maxWidth: 800
    }
    let playerOpts = {
      width: widthB - 40 || '100%',
      height: 560 + '',
      playerVars: {
        autoplay: 1
      }
    }
    return (
      <div>
        <div id='container' className='container marg3A'>
          <div className='cPad'>
            <Postcard
              style={{ boxShadow: '0px 0px 4px 0px grey', padding: 10 }}
              size={100}
              depth={2}
              round
              image='./dist/face.jpg' />
            <div id='main-title' className='h2'>
              Michael J. Lyons
            </div>
            <div className='h4'>
              mlyons000@gmail.com
            </div>
            <div style={summaryTextStyle} className='marg0A largefont'>
              {intro}
            </div>
          </div>

        </div>
        <div className='container marg3A'>
          <div className='h2 cPad'>
            Currently
          </div>
          <div style={summaryTextStyle} className='cPad marg0A largefont'>
            {currentPlace}
          </div>
        </div>

        <div className='container marg3A'>
          <div className='h2 cPad'>
            Projects of Olde
          </div>
          <div className='flex flexW' style={{ justifyContent: 'center' }}>
            {
							portfolioRows
						}
          </div>
          <div className='cPad' style={{ margin: '10px 0px' }}>
            <span className={'h2 center ' + ((maxRows) ? ' disabled' : '')} onClick={this.addRows}>
              <a>{'MORE'}</a>
            </span>
            <span className={'h2 center ' + ((show === 1) ? ' disabled' : '')} onClick={this.reduceRows}>
              <a>{'LESS'}</a>
            </span>
          </div>
        </div>
        <div className='container marg3A'>
          <div className='h2 cPad'>
            Interests
						{
							showVideo &&
							<IconButton>
  <ClearIcon
    onClick={this.props.stopVid} />
							</IconButton>
						}
          </div>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                ...summaryTextStyle,
                zIndex: 2,
                height: showVideo ? 0 : undefined,
                opacity: showVideo ? 0 : 1 }}
              className='cPad marg0A largefont'>
              {interests}
              <div>
							Have ~10 minutes to spare? <span className='clickSpan' onClick={this.watchVid}>
							Click here</span> to watch a video and
							learn how we will power the future.
						</div>
            </div>
            <div
              style={{
                display: showVideo ? 'flex' : 'none',
                padding: 5,
                opacity: showVideo ? 1 : 0,
                position: showVideo ? 'relative' : 'absolute' }}
              className={'vidContainer'}>
              <Youtube
                style={{ margin: 'auto' }}
                videoId={showVideo ? 'N2vzotsvvkw' : ''}
                opts={playerOpts} />
            </div>
          </div>
        </div>
        <div className='container marg3A'>
          <div className='h2 cPad'>
            Work Experience
          </div>
          <div style={summaryTextStyle} className='cPad marg0A'>
            {workExperience.map((workItem, i) => {
              return <WorkItem
                key={i}
                last={i === (workExperience.length - 1)}
                {...workItem} />
            })}
          </div>
        </div>
        <div className='flex sectionContainer' style={{ justifyContent: 'center' }}>
          <div style={{ margin: 'auto', width: '100%', textAlign: 'center' }}>
            <Header />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeView
