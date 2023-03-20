import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { FormikBasic } from '../03-forms/Pages/FormikBasic';
import { FormikYup } from '../03-forms/Pages/FormikYup';
import { FormikAbtraction } from '../03-forms/Pages/FormikYupAbstraction';
import { FormikYupComponents } from '../03-forms/Pages/FormikYupComponents';
import { RegisterPage } from '../03-forms/Pages/RegisterPage';

import logo from '../logo.svg';

export const Navigation = () => (
  <Router>
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/register-page" activeClassName="nav-active" exact>Register Page</NavLink>
          </li>
          <li>
            <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
          </li>
          <li>
            <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
          </li>
          <li>
            <NavLink to="/formik-yup-components" activeClassName="nav-active" exact>Formik Yup Components</NavLink>
          </li>
          <li>
            <NavLink to="/formik-yup-abstraction" activeClassName="nav-active" exact>Formik Yup Abstraction</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/register-page">
          <RegisterPage />
        </Route>
        <Route path="/formik-basic">
          <FormikBasic />
        </Route>
        <Route path="/formik-yup">
          <FormikYup />
        </Route>
        <Route path="/formik-yup-components">
          <FormikYupComponents />
        </Route>
        <Route path="/formik-yup-abstraction">
          <FormikAbtraction />
        </Route>
        <Route path="/users">
          <h1>Users</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  </Router>
)