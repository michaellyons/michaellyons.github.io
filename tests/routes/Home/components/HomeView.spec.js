import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<MuiThemeProvider muiTheme={getMuiTheme()}><HomeView home={{}} /></MuiThemeProvider>)
  })

  it('Renders Main Title', () => {
    const mainTitle = _component.find('#main-title')
    expect(mainTitle).to.exist
    expect(mainTitle.text()).to.match(/Michael J. Lyons/)
  })
})
