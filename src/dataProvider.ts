import { supabaseDataProvider } from './supabaseDataProvider';
// import { supabaseDataProvider } from '../node_modules/ra-supabase/packages/ra-supabase';
import { supabase } from './supabase';

const resources = {
    wood_piles: ['id', 'created_at', 'quality', 'amount', 'length', 'location'],
    // authors: ['id', 'full_name'],
};

export const dataProvider = supabaseDataProvider(supabase, resources);