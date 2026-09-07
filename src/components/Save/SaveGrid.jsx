import SaveCard from './SaveCard'
import { useState } from 'react'

const SaveGrid = ({setCart}) => {
  const [savedItems, setSavedItems] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];
    return saved;
  });

   const removeFromSave = (productId) => {
    const updatedItems = savedItems.filter((item) => item.id !== productId)
    setSavedItems(updatedItems)
    localStorage.setItem("kupongSavedProducts", JSON.stringify(updatedItems))
    }

  return (
    <div className="mt-40 px-10">
      <h1 className="text-2xl font-bold mb-6">
        Saved Items: {savedItems.length}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {savedItems.map((savedItem) => (
          <SaveCard product={savedItem} key={savedItem.id} removeFromSave={removeFromSave} setCart={setCart}/>
        ))}
      </div>
    </div>
  );
};

export default SaveGrid