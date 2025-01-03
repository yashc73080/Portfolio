import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Yash Chennawar",
  initials: "YC",
  url: "https://dillion.io", //TODO change this
  location: "New York Metropolitan Area",
  locationLink: "https://www.google.com/maps/place/New+York+Metropolitan+Area/@40.9182659,-74.4475895,7z/data=!4m6!3m5!1s0x89c286d6e07696fb:0xca34053f4678c888!8m2!3d40.7127761!4d-74.0059544!16s%2Fg%2F11cn6k49x1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
  description:
    "AI enthusiast and builder. Passionate about coding, solving problems, and creating impactful projects.",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "My name is Yash Chennawar, and I'm an aspiring ML Engineer passionate about AI, software development, and quantum computing. Currently, I'm a research assistant exploring brain-inspired neural networks and their applications in deep learning. I've built AI-driven apps, VR healthcare simulations, and machine learning solutions, always striving to innovate and learn. Let's connect!",
  avatarUrl: "",
  skills: [
    "Python",
    "Java",
    "PyTorch",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "LangChain",
    "PostgreSQL",
    "C",
    "C++",
    "R",
    "Shell",
    "MongoDB",
    "Unity",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://docs.google.com/document/d/e/2PACX-1vQOJIlwtTdI1FBLWaAu9_5qREEFukUqNKpaD3GygA0CtMb8yHzE3vp7k7XtKVazDdgqo5SUTxIK_5Yx/pub", icon: NotebookIcon, label: "Resume" }, // Can switch to pdf
  ],
  contact: {
    email: "yash.chennawar@gmail.com",
    tel: "+7329972018",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yashc73080",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yashchennawar",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:yash.chennawar@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Rutgers University - CABM",
      href: "https://cabm.rutgers.edu/research/milstein-lab",
      badges: [],
      location: "Piscataway, NJ",
      title: "Undergraduate Research Assistant",
      logoUrl: "/rutgers.png",
      start: "May 2024",
      end: "Present",
      description:
        "Engineer neural networks inspired by biological brain mechanisms to advance pattern discrimination tasks as solutions for the deep learning synaptic credit assignment problem under the guidance of Dr. Aaron Milstein. Develop with PyTorch in Python for building and fine-tuning neural network models for spiral and MNIST datasets. Conduct validation to optimize network performance with HPC multithreading on Linux compute cluster with shell scripts.",
      links: [
        {
          type: "Lab",
          href: "https://cabm.rutgers.edu/research/milstein-lab",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Spiral",
          href: "https://github.com/Milstein-Lab/Summer2024",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "EIANN",
          href: "https://github.com/Milstein-Lab/EIANN",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Poster",
          href: "/summer_2024_poster.pdf",
          icon: <FileText className="size-3" />,
        },
      ],
    },
    {
      company: "Headstarter AI",
      badges: [],
      href: "https://headstarter.co/",
      location: "Remote",
      title: "Software Engineer Fellow",
      logoUrl: "/headstarter.png",
      start: "July 2024",
      end: "September 2024",
      description:
        "Built 5+ AI apps/websites and will be used by many users. Designed and developed projects to deploy with 3 other fellows using MVC patterns. Mentored by engineers from Amazon, Bloomberg, and Capital One on Agile, CI/CD, Git, and microservice patterns.",
      links: [],
    },
    {
      company: "GXF Inc.",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Software Engineer Intern",
      logoUrl: "/gxf.png",
      start: "March 2024",
      end: "May 2024",
      description:
        "Developed VR/MR applications for Apple Vision Pro and Meta Quest 2 & 3 to enhance medical education and practice. Collaborated with 2 cross-functional teams in a startup environment to design and implement immersive simulations, reducing medical errors and improving healthcare outcomes. Utilized Unity and C# to create interactive environments, ensuring high performance and user engagement. Presented project progress and outcomes to surgeons & the US military, receiving positive feedback and valuable insights.",
      links: [],
    },
    {
      company: "Steam Works Studio",
      badges: [],
      href: "https://steamworksstudio.com/",
      location: "Monroe Township, NJ",
      title: "Robotics Tutor",
      logoUrl: "/steamworks.png",
      start: "February 2023",
      end: "July 2023",
      description:
        "Mentored students in robotics for the World Robotics Olympiad, First LEGO League, and Sumo Robot League events. Taught Python and Java, focusing on automation, fundamental engineering principles, and sensor control.",
      links: [],
    },
  ],
  education: [
    {
      school: "Rutgers University-New Brunswick",
      href: "https://newbrunswick.rutgers.edu/",
      degree: "BS in Computer Science and Mathematics, Minor in Data Science, Honors College",
      logoUrl: "/rutgers.png",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "TripWhiz",
      href: "https://tripwhiz.onrender.com/",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Creating a web app that optimizes multi-destination travel routes and provides personalized travel guidance via an AI-powered chatbot.",
      technologies: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Python",
        "Flask",
        "OpenRouter",
        "Google Cloud Platform",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://tripwhiz.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yashc73080/HackRUF24",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tripwhiz.jpeg",
      video: "",
    },
    {
      title: "MBS Dashboard",
      href: "",
      dates: "Sep 2024 - December 2024",
      active: true,
      description:
        "Developed a full-stack MBS management system to filter mortgages, calculate costs, manage pools, and add new entries, streamlining complex financial operations efficiently.",
      technologies: [
        "Vite.js",
        "React.js",
        "JavaScript",
        "Java",
        "PostgreSQL",
        "REST APIs",
        "Spring-Boot",
        "JDBC",
      ],
      links: [],
      image: "/mbs.jpeg",
      video: "",
    },
    {
      title: "Rate My Professors Assistant",
      href: "https://ai-rate-my-professor-nine.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Coded an AI assistant to help choose professors for classes. Uses RAG and web scraping to analyze ratings and reviews. Incorporated authentication.",
      technologies: [
        "Next.js",
        "React.js",
        "JavaScript",
        "OpenAI",
        "Pinecone",
        "Firebase",
        "Cheerio",
        "Puppeteer",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-rate-my-professor-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yashc73080/AI-Rate-My-Professor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rmp.jpeg",
      video: "",
    },
    {
      title: "Cardify: Flashcards SaaS",
      href: "https://ai-flashcards-silk.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Built an AI study assistant SaaS that generates flashcards based on user descriptions. Integrated payment processing and authentication.",
      technologies: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Stripe",
        "OpenAI",
        "Clerk",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-flashcards-silk.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yashc73080/AI-Flashcards",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cardify.jpeg",
      video: "",
    },
    {
      title: "CodeBuddy",
      href: "https://code-buddy-kappa.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Developed AI code assistant for code documentation using RAG. Used multiple LLM models for chatbot. Hosted on AWS EC2 Instance.",
      technologies: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Python",
        "LangChain",
        "Pinecone",
        "Firebase",
        "OpenAI",
        "AWS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://code-buddy-kappa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yashc73080/CodeBuddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/codebuddy.jpeg",
      video: "",
    },
    {
      title: "Pantry Tracker",
      href: "https://pantry-tracker-kappa-azure.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Engineered website to track items in a pantry. Provided AI-generated description suggestions based on item name.",
      technologies: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Firebase",
        "OpenAI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://pantry-tracker-kappa-azure.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yashc73080/Pantry-Tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pantry.jpeg",
      video: "",
    },
    {
      title: "Binder",
      href: "https://github.com/yashc73080/HackRUS2024",
      dates: "Mar 2024",
      active: true,
      description:
        "Developed a web app to generate personalized book recommendations similar to Tinder. Recommended books using TF-IDF and KNN.",
      technologies: [
        "Node.js",
        "JavaScript",
        "HTML/CSS",
        "Python",
        "Pandas",
        "Scikit-learn",
        "Flask",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yashc73080/HackRUS2024",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/binder.jpeg",
      video: "",
    },
    {
      title: "Stock Prediction Model",
      href: "https://github.com/yashc73080/Stock-Prediction-Model",
      dates: "Feb 2024",
      active: true,
      description:
        "Created an ML model to predict S&P 500 index values using historical stock open and close time series data from yfinance. Trained data with a Random Forest Classifier by using various values for each day.",
      technologies: [
        "Python",
        "Jupyter",
        "Scikit-learn",
        "Pandas",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yashc73080/Stock-Prediction-Model",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stockpred.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackRU Fall 2024",
      dates: "October 26-27, 2024",
      location: "New Brunswick, NJ",
      description:
        "Developed TripWhiz: AI-powered trip itinerary planner that optimizes travel routes and provides personalized guidance.",
      image: "/hackru_spring24.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yashc73080/HackRUF24",
        },
      ],
    },
    {
      title: "HackRU Spring 2024",
      dates: "March 23-24, 2024",
      location: "Piscataway, NJ",
      description:
        "Developed Binder: Web app to generate personalized book recommendations using ML algorithms.",
      image: "/hackru.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yashc73080/HackRUS2024",
        },
      ],
    },
  ],
} as const;