import { createClient } from '@supabase/supabase-js';
import { getEnvVariables } from '../helpers/getEnvVariables';

export const getImagesSupabase = () => {
    const { VITE_APP_SUPABASE_URL, VITE_APP_ANON_KEY, VITE_APP_CDNURL } = getEnvVariables();
    const supabase = createClient(VITE_APP_SUPABASE_URL, VITE_APP_ANON_KEY);
    const CDNURL = VITE_APP_CDNURL;

    return {
        supabase,
        CDNURL
    }
}