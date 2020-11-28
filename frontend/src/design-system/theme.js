const lightTheme = {
  colors: {
    scale_0: "#000",
    scale_1: "#212121",
    scale_2: "#2b2b2b",
    scale_3: "#4b4b4b",
    scale_4: "#c4c4c4",
    scale_5: "#e6e6e6",
    scale_6: "#fff",
    invalid: "#ba1a1a",
    valid: "#0ca3d6",
    footer: "#212121",
    footer_text: "#e6e6e6",
    footer_text_hover: "#c4c4c4",
    social_icon_hover: "#e6e6e6",
    card_overlay: "rgba(255, 255, 255, 0.5)",
    project_card_overlay: "rgba(0, 0, 0, 0.5)",
    card_gradient: `linear-gradient(
      217deg,
      rgba(200, 200, 200, 0.8),
      rgba(200, 200, 200, 0) 70.71%
    ),
    linear-gradient(
      127deg,
      rgba(127, 127, 127, 0.8),
      rgba(127, 127, 127, 0) 70.71%
    ),
    linear-gradient(336deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70.71%);`,
    box_shadow: `rgba(0, 0, 0, 0.25)`,
    recencyIndicator: {
      red: "#FF5F56",
      yellow: "#FFBD2E",
      green: "#27C93F",
    },
  },
  measurements: {
    footerHeight: 7,
    footerHeightMobile: 5,
    breakpointMobileNav: 767,
  },
  activeNavStyles: {
    textDecoration: "line-through",
  },
  text: {
    baseMonoMixin: `
      font-family: "Roboto Mono", monospace;
      font-weight: 400;
      letter-spacing: -0.5px;
      color: ${props => props.theme.colors.scale_2};
      opacity: 0.8;`,
  },
}

const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    scale_6: "#000",
    scale_5: "#212121",
    scale_4: "#2b2b2b",
    scale_3: "#4b4b4b",
    scale_2: "#c4c4c4",
    scale_1: "#e6e6e6",
    scale_0: "#fff",
    footer: "#2b2b2b",
    footer_text: "#e6e6e6",
    footer_text_hover: "#c4c4c4",
    social_icon_hover: "#212121",
    card_overlay: "rgba(0, 0, 0, 0.45)",
    project_card_overlay: "rgba(0, 0, 0, 0.35)",
    card_gradient: `linear-gradient(
      217deg,
      rgba(25, 25, 25, 0.8),
      rgba(25, 25, 25, 0) 70.71%
    ),
    linear-gradient(
      127deg,
      rgba(75, 75, 75, 0.8),
      rgba(75, 75, 75, 0) 70.71%
    ),
    linear-gradient(336deg, rgba(50, 50, 50, 0.8), rgba(50, 50, 50, 0) 70.71%);`,
    box_shadow: `rgba(255, 255, 255, 0.15)`,
  },
}

module.exports = { lightTheme, darkTheme }
