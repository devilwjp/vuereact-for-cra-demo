import React from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config'
import { HashRouter, Link } from 'react-router-dom'
import routers from './router'

function App() {

  return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <div>
                <Link to="/">Home</Link> |&nbsp;
              <Link to="/vueInReact1">在react组件中引用vue组件</Link> |&nbsp;
              <Link to="/vueInReact2">在react组件中引用vue组件(advanced)</Link> |&nbsp;
                <Link to="/eleInReact">在react组件中使用vue的element-ui复杂demo</Link>
            </div>
            {renderRoutes(routers)}
          </header>
        </div>
      </HashRouter>
  );
}

export default App;
