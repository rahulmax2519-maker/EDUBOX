// EDU-BOX Local Offline Database Engine & Storage Layer
// Uses LocalStorage & IndexedDB with automatic schema initialization

const DB_KEYS = {
  CURRENT_USER: 'edubox_current_user',
  CURRENT_ROLE: 'edubox_current_role', // 'student' | 'teacher' | 'admin'
  LANGUAGE: 'edubox_language',
  OFFLINE_SIMULATION: 'edubox_offline_sim',
  STUDENTS: 'edubox_students',
  TEACHERS: 'edubox_teachers',
  COURSES: 'edubox_courses',
  LESSONS: 'edubox_lessons',
  QUIZ_ATTEMPTS: 'edubox_quiz_attempts',
  DOWNLOADED_LESSONS: 'edubox_downloaded_lessons',
  SYNC_QUEUE: 'edubox_sync_queue',
  LAST_SYNC_TIME: 'edubox_last_sync_time',
  HUB_STATUS: 'edubox_hub_status'
};

// Seed Data
const DEFAULT_STUDENTS = [
  {
    id: "STU-801",
    name: "Arun Kumar",
    grade: "8",
    section: "A",
    avatar: "👨‍🎓",
    progress: 78,
    weakTopic: "Fractions",
    status: "Good",
    subjectProgress: {
      math: 75,
      science: 60,
      cs: 85,
      english: 70
    },
    streakDays: 5,
    lastActive: "Today, 10:15 AM",
    quizzesCompleted: 14,
    avgQuizScore: 84
  },
  {
    id: "STU-802",
    name: "Priya Sharma",
    grade: "8",
    section: "A",
    avatar: "👩‍🎓",
    progress: 55,
    weakTopic: "Multiplication",
    status: "Needs Help",
    subjectProgress: {
      math: 48,
      science: 65,
      cs: 58,
      english: 62
    },
    streakDays: 3,
    lastActive: "Yesterday",
    quizzesCompleted: 9,
    avgQuizScore: 58
  },
  {
    id: "STU-803",
    name: "Kumar Raman",
    grade: "8",
    section: "B",
    avatar: "👨‍🎓",
    progress: 42,
    weakTopic: "Fractions",
    status: "Needs Help",
    subjectProgress: {
      math: 38,
      science: 44,
      cs: 50,
      english: 40
    },
    streakDays: 2,
    lastActive: "2 days ago",
    quizzesCompleted: 6,
    avgQuizScore: 45
  },
  {
    id: "STU-804",
    name: "Deepa Nair",
    grade: "8",
    section: "A",
    avatar: "👩‍🎓",
    progress: 92,
    weakTopic: "None",
    status: "Good",
    subjectProgress: {
      math: 95,
      science: 90,
      cs: 92,
      english: 88
    },
    streakDays: 12,
    lastActive: "Today, 09:40 AM",
    quizzesCompleted: 22,
    avgQuizScore: 96
  }
];

const DEFAULT_COURSES = [
  {
    id: "math-01",
    subjectId: "math",
    title: "Mathematics: Fractions & Decimals",
    description: "Learn how fractions represent parts of a whole with interactive visual pizzas and real-world division.",
    grade: "Grade 8",
    progress: 75,
    lessonsCount: 8,
    completedCount: 6,
    icon: "📐",
    bgGradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
    color: "#2563eb",
    featuredLessonId: "lesson-fractions-01"
  },
  {
    id: "sci-01",
    subjectId: "science",
    title: "Science: Plant Life & Photosynthesis",
    description: "Discover how sunlight, carbon dioxide, and water become energy for living plants.",
    grade: "Grade 8",
    progress: 60,
    lessonsCount: 10,
    completedCount: 6,
    icon: "🌱",
    bgGradient: "linear-gradient(135deg, #047857, #10b981)",
    color: "#059669",
    featuredLessonId: "lesson-photosynthesis-01"
  },
  {
    id: "cs-01",
    subjectId: "cs",
    title: "Computer Science: Binary & Logic",
    description: "Explore 1s and 0s, digital switches, and how computers process information without the internet.",
    grade: "Grade 8",
    progress: 85,
    lessonsCount: 6,
    completedCount: 5,
    icon: "💻",
    bgGradient: "linear-gradient(135deg, #0284c7, #0ea5e9)",
    color: "#0284c7",
    featuredLessonId: "lesson-binary-01"
  },
  {
    id: "eng-01",
    subjectId: "english",
    title: "English: Verbs, Tenses & Story",
    description: "Build confidence in communication through engaging stories and grammar practice.",
    grade: "Grade 8",
    progress: 70,
    lessonsCount: 7,
    completedCount: 5,
    icon: "📚",
    bgGradient: "linear-gradient(135deg, #6366f1, #818cf8)",
    color: "#6366f1",
    featuredLessonId: "lesson-english-01"
  }
];

