import React from 'react';
import BannerSlider from '../Component/BannerSlider';

const banners = [
  'Landscape.jpg',
  
  
];

class Welcome extends React.Component {
  render() {
    return (
      <BannerSlider banners={banners} interval={5000} />
    );
  }
}

export default Welcome;