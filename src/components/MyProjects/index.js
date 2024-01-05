import ProjectItems from "../ProjectItems"

import "./index.css"

const projectsLists = [
  {
    id: 1,
    projectName: "Insta Share",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456611/insta_share_osmn5h.jpg",
    projectLink: "https://instacloneapp.ccbp.tech/",
    shortLink: "instacloneapp.ccbp.tech",
    techStack: ["React Js", "CSS", "Bootstrap"],
    description:"Implemented responsive Streaming Application like Instagram Clone where users can log in and see a list of stories and posts, user can also search posts with post caption, user can be able to like and dislike the post and also view the user specific posts."
  },
  {
    id: 2,
    projectName: "Emoji Game App",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/emoji_game_vrv7xp.jpg",
    projectLink: "https://emotionicongame.ccbp.tech/",
    shortLink: "emotionicongame.ccbp.tech/",
    techStack: ["React Js", "CSS", "Bootstrap"],
    description:"Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all displayed emojis are clicked. All emojis positions will be randomized after each click"
  },
  {
    id: 3,
    projectName: "Todos App",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/todos_w6w7b4.jpg",
    projectLink: "https://emotionicongame.ccbp.tech/",
    shortLink: "emotionicongame.ccbp.tech/",
    techStack: ["HTML", "CSS", "Bootstrap", "Java Script"],
    description:"Developed persistent todo application with CRUD operations to track list of tasks like we can add a task, delete a task"
  },
  {
    id: 4,
    projectName: "Wikipedia Search Application",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/wps_shx0s8.jpg",
    projectLink: "https://sreekanthwsa.ccbp.tech/",
    shortLink: "sreekanthwsa.ccbp.tech",
    techStack: ["HTML", "CSS", "Bootstrap", "Java Script", "REST API Calls"],
    description:"Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result"
  },
  {
    id: 5,
    projectName: "Food Munch Website",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/food_munch_u0gtba.jpg",
    projectLink: "https://sreekathfood.ccbp.tech/",
    shortLink: "sreekathfood.ccbp.tech",
    techStack: ["HTML", "CSS", "Bootstrap"],
    description:"Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers"
  },
]

const MyProjects = () => (
  <>
    <div className="empty-div" id="myProjects">
    <div className="my-projects-container">
      {/* <h1 className="home-name left-padding">
        My
        <span className="span-name"> Projects</span>
      </h1> */}

      <ul className="projects-list-container">
        {projectsLists.map((item) => (
          <ProjectItems itemDetails={item} key={item.id} />
        ))}
      </ul>
    </div>
    </div>
  </>
)

export default MyProjects
