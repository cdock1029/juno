import React from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'

const Root = React.createClass({

  render() {
    const {children, location, user} = this.props
    //console.log('Root props:', this.props)
    //console.log('Root rendered - USER: ', this.props.user);
    let header = null
    if (user && location.pathname !== '/login') {
      header = <Header />
    }
    return (
      <div className='ui container' style={{marginTop: '6em'}}>
        {header}
        <div>
          {children}
        </div>
      </div>
    )
  }
})

export default connect(({juno: {user}}) => {
  return {user}
})(Root)
