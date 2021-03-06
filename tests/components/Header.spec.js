import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import Header from 'components/Header'
import {shallow} from 'enzyme';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<Header {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<Header {...props} />)
}

describe('(Component) Header', function () {
  let _component, _rendered, _props, _wrapper
  beforeEach(function () {
    _props = {'origin': 'London', 'destination': 'Southampton', 'scheduled': '15:00'};
    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include an <span> as scheduledTime', function () {
    const spans = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'span')
    expect(spans).to.exist
  })
})
