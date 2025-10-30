import React from 'react';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';

class App extends React.Component {
  render() {
    return <>
    {/* <> represents a React Fragment */}
        <Header />
        <Banner />
    </>
  }
}
export default App;