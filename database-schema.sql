-- LearnFromMe Database Schema
-- Run this in Supabase SQL Editor

-- ============================================
-- TABLE: experiences
-- ============================================
CREATE TABLE experiences (
  id BIGSERIAL PRIMARY KEY,
  problem TEXT NOT NULL,
  problemCategory TEXT NOT NULL,
  solution TEXT NOT NULL,
  result TEXT NOT NULL,
  resultCategory TEXT NOT NULL,
  author TEXT,
  avgRating DECIMAL DEFAULT 0,
  totalRatings INT DEFAULT 0,
  reports INT DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'hidden')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- TABLE: comments
-- ============================================
CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  experience_id BIGINT REFERENCES experiences(id) ON DELETE CASCADE,
  author TEXT DEFAULT 'Anonymous',
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- ============================================
-- POLICIES: experiences table
-- ============================================

-- Policy: Anyone can view approved experiences
CREATE POLICY "Anyone can view approved experiences"
ON experiences FOR SELECT
USING (status = 'approved');

-- Policy: Anyone can insert experiences (will be pending for moderation)
CREATE POLICY "Anyone can insert experiences"
ON experiences FOR INSERT
WITH CHECK (true);

-- Policy: Only service role can update (for admin moderation)
CREATE POLICY "Service role can update experiences"
ON experiences FOR UPDATE
USING (true);

-- Policy: Only service role can delete
CREATE POLICY "Service role can delete experiences"
ON experiences FOR DELETE
USING (true);

-- ============================================
-- POLICIES: comments table
-- ============================================

-- Policy: Anyone can view comments
CREATE POLICY "Anyone can view comments"
ON comments FOR SELECT
USING (true);

-- Policy: Anyone can insert comments
CREATE POLICY "Anyone can insert comments"
ON comments FOR INSERT
WITH CHECK (true);

-- ============================================
-- INDEXES (for better performance)
-- ============================================
CREATE INDEX idx_experiences_status ON experiences(status);
CREATE INDEX idx_experiences_category ON experiences(problemCategory);
CREATE INDEX idx_experiences_created ON experiences(created_at DESC);
CREATE INDEX idx_comments_experience ON comments(experience_id);

-- ============================================
-- FUNCTIONS (optional but useful)
-- ============================================

-- Function to get experiences with their comments
CREATE OR REPLACE FUNCTION get_experiences_with_comments()
RETURNS TABLE (
  id BIGINT,
  problem TEXT,
  problemCategory TEXT,
  solution TEXT,
  result TEXT,
  resultCategory TEXT,
  author TEXT,
  avgRating DECIMAL,
  totalRatings INT,
  reports INT,
  status TEXT,
  created_at TIMESTAMP,
  comments JSON
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    e.*,
    COALESCE(
      json_agg(
        json_build_object(
          'id', c.id,
          'author', c.author,
          'text', c.text,
          'timestamp', c.created_at
        )
      ) FILTER (WHERE c.id IS NOT NULL),
      '[]'::json
    ) as comments
  FROM experiences e
  LEFT JOIN comments c ON e.id = c.experience_id
  WHERE e.status = 'approved'
  GROUP BY e.id
  ORDER BY e.created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- SAMPLE DATA (optional - for testing)
-- ============================================

INSERT INTO experiences (
  problem,
  problemCategory,
  solution,
  result,
  resultCategory,
  author,
  avgRating,
  totalRatings,
  status
) VALUES 
(
  'Lived with severe hip and leg pain for years that doctors kept diagnosing as muscle issues from running',
  'Health',
  'Researched cyclical pain pattern connection to periods, found study about endometriosis on sciatic nerve',
  'Got proper diagnosis after showing study to doctor, pain managed with targeted treatment',
  'worked',
  'Sarah M.',
  4.8,
  127,
  'approved'
),
(
  'Dating app burnout, ready to give up on online dating completely',
  'Relationship',
  'Decided to go on one more coffee date before quitting apps',
  'That final date turned into successful long-term relationship',
  'worked',
  'Anonymous',
  4.7,
  89,
  'approved'
);

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Check if tables were created
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('experiences', 'comments');

-- Check if policies were created
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename IN ('experiences', 'comments');

-- Check sample data
SELECT COUNT(*) as total_experiences FROM experiences;
SELECT COUNT(*) as total_comments FROM comments;
