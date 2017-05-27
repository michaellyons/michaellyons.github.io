import React from 'react'
import { Header } from 'components/Header/Header'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('Renders Email', () => {
    const siteTitle = _wrapper.find('#site_title')
    expect(siteTitle).to.exist
    const myTitle = siteTitle.find('#my_email')
    expect(myTitle).to.exist

    expect(myTitle.text()).to.match(/mlyons000@gmail.com/)
  })
  it('Renders Phone', () => {
    const siteTitle = _wrapper.find('#site_title')
    expect(siteTitle).to.exist
    const myTitle = siteTitle.find('#my_phone')
    expect(myTitle).to.exist

    expect(myTitle.text()).to.match(/714.362.1630/)
  })
})
