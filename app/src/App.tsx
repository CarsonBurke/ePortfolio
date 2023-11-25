import React, { Component, useEffect, useState } from 'react';
import { Home } from './pages/Home';
import './styles/main.css'
import './styles/colors.css'
import './styles/sizing.css'
import './styles/interactible.css'
import { BrowserRouter, Route, RouterProvider, Routes, ScrollRestoration, createBrowserRouter, useLocation } from 'react-router-dom';
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
                path="/about" 
                element={<About setAppState={this.setState} />} 
                loader={Loader}/>
            <Route 
                path="/works" 
                element={<MyWork setAppState={this.setState} />} 
                loader={Loader}/>
            <Route 
              path="/work/:id" 
              element={<Work setAppState={this.setState} />} 
              loader={Loader}
              errorElement={<Error errorCode={404} setAppState={this.setState}/>}
              />
            <Route 
                path="/testing" 
                element={<Testing setAppState={this.setState} />} 
                loader={Loader}/>

            <Route path='*' element={<Error setAppState={this.setState} errorCode={404} />} loader={Loader} />
          </Routes>  
          {this.state.enableFooter && <Footer />}
          {/* <ScrollRestoration /> */}
        </BrowserRouter>
        {/* <RouterProvider router={customRouter}/> */}
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