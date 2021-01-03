import React from "react";
import { Switch, Route } from "react-router-dom";
import Tables from "./Tables";
import Login from "./Login";

const Homepage = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/student">
        <Tables />
      </Route>
      <Route path="/sem-1">
        <Tables type="Semester 1" />
      </Route>
      <Route path="/sem-2">
        <Tables type="Semester 2" />
      </Route>
      <Route path="/sem-3">
        <Tables type="Semester 3" />
      </Route>
      <Route path="/sem-4">
        <Tables type="Semester 4" />
      </Route>
      <Route path="/sem-5">
        <Tables type="Semester 5" />
      </Route>
      <Route path="/sem-6">
        <Tables type="Semester 6" />
      </Route>
      <Route path="/sem-7">
        <Tables type="Semester 7" />
      </Route>
      <Route path="/sem-8">
        <Tables type="Semester 8" />
      </Route>
      <Route path="/sem-9">
        <Tables type="Semester 9" />
      </Route>
      <Route path="/sem-10">
        <Tables type="Semester 10" />
      </Route>
    </Switch>
  );
};

export default Homepage;
