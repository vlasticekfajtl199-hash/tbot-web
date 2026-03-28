import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hgramjzjuhnfnkccbfnr.supabase.co'
const supabaseAnonKey = 'sb_publishable_XkO0JbShwrtKbCuKtrF8eA_1Co-U7YX'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
