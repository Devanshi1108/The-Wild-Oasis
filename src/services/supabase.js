import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://arfnmdcddoagvfcwvksb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZm5tZGNkZG9hZ3ZmY3d2a3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDg3ODQsImV4cCI6MjA2MDM4NDc4NH0.ze71Km8uNh2CVTYQhMt3-eQeRF0jDUd5sdSJo7Dp5mI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
