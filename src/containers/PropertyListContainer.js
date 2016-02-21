import React from 'react'
import { connect } from 'react-redux'
import { fetchProperties } from '../actions'

import PropertyList from '../components/PropertyList'

const PropertyListContainer = React.createClass({

  componentWillMount() {
    console.log('PropertyListContainer - componentWillMount')
    const { dispatch, properties } = this.props
    if (!properties.length) {
      dispatch(fetchProperties())
    }
  },

  render() {
    console.log('PropertyListContainer - children:', this.props.children)
    console.log('params: ')
    console.log(this.props.params)
    return (
      <div className='ui four column grid'>
        <div className='row'>
          <div className='column'>
            <button className='ui tiny button' onClick={()=> this.props.dispatch(fetchProperties())}>{'\u21bb' + ' ' + 'Refresh'}</button>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <PropertyList {...this.props} />
          </div>
          <div className='column'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})

export default connect(({ juno: { properties, isFetching } }) => {
  return { properties, isFetching }
})(PropertyListContainer)
