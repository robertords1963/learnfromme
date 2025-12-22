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
      avgRating: 4.6,
      totalRatings: 174,
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
      avgRating: 4.0,
      totalRatings: 144,
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
      avgRating: 4.0,
      totalRatings: 190,
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
      avgRating: 4.4,
      totalRatings: 175,
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
      avgRating: 4.8,
      totalRatings: 187,
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
      avgRating: 4.4,
      totalRatings: 169,
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
      avgRating: 4.5,
      totalRatings: 120,
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
      avgRating: 4.7,
      totalRatings: 163,
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
      avgRating: 4.7,
      totalRatings: 136,
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
      avgRating: 4.3,
      totalRatings: 194,
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
      avgRating: 4.4,
      totalRatings: 176,
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
      avgRating: 4.0,
      totalRatings: 151,
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
      avgRating: 4.1,
      totalRatings: 197,
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
      avgRating: 4.0,
      totalRatings: 178,
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
      avgRating: 4.3,
      totalRatings: 160,
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
      avgRating: 4.4,
      totalRatings: 163,
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
      avgRating: 4.7,
      totalRatings: 121,
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
      avgRating: 4.4,
      totalRatings: 198,
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
      avgRating: 4.2,
      totalRatings: 191,
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
      avgRating: 4.1,
      totalRatings: 191,
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
      avgRating: 4.5,
      totalRatings: 197,
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
      avgRating: 4.7,
      totalRatings: 189,
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
      avgRating: 4.4,
      totalRatings: 158,
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
      avgRating: 4.4,
      totalRatings: 195,
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
      avgRating: 4.4,
      totalRatings: 173,
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
      avgRating: 4.5,
      totalRatings: 161,
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
      avgRating: 4.3,
      totalRatings: 174,
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
      avgRating: 4.1,
      totalRatings: 124,
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
      avgRating: 4.4,
      totalRatings: 166,
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
      avgRating: 4.2,
      totalRatings: 153,
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
      avgRating: 4.6,
      totalRatings: 189,
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
      avgRating: 4.1,
      totalRatings: 135,
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
      avgRating: 4.7,
      totalRatings: 154,
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
      avgRating: 4.7,
      totalRatings: 200,
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
      avgRating: 4.0,
      totalRatings: 125,
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
      avgRating: 4.1,
      totalRatings: 160,
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
      avgRating: 4.8,
      totalRatings: 141,
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
      avgRating: 4.6,
      totalRatings: 122,
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
      avgRating: 4.2,
      totalRatings: 168,
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
      avgRating: 4.8,
      totalRatings: 187,
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
      avgRating: 4.1,
      totalRatings: 153,
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
      avgRating: 4.2,
      totalRatings: 158,
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
      avgRating: 4.2,
      totalRatings: 190,
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
      avgRating: 4.7,
      totalRatings: 135,
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
      avgRating: 4.2,
      totalRatings: 189,
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
      avgRating: 4.1,
      totalRatings: 121,
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
      avgRating: 4.3,
      totalRatings: 164,
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
      avgRating: 4.0,
      totalRatings: 127,
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
      avgRating: 4.0,
      totalRatings: 142,
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
      avgRating: 4.1,
      totalRatings: 136,
      comments: []
    },
    {
      id: 146,
      problem: 'Recurring yeast infections despite following hygiene recommendations',
      problemCategory: 'Health',
      solution: 'Researched gut health connection, started probiotic regimen and reduced sugar intake',
      result: 'Infections stopped completely after addressing root cause',
      resultCategory: 'worked',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.7,
      totalRatings: 134,
      comments: []
    },
    {
      id: 147,
      problem: 'Wedding venue cancelled 3 months before date due to double booking',
      problemCategory: 'Other',
      solution: 'Threatened lawsuit and demanded compensation, posted negative reviews',
      result: 'Venue owner became defensive, no resolution, lost deposit',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.0,
      totalRatings: 156,
      comments: []
    },
    {
      id: 148,
      problem: 'Toddler refusing to eat vegetables, diet consisting mainly of carbs',
      problemCategory: 'Family',
      solution: 'Hid vegetables in smoothies and sauces, made eating fun with shapes',
      result: 'Child now willingly eats variety of vegetables, balanced diet achieved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 118,
      comments: []
    },
    {
      id: 149,
      problem: 'Constant ringing in ears (tinnitus) affecting concentration and sleep',
      problemCategory: 'Health',
      solution: 'Tried sound therapy apps and white noise machines',
      result: 'Tinnitus volume unchanged, still same level of disturbance',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.8,
      totalRatings: 169,
      comments: []
    },
    {
      id: 150,
      problem: 'Landlord refusing to fix broken heating despite winter temperatures',
      problemCategory: 'Other',
      solution: 'Documented issues, filed complaint with housing authority, withheld rent in escrow',
      result: 'Heat fixed within week, landlord now responsive to all maintenance',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 156,
      comments: []
    },
    {
      id: 151,
      problem: 'Sibling borrowing money repeatedly and never paying back',
      problemCategory: 'Family',
      solution: 'Lent more money hoping they would eventually pay everything back',
      result: 'Now owed even more money, relationship strained, still no repayment',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.0,
      totalRatings: 199,
      comments: []
    },
    {
      id: 152,
      problem: 'Dental anxiety preventing regular checkups, developing cavities',
      problemCategory: 'Health',
      solution: 'Found dentist specializing in anxious patients, used sedation dentistry',
      result: 'Completed all needed work, now comfortable with regular visits',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 187,
      comments: []
    },
    {
      id: 153,
      problem: 'Neighbors loud parties every weekend until 3am',
      problemCategory: 'Other',
      solution: 'Called police for noise complaints multiple times',
      result: 'Parties continue, neighbors now hostile, situation more tense',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.3,
      totalRatings: 132,
      comments: []
    },
    {
      id: 154,
      problem: 'Severe test anxiety causing failing grades despite knowing material',
      problemCategory: 'Education',
      solution: 'Worked with counselor on test-taking strategies and breathing techniques',
      result: 'Anxiety reduced significantly, grades improved from D to B average',
      resultCategory: 'worked',
      author: '',
      age: '0-20',
      avgRating: 4.5,
      totalRatings: 142,
      comments: []
    },
    {
      id: 155,
      problem: 'Hair thinning and falling out in patches, diagnosed as stress-related',
      problemCategory: 'Health',
      solution: 'Started expensive hair growth supplements and topical treatments',
      result: 'No regrowth after 6 months, thinning continues at same rate',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.8,
      totalRatings: 169,
      comments: []
    },
    {
      id: 156,
      problem: 'Boss micromanaging every task, destroying team morale',
      problemCategory: 'Work',
      solution: 'Documented instances, scheduled meeting with HR to discuss management style',
      result: 'Boss received coaching, gave team more autonomy, morale improved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 97,
      comments: []
    },
    {
      id: 157,
      problem: 'Dog destroying furniture when left alone, separation anxiety',
      problemCategory: 'Other',
      solution: 'Hired animal behaviorist, implemented gradual desensitization training',
      result: 'Dog now calm when alone, no more destructive behavior',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 163,
      comments: []
    },
    {
      id: 158,
      problem: 'Smartphone addiction affecting productivity and relationships',
      problemCategory: 'Well-being',
      solution: 'Deleted social media apps from phone',
      result: 'Redownloaded apps within a week, usage patterns unchanged',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.6,
      totalRatings: 151,
      comments: []
    },
    {
      id: 159,
      problem: 'Partner leaving dirty dishes everywhere despite multiple discussions',
      problemCategory: 'Relationship',
      solution: 'Stopped doing dishes entirely to prove a point',
      result: 'Kitchen became unusable disaster, resentment escalated, relationship damaged',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.4,
      totalRatings: 166,
      comments: []
    },
    {
      id: 160,
      problem: 'Baby crying inconsolably for hours every evening, colic diagnosis',
      problemCategory: 'Family',
      solution: 'Tried eliminating dairy from diet (breastfeeding), used gentle motion techniques',
      result: 'Crying reduced dramatically, baby now calm in evenings',
      resultCategory: 'worked',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.9,
      totalRatings: 201,
      comments: []
    },
    {
      id: 161,
      problem: 'Fraudulent charges appearing on credit card monthly',
      problemCategory: 'Finance',
      solution: 'Called bank fraud department, got new card issued with monitoring',
      result: 'Fraudulent charges stopped, credit protected, issue resolved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 145,
      comments: []
    },
    {
      id: 162,
      problem: 'Chronic shin splints from running preventing training',
      problemCategory: 'Health',
      solution: 'Rested completely for 2 weeks as recommended',
      result: 'Pain returned immediately when resumed running, no improvement',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.3,
      totalRatings: 200,
      comments: []
    },
    {
      id: 163,
      problem: 'Wedding photographer demanding additional payment beyond contract',
      problemCategory: 'Other',
      solution: 'Refused payment, showed original contract, filed complaint with Better Business Bureau',
      result: 'Received all photos as contracted, photographer backed down',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 128,
      comments: []
    },
    {
      id: 164,
      problem: 'Teenager coming home drunk on weekends',
      problemCategory: 'Family',
      solution: 'Grounded for 3 months and took away car privileges',
      result: 'Teen became more secretive, started lying about whereabouts, drinking increased',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.4,
      totalRatings: 189,
      comments: []
    },
    {
      id: 165,
      problem: 'Garage door opener breaking, door stuck closed with car inside',
      problemCategory: 'Other',
      solution: 'Watched YouTube tutorial, manually released emergency cord, fixed mechanism',
      result: 'Door opened, learned to maintain system, saved repair costs',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 89,
      comments: []
    },
    {
      id: 166,
      problem: 'Feeling burnt out from caregiving for elderly parent',
      problemCategory: 'Family',
      solution: 'Tried to push through exhaustion without asking for help',
      result: 'Developed health issues from stress, situation unsustainable',
      resultCategory: 'got-worse',
      author: '',
      age: '41-60',
      avgRating: 4.7,
      totalRatings: 152,
      comments: []
    },
    {
      id: 167,
      problem: 'Iron deficiency anemia causing extreme fatigue',
      problemCategory: 'Health',
      solution: 'Doctor prescribed iron supplements and dietary changes',
      result: 'Energy levels normalized within 6 weeks, blood work improved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 167,
      comments: []
    },
    {
      id: 168,
      problem: 'Social media comparison causing depression and low self-esteem',
      problemCategory: 'Well-being',
      solution: 'Set time limits on social media apps',
      result: 'Still scrolling during allotted time, mental health unchanged',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.4,
      totalRatings: 163,
      comments: []
    },
    {
      id: 169,
      problem: 'WiFi router constantly dropping connection during work video calls',
      problemCategory: 'Other',
      solution: 'Upgraded internet plan to higher speed tier',
      result: 'Connection stable, video calls clear, work productivity improved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 112,
      comments: []
    },
    {
      id: 170,
      problem: 'Coworkers gossiping and excluding me from lunch groups',
      problemCategory: 'Work',
      solution: 'Confronted them aggressively about their behavior',
      result: 'Became workplace pariah, exclusion intensified, HR involved',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.5,
      totalRatings: 185,
      comments: []
    },
    {
      id: 171,
      problem: 'Vacuum cleaner lost suction, not picking up dirt effectively',
      problemCategory: 'Other',
      solution: 'Cleaned filters, removed blockages, replaced worn belt',
      result: 'Suction restored to like-new performance, saved buying new vacuum',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 78,
      comments: []
    },
    {
      id: 172,
      problem: 'Teenager refusing to do homework, failing multiple classes',
      problemCategory: 'Education',
      solution: 'Researched learning disabilities, got comprehensive evaluation done',
      result: 'Diagnosed with dyslexia, proper support implemented, grades improving',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 194,
      comments: []
    },
    {
      id: 173,
      problem: 'Morning stiffness and joint pain in hands, worsening over time',
      problemCategory: 'Health',
      solution: 'Tried glucosamine supplements recommended by pharmacist',
      result: 'No change in symptoms after 3 months of consistent use',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.5,
      totalRatings: 143,
      comments: []
    },
    {
      id: 174,
      problem: 'HOA threatening fines for lawn not meeting standards',
      problemCategory: 'Other',
      solution: 'Installed artificial turf to eliminate maintenance issues',
      result: 'Lawn always perfect, no more complaints, increased property value',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 103,
      comments: []
    },
    {
      id: 175,
      problem: 'Feeling overwhelmed by clutter but unable to start decluttering',
      problemCategory: 'Well-being',
      solution: 'Bought organizing containers and storage bins',
      result: 'Clutter reorganized into containers, still same amount of stuff',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.0,
      totalRatings: 186,
      comments: []
    },
    {
      id: 176,
      problem: 'Cat urinating outside litter box, ruining carpet',
      problemCategory: 'Other',
      solution: 'Vet checkup revealed urinary tract infection, prescribed antibiotics',
      result: 'Infection cleared, litter box habits returned to normal',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 138,
      comments: []
    },
    {
      id: 177,
      problem: 'Flight delayed causing missed connection and ruined vacation start',
      problemCategory: 'Other',
      solution: 'Demanded compensation and threatened social media complaint',
      result: 'Airline blacklisted from future compensation, no resolution',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.6,
      totalRatings: 149,
      comments: []
    },
    {
      id: 178,
      problem: 'Lower back pain from poor office chair ergonomics',
      problemCategory: 'Work',
      solution: 'Requested ergonomic chair through workplace accommodation request',
      result: 'Received proper chair, back pain eliminated within 2 weeks',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 152,
      comments: []
    },
    {
      id: 179,
      problem: 'Prenatal anxiety about childbirth causing panic attacks',
      problemCategory: 'Health',
      solution: 'Took childbirth education class, practiced relaxation techniques with partner',
      result: 'Felt prepared and confident, anxiety reduced significantly',
      resultCategory: 'worked',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.7,
      totalRatings: 129,
      comments: []
    },
    {
      id: 180,
      problem: 'Chronic bad breath despite good oral hygiene routine',
      problemCategory: 'Health',
      solution: 'Tried various mouthwashes and tongue scrapers',
      result: 'No improvement in breath odor, still self-conscious',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 146,
      comments: []
    },
    {
      id: 181,
      problem: 'Identity theft victim, credit cards opened in my name',
      problemCategory: 'Finance',
      solution: 'Filed police report, froze credit, disputed all fraudulent accounts',
      result: 'All fraudulent accounts removed, credit restored, monitoring in place',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 117,
      comments: []
    },
    {
      id: 182,
      problem: 'Friend constantly canceling plans at last minute',
      problemCategory: 'Relationship',
      solution: 'Stopped making plans with them and didn\'t explain why',
      result: 'Friendship faded away, lost connection completely',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.2,
      totalRatings: 190,
      comments: []
    },
    {
      id: 183,
      problem: 'Nail biting habit causing damaged nails and cuticles',
      problemCategory: 'Well-being',
      solution: 'Applied bitter-tasting nail polish designed to prevent biting',
      result: 'Habit broken within 3 weeks, nails healthy for first time in years',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 96,
      comments: []
    },
    {
      id: 184,
      problem: 'Severe period cramps causing missed work days monthly',
      problemCategory: 'Health',
      solution: 'Doctor prescribed birth control specifically for symptom management',
      result: 'Cramps reduced by 80%, no more missed work days',
      resultCategory: 'worked',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.8,
      totalRatings: 176,
      comments: []
    },
    {
      id: 185,
      problem: 'Washer leaving clothes with musty smell despite multiple wash cycles',
      problemCategory: 'Other',
      solution: 'Ran cleaning cycle with vinegar and baking soda, cleaned door seal',
      result: 'Musty smell eliminated, clothes fresh again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 87,
      comments: []
    },
    {
      id: 186,
      problem: 'Workplace bully making work environment hostile',
      problemCategory: 'Work',
      solution: 'Tried to avoid the person and stayed silent',
      result: 'Bullying escalated, mental health declined, still no resolution',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.1,
      totalRatings: 139,
      comments: []
    },
    {
      id: 187,
      problem: 'Bird feeder attracting rats to yard',
      problemCategory: 'Other',
      solution: 'Switched to squirrel-proof feeder, cleaned spilled seeds daily',
      result: 'Rats disappeared, only birds visiting now',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 72,
      comments: []
    },
    {
      id: 188,
      problem: 'Constant arguments with teenage daughter about curfew',
      problemCategory: 'Family',
      solution: 'Had calm discussion, negotiated compromise based on responsibility shown',
      result: 'Daughter respects new curfew, arguments stopped, trust built',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 141,
      comments: []
    },
    {
      id: 189,
      problem: 'Gym membership draining bank account but never going',
      problemCategory: 'Finance',
      solution: 'Kept membership hoping motivation would return',
      result: 'Still not going, wasted another year of payments',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.1,
      totalRatings: 168,
      comments: []
    },
    {
      id: 190,
      problem: 'Dishwasher not cleaning dishes properly, leaving residue',
      problemCategory: 'Other',
      solution: 'Cleaned spray arms, replaced filter, ran maintenance cycle',
      result: 'Dishes coming out spotless again, problem solved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 68,
      comments: []
    },
    {
      id: 191,
      problem: 'Adult acne suddenly appearing in 30s despite clear skin before',
      problemCategory: 'Health',
      solution: 'Saw dermatologist, started prescription retinoid and cleanser routine',
      result: 'Skin cleared within 8 weeks, confidence restored',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 183,
      comments: []
    },
    {
      id: 192,
      problem: 'Partner spending too much time with friends, neglecting relationship',
      problemCategory: 'Relationship',
      solution: 'Gave ultimatum: me or your friends',
      result: 'Partner chose friends, relationship ended badly',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.3,
      totalRatings: 142,
      comments: []
    },
    {
      id: 193,
      problem: 'Refrigerator making loud noise, concerned about breakdown',
      problemCategory: 'Other',
      solution: 'Vacuumed condenser coils, leveled unit, tightened loose parts',
      result: 'Noise eliminated, refrigerator running efficiently',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 61,
      comments: []
    },
    {
      id: 194,
      problem: 'Procrastinating on important project at work, deadline approaching',
      problemCategory: 'Work',
      solution: 'Broke project into small tasks, used pomodoro technique for focus',
      result: 'Completed project on time with quality work, manager impressed',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 124,
      comments: []
    },
    {
      id: 195,
      problem: 'Persistent dry cough for weeks with no other cold symptoms',
      problemCategory: 'Health',
      solution: 'Tried over-the-counter cough suppressants and lozenges',
      result: 'Cough continued unchanged for months, suppressants ineffective',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.8,
      totalRatings: 174,
      comments: []
    },
    {
      id: 196,
      problem: 'Monthly subscriptions adding up, losing track of charges',
      problemCategory: 'Finance',
      solution: 'Audited all subscriptions, cancelled unused services, consolidated remaining',
      result: 'Saving $200 monthly, only keeping valuable subscriptions',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 149,
      comments: []
    },
    {
      id: 197,
      problem: 'Toddler tantrums in public causing embarrassment',
      problemCategory: 'Family',
      solution: 'Gave in to demands to stop tantrums quickly',
      result: 'Tantrums increased in frequency and intensity, behavior worsened',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.0,
      totalRatings: 187,
      comments: []
    },
    {
      id: 198,
      problem: 'Toilet running constantly, water bill increasing',
      problemCategory: 'Other',
      solution: 'Replaced flapper valve and fill valve (DIY YouTube tutorial)',
      result: 'Toilet fixed, water bill back to normal, saved plumber cost',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 134,
      comments: []
    },
    {
      id: 199,
      problem: 'Performance anxiety before presentations causing physical symptoms',
      problemCategory: 'Work',
      solution: 'Practiced presentation repeatedly, visualized success, used breathing exercises',
      result: 'Delivered confident presentation, anxiety manageable, received praise',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 107,
      comments: []
    },
    {
      id: 200,
      problem: 'Persistent athlete\'s foot despite antifungal creams',
      problemCategory: 'Health',
      solution: 'Continued using same over-the-counter cream for months',
      result: 'Infection unchanged, still itchy and uncomfortable',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.6,
      totalRatings: 178,
      comments: []
    },
    {
      id: 201,
      problem: 'Basement flooding during heavy rain, water damage to belongings',
      problemCategory: 'Other',
      solution: 'Installed sump pump and improved drainage around foundation',
      result: 'No more flooding even in heaviest storms, basement dry',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 162,
      comments: []
    },
    {
      id: 202,
      problem: 'Ex-partner harassing with constant phone calls and texts',
      problemCategory: 'Relationship',
      solution: 'Responded to messages trying to reason and get closure',
      result: 'Harassment intensified, had to get restraining order',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.1,
      totalRatings: 194,
      comments: []
    },
    {
      id: 203,
      problem: 'Computer running extremely slow, taking forever to boot up',
      problemCategory: 'Other',
      solution: 'Upgraded to SSD hard drive and added more RAM',
      result: 'Computer like new, boots in 10 seconds, runs all programs smoothly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 198,
      comments: []
    },
    {
      id: 204,
      problem: 'Anxiety about flying causing avoidance of necessary travel',
      problemCategory: 'Well-being',
      solution: 'Worked with therapist using exposure therapy and cognitive behavioral techniques',
      result: 'Successfully flew across country, anxiety reduced by 70%',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 156,
      comments: []
    },
    {
      id: 205,
      problem: 'Kitchen faucet dripping constantly, annoying sound at night',
      problemCategory: 'Other',
      solution: 'Replaced worn washers and O-rings following online guide',
      result: 'Drip completely stopped, saved water and money',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 79,
      comments: []
    },
    {
      id: 206,
      problem: 'Weight gain from stress eating during difficult period',
      problemCategory: 'Health',
      solution: 'Tried willpower alone to stop emotional eating',
      result: 'Still stress eating, weight continues to increase',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.4,
      totalRatings: 159,
      comments: []
    },
    {
      id: 207,
      problem: 'Mold smell in car despite cleaning, source unknown',
      problemCategory: 'Other',
      solution: 'Found water leak in door seal, fixed seal and deep cleaned carpet',
      result: 'Smell completely gone, car fresh again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 91,
      comments: []
    },
    {
      id: 208,
      problem: 'Adult child living at home rent-free, not contributing',
      problemCategory: 'Family',
      solution: 'Continued allowing free housing hoping they would mature on their own',
      result: 'Child more entitled, still no job, relationship strained',
      resultCategory: 'got-worse',
      author: '',
      age: '41-60',
      avgRating: 4.8,
      totalRatings: 182,
      comments: []
    },
    {
      id: 209,
      problem: 'Smartphone battery draining in just few hours',
      problemCategory: 'Other',
      solution: 'Identified battery-draining apps, adjusted settings, replaced old battery',
      result: 'Battery lasts full day again, phone usable',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 86,
      comments: []
    },
    {
      id: 210,
      problem: 'Feeling disconnected from spiritual practice, faith declining',
      problemCategory: 'Well-being',
      solution: 'Forced attendance at services out of obligation',
      result: 'Resentment built up, spiritual connection worsened',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.1,
      totalRatings: 168,
      comments: []
    },
    {
      id: 211,
      problem: 'Squeaky door hinges throughout house driving family crazy',
      problemCategory: 'Other',
      solution: 'Applied WD-40 lubricant to all door hinges',
      result: 'All squeaks eliminated, doors silent and smooth',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 64,
      comments: []
    },
    {
      id: 212,
      problem: 'Chronic headaches after starting new job with fluorescent lighting',
      problemCategory: 'Health',
      solution: 'Requested desk near window, started using blue-light glasses',
      result: 'Headaches reduced by 90%, work quality improved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 139,
      comments: []
    },
    {
      id: 213,
      problem: 'Lawn full of weeds overtaking grass',
      problemCategory: 'Other',
      solution: 'Applied weed killer and fertilizer on proper schedule',
      result: 'Lawn thick and green, weeds eliminated',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 98,
      comments: []
    },
    {
      id: 214,
      problem: 'Chronic fatigue despite normal blood work and checkup',
      problemCategory: 'Health',
      solution: 'Tried various energy supplements from health store',
      result: 'Fatigue unchanged, money wasted on ineffective supplements',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 191,
      comments: []
    },
    {
      id: 215,
      problem: 'Ants invading kitchen every spring despite cleaning',
      problemCategory: 'Other',
      solution: 'Found entry point, sealed cracks, used ant bait stations strategically',
      result: 'Ant problem solved completely, no more invasions',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 143,
      comments: []
    },
    {
      id: 216,
      problem: 'Child being bullied at school, refusing to go',
      problemCategory: 'Education',
      solution: 'Met with school administrators, implemented anti-bullying plan with monitoring',
      result: 'Bullying stopped, child happy at school again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 187,
      comments: []
    },
    {
      id: 217,
      problem: 'Insomnia worsening, averaging 3-4 hours sleep nightly',
      problemCategory: 'Health',
      solution: 'Established consistent sleep routine, eliminated screens before bed, sleep hygiene',
      result: 'Now sleeping 7-8 hours consistently, energy restored',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 171,
      comments: []
    },
    {
      id: 218,
      problem: 'Car battery dying repeatedly, jump starts not lasting',
      problemCategory: 'Other',
      solution: 'Had battery and alternator tested, replaced failing alternator',
      result: 'Battery charging properly, no more issues',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 94,
      comments: []
    },
    {
      id: 219,
      problem: 'Productivity declining, procrastinating on everything',
      problemCategory: 'Work',
      solution: 'Downloaded productivity apps and read articles about time management',
      result: 'Still procrastinating, apps unused, no change in habits',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.4,
      totalRatings: 200,
      comments: []
    },
    {
      id: 220,
      problem: 'Credit card debt spiraling, minimum payments barely covering interest',
      problemCategory: 'Finance',
      solution: 'Used balance transfer card, created strict budget, stopped all unnecessary spending',
      result: 'Debt paid off in 18 months, financially stable now',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 206,
      comments: []
    },
    {
      id: 221,
      problem: 'Constantly comparing myself to others on social media',
      problemCategory: 'Well-being',
      solution: 'Deactivated all social media accounts for 30 days',
      result: 'Mental health improved dramatically, self-esteem recovered',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 164,
      comments: []
    },
    {
      id: 222,
      problem: 'Bedroom too hot to sleep comfortably in summer',
      problemCategory: 'Other',
      solution: 'Installed blackout curtains and portable AC unit',
      result: 'Room cool and dark, sleep quality improved significantly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 118,
      comments: []
    },
    {
      id: 223,
      problem: 'Package delivery drivers leaving packages in rain',
      problemCategory: 'Other',
      solution: 'Built simple covered porch box with clear delivery instructions',
      result: 'All packages protected now, no more damaged deliveries',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 73,
      comments: []
    },
    {
      id: 224,
      problem: 'Severe postpartum depression affecting bonding with baby',
      problemCategory: 'Health',
      solution: 'Started therapy and medication as prescribed by doctor',
      result: 'Depression lifted, bonding with baby, enjoying motherhood',
      resultCategory: 'worked',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.9,
      totalRatings: 213,
      comments: []
    },
    {
      id: 225,
      problem: 'Pipes freezing and bursting during winter cold snap',
      problemCategory: 'Other',
      solution: 'Insulated exposed pipes, left faucets dripping during freezes',
      result: 'No more frozen pipes even in coldest weather',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 127,
      comments: []
    },
    {
      id: 226,
      problem: 'Feeling unfulfilled despite career success',
      problemCategory: 'Well-being',
      solution: 'Started volunteering weekly at local food bank',
      result: 'Found meaning and purpose, life satisfaction increased',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 152,
      comments: []
    },
    {
      id: 227,
      problem: 'Smoke detector chirping constantly indicating low battery',
      problemCategory: 'Other',
      solution: 'Replaced battery in smoke detector',
      result: 'Chirping stopped, detector working properly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.2,
      totalRatings: 57,
      comments: []
    },
    {
      id: 228,
      problem: 'Tension headaches from jaw clenching, especially during sleep',
      problemCategory: 'Health',
      solution: 'Dentist fitted custom night guard for teeth grinding',
      result: 'Headaches gone, jaw pain eliminated, sleeping better',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 169,
      comments: []
    },
    {
      id: 229,
      problem: 'Tree roots damaging driveway, creating trip hazard',
      problemCategory: 'Other',
      solution: 'Installed root barrier and resurfaced affected area',
      result: 'Driveway smooth and safe, roots redirected',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 81,
      comments: []
    },
    {
      id: 230,
      problem: 'Difficulty concentrating, suspected undiagnosed ADHD',
      problemCategory: 'Health',
      solution: 'Got proper evaluation, started medication and coaching',
      result: 'Concentration improved dramatically, work performance excellent',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 195,
      comments: []
    },
    {
      id: 231,
      problem: 'Closet organization chaotic, cannot find clothes',
      problemCategory: 'Other',
      solution: 'Installed closet organization system with sections and labels',
      result: 'Everything organized and accessible, mornings stress-free',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 92,
      comments: []
    },
    {
      id: 232,
      problem: 'Fruit flies infesting kitchen despite cleaning',
      problemCategory: 'Other',
      solution: 'Made vinegar trap, found and removed overripe fruit source',
      result: 'Fruit flies eliminated within 3 days',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 104,
      comments: []
    },
    {
      id: 233,
      problem: 'Grass dying in patches, lawn looking terrible',
      problemCategory: 'Other',
      solution: 'Soil test revealed pH imbalance, amended soil and reseeded',
      result: 'Lawn thick and healthy, patches filled in',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 76,
      comments: []
    },
    {
      id: 234,
      problem: 'Shower drain slow, water pooling during showers',
      problemCategory: 'Other',
      solution: 'Used drain snake to remove hair clog, applied enzyme cleaner',
      result: 'Drain flowing perfectly, no more standing water',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 69,
      comments: []
    },
    {
      id: 235,
      problem: 'Low self-esteem affecting all areas of life',
      problemCategory: 'Well-being',
      solution: 'Started therapy focused on self-compassion and cognitive restructuring',
      result: 'Self-esteem improved, relationships better, pursuing goals',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 178,
      comments: []
    },
    {
      id: 236,
      problem: 'Windows drafty, high heating bills in winter',
      problemCategory: 'Other',
      solution: 'Applied weatherstripping and plastic film insulation',
      result: 'Drafts eliminated, heating bill reduced by 30%',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 133,
      comments: []
    },
    {
      id: 237,
      problem: 'Chronic sinus congestion and post-nasal drip',
      problemCategory: 'Health',
      solution: 'Started daily saline nasal rinses with neti pot',
      result: 'Congestion cleared, breathing improved, fewer sinus infections',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 147,
      comments: []
    },
    {
      id: 238,
      problem: 'Squirrels eating all bird seed from feeders',
      problemCategory: 'Other',
      solution: 'Installed squirrel baffle on feeder pole',
      result: 'Squirrels cannot reach feeders, birds feeding peacefully',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 88,
      comments: []
    },
    {
      id: 239,
      problem: 'Paint peeling on exterior of house',
      problemCategory: 'Other',
      solution: 'Scraped loose paint, primed and repainted with quality exterior paint',
      result: 'House looks new, paint holding up well',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 71,
      comments: []
    },
    {
      id: 240,
      problem: 'Overthinking everything, analysis paralysis preventing decisions',
      problemCategory: 'Well-being',
      solution: 'Learned to set decision deadlines, trusted gut more, limited information gathering',
      result: 'Making decisions confidently, less stress, moving forward',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 161,
      comments: []
    },
    {
      id: 241,
      problem: 'Gutters clogged causing water overflow',
      problemCategory: 'Other',
      solution: 'Cleaned gutters and installed gutter guards',
      result: 'Water flowing properly, no more clogs or overflow',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 109,
      comments: []
    },
    {
      id: 242,
      problem: 'Allergies to pet but love dog too much to rehome',
      problemCategory: 'Health',
      solution: 'Started allergy shots, HEPA filters, groomed dog weekly',
      result: 'Allergies manageable, keeping beloved pet',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 158,
      comments: []
    },
    {
      id: 243,
      problem: 'Tile grout in bathroom turning black with mold',
      problemCategory: 'Other',
      solution: 'Cleaned with bleach solution, resealed grout',
      result: 'Grout white again, sealed properly, mold gone',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 95,
      comments: []
    },
    {
      id: 244,
      problem: 'Overthinking and rumination preventing sleep',
      problemCategory: 'Well-being',
      solution: 'Started journaling before bed, meditation practice',
      result: 'Mind quieter at night, falling asleep easier',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 142,
      comments: []
    },
    {
      id: 245,
      problem: 'Yard mosquitoes making outdoor time unbearable',
      problemCategory: 'Other',
      solution: 'Eliminated standing water, used mosquito dunks, planted repellent plants',
      result: 'Mosquito population reduced by 90%, enjoying yard again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 126,
      comments: []
    },
    {
      id: 246,
      problem: 'Chronic knee pain from old sports injury limiting mobility',
      problemCategory: 'Health',
      solution: 'Started targeted strength training and physical therapy exercises',
      result: 'Pain reduced by 70%, regained full range of motion',
      resultCategory: 'worked',
      author: '',
      gender: 'Male',
      age: '41-60',
      avgRating: 4.8,
      totalRatings: 167,
      comments: []
    },
    {
      id: 247,
      problem: 'Partner checked out of relationship, spending all time on phone',
      problemCategory: 'Relationship',
      solution: 'Nagged constantly about phone usage',
      result: 'Partner became defensive, withdrew more, relationship deteriorated',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.5,
      totalRatings: 143,
      comments: []
    },
    {
      id: 248,
      problem: 'House plants constantly dying despite following care instructions',
      problemCategory: 'Other',
      solution: 'Bought moisture meter and tested light levels, adjusted placement',
      result: 'All plants thriving now, understand their needs better',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 119,
      comments: []
    },
    {
      id: 249,
      problem: 'Severe muscle soreness after workouts lasting days',
      problemCategory: 'Health',
      solution: 'Tried various recovery supplements and creams',
      result: 'Soreness duration unchanged, supplements ineffective',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 156,
      comments: []
    },
    {
      id: 250,
      problem: 'Neighbor built fence 2 feet into my property line',
      problemCategory: 'Other',
      solution: 'Got property survey, showed neighbor proof, requested fence moved',
      result: 'Fence relocated to correct property line, issue resolved amicably',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 134,
      comments: []
    },
    {
      id: 251,
      problem: 'Child struggling with multiplication tables despite practice',
      problemCategory: 'Education',
      solution: 'Increased homework time and added more drills',
      result: 'Child developed math anxiety, performance declined further',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.3,
      totalRatings: 178,
      comments: []
    },
    {
      id: 252,
      problem: 'Basement moisture causing musty smell and mildew',
      problemCategory: 'Other',
      solution: 'Installed dehumidifier and improved ventilation',
      result: 'Humidity controlled, smell gone, no more mildew growth',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 162,
      comments: []
    },
    {
      id: 253,
      problem: 'Chronic shoulder pain from desk work posture',
      problemCategory: 'Health',
      solution: 'Tried stretching exercises found online',
      result: 'Pain persisted at same level despite regular stretching',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.1,
      totalRatings: 147,
      comments: []
    },
    {
      id: 254,
      problem: 'Smart home devices constantly disconnecting from WiFi',
      problemCategory: 'Other',
      solution: 'Upgraded to mesh WiFi system with better coverage',
      result: 'All devices connected reliably, smart home functional',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 141,
      comments: []
    },
    {
      id: 255,
      problem: 'Wedding planning causing extreme stress and family conflicts',
      problemCategory: 'Relationship',
      solution: 'Tried to please everyone with compromises on all decisions',
      result: 'Everyone still unhappy, stress increased, conflicts escalated',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.4,
      totalRatings: 189,
      comments: []
    },
    {
      id: 256,
      problem: 'Dog aggressive toward other dogs on walks',
      problemCategory: 'Other',
      solution: 'Hired professional dog trainer for behavioral modification',
      result: 'Dog now calm around other dogs, walks enjoyable',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.9,
      totalRatings: 203,
      comments: []
    },
    {
      id: 257,
      problem: 'Recurring UTIs every few months despite hygiene',
      problemCategory: 'Health',
      solution: 'Started taking cranberry supplements daily',
      result: 'UTIs continued at same frequency, supplements ineffective',
      resultCategory: 'no-change',
      author: '',
      gender: 'Female',
      age: '21-40',
      avgRating: 4.3,
      totalRatings: 168,
      comments: []
    },
    {
      id: 258,
      problem: 'Severe test anxiety in college affecting GPA',
      problemCategory: 'Education',
      solution: 'Registered with disability services, received testing accommodations',
      result: 'Anxiety manageable with extra time, GPA improved significantly',
      resultCategory: 'worked',
      author: '',
      age: '0-20',
      avgRating: 4.8,
      totalRatings: 176,
      comments: []
    },
    {
      id: 259,
      problem: 'Family expecting me to host all holidays, feeling burnt out',
      problemCategory: 'Family',
      solution: 'Agreed to host again to avoid confrontation',
      result: 'Resentment built up, exhaustion worsened, relationship strained',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.6,
      totalRatings: 152,
      comments: []
    },
    {
      id: 260,
      problem: 'Laptop overheating and shutting down during video calls',
      problemCategory: 'Other',
      solution: 'Purchased cooling pad with fans',
      result: 'Temperature controlled, no more shutdowns during calls',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 128,
      comments: []
    },
    {
      id: 261,
      problem: 'Persistent ringing in left ear affecting concentration',
      problemCategory: 'Health',
      solution: 'Tried various vitamin supplements for ear health',
      result: 'Tinnitus unchanged after 6 months of supplements',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 164,
      comments: []
    },
    {
      id: 262,
      problem: 'Electrical outlet not working, multiple devices affected',
      problemCategory: 'Other',
      solution: 'Checked circuit breaker, reset GFCI outlet, outlet functional again',
      result: 'All outlets working, saved electrician call fee',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 97,
      comments: []
    },
    {
      id: 263,
      problem: 'Teenager lying constantly about whereabouts and activities',
      problemCategory: 'Family',
      solution: 'Installed tracking app on phone without telling them',
      result: 'Trust completely destroyed when discovered, lying increased',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.7,
      totalRatings: 194,
      comments: []
    },
    {
      id: 264,
      problem: 'Credit report showing inaccurate late payments',
      problemCategory: 'Finance',
      solution: 'Filed disputes with credit bureaus with documentation',
      result: 'Inaccuracies removed, credit score increased by 40 points',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 183,
      comments: []
    },
    {
      id: 265,
      problem: 'Constant email overwhelm, inbox at 5000+ unread',
      problemCategory: 'Work',
      solution: 'Unsubscribed from newsletters, created filter rules, organized folders',
      result: 'Inbox at zero, manageable daily email volume',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 156,
      comments: []
    },
    {
      id: 266,
      problem: 'Numbness and tingling in hands waking me at night',
      problemCategory: 'Health',
      solution: 'Tried wrist exercises and stretches from internet',
      result: 'Symptoms continued unchanged, no improvement in sleep',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.3,
      totalRatings: 171,
      comments: []
    },
    {
      id: 267,
      problem: 'New puppy destroying furniture and shoes',
      problemCategory: 'Other',
      solution: 'Crate trained, provided appropriate chew toys, exercised adequately',
      result: 'Destructive behavior stopped, puppy well-behaved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 189,
      comments: []
    },
    {
      id: 268,
      problem: 'Partner critical of everything I do, constant negativity',
      problemCategory: 'Relationship',
      solution: 'Started criticizing them back to show how it feels',
      result: 'Mutual criticism escalated, relationship became toxic',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.5,
      totalRatings: 167,
      comments: []
    },
    {
      id: 269,
      problem: 'Garage door sensor misaligned, door reversing constantly',
      problemCategory: 'Other',
      solution: 'Cleaned sensors, realigned them properly',
      result: 'Door closes smoothly, sensor issue resolved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 112,
      comments: []
    },
    {
      id: 270,
      problem: 'Chronic bloating and gas after meals',
      problemCategory: 'Health',
      solution: 'Took digestive enzyme supplements with meals',
      result: 'Bloating unchanged, no improvement in symptoms',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.1,
      totalRatings: 158,
      comments: []
    },
    {
      id: 271,
      problem: 'Water heater making loud popping noises',
      problemCategory: 'Other',
      solution: 'Drained and flushed sediment from tank',
      result: 'Noises eliminated, water heater quiet and efficient',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 143,
      comments: []
    },
    {
      id: 272,
      problem: 'Son expelled from school for fighting',
      problemCategory: 'Education',
      solution: 'Grounded him indefinitely and took away all privileges',
      result: 'Behavior worsened, anger issues escalated, needed therapy',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.4,
      totalRatings: 186,
      comments: []
    },
    {
      id: 273,
      problem: 'Expensive gym membership unused for 6 months',
      problemCategory: 'Finance',
      solution: 'Cancelled membership, started home workout routine',
      result: 'Saving money, actually exercising consistently at home',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 134,
      comments: []
    },
    {
      id: 274,
      problem: 'Persistent dandruff embarrassing in professional settings',
      problemCategory: 'Health',
      solution: 'Switched between multiple dandruff shampoo brands',
      result: 'Dandruff persisted regardless of brand used',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 149,
      comments: []
    },
    {
      id: 275,
      problem: 'Air conditioner not cooling house effectively',
      problemCategory: 'Other',
      solution: 'Replaced dirty air filter, cleaned outdoor unit',
      result: 'Cooling restored to normal, house comfortable again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 172,
      comments: []
    },
    {
      id: 276,
      problem: 'Friend borrowed money and avoiding repayment discussions',
      problemCategory: 'Relationship',
      solution: 'Sent increasingly angry text messages demanding payment',
      result: 'Friend blocked contact, money lost, friendship ended',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.6,
      totalRatings: 161,
      comments: []
    },
    {
      id: 277,
      problem: 'Bathroom exhaust fan very loud and annoying',
      problemCategory: 'Other',
      solution: 'Cleaned fan, lubricated motor, tightened mounting',
      result: 'Fan now quiet, ventilation working properly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 108,
      comments: []
    },
    {
      id: 278,
      problem: 'Severe morning stiffness in joints affecting daily routine',
      problemCategory: 'Health',
      solution: 'Started morning stretching and yoga routine',
      result: 'Stiffness unchanged, still difficult to start day',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.3,
      totalRatings: 177,
      comments: []
    },
    {
      id: 279,
      problem: 'Ice maker stopped working, no ice production',
      problemCategory: 'Other',
      solution: 'Checked water line, thawed frozen fill tube',
      result: 'Ice maker producing ice normally again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 124,
      comments: []
    },
    {
      id: 280,
      problem: 'Daughter dating someone I strongly disapprove of',
      problemCategory: 'Family',
      solution: 'Forbade relationship and grounded her',
      result: 'Daughter became secretive, relationship with parent damaged',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.7,
      totalRatings: 198,
      comments: []
    },
    {
      id: 281,
      problem: 'Printer cartridge dried out, poor print quality',
      problemCategory: 'Other',
      solution: 'Ran cleaning cycle multiple times, replaced cartridge',
      result: 'Print quality excellent, printer working perfectly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 95,
      comments: []
    },
    {
      id: 282,
      problem: 'Chronic lower back pain interfering with sleep',
      problemCategory: 'Health',
      solution: 'Changed mattress firmness level',
      result: 'Back pain continued at same intensity',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 165,
      comments: []
    },
    {
      id: 283,
      problem: 'Ceiling fan wobbling dangerously',
      problemCategory: 'Other',
      solution: 'Balanced blades using balancing kit, tightened all screws',
      result: 'Fan runs smooth and quiet, wobble eliminated',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 139,
      comments: []
    },
    {
      id: 284,
      problem: 'Coworker spreading rumors about me at workplace',
      problemCategory: 'Work',
      solution: 'Confronted them publicly in front of team',
      result: 'Drama escalated, work environment became hostile',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.5,
      totalRatings: 182,
      comments: []
    },
    {
      id: 285,
      problem: 'Car key fob not working, cannot unlock car remotely',
      problemCategory: 'Other',
      solution: 'Replaced battery in key fob',
      result: 'Fob working perfectly, saved dealership fee',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 87,
      comments: []
    },
    {
      id: 286,
      problem: 'Frequent headaches every afternoon',
      problemCategory: 'Health',
      solution: 'Increased water intake throughout day',
      result: 'Headaches unchanged despite better hydration',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.1,
      totalRatings: 153,
      comments: []
    },
    {
      id: 287,
      problem: 'Ring doorbell not detecting motion properly',
      problemCategory: 'Other',
      solution: 'Adjusted motion sensitivity settings, cleaned lens',
      result: 'Motion detection working reliably now',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 131,
      comments: []
    },
    {
      id: 288,
      problem: 'Partner gained weight and I am less attracted',
      problemCategory: 'Relationship',
      solution: 'Made comments about their appearance and diet',
      result: 'Partner hurt and defensive, intimacy decreased',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.8,
      totalRatings: 203,
      comments: []
    },
    {
      id: 289,
      problem: 'Hardwood floors scratched from furniture moving',
      problemCategory: 'Other',
      solution: 'Used wood filler and refinishing markers on scratches',
      result: 'Scratches hidden, floors look good again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 116,
      comments: []
    },
    {
      id: 290,
      problem: 'Persistent acne on jawline and chin area',
      problemCategory: 'Health',
      solution: 'Tried various face washes and spot treatments',
      result: 'Acne remained at same severity with all products',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.3,
      totalRatings: 174,
      comments: []
    },
    {
      id: 291,
      problem: 'Sliding glass door difficult to open and close',
      problemCategory: 'Other',
      solution: 'Cleaned tracks, lubricated rollers, adjusted alignment',
      result: 'Door slides smoothly, operates effortlessly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 148,
      comments: []
    },
    {
      id: 292,
      problem: 'Child refusing to eat anything except chicken nuggets',
      problemCategory: 'Family',
      solution: 'Made only chicken nuggets to avoid mealtime battles',
      result: 'Child more picky, refuses to try anything new',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.6,
      totalRatings: 191,
      comments: []
    },
    {
      id: 293,
      problem: 'Thermostat reading incorrect temperature',
      problemCategory: 'Other',
      solution: 'Replaced thermostat with programmable smart thermostat',
      result: 'Temperature accurate, better climate control and energy savings',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 169,
      comments: []
    },
    {
      id: 294,
      problem: 'Dry eyes causing discomfort and blurred vision',
      problemCategory: 'Health',
      solution: 'Used artificial tears eye drops as needed',
      result: 'Symptoms persisted, temporary relief only',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 162,
      comments: []
    },
    {
      id: 295,
      problem: 'Garbage disposal jammed and not draining',
      problemCategory: 'Other',
      solution: 'Used reset button and Allen wrench to manually rotate blades',
      result: 'Disposal freed, draining properly again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 127,
      comments: []
    },
    {
      id: 296,
      problem: 'Spouse forgetting important dates and anniversaries',
      problemCategory: 'Relationship',
      solution: 'Got angry and used silent treatment as punishment',
      result: 'Communication broke down, emotional distance increased',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.7,
      totalRatings: 188,
      comments: []
    },
    {
      id: 297,
      problem: 'Sunburn causing severe pain and peeling',
      problemCategory: 'Health',
      solution: 'Applied aloe vera gel, stayed hydrated, took cool baths',
      result: 'Healing accelerated, pain reduced significantly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 103,
      comments: []
    },
    {
      id: 298,
      problem: 'Constipation lasting over a week',
      problemCategory: 'Health',
      solution: 'Increased fiber intake through diet',
      result: 'Constipation unchanged despite dietary changes',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.1,
      totalRatings: 157,
      comments: []
    },
    {
      id: 299,
      problem: 'Window screen torn, bugs getting inside',
      problemCategory: 'Other',
      solution: 'Patched small tears, replaced badly damaged screens',
      result: 'No more bugs, fresh air without pests',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 91,
      comments: []
    },
    {
      id: 300,
      problem: 'Teen wants to quit extracurricular activity they committed to',
      problemCategory: 'Family',
      solution: 'Forced them to continue despite unhappiness',
      result: 'Teen resentful, performance declined, developed anxiety',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.5,
      totalRatings: 179,
      comments: []
    },
    {
      id: 301,
      problem: 'Squeaky wooden stairs disturbing household',
      problemCategory: 'Other',
      solution: 'Applied talcum powder between boards, tightened loose screws',
      result: 'Squeaks eliminated, stairs quiet',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 122,
      comments: []
    },
    {
      id: 302,
      problem: 'Persistent heartburn after eating',
      problemCategory: 'Health',
      solution: 'Stopped eating acidic foods',
      result: 'Heartburn frequency unchanged despite dietary restriction',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.3,
      totalRatings: 168,
      comments: []
    },
    {
      id: 303,
      problem: 'Remote control stopped working for TV',
      problemCategory: 'Other',
      solution: 'Replaced batteries, cleaned contacts',
      result: 'Remote functioning perfectly again',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.2,
      totalRatings: 78,
      comments: []
    },
    {
      id: 304,
      problem: 'Mother-in-law interfering with parenting decisions',
      problemCategory: 'Family',
      solution: 'Argued with her every time she offered advice',
      result: 'Family gatherings became tense, relationship irreparably damaged',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.6,
      totalRatings: 195,
      comments: []
    },
    {
      id: 305,
      problem: 'Clogged kitchen sink draining very slowly',
      problemCategory: 'Other',
      solution: 'Used baking soda and vinegar method, then plunged',
      result: 'Drain cleared, water flowing normally',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 145,
      comments: []
    },
    {
      id: 306,
      problem: 'Restless leg syndrome preventing sleep onset',
      problemCategory: 'Health',
      solution: 'Tried magnesium supplements before bed',
      result: 'Symptoms continued unchanged with supplementation',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 163,
      comments: []
    },
    {
      id: 307,
      problem: 'Light switch not working in bedroom',
      problemCategory: 'Other',
      solution: 'Replaced faulty light switch (turned off breaker first)',
      result: 'Switch working, lights functional, saved electrician cost',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 102,
      comments: []
    },
    {
      id: 308,
      problem: 'Sibling borrowing items and never returning them',
      problemCategory: 'Family',
      solution: 'Took their belongings without asking to teach lesson',
      result: 'Sibling retaliated, family conflict escalated significantly',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.4,
      totalRatings: 172,
      comments: []
    },
    {
      id: 309,
      problem: 'Carpet stain from red wine spill',
      problemCategory: 'Other',
      solution: 'Blotted immediately, used club soda and carpet cleaner',
      result: 'Stain completely removed, carpet looks new',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 118,
      comments: []
    },
    {
      id: 310,
      problem: 'Chronic fatigue despite 8 hours sleep nightly',
      problemCategory: 'Health',
      solution: 'Tried energy drinks and caffeine pills',
      result: 'Energy levels unchanged, developed caffeine dependency',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.5,
      totalRatings: 184,
      comments: []
    },
    {
      id: 311,
      problem: 'Closet rod sagging under weight of clothes',
      problemCategory: 'Other',
      solution: 'Added center support bracket',
      result: 'Rod sturdy and level, no more sagging',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 94,
      comments: []
    },
    {
      id: 312,
      problem: 'Frequent nosebleeds during dry winter months',
      problemCategory: 'Health',
      solution: 'Used humidifier in bedroom at night',
      result: 'Nosebleeds stopped completely, nasal passages comfortable',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 151,
      comments: []
    },
    {
      id: 313,
      problem: 'Cabinet door hinge loose and crooked',
      problemCategory: 'Other',
      solution: 'Tightened screws, used longer screws in stripped holes',
      result: 'Door hanging properly, hinge secure',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 83,
      comments: []
    },
    {
      id: 314,
      problem: 'Persistent cough after cold cleared up',
      problemCategory: 'Health',
      solution: 'Continued taking cough syrup for weeks',
      result: 'Cough persisted despite medication',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.1,
      totalRatings: 149,
      comments: []
    },
    {
      id: 315,
      problem: 'Roommate not cleaning shared spaces',
      problemCategory: 'Relationship',
      solution: 'Stopped cleaning common areas to make point',
      result: 'Apartment became filthy, both living in squalor',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.6,
      totalRatings: 187,
      comments: []
    },
    {
      id: 316,
      problem: 'Dryer taking twice as long to dry clothes',
      problemCategory: 'Other',
      solution: 'Cleaned lint trap and vent hose thoroughly',
      result: 'Drying time back to normal, efficiency restored',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 164,
      comments: []
    },
    {
      id: 317,
      problem: 'Biting nails causing damage and infections',
      problemCategory: 'Health',
      solution: 'Applied bitter nail polish designed to stop biting',
      result: 'Habit broken within 2 weeks, nails healing',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 129,
      comments: []
    },
    {
      id: 318,
      problem: 'Shower grout turning pink with mildew',
      problemCategory: 'Other',
      solution: 'Cleaned with bleach solution, improved ventilation',
      result: 'Grout clean and white, mildew eliminated',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 137,
      comments: []
    },
    {
      id: 319,
      problem: 'Vertigo episodes causing dizziness and nausea',
      problemCategory: 'Health',
      solution: 'Tried ginger supplements and acupressure bands',
      result: 'Episodes continued at same frequency and intensity',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 158,
      comments: []
    },
    {
      id: 320,
      problem: 'Sticky door lock difficult to turn',
      problemCategory: 'Other',
      solution: 'Sprayed graphite lubricant into lock mechanism',
      result: 'Lock turns smoothly, key operates easily',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 96,
      comments: []
    },
    {
      id: 321,
      problem: 'Ex-partner texting constantly despite breakup',
      problemCategory: 'Relationship',
      solution: 'Responded to each message trying to maintain friendship',
      result: 'Ex became more attached, harassment intensified',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.7,
      totalRatings: 176,
      comments: []
    },
    {
      id: 322,
      problem: 'Fence posts rotting at ground level',
      problemCategory: 'Other',
      solution: 'Replaced rotten posts with concrete-set pressure-treated lumber',
      result: 'Fence sturdy and secure, will last for years',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 142,
      comments: []
    },
    {
      id: 323,
      problem: 'Hands and feet always cold even in warm rooms',
      problemCategory: 'Health',
      solution: 'Wore more layers and thicker socks',
      result: 'Still cold despite extra clothing',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.1,
      totalRatings: 153,
      comments: []
    },
    {
      id: 324,
      problem: 'Washing machine leaving soap residue on clothes',
      problemCategory: 'Other',
      solution: 'Reduced detergent amount, ran extra rinse cycle',
      result: 'Clothes rinsing clean, no more residue',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 108,
      comments: []
    },
    {
      id: 325,
      problem: 'Friend constantly one-upping my stories and achievements',
      problemCategory: 'Relationship',
      solution: 'Started exaggerating my own stories to compete',
      result: 'Friendship became competitive and inauthentic',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.4,
      totalRatings: 169,
      comments: []
    },
    {
      id: 326,
      problem: 'Baseboards gap separating from wall',
      problemCategory: 'Other',
      solution: 'Filled gaps with caulk, painted to match',
      result: 'Seamless appearance, professional-looking finish',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 121,
      comments: []
    },
    {
      id: 327,
      problem: 'Chronic sinus pressure and headaches',
      problemCategory: 'Health',
      solution: 'Took decongestant medication daily',
      result: 'Pressure unchanged despite regular medication',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.3,
      totalRatings: 166,
      comments: []
    },
    {
      id: 328,
      problem: 'Outdoor faucet leaking from spigot',
      problemCategory: 'Other',
      solution: 'Replaced washer inside faucet handle',
      result: 'Leak stopped, faucet working properly',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 114,
      comments: []
    },
    {
      id: 329,
      problem: 'Child struggling with focus in virtual school',
      problemCategory: 'Education',
      solution: 'Threatened punishment for not paying attention',
      result: 'Child developed school anxiety, focus worsened',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.6,
      totalRatings: 192,
      comments: []
    },
    {
      id: 330,
      problem: 'Driveway oil stain from car leak',
      problemCategory: 'Other',
      solution: 'Applied cat litter to absorb, then used degreaser',
      result: 'Stain significantly lightened, almost invisible',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 99,
      comments: []
    },
    {
      id: 331,
      problem: 'Recurring canker sores in mouth',
      problemCategory: 'Health',
      solution: 'Used over-the-counter mouth rinses',
      result: 'Sores continued appearing at same frequency',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 147,
      comments: []
    },
    {
      id: 332,
      problem: 'Slow computer startup taking 5+ minutes',
      problemCategory: 'Other',
      solution: 'Disabled unnecessary startup programs, cleaned temp files',
      result: 'Boots in 30 seconds, runs much faster',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.7,
      totalRatings: 173,
      comments: []
    },
    {
      id: 333,
      problem: 'Partner spending too much on online shopping',
      problemCategory: 'Finance',
      solution: 'Hid credit cards and confronted angrily',
      result: 'Partner opened secret accounts, spending increased',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.5,
      totalRatings: 181,
      comments: []
    },
    {
      id: 334,
      problem: 'Mailbox post leaning significantly',
      problemCategory: 'Other',
      solution: 'Reset post in concrete with proper depth',
      result: 'Mailbox straight and stable, properly secured',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.6,
      totalRatings: 106,
      comments: []
    },
    {
      id: 335,
      problem: 'Chronic bad breath despite dental hygiene',
      problemCategory: 'Health',
      solution: 'Tried different mouthwashes and tongue scrapers',
      result: 'Odor persisted with all products tried',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.1,
      totalRatings: 159,
      comments: []
    },
    {
      id: 336,
      problem: 'Smoke detector chirping at night',
      problemCategory: 'Other',
      solution: 'Replaced battery with fresh one',
      result: 'Chirping stopped immediately, detector functional',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.3,
      totalRatings: 82,
      comments: []
    },
    {
      id: 337,
      problem: 'Adult son unemployed and unmotivated to find work',
      problemCategory: 'Family',
      solution: 'Continued providing housing and money without conditions',
      result: 'Son more dependent, no job search effort, situation worsened',
      resultCategory: 'got-worse',
      author: '',
      age: '41-60',
      avgRating: 4.7,
      totalRatings: 194,
      comments: []
    },
    {
      id: 338,
      problem: 'Squeaky bed frame disturbing sleep',
      problemCategory: 'Other',
      solution: 'Tightened all bolts, applied lubricant to joints',
      result: 'Bed silent, sleep quality improved',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 127,
      comments: []
    },
    {
      id: 339,
      problem: 'Persistent hiccups lasting hours',
      problemCategory: 'Health',
      solution: 'Tried various home remedies (holding breath, drinking water)',
      result: 'Hiccups continued regardless of method tried',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.0,
      totalRatings: 141,
      comments: []
    },
    {
      id: 340,
      problem: 'Power strip overloaded with too many devices',
      problemCategory: 'Other',
      solution: 'Distributed devices across multiple outlets and strips',
      result: 'Safe power distribution, no more overload risk',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.4,
      totalRatings: 93,
      comments: []
    },
    {
      id: 341,
      problem: 'Daughter failing math class despite tutoring',
      problemCategory: 'Education',
      solution: 'Doubled tutoring hours and increased pressure',
      result: 'Daughter developed math anxiety and depression',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.6,
      totalRatings: 185,
      comments: []
    },
    {
      id: 342,
      problem: 'Houseplant leaves turning yellow and dropping',
      problemCategory: 'Other',
      solution: 'Adjusted watering schedule and moved to better light',
      result: 'New growth green and healthy, plant thriving',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.5,
      totalRatings: 117,
      comments: []
    },
    {
      id: 343,
      problem: 'Muscle cramps in legs during sleep',
      problemCategory: 'Health',
      solution: 'Increased potassium through bananas',
      result: 'Cramps occurred at same frequency',
      resultCategory: 'no-change',
      author: '',
      avgRating: 4.2,
      totalRatings: 154,
      comments: []
    },
    {
      id: 344,
      problem: 'WiFi dead zones in parts of house',
      problemCategory: 'Other',
      solution: 'Added WiFi extender in central location',
      result: 'Full coverage throughout house, strong signal everywhere',
      resultCategory: 'worked',
      author: '',
      avgRating: 4.8,
      totalRatings: 168,
      comments: []
    },
    {
      id: 345,
      problem: 'Partner dismissive when I share feelings',
      problemCategory: 'Relationship',
      solution: 'Stopped sharing feelings to avoid rejection',
      result: 'Emotional intimacy died, relationship became distant',
      resultCategory: 'got-worse',
      author: '',
      avgRating: 4.7,
      totalRatings: 197,
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
