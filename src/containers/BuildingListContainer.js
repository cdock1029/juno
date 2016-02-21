'use strict';

import React from 'react'
import Parse from 'parse'
import {connect} from 'react-redux'

//TODO
//import { removeUnitFromPropertyAndDelete } from '../actions'

import BuildingList from '../components/BuildingList'

const BuildingListContainer = React.createClass({

  render() {
    console.log('BuildingListContainer - render()')
    const { property, buildings } = this.props
    return buildings ? (
      <div>
        <BuildingList buildings={buildings} />
      </div>
    ) : null
  },

})

export default connect(({juno: { properties }}, ownProps) => {
  const id = ownProps.params.id;
  const property = properties.filter(prop => prop.id === id).shift()
  const buildings = property.get('buildings');
  return { property, buildings};
})(BuildingListContainer)
