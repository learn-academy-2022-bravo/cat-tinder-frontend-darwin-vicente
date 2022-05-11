import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'


Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders", () => {
    it("displays a heading", () => {
      const footer = shallow(<Footer />)
      const homeFooter = footer.find("h2").text()
      expect(homeFooter).toEqual("Footer")
    })
  }) 