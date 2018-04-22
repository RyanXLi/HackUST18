import React from 'react';
import ReactDOM from 'react-dom';
import AV from 'leancloud-storage';
import './MainPage.css'
import img1 from'./tutoring1.jpg';
import img2 from'./tutoring2.jpg';
import img3 from'./tutoring3.jpg';
import {Icon} from 'semantic-ui-react';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  componentDidUpdate() {
    this.setState({show: true});
    console.log("show");
  }

  render() {
    return(
      <div className="main">

        <div className="head-image-contain">
          <img src={img1} className="head-image"/>
        </div>
        <div className="heading">
           <div className="head-first">Having troubles with the projects or exams? </div>
           <span className="head-underline">_</span>
           <div className="head-second">Find seniors students to help you!</div>
        </div>
        <br />
        <div className="intro">
          <div class="intro-component">
            <Icon name="browser" size="huge" color="grey"/>
            <div name="intro-text">
              Checkout Catalog
            </div>
          </div>
          <div class="intro-component">
            <Icon name="hand pointer" size="huge" color="grey"/>
            <div name="intro-text">
              Choose Peer Mentor and Timeslot
            </div>
          </div>
          <div class="intro-component">
            <Icon name="pencil" size="huge" color="grey"/>
            <div name="intro-text">
              Attend The Tutorial
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="head-image-contain">
          <img src={img2} className="head-image"/>
        </div>

        <div className="heading">
           <div className="head-first">High Tutoring Standard</div>
           <span className="head-underline">_</span>
           <div className="head-second">Our tutor must have been high graded student/teaching assistant</div>
        </div>


        <br />
        <div className="head-image-contain">
          <img src={img3} className="head-image"/>
        </div>

        <div className="heading">
           <div className="head-first">Becoming one of our tutor</div>
           <span className="head-underline">_</span>
           <div className="head-second">We are expecting high talented students to register and become our tutor</div>
        </div>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}





const ExampleComponent = ({show}) => {
  const componentClasses = ['example-component'];
  if (show) { componentClasses.push('show'); }

  return (
    <div className={componentClasses.join(' ')}></div>
  );
};
