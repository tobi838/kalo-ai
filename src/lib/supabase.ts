
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// In development, we'll use placeholder values if environment variables are missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return (
    supabaseUrl !== 'https://placeholder-url.supabase.co' && 
    supabaseAnonKey !== 'placeholder-key'
  );
};
