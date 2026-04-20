// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-apprendre-ensemble-les-autres-comme-moteurs-ou-freins-de-notre-curiosité",
        
          title: "Apprendre ensemble : les autres comme moteurs (ou freins ?) de notre curiosité...",
        
        description: "Comment la présence, le regard et l’activité des autres influencent-ils notre motivation à apprendre et notre curiosité ?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/influence-sociale-curiosite-french/";
          
        },
      },{id: "post-learning-together-how-others-can-fuel-or-hinder-our-curiosity",
        
          title: "Learning together: how others can fuel (or hinder) our curiosity",
        
        description: "How do the presence, gaze, and activity of others influence our motivation to learn and our curiosity?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/influence-sociale-curiosite-english/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-blog-post-available-in-english-and-french-learning-together-how-others-can-fuel-or-hinder-our-curiosity-apprendre-ensemble-les-autres-comme-moteurs-ou-freins-de-notre-curiosité",
          title: 'New blog post available (in English and French): Learning together: how others can...',
          description: "",
          section: "News",},{id: "news-i-will-be-taking-part-in-the-upcoming-pint-of-science-festival-in-bordeaux-taking-place-from-may-18th-to-20th-this-international-event-brings-researchers-into-local-bars-to-share-and-discuss-science-with-the-public-in-an-informal-setting-book-your-spot-here",
          title: 'I will be taking part in the upcoming Pint of Science festival in...',
          description: "",
          section: "News",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-bd-inscience-inserm-project",
          title: 'BD InScience INSERM project',
          description: "My PhD work was adapted into a comic book format.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BD_project/";
            },},{id: "projects-ecosoc-project",
          title: 'ECOSOC project',
          description: "In collaboration with Emilie Caspar, Damien Brevers and Claus Lamm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ECOSOC_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%73%6C%69%65.%74%72%69%63%6F%63%68%65@%69%6E%72%69%61.%66%72", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/leslie-tricoche-10094a137", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/leslie-tricoche.bsky.social", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
