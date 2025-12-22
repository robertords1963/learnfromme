import React, { useState } from 'react';
import { Share2, TrendingUp, AlertCircle, Star, MessageCircle, Send, Shield, Trash2, Search } from 'lucide-react';

export default function LearnFromMe() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminKeywords, setAdminKeywords] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(null); // Track which item is waiting for confirmation

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      problem: 'Lived with severe hip and leg pain for years that doctors kept diagnosing as muscle issues from running',
      problemCategory: 'Health',
      solution: 'Researched cyclical pain pattern connection to periods, found study about endometriosis on sciatic nerve',
      result: 'Got proper diagnosis after showing study to doctor, pain managed with targeted treatment',
      resultCategory: 'worked',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.8,
      totalRatings: 127,
      comments: []
    },
    {
      id: 2,
      problem: 'Had mystery symptoms for 10+ years with no diagnosis despite MRIs, CT scans, and countless tests',
      problemCategory: 'Health',
      solution: 'Used AI chatbot to analyze lab results and symptoms, identified possible MTHFR gene mutation',
      result: 'Doctor confirmed diagnosis, B12 supplementation resolved most symptoms',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 203,
      comments: []
    },
    {
      id: 3,
      problem: 'Boyfriend asked for open relationship claiming he needed experience before marriage commitment',
      problemCategory: 'Relationship',
      solution: 'Had honest conversation about values and expectations for the relationship',
      result: 'Ended relationship as values were incompatible, found clarity and self-respect',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 89,
      comments: []
    },
    {
      id: 4,
      problem: 'Friends criticized my relationship due to 10-year age gap, claiming partner was using me',
      problemCategory: 'Relationship',
      solution: 'Pressed friends for real reason, discovered one was jealous after being rejected by my partner',
      result: 'Cut ties with toxic friends, maintained healthy relationship',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 76,
      comments: []
    },
    {
      id: 5,
      problem: 'Male D&D group became tense and competitive after attractive woman joined',
      problemCategory: 'Relationship',
      solution: 'Had open conversation with DM about inappropriate behavior and group dynamics',
      result: 'DM acknowledged issue, started dating the woman, planning new mature group',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.2,
      totalRatings: 54,
      comments: []
    },
    {
      id: 6,
      problem: 'Severe headaches and digestive issues for 36 years with no clear diagnosis',
      problemCategory: 'Health',
      solution: 'Doctor finally ran comprehensive allergy test including foods',
      result: 'Discovered oat allergy - eliminating oats completely resolved lifelong headaches',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 156,
      comments: []
    },
    {
      id: 7,
      problem: 'Reddit displayed entirely in Spanish on Firefox, couldn\'t change settings back to English',
      problemCategory: 'Other',
      solution: 'Disabled all Firefox extensions, cleared cookies, and restarted browser',
      result: 'Spanish interface disappeared, returned to normal English display',
      resultCategory: 'worked',
      author: '',
      avgRating: 3.8,
      totalRatings: 42,
      comments: []
    },
    {
      id: 8,
      problem: 'Chest MRI showed ground glass nodules everywhere, diagnosed with Stage 4 cancer, months to live',
      problemCategory: 'Health',
      solution: 'Second opinion radiologist asked about travel to Midwest, suspected rare fungal infection',
      result: 'Diagnosis was blastomycosis not cancer - lungs scarred but alive 5 years later',
      resultCategory: 'worked',
      author: '',
      avgRating: 5.0,
      totalRatings: 342,
      comments: []
    },
    {
      id: 9,
      problem: 'Stomach tangled itself causing severe vomiting, spleen in wrong location dangling dangerously',
      problemCategory: 'Health',
      solution: 'Surgery to attach stomach and spleen to abdominal wall using special irritant powder for scarring',
      result: 'Organs now anchored properly, no more tangling or dangerous complications',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 98,
      comments: []
    },
    {
      id: 10,
      problem: 'Wanted to propose to girlfriend but she always said I could never surprise her',
      problemCategory: 'Relationship',
      solution: 'Planned elaborate beach proposal with family and friends hidden on pier, fairy lights and photos',
      result: 'She said yes! Successfully surprised her with romantic proposal she never expected',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 234,
      comments: [
        { id: 1, author: '', text: 'This is so sweet! Congratulations! 💕', timestamp: '1 week ago' }
      ]
    },
    {
      id: 11,
      problem: 'Boyfriend never had toilet paper in his bathroom, discovered he wasn\'t wiping at all',
      problemCategory: 'Relationship',
      solution: 'Confronted him about hygiene issue, he became defensive and accusatory',
      result: 'He left in dramatic fashion - deep cleaned apartment, felt relief and freedom',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 187,
      comments: [
        { id: 1, author: '', text: 'HOW did you not notice earlier?!', timestamp: '2 days ago' },
        { id: 2, author: '', text: 'This is my worst nightmare. You dodged a bullet.', timestamp: '1 day ago' }
      ]
    },
    {
      id: 12,
      problem: 'Ex-boyfriend claimed ownership of family heirloom engagement ring after breakup',
      problemCategory: 'Relationship',
      solution: 'Consulted legal advice on ownership, secured ring from potential theft',
      result: 'Kept family heirloom safe, learned about protecting valuable possessions',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 67,
      comments: []
    },
    {
      id: 13,
      problem: 'Depression not responding to antidepressants after initial success, symptoms worsening',
      problemCategory: 'Health',
      solution: 'Psychiatrist re-evaluated diagnosis, discovered Bipolar II instead of just depression',
      result: 'Mood stabilizer eliminated depressive and manic episodes for 3+ years',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 215,
      comments: [
        { id: 1, author: '', text: 'Bipolar II is commonly misdiagnosed as depression. Glad you got proper treatment.', timestamp: '1 week ago' }
      ]
    },
    {
      id: 14,
      problem: 'Coworker deliberately giving Game of Thrones spoilers to mess with me at work',
      problemCategory: 'Work',
      solution: 'Reported harassment behavior to HR department with documentation',
      result: 'Company intervened immediately, spoiling behavior stopped completely',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.1,
      totalRatings: 93,
      comments: []
    },
    {
      id: 15,
      problem: 'Parents chronically late to every important event - graduations, birthdays, retirement dinner',
      problemCategory: 'Family',
      solution: 'Set boundaries and had direct conversation about impact of their behavior',
      result: 'Some improvement in punctuality, learned to manage expectations better',
      resultCategory: 'worked',
      author: '',
      avgRating: 3.6,
      totalRatings: 58,
      comments: []
    },
    {
      id: 16,
      problem: 'Dating app burnout, ready to give up on online dating completely',
      problemCategory: 'Relationship',
      solution: 'Decided to go on one more coffee date before quitting apps',
      result: 'That final date turned into successful long-term relationship',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 176,
      comments: [
        { id: 1, author: '', text: 'This gives me hope! I\'m about to delete all my apps.', timestamp: '3 hours ago' }
      ]
    },
    {
      id: 17,
      problem: 'Partner made significantly less income, unsure how to handle relationship finances fairly',
      problemCategory: 'Finance',
      solution: 'Had open communication about finances, created proportional contribution system',
      result: 'Found fair arrangement that prevented resentment, strengthened relationship',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 112,
      comments: []
    },
    {
      id: 18,
      problem: 'Stayed in relationship too long ignoring red flags, hoping partner would change',
      problemCategory: 'Relationship',
      solution: 'Finally listened to gut instinct and ended unhealthy relationship',
      result: 'Learned to recognize and act on red flags early, found self-respect',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 145,
      comments: []
    },
    {
      id: 19,
      problem: 'Discovered partner cheating through accidentally found videos and photos',
      problemCategory: 'Relationship',
      solution: 'Confronted partner directly about evidence of infidelity',
      result: 'Ended relationship, began healing process and moving forward',
      resultCategory: 'worked',
      author: '',
      avgRating: 3.9,
      totalRatings: 87,
      comments: []
    },
    {
      id: 20,
      problem: 'In-laws called partner\'s friend "best friend" to create jealousy and relationship doubts',
      problemCategory: 'Family',
      solution: 'Father-in-law admitted manipulation scheme, partner confronted parents',
      result: 'Truth exposed, family drama resolved, relationship strengthened through honesty',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 71,
      comments: []
    },
    {
      id: 21,
      problem: 'Skyscraper elevators too slow, people bored and complaining constantly during rides',
      problemCategory: 'Work',
      solution: 'Instead of speeding up elevators, installed mirrors so people could check appearance',
      result: 'Complaints stopped - people distracted by mirrors, solved root problem not symptom',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 289,
      comments: [
        { id: 1, author: '', text: 'Classic design thinking example. Love this story!', timestamp: '1 week ago' },
        { id: 2, author: '', text: 'We used this same solution in our building. Works perfectly.', timestamp: '5 days ago' }
      ]
    },
    {
      id: 22,
      problem: 'Struggling career with low salary, felt stuck at $60K annual income',
      problemCategory: 'Work',
      solution: 'Invested in learning new skills, networked actively, negotiated better, marketed myself',
      result: 'Grew salary from $60K to $500K as data engineer over several years',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 312,
      comments: [
        { id: 1, author: '', text: 'What skills did you focus on learning?', timestamp: '2 days ago' }
      ]
    },
    {
      id: 23,
      problem: 'Business struggling with customer loyalty and increasing competition from rivals',
      problemCategory: 'Work',
      solution: 'Reimagined customer experience, introduced new products, revamped store designs, emphasized training',
      result: 'Transformed Starbucks into one of most beloved brands globally',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 201,
      comments: []
    },
    {
      id: 24,
      problem: 'Unhappy with job but felt trapped with no options for change',
      problemCategory: 'Work',
      solution: 'Explored freelance work, spoke with boss about role changes, took online courses',
      result: 'Found multiple paths forward, created options where none seemed to exist',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 156,
      comments: []
    },
    {
      id: 25,
      problem: 'Constant fear and nerves preventing me from taking opportunities',
      problemCategory: 'Well-being',
      solution: 'Created fear list and tackled each one systematically through deliberate practice',
      result: 'Overcame fear of public speaking and flying, learned to use nerves as energy',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 187,
      comments: []
    },
    {
      id: 26,
      problem: 'Dealing with harsh criticism that felt devastating and personal',
      problemCategory: 'Well-being',
      solution: 'Made peace with criticism within a week, learned from it without being destroyed',
      result: 'Realized criticism comes with success, kept moving forward despite critics',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 134,
      comments: []
    },
    {
      id: 27,
      problem: 'Set important goals but repeatedly failed to achieve them',
      problemCategory: 'Well-being',
      solution: 'Tried different approaches instead of repeating same failed method',
      result: 'Learned that journey matters more than destination, failure is part of success',
      resultCategory: 'worked',
      author: '',
      avgRating: 3.7,
      totalRatings: 92,
      comments: []
    },
    {
      id: 28,
      problem: 'Started business but struggled to find real customer problems to solve',
      problemCategory: 'Work',
      solution: 'Used Reddit to find authentic pain points people discussed openly',
      result: 'Found validated problems worth building solutions for through community research',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 167,
      comments: []
    },
    {
      id: 29,
      problem: 'Needed quality answers but Google filled with spam and competitor ads',
      problemCategory: 'Other',
      solution: 'Created Quora as curated Q&A platform with upvote system for quality',
      result: 'Built community of experts providing valuable answers, reached millions',
      resultCategory: 'worked',
      author: 'Adam D\'Angelo',
      avgRating: 4.9,
      totalRatings: 278,
      comments: []
    },
    {
      id: 30,
      problem: 'Rough family life at age 15, struggling emotionally with home situation',
      problemCategory: 'Family',
      solution: 'Found support through sharing anonymously, connected with others facing similar issues',
      result: 'Gained perspective and coping strategies from community support',
      resultCategory: 'worked',
      avgRating: 3.8,
      totalRatings: 64,
      author: '',
      comments: []
    },
    {
      id: 31,
      problem: 'Drew.io quarter circle sector not rendering correctly despite trying multiple approaches',
      problemCategory: 'Work',
      solution: 'Posted specific code on Stack Overflow asking what was wrong',
      result: 'Got exact line of code needed within hours, problem solved completely',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 89,
      comments: []
    },
    {
      id: 32,
      problem: 'Recursive function causing stack overflow errors in production code',
      problemCategory: 'Work',
      solution: 'Transformed recursion into loop, stored arguments in explicit stack',
      result: 'Eliminated stack overflow, code runs efficiently without crashes',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 143,
      comments: []
    },
    {
      id: 33,
      problem: 'Story writing felt flat, characters not compelling enough for readers',
      problemCategory: 'Education',
      solution: 'Focused on creating real problems for characters to struggle with and solve',
      result: 'Stories became more engaging, readers connected with character journeys',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.2,
      totalRatings: 76,
      comments: []
    },
    {
      id: 34,
      problem: 'New fashion e-commerce store hidden in cyber forest, no customer traffic',
      problemCategory: 'Work',
      solution: 'Used Quora to answer fashion questions, link to store organically',
      result: 'Generated thousands of leads without spending money on ads',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 124,
      comments: []
    },
    {
      id: 35,
      problem: 'Living in constant reactive mode, always firefighting new problems',
      problemCategory: 'Well-being',
      solution: 'Created personal problem-solving framework with systematic approach',
      result: 'Shifted from reactive to proactive, handle challenges more effectively',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 98,
      comments: []
    },
    {
      id: 36,
      problem: 'Survey instruments failing on remote oil rigs costing $1M per day in delays',
      problemCategory: 'Work',
      solution: 'Learned from colleagues sharing stories of problems encountered and overcome',
      result: 'Mental simulations from stories prepared for complex high-pressure situations',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 156,
      comments: []
    },
    {
      id: 37,
      problem: 'Complex Gordian knot considered unsolvable by traditional methods',
      problemCategory: 'Other',
      solution: 'Alexander the Great cut knot with sword instead of trying to untie',
      result: 'Solved impossible problem through creative thinking, later ruled Asia',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 267,
      comments: []
    },
    {
      id: 38,
      problem: 'Stack Overflow becoming toxic, experts leaving, quality declining over years',
      problemCategory: 'Work',
      solution: 'Community tried moderation reforms, quality standards, reputation systems',
      result: 'Partial improvement but culture damage persisted, AI later disrupted further',
      resultCategory: 'worked',
      author: '',
      avgRating: 2.8,
      totalRatings: 112,
      comments: []
    },
    {
      id: 39,
      problem: 'Expensive eyewear pricing excluding many people from quality glasses',
      problemCategory: 'Finance',
      solution: 'Created Warby Parker with direct-to-consumer model and buy-one-give-one program',
      result: 'Provided affordable stylish eyewear, built loyal customer base with social mission',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 198,
      comments: []
    },
    {
      id: 40,
      problem: 'Writing on Quora not gaining traction, answers buried under top writers',
      problemCategory: 'Work',
      solution: 'Chose questions without superstar answers, focused on personal stories',
      result: 'Found success by answering strategically, built following organically',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 87,
      comments: []
    },
    {
      id: 41,
      problem: 'Lost job during 2009 recession, company I worked 10 years for laid off 1/3 of staff',
      problemCategory: 'Work',
      solution: 'Posted on LinkedIn, updated profile with contact info, asked network for opportunities',
      result: 'Status update led to starting own recruiting firm, company born from single post',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 234,
      comments: []
    },
    {
      id: 42,
      problem: 'Freshman in college wanting Manhattan internship but had zero connections',
      problemCategory: 'Work',
      solution: 'Used $200 to set up LinkedIn ad seeking internship position',
      result: 'Ad viewed 12K times by executives, got offers from Bloomberg, NYSE, Pfizer, Citigroup',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 312,
      comments: []
    },
    {
      id: 43,
      problem: 'Wrote book but agent couldn\'t find publisher after years of trying',
      problemCategory: 'Work',
      solution: 'Searched LinkedIn for publishers, sent InMail with book description',
      result: 'Perigee/Penguin agreed to publish "Found in Translation" book',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 145,
      comments: []
    },
    {
      id: 44,
      problem: 'Software engineer laid off, expected quick rehire but jobless for 3 months',
      problemCategory: 'Work',
      solution: 'Friend offered recruiter job, placed candidate for old position, got recommendation',
      result: 'Candidate\'s former company hired him through the connection',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.2,
      totalRatings: 78,
      comments: []
    },
    {
      id: 45,
      problem: 'Changed LinkedIn description but business not getting right clients',
      problemCategory: 'Work',
      solution: 'Spoke directly to specific pain point instead of vague title',
      result: 'Inbound inquiries tripled after describing exact problem solved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 189,
      comments: []
    },
    {
      id: 46,
      problem: 'Laid off from GameStop after risky career move, felt ashamed and embarrassed',
      problemCategory: 'Work',
      solution: 'Made layoff public on LinkedIn despite embarrassment, asked network for help',
      result: 'Got multiple interviews, landed at Method consulting with dream opportunity',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 203,
      comments: []
    },
    {
      id: 47,
      problem: 'LinkedIn content not getting traction, posts buried under top writers',
      problemCategory: 'Work',
      solution: 'Shared client case studies and problem-solving posts instead of self-promotion',
      result: 'Partnership with Ahrefs, national clients reaching out directly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 167,
      comments: []
    },
    {
      id: 48,
      problem: 'Needed to hire top engineers but Dubai startup unknown to Silicon Valley talent',
      problemCategory: 'Work',
      solution: 'Built LinkedIn Career Page showcasing culture, had engineers write blogs',
      result: 'Massive spike in followers, attracted Silicon Valley talent to Careem',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 145,
      comments: []
    },
    {
      id: 49,
      problem: 'Transportation industry had major shortcomings for travelers in Middle East',
      problemCategory: 'Work',
      solution: 'Co-founded Careem to revolutionize transportation with app-based booking',
      result: 'Grew to 60+ cities, 150K drivers, 6M customers across 11 countries',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 223,
      comments: []
    },
    {
      id: 50,
      problem: 'Professional networking only existed offline, no digital infrastructure for careers',
      problemCategory: 'Work',
      solution: 'Created LinkedIn as platform for professional connections and opportunities',
      result: 'Grew to over 1 billion users, became indispensable career tool',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 456,
      comments: []
    },
    {
      id: 51,
      problem: 'Side project campground scraper making nothing, just hobby project',
      problemCategory: 'Work',
      solution: 'Added alerting feature for campground availabilities, refined user experience',
      result: 'Project took off, now makes more per month than day job',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 198,
      comments: []
    },
    {
      id: 52,
      problem: 'Natural Language Processing API startup died, server burned in fire',
      problemCategory: 'Work',
      solution: 'Created MVP frontend in React, added AdSense for passive income',
      result: 'Making $400/month completely passively from rebuilt project',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 87,
      comments: []
    },
    {
      id: 53,
      problem: 'Escape room VR game struggling with no marketing budget',
      problemCategory: 'Work',
      solution: 'Let game work by word of mouth, social gameplay naturally viral',
      result: 'Zero advertising needed, hundreds creating custom Christmas missions',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 134,
      comments: []
    },
    {
      id: 54,
      problem: 'New startup getting zero traction on Hacker News despite multiple posts',
      problemCategory: 'Work',
      solution: 'Wrote about interesting problems and solutions instead of self-promotion',
      result: 'Hit #1 on HN for 48 hours, massive leads and traction, 1000+ GitHub stars',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 267,
      comments: []
    },
    {
      id: 55,
      problem: 'Hard pivot made us lose initial momentum, felt like wasted opportunity',
      problemCategory: 'Work',
      solution: 'Kept publishing regularly, tested different content angles, persisted through failures',
      result: '90% posts failed but persistence paid off, eventually hit nerve with audience',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 112,
      comments: []
    },
    {
      id: 56,
      problem: 'Spent year on SEO with zero search traffic, almost gave up multiple times',
      problemCategory: 'Work',
      solution: 'Continued SEO work despite no results, stayed persistent through doubt',
      result: 'After year plus traffic finally came, learned marketing takes longer than expected',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 156,
      comments: []
    },
    {
      id: 57,
      problem: 'Built API but users struggled connecting custom domains with SSL',
      problemCategory: 'Work',
      solution: 'Created approximated.app for automatic SSL with dedicated anycast IPs',
      result: 'Solved hard problem, useful to many including self, fun technical challenge',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 178,
      comments: []
    },
    {
      id: 58,
      problem: 'Video production side business inconsistent, struggled to scale beyond self',
      problemCategory: 'Work',
      solution: 'Produced jobs with contractors instead of doing all work personally',
      result: '$6-12K monthly revenue with 40-60% profit, shot Fox Studios documentary',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 143,
      comments: []
    },
    {
      id: 59,
      problem: 'Newsletter felt like obligation, wondering if still worth doing after 11 years',
      problemCategory: 'Work',
      solution: 'Kept enjoying weekly curation process, recently launched daily version',
      result: 'Still growing steadily, passion sustained through consistency',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 98,
      comments: []
    },
    {
      id: 60,
      problem: 'Unused domain names sitting idle, no way to monetize them effectively',
      problemCategory: 'Work',
      solution: 'Built tool to create content sites automatically from unused domains',
      result: 'Tool growing steadily, monetizing previously worthless assets',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.2,
      totalRatings: 76,
      comments: []
    },
    {
      id: 61,
      problem: 'Chronic insomnia for 15 years, sleeping only 2-3 hours per night despite trying everything',
      problemCategory: 'Health',
      solution: 'Discovered sleep apnea through home sleep study, got CPAP machine',
      result: 'Now sleeping 7-8 hours consistently, energy levels completely transformed',
      resultCategory: 'worked',
      author: '',
      gender: 'Male',
      age: '41-60',
      avgRating: 4.9,
      totalRatings: 189,
      comments: []
    },
    {
      id: 62,
      problem: 'Toddler having severe meltdowns daily, pediatrician said it was just terrible twos',
      problemCategory: 'Family',
      solution: 'Researched sensory processing issues, tried occupational therapy evaluation',
      result: 'Diagnosed with sensory processing disorder, therapy helped reduce meltdowns by 80%',
      resultCategory: 'worked',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.7,
      totalRatings: 143,
      comments: []
    },
    {
      id: 63,
      problem: 'Credit score dropped 200 points overnight with no explanation or recent changes',
      problemCategory: 'Finance',
      solution: 'Pulled all three credit reports, found identity theft - someone opened 5 credit cards',
      result: 'Filed police report and disputes, score restored after 6 months',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 98,
      comments: []
    },
    {
      id: 64,
      problem: 'Boss taking credit for my work in presentations to upper management',
      problemCategory: 'Work',
      solution: 'Started cc-ing stakeholders on project emails and documenting contributions',
      result: 'Upper management noticed my work, got promoted over the boss within a year',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 167,
      comments: []
    },
    {
      id: 65,
      problem: 'Elderly parent refusing to stop driving despite failing vision and multiple near-accidents',
      problemCategory: 'Family',
      solution: 'Doctor wrote letter recommending license surrender, offered to be personal driver',
      result: 'Parent reluctantly agreed, relationship improved through quality time together',
      resultCategory: 'worked',
      author: '',
      age: '41-60',
      avgRating: 4.1,
      totalRatings: 87,
      comments: []
    },
    {
      id: 66,
      problem: 'House plants dying constantly despite following all care instructions online',
      problemCategory: 'Other',
      solution: 'Tested water quality, discovered extremely hard water was the issue',
      result: 'Switched to filtered water, plants thriving for first time in years',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 112,
      comments: []
    },
    {
      id: 67,
      problem: 'Teenager failing school, skipping classes, completely unmotivated',
      problemCategory: 'Family',
      solution: 'Pushed for psychological evaluation despite school resistance',
      result: 'Diagnosed with ADHD and depression, medication and therapy turned everything around',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 201,
      comments: []
    },
    {
      id: 68,
      problem: 'Wedding photographer disappeared with deposit and no photos after the wedding',
      problemCategory: 'Other',
      solution: 'Filed small claims court case with contract evidence, contacted state attorney general',
      result: 'Won judgment, photographer had to pay back deposit plus damages',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.2,
      totalRatings: 93,
      comments: []
    },
    {
      id: 69,
      problem: 'New car making strange noise, dealership insisted nothing was wrong for months',
      problemCategory: 'Other',
      solution: 'Recorded noise on phone, posted to car forum, got expert diagnosis',
      result: 'Showed forum responses to different dealership, they found and fixed transmission issue',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 134,
      comments: []
    },
    {
      id: 70,
      problem: 'Roommate not paying share of utilities, making excuses every month',
      problemCategory: 'Relationship',
      solution: 'Had written conversation via email documenting all owed amounts',
      result: 'Used email trail in small claims, won case and recovered all unpaid bills',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 108,
      comments: []
    },
    {
      id: 71,
      problem: 'Constant stomach pain and bloating for years, doctors found nothing on tests',
      problemCategory: 'Health',
      solution: 'Tried elimination diet on own, discovered gluten was the trigger',
      result: 'Completely pain-free after going gluten-free, later confirmed celiac disease',
      resultCategory: 'worked',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.8,
      totalRatings: 176,
      comments: []
    },
    {
      id: 72,
      problem: 'Interview anxiety so severe would vomit before every job interview',
      problemCategory: 'Work',
      solution: 'Practiced mock interviews with friends, used beta blockers prescribed by doctor',
      result: 'Anxiety manageable, landed dream job after 6 successful interviews',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 145,
      comments: []
    },
    {
      id: 73,
      problem: 'HOA fining me weekly for lawn violations that other neighbors were not cited for',
      problemCategory: 'Other',
      solution: 'Documented all fines with photos showing identical neighbor lawns, attended board meeting',
      result: 'HOA reversed all fines and changed enforcement policy to be consistent',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 121,
      comments: []
    },
    {
      id: 74,
      problem: 'Best friend started dating my ex immediately after breakup without asking',
      problemCategory: 'Relationship',
      solution: 'Had honest conversation about feeling betrayed and needing space',
      result: 'Friend apologized, ended relationship with ex, friendship eventually recovered',
      resultCategory: 'worked',
      author: '',
      avgRating: 3.9,
      totalRatings: 72,
      comments: []
    },
    {
      id: 75,
      problem: 'Package stolen from porch repeatedly, police said they could not help',
      problemCategory: 'Other',
      solution: 'Set up doorbell camera and glitter bomb decoy package',
      result: 'Caught thief on video, police took action, no more stolen packages',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 156,
      comments: []
    },
    {
      id: 76,
      problem: 'Dog barking constantly at night, neighbors threatening to call authorities',
      problemCategory: 'Other',
      solution: 'Vet suggested possible separation anxiety, tried crate training and calming supplements',
      result: 'Barking reduced by 90%, neighbors happy again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 98,
      comments: []
    },
    {
      id: 77,
      problem: 'Promotion promised for 2 years but kept getting delayed with vague excuses',
      problemCategory: 'Work',
      solution: 'Quietly started job hunting while documenting all broken promises',
      result: 'Got offer from competitor for 40% raise, current job finally promoted me to match',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 203,
      comments: []
    },
    {
      id: 78,
      problem: 'Chronic back pain from sitting at desk all day despite ergonomic chair',
      problemCategory: 'Health',
      solution: 'Switched to standing desk and set timer to alternate sitting/standing every 30 minutes',
      result: 'Back pain gone within 2 weeks, energy levels improved significantly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 167,
      comments: []
    },
    {
      id: 79,
      problem: 'Mother-in-law constantly criticizing parenting choices and undermining decisions',
      problemCategory: 'Family',
      solution: 'Spouse and I presented united front, set clear boundaries with consequences',
      result: 'After one timeout period, mother-in-law started respecting boundaries',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 132,
      comments: []
    },
    {
      id: 80,
      problem: 'Laptop overheating and shutting down randomly during important work',
      problemCategory: 'Other',
      solution: 'Opened laptop and cleaned dust from fans, reapplied thermal paste',
      result: 'Overheating completely stopped, laptop running like new',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 109,
      comments: []
    },
    {
      id: 81,
      problem: 'Severe anxiety about flying preventing travel for work and family events',
      problemCategory: 'Well-being',
      solution: 'Took flying phobia course, practiced breathing exercises, used exposure therapy',
      result: 'Successfully flew across country, anxiety manageable with techniques learned',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 143,
      comments: []
    },
    {
      id: 82,
      problem: 'Neighbors loud music at 2am every weekend despite multiple polite requests',
      problemCategory: 'Other',
      solution: 'Documented dates and times, filed noise complaints, contacted landlord with evidence',
      result: 'Neighbor received violation notices, music stopped after threat of eviction',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 97,
      comments: []
    },
    {
      id: 83,
      problem: 'Side business growing but could not justify quitting stable job with family to support',
      problemCategory: 'Work',
      solution: 'Saved 12 months expenses, grew side business to match salary before quitting',
      result: 'Successfully transitioned full-time, income doubled within first year',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 234,
      comments: []
    },
    {
      id: 84,
      problem: 'Procrastination so severe could not meet any deadlines, risking job loss',
      problemCategory: 'Work',
      solution: 'Got evaluated for ADHD, started medication and time-blocking strategy',
      result: 'Productivity increased dramatically, met all deadlines for 6 months straight',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 178,
      comments: []
    },
    {
      id: 85,
      problem: 'Car dealership charged for repairs never performed, found out months later',
      problemCategory: 'Finance',
      solution: 'Gathered service records, filed complaint with consumer protection agency',
      result: 'Dealership refunded charges and lost license for multiple violations found',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 156,
      comments: []
    },
    {
      id: 86,
      problem: 'Constant headaches every afternoon at work, could not focus on tasks',
      problemCategory: 'Health',
      solution: 'Realized office fluorescent lights were triggering migraines, got blue light glasses',
      result: 'Headaches reduced by 95%, productivity back to normal',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 128,
      comments: []
    },
    {
      id: 87,
      problem: 'Young adult child moved back home with no plan, not looking for work',
      problemCategory: 'Family',
      solution: 'Set clear expectations with written agreement including job search requirements and timeline',
      result: 'Child found job within 2 months, moved out after saving for 6 months',
      resultCategory: 'worked',
      author: '',
      age: '41-60',
      avgRating: 4.4,
      totalRatings: 118,
      comments: []
    },
    {
      id: 88,
      problem: 'WiFi constantly dropping, tech support insisted nothing wrong with connection',
      problemCategory: 'Other',
      solution: 'Bought own modem and router to replace ISP equipment',
      result: 'Connection issues completely disappeared, speed doubled',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 165,
      comments: []
    },
    {
      id: 89,
      problem: 'Partner refuses to discuss finances or share expenses information despite living together',
      problemCategory: 'Relationship',
      solution: 'Insisted on couples counseling to address financial transparency issues',
      result: 'Counselor helped establish joint budget system, relationship improved significantly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 102,
      comments: []
    },
    {
      id: 90,
      problem: 'Seasonal allergies so severe could not go outside during spring and summer',
      problemCategory: 'Health',
      solution: 'Doctor prescribed allergy shots after years of ineffective antihistamines',
      result: 'After 2 years of shots, can enjoy outdoors again with minimal symptoms',
      resultCategory: 'worked',
      author: '',
      gender: 'Male',
      age: '21-40',
      avgRating: 4.8,
      totalRatings: 187,
      comments: []
    },
    {
      id: 91,
      problem: 'Gym membership auto-renewing despite multiple cancellation attempts',
      problemCategory: 'Finance',
      solution: 'Sent certified letter, reported to credit card company, filed BBB complaint',
      result: 'Membership cancelled, refunded for 3 months of unauthorized charges',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 112,
      comments: []
    },
    {
      id: 92,
      problem: 'Teenager spending 12+ hours daily gaming, grades dropping, refusing to communicate',
      problemCategory: 'Family',
      solution: 'Set up family meeting with therapist, established screen time limits with rewards',
      result: 'Gaming reduced to 2 hours, grades improved, communication better',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.2,
      totalRatings: 94,
      comments: []
    },
    {
      id: 93,
      problem: 'Constant arguments with spouse about household chore distribution',
      problemCategory: 'Relationship',
      solution: 'Created detailed chore chart with assigned responsibilities and rotation schedule',
      result: 'Arguments stopped completely, both feel workload is fair now',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 148,
      comments: []
    },
    {
      id: 94,
      problem: 'Panic attacks started happening during work presentations, avoiding all speaking opportunities',
      problemCategory: 'Work',
      solution: 'Worked with therapist on exposure therapy and public speaking practice',
      result: 'Panic attacks controlled, now volunteering to present in meetings',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 161,
      comments: []
    },
    {
      id: 95,
      problem: 'Mold growing in bathroom despite constant cleaning and ventilation',
      problemCategory: 'Other',
      solution: 'Discovered hidden leak behind wall tiles, hired professional for proper remediation',
      result: 'Leak fixed, mold never returned, air quality improved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 123,
      comments: []
    },
    {
      id: 96,
      problem: 'Chronic lower back pain affecting daily activities and sleep quality',
      problemCategory: 'Health',
      solution: 'Tried physical therapy for 6 months as recommended by doctor',
      result: 'Pain levels remained the same, no noticeable improvement in mobility',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.1,
      totalRatings: 45,
      comments: []
    },
    {
      id: 97,
      problem: 'Insomnia worsening over several months, sleeping only 3-4 hours per night',
      problemCategory: 'Health',
      solution: 'Started taking over-the-counter sleep medication nightly',
      result: 'Developed dependency, sleep quality worsened, now cannot sleep without pills',
      resultCategory: 'got-worse',
      author: '',
      gender: 'Female',
      age: '41-60',
      avgRating: 1.8,
      totalRatings: 67,
      comments: []
    },
    {
      id: 98,
      problem: 'Spouse spending excessive time on phone during family dinners and conversations',
      problemCategory: 'Relationship',
      solution: 'Had multiple conversations about phone use boundaries',
      result: 'Behavior unchanged, still constantly on phone during quality time',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.3,
      totalRatings: 52,
      comments: []
    },
    {
      id: 99,
      problem: 'Teenage son isolating in room, refusing to participate in family activities',
      problemCategory: 'Family',
      solution: 'Forced participation in family outings and restricted gaming time',
      result: 'Relationship deteriorated significantly, son became more withdrawn and hostile',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.6,
      totalRatings: 78,
      comments: []
    },
    {
      id: 100,
      problem: 'Coworker taking credit for team projects in front of management',
      problemCategory: 'Work',
      solution: 'Documented work contributions and sent weekly reports to supervisor',
      result: 'Supervisor aware but took no action, situation continues unchanged',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.4,
      totalRatings: 41,
      comments: []
    },
    {
      id: 101,
      problem: 'Anxiety attacks becoming more frequent, happening 2-3 times per week',
      problemCategory: 'Well-being',
      solution: 'Started avoiding situations that triggered anxiety',
      result: 'Avoidance made anxiety worse, now having daily panic attacks',
      resultCategory: 'got-worse',
      author: '',
      gender: 'Male',
      age: '21-40',
      avgRating: 1.5,
      totalRatings: 92,
      comments: []
    },
    {
      id: 102,
      problem: 'Severe migraines 4-5 times per month interfering with work',
      problemCategory: 'Health',
      solution: 'Tried elimination diet removing common trigger foods',
      result: 'Migraines continued at same frequency despite dietary changes',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.2,
      totalRatings: 56,
      comments: []
    },
    {
      id: 103,
      problem: 'Financial stress from mounting credit card debt',
      problemCategory: 'Finance',
      solution: 'Took out personal loan to consolidate debt at lower interest rate',
      result: 'Continued spending on credit cards, now have both loan and new debt',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.7,
      totalRatings: 83,
      comments: []
    },
    {
      id: 104,
      problem: 'Constant fatigue despite sleeping 8 hours per night',
      problemCategory: 'Health',
      solution: 'Started taking vitamin supplements and multivitamins',
      result: 'Energy levels remained unchanged, still exhausted daily',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.0,
      totalRatings: 48,
      comments: []
    },
    {
      id: 105,
      problem: 'Neighbor parking in my assigned spot repeatedly',
      problemCategory: 'Other',
      solution: 'Left aggressive notes on their windshield',
      result: 'Neighbor retaliated by keying my car, situation escalated',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.4,
      totalRatings: 71,
      comments: []
    },
    {
      id: 106,
      problem: 'Procrastination affecting work deadlines and performance reviews',
      problemCategory: 'Work',
      solution: 'Created detailed to-do lists and scheduling system',
      result: 'Still procrastinating at same level, just with organized lists',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.1,
      totalRatings: 39,
      comments: []
    },
    {
      id: 107,
      problem: 'Adult child asking for money constantly, unable to manage finances',
      problemCategory: 'Family',
      solution: 'Gave larger lump sum hoping they would budget better',
      result: 'Money spent immediately, requests became more frequent and larger',
      resultCategory: 'got-worse',
      author: '',
      age: '61-Up',
      avgRating: 1.6,
      totalRatings: 88,
      comments: []
    },
    {
      id: 108,
      problem: 'Persistent acne despite good skincare routine',
      problemCategory: 'Health',
      solution: 'Tried expensive new skincare products recommended by influencers',
      result: 'Acne unchanged, spent hundreds on products with no results',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.3,
      totalRatings: 44,
      comments: []
    },
    {
      id: 109,
      problem: 'Gaining weight steadily despite trying to eat healthier',
      problemCategory: 'Health',
      solution: 'Started strict low-carb diet with severe calorie restriction',
      result: 'Lost muscle mass, metabolism slowed, gained more weight after stopping',
      resultCategory: 'got-worse',
      author: '',
      gender: 'Female',
      age: '41-60',
      avgRating: 1.5,
      totalRatings: 94,
      comments: []
    },
    {
      id: 110,
      problem: 'Social anxiety preventing me from attending events and making friends',
      problemCategory: 'Well-being',
      solution: 'Watched videos and read books about overcoming anxiety',
      result: 'Still avoiding social situations, no actual change in behavior',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.0,
      totalRatings: 51,
      comments: []
    },
    {
      id: 111,
      problem: 'Constant arguments with partner about household responsibilities',
      problemCategory: 'Relationship',
      solution: 'Started keeping score of who does what to prove my point',
      result: 'Arguments intensified, resentment built up, relationship worse than before',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.3,
      totalRatings: 76,
      comments: []
    },
    {
      id: 112,
      problem: 'Dog barking excessively when left alone during work hours',
      problemCategory: 'Other',
      solution: 'Left TV and radio on for background noise',
      result: 'Dog still barking at same level according to neighbors',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.2,
      totalRatings: 38,
      comments: []
    },
    {
      id: 113,
      problem: 'Difficulty concentrating at work, constantly distracted',
      problemCategory: 'Work',
      solution: 'Started working longer hours to compensate for lost productivity',
      result: 'Became exhausted, concentration worse, productivity declined further',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.7,
      totalRatings: 69,
      comments: []
    },
    {
      id: 114,
      problem: 'Best friend stopped responding to messages and avoiding plans',
      problemCategory: 'Relationship',
      solution: 'Sent more frequent messages asking what was wrong',
      result: 'Friend still distant, no explanation provided, friendship unchanged',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.1,
      totalRatings: 47,
      comments: []
    },
    {
      id: 115,
      problem: 'Chronic neck pain from desk work posture',
      problemCategory: 'Health',
      solution: 'Ignored pain and continued working without breaks',
      result: 'Pain spread to shoulders and upper back, now requiring medical treatment',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.4,
      totalRatings: 81,
      comments: []
    },
    {
      id: 116,
      problem: 'Credit score not improving despite paying bills on time',
      problemCategory: 'Finance',
      solution: 'Applied for new credit cards to increase available credit',
      result: 'Multiple hard inquiries, score remained the same',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.3,
      totalRatings: 42,
      comments: []
    },
    {
      id: 117,
      problem: 'Teenager staying out past curfew regularly',
      problemCategory: 'Family',
      solution: 'Made curfew earlier as punishment',
      result: 'Teen rebelled more, started sneaking out completely',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.6,
      totalRatings: 73,
      comments: []
    },
    {
      id: 118,
      problem: 'Feeling unmotivated and unfulfilled in current career',
      problemCategory: 'Work',
      solution: 'Talked to friends and family about career dissatisfaction',
      result: 'Still in same job, same feelings, no actual steps taken',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.0,
      totalRatings: 35,
      comments: []
    },
    {
      id: 119,
      problem: 'Mild depression affecting energy and motivation',
      problemCategory: 'Well-being',
      solution: 'Self-medicated with alcohol to cope with feelings',
      result: 'Developed drinking problem, depression worsened significantly',
      resultCategory: 'got-worse',
      author: '',
      gender: 'Male',
      age: '21-40',
      avgRating: 1.2,
      totalRatings: 102,
      comments: []
    },
    {
      id: 120,
      problem: 'Dry skin and eczema flare-ups despite moisturizing',
      problemCategory: 'Health',
      solution: 'Switched to hypoallergenic products and fragrance-free lotions',
      result: 'Skin condition unchanged, flare-ups at same frequency',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.2,
      totalRatings: 49,
      comments: []
    },
    {
      id: 121,
      problem: 'Overwhelming clutter in home affecting mental health',
      problemCategory: 'Well-being',
      solution: 'Bought more storage containers and organizing systems',
      result: 'More clutter, now have boxes of unused organizing supplies too',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.5,
      totalRatings: 66,
      comments: []
    },
    {
      id: 122,
      problem: 'Constant interruptions during work video calls',
      problemCategory: 'Work',
      solution: 'Put up sign on door asking for quiet',
      result: 'Family still interrupting, sign ignored',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.1,
      totalRatings: 37,
      comments: []
    },
    {
      id: 123,
      problem: 'Partner dismissive of my feelings during disagreements',
      problemCategory: 'Relationship',
      solution: 'Raised voice and got more emotional to be heard',
      result: 'Partner withdrew more, communication broke down completely',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.4,
      totalRatings: 79,
      comments: []
    },
    {
      id: 124,
      problem: 'Seasonal allergies making spring unbearable every year',
      problemCategory: 'Health',
      solution: 'Took antihistamines daily as recommended',
      result: 'Symptoms continued at same severity, no relief experienced',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.0,
      totalRatings: 53,
      comments: []
    },
    {
      id: 125,
      problem: 'Elderly parent refusing medical care for worsening condition',
      problemCategory: 'Family',
      solution: 'Argued and pressured them repeatedly about seeing doctor',
      result: 'Parent became defensive and even more resistant to medical help',
      resultCategory: 'got-worse',
      author: '',
      age: '41-60',
      avgRating: 1.6,
      totalRatings: 84,
      comments: []
    },
    {
      id: 126,
      problem: 'Difficulty falling asleep, taking 2-3 hours to fall asleep nightly',
      problemCategory: 'Health',
      solution: 'Started watching TV in bed to help relax',
      result: 'Still taking same amount of time to fall asleep',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.1,
      totalRatings: 46,
      comments: []
    },
    {
      id: 127,
      problem: 'Feeling lonely and isolated working from home',
      problemCategory: 'Well-being',
      solution: 'Spent more time scrolling social media to feel connected',
      result: 'Felt more isolated and inadequate, loneliness intensified',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.5,
      totalRatings: 91,
      comments: []
    },
    {
      id: 128,
      problem: 'Car making strange noise but mechanic cannot find the issue',
      problemCategory: 'Other',
      solution: 'Got second opinion from different mechanic',
      result: 'Still no diagnosis, noise continues, no solution found',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.2,
      totalRatings: 33,
      comments: []
    },
    {
      id: 129,
      problem: 'Relationship strain due to different parenting styles',
      problemCategory: 'Family',
      solution: 'Criticized partner\'s parenting in front of children',
      result: 'Children learned to manipulate disagreements, relationship damaged severely',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.3,
      totalRatings: 77,
      comments: []
    },
    {
      id: 130,
      problem: 'Persistent dandruff despite using anti-dandruff shampoo',
      problemCategory: 'Health',
      solution: 'Tried multiple different brands of dandruff shampoo',
      result: 'Dandruff persisted at same level with all products',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.0,
      totalRatings: 40,
      comments: []
    },
    {
      id: 131,
      problem: 'Stressed about financial future and retirement savings',
      problemCategory: 'Finance',
      solution: 'Constantly checked retirement account balance and market news',
      result: 'Anxiety worsened, became obsessed, lost sleep over market fluctuations',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.6,
      totalRatings: 68,
      comments: []
    },
    {
      id: 132,
      problem: 'Roommate leaving shared spaces messy despite discussions',
      problemCategory: 'Relationship',
      solution: 'Left passive-aggressive notes around apartment',
      result: 'Living situation remained unchanged, tension increased',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.1,
      totalRatings: 36,
      comments: []
    },
    {
      id: 133,
      problem: 'Knee pain from running making training difficult',
      problemCategory: 'Health',
      solution: 'Pushed through pain and increased mileage to stay on schedule',
      result: 'Developed stress fracture, unable to run for 6 months',
      resultCategory: 'got-worse',
      author: '',
      gender: 'Male',
      age: '21-40',
      avgRating: 1.4,
      totalRatings: 86,
      comments: []
    },
    {
      id: 134,
      problem: 'Poor work-life balance, working 60+ hours weekly',
      problemCategory: 'Work',
      solution: 'Made mental note to set better boundaries',
      result: 'Still working same hours, no actual changes implemented',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.0,
      totalRatings: 44,
      comments: []
    },
    {
      id: 135,
      problem: 'Child struggling with reading comprehension in school',
      problemCategory: 'Education',
      solution: 'Increased homework time and added extra reading assignments',
      result: 'Child became resistant to reading, performance declined further',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.5,
      totalRatings: 72,
      comments: []
    },
    {
      id: 136,
      problem: 'Feeling disconnected from spouse despite living together',
      problemCategory: 'Relationship',
      solution: 'Tried scheduling weekly date nights',
      result: 'Dates felt forced and awkward, emotional distance unchanged',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.2,
      totalRatings: 50,
      comments: []
    },
    {
      id: 137,
      problem: 'Acid reflux and heartburn several times per week',
      problemCategory: 'Health',
      solution: 'Self-prescribed antacids and increased dosage over time',
      result: 'Developed dependency on medication, underlying issue worsened',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.7,
      totalRatings: 63,
      comments: []
    },
    {
      id: 138,
      problem: 'Trying to quit smoking but keep relapsing',
      problemCategory: 'Health',
      solution: 'Switched to vaping as harm reduction',
      result: 'Still addicted to nicotine, just different delivery method',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.1,
      totalRatings: 58,
      comments: []
    },
    {
      id: 139,
      problem: 'Overwhelming email inbox affecting productivity',
      problemCategory: 'Work',
      solution: 'Declared email bankruptcy and archived everything',
      result: 'Missed important emails, created new problems, inbox filled up again',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.4,
      totalRatings: 55,
      comments: []
    },
    {
      id: 140,
      problem: 'Friends making plans without including me',
      problemCategory: 'Relationship',
      solution: 'Waited for them to invite me to things',
      result: 'Still not being included, feeling more isolated',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.0,
      totalRatings: 41,
      comments: []
    },
    {
      id: 141,
      problem: 'Child addicted to video games, grades dropping',
      problemCategory: 'Family',
      solution: 'Confiscated all gaming devices without warning',
      result: 'Child became angry and resentful, relationship damaged, found ways to game secretly',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.3,
      totalRatings: 89,
      comments: []
    },
    {
      id: 142,
      problem: 'Low energy and motivation throughout the day',
      problemCategory: 'Health',
      solution: 'Started drinking 5-6 cups of coffee daily',
      result: 'Developed caffeine dependency, energy crashes worse than before',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 1.6,
      totalRatings: 74,
      comments: []
    },
    {
      id: 143,
      problem: 'Difficulty saving money despite good income',
      problemCategory: 'Finance',
      solution: 'Planned to start budgeting next month',
      result: 'Several months passed, still no budget, spending unchanged',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.1,
      totalRatings: 39,
      comments: []
    },
    {
      id: 144,
      problem: 'Frequent headaches disrupting work and daily life',
      problemCategory: 'Health',
      solution: 'Took ibuprofen multiple times daily',
      result: 'Developed rebound headaches from medication overuse',
      resultCategory: 'got-worse',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 1.5,
      totalRatings: 82,
      comments: []
    },
    {
      id: 145,
      problem: 'Feeling stuck in career with no advancement opportunities',
      problemCategory: 'Work',
      solution: 'Complained to coworkers about lack of opportunities',
      result: 'Still in same position, reputation as complainer, no progress',
      resultCategory: 'no-change',
      author: '',
      avgRating: 2.0,
      totalRatings: 43,
      comments: []
    }
  ]);

  const [currentEntry, setCurrentEntry] = useState({
    problem: '',
    problemCategory: '',
    solution: '',
    result: '',
    resultCategory: '',
    author: '',
    gender: '',
    age: '',
  });

  const [filters, setFilters] = useState({
    problemCategory: '',
    searchText: '',
    resultCategory: '',
    rating: '',
    gender: '',
    age: ''
  });

  const [userRatings, setUserRatings] = useState({});
  const [hoverRating, setHoverRating] = useState({});
  const [newComment, setNewComment] = useState({});
  const [showComments, setShowComments] = useState({});

  const maxChars = {
    problem: 300,
    solution: 300,
    result: 200,
    comment: 500
  };

  const problemCategories = ['Health', 'Work', 'Relationship', 'Finance', 'Family', 'Education', 'Well-being', 'Other'];
  
  const genderOptions = ['Male', 'Female', 'Other'];
  const ageOptions = ['0-20', '21-40', '41-60', '61-Up'];
  
  const resultCategories = [
    { value: 'worked', label: 'Worked', color: 'bg-green-100 text-green-800' },
    { value: 'no-change', label: 'No Change', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'got-worse', label: 'Got Worse', color: 'bg-red-100 text-red-800' }
  ];

  const handleSubmit = () => {
    if (currentEntry.problem && currentEntry.problemCategory && 
        currentEntry.solution && currentEntry.result && currentEntry.resultCategory) {
      setExperiences([...experiences, { 
        ...currentEntry, 
        id: Date.now(), 
        avgRating: 0,
        totalRatings: 0,
        comments: []
      }]);
      setCurrentEntry({
        problem: '',
        problemCategory: '',
        solution: '',
        result: '',
        resultCategory: '',
        author: '',
        gender: '',
        age: '',
      });
    }
  };

  const handleUserRating = (expId, rating) => {
    setUserRatings({...userRatings, [expId]: rating});
  };

  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setShowAdminLogin(false);
    } else {
      alert('Incorrect password');
    }
  };

  const handleDelete = (expId) => {
    // Check if this item is already in confirm mode
    if (confirmDelete === `exp-${expId}`) {
      // Second click - actually delete
      setExperiences(experiences.filter(e => e.id !== expId));
      setConfirmDelete(null); // Reset confirm state
    } else {
      // First click - enter confirm mode
      setConfirmDelete(`exp-${expId}`);
    }
  };

  const handleDeleteComment = (expId, commentId) => {
    const confirmKey = `comment-${expId}-${commentId}`;
    
    // Check if this item is already in confirm mode
    if (confirmDelete === confirmKey) {
      // Second click - actually delete
      setExperiences(experiences.map(exp => {
        if (exp.id === expId) {
          return { ...exp, comments: exp.comments.filter(c => c.id !== commentId) };
        }
        return exp;
      }));
      setConfirmDelete(null); // Reset confirm state
    } else {
      // First click - enter confirm mode
      setConfirmDelete(confirmKey);
    }
  };

  const getKeywordMatches = () => {
    if (!adminKeywords.trim()) return [];
    
    const keywords = adminKeywords.toLowerCase().split(',').map(k => k.trim()).filter(k => k);
    const matches = [];

    experiences.forEach(exp => {
      const searchText = `${exp.problem} ${exp.solution} ${exp.result}`.toLowerCase();
      
      keywords.forEach(keyword => {
        if (searchText.includes(keyword)) {
          matches.push({
            type: 'experience',
            expId: exp.id,
            keyword: keyword,
            text: `Problem: ${exp.problem}. Solution: ${exp.solution}. Result: ${exp.result}`
          });
        }
      });

      exp.comments.forEach(comment => {
        keywords.forEach(keyword => {
          if (comment.text.toLowerCase().includes(keyword)) {
            matches.push({
              type: 'comment',
              expId: exp.id,
              commentId: comment.id,
              keyword: keyword,
              text: comment.text,
              author: comment.author
            });
          }
        });
      });
    });

    return matches;
  };

  const handleAddComment = (expId) => {
    const commentText = newComment[expId];
    if (!commentText || !commentText.trim()) return;

    const updatedExperiences = experiences.map(exp => {
      if (exp.id === expId) {
        const newCommentObj = {
          id: Date.now(),
          author: '',
          text: commentText.trim(),
          timestamp: 'Just now'
        };
        return {
          ...exp,
          comments: []
        };
      }
      return exp;
    });

    setExperiences(updatedExperiences);
    setNewComment({...newComment, [expId]: ''});
  };

  const getResultColor = (category) => resultCategories.find(r => r.value === category)?.color || '';
  const getResultLabel = (category) => resultCategories.find(r => r.value === category)?.label || '';

  const filteredExperiences = experiences.filter(exp => {
    const matchesProblemCategory = !filters.problemCategory || exp.problemCategory === filters.problemCategory;
    const searchTerms = filters.searchText.toLowerCase().trim().split(/\s+/);
    const matchesSearchText = !filters.searchText || searchTerms.every(term => 
      exp.problem.toLowerCase().includes(term) ||
      exp.solution.toLowerCase().includes(term) ||
      exp.result.toLowerCase().includes(term) ||
      (exp.author && exp.author.toLowerCase().includes(term))
    );
    const matchesResultCategory = !filters.resultCategory || exp.resultCategory === filters.resultCategory;
    const roundedRating = Math.round(exp.avgRating);
    const matchesRating = !filters.rating || roundedRating === parseInt(filters.rating);
    const matchesGender = !filters.gender || exp.gender === filters.gender;
    const matchesAge = !filters.age || exp.age === filters.age;
    
    return matchesProblemCategory && matchesSearchText && matchesResultCategory && matchesRating && matchesGender && matchesAge;
  });

  const ratingStats = [1, 2, 3, 4, 5].map(stars => ({
    stars,
    count: experiences.filter(exp => Math.round(exp.avgRating) === stars).length
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1"></div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
              <Share2 className="text-purple-600" size={36} />
              LearnFromMe
            </h1>
            <div className="flex-1 flex justify-end">
              {!isAdmin ? (
                <button
                  onClick={() => setShowAdminLogin(!showAdminLogin)}
                  className="text-sm text-gray-500 hover:text-purple-600 flex items-center gap-2"
                >
                  <Shield size={16} />
                  Admin
                </button>
              ) : (
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <Shield size={16} />
                  <span>Admin Mode</span>
                  <button
                    onClick={() => { setIsAdmin(false); setAdminKeywords(''); }}
                    className="text-xs text-gray-500 hover:text-red-600"
                  >
                    (Logout)
                  </button>
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-700 font-medium mb-1">Real problems. Real solutions. Real people.</p>
          <p className="text-gray-600">Share your experience, help someone else</p>

          {/* Admin Login */}
          {showAdminLogin && !isAdmin && (
            <div className="mt-4 bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
              <h3 className="font-semibold mb-2">Admin Login</h3>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border-2 border-gray-200 rounded-lg mb-2"
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
              <button
                onClick={handleAdminLogin}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
              >
                Login
              </button>
            </div>
          )}

          {/* Admin Keyword Filter */}
          {isAdmin && (
            <div className="mt-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg shadow-md p-4 max-w-4xl mx-auto">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Search size={20} />
                Admin Keyword Filter
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Keywords (separate with commas)
                  </label>
                  <input
                    type="text"
                    value={adminKeywords}
                    onChange={(e) => setAdminKeywords(e.target.value)}
                    placeholder="e.g., spam, scam, inappropriate, viagra"
                    className="w-full p-2 border-2 border-gray-300 rounded-lg"
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    Will search in problems, solutions, results, and comments
                  </p>
                </div>
                {adminKeywords && (
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold mb-2">
                      Found {getKeywordMatches().length} matches
                    </p>
                    {getKeywordMatches().length === 0 ? (
                      <p className="text-sm text-gray-500">No matches found</p>
                    ) : (
                      <div className="space-y-2 max-h-96 overflow-y-auto">
                        {getKeywordMatches().map((match, idx) => (
                          <div key={idx} className="border border-red-300 bg-red-50 rounded p-3">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className="text-xs font-semibold text-red-700 uppercase bg-red-200 px-2 py-1 rounded">
                                  {match.type}
                                </span>
                                {match.type === 'comment' && (
                                  <span className="text-xs text-gray-600 ml-2">
                                    on experience #{match.expId}
                                  </span>
                                )}
                              </div>
                              {(() => {
                                const confirmKey = match.type === 'comment' 
                                  ? `comment-${match.expId}-${match.commentId}`
                                  : `exp-${match.expId}`;
                                const isConfirming = confirmDelete === confirmKey;
                                
                                return (
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => {
                                        if (match.type === 'comment') {
                                          handleDeleteComment(match.expId, match.commentId);
                                        } else {
                                          handleDelete(match.expId);
                                        }
                                      }}
                                      className={`px-3 py-1 text-white text-xs rounded flex items-center gap-1 ${
                                        isConfirming 
                                          ? 'bg-orange-600 hover:bg-orange-700 animate-pulse' 
                                          : 'bg-red-600 hover:bg-red-700'
                                      }`}
                                    >
                                      <Trash2 size={12} />
                                      {isConfirming ? 'Confirm!' : 'Delete'}
                                    </button>
                                    {isConfirming && (
                                      <button
                                        onClick={() => setConfirmDelete(null)}
                                        className="px-3 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600"
                                      >
                                        Cancel
                                      </button>
                                    )}
                                  </div>
                                );
                              })()}
                            </div>
                            <p className="text-sm text-gray-700 mb-1">
                              <span className="font-medium">Keyword found:</span>{' '}
                              <span className="bg-yellow-300 px-1 rounded font-semibold">{match.keyword}</span>
                            </p>
                            {match.author && (
                              <p className="text-xs text-gray-600 mb-1">By: {match.author}</p>
                            )}
                            <p className="text-sm text-gray-600 italic border-l-4 border-yellow-400 pl-2">
                              "{match.text.substring(0, 200)}{match.text.length > 200 ? '...' : ''}"
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Formulário de Entrada */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Problem */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="text-red-500" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">Problem</h3>
              </div>
              
              <select
                value={currentEntry.problemCategory}
                onChange={(e) => setCurrentEntry({...currentEntry, problemCategory: e.target.value})}
                className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              >
                <option value="">Select category</option>
                {problemCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <div className="relative">
                <textarea
                  value={currentEntry.problem}
                  onChange={(e) => {
                    if (e.target.value.length <= maxChars.problem) {
                      setCurrentEntry({...currentEntry, problem: e.target.value});
                    }
                  }}
                  placeholder="Describe the problem you faced..."
                  className="w-full h-40 p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                  required
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {currentEntry.problem.length}/{maxChars.problem}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-blue-500" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">Action</h3>
              </div>

              <div className="relative">
                <textarea
                  value={currentEntry.solution}
                  onChange={(e) => {
                    if (e.target.value.length <= maxChars.solution) {
                      setCurrentEntry({...currentEntry, solution: e.target.value});
                    }
                  }}
                  placeholder="What did you do to solve it?"
                  className="w-full h-40 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                  required
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {currentEntry.solution.length}/{maxChars.solution}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="text-green-500" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">Result</h3>
              </div>
              
              <select
                value={currentEntry.resultCategory}
                onChange={(e) => setCurrentEntry({...currentEntry, resultCategory: e.target.value})}
                className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                required
              >
                <option value="">How was the result?</option>
                {resultCategories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>

              <div className="relative">
                <textarea
                  value={currentEntry.result}
                  onChange={(e) => {
                    if (e.target.value.length <= maxChars.result) {
                      setCurrentEntry({...currentEntry, result: e.target.value});
                    }
                  }}
                  placeholder="What was the outcome?"
                  className="w-full h-40 p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none resize-none"
                  required
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {currentEntry.result.length}/{maxChars.result}
                </div>
              </div>
            </div>
          </div>

          {/* Author Field */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author (optional)
            </label>
            <input
              type="text"
              value={currentEntry.author}
              onChange={(e) => setCurrentEntry({...currentEntry, author: e.target.value})}
              placeholder="Enter your name..."
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              maxLength={50}
            />
          </div>

          {/* Gender and Age Fields */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender (optional)
              </label>
              <select
                value={currentEntry.gender}
                onChange={(e) => setCurrentEntry({...currentEntry, gender: e.target.value})}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              >
                <option value="">Prefer not to say</option>
                {genderOptions.map(gender => (
                  <option key={gender} value={gender}>{gender}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age Range (optional)
              </label>
              <select
                value={currentEntry.age}
                onChange={(e) => setCurrentEntry({...currentEntry, age: e.target.value})}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              >
                <option value="">Prefer not to say</option>
                {ageOptions.map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
          >
            Share Experience
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Shared Experiences ({experiences.length})</h2>
          
          {/* Estatísticas de Reviews */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Rating Statistics</h3>
            <div className="grid grid-cols-5 gap-4">
              {ratingStats.reverse().map(stat => (
                <div key={stat.stars} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="text-yellow-500 fill-yellow-500" size={20} />
                    <span className="font-bold text-lg">{stat.stars}</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">{stat.count}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {stat.count === 1 ? 'experience' : 'experiences'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Filtros */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Filter Experiences</h3>
              <div className="text-sm font-medium text-purple-600">
                {filteredExperiences.length} {filteredExperiences.length === 1 ? 'experience found' : 'experiences found'}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Category</label>
                <select
                  value={filters.problemCategory}
                  onChange={(e) => setFilters({...filters, problemCategory: e.target.value})}
                  className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                >
                  <option value="">All</option>
                  {problemCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Search</label>
                <input
                  type="text"
                  value={filters.searchText}
                  onChange={(e) => setFilters({...filters, searchText: e.target.value})}
                  placeholder="Search..."
                  className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Result</label>
                <select
                  value={filters.resultCategory}
                  onChange={(e) => setFilters({...filters, resultCategory: e.target.value})}
                  className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                >
                  <option value="">All</option>
                  {resultCategories.map(cat => <option key={cat.value} value={cat.value}>{cat.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters({...filters, rating: e.target.value})}
                  className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none"
                >
                  <option value="">All</option>
                  <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                  <option value="4">⭐⭐⭐⭐ (4)</option>
                  <option value="3">⭐⭐⭐ (3)</option>
                  <option value="2">⭐⭐ (2)</option>
                  <option value="1">⭐ (1)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Gender</label>
                <select
                  value={filters.gender}
                  onChange={(e) => setFilters({...filters, gender: e.target.value})}
                  className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                >
                  <option value="">All</option>
                  {genderOptions.map(gender => <option key={gender} value={gender}>{gender}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Age</label>
                <select
                  value={filters.age}
                  onChange={(e) => setFilters({...filters, age: e.target.value})}
                  className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                >
                  <option value="">All</option>
                  {ageOptions.map(age => <option key={age} value={age}>{age}</option>)}
                </select>
              </div>
            </div>
            
            {(filters.problemCategory || filters.searchText || filters.resultCategory || filters.rating || filters.gender || filters.age) && (
              <button
                onClick={() => setFilters({ problemCategory: '', searchText: '', resultCategory: '', rating: '', gender: '', age: '' })}
                className="mt-4 text-sm text-purple-600 hover:text-purple-800 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredExperiences.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <p className="text-gray-500">No experiences found.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredExperiences.map(exp => (
                <div key={exp.id} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      {(exp.author || exp.gender || exp.age) && (
                        <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          By: {[exp.author, exp.gender, exp.age].filter(Boolean).join(', ')}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      {/* Average Rating Display */}
                      <div className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-lg">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star
                              key={star}
                              size={18}
                              className={
                                star <= Math.round(exp.avgRating)
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-gray-300'
                              }
                            />
                          ))}
                        </div>
                        <div className="text-sm font-semibold text-gray-700">
                          {exp.avgRating.toFixed(1)} 
                          <span className="text-xs text-gray-500 ml-1">({exp.totalRatings} {exp.totalRatings === 1 ? 'rating' : 'ratings'})</span>
                        </div>
                      </div>
                      
                      {/* User Rating Input */}
                      <div className="flex flex-col items-end">
                        <div className="text-xs text-gray-600 mb-1">Your rating:</div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(star => (
                            <button
                              key={star}
                              onClick={() => handleUserRating(exp.id, star)}
                              onMouseEnter={() => setHoverRating({...hoverRating, [exp.id]: star})}
                              onMouseLeave={() => setHoverRating({...hoverRating, [exp.id]: 0})}
                              className="transition-transform hover:scale-110"
                            >
                              <Star
                                size={20}
                                className={
                                  star <= (hoverRating[exp.id] || userRatings[exp.id] || 0)
                                    ? 'text-yellow-500 fill-yellow-500'
                                    : 'text-gray-300'
                                }
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-red-600 flex items-center gap-2">
                          <AlertCircle size={16} />
                          Problem
                        </h4>
                        <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                          {exp.problemCategory}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{exp.problem}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 flex items-center gap-2">
                        <TrendingUp size={16} />
                        Action
                      </h4>
                      <p className="text-sm text-gray-700">{exp.solution}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-green-600 flex items-center gap-2">
                          <Share2 size={16} />
                          Result
                        </h4>
                        <span className={`text-xs px-3 py-1 rounded-full ${getResultColor(exp.resultCategory)}`}>
                          {getResultLabel(exp.resultCategory)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{exp.result}</p>
                    </div>
                  </div>

                  {/* Admin Delete Experience Button */}
                  {isAdmin && (() => {
                    const confirmKey = `exp-${exp.id}`;
                    const isConfirming = confirmDelete === confirmKey;
                    
                    return (
                      <div className="mt-4 mb-4 flex gap-2">
                        <button
                          onClick={() => handleDelete(exp.id)}
                          className={`px-4 py-2 text-white rounded text-sm flex items-center gap-2 ${
                            isConfirming 
                              ? 'bg-orange-600 hover:bg-orange-700 animate-pulse' 
                              : 'bg-red-600 hover:bg-red-700'
                          }`}
                        >
                          <Trash2 size={14} />
                          {isConfirming ? 'Click to CONFIRM DELETE!' : 'Delete Experience'}
                        </button>
                        {isConfirming && (
                          <button
                            onClick={() => setConfirmDelete(null)}
                            className="px-4 py-2 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    );
                  })()}

                  {/* Comments Section */}
                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                        <MessageCircle size={18} />
                        Comments ({exp.comments.length})
                      </h4>
                      <button
                        onClick={() => setShowComments({...showComments, [exp.id]: !showComments[exp.id]})}
                        className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                      >
                        {showComments[exp.id] ? 'Hide' : 'Show'} Comments
                      </button>
                    </div>

                    {showComments[exp.id] && (
                      <div className="space-y-4">
                        {/* Existing Comments */}
                        {exp.comments.length > 0 && (
                          <div className="space-y-3 mb-4">
                            {exp.comments.map(comment => (
                              <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                                <div className="flex justify-between items-start mb-1">
                                  <span className="font-semibold text-sm text-gray-800">{comment.author}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                                    {isAdmin && (
                                      <button
                                        onClick={() => handleDeleteComment(exp.id, comment.id)}
                                        className="text-xs text-red-600 hover:text-red-800 font-medium"
                                      >
                                        Delete
                                      </button>
                                    )}
                                  </div>
                                </div>
                                <p className="text-sm text-gray-700">{comment.text}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add Comment Input */}
                        <div className="flex gap-2">
                          <textarea
                            value={newComment[exp.id] || ''}
                            onChange={(e) => {
                              if (e.target.value.length <= maxChars.comment) {
                                setNewComment({...newComment, [exp.id]: e.target.value});
                              }
                            }}
                            placeholder="Add a comment..."
                            className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                            rows="2"
                          />
                          <button
                            onClick={() => handleAddComment(exp.id)}
                            disabled={!newComment[exp.id]?.trim()}
                            className="px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                          >
                            <Send size={18} />
                          </button>
                        </div>
                        <div className="text-xs text-gray-500 text-right">
                          {(newComment[exp.id] || '').length}/{maxChars.comment}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
