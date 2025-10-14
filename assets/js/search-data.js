// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-profile",
          title: "Profile",
          description: "プロフィール",
          section: "Navigation",
          handler: () => {
            window.location.href = "/profile/";
          },
        },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/projects/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/publications/";
              },
            },{id: "dropdown-presentations",
              title: "Presentations",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/presentations/";
              },
            },{id: "dropdown-software",
              title: "Software",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/works/software/";
              },
            },{id: "dropdown-articles",
              title: "Articles",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/works/articles/";
              },
            },{id: "dropdown-research-notes",
              title: "Research Notes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/works/research_notes/";
              },
            },{id: "nav-news",
          title: "News",
          description: "過去のお知らせ",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-輪読の記録",
        
          title: "輪読の記録",
        
        description: "これまでに輪読した本たち",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rindoku/";
          
        },
      },{id: "post-合唱の記録",
        
          title: "合唱の記録",
        
        description: "出演した演奏会",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/concerts/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-研究費採択-九州大学-次世代研究者挑戦的研究プログラム-院生融合研究プロジェクト-に採択されました",
          title: '【研究費採択】九州大学 次世代研究者挑戦的研究プログラム「院生融合研究プロジェクト」に採択されました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-07-grant/";
            },},{id: "news-学会発表-日本地球惑星科学連合2025年大会-にて口頭発表を行いました",
          title: '【学会発表】「日本地球惑星科学連合2025年大会」にて口頭発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-27-presentation/";
            },},{id: "news-学会発表-第30回-計算工学講演会-にて口頭発表を行いました",
          title: '【学会発表】「第30回 計算工学講演会」にて口頭発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-05-presentation/";
            },},{id: "news-論文掲載-results-in-applied-mathematics-に論文が掲載されました",
          title: '【論文掲載】Results in Applied Mathematics に論文が掲載されました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-13-paper/";
            },},{id: "news-受賞-日本地球惑星科学連合2025年大会-にて学生優秀発表賞を受賞しました",
          title: '【受賞】「日本地球惑星科学連合2025年大会」にて学生優秀発表賞を受賞しました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-11-award/";
            },},{id: "news-セミナー発表-惑星科学研究センター-cps-にて口頭発表を行いました",
          title: '【セミナー発表】惑星科学研究センター（CPS）にて口頭発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-14-seminar/";
            },},{id: "news-お知らせ-ウェブサイトをリニューアルしました",
          title: '【お知らせ】ウェブサイトをリニューアルしました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-14-website/";
            },},{id: "projects-高精度sph法",
          title: '高精度SPH法',
          description: "最小二乗SPH (LS-SPH) の開発",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_LSSPH/";
            },},{id: "projects-マントル対流の陽解法化",
          title: 'マントル対流の陽解法化',
          description: "音速低減法と慣性変化法の統合",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_mantle_convection/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JNwnO24AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-4453-5398", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shobuzako-kensuke", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Kensuke-Shobuzako/", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/zakoken1998", "_blank");
        },
      },{
        id: 'social-research_map',
        title: 'Research_map',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
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
