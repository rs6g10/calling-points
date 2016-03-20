import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import TrainTimes from 'components/TrainTimes'
import {shallow} from 'enzyme';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<TrainTimes {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<TrainTimes {...props} />)
}

describe('(Component) TrainTimes', function () {
  let _component, _rendered, _props
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
