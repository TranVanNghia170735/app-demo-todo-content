import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xyikigbyvhsajbtxwffu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5aWtpZ2J5dmhzYWpidHh3ZmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMzcxNTMsImV4cCI6MjAwODgxMzE1M30.mMMTQFTasVHy3F7Hm9CPRrrXqsjZEuOmErAlCPge9m8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
