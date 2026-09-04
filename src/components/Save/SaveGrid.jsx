import SaveCard from './SaveCard'
import { useState } from 'react'

const SaveGrid = () => {
  const [savedItems, setSavedItems] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];

    console.log("SAVED ITEMS:", saved);

    return saved;
  });

  return (
    <div className="mt-40 px-10">
      <h1 className="text-2xl font-bold mb-6">
        Saved Items: {savedItems.length}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {savedItems.map((savedItem) => (
          <SaveCard product={savedItem} key={savedItem.id} />
        ))}
      </div>
    </div>
  );
};

export default SaveGrid