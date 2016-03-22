import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import TrainView from 'views/Trains/TrainView'
import {shallow} from 'enzyme';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<TrainView {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<TrainView {...props} />)
}

describe('(View) Train', function () {
  let _component, _rendered, _props
  beforeEach(function () {
    _props = {'hello': 'world'};
    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include an <ul> as it renders a list.', function () {
    const ul = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'ul')
    expect(ul).to.exist
    expect(ul.textContent).to.exist
  })

  it('Should include an <ul> with 5 children.', function () {
    const ul = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'ul')
    expect(ul).to.exist
    let children = ul.children
    expect(children.length).to.equal(5)
  })
})
