import React, { useState } from "react";

const CategoryIcons = {
  "Game Engines": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM16 13H14V15H16V13ZM18 9H16V11H18V9Z"></path>
    </svg>
  ),
  "Programming Languages": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "My Education": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M12 2L0 9L12 16L22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.4905L11.9990 23L19.9990 18.4905V13.4905L11.9990 18L3.99902 13.4905Z"></path>
    </svg>
  ),
  "Teamwork": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H20C20 18.7497 18.4986 15.9002 16.1585 14.2024L18.2837 14.7028ZM17.5962 3.90478C19.5944 4.72675 21 6.69927 21 9C21 11.3007 19.5944 13.2733 17.5962 14.0952C18.4926 12.7356 19 11.1218 19 9.38462C19 7.50928 18.4291 5.76937 17.4317 4.32051L17.5962 3.90478Z"></path>
    </svg>
  ),
  "Tools & Workflow": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Game Engines": [
      "I work with Unreal Engine using C++ and Blueprints for gameplay programming, and Unity with C# for scripting game mechanics and interactive systems. I'm experienced in both engines' workflows and toolsets.",
    ],
    "Programming Languages": [
      "My primary languages are C++ and C#. I use C++ extensively with Unreal Engine for performance-critical gameplay systems, and C# with Unity for rapid prototyping and game logic implementation.",
    ],
    "My Education": [
      "I'm currently studying Game Development, where I'm learning the fundamentals of game design, programming, and production. My coursework covers gameplay programming, game engine architecture, and interactive media development.",
    ],
    "Teamwork": [
      "I have experience working in team-based game development projects using agile methodologies. I use Git and GitHub/GitLab for version control, and Jira and Notion for project management and task tracking.",
    ],
    "Tools & Workflow": [
      "I use Visual Studio and JetBrains Rider as my main IDEs. For art and assets, I work with Photoshop for textures and UI, and Aseprite for pixel art and sprite creation. I manage projects with Jira and Notion.",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center text-left mx-auto max-w-6xl px-4">
      <div className="site-container mt-10">
        <h2 className="text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center md:text-end">
          <span className="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#0debd8] bg-[#7836cf] md:block"></span>
          <span className="drop-shadow-[2px_2px_0_#7836cf]">More About Me</span>
        </h2>
        <ul className="mt-4 space-y-4 text-lg">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all drop-shadow-[2px_2px_0_#7836cf]"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[200px] min-w-0 overflow-hidden md:max-w-none">
                      <span className="block truncate text-lg text-white drop-shadow-[1px_1px_0_#7836cf] font-bold">
                        {category}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 shrink-0 transform text-[#6a2cbb] transition-transform ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${
                    openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[0.8em] text-white">{skills[category]}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillsList;
