import { supabase } from '@/helpers/supabase';
import { useEffect, useState } from 'react';

interface Animal { 
    name: string,
    user_id: string, 
    created_at: string, 
    id: string
}
// Custom hook to manage reward / gacha logic
async function useLoadAnimals() {
    // send request to get animals 
    const animals : Array<Animal> = []
    // Get the initial session
    let { data: { session } } = await supabase.auth.getSession();

    // Set up a listener for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
        session = newSession;
    });

    // Ensure that the session is not null
    if (session == null) {
        throw new Error("please sign in");
    }

    // Fetch the current rolls value for the user
    const { data: currentData, error: fetchError } = await supabase
        .from('animals')
        .select('*')
        .eq('user_id', session.user.id)

    return currentData;
}

export default useLoadAnimals;
