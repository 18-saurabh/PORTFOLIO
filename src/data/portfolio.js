export const projects = [
  {
    id: '1',
    title: 'Fake News Detection System',
    description: 'Built a scalable, multilingual platform to combat regional misinformation (Hindi, Marathi, Gujarati). Integrated Gemini API for deep contextual analysis of text & images with analytics dashboard.',
    image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['ReactJS', 'Firebase', 'Gemini API', 'D3.js', 'i18n'],
    liveUrl: null,
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'Course Recommendation System',
    description: 'Built a course recommender using metadata and NLP. Cleaned Coursera dataset and vectorized features using Bag-of-Words. Applied cosine similarity and fuzzy matching for course recommendations.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'NLP', 'Streamlit', 'Scikit-learn'],
    liveUrl: null,
    githubUrl: 'https://github.com/18-saurabh/Course-Recommendation-System-by-Saurabh-Patel',
    featured: true
  },
  {
    id: '3',
    title: 'Fresh From Farmers: A Grocery Store Website',
    description: 'Developed responsive e-commerce UI from scratch. Integrated Razorpay for secure payment processing. Secured user accounts with Firebase Authentication (99.9% security rating).',
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['ReactJS', 'Firebase', 'Razorpay API'],
    liveUrl: null,
    githubUrl: 'https://github.com/18-saurabh/Fresh-From-Farmers',
    featured: false
  }
];

export const skills = [
  // Languages
  { name: 'Java', level: 90, category: 'languages' },
  { name: 'Python', level: 50, category: 'backend' },
  { name: 'HTML', level: 95, category: 'frontend' },
  { name: 'CSS', level: 90, category: 'frontend' },
  { name: 'SQL', level: 85, category: 'backend' },
  
  // Libraries/Frameworks
  { name: 'ReactJS', level: 40, category: 'frontend' },
  { name: 'Pandas', level: 85, category: 'data-science' },
  { name: 'NumPy', level: 80, category: 'data-science' },
  { name: 'Matplotlib', level: 75, category: 'data-science' },
  { name: 'Seaborn', level: 75, category: 'data-science' },
  
  // Data Science
  { name: 'Machine Learning', level: 50, category: 'data-science' },
  { name: 'Neural Networks', level: 50, category: 'data-science' },
  { name: 'NLP', level: 50, category: 'data-science' },
  
  // Tools & Platforms
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Firebase', level: 60, category: 'tools' },
  { name: 'MySQL', level: 85, category: 'backend' },
  { name: 'Power BI', level: 80, category: 'tools' },
  { name: 'Tableau', level: 75, category: 'tools' }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Working with this developer was an absolute pleasure. They delivered exceptional results on time and exceeded our expectations.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Incredible attention to detail and technical expertise. The project was completed flawlessly with great communication throughout.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'Creative Agency',
    content: 'A fantastic developer who truly understands both design and functionality. Highly recommended for any project.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];