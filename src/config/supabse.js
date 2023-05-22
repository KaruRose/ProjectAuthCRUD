import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ltizaydbqwhxdmairroq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0aXpheWRicXdoeGRtYWlycm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzNDkyMDYsImV4cCI6MTk5OTkyNTIwNn0.l4XQ3jX8FmnZh_1Uqujob-n4VRu4QMWEfssiW4mVWpo'
export const supabase = createClient(supabaseUrl, supabaseKey)