// Offline Predefined Knowledge Base for "Ask EDU 🤖"
const EDU_KNOWLEDGE_BASE = [
  {
    keywords: ["why is 1/2 + 1/2 = 1", "half plus half", "1/2 + 1/2", "fractions add", "fraction addition"],
    question: "Why is 1/2 + 1/2 = 1?",
    answer: "Imagine a pizza or a round chapati divided into two equal halves. When you take one half (1/2) and add the other half (1/2), you get the whole pizza back! In math: 1/2 + 1/2 = (1+1)/2 = 2/2 = 1 whole."
  },
  {
    keywords: ["what is a fraction", "fraction definition", "explain fractions", "fractions"],
    question: "What is a fraction?",
    answer: "A fraction represents a part of a whole thing. For example, if you divide an apple into 4 equal slices and eat 1 slice, you ate 1/4 (one-fourth) of the apple. The top number is the numerator (parts you have), and the bottom number is the denominator (total equal parts)."
  },
  {
    keywords: ["photosynthesis", "how do plants make food", "plants food", "sunlight plants"],
    question: "How do plants make their food?",
    answer: "Plants make their food through a process called Photosynthesis. They absorb sunlight using green chlorophyll in their leaves, take carbon dioxide from the air, and drink water from the soil to produce glucose (sugar) and release fresh oxygen for us to breathe!"
  },
  {
    keywords: ["binary", "binary numbers", "1 and 0", "what is binary code", "computer language"],
    question: "What is binary code?",
    answer: "Binary is the fundamental language of computers using only two digits: 0 and 1. Just like a light switch is either OFF (0) or ON (1), millions of tiny electronic switches (transistors) inside a computer turn on and off to store text, pictures, games, and numbers."
  },
  {
    keywords: ["why is sky blue", "sky blue", "blue sky", "atmosphere"],
    question: "Why is the sky blue?",
    answer: "Sunlight looks white, but it is actually made of all colors of the rainbow. When sunlight reaches Earth's atmosphere, blue light scatters in all directions more than other colors because it travels as shorter, smaller waves. This Rayleigh scattering makes the daytime sky appear blue."
  },
  {
    keywords: ["offline", "how does edu box work", "no internet", "wifi without internet"],
    question: "How does EDU-BOX work without internet?",
    answer: "EDU-BOX uses a local micro-server (like a Raspberry Pi or teacher's laptop). It broadcasts its own local Wi-Fi hotspot. Student devices connect to this local Wi-Fi and load lessons, quizzes, and multimedia directly from the local hub's internal storage without using mobile data or telecom towers!"
  }
];

