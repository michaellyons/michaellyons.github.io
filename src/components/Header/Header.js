import React from 'react'
import PropTypes from 'prop-types'
// import { IndexLink, Link } from 'react-router'
import './Header.scss'
// import FloatingActionButton from 'material-ui/FloatingActionButton';
import PhoneIcon from 'material-ui/svg-icons/communication/call'
import MailIcon from 'material-ui/svg-icons/communication/mail-outline'
// import GlobeIcon from 'material-ui/svg-icons/social/public';
// import DescriptionIcon from 'material-ui/svg-icons/action/description';
// import BuildIcon from 'material-ui/svg-icons/action/build';
// import HomeIcon from 'material-ui/svg-icons/action/home';
// import IconButton from 'material-ui/IconButton';

export const Header = ({ location }) => (
  <div
    className=''
    style={{
      margin: 'auto',
      background: 'rgba(0,0,0,0.5)',
      borderRadius: 4,
      maxWidth: '600px',
      padding: 20,
      transition: 'all 0.22s ease-out' }}>
    <div style={{ color: 'white', textAlign: 'center' }}>
      <div id='site_title'>
        <h2>Contact Me</h2>
        <MailIcon style={{ height: 60, width: 60 }} color='white' />
        <div className='largefont' id='my_email'>
        mlyons000@gmail.com
        </div>
        <PhoneIcon style={{ height: 60, width: 60 }} color='white' />
        <div className='largefont' id='my_phone'>
          {'302.401.1383'}
        </div>
      </div>
    </div>

  </div>
)
Header.propTypes = {
  location: PropTypes.any
}
export default Header
