import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeaderPage extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentWillMount() {
    this.props.getSeasons();
  }

  render () {
    return (
      <section>
        {
          this.props.seasons.map((season) => {
            <div key= {season.id}>
              {season.name}
            </div>
          })
        }
      </section>
    )
  }
}

HeaderPage.propTypes = {
  getSeasons: PropTypes.func.isRequired,
  seasons: PropTypes.array.isRequired
};

export default HeaderPage