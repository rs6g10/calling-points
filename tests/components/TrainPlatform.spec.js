import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import TrainPlatform from 'components/TrainPlatform'
import {shallow} from 'enzyme';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<TrainPlatform {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<TrainPlatform {...props} />)
}

describe('(Component) TrainPlatform', function () {
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

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include an <h1> with passed station name.', function (){
    const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1')
    expect(h1).to.exist
    expect(h1.textContent).to.equal(_props.callingPoint.station)
  })

  it('Should include an <span> as platform number', function () {
    const span = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'span')
    expect(span).to.exist
    expect(span.className).to.equal('thick')
    expect(span.textContent).to.equal(_props.callingPoint.platform)
  })
})
