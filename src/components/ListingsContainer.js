// import React from "react";
// // import ListingCard from "./ListingCard";

// function ListingsContainer() {
//   return (
//     <main>
//       <ul className="cards">
//         {/* use the ListingCard component to display listings */}
//       </ul>
//     </main>
//   );
// }

// export default ListingsContainer;original code





import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({lists, handleToggle, isToggled, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {lists.map(list => (
          <ListingCard
            key={list.id}
            list={list}
            handleToggle={handleToggle}
            isToggled={isToggled[list.id]}
            handleDelete={handleDelete}
          />
        ))}
        
      </ul>
    </main>
  );
}

export default ListingsContainer          


