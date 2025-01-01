import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
    "I'm an aspiring ML Engineer passionate about AI, software development, and quantum computing. Currently, I'm a research assistant exploring brain-inspired neural networks and their applications in deep learning. I've built AI-driven apps, VR healthcare simulations, and machine learning solutions, always striving to innovate and learn. Let's connect!",
  avatarUrl: "/me.png",
  skills: [ //TODO maybe use a circular thing for skills
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
    "Unity",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      X: { //TODO remove this
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: { //TODO remove this
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rutgers University - CABM",
      href: "https://cabm.rutgers.edu/research/milstein-lab", // TODO all links don't work
      badges: [],
      location: "Piscataway, NJ",
      title: "Undergraduate Research Assistant",
      logoUrl: "/rutgers.png",
      start: "May 2024",
      end: "Present",
      description:
        "Engineer neural networks inspired by biological brain mechanisms to advance pattern discrimination tasks as solutions for the deep learning synaptic credit assignment problem under the guidance of Dr. Aaron Milstein. Develop with PyTorch in Python for building and fine-tuning neural network models for spiral and MNIST datasets. Conduct validation to optimize network performance with HPC multithreading on Linux compute cluster with shell scripts.",
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
    },
    {
      company: "GXF Inc.",
      href: "https://nvidia.com/", //TODO get rid of this, no link for gxf
      badges: [],
      location: "Hybrid",
      title: "Software Engineer Intern",
      logoUrl: "/gxf.png", // TODO find gxf logo
      start: "March 2024",
      end: "May 2024",
      description:
        "Developed VR/MR applications for Apple Vision Pro and Meta Quest 2 & 3 to enhance medical education and practice. Collaborated with 2 cross-functional teams in a startup environment to design and implement immersive simulations, reducing medical errors and improving healthcare outcomes. Utilized Unity and C# to create interactive environments, ensuring high performance and user engagement. Presented project progress and outcomes to surgeons & the US military, receiving positive feedback and valuable insights.",
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
      href: "https://github.com/yashc73080/",
      dates: "Sep 2024 - December 2024",
      active: true, // TODO figure out what this is
      description:
        "Developed a full-stack MBS management system to filter mortgages, calculate costs, manage pools, and add new entries, streamlining complex financial operations efficiently.",
      technologies: [
        "Vite.js",
        "React.js",
        "JavaScript",
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
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
