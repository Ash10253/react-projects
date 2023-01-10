import React from 'react';
import Banner from '../Component/Banner';

class BannerSlider extends React.Component {
  state = {
    currentIndex: 0,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentIndex: (this.state.currentIndex + 1) % this.props.banners.length,
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { banners } = this.props;
    const { currentIndex } = this.state;
    return (
      <Banner image={banners[currentIndex]} />
    );
  }
}

export default BannerSlider;