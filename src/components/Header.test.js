
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe(" When Header renders ", () => {
  it("Shows 1 nav item", () => {
    
    const renderedHeader = shallow(<Header/>)
    const renderedNavItems = renderedHeader.find("NavItem")
    expect(renderedNavItems.length).toEqual(1)
  })
})