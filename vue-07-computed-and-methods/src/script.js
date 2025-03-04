Vue.createApp({
  data() {
    return {
      books: [
        {
          id: "1001606140805",
          title: "Java Web Scraping Handbook",
          subtitle: "Learn advanced Web Scraping techniques",
          isbn: "1001606140805",
          abstract:
            "Web scraping or crawling is the art of fetching data from a third party website by downloading and parsing the HTML code to extract the data you want. It can be hard. From bad HTML code to heavy Javascript use and anti-bot techniques, it is often tricky. Lots of companies use it to obtain knowledge ...",
          author: "Kevin Sahin",
          publisher: "Leanpub",
          price: "$0.00",
          numPages: 115,
          isBookmarked: true,
        },
        {
          id: "9780071494618",
          title: "Hacking Exposed Web 2.0",
          subtitle: "Web 2.0 Security Secrets and Solutions",
          isbn: "9780071494618",
          abstract:
            "Protect your Web 2.0 architecture against the latest wave of cybercrime using expert tactics from Internet security professionals. Hacking Exposed Web 2.0 shows how hackers perform reconnaissance, choose their entry point, and attack Web 2.0 - based services, and reveals detailed countermeasures and...",
          author: "Rich Cannings, Himanshu Dwivedi, Zane Lackey",
          publisher: "McGraw-Hill",
          price: "$12.03",
          numPages: 258,
          isBookmarked: false,
        },
        {
          id: "9780071740647",
          title: "Hacking Exposed Web Applications, 3rd Edition",
          subtitle: "Web Applications Security Secrets and Solutions",
          isbn: "9780071740647",
          abstract:
            "Protect your Web applications from malicious attacks by mastering the weapons and thought processes of today's hacker. Written by recognized security practitioners and thought leaders, Hacking Exposed Web Applications, Third Edition is fully updated to cover new infiltration methods and countermeasu...",
          author: "Joel Scambray, Vincent Liu, Caleb Sima",
          publisher: "McGraw-Hill",
          price: "$9.50",
          numPages: 482,
          isBookmarked: false,
        },
        {
          id: "9780134655536",
          title: "Node.js, MongoDB and Angular Web Development, 2nd Edition",
          subtitle:
            "The definitive guide to using the MEAN stack to build web applications",
          isbn: "9780134655536",
          abstract:
            "Node.js is a leading server-side programming environment, MongoDB is the most popular NoSQL database, and Angular is the leading framework for MVC-based front-end development. Together, they provide an easy-to-implement, fully integrated web development stack that allows web programmers to create hi...",
          author: "Brad Dayley, Brendan Dayley, Caleb Dayley",
          publisher: "Addison-Wesley",
          price: "$33.16",
          numPages: 640,
          isBookmarked: false,
        },
        {
          id: "9780596522308",
          title: "Even Faster Web Sites",
          subtitle: "Performance Best Practices for Web Developers",
          isbn: "9780596522308",
          abstract:
            "Performance is critical to the success of any web site, and yet today's web applications push browsers to their limits with increasing amounts of rich content and heavy use of Ajax. In this book, Steve Souders, web performance evangelist at Google and former Chief Performance Yahoo!, provides valuab...",
          author: "Steve Souders",
          publisher: "O'Reilly Media",
          price: "$4.65",
          numPages: 256,
          isBookmarked: false,
        },
        {
          id: "9780596527525",
          title: "Learning Web Design, 3rd Edition",
          subtitle:
            "A Beginner's Guide to (X)HTML, StyleSheets, and Web Graphics",
          isbn: "9780596527525",
          abstract:
            "Everything you need to know to create professional web sites is right here. Learning Web Design starts from the beginning - defining how the Web and web pages work - and builds from there. By the end of the book, you'll have the skills to create multi-column CSS layouts with optimized graphic files,...",
          author: "Jennifer Niederst Robbins",
          publisher: "O'Reilly Media",
          price: "$4.13",
          numPages: 480,
          isBookmarked: false,
        },
        {
          id: "9780596529260",
          title: "RESTful Web Services",
          subtitle: "Web services for the real world",
          isbn: "9780596529260",
          abstract:
            "&amp;quot;Every developer working with the Web needs to read this book.&amp;quot; - David Heinemeier Hansson, creator of the Rails framework&amp;quot;RESTful Web Services finally provides a practical roadmap for constructing services that embrace the Web, instead of trying to route around it.&amp;qu...",
          author: "Leonard Richardson, Sam Ruby",
          publisher: "O'Reilly Media",
          price: "$2.60",
          numPages: 448,
          isBookmarked: false,
        },
        {
          id: "9780596529963",
          title: "Web 2.0: A Strategy Guide",
          subtitle:
            "Business thinking and strategies behind successful Web 2.0 implementations",
          isbn: "9780596529963",
          abstract:
            "Web 2.0 makes headlines, but how does it make money? This concise guide explains what's different about Web 2.0 and how those differences can improve your company's bottom line. Whether you're an executive plotting the next move, a small business owner looking to expand, or an entrepreneur planning ...",
          author: "Amy Shuen",
          publisher: "O'Reilly Media",
          price: "$3.49",
          numPages: 128,
          isBookmarked: false,
        },
        {
          id: "9780735649705",
          title: "Introducing Microsoft WebMatrix",
          subtitle:
            "Everything you need to build fully-functional, scalable web sites - in one tool",
          isbn: "9780735649705",
          abstract:
            "Get a running start with Microsoft WebMatrix - the free, downloadable web development solution featuring all the tools you need for server-side programming. This practical book introduces the templates, helper libraries, and other tools in WebMatrix for building and customizing a data-driven site - ...",
          author: "Laurence Moroney",
          publisher: "Microsoft Press",
          price: "$34.21",
          numPages: 352,
          isBookmarked: false,
        },
        {
          id: "9780735660120",
          title: "Building Web Applications with SVG",
          subtitle: "Add Interactivity and Motion to Your Web Applications",
          isbn: "9780735660120",
          abstract:
            "Dive into SVG - and build striking, interactive visuals for your web applications. Led by three SVG experts, you'll learn step-by-step how to use SVG techniques for animation, overlays, and dynamic charts and graphs. Then you'll put it all together by building two graphic-rich applications. Get star...",
          author: "David Dailey, Jon Frost, Domenico Strazzullo",
          publisher: "Microsoft Press",
          price: "$19.95",
          numPages: 294,
          isBookmarked: false,
        },
        {
          id: "9780974514093",
          title: "GIS for Web Developers",
          subtitle: "Adding Where to Your Web Applications",
          isbn: "9780974514093",
          abstract:
            "There is a hidden revolution going on: geography is moving from niche to the mainstream. GIS for Web Developers introduces Geographic Information Systems (GIS) in simple terms and demonstrates hands-on uses. With this book, you'll explore popular websites like maps.google.com, see the technologies t...",
          author: "Scott Davis",
          publisher: "The Pragmatic Programmers",
          price: "$6.96",
          numPages: 275,
          isBookmarked: false,
        },
        {
          id: "9780980576832",
          title: "Host Your Web Site In The Cloud",
          subtitle: "Amazon Web Services Made Easy",
          isbn: "9780980576832",
          abstract:
            "Host Your Web Site On The Cloud is your step-by-step guide to this revolutionary approach to hosting and managing your web applications.Cloud computing gives you the tools you need to prepare and cope with a traffic onslaught. You'll have the confidence to withstand a traffic surge without melting y...",
          author: "Jeffrey Barr",
          publisher: "SitePoint",
          price: "$5.50",
          numPages: 300,
          isBookmarked: false,
        },
        {
          id: "9781430239697",
          title: "Pro Website Development and Operations",
          subtitle: "Streamlining DevOps for large-scale websites",
          isbn: "9781430239697",
          abstract:
            "Pro Website Development and Operations gives you the experience you need to create and operate a large-scale production website. Large-scale websites have their own unique set of problems regarding their design - problems that can get worse when agile methodologies are adopted for rapid results. Man...",
          author: "Matthew Sacks",
          publisher: "Apress",
          price: "$29.99",
          numPages: 124,
          isBookmarked: false,
        },
        {
          id: "9781430246206",
          title: "Realtime Web Apps",
          subtitle: "With HTML5 WebSocket, PHP, and jQuery",
          isbn: "9781430246206",
          abstract:
            "Realtime Web Apps: With HTML5 WebSocket, PHP, and jQuery is a guide for beginner- to intermediate-level web developers looking to take the next leap forward in website and app development: realtime.With Realtime Web Apps, you'll be able to quickly get up to speed on what HTML5 WebSocket does, how it...",
          author: "Jason Lengstorf, Phil Leggetter",
          publisher: "Apress",
          price: "$34.47",
          numPages: 312,
          isBookmarked: false,
        },
        {
          id: "9781430257820",
          title: "Pro ASP.NET Web API Security",
          subtitle: "Securing ASP.NET Web API",
          isbn: "9781430257820",
          abstract:
            "ASP.NET Web API is a key part of ASP.NET MVC 4 and the platform of choice for building RESTful services that can be accessed by a wide range of devices. Everything from JavaScript libraries to RIA plugins, RFID readers to smart phones can consume your services using platform-agnostic HTTP.Fortunatel...",
          author: "Badrinarayanan Lakshmiraghavan",
          publisher: "Apress",
          price: "$33.55",
          numPages: 416,
          isBookmarked: false,
        },
        {
          id: "9781430258667",
          title: "WordPress for Web Developers",
          subtitle: "An Introduction for Web Professionals",
          isbn: "9781430258667",
          abstract:
            "WordPress for Web Developers is a complete guide for web designers and developers who want to begin building and administering sites with WordPress. This book is an update of Beginning WordPress 3, freshened and clarified for web developers who want to make the most of WordPress. You'll start by lea...",
          author: "Stephanie Leary",
          publisher: "Apress",
          price: "$36.11",
          numPages: 368,
          isBookmarked: false,
        },
        {
          id: "9781430259831",
          title: "Learn Java for Web Development",
          subtitle: "Modern Java Web Development",
          isbn: "9781430259831",
          abstract:
            "Web development is still one of today's most popular, active, and important programming and development activities. From a single web page to an e-commerce-enabled web site to a fully-fledged web application, the Java programming language and its frameworks allow you great flexibility and productivi...",
          author: "Vishal Layka",
          publisher: "Apress",
          price: "$41.39",
          numPages: 472,
          isBookmarked: false,
        },
        {
          id: "9781449309961",
          title: "Building Web Applications with Erlang",
          subtitle: "Working with REST and Web Sockets on Yaws",
          isbn: "9781449309961",
          abstract:
            "Why choose Erlang for web applications? Discover the answer hands-on by building a simple web service with this book. If you're an experienced web developer who knows basic Erlang, you'll learn how to work with REST, dynamic content, web sockets, and concurrency through several examples. In the proc...",
          author: "Zachary Kessin",
          publisher: "O'Reilly Media",
          price: "$15.99",
          numPages: 156,
          isBookmarked: false,
        },
        {
          id: "9781449316976",
          title: "Developing Web Applications with Haskell and Yesod",
          subtitle: "Safety-Driven Web Development",
          isbn: "9781449316976",
          abstract:
            "This fast-moving guide introduces web application development with Haskell and Yesod, a potent language / framework combination that supports high-performing applications that are modular, type-safe, and concise. You'll work with several samples to explore the way Yesod handles widgets, forms, persi...",
          author: "Michael Snoyman",
          publisher: "O'Reilly Media",
          price: "$15.00",
          numPages: 298,
          isBookmarked: false,
        },
        {
          id: "9781449319274",
          title: "Learning Web Design, 4th Edition",
          subtitle:
            "A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
          isbn: "9781449319274",
          abstract:
            "Do you want to build web pages, but have no previous experience? This friendly guide is the perfect place to start. You'll begin at square one, learning how the Web and web pages work, and then steadily build from there. By the end of the book, you'll have the skills to create a simple site with mul...",
          author: "Jennifer Niederst Robbins",
          publisher: "O'Reilly Media",
          price: "$9.00",
          numPages: 624,
          isBookmarked: false,
        },
        {
          id: "9781449320515",
          title: "HTML5 and JavaScript Web Apps",
          subtitle: "Building Apps for the Open Web",
          isbn: "9781449320515",
          abstract:
            "This hands-on book shows you how to work with HTML5, JavaScript MVC frameworks, and the latest W3C specifications to build mobile and desktop web apps that are widely supported across all browsers and devices. You'll quickly master building client-side applications with a loosely coupled backend inf...",
          author: "Wesley Hales",
          publisher: "O'Reilly Media",
          price: "$3.88",
          numPages: 172,
          isBookmarked: false,
        },
        {
          id: "9781449323578",
          title: "WebGL: Up and Running",
          subtitle: "Building 3D Graphics for the Web",
          isbn: "9781449323578",
          abstract:
            "Get a quick introduction to WebGL, the new standard for 3D rendering on the Web and a member of HTML5's family of technologies. With this hands-on guide, you'll learn essential WebGL development and production concepts, using the JavaScript 3D engine Three.js. At the end of the book, you'll put ever...",
          author: "Tony Parisi",
          publisher: "O'Reilly Media",
          price: "$26.21",
          numPages: 230,
          isBookmarked: false,
        },
        {
          id: "9781449332914",
          title: "Web Performance Daybook Volume 2",
          subtitle: "Techniques and Tips for Optimizing Web Site Performance",
          isbn: "9781449332914",
          abstract:
            "Performance is critical to the success of any website, and help with using today's new tools is key. In this remarkable guide, 32 leading web performance experts offer practical tips, techniques, and advice for optimizing your site's user experience.Originally written for an online calendar, this co...",
          author: "Stoyan  Stefanov",
          publisher: "O'Reilly Media",
          price: "$8.92",
          numPages: 226,
          isBookmarked: false,
        },
        {
          id: "9781449337711",
          title: "Designing Evolvable Web APIs with ASP.NET",
          subtitle: "Harnessing the power of the web",
          isbn: "9781449337711",
          abstract:
            "Design and build Web APIs for a broad range of clients - including browsers and mobile devices - that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft's ASP.NET Web API framework. In the proc...",
          author:
            "Glenn Block, Pablo Cibraro, Pedro Felix, Howard Dierking, Darrel Miller",
          publisher: "O'Reilly Media",
          price: "$31.99",
          numPages: 538,
          isBookmarked: false,
        },
        {
          id: "9781449356569",
          title: "PHP Web Services",
          subtitle: "APIs for the Modern Web",
          isbn: "9781449356569",
          abstract:
            "Whether you're sharing data between two internal systems or building an API so users can access their data, this practical book provides everything you need to build web service APIs with PHP. Author Lorna Jane Mitchell uses code samples, real-world examples, and advice based on her extensive experi...",
          author: "Lorna Jane Mitchell",
          publisher: "O'Reilly Media",
          price: "$50.99",
          numPages: 118,
          isBookmarked: false,
        },
        {
          id: "9781449362966",
          title: "Programming 3D Applications with HTML5 and WebGL",
          subtitle: "3D Animation and Visualization for Web Pages",
          isbn: "9781449362966",
          abstract:
            "Create high-performance, visually stunning 3D applications for the Web, using HTML5 and related technologies such as CSS3 and WebGL - the emerging web graphics standard. With this book, you'll learn how to use the tools, frameworks, and libraries for building 3D models and animations, mind-blowing v...",
          author: "Tony Parisi",
          publisher: "O'Reilly Media",
          price: "$29.90",
          numPages: 404,
          isBookmarked: false,
        },
        {
          id: "9781449372620",
          title: "Flask Web Development",
          subtitle: "Developing Web Applications with Python",
          isbn: "9781449372620",
          abstract:
            "Take full creative control of your web applications with Flask, the Python-based microframework. With this hands-on book, you'll learn Flask from the ground up by developing a complete social blogging application step-by-step. Author Miguel Grinberg walks you through the framework's core functionali...",
          author: "Miguel Grinberg",
          publisher: "O'Reilly Media",
          price: "$14.00",
          numPages: 258,
          isBookmarked: false,
        },
        {
          id: "9781484201497",
          title: "The Manager's Guide to Web Application Security",
          subtitle: "A Concise Guide to the Weaker Side of the Web",
          isbn: "9781484201497",
          abstract:
            "The Manager's Guide to Web Application Security is a concise, information-packed guide to application security risks every organization faces, written in plain language, with guidance on how to deal with those issues quickly and effectively. Often, security vulnerabilities are difficult to understan...",
          author: "Ron Lepofsky",
          publisher: "Apress",
          price: "$57.12",
          numPages: 232,
          isBookmarked: false,
        },
        {
          id: "9781484209530",
          title: "Build your own 2D Game Engine and Create Great Web Games",
          subtitle: "Using HTML5, JavaScript, and WebGL",
          isbn: "9781484209530",
          abstract:
            "Build Your Own 2D Game Engine and Create Great Web Games teaches you how to develop your own web-based game engine step-by-step, allowing you to create a wide variety of online videogames that can be played in common web browsers. Chapters include examples and projects that gradually increase in com...",
          author: "Kelvin Sung, Jebediah Pavleas, Fernando Arnez, Jason Pace",
          publisher: "Apress",
          price: "$42.39",
          numPages: 496,
          isBookmarked: false,
        },
        {
          id: "9781484210536",
          title: "Web Development with Go",
          subtitle: "Building Scalable Web Apps and RESTful Services",
          isbn: "9781484210536",
          abstract:
            "Take a deep dive into web development using the Go programming language to build web apps and RESTful services to create reliable and efficient software. Web Development with Go provides Go language fundamentals and then moves on to advanced web development concepts and successful deployment of Go w...",
          author: "Shiju Varghese",
          publisher: "Apress",
          price: "$29.18",
          numPages: 312,
          isBookmarked: false,
        },
        {
          id: "9781484226094",
          title: "Web Applications with Elm",
          subtitle: "Functional Programming for the Web",
          isbn: "9781484226094",
          abstract:
            "Learn the basics of the Elm platform for web applications. This book covers the language as of version 0.18 and the most important libraries.After reading this book you will have an understanding what Elm can do for you. Also, you will be able to build on the example in the book to develop advanced ...",
          author: "Wolfgang Loder",
          publisher: "Apress",
          price: "$24.99",
          numPages: 208,
          isBookmarked: false,
        },
        {
          id: "9781484233832",
          title: "Practical Webix",
          subtitle: "Learn to Expedite and Improve your Web Development",
          isbn: "9781484233832",
          abstract:
            "Learn to create speedy cross-platform applications with ease using Webix. You will begin with an introduction to Webix and basic usage, exploring the interface components and utilities it offers, as well as the tools available (skin builder, form builder, and code snippet testing facility).You'll un...",
          author: "Frank Zammetti",
          publisher: "Apress",
          price: "$44.99",
          numPages: 407,
          isBookmarked: false,
        },
        {
          id: "9781484237380",
          title: "Practical Web Development with Haskell",
          subtitle:
            "Master the Essential Skills to Build Fast and Scalable Web Applications",
          isbn: "9781484237380",
          abstract:
            "Learn how to advance your skill level of Haskell, and use this language for practical web development. This book uses a direct, no nonsense approach, so you no longer need to spend extra time reading the documentation, blog posts, and forums to understand how to use Haskell - all that knowledge is p...",
          author: "Ecky Putrady",
          publisher: "Apress",
          price: "$27.57",
          numPages: 278,
          isBookmarked: false,
        },
        {
          id: "9781484238424",
          title: "Practical PHP 7, MySQL 8, and MariaDB Website Databases",
          subtitle:
            "A Simplified Approach to Developing Database-Driven Websites",
          isbn: "9781484238424",
          abstract:
            "Build interactive, database-driven websites with PHP 7, MySQL 8, and MariaDB. The focus of this book is on getting you up and running as quickly as possible with real-world applications. In the first two chapters, you will set up your development and testing environment, and then build your first PH...",
          author: "Adrian West, Steve Prettyman",
          publisher: "Apress",
          price: "$36.97",
          numPages: 546,
          isBookmarked: false,
        },
        {
          id: "9781484252772",
          title: "Ethereum for Web Developers",
          subtitle:
            "Learn to Build Web Applications on top of the Ethereum Blockchain",
          isbn: "9781484252772",
          abstract:
            "Technology is constantly evolving, and blockchain is taking development to new places, as mobile did a decade ago - and Ethereum is the leading platform for creating this new wave of applications. This book reveals everything you need to create a robust decentralized application (more commonly known...",
          author: "Santiago Palladino",
          publisher: "Apress",
          price: "$34.99",
          numPages: 328,
          isBookmarked: false,
        },
        {
          id: "9781484265888",
          title: "Practical Rust Web Projects",
          subtitle: "Building Cloud and Web-Based Applications",
          isbn: "9781484265888",
          abstract:
            "Go beyond the basics of Rust and build web and serverless cloud applications. The applications explained in this practical book include web sites, RESTful APIs, a real-time web chat application, and frontend application with WebAssembly. Each chapter is organized in the following format: what this k...",
          author: "Shing Lyu",
          publisher: "Apress",
          price: "$28.75",
          numPages: 256,
          isBookmarked: false,
        },
        {
          id: "9781491902592",
          title: "Using WebPagetest",
          subtitle: "Web Performance Testing for Novices and Power Users",
          isbn: "9781491902592",
          abstract:
            "Learn basic and advanced uses of WebPagetest, the performance measurement tool for optimizing websites. This practical guide shows users new to this tool how run tests and interpret results, and helps experienced users gain a better and more thorough understanding of hidden features in WebPagetest t...",
          author: "Rick Viscomi, Andy Davies, Marcel Duran",
          publisher: "O'Reilly Media",
          price: "$25.80",
          numPages: 214,
          isBookmarked: false,
        },
        {
          id: "9781491910290",
          title: "Web Scraping with Python",
          subtitle: "Collecting Data from the Modern Web",
          isbn: "9781491910290",
          abstract:
            "Learn web scraping and crawling techniques to access unlimited data from any web source in any format. With this practical guide, you'll learn how to use Python scripts and web APIs to gather and process data from thousands - or even millions - of web pages at once.Ideal for programmers, security pr...",
          author: "Ryan Mitchell",
          publisher: "O'Reilly Media",
          price: "$14.00",
          numPages: 256,
          isBookmarked: false,
        },
        {
          id: "9781491912553",
          title: "High Performance Mobile Web",
          subtitle: "Best Practices for Optimizing Mobile Web Apps",
          isbn: "9781491912553",
          abstract:
            "Optimize the performance of your mobile websites and webapps to the extreme. With this hands-on book, veteran mobile and web developer Maximiliano Firtman demonstrates which aspects of your site or app slow down the user's experience, and what you can do to achieve lightning-fast performance. There'...",
          author: "Maximiliano Firtman",
          publisher: "O'Reilly Media",
          price: "$7.00",
          numPages: 326,
          isBookmarked: false,
        },
        {
          id: "9781491915592",
          title: "Developing Web Apps with Haskell and Yesod, 2nd Edition",
          subtitle: "Safety-Driven Web Development",
          isbn: "9781491915592",
          abstract:
            "This fast-moving guide introduces web application development with Haskell and Yesod, a potent language/framework combination that supports high-performing applications that are modular, type-safe, and concise. Fully updated for Yesod 1.4, this second edition shows you how Yesod handles widgets, for...",
          author: "Michael Snoyman",
          publisher: "O'Reilly Media",
          price: "$29.99",
          numPages: 396,
          isBookmarked: false,
        },
        {
          id: "9781491933091",
          title: "PHP Web Services, 2nd Edition",
          subtitle: "APIs for the Modern Web",
          isbn: "9781491933091",
          abstract:
            "Whether you're sharing data between two internal systems or building an API so that users can access their data, this practical guide has everything you need to build APIs with PHP. Author Lorna Jane Mitchell provides lots of hands-on code samples, real-world examples, and advice based on her extens...",
          author: "Lorna Jane Mitchell",
          publisher: "O'Reilly Media",
          price: "$18.59",
          numPages: 180,
          isBookmarked: false,
        },
      ],
    };
  },
  computed: {
    tableHead() {
      let allBookProperties = Object.keys(this.books[0]);
      let tableHeadItems = allBookProperties.filter(
        (property) =>
          property === "title" ||
          property === "isbn" ||
          property === "author" ||
          property === "publisher" ||
          property === "price" ||
          property === "numPages"
      );
      return tableHeadItems;
    },
    booksOreilly() {
      return this.books.filter((book) => book.publisher === "O'Reilly Media");
    },
  },
  methods: {
    calcDiscountPrice(price) {
      let priceNum = isNaN(price[0]) // check if first character is NaN
        ? parseFloat(price.slice(1)) // if true, remove first character & turn string into number
        : parseFloat(price); // if false, turn string into number
      return "$" + (priceNum - priceNum * 0.2).toFixed(2); // calculate discount price with 20% discount & return string with 2 decimal places and $
    },
  },
}).mount("#app");
