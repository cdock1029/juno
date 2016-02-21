'use strict';

import React from 'react'
import { Link } from 'react-router'
import cx from 'classnames'

export default ({onClick, buildings}) => (
  <div className='ui relaxed divided link list'>
    {buildings.map((building, i) => {
      return (
        <Link className={cx({item: true, active: false})} key={building.id} to={`/${building.id}/units`}>{building.get('address')}</Link>
      )
    })}
  </div>
)
