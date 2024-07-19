// import React from "react";

// function ListingCard() {
//   return (
//     <li className="card">
//       <div className="image">
//         <span className="price">$0</span>
//         <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
//       </div>
//       <div className="details">
//         {true ? (
//           <button className="emoji-button favorite active">★</button>
//         ) : (
//           <button className="emoji-button favorite">☆</button>
//         )}
//         <strong>{"description"}</strong>
//         <span> · {"location"}</span>
//         <button className="emoji-button delete">🗑</button>
//       </div>
//     </li>
//   );
// }

// export default ListingCard; original code



import React from "react";

function ListingCard({list, handleToggle, isToggled, handleDelete}) {
  return (
    <li className="card"
    
    >
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {isToggled ? (
          <button
            onClick={()=>handleToggle(list.id)}
            className="emoji-button favorite active">★</button>
        ) : (
            <button
              onClick={()=>handleToggle(list.id)}
              className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>        <button
          onClick={()=>handleDelete(list.id)}
          className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;



