module.exports = {
  markdown: {
    extractHeaders: {
      level: [],
    },
  },
  themeConfig: {
    sidebarDepth: 3,
    sidebar: [
      {
        text: "HTML",
        link: "/html/tags.md",
        children: [
          "/html/tags.md",
          "/html/semantic-tags.md",
          "/html/attributes.md",
        ],
      },
      {
        text: "CSS",
        link: "/css/flex.md",
        children: ["/css/flex.md"],
      },
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
          "/react/hooks/init.md",
          "/react/hooks/use-state.md",
          "/react/hooks/use-effect.md",
          "/react/hooks/use-context.md",
        ],
      },
    ],
  },
};
