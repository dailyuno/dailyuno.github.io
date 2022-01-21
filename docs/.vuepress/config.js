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
        children: [
          "/javascript/scope.md",
          "/javascript/promise.md",
          "/javascript/async-await.md",
        ],
      },
      {
        text: "React",
        link: "/react/init.md",
        children: [
          "/react/init.md",
          "/react/context-api.md",
          "/react/higher-order-component.md",
        ],
      },
      {
        text: "React Hooks",
        link: "/react/hooks/init.md",
        children: [
          "/react/hooks/init.md",
          "/react/hooks/use-state.md",
          "/react/hooks/use-effect.md",
          "/react/hooks/use-context.md",
          "/react/hooks/use-ref.md",
          "/react/hooks/use-memo.md",
          "/react/hooks/use-callback.md",
        ],
      },
      {
        text: "Redux",
        link: "/redux/init.md",
        children: [
          "/redux/init.md",
          "/redux/connect.md",
          "/redux/use-dispatch.md",
          "/redux/use-selector.md",
          "/redux/reselect.md",
        ],
      },
      {
        text: "Computer Science",
        link: "/computer-science/functional-programming.md",
        children: ["/computer-science/functional-programming.md"],
      },
    ],
  },
};
