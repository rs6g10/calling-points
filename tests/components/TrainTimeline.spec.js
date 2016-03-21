import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import TrainTimeline from 'components/TrainTimeline'
import {shallow} from 'enzyme';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<TrainTimeline {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<TrainTimeline {...props} />)
}

describe('(Component) TrainTimeline', function () {
  let _component, _rendered, _props
  beforeEach(function () {
    _props = {
      'origin': 'London',
      'destination': 'Southampton',
      'scheduled': '15:00',
      'currentCallingPoint' : true
    };
    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include an <img> as train image', function () {
    const img = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'img')
    expect(img).to.exist
  })
})
