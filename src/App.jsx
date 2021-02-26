import { Switch, Route } from "react-router-dom"

import "./App.css";

import Main from "./Components/Main";
import Posts from "./Components/Posts"
import Post from "./Components/Post"
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Posts />
        </Route>

        <Main>
          <Route path="/posts/:id">
            <Post />
          </Route>
        </Main>
      </Switch>

    </>
  )
}

export default App