const courses = [
  {
    id: 1,
    title: "Intro to AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    description: "Understand the basics of artificial intelligence in bite-sized lessons.",
    lessons: [
      { id: 1, title: "What is AI?", duration: "3 min", completed: false },
      { id: 2, title: "Machine Learning 101", duration: "5 min", completed: false },
      { id: 3, title: "Neural Networks Simplified", duration: "4 min", completed: false },
      { id: 4, title: "AI in Everyday Life", duration: "3 min", completed: false },
    ],
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    description: "Master JS fundamentals with quick, interactive micro-lessons.",
    lessons: [
      { id: 1, title: "Variables & Types", duration: "4 min", completed: false },
      { id: 2, title: "Functions & Scope", duration: "5 min", completed: false },
      { id: 3, title: "Arrays & Objects", duration: "5 min", completed: false },
      { id: 4, title: "Async / Await", duration: "4 min", completed: false },
    ],
  },
  {
    id: 3,
    title: "Design Thinking",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
    description: "Learn the creative problem-solving framework used by top companies.",
    lessons: [
      { id: 1, title: "Empathize", duration: "3 min", completed: false },
      { id: 2, title: "Define the Problem", duration: "4 min", completed: false },
      { id: 3, title: "Ideate & Brainstorm", duration: "5 min", completed: false },
      { id: 4, title: "Prototype & Test", duration: "4 min", completed: false },
    ],
  },
  {
    id: 4,
    title: "Personal Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    description: "Get smart with money — budgeting, saving, and investing in 5-min bites.",
    lessons: [
      { id: 1, title: "Budgeting Basics", duration: "3 min", completed: false },
      { id: 2, title: "Saving Strategies", duration: "4 min", completed: false },
      { id: 3, title: "Intro to Investing", duration: "5 min", completed: false },
      { id: 4, title: "Compound Interest Magic", duration: "3 min", completed: false },
    ],
  },
  {
    id: 5,
    title: "Public Speaking",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop",
    description: "Crush stage fright and deliver killer presentations.",
    lessons: [
      { id: 1, title: "Overcoming Nerves", duration: "3 min", completed: false },
      { id: 2, title: "Structuring a Talk", duration: "5 min", completed: false },
      { id: 3, title: "Body Language", duration: "4 min", completed: false },
      { id: 4, title: "Q&A Like a Pro", duration: "3 min", completed: false },
    ],
  },
];

const lessonContent = {
  "What is AI?": {
    body: "Artificial Intelligence (AI) is the simulation of human intelligence by machines. It includes learning from data, recognizing patterns, making decisions, and even understanding language. From Siri to self-driving cars, AI is everywhere — and it's only getting started.",
    quiz: {
      question: "What does AI stand for?",
      options: ["Automated Internet", "Artificial Intelligence", "Advanced Integration", "Applied Informatics"],
      correctIndex: 1,
    },
  },
  "Machine Learning 101": {
    body: "Machine Learning is a subset of AI where computers learn patterns from data without being explicitly programmed. Think of it like teaching a dog tricks — but with math. The three main types are supervised, unsupervised, and reinforcement learning.",
    quiz: {
      question: "Which is NOT a type of machine learning?",
      options: ["Supervised", "Unsupervised", "Reinforcement", "Deterministic"],
      correctIndex: 3,
    },
  },
  "Variables & Types": {
    body: "In JavaScript, variables store data. Use `let` for values that change, `const` for constants, and avoid `var`. JS has several types: string, number, boolean, null, undefined, object, and symbol.",
    quiz: {
      question: "Which keyword declares a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      correctIndex: 2,
    },
  },
};

const defaultContent = {
  body: "This is an AI-generated micro-lesson tailored just for you. The content adapts to your learning pace and style, delivering key concepts in a concise, easy-to-digest format. Keep going — you're doing great!",
  quiz: {
    question: "What is the main benefit of micro-learning?",
    options: [
      "Longer study sessions",
      "Bite-sized, focused content",
      "More homework",
      "Memorizing textbooks",
    ],
    correctIndex: 1,
  },
};

export function getCourses() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...courses]), 300);
  });
}

export function getCourseById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const course = courses.find((c) => c.id === Number(id));
      if (course) {
        resolve({ ...course, lessons: course.lessons.map((l) => ({ ...l })) });
      } else {
        resolve(null);
      }
    }, 300);
  });
}

export function generateLessonContent(lessonTitle) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lessonContent[lessonTitle] || defaultContent);
    }, 1500);
  });
}
