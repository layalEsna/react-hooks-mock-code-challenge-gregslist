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
import Sort from "./Sort"
import Form from "./Form"
function App() {
  const [lists, setLists] = useState([])
  const [isToggled, setToggled] = useState({})
  const [searchItem, setSearchItem] = useState('')
  const [newItem, setNewItem] = useState({
    description: '',
    image: '',
    location: ''
  })
  
  

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => {
      setLists(data)
    })
    
  }, [])

  function handleSearch(name) {
    setSearchItem(name)
  }
  const searchedItem = lists.filter(item => item.description.toLowerCase().includes(searchItem.toLowerCase()))

  function handleAddItem() {
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then(res => res.json())
      .then(data => {
        setLists(prev=> [...prev, data])
        setNewItem({
          description: '',
    image: '',
    location: ''
        })
      })
    .catch(e=>console.error(e))
   
  }

  function handleSort() {
    setLists([...lists].sort((a, b) => a.location.localeCompare(b.location)))

}
  
  function handleToggle(itemId) {
    setToggled(prev => ({
      ...prev, [itemId]: !prev[itemId]
    }))
  }
  // function handleSearch(name) {
  // setSearchItem(name)
  // }
  //const listToRender = lists.filter(item => item.description.toLowerCase().includes(searchItem.toLowerCase()))
  
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
      <Form
        handleAddItem={handleAddItem}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <Search
        handleSearch={handleSearch}
        searchItem={searchItem}
      // searchItem={searchItem}
      // handleSearch={handleSearch}
      />
      <ListingsContainer
        lists={searchedItem}
        handleToggle={handleToggle}
        isToggled={isToggled}
        handleDelete={handleDelete}
        
      />
      <Sort
        handleSort={handleSort}
        
      />
    </div>
  );
}

export default App;     
