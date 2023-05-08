import DisplayMood from './Components/DisplayMood/DisplayMood'
import MenuList from './Components/MenuList/MenuList'

function App() {

  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <MenuList />
      <DisplayMood />
    </div>
  );
}
export default App;
