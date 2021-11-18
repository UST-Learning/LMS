//import logo from './logo.svg';
import './App.css';
//import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import EditbookForm from './components/Editbook-form';
import AddbookForm from './components/Addbook-form';
import AdduserForm from './components/Adduser-form';
import EdituserForm from './components/Editbook-form';
import SearchbookForm from './components/Searchbook-form';
import ListuserForm from './components/Listuser-form';
import Form from './components/Login-form';
import AddcategoryForm from './components/Addcategory-form';
import EditcategoryForm from './components/Editcategory-form';
import BooktransactionForm from './components/Booktransactions-form'
export default ()=>{
  return(
    <>
    <div className="App">
      <div>
    

      </div>
      <header className="App-header">
        <h1>LMS</h1>
        <h2>Learning Management System</h2>
      </header>
      <Router>
     
      <Route path="/" exact component={Form}/>
      <Route path="/adduser" exact component={AdduserForm}/>
      <Route path="/searchbook" exact component={SearchbookForm}/>
     
    </Router>
    </div>
    
    </>
  )
};
