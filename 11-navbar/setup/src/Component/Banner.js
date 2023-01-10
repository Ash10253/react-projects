import React from 'react';

class Banner extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="Banner" />
      </div>
    );
  }
}

export default Banner;