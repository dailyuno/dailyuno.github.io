module.exports = {
  markdown: {
    extractHeaders: {
      level: [2],
    },
  },
  themeConfig: {
    sidebarDepth: 3,
    sidebar: [
      {
        text: "Javascript",
        link: "/javascript/scope.md",
        children: ["/javascript/scope.md"],
      },
      {
        text: "React",
        link: "/react/init.md",
        children: [
          "/react/init.md",
          {
            text: "Hooks",
            links: "/react/hooks/init.md",
            children: [
              "/react/hooks/init.md",
              "/react/hooks/use-state.md",
              "/react/hooks/use-effect.md",
            ],
          },
        ],
      },
    ],
  },
};
