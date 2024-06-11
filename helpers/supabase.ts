import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://twtfavbijizamockgzdk.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3dGZhdmJpaml6YW1vY2tnemRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMjA4ODIsImV4cCI6MjAzMzU5Njg4Mn0.seKVf0yLsBbVBfePspPtSTm4wnt5KNDx-vCtzQUJKLk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})