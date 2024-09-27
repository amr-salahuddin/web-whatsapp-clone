// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    1: '#647781',
    2: '#3e525d',
    3: '#000000',
    4: '#00ac85',
    5: '#dbf3da',
    6: '#d5ffd4'
  },
};

const paletteMode = (mode) => {
  return {
    mode,

    ...(mode === "dark"
      ? {
        // palette values for dark mode
        primary: {
          dark: colorTokens.primary[200],
          main: colorTokens.primary[500],
          light: colorTokens.primary[800],
        },
        neutral: {
          dark: colorTokens.grey[100],
          main: colorTokens.grey[200],
          mediumMain: colorTokens.grey[300],
          medium: colorTokens.grey[400],
          light: colorTokens.grey[700],
        },
        background: {
          default: colorTokens.grey[900],
          alt: colorTokens.grey[800],
        },
      }
      : {
        // palette values for light mode
        primary: {
          dark: colorTokens.primary[3],
          main: colorTokens.primary[2],
          light: colorTokens.primary[1],
          green: colorTokens.primary[4],
        },
        neutral: {
          dark: colorTokens.grey[700],
          main: colorTokens.grey[500],
          mediumMain: colorTokens.grey[400],
          medium: colorTokens.grey[300],
          light: colorTokens.grey[50],
        },
        background: {
          default: colorTokens.grey[0],
          alt: colorTokens.grey[50],
          green: colorTokens.primary[6],
        },
      })
  }
}
// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: paletteMode(mode),
    typography: {

      fontFamily: ["Ubuntu", "Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Ubuntu", "Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Ubuntu", "Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Ubuntu", "Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Ubuntu", "Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Ubuntu", "Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Ubuntu", "Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
      subtitle1: {
        fontFamily: ["Consolas", "Rubik", "sans-serif"].join(","),
        fontSize: 12,
        color: paletteMode(mode).primary.light,
        fontWeight:100

      }, 
       subtitle2: {
        fontFamily: ["", "Rubik", "sans-serif"].join(","),
        fontSize: 13,
        color: paletteMode(mode).primary.light,
        fontWeight:100

      },
      body1:{
        fontFamily:["SF Pro Text", "SF Pro Icons", 'system', '-apple-system', 'system-ui', 'BlinkMacSystemFont', "Segoe UI", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande", 'Ubuntu', 'Cantarell', "Fira Sans", 'sans-serif'].join(","),
        fontWeight:200
      }

    },


    //change iconbutton color
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: colorTokens.grey[500],
          },

        },

        defaultProps: {
          disableRipple: true
        }

      },
      Box:{
        styleOverrides: {
          root: {
          }
        },
        defaultProps: {
          suppressContentEditableWarning:true

        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            // Change placeholder color and font globally
            "&::placeholder": {
              color: "gray",    // Set your desired color
              opacity: 1,       // Ensure the color opacity is not too faint
              fontSize: "14px",   // Example: set font size
              fontFamily: "Courier", // Example: set font family
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 400,
            minWidth: 'auto'


          },
        },
      },
    },
  };
};