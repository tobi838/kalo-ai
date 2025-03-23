
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// Note: In a production environment, you should use environment variables
// These keys will be filled in after connecting to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
