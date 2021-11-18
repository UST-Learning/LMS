//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import EditForm from './components/Editbook-form';
import AddForm from './components/Addbook-form'
import AdduserForm from './components/Adduser-form'

import EdituserForm from './components/Editbook-form'
import SearchbookForm from './components/Searchbook-form';

import Form from './components/Login-form';

export default ()=>{
  return(
    <>
    <Router>
     
      <Route path="/" exact component={Form}/>
      <Route path="/adduser" exact component={AdduserForm}/>
      <Route path="/searchbook" exact component={SearchbookForm}/>
     
    </Router>
    </>
  )
};
