import React, { Component } from 'react';

import './details.css';


class Header extends Component {




  render() {
    return (
<section >
  <header className="header">
    <nav>
    <a href="">
    <img src={"./view/img/arrow_pointer.png"} alt="arrow"/>
      <hr className="line_arrow" /><span className="go_back"> GO BACK</span></a>
      </nav>
      <figure className="logo">
      <img src="../view/img/space_x_logo_bw_centered.png" alt="logo"/>
      </figure>
    </header>
</section>
    )
  }
}

    export default Header