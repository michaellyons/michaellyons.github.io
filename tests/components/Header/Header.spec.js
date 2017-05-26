import React from 'react'
import { Header } from 'components/Header/Header'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('Renders Face Image', () => {
    const myFace = _wrapper.find('#my_face')
    expect(myFace).to.exist
  })
  it('Renders Name', () => {
    const siteTitle = _wrapper.find('#site_title')
    expect(siteTitle).to.exist
    const myName = siteTitle.find('#my_name')
    expect(myName).to.exist

    expect(myName.text()).to.match(/Michael J. Lyons/)
  })
  it('Renders Job Title', () => {
    const siteTitle = _wrapper.find('#site_title')
    expect(siteTitle).to.exist
    const myTitle = siteTitle.find('#my_title')
    expect(myTitle).to.exist

    expect(myTitle.text()).to.match(/Software Engineer/)
  })
})
