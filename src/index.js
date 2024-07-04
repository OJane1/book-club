import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from "./context";
import './App.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Trends from"./pages/Trends/Trends";
import BookList from './components/BookList/BookList';
import BookDetails from "./components/BookDetails/BookDetails";
import Layout from "./components/Layout";
import MyList from './pages/My Books/MyList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
        <Route index element={<Home />} />
          <Route path = "home" element = {<Home />} />
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path = "trends" element = {<Trends />} />
          <Route path = "my books" element = {<MyList />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
