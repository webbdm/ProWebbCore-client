import React from "react";

const Projects = () => (
  <div className="h-full flex flex-col p-8">
    <h2 className="text-white text-2xl border-b-2 border-accent">webbdm.net</h2>
    <h2 className="p-5 pl-0 text-white text-left">
      First and foremost, my main personal project right now is this very
      website. What you're seeing is a React app powered by a .NET Core API
      (fully functional CMS) behind NGINX, running on a Digital Ocean Ubuntu
      Droplet with a MySQL database.
    </h2>
    <div className="flex flex-col justify-around">
      {[
        {
          name: "Trek",
          image:
            "https://raw.githubusercontent.com/webbdm/React-BioCards/master/images/Screen%20Shot%202017-10-25%20at%2011.25.45%20PM.png",
          description:
            "Trek was my Front-End capstone for Nashville Software School, and the first full-fledged web application I ever built. The inspiration for this wiki-style campsite & park database was my love of backpacking. Sometimes it’s hard to find locations & reviews for very specific campsites, especially if they are in the backcountry. Trek allows you to search for campsites by park, and add photos, comments, reviews, and coordinates to display the exact location with Google Maps. It was built with Angular 1.6, the Google Maps Javascript API, and Firebase.",
        },
        {
          name: "Macro Tracker",
          image:
            "https://raw.githubusercontent.com/webbdm/React-BioCards/master/images/Macro%20Graphs.png",
          description:
            "The “Macro Tracker” was a tool I built in 2017 after learning React fundamentals. One of the most important parts of maintaining a workout & fitness plan is to track your nutrition & macros. I built this application with React & Firebase and I’m currently working on a feature that allows you to log each day and view your weekly stats and graphs.",
        },
      ].map((project) => (
        <div className="flex flex-col text-white">
          <h2 className="text-2xl border-b-2 border-accent">{project.name}</h2>
          <div className="flex flex-row flex-wrap py-1">
            <div className="pt-4">
              <img
                className="h-32 mr-4 mb-2 float-left w-auto rounded-sm"
                src={project.image}
              />
              <p className="mt-0">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
