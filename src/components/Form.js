import React from "react"

function Form({ handleAddItem, setNewItem, newItem }) {
    function handleSubmit(e) {
        e.preventDefault()
        handleAddItem()
    }
    function handleInput(e) {
        const { name, value } = e.target
        setNewItem(prev => ({
            ...prev, [name]: value
        }))
        
    }
    return (
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={newItem.description}
                    onChange={handleInput}
                    
                />
                <input
                    type="text"
                    placeholder="image"
                    name="image"
                    value={newItem.image}
                    onChange={handleInput}

                    
                />
                <input
                    type="text"
                    placeholder="location"
                    name="location"
                    value={newItem.location}
                    onChange={handleInput}
                   
                />
                <button type="submit"
                
                >Add Item</button>

                
</form>
        </div>
    )
}
export default Form