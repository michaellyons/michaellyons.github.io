import React from 'react'
import PropTypes from 'prop-types'
// import { IndexLink, Link } from 'react-router'
import './Header.scss'
import { Postcard } from 'components/Display'
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import GlobeIcon from 'material-ui/svg-icons/social/public';
// import DescriptionIcon from 'material-ui/svg-icons/action/description';
// import BuildIcon from 'material-ui/svg-icons/action/build';
// import HomeIcon from 'material-ui/svg-icons/action/home';
// import IconButton from 'material-ui/IconButton';

export const Header = ({ location }) => (
  <div className='' style={{ padding: 20, transition: 'all 0.22s ease-out' }}>
    <div style={{}}>
      <Postcard
        style={{ boxShadow: '0px 0px 4px 0px grey', padding: 10, margin: 'auto' }}
        size={120}
        depth={2}
        round
        id={'my_face'}
        image='dist/face.jpg' />
      <div id='site_title'>
        <div id='my_name' style={{ fontSize: 20, fontWeight: 'bold' }}>
      Michael J. Lyons
      </div>
        <div id='my_title'>
      Software Engineer
      </div>
        <div id='my_email'>
      mlyons000@gmail.com
      </div>
      </div>
    </div>

  </div>
)
Header.propTypes = {
  location: PropTypes.any
}
export default Header
