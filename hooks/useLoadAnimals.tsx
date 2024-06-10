import { useEffect, useState } from 'react';

interface Animal { 
    name: string,
    user_id: string
}
// Custom hook to manage reward / gacha logic
function useLoadAnimals() {
    // send request to get animals 
    const [animals, setAnimals] = useState<Array<Animal>>([{name: "wayne", user_id:'Raphaeluuid'}])
    useEffect(() => {
        // Data fetch animals from database
    })
    return { animals };
}

export default useLoadAnimals;
