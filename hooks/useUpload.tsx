import { supabase } from "@/components/auth";
import { Session } from "@supabase/supabase-js";

export default async function uploadImage() {
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
        .from('rolls')
        .select('rolls')
        .eq('user_id', session.user.id)
        .single();
    
    // no rolls data 
    if (fetchError && fetchError.code == 'PGRST116') { // PGRST116 is the code for "No rows found"
        throw new Error(`Error fetching current rolls: ${fetchError.message}`);
    }

    // Determine the new rolls value

    const newRolls = (currentData?.rolls || 0) + 1;

    const data = {
        user_id: session.user.id,
        rolls: newRolls, 
    };
    console.log("uploading "+  session.user.id)
    
    // Perform the insert operation
    const { error: upsertError } = await supabase.from('rolls')
    .update({'rolls': newRolls})
    .eq('user_id', data.user_id);

    if (upsertError) {
        throw new Error(`Error upserting data: ${upsertError.message}`);
    }

    // Clean up the subscription when done
    subscription.unsubscribe();
}
