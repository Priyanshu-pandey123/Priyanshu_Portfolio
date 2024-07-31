import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` I am a proficient full stack developer with a strong command over front-end and back-end technologies. My expertise lies in React.js for building dynamic and responsive user interfaces, and Node.js combined with Express.js for developing robust server-side applications. I am well-versed in using Redux for state management and MongoDB for efficient data storage and retrieval. Additionally, I have hands-on experience with modern CSS frameworks like Tailwind CSS and SASS to create visually appealing and responsive designs. My skill set also includes working with Passport.js for secure authentication, and utilizing APIs like TMDB and OpenAI GPT to integrate advanced functionalities into applications. I am also proficient in version control with Git and am comfortable using tools like VS Code and Postman for development and API testing. My foundation in C++, OOP principles, and SQL further strengthens my ability to design and implement scalable solutions in web development. `;

export const ABOUT_TEXT = `I am Priyanshu Pandey, a B.Tech graduate from United College of Engineering and Research, class of 2024. With a strong foundation in full stack development, I possess expertise in React.js, Node.js, and JavaScript. My hands-on experience with these technologies has equipped me with the ability to build responsive and dynamic web applications. As a fresher, I am eager to apply my knowledge and skills in a professional setting, contributing to innovative projects and continuously learning to stay ahead in the ever-evolving tech industry. I am passionate about developing efficient and scalable solutions, and I look forward to growing as a full stack develope`;

export const PROJECTS = [

  {
    title: "SOCIAL_MEDIA PLATFORM",
    image: project4,
    description:
      "The Codeial project is a full-stack social media platform built with Node.js, Express.js, MongoDB, and EJS. It features a robust MVC architecture, enabling users to sign up, authenticate via Passport.js, and manage their profiles. The platform supports creating, updating, and deleting posts, with a one-to-many relationship between posts and comments. Users can interact through comments and likes, and a real-time chat engine enhances social interaction. This project demonstrates strong back-end development skills, effective use of authentication strategies, and an ability to build scalable, feature-rich web applications.",
    technologies: ["JavaScript", "Node js", "EJS", "Express", "MongoDb","Passport js","webSocket"],
  },


  {
    title: "NETFLIX_GPT",
    image: project1,
    description:
      "The Netflix-GPT project is a dynamic web application that combines a Netflix-like interface with AI-powered search functionality using OpenAI's GPT. Built with React.js and Redux, the app integrates the TMDB API to fetch real-time movie data, allowing users to browse and search for titles. Firebase handles user authentication, while Tailwind CSS ensures a sleek, responsive design. The AI-enhanced search provides intelligent suggestions, making the user experience more interactive and personalized. This project highlights advanced front-end development skills and the innovative use of AI in enhancing user interaction.",
    technologies: ["Tailwind", "React", "Redux", "Firebase","Openai"],
  },
  {
    title: "Food Order App",
    image: project2,
    description:
      "I developed a dynamic food order app using React, Redux, and Tailwind CSS, focusing on creating an intuitive user experience. The app allows users to filter food items by rating, ensuring they can quickly find the best options. Items can be added to the cart seamlessly, with the state managed efficiently by Redux for a smooth shopping experience. To ensure reliability and functionality, I implemented comprehensive test cases using Jest, covering critical features like filtering, cart management, and user interactions. This project highlights my skills in building user-centric, scalable applications with robust testing practices..",
    technologies: ["Tailwind", "React", "Redux"],
  },
  {
    title: "Youtube-Clone",
    image: project3,
    description:
      "I am currently building a YouTube clone using React, Redux, and Tailwind CSS, designed to replicate key features of the popular video-sharing platform. The search functionality is enhanced with debouncing and caching concepts to optimize performance and user experience. Additionally, the application includes a live chat feature, where users can engage in real-time conversations, with the chat reply system implemented using DFS (Depth-First Search) in React to manage nested replies. This project demonstrates my ability to build complex, real-time interactive features while maintaining efficient state management and responsive design.",
    technologies:["Tailwind", "React", "Redux"],
  },
 
];

export const CONTACT = {
  address: " Chipiyana Ghaziabad Uttar Pradesh ",
  phoneNo: "6388031629",
  email: "prince678p@gmail.com",
};
