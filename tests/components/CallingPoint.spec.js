import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import CallingPoint from 'components/CallingPoint'
import {shallow} from 'enzyme';

function shallowRender(component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps(props = {}) {
  return TestUtils.renderIntoDocument(<CallingPoint {...props} />)
}

function shallowRenderWithProps(props = {}) {
  return shallowRender(<CallingPoint {...props} />)
}

describe('(Component) CallingPoint', function () {
  let _component, _rendered, _props
  beforeEach(function () {
    _props = {
      'hasActual': true,
      'callingPoint': {
        'station': 'London',
        'platform': '7'
      }
    };
    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <li>.', function () {
    expect(_component.type).to.equal('li')
  })

  it('Should include an <span> as dueTime', function () {
    const spans = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'span')
    expect(spans).to.exist
  })

  it('Should include an <i> as icon', function () {
    const icon = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'i')
    expect(icon).to.exist
  })
})
