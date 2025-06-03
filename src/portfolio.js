/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Johnny Haro",
  title: "Hi, im Johnny Haro",
  subTitle: emoji(
    "A passionate Computer Science 💻🧪 student and aspiring Software Developer with experience in programming, computer repair, and machine learning. Proficient in Python, Java, and C++, HTML, CSS, and JavaScript. Interested in all things STEM and always exploring AI & ML topics/concepts 🤓."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AiyAtCg1Kqg9kleuHP9k44iVplfBvold/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/johnnyharo",
  linkedin: "https://www.linkedin.com/in/johnny-haro/",
  gmail: "johnnyharo@gmail.com",
  medium: "https://medium.com/@johnnyharo",
  stackoverflow: "https://stackoverflow.com/users/15578416/johnnybh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do 🤠",
  subTitle:
    "Aspiring Software Engineer exploring AI/ML, IT systems, and full-stack development.",
  skills: [
    emoji(
      "💥 Building and debugging using various Programming Languages such as Python, Java, and C++"
    ),
    emoji(
      "💥 Developing and maintaining IT systems, including hardware and software support"
    ),
    emoji(
      "💥 Conducting independent research in machine learning using TensorFlow and scikit-learn"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Santa Monica College",
      logo: require("./assets/images/pleaseChange.png"),
      subHeader: "Associate’s Degree in Computer Science (GPA: 3.786)",
      duration: "Sep 2021 – Dec 2025",
      desc: "AI Club member and active participant in STEM/MÁS program. Completed coursework in advanced programming, data structures, and web development."
    },
    {
      schoolName: "University of California, Santa Cruz",
      logo: require("./assets/images/ucscLogo.png"),
      subHeader: "Computer Science (withdrew)",
      duration: "Sep 2021 – Mar 2023",
      desc: "Completed core CS courses in programming, discrete math, and operating systems."
    },
    {
      schoolName: "Culver City High School",
      logo: require("./assets/images/cchsLogo.jpg"),
      subHeader:
        "Honor Roll, YMCA Youth and Government, Club Rotario de Latinos Unidos",
      duration: "Sep 2017 – June 2021",
      desc: "Completed all 4 years as an AVID Student and completed both AP Computer Science Principles courses. Recieved diploma in 2021."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Administrative Intern",
      company: "City of Santa Monica - ISD",
      companylogo: require("./assets/images/santaMonicaLogo.jpg"),
      date: "Jan 2025 – Present",
      desc: "Providing tech support, maintaining networking infrastructure, and managing database updates for city departments and libraries."
    },
    {
      role: "Client Services Technician Intern",
      company: "City of Santa Monica - ISD",
      companylogo: require("./assets/images/santaMonicaLogo.jpg"),
      date: "Jun 2024 – Oct 2024",
      desc: "Resolved hardware/software issues during the 2024 CrowdStrike incident and provisioned devices for city staff."
    },
    {
      role: "Desktop Technician (Contract)",
      company: "The Aerospace Corporation (via Dexian)",
      companylogo: require("./assets/images/aerospaceLogo.jpg"),
      date: "May 2023 – Sep 2023",
      desc: "Handled ServiceNow tickets, imaged and repaired laptops, and supported Los Angeles Air Force Base operations."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Entry-Level Programmer Certification",
      subtitle: "Earned through Santa Monica College in Fall 2024",
      image: require("./assets/images/certificationLogo.png"),
      imageAlt: "Certification Logo",
      footerLink: []
    },
    {
      title: "California State Seal of Biliteracy",
      subtitle: "Awarded in 2021 for English and Spanish fluency",
      image: require("./assets/images/sealLogo.png"),
      imageAlt: "Seal of Biliteracy",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project/opportunity or just say hi?\n My Inbox is open to everyone.",
  number: "(424) 330-5410",
  email_address: "johnnyharo@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
