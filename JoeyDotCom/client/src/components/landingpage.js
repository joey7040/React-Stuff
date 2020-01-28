import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Video from "react-video-cover";
import ForestVideo from "../assets/forest.mp4";

class Landing extends Component {
  render() {
    return(
      // <div style={{width: '100%', margin: 'auto'}}>
      //   <Grid className="landing-grid">./
      //     <Cell col={12}>
      //       <img
      //         src="https://media.licdn.com/dms/image/C4E03AQHmcJbWwYboqg/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=Zo6OBLvJFErABETrAXEErIC_aA9mHt-ZZXeT5tScBhQ"
      //         alt="avatar"
      //         className="avatar-img"
      //         />

      //       <div className="banner-text">
      //         <h1>Full Stack Web Developer</h1>

      //       <hr/>

      //     <p> HTML/CSS | Bootstrap | JavaScript | React | Vue | Angular | NodeJS | Express  MongoDB | Python | Sql | Java | AWS | Linux  </p>

      //   <div className="social-links">

      //     {/* LinkedIn */}
      //     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      //       <i className="fa fa-linkedin-square" aria-hidden="true" />
      //     </a>

      //     {/* Github */}
      //     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      //       <i className="fa fa-github-square" aria-hidden="true" />
      //     </a>

      //       </div>
      //     </Cell>
      //   </Grid>
      // </div>
        <div style={{
          width: '300px',
          height: '300px',
          overflow: 'hidden',
        }}>
          <Video
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            src={ForestVideo}
          />
        </div>

    )
  }
}

export default Landing;
