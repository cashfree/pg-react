export interface ThemeStyle {
  fonts: { cssSrc: string }[];
  base: {
    fontSize: string;
    fontFamily: string;
    backgroundColor: string;
    ":focus"?: {  // Allow ":focus" in base as optional
      border: string;
    };
    border: string;
    borderRadius: string;
    padding: string;
    color: string;
  };
  invalid: {
    color: string;
  };
  cardlayoutBackground: string;
}

export const themes: Record<string, ThemeStyle>  = {
  light: {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css2?family=Lato&display=swap",
      },
    ],
    base: {
      fontSize: "16px",
      fontFamily: "Lato",
      backgroundColor: "#FFFFFF",
      ":focus": {
        border: "1px solid #2361d5",
      },
      border: "1px solid #e6e6e6",
      borderRadius: "5px",
      padding: "16px",
      color: "#000000",
    },
    invalid: {
      color: "#df1b41",
    },
    cardlayoutBackground: "#f6f9fb",
  },
  dark: {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css2?family=Oxanium&display=swap",
      },
    ],
    base: {
      fontSize: "16px",
      fontFamily: "Oxanium",
      backgroundColor: "#30313d",
      ":focus": {
        border: "1px solid #55ca6d",
      },
      border: "1px solid #424353",
      borderRadius: "5px",
      padding: "16px",
      color: "#ffffff",
    },
    invalid: {
      color: "#fe87a1",
    },
    cardlayoutBackground: "#1a1c2f",
  },
  pink: {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css2?family=Schoolbell&display=swap",
      },
    ],
    base: {
      fontSize: "16px",
      fontFamily: "Schoolbell",
      backgroundColor: "#ffffff",
      ":focus": {
        border: "1px solid #cd3547",
      },
      border: "1px solid #e6e6e6",
      borderRadius: "5px",
      padding: "16px",
      color: "#000000",
    },
    invalid: {
      color: "#de4156",
    },
    cardlayoutBackground: "#fcdcf4",
  },
  purple: {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css2?family=Jaldi&display=swap",
      },
    ],
    base: {
      fontSize: "16px",
      fontFamily: "Jaldi",
      backgroundColor: "#ffffff",
      ":focus": {
        border: "none",
      },
      border: "none",
      borderRadius: "0px",
      padding: "16px",
      color: "#000000",
    },
    invalid: {
      color: "#fd8098",
    },
    cardlayoutBackground: "#f8f8f8",
  },
  gray: {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css2?family=B612+Mono&display=swap",
      },
    ],
    base: {
      fontSize: "16px",
      fontFamily: "B612 Mono",
      backgroundColor: "#ffffff",
      ":focus": {
        border: "1px solid #808080",
      },
      border: "1px solid #a4acb9",
      borderRadius: "5px",
      padding: "16px",
      color: "#000000",
    },
    invalid: {
      color: "#bdc4cd",
    },
    cardlayoutBackground: "#bdc4cd",
  },
  pastel: {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css2?family=Oxygen&display=swap",
      },
    ],
    base: {
      fontSize: "16px",
      fontFamily: "Oxygen",
      backgroundColor: "#ffffff",
      ":focus": {
        border: "1px solid #3478f6",
      },
      border: "1px solid #a6a7b0",
      borderRadius: "5px",
      padding: "16px",
      color: "#2B2D42",
    },
    invalid: {
      color: "#cb2c2c",
    },
    cardlayoutBackground: "#f7f9ff",
  },
};
