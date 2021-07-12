import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Home from './routes/Home'
import Admin from './routes/Admin'
import Trains from './routes/Trains'
import Liders from './routes/Liders'
import Keys from './routes/Keys'
import Support from './routes/Support'

import Menu from './modules/Menu/Menu'
import {Header} from './modules/Header/Header'
import {THEME} from './theme.js'
import Peoples from './routes/Peoples';
import CreatePeople from './routes/CreatePeople';
import Politic from './routes/create/Politic';
import DataTrue from './routes/create/DataTrue';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{	width: '15%',
      				backgroundColor: THEME.MAIN_COLOR, 
      				height: '100vh', 
      				padding: '20px'}}
      				>
      	<Menu />
      </div>
      <div style={{width: '85%'}}>
        <Header />
      	<div style={{padding: '20px'}}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/admin' component={Admin} />        
            <Route path='/trains' component={Trains} />        
            <Route path='/liders' component={Liders} />        
            <Route path='/keys' component={Keys} />        
            <Route path='/support' component={Support} />        
            <Route path='/peoples' exact component={Peoples} />        
            <Route path='/peoples/create' exact component={CreatePeople} />        
            <Route path='/peoples/politic' exact component={Politic} />        
            <Route path='/peoples/datatrue' exact component={DataTrue} />        
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
