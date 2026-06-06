// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-ホーム",
    title: "ホーム",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-プロフィール",
          title: "プロフィール",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/profile/";
          },
        },{id: "dropdown-研究内容",
              title: "研究内容",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/projects/";
              },
            },{id: "dropdown-出版物リスト",
              title: "出版物リスト",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/publications/";
              },
            },{id: "dropdown-発表リスト",
              title: "発表リスト",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/presentations/";
              },
            },{id: "dropdown-ソフトウェア",
              title: "ソフトウェア",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/works/software/";
              },
            },{id: "dropdown-web記事",
              title: "Web記事",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/works/articles/";
              },
            },{id: "dropdown-ノート",
              title: "ノート",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/works/research_notes/";
              },
            },{id: "nav-ニュース",
          title: "ニュース",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-ブログ",
          title: "ブログ",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-english",
          title: "English",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/en/";
          },
        },{id: "post-教科書読みの記録",
        
          title: "教科書読みの記録",
        
        description: "これまでに読んだ教科書",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/books/";
          
        },
      },{id: "post-演奏会への出演歴",
        
          title: "演奏会への出演歴",
        
        description: "合唱団員として舞台に立った主な演奏会",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/concerts/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-九州大学-次世代研究者挑戦的研究プログラム-院生融合研究プロジェクト-に採択されました",
          title: '九州大学 次世代研究者挑戦的研究プログラム「院生融合研究プロジェクト」に採択されました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-07-grant/";
            },},{id: "news-日本地球惑星科学連合-2025年大会にて口頭発表を行いました",
          title: '日本地球惑星科学連合 2025年大会にて口頭発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-27-presentation/";
            },},{id: "news-第30回-計算工学講演会にて口頭発表を行いました",
          title: '第30回 計算工学講演会にて口頭発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-05-presentation/";
            },},{id: "news-results-in-applied-mathematics-に論文が掲載されました",
          title: 'Results in Applied Mathematics に論文が掲載されました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-13-paper/";
            },},{id: "news-日本地球惑星科学連合-2025年大会にて学生優秀発表賞を受賞しました",
          title: '日本地球惑星科学連合 2025年大会にて学生優秀発表賞を受賞しました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-11-award/";
            },},{id: "news-惑星科学研究センターにて口頭発表-招待講演-を行いました",
          title: '惑星科学研究センターにて口頭発表（招待講演）を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-14-seminar/";
            },},{id: "news-ウェブサイトを全面的にリニューアルしました",
          title: 'ウェブサイトを全面的にリニューアルしました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-15-website/";
            },},{id: "news-惑星深部研究会-2026福岡にて口頭発表を行いました",
          title: '惑星深部研究会 2026福岡にて口頭発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-18-seminar/";
            },},{id: "news-jpgu-agu-joint-meeting-2026-にて口頭発表を行いました",
          title: 'JpGU-AGU Joint Meeting 2026 にて口頭発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-29-presentation/";
            },},{id: "news-第31回-計算工学講演会にて口頭発表を行いました",
          title: '第31回 計算工学講演会にて口頭発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-05-presentation/";
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
