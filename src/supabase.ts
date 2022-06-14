import { createClient } from '@supabase/supabase-js';

// these are public, so can also be committed (but should they????)
const url = "https://ahdkzhzxnqnyhqiiacst.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZGt6aHp4bnFueWhxaWlhY3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUyMTMyODgsImV4cCI6MTk3MDc4OTI4OH0.LWxxafWTNkCivJSzbJOQxAsCSNi3iGBrBXQ-xS-FCR4";

export const supabase = createClient(url, key);