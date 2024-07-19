// import React from "react";

// function Search() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("submitted");
//   }

//   return (
//     <form className="searchbar" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="search"
//         placeholder="search free stuff"
//         value={""}
//         onChange={(e) => console.log(e.target.value)}
//       />
//       <button type="submit">🔍</button>
//     </form>
//   );
// }

// export default Search;original code






import React from "react";

function Search({searchItem, handleSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    
  }

  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

