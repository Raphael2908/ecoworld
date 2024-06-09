import { useEffect, useState } from 'react';

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

// Custom hook to manage reward / gacha logic
function useReward(initialTaps = 0) {
    const [taps, setTaps] = useState(initialTaps);
    const [rolls, setRolls] = useState(0);
    const [reward, setReward] = useState<string | null>(null);
    const [rollsStatus, setRollsStatus] = useState<string>("");

    useEffect(() => {
        // Get amount of rolls from server
        const rollsFromServer = 1;
        setRolls(rollsFromServer);
    }, []);

    const increment = () => {
        setTaps(prevTaps => prevTaps + 1);
    };

    useEffect(() => {
        if (rolls === 0) {
            setRollsStatus("Not enough rolls");
            return;
        }

        if (taps === 3) {
            const randNum = getRandomInt(10);
            if (randNum <= 3) {
                setReward('wayne');
            } else {
                setReward('captain jef');
            }

            // Reset count
            setTaps(0);
            setRolls(0);
        }
    }, [taps, rolls]);

    // Send request to server to store gacha (omitted here for brevity)

    return { increment, reward, rollsStatus, rolls };
}

export default useReward;
