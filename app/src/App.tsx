import React, { Component, useEffect, useState } from 'react';
import { Home } from './pages/Home';
import './styles/main.css'
import './styles/colors.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useLocation } from 'react-router-dom';
import { initLoad } from './scripts/init';
import { Error } from './pages/Error';
import { main } from './scripts/main';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';
import { Testing } from './pages/Testing';
import { MyWork } from './pages/MyWork';
import { Work } from './pages/Work';

main()

interface AppState {
  enableNavbar: boolean
  enableFooter: boolean
}

interface AppArgs {

}

export default class App extends Component<AppArgs> {
  state: Readonly<AppState>;

  constructor(args: AppArgs) {
    super(args)

    this.state = {
      enableNavbar: true,
      enableFooter: true,
    }
    this.setState = this.setState.bind(this)
  }

  componentDidMount(): void {
      initLoad()
  }

  render() { 
    return (
      <div className="app lightTheme" id='app'>
        <BrowserRouter basename='/'>
          { this.state.enableNavbar && <Navbar />}
          <Routes>

            <Route 
              path="/" 
              element={<Home setAppState={this.setState} />} 
              loader={Loader}/>
            <Route 
                path="/About" 
                element={<About setAppState={this.setState} />} 
                loader={Loader}/>
            <Route 
                path="/Works" 
                element={<MyWork setAppState={this.setState} />} 
                loader={Loader}/>
            <Route 
                path="/WorkExample" 
                element={<Work setAppState={this.setState} title='Title' description='description' />} 
                loader={Loader}/>
            <Route 
                path="/Testing" 
                element={<Testing setAppState={this.setState} />} 
                loader={Loader}/>

          </Routes>  
          {this.state.enableFooter && <Footer />}
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