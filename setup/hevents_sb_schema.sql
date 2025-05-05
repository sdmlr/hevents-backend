-- EVENTS TABLE
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  location text NOT NULL,
  image_url text,
  category text
);

-- SIGNUPS TABLE
CREATE TABLE signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE,
  user_email text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- USERS TABLE
CREATE TABLE users (
  id uuid PRIMARY KEY,
  email text UNIQUE NOT NULL,
  role text DEFAULT 'user',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- NOTE: Remember to enable Row Level Security (RLS) on each table
-- via Supabase UI or SQL, and define appropriate policies
-- For example:
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;
