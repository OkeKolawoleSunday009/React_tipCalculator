import logo from './logo.svg';
import './App.css';
import DisplayingList from './DisplayingList'
import MyList from './MyList'
import TodoListApp from './TodoListApp';
import Contact from './contactManager/Contact';
import ClassCounterOne from './HOOks/ClassCounterOne';
import HookCounterOne from './HOOks/HookCounterOne';
import HookMouse from './HOOks/HookMouse';
import IntervalClassCounter from './HOOks/IntervalClassCounter';
import CreateArea from './KeeperApp.jsx/CreateArea';
// import Header from './TipCalc/Header';
// import Calculator from './TipCalc/Calculator';
import Header from './TipCalc/Header';
import Calculator from './TipCalc/Calculator';
// import "./index.css"



function App() {
 const onAdd = (note) =>{

  }
  return (
    <div >
      {/* <DisplayingList/> */}
      {/* <MyList/> */}
      {/* <TodoListApp/> */}
      {/* <Contact/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <IntervalClassCounter/> */}

      {/* <CreateArea
      onclick ={onAdd} /> */}
      <Header/>
      <Calculator/>
      
      
    </div>
  );
}

export default App;
