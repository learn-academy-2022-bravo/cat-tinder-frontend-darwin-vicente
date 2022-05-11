import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter()})

describe("When CatShow renders", () => {
  let cat = {
    id: 3,
    name: "Pelon",
    age: 2,
    enjoys: "cuddling and good vibes",
    image: "https://images.unsplash.com/photo-1607623488994-9f31dbccd667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  }
  
    it("displays a header", () => {
    const catShow = shallow(<CatShow cat={cat} />)
    const showHeading = catShow.find("h2").text()
    expect(showHeading).toEqual("Cat Show")
  })
}) 
