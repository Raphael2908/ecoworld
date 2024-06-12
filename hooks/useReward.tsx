import { supabase } from '@/helpers/supabase';
import { useEffect, useState } from 'react';
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

// Custom hook to manage reward / gacha logic
function useReward(initialTaps = 0) {
    const [taps, setTaps] = useState(initialTaps);
    const [rolls, setRolls] = useState(0);
    const [reward, setReward] = useState<string | null>(null);

    async function getRolls() {
        let { data: { session } } = await supabase.auth.getSession()
        const test = await supabase.from('rolls').select('*').eq('user_id', session?.user.id);
        if (test.data?.length) {
            setRolls(test.data[0].rolls)
        }
        else return 0
    }

    async function updateAsync() {
        let { data: { session } } = await supabase.auth.getSession()
        const { error: updateError } = await supabase.from('rolls').update({ 'rolls': rolls - 1 }).eq('user_id', session?.user.id)
    }

    async function updateAnimals(name: string) {
        let { data: { session } } = await supabase.auth.getSession()
        const { error: updateError } = await supabase.from('animals').insert([{ user_id: session?.user.id, name: name }]).eq('user_id', session?.user.id)
    }

    useEffect(() => {
        getRolls()
    }, []);

    const increment = () => {
        setTaps(prevTaps => prevTaps + 1);
    };

    useEffect(() => {
        if (rolls === 0) {

            return;
        }

        if (taps === 3) {
            const randNum = getRandomInt(10);
            if (randNum <= 3) {
                setReward('wayne');
                updateAnimals('wayne')
            } else {
                setReward('captain jef');
                updateAnimals('captain jef')
            }
            setTaps(0);
            setRolls(rolls - 1);
            updateAsync()
        }
    }, [taps, rolls]);

    // Send request to server to store gacha (omitted here for brevity)

    return { increment, reward, rolls };
}

export default useReward;
