import React, { Component } from 'react';

import Header from '../components/details/header.js';

import Counter from '../components/details/counter.js';
import Picture from '../components/details/picture.js';
import Footer from '../components/details/footer.js';



class LaunchDetails extends Component {
  render() {
    return (
<main>
  
<Header />
<Counter />
<Picture />
<Footer />
  </main>
    )
  }
}

export default LaunchDetails