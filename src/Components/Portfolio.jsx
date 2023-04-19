/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "coding screen for portfolio";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Vtu Results Extractor",
    description: "Built an extractor tool coupled with a desktop based UI, powered by eel.js to help automate extraction and analysis of results from VTU website.",
    url: "https://github.com/vtu-results-extractor"
  },
  {
    title: "Destructo",
    description: "Developed a Flutter app to help manage various files and folders in a creative way. It comes equipped with a great UI and a self-destruct option.",
    url: "https://play.google.com/store/apps/details?id=com.markisdev.destructo"
  },  
  {
    title: "Bucketlist",
    description: "Bucketlist is an Android application to help you create your bucketlist with your friends in a WYSIWYG editor, all in realtime!",
    url: "https://play.google.com/store/apps/details?id=com.markisdev.bucketlist"
  },
  {
    title: "PrivMsg",
    description: "PrivMsg is a burner note service that is completely encrypted and allows you to share notes with your friends in a secure way. It also allows you to create E2E temporary chat rooms!",
    url: "https://github.com/markisdev/privmsg"
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
