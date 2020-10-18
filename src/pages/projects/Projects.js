import React from "react";

import LinkIcon from "../../../assets/link_icon.svg";

const Tags = ({ tags }) => (
  <div className="ml-2 flex flex-row">
    {tags.map((tag) => (
      <div
        className="mx-2 px-2 p-1 pt-0 rounded bg-accent text-center text-primary text-xs"
        key={tag}
      >
        {tag}
      </div>
    ))}
  </div>
);

const Projects = () => (
  <div className="h-full flex flex-col m-4">
    <div className="bg-panel p-4 mb-2 rounded">
      <div className="flex flex-row items-center border-b-2 border-accent">
        <h2 className="text-white text-2xl">webbdm.net</h2>
        <Tags tags={["react", ".net", "S3", "nginx", "mysql"]} />
      </div>
      <h2 className="p-5 pl-0 text-white text-left">
        First and foremost, my main personal project right now is this very
        website. What you're seeing is a React app powered by a .NET Core API
        (fully functional CMS) behind NGINX, running on a Digital Ocean Ubuntu
        Droplet with a MySQL database.
      </h2>
    </div>
    <div className="flex flex-col justify-around">
      {[
        {
          name: "Trek",
          image: "Trek.png",
          link: "https://trekbase-dc9a5.firebaseapp.com/#!/auth",
          tags: ["angularjs", "google maps", "firebase"],
          description:
            "Trek was my Front-End capstone for Nashville Software School, and the first full-fledged web application I ever built. The inspiration for this wiki-style campsite & park database was my love of backpacking. Sometimes it’s hard to find locations & reviews for very specific campsites, especially if they are in the backcountry. Trek allows you to search for campsites by park and add photos, comments, reviews, and coordinates to display the exact location with Google Maps. It was built with Angular 1.6, the Google Maps Javascript API, and Firebase.",
        },
        {
          name: "Macro Tracker",
          image: "Macro+Graphs.png",
          link: "https://island-hopper.firebaseapp.com/",
          tags: ["react", "firebase", "chartjs"],
          description:
            "The Macro Tracker was a tool I built in 2017 after learning React fundamentals. One of the most important parts of maintaining a workout and fitness plan is to track your nutrition and macros. I built this application with React, Firebase, and ChartJS.",
        },
        {
          name: "TIL",
          image: "TIL.png",
          link: "https://nss-alumni.github.io/hackathon1-team09/#!/list",
          tags: ["angularjs", "materialize", "elixir", "slack"],
          description:
            "For our project in the 1st Annual Nashville Software School Skill++ 24-Hour Hackathon, we created TIL (Today I Learned) which is an app to post anything new you've learned about tech. It was built with an Angular 1.6 Front-End, Elixir Back-End, and also features a Slack app that allows you to post, search, and control the app through your Slack team. My role on the team was Front-End developer, designing the UI & styles with Materialize as our framework. Check out the other team members on GitHub: @BlaiseGratton, @PreetiKRP, @aoswalt",
        },
      ].map((project) => (
        <div className="clear-both flex flex-col text-white">
          <a
            href={project.link}
            className="mt-2 flex flex-row justify-start items-center border-b-2 border-accent"
          >
            <h2 className="text-2xl hover:text-accent">{project.name}</h2>
            <img className="ml-2 mr-1 mb-2 mt-3" src={LinkIcon} />
            <Tags tags={project.tags} />
          </a>
          <div className="py-1 mb-2 md:flex md:flex-row md:flex-nowrap">
            <img
              className="mt-2 sm:w-auto md:w-64 h-52 mr-4 mb-2 mt-1 rounded-sm object-cover"
              src={`${process.env.BUCKET_URL}/${project.image}`}
            />
            <p className="mt-1">
              {project.description}
              <a href={project.link} className="flex flex-row items-center ">
                <span className="font-semibold"> View Project: </span>
                <img className="ml-1 mt-1" src={LinkIcon} />
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
