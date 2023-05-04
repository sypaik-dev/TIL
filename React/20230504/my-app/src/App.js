import './App.css';
import Menu from './components/menu/Menu.jsx'
import NewMenu from './components/newMenu/NewMenu.js'
import Time from './components/time/Time.jsx'

function TextArea() {
  return (
    <div class="wrapper">
      <textarea
        readOnly
        maxLength={3}
        style={{backgroundColor: "blue"}}
      />
    </div>
  );   
}

function App() {
  // 주석입니다!
  /**  주석입니다
   *
  */
 const name = "백설공주! ! ! !";
 const 변수 = "value";
 function 함수() {
  console.log('함수 함수!');
 }
 const 값 = true;

  return (
    <div className="App">
      {/**JSX 안의 주석입니다! */}
      <NewMenu />
      <Menu />
      <TextArea />
      <Time />
      {100 + 1}
      {`${[1, 2, 3]}`}
      {'hello' + 'world'}
      {값 ? 'one' : 'two'}
      {[1, 2, 3].map(x => x ** 2)}
      <header className="App-header">
        <h1>멋쟁이 사자처럼</h1>
        <strong>화이팅! {name}</strong>

      </header>
    </div>
  );
}

export default App;

