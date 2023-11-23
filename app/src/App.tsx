import React, { Component, useEffect } from 'react';
import { Home } from './pages/Home';
import './styles/main.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useLocation } from 'react-router-dom';
import { initLoad } from './scripts/init';
import { Error } from './pages/Error';
import { main } from './scripts/main';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';

main()

export default class App extends Component {

  componentDidMount(): void {
      initLoad()
  }

  render() { 
    return (
      <div className="app" id='app'>
        <BrowserRouter basename='/'>
          <Navbar />
          <Routes>

            <Route 
              path="/" 
              element={<Home />} 
              loader={Loader}/>
            <Route 
                path="/about" 
                element={<About />} 
                loader={Loader}/>
            <Route 
                path="/works" 
                element={<Home />} 
                loader={Loader}/>

          </Routes>  
          <Footer />
        </BrowserRouter>
        {/* <RouterProvider router={customRouter}/> */}

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    )
  }
}

/* 
const customRouter = createBrowserRouter([
  {
      path: '/',
      element: <Home />,
      loader,
      ErrorBoundary: Error,
  },
  {
      path: 'about',
      element: <About />,
      loader,
      ErrorBoundary: Error,
  },
  {
    path: '/',
    element: <Navbar />,
    loader,
    ErrorBoundary: Error,
    children: [
      {
        
      }
    ]
  }
]) */