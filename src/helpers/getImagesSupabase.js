import { createClient } from '@supabase/supabase-js';

export const getImagesSupabase = () => {
    const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, import.meta.env.VITE_APP_ANON_KEY);
    const CDNURL = import.meta.env.VITE_APP_CDNURL;

    return {
        supabase,
        CDNURL
    }
}