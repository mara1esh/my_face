import React, { useState } from "react";
import "./App.scss";

import Loading from "./containers/Loading";
import Summary from "./Summary";

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: "#2A96FF"
    },
    brandPrimary: { main: "#386FA4" },
    brandRed: { main: "#E90100" },
    brandPurple: { main: "#630460" }
  },
  typography: {
    fontFamily: "ZCOOL QingKe HuangYou",
    h4: {
      fontSize: "2em",
      "@media (max-width:600px)": {
        fontSize: "1.7em"
      }
    },
    body1: {
      fontSize: "1em",
      "@media (max-width:600px)": {
        fontSize: "1.2em"
      }
    }
  },
  spacing: 10
});

function App() {
  const [isGreetingLoaded, setLoaded] = useState(false);
  const loadingProps = {
    setLoaded
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="background-container">
          {/* remove ! operator below */}
          {!isGreetingLoaded ? <Summary /> : <Loading {...loadingProps} />}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
