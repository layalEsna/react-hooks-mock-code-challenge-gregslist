import React from "react";

function Sort({handleSort}) {
    
    return (
        <div>
            <button
            onClick={handleSort}
            >Sort By Location</button>
            {/* <ul>
            {lists.map(list => (
                <li key={list.id}>
                    
                    
                        <img src={list.image} />
                        <p>{list.description}</p>
                    
              </li>  
            ))}
                </ul> */}
        </div>
    )
}
export default Sort