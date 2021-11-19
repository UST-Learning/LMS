//import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from './components/footer';

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import EditForm from './components/Editbook-form';
import AddForm from './components/Addbook-form'
import AdduserForm from './components/Adduser-form'

import EdituserForm from './components/Editbook-form'
import SearchbookForm from './components/Searchbook-form';

import Forms from './components/Login-form';

//<h1>LMS</h1>
//<h2>Learning Management System</h2>
export default () => {
  return (
    <>
      <div className="App">
        <Header />
        <header className="App-header">



          <Router>

            <Route path="/" exact component={Forms} />
            <Route path="/adduser" exact component={AdduserForm} />
            <Route path="/searchbook" exact component={SearchbookForm} />

          </Router>
        </header>

        <footer>
          <Footer />
        </footer>

      </div>

    </>
  )
};