// Offline Content Library Catalog
const CONTENT_LIBRARY_ITEMS = [
  {
    id: "res-01",
    title: "Understanding Fractions & Decimals",
    subject: "Mathematics",
    category: "math",
    language: "English / Tamil / Hindi",
    grade: "Grade 6-8",
    size: "4.2 MB",
    downloaded: true,
    difficulty: "Beginner",
    format: "Interactive Lesson + Quiz"
  },
  {
    id: "res-02",
    title: "Plant Biology & Leaf Anatomy",
    subject: "Science",
    category: "science",
    language: "Multilingual",
    grade: "Grade 7-9",
    size: "8.1 MB",
    downloaded: true,
    difficulty: "Intermediate",
    format: "Diagrams + Audio Guide"
  },
  {
    id: "res-03",
    title: "Introduction to Logic & Binary Code",
    subject: "Computer Science",
    category: "cs",
    language: "English / Telugu / Kannada",
    grade: "Grade 6-10",
    size: "5.5 MB",
    downloaded: false,
    difficulty: "Beginner",
    format: "Interactive Code Simulator"
  },
  {
    id: "res-04",
    title: "Foundational English Grammar & Stories",
    subject: "Languages",
    category: "languages",
    language: "English with Local Guides",
    grade: "Grade 5-8",
    size: "6.0 MB",
    downloaded: true,
    difficulty: "Beginner",
    format: "Audio Stories & Comprehension"
  },
  {
    id: "res-05",
    title: "Solar System & Planetary Orbits",
    subject: "General Knowledge",
    category: "gk",
    language: "Multilingual",
    grade: "All Grades",
    size: "12.4 MB",
    downloaded: false,
    difficulty: "All Ages",
    format: "Visual Orbit Simulator"
  },
  {
    id: "res-06",
    title: "Safe Drinking Water & Sanitation Science",
    subject: "General Knowledge",
    category: "gk",
    language: "Multilingual",
    grade: "Community",
    size: "3.8 MB",
    downloaded: true,
    difficulty: "Practical",
    format: "Community Field Guide"
  }
];

