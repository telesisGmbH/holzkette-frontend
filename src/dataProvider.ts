import { supabaseDataProvider } from './supabaseDataProvider';
import { supabase } from './supabase';

const resources = {
    wood_piles: ['id', 'created_at', 'quality', 'amount', 'length'],
    // authors: ['id', 'full_name'],
};

export const dataProvider = supabaseDataProvider(supabase, resources);