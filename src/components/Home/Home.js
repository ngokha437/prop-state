import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
  render() {
    return (
        <div className="home">
            <div className="home_content">
                <h1>We Change Everything WordPress</h1>
                <p>This is the only WordPress theme you will ever want to use.</p>
                <div className="home_btn">
                    <button>Read More</button>
                    <button>Download Now</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
