import React from 'react';
import Post from './container/Post';
import About from './container/Post';
import { Route,Switch } from 'react-router-dom';
import Detail from './component/Detail';
import Footer from './props/About'

class App extends React.Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/" exact component={Post} />
                    <Route path="/home/:id" component={Detail} /> 
                </Switch>
          <Footer />
            </div>
        )
    }
}

export default App;
