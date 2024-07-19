// import React from "react";
// import Header from "./Header";
// import ListingsContainer from "./ListingsContainer";

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <ListingsContainer />
//     </div>
//   );
// }

// export default App; orihinal code //////////






import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";

function App() {
  const [lists, setLists] = useState([])
  const [isToggled, setToggled] = useState({})
  const [searchItem, setSearchItem] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => {
      setLists(data)
    })
    
  }, [])
//   function handleToggle(itemId) {
//     setToggled(prev => ({
//     ...prev, [itemId]: !prev[itemId]
//   }))
  // }
  
  function handleToggle(itemId) {
    setToggled(prev => ({
      ...prev, [itemId]: !prev[itemId]
    }))
  }
  function handleSearch(name) {
  setSearchItem(name)
  }
  const listToRender = lists.filter(item => item.description.toLowerCase().includes(searchItem.toLowerCase()))
  
  function handleDelete(lId) {
    fetch(`http://localhost:6001/listings/${lId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          const dletedList = lists.filter(item => item.id !== lId)
          setLists(dletedList)
      }
    })
  }
  return (
    <div className="app">
      <Header />
      <Search
      searchItem={searchItem}
      handleSearch={handleSearch}
      />
      <ListingsContainer
        lists={listToRender}
        handleToggle={handleToggle}
        isToggled={isToggled}
        handleDelete={handleDelete}
        
      />
    </div>
  );
}

export default App;     
