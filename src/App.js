import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SimpleExample from './class-works/cw1/SimpleExample'
import UserList from "./class-works/cw1/UserList";
import Week1 from "./home-works/hw1/Week1";
import CompositionExample from "./class-works/cw2/compositions-example/CompositionExample";
import Blog from "./class-works/cw2/life-cycle-example/Blog";
import Clock from "./class-works/cw2/life-cycle-example/Clock";
import AutofocusInput from "./class-works/cw2/refs/AutofocusInput";
import Glider from './home-works/hw2/glider';
import Counter, { CounterFunction, MouseTrackerExample} from './class-works/cw3/HooksExamples';
import { LocalStorage } from './home-works/hw4/useLocalStorage';
import { OnlineStatus } from './home-works/hw4/userIsOnline';
import { DocumentTitle } from './home-works/hw4/useDocumentTitle';
import BlogV2 from './home-works/hw5/Blog';
import TodoApp from "./class-works/cw5/ReduxApp/TodoApp";
import ProductsApp from './home-works/hw6/ReduxApp/ProductsApp';
import RedditApp from './class-works/cw6/RedditApp/RedditApp';
import RedditApp2 from './home-works/hw7/RedditApp/RedditApp';
import CW7 from './class-works/cw7/App';
import HW9 from './home-works/hw9/App';



class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <HW9/>
      </div>
    )
  }
}

export default App;
