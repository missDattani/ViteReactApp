import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["Ahmedabad", "Rajkot", "Jamnagar", "Okha"];

  // const handleSelectItem = (item : string) => {
  //   console.log(item);
  // }

  return (
    <div>
      <Alert>Hello <span>World</span></Alert>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}
    </div>
  );
}

export default App;
