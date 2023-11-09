import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';

const App = () => {
  const [theme, setTheme] = useState("light");

  const handelTheme = () => {

    const toggleButton = document.getElementById("theme")
    if (toggleButton.checked) {
      setTheme("dark");
    } else {
      setTheme("light")
    }
  }

  return (
    <div data-theme={theme}>
      <Header handelTheme={handelTheme}></Header>
      <Hero></Hero>
    </div>
  );
};

export default App;