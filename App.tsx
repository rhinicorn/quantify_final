require('dotenv').config()
const express = require('express')
const app=express()
const port=5432

import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AddItems from "./components/Additems";
//import Items from "./components/Items";
//import ItemsList from "./components/ItemsList";

import './App.css';

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DBNAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      //native: true,
      dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
      }
    }
  );

((async() => {
    try{
        await sequelize.authenticate();
        console.log("connection successful");
    } catch (error) {
        console.error("unable to connect", error);
    }
})());


class App extends Component {
  /* const [sessionToken, setSessionToken] = useState('');
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    
  }
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    window.location.href='/'
  } */
  
  /*   const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <ForumDisplay token={sessionToken} />
      : <Auth updateToken={updateToken} />)
  } */
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/items" className="navbar-brand">
            QuantifyIt
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/items"} className="nav-link">
                Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/items"]} component={ItemsList} />
            <Route exact path="/create" component={AddItems} />
            <Route path="/items/:id" component={Items} />
            <Route path="/items/:cat" component={ItemsCat} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

  
  