class EduBoxDB {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(DB_KEYS.STUDENTS)) {
      localStorage.setItem(DB_KEYS.STUDENTS, JSON.stringify(DEFAULT_STUDENTS));
    }
    if (!localStorage.getItem(DB_KEYS.COURSES)) {
      localStorage.setItem(DB_KEYS.COURSES, JSON.stringify(DEFAULT_COURSES));
    }
    if (!localStorage.getItem(DB_KEYS.CURRENT_ROLE)) {
      localStorage.setItem(DB_KEYS.CURRENT_ROLE, 'student');
    }
    if (!localStorage.getItem(DB_KEYS.CURRENT_USER)) {
      localStorage.setItem(DB_KEYS.CURRENT_USER, JSON.stringify(DEFAULT_STUDENTS[0]));
    }
    if (!localStorage.getItem(DB_KEYS.LANGUAGE)) {
      localStorage.setItem(DB_KEYS.LANGUAGE, 'en');
    }
    if (!localStorage.getItem(DB_KEYS.OFFLINE_SIMULATION)) {
      localStorage.setItem(DB_KEYS.OFFLINE_SIMULATION, 'true'); // Offline-first enabled by default!
    }
    if (!localStorage.getItem(DB_KEYS.DOWNLOADED_LESSONS)) {
      localStorage.setItem(DB_KEYS.DOWNLOADED_LESSONS, JSON.stringify(['lesson-fractions-01', 'sci-01']));
    }
    if (!localStorage.getItem(DB_KEYS.QUIZ_ATTEMPTS)) {
      localStorage.setItem(DB_KEYS.QUIZ_ATTEMPTS, JSON.stringify([
        {
          id: "qa-1",
          studentId: "STU-801",
          quizTitle: "Fractions Addition",
          score: 100,
          total: 100,
          date: "Today, 10:20 AM",
          synced: true
        }
      ]));
    }
    if (!localStorage.getItem(DB_KEYS.SYNC_QUEUE)) {
      localStorage.setItem(DB_KEYS.SYNC_QUEUE, JSON.stringify([]));
    }
    if (!localStorage.getItem(DB_KEYS.LAST_SYNC_TIME)) {
      localStorage.setItem(DB_KEYS.LAST_SYNC_TIME, "Today, 10:30 AM");
    }
    if (!localStorage.getItem(DB_KEYS.HUB_STATUS)) {
      localStorage.setItem(DB_KEYS.HUB_STATUS, JSON.stringify({
        hubId: "EDUBX-VILLAGE-04",
        ipAddress: "10.9.115.69",
        localPort: 5600,
        ssid: "EDU-BOX-LEARNING-HUB",
        connectedDevices: 18,
        batteryPercent: 92,
        storageUsedGb: 38.4,
        storageTotalGb: 128,
        onlineStatus: "Offline Hub Mesh"
      }));
    }
  }

  // Current User & Auth
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEYS.CURRENT_USER)) || DEFAULT_STUDENTS[0];
    } catch {
      return DEFAULT_STUDENTS[0];
    }
  }

  setCurrentUser(user) {
    localStorage.setItem(DB_KEYS.CURRENT_USER, JSON.stringify(user));
  }

  getCurrentRole() {
    return localStorage.getItem(DB_KEYS.CURRENT_ROLE) || 'student';
  }

  setCurrentRole(role) {
    localStorage.setItem(DB_KEYS.CURRENT_ROLE, role);
  }

  // Language
  getLanguage() {
    return localStorage.getItem(DB_KEYS.LANGUAGE) || 'en';
  }

  setLanguage(langCode) {
    localStorage.setItem(DB_KEYS.LANGUAGE, langCode);
  }

  // Offline Simulation
  isOfflineSimulation() {
    return localStorage.getItem(DB_KEYS.OFFLINE_SIMULATION) === 'true';
  }

  setOfflineSimulation(val) {
    localStorage.setItem(DB_KEYS.OFFLINE_SIMULATION, val ? 'true' : 'false');
  }

  // Students
  getStudents() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEYS.STUDENTS)) || DEFAULT_STUDENTS;
    } catch {
      return DEFAULT_STUDENTS;
    }
  }

  updateStudent(student) {
    const students = this.getStudents();
    const idx = students.findIndex(s => s.id === student.id);
    if (idx !== -1) {
      students[idx] = { ...students[idx], ...student };
    } else {
      students.push(student);
    }
    localStorage.setItem(DB_KEYS.STUDENTS, JSON.stringify(students));
    if (this.getCurrentUser().id === student.id) {
      this.setCurrentUser(students[idx !== -1 ? idx : students.length - 1]);
    }
  }

  // Courses
  getCourses() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEYS.COURSES)) || DEFAULT_COURSES;
    } catch {
      return DEFAULT_COURSES;
    }
  }

  // Quiz Attempts & Best Scores
  getQuizAttempts() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEYS.QUIZ_ATTEMPTS)) || [];
    } catch {
      return [];
    }
  }

  getBestScores() {
    try {
      return JSON.parse(localStorage.getItem('edubox_best_scores')) || {
        math: 85,
        science: 80,
        cs: 90,
        english: 85
      };
    } catch {
      return { math: 85, science: 80, cs: 90, english: 85 };
    }
  }

  saveQuizAttempt(attempt) {
    const attempts = this.getQuizAttempts();
    const newAttempt = {
      id: "qa-" + Date.now(),
      ...attempt,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      synced: false
    };
    attempts.unshift(newAttempt);
    localStorage.setItem(DB_KEYS.QUIZ_ATTEMPTS, JSON.stringify(attempts));

    // Update best score
    const bestScores = this.getBestScores();
    const sub = attempt.subject || 'math';
    if (!bestScores[sub] || attempt.percentage > bestScores[sub]) {
      bestScores[sub] = attempt.percentage;
      localStorage.setItem('edubox_best_scores', JSON.stringify(bestScores));
    }

    // Add to sync queue for cloud sync later
    this.enqueueSync({
      type: "QUIZ_RESULT",
      data: newAttempt
    });

    // Update student progress in DB
    const user = this.getCurrentUser();
    if (user && user.id === attempt.studentId) {
      user.quizzesCompleted = (user.quizzesCompleted || 0) + 1;
      
      // Dynamic Subject Progress Update
      if (!user.subjectProgress) {
        user.subjectProgress = { math: 75, science: 60, cs: 85, english: 70 };
      }
      if (sub && user.subjectProgress[sub] !== undefined) {
        // Weighted increment
        const increment = Math.round((attempt.percentage - 50) * 0.1);
        user.subjectProgress[sub] = Math.min(100, Math.max(30, user.subjectProgress[sub] + increment));
      }

      // Overall Progress average
      const avg = Math.round((user.subjectProgress.math + user.subjectProgress.science + user.subjectProgress.cs + user.subjectProgress.english) / 4);
      user.progress = avg;

      // Update weak topic dynamically if student missed topic questions
      if (attempt.weakTopicIdentified) {
        user.weakTopic = attempt.weakTopicIdentified;
        user.status = attempt.percentage < 60 ? "Needs Help" : "Good";
      } else if (attempt.percentage >= 80 && user.weakTopic === "Fractions" && sub === 'math') {
        user.weakTopic = "None";
        user.status = "Good";
      }

      this.updateStudent(user);
    }

    return newAttempt;
  }

  // Teacher Assignments
  getAssignments() {
    try {
      return JSON.parse(localStorage.getItem('edubox_assignments')) || [
        {
          id: "asg-01",
          subject: "science",
          subjectName: "Science",
          grade: "8",
          difficulty: "medium",
          questionCount: 10,
          assignedTo: "All Students",
          assignedBy: "Ananya Sharma",
          date: "Today, 09:30 AM",
          completed: false
        }
      ];
    } catch {
      return [];
    }
  }

  addAssignment(assignment) {
    const list = this.getAssignments();
    const newAsg = {
      id: "asg-" + Date.now(),
      date: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      completed: false,
      ...assignment
    };
    list.unshift(newAsg);
    localStorage.setItem('edubox_assignments', JSON.stringify(list));
    return newAsg;
  }

  // Downloaded Lessons
  getDownloadedLessons() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEYS.DOWNLOADED_LESSONS)) || [];
    } catch {
      return [];
    }
  }

  toggleLessonDownload(lessonId) {
    let downloaded = this.getDownloadedLessons();
    let isDownloaded = false;
    if (downloaded.includes(lessonId)) {
      downloaded = downloaded.filter(id => id !== lessonId);
      isDownloaded = false;
    } else {
      downloaded.push(lessonId);
      isDownloaded = true;
    }
    localStorage.setItem(DB_KEYS.DOWNLOADED_LESSONS, JSON.stringify(downloaded));
    return isDownloaded;
  }

  // Ask EDU Offline Search
  searchKnowledgeBase(query) {
    if (!query || !query.trim()) return null;
    const cleanQuery = query.toLowerCase().trim();

    // Exact or keyword match
    for (const item of EDU_KNOWLEDGE_BASE) {
      for (const kw of item.keywords) {
        if (cleanQuery.includes(kw) || kw.includes(cleanQuery)) {
          return item;
        }
      }
    }

    // Token overlap search
    const queryTokens = cleanQuery.split(/\s+/);
    let bestMatch = null;
    let maxOverlap = 0;

    for (const item of EDU_KNOWLEDGE_BASE) {
      let score = 0;
      for (const token of queryTokens) {
        if (token.length > 2) {
          for (const kw of item.keywords) {
            if (kw.includes(token)) score += 2;
          }
          if (item.question.toLowerCase().includes(token)) score += 3;
          if (item.answer.toLowerCase().includes(token)) score += 1;
        }
      }
      if (score > maxOverlap) {
        maxOverlap = score;
        bestMatch = item;
      }
    }

    if (maxOverlap >= 2 && bestMatch) {
      return bestMatch;
    }

    // Fallback friendly offline response
    return {
      question: query,
      answer: "I couldn't find an exact match in our offline library yet. Try asking about: 'Why is 1/2 + 1/2 = 1?', 'What is a fraction?', 'How do plants make food?', 'What is binary code?', or 'Why is the sky blue?'!"
    };
  }

  // Sync Queue
  getSyncQueue() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEYS.SYNC_QUEUE)) || [];
    } catch {
      return [];
    }
  }

  enqueueSync(item) {
    const queue = this.getSyncQueue();
    queue.push({
      ...item,
      enqueuedAt: new Date().toISOString()
    });
    localStorage.setItem(DB_KEYS.SYNC_QUEUE, JSON.stringify(queue));
  }

  clearSyncQueue() {
    localStorage.setItem(DB_KEYS.SYNC_QUEUE, JSON.stringify([]));
    const nowStr = "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    localStorage.setItem(DB_KEYS.LAST_SYNC_TIME, nowStr);
    return nowStr;
  }

  getLastSyncTime() {
    return localStorage.getItem(DB_KEYS.LAST_SYNC_TIME) || "Today, 10:30 AM";
  }

  getHubStatus() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEYS.HUB_STATUS));
    } catch {
      return {};
    }
  }

  getContentLibrary() {
    return CONTENT_LIBRARY_ITEMS;
  }
}

window.eduDB = new EduBoxDB();
