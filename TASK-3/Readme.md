![Screenshot 2023-11-09 171541](https://github.com/Bavadharini18/VM_REACTROUTER-REDUX/assets/130160473/2285ce4e-02d4-4c62-92f9-d430a101369e)
![Screenshot 2023-11-09 171548](https://github.com/Bavadharini18/VM_REACTROUTER-REDUX/assets/130160473/e0875dc8-290a-42d8-b677-64db7fcdf1ab)
![Screenshot 2023-11-09 171524](https://github.com/Bavadharini18/VM_REACTROUTER-REDUX/assets/130160473/684837e2-e061-46d3-b0cb-9858ed6ce9a4)

react router dom

react-router: Contains the core functionality of React Router, including route-matching algorithms and hooks.

react-router-dom: Includes everything in react-router and adds a few DOM-specific APIs.

installing package
--->npm install react-router-dom

code

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';

function App() {
 return (
  <BrowserRouter>
   <div><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
   </div>
  </BrowserRouter>
 );
}

nested routes pannalam
custom 404 page pannalam


file location

documents->myreact->router project

desktop ->react-app1 ->my-app ->redux project

desktop ->redux ->app ->shopping cart project


redux-react

two types irukku-> react-redux,redux-toolkit 

redux toolkit->provides the necessary tools to simplify react development
react-redux ->normal redux tool

Redux is an open-source JavaScript library used to manage application state.

state->The state object is where you store property values that belong to the component.
The state is a built-in React object that is used to contain data or information about the component.
local state->prop drilling happens one to one to one 
global state-> maintaing state in global is called global state athukku tha redux use pandrom


npm install @reduxjs/toolkit
npm install react-redux

react->data flows one way from parent to chlid components(manage their own state internally)
redux -> one way from actions to reducers to store and then components(maintains outside the components)

store-> bank {money stored}
stores whole state tree of your application;

cashier->reducers

bank balance check ->use selectors [can perform without reducers]

chalan -> action creators ->request is made with action creators

data sharing manage pannuthu

predictable
centralized
debugging

The useSelector hook is used to extract the state of a component from the redux store using the selector function. The useDispatch hook is used to update the state of the component and return a new state.

Slice

A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state


