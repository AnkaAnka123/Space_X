import React, { Component } from 'react';
import Starter from './starter.js';


import './details.css';



class Counter extends Component {




  render() {
           
    return (
      <section>
<article>
<div className="start-date">
</div>
<div className="rocket-name">
</div>
<div className="counter">
      <Starter />
    </div>
      </article>
        <aside>
<div className="details-info">
</div>
<div className="rocket-info">
</div>
<div className="launch-pad">

</div>

          </aside>
        </section>
    )   
 }
  };

export default Counter