import React from "react";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <h2>John Dettelback</h2>
    </div>
  );
  // return (
  //   <div className="portfolio">
  //     {projects.map((project) => (
  //       <div className="project" key={project.id}></div>
  //     ))}
  //   </div>
  // );
};

export default Portfolio;

/* <div id="portfolio">
  <a href="https://val-gee.github.io/weekly-task-manager/">
    <img
      src="./Assets/images/weeklytaskscreenshot.png"
      alt="weekly task manager website"
    />
  </a>
  <a href="https://travel-blog-jung.herokuapp.com/">
    <img
      src="./Assets/images/screenshottravelblog1.png"
      alt="travel-blog website"
    />
  </a>
  <a href="https://jdettelback.github.io/weather-outlook/">
    <img src="./Assets/images/weatherscreenshot.png" alt="weather outlook" />
  </a>
  <a href="https://jdettelback.github.io/scheduler/">
    <img src="./Assets/images/schedulerscreenshot.png" alt="scheduler" />
  </a>
  <a href="https://jdettelback.github.io/js-quiz/">
    <img src="./Assets/images/js-quizscreenshot.png" alt="js quiz" />
  </a>
  <a href="https://jdettelback.github.io/passwordgenerator/">
    <img src="./Assets/images/passgenscreenshot.png" alt="password generator" />
  </a>
  <div class="bottomleft"></div>
</div>; */
