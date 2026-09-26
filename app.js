// EDU-BOX Main Application Component (React 18)
const { useState, useEffect, useMemo, useRef } = React;

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // landing, student-login, language, student-dash, lesson, quiz, ask-edu, progress, teacher-login, teacher-dash, library, offline-mode, admin, about
  const [currentRole, setCurrentRole] = useState(eduDB.getCurrentRole()); // student, teacher, admin
  const [currentUser, setCurrentUser] = useState(eduDB.getCurrentUser());
  const [currentLang, setCurrentLang] = useState(eduDB.getLanguage());
  const [isOfflineSim, setIsOfflineSim] = useState(eduDB.isOfflineSimulation());
  const [syncStatusMsg, setSyncStatusMsg] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedStudentForModal, setSelectedStudentForModal] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showWeakAreasModal, setShowWeakAreasModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeQuizSubject, setActiveQuizSubject] = useState('math');
  const [activeQuizDifficulty, setActiveQuizDifficulty] = useState('all');
  const [activeLessonSubject, setActiveLessonSubject] = useState('math');

  const launchQuiz = (sub = 'math', diff = 'all') => {
    setActiveQuizSubject(sub);
    setActiveQuizDifficulty(diff);
    setCurrentPage('quiz');
  };

  const openLesson = (sub = 'math') => {
    setActiveLessonSubject(sub);
    setCurrentPage('lesson');
  };

  // Translations shortcut
  const t = useMemo(() => {
    return window.EDU_TRANSLATIONS[currentLang] || window.EDU_TRANSLATIONS.en;
  }, [currentLang]);

  // Sync state changes with DB
  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    eduDB.setLanguage(langCode);
    showToast(`Language switched to ${window.EDU_TRANSLATIONS[langCode]?.nativeName || langCode}`);
  };

  const handleToggleOfflineSim = () => {
    const newVal = !isOfflineSim;
    setIsOfflineSim(newVal);
    eduDB.setOfflineSimulation(newVal);
    showToast(newVal ? "Offline Simulation Enabled (Local Hub Active)" : "Online Mode Resumed");
  };

  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    eduDB.setCurrentRole(newRole);
    if (newRole === 'student') setCurrentPage('student-dash');
    else if (newRole === 'teacher') setCurrentPage('teacher-dash');
    else if (newRole === 'admin') setCurrentPage('admin');
    showToast(`Switched view to ${newRole.toUpperCase()}`);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3200);
  };

  // Demo Flow helper for Hackathon Judges
  const startDemoFlow = () => {
    setCurrentRole('student');
    eduDB.setCurrentRole('student');
    const demoStudent = eduDB.getStudents()[0];
    setCurrentUser(demoStudent);
    eduDB.setCurrentUser(demoStudent);
    setCurrentPage('student-dash');
    showToast("Demo Mode: Logged in as Arun Kumar (Grade 8)");
  };

  // 10 Hackathon Demo Steps
  const demoSteps = [
    { id: 'landing', label: '1. Landing', action: () => setCurrentPage('landing') },
    { id: 'student-login', label: '2. Try Demo', action: () => { setCurrentRole('student'); setCurrentPage('student-login'); } },
    { id: 'language', label: '3. Language', action: () => setCurrentPage('language') },
    { id: 'student-dash', label: '4. Student Dash', action: () => { setCurrentRole('student'); setCurrentPage('student-dash'); } },
    { id: 'lesson', label: '5. Lesson', action: () => { setCurrentRole('student'); setCurrentPage('lesson'); } },
    { id: 'quiz', label: '6. Offline Quiz', action: () => { setCurrentRole('student'); launchQuiz(activeLessonSubject || 'math', 'all'); } },
    { id: 'ask-edu', label: '7. Ask EDU 🤖', action: () => { setCurrentRole('student'); setCurrentPage('ask-edu'); } },
    { id: 'progress', label: '8. Progress', action: () => { setCurrentRole('student'); setCurrentPage('progress'); } },
    { id: 'teacher-dash', label: '9. Teacher Dash', action: () => { setCurrentRole('teacher'); setCurrentPage('teacher-dash'); } },
    { id: 'offline-mode', label: '10. Offline Status', action: () => setCurrentPage('offline-mode') }
  ];

  const currentStepIdx = useMemo(() => {
    const idx = demoSteps.findIndex(s => s.id === currentPage);
    return idx !== -1 ? idx : 0;
  }, [currentPage]);

  const handlePrevDemo = () => {
    const prevIdx = Math.max(0, currentStepIdx - 1);
    demoSteps[prevIdx].action();
  };

  const handleNextDemo = () => {
    const nextIdx = Math.min(demoSteps.length - 1, currentStepIdx + 1);
    demoSteps[nextIdx].action();
  };

  // Render Page Content based on route
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage t={t} onStartLearning={() => setCurrentPage('student-login')} onExplore={() => setCurrentPage('about')} onTryDemo={startDemoFlow} onOpenPage={setCurrentPage} />;
      case 'student-login':
        return <StudentLoginPage t={t} currentLang={currentLang} onLanguageChange={handleLanguageChange} onLoginSuccess={(user) => { setCurrentUser(user); setCurrentRole('student'); setCurrentPage('student-dash'); }} onGoLanguage={() => setCurrentPage('language')} />;
      case 'language':
        return <LanguagePage t={t} currentLang={currentLang} onSelectLang={(lang) => { handleLanguageChange(lang); setCurrentPage('student-dash'); }} onBack={() => setCurrentPage('student-dash')} />;
      case 'student-dash':
        return <StudentDashboardPage t={t} user={currentUser} onOpenLesson={openLesson} onOpenQuiz={() => launchQuiz('math', 'all')} onLaunchQuiz={launchQuiz} onOpenAskEdu={() => setCurrentPage('ask-edu')} onOpenProgress={() => setCurrentPage('progress')} onOpenCourses={() => setCurrentPage('library')} />;
      case 'lesson':
        return <LessonPage t={t} user={currentUser} currentLang={currentLang} activeSubject={activeLessonSubject} onSelectSubject={setActiveLessonSubject} onTakeQuiz={(sub) => launchQuiz(sub || activeLessonSubject, 'all')} onBack={() => setCurrentPage('student-dash')} showToast={showToast} />;
      case 'quiz':
        return <QuizPage t={t} user={currentUser} currentLang={currentLang} initialSubject={activeQuizSubject} initialDifficulty={activeQuizDifficulty} onQuizComplete={() => setCurrentPage('progress')} onBack={() => setCurrentPage('student-dash')} showToast={showToast} />;
      case 'ask-edu':
        return <AskEduPage t={t} onBack={() => setCurrentPage('student-dash')} />;
      case 'progress':
        return <ProgressPage t={t} user={currentUser} onBack={() => setCurrentPage('student-dash')} onTakeQuiz={() => launchQuiz('math', 'all')} onOpenTeacherView={() => { setCurrentRole('teacher'); setCurrentPage('teacher-dash'); }} />;
      case 'teacher-login':
        return <TeacherLoginPage t={t} onLoginSuccess={() => { setCurrentRole('teacher'); setCurrentPage('teacher-dash'); }} />;
      case 'teacher-dash':
        return <TeacherDashboardPage t={t} onSelectStudent={(s) => setSelectedStudentForModal(s)} onOpenAssignModal={() => setShowAssignModal(true)} onOpenWeakAreas={() => setShowWeakAreasModal(true)} onOpenLibrary={() => setCurrentPage('library')} />;
      case 'library':
        return <ContentLibraryPage t={t} showToast={showToast} onOpenLesson={openLesson} />;
      case 'offline-mode':
        return <OfflineModePage t={t} isOfflineSim={isOfflineSim} onToggleOffline={handleToggleOfflineSim} showToast={showToast} />;
      case 'admin':
        return <AdminDashboardPage t={t} showToast={showToast} />;
      case 'about':
        return <AboutPage t={t} onStart={() => setCurrentPage('student-login')} />;
      default:
        return <LandingPage t={t} onStartLearning={() => setCurrentPage('student-login')} onExplore={() => setCurrentPage('about')} onTryDemo={startDemoFlow} onOpenPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Hackathon Demo Flow Bar with Sticky Navigation & Back/Next */}
      <div className="demo-stepper-bar">
        <div className="flex items-center gap-2">
          <span className="badge badge-amber" style={{ fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.55rem', letterSpacing: '0.02em' }}>
            🎯 HACKATHON DEMO MODE
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-blue-900)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            🎯 DEMO STEPS:
          </span>
        </div>

        <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {demoSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <button
                className={`demo-step-chip ${currentStepIdx === idx ? 'active' : ''}`}
                onClick={step.action}
              >
                {step.label}
              </button>
              {idx < demoSteps.length - 1 && (
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', margin: '0 2px' }}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-1" style={{ marginLeft: 'auto' }}>
          <button
            className="btn btn-secondary btn-sm"
            onClick={handlePrevDemo}
            disabled={currentStepIdx === 0}
            style={{ fontSize: '0.72rem', padding: '0.25rem 0.55rem', opacity: currentStepIdx === 0 ? 0.45 : 1, cursor: currentStepIdx === 0 ? 'not-allowed' : 'pointer' }}
          >
            ← Back Demo
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleNextDemo}
            disabled={currentStepIdx === demoSteps.length - 1}
            style={{ fontSize: '0.72rem', padding: '0.25rem 0.55rem', opacity: currentStepIdx === demoSteps.length - 1 ? 0.45 : 1, cursor: currentStepIdx === demoSteps.length - 1 ? 'not-allowed' : 'pointer' }}
          >
            Next Demo →
          </button>
        </div>
      </div>

      {/* Offline Status Simulation Bar */}
      <div className="system-status-bar">
        <div className="flex items-center gap-3">
          <span className="offline-beacon" style={{ background: '#ecfdf5', color: '#065f46', border: '1px solid #34d399' }}>
            <span className="pulse-dot"></span>
            LOCAL HUB WI-FI ACTIVE: EDUBX-HUB-04 (10.9.115.69:5600)
          </span>
          {isOfflineSim && (
            <span className="simulation-banner">
              ⚠️ OFFLINE MODE ACTIVE • 100% Zero-Internet Functioning
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <label style={{ fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
            <input type="checkbox" checked={isOfflineSim} onChange={handleToggleOfflineSim} style={{ accentColor: '#10b981', cursor: 'pointer' }} />
            Simulate Internet Disconnected
          </label>
          <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>|</span>
          <button onClick={() => setCurrentPage('offline-mode')} style={{ background: 'transparent', border: 'none', color: '#a7f3d0', fontSize: '0.75rem', cursor: 'pointer', textDecoration: 'underline' }}>
            View Offline Sync Hub
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar-header">
        <div className="app-container navbar-inner">
          {/* Logo */}
          <div className="logo-brand" onClick={() => setCurrentPage('landing')}>
            <svg className="logo-icon-svg" viewBox="0 0 512 512">
              <rect width="512" height="512" rx="112" fill="#1e40af" />
              <path d="M 176 150 A 120 120 0 0 1 336 150" fill="none" stroke="#34d399" strokeWidth="26" strokeLinecap="round" />
              <path d="M 210 190 A 70 70 0 0 1 302 190" fill="none" stroke="#a7f3d0" strokeWidth="22" strokeLinecap="round" />
              <circle cx="256" cy="225" r="14" fill="#ffffff" />
              <path d="M 120 270 Q 256 250 256 310 Q 256 250 392 270 L 392 410 Q 256 390 256 440 Q 256 390 120 410 Z" fill="#ffffff" />
              <path d="M 256 310 L 256 440" stroke="#0284c7" strokeWidth="10" />
            </svg>
            <div>
              <div style={{ lineHeight: 1 }}>EDU-BOX</div>
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--soft-green-600)', letterSpacing: '0.04em' }}>
                {t.brandSubtitle}
              </span>
            </div>
          </div>

          {/* Navigation Links according to role */}
          <nav className="nav-links md-hidden">
            <button className={`nav-item-btn ${currentPage === 'landing' ? 'active' : ''}`} onClick={() => setCurrentPage('landing')}>
              {t.nav.home}
            </button>

            {currentRole === 'student' && (
              <>
                <button className={`nav-item-btn ${currentPage === 'student-dash' ? 'active' : ''}`} onClick={() => setCurrentPage('student-dash')}>
                  {t.nav.dashboard}
                </button>
                <button className={`nav-item-btn ${currentPage === 'lesson' ? 'active' : ''}`} onClick={() => setCurrentPage('lesson')}>
                  {t.nav.lessons}
                </button>
                <button className={`nav-item-btn ${currentPage === 'quiz' ? 'active' : ''}`} onClick={() => setCurrentPage('quiz')}>
                  {t.nav.quiz}
                </button>
                <button className={`nav-item-btn ${currentPage === 'ask-edu' ? 'active' : ''}`} onClick={() => setCurrentPage('ask-edu')}>
                  {t.nav.askEdu}
                </button>
                <button className={`nav-item-btn ${currentPage === 'progress' ? 'active' : ''}`} onClick={() => setCurrentPage('progress')}>
                  {t.nav.progress}
                </button>
              </>
            )}

            {currentRole === 'teacher' && (
              <>
                <button className={`nav-item-btn ${currentPage === 'teacher-dash' ? 'active' : ''}`} onClick={() => setCurrentPage('teacher-dash')}>
                  {t.nav.dashboard}
                </button>
                <button className={`nav-item-btn ${currentPage === 'library' ? 'active' : ''}`} onClick={() => setCurrentPage('library')}>
                  {t.nav.library}
                </button>
                <button className="nav-item-btn" onClick={() => setShowAssignModal(true)}>
                  + Assign Lesson
                </button>
              </>
            )}

            {currentRole === 'admin' && (
              <>
                <button className={`nav-item-btn ${currentPage === 'admin' ? 'active' : ''}`} onClick={() => setCurrentPage('admin')}>
                  Admin Dashboard
                </button>
                <button className={`nav-item-btn ${currentPage === 'library' ? 'active' : ''}`} onClick={() => setCurrentPage('library')}>
                  Repository
                </button>
              </>
            )}

            <button className={`nav-item-btn ${currentPage === 'offline-mode' ? 'active' : ''}`} onClick={() => setCurrentPage('offline-mode')}>
              {t.nav.offline}
            </button>
            <button className={`nav-item-btn ${currentPage === 'about' ? 'active' : ''}`} onClick={() => setCurrentPage('about')}>
              {t.nav.about}
            </button>
          </nav>

          {/* Right Action Bar: Language + Role Switcher + Try Demo */}
          <div className="flex items-center gap-2">
            {/* Language Selector Dropdown */}
            <div style={{ position: 'relative' }}>
              <select
                value={currentLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="form-select"
                style={{ padding: '0.4rem 0.6rem', fontSize: '0.85rem', fontWeight: 600, background: '#f8fafc', borderColor: '#cbd5e1', cursor: 'pointer' }}
              >
                <option value="en">🇬🇧 English</option>
                <option value="ta">🇮🇳 தமிழ் (Tamil)</option>
                <option value="hi">🇮🇳 हिन्दी (Hindi)</option>
                <option value="te">🇮🇳 తెలుగు (Telugu)</option>
                <option value="kn">🇮🇳 ಕನ್ನಡ (Kannada)</option>
              </select>
            </div>

            {/* Quick Role Switcher */}
            <select
              value={currentRole}
              onChange={(e) => handleRoleChange(e.target.value)}
              className="form-select"
              style={{ padding: '0.4rem 0.6rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue-900)', background: 'var(--primary-blue-50)', borderColor: 'var(--primary-blue-200)', cursor: 'pointer' }}
            >
              <option value="student">👨‍🎓 Student Role</option>
              <option value="teacher">👩‍🏫 Teacher Role</option>
              <option value="admin">🛠️ Admin Role</option>
            </select>

            {/* Try Demo Button */}
            <button className="btn btn-green btn-sm" onClick={startDemoFlow}>
              {t.nav.tryDemo}
            </button>
          </div>
        </div>
      </header>

      {/* Main Route Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 200,
          background: 'var(--slate-900)',
          color: 'var(--white)',
          padding: '0.85rem 1.4rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          fontSize: '0.9rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          borderLeft: '4px solid var(--soft-green-500)',
          animation: 'modal-enter 0.2s ease-out'
        }}>
          <span>🔔</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals for Teacher Actions */}
      {selectedStudentForModal && (
        <StudentDetailModal student={selectedStudentForModal} onClose={() => setSelectedStudentForModal(null)} onAssignLesson={() => { setSelectedStudentForModal(null); setShowAssignModal(true); }} />
      )}
      {showAssignModal && (
        <AssignLessonModal onClose={() => setShowAssignModal(false)} showToast={showToast} />
      )}
      {showWeakAreasModal && (
        <WeakAreasModal onClose={() => setShowWeakAreasModal(false)} />
      )}

      {/* Standard Educational Footer */}
      <footer className="app-footer">
        <div className="app-container">
          <div className="grid grid-cols-4 lg-grid-cols-2 md-grid-cols-1 gap-8" style={{ marginBottom: '2rem' }}>
            <div>
              <div className="logo-brand" style={{ color: 'var(--white)', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.4rem' }}>📦 EDU-BOX</span>
              </div>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8' }}>
                Bridging the digital learning divide with lightweight, zero-internet offline educational hubs for rural schools and community centers.
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <span className="badge badge-green">✓ Open Source</span>
                <span className="badge badge-blue">✓ PWA Ready</span>
              </div>
            </div>

            <div>
              <div className="footer-heading">Learning Pages</div>
              <a href="#student-dash" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentRole('student'); setCurrentPage('student-dash'); }}>Student Dashboard</a>
              <a href="#lesson" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentPage('lesson'); }}>Fractions Lesson</a>
              <a href="#quiz" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentPage('quiz'); }}>Offline Quiz</a>
              <a href="#ask-edu" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentPage('ask-edu'); }}>Ask EDU 🤖 Assistant</a>
              <a href="#progress" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentPage('progress'); }}>Progress Tracker</a>
            </div>

            <div>
              <div className="footer-heading">Community & Teachers</div>
              <a href="#teacher-dash" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentRole('teacher'); setCurrentPage('teacher-dash'); }}>Teacher Dashboard</a>
              <a href="#library" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentPage('library'); }}>Content Library</a>
              <a href="#admin" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentRole('admin'); setCurrentPage('admin'); }}>Admin & Hub Status</a>
              <a href="#offline-mode" className="footer-link" onClick={(e) => { e.preventDefault(); setCurrentPage('offline-mode'); }}>Offline Mesh Status</a>
            </div>

            <div>
              <div className="footer-heading">Hub Hardware Specs</div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
                <strong>Hardware:</strong> Raspberry Pi 4 / Windows PC<br/>
                <strong>Local Wi-Fi Mesh:</strong> 802.11ac Hotspot<br/>
                <strong>Storage:</strong> 128 GB High Endurance SD<br/>
                <strong>Database:</strong> Local SQLite + IndexedDB<br/>
                <strong>Power:</strong> Solar 12V DC / LiFePO4 Battery
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem' }}>
            <div>
              © 2026 EDU-BOX Learning Platform • Empowering every child with quality education anywhere.
            </div>
            <div className="flex gap-4">
              <span style={{ color: '#10b981' }}>🟢 Local Hub Connected</span>
              <span>100% Offline Compatible</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// -------------------------------------------------------------
// 1. LANDING PAGE
// -------------------------------------------------------------
function LandingPage({ t, onStartLearning, onExplore, onTryDemo, onOpenPage }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="app-container">
          <div className="grid grid-cols-2 lg-grid-cols-1 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="badge badge-green" style={{ marginBottom: '1.25rem' }}>
                <span className="pulse-dot"></span>
                {t.hero.offlineBadge}
              </div>

              <h1 className="hero-title">
                Quality Education.<br/>
                <span className="hero-highlight">Anywhere. Offline.</span>
              </h1>

              <p className="hero-subtitle">
                {t.hero.subtitle}
              </p>

              <div className="flex gap-3 flex-wrap" style={{ marginBottom: '2rem' }}>
                <button className="btn btn-primary btn-lg" onClick={onStartLearning}>
                  {t.hero.startLearning} →
                </button>
                <button className="btn btn-green btn-lg" onClick={onTryDemo}>
                  🚀 Try Instant Demo
                </button>
                <button className="btn btn-secondary btn-lg" onClick={onExplore}>
                  {t.hero.exploreEduBox}
                </button>
              </div>

              <div className="flex items-center gap-6" style={{ fontSize: '0.88rem', color: 'var(--slate-600)' }}>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span> Zero Internet Required
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span> 5 Regional Languages
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span> Instant Local Sync
                </div>
              </div>
            </div>

            {/* Right Visual Illustration: One Hub connected to multiple student devices over local Wi-Fi */}
            <div>
              <div className="hub-network-container">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-blue-900)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Local Micro-Wi-Fi Mesh Architecture
                  </span>
                </div>

                <div style={{ position: 'relative', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Outer Pulsing Waves */}
                  <div className="pulse-wave" style={{ width: '310px', height: '310px' }}></div>
                  <div className="pulse-wave" style={{ width: '220px', height: '220px', animationDirection: 'reverse' }}></div>

                  {/* Central Hub Box */}
                  <div className="hub-center-box">
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>📦</div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>EDU-BOX HUB</div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.9 }}>Raspberry Pi / Local Server</div>
                    <div className="badge badge-green" style={{ marginTop: '0.5rem', background: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>
                      📡 SSID: EDUBX-HUB
                    </div>
                  </div>

                  {/* Satellite Student Devices (Positioned in circle around hub) */}
                  <div className="satellite-device-card" style={{ position: 'absolute', top: '15px', left: '20px' }}>
                    <span>📱</span>
                    <div>
                      <div>Student 1 (Arun)</div>
                      <span style={{ fontSize: '0.68rem', color: 'var(--soft-green-600)' }}>10.9.115.71 • Math</span>
                    </div>
                  </div>

                  <div className="satellite-device-card" style={{ position: 'absolute', top: '15px', right: '20px' }}>
                    <span>💻</span>
                    <div>
                      <div>Student 2 (Priya)</div>
                      <span style={{ fontSize: '0.68rem', color: 'var(--soft-green-600)' }}>10.9.115.74 • Science</span>
                    </div>
                  </div>

                  <div className="satellite-device-card" style={{ position: 'absolute', bottom: '20px', left: '25px' }}>
                    <span>📱</span>
                    <div>
                      <div>Student 3 (Kumar)</div>
                      <span style={{ fontSize: '0.68rem', color: 'var(--soft-green-600)' }}>10.9.115.76 • Quiz</span>
                    </div>
                  </div>

                  <div className="satellite-device-card" style={{ position: 'absolute', bottom: '20px', right: '25px' }}>
                    <span>👩‍🏫</span>
                    <div>
                      <div>Teacher (Ananya)</div>
                      <span style={{ fontSize: '0.68rem', color: 'var(--primary-blue-600)' }}>10.9.115.70 • Dashboard</span>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', background: 'var(--slate-50)', padding: '0.75rem', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', color: 'var(--slate-600)' }}>
                  ⚡ Up to 35+ local devices stream lessons simultaneously from a single hub without 4G/5G internet!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why EDU-BOX? */}
      <section style={{ padding: '4rem 0', background: 'var(--white)' }}>
        <div className="app-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>THE PROBLEM & SOLUTION</span>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Why Communities Need EDU-BOX</h2>
            <p style={{ color: 'var(--slate-600)' }}>
              Over 2.9 billion people globally lack consistent internet access. Students in rural schools shouldn't be left behind in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-3 md-grid-cols-1 gap-6">
            <div className="card">
              <div style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'var(--primary-blue-600)' }}>📶</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>100% Zero-Internet Learning</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.92rem' }}>
                All multimedia lessons, interactive math slicers, and quizzes live on the local hub. No buffering, no data recharge fees, and no dropped connections.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'var(--soft-green-600)' }}>🗣️</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Multilingual Native Support</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.92rem' }}>
                Children learn best in their mother tongue. Instantly switch between English, Tamil, Hindi, Telugu, and Kannada with regional audio narration.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'var(--amber-600)' }}>📊</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Offline Progress & Analytics</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.92rem' }}>
                Quizzes score instantly offline. When a teacher or coordinator reaches a town with internet, progress syncs automatically to regional portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How It Works */}
      <section style={{ padding: '4rem 0', background: 'var(--slate-50)' }}>
        <div className="app-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <span className="badge badge-green" style={{ marginBottom: '0.5rem' }}>SIMPLE ARCHITECTURE</span>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>How It Works in 3 Steps</h2>
            <p style={{ color: 'var(--slate-600)' }}>
              Deployable in minutes in any rural classroom, community hall, or makeshift learning space.
            </p>
          </div>

          <div className="grid grid-cols-3 md-grid-cols-1 gap-6">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-blue-100)', color: 'var(--primary-blue-700)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.25rem' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Turn On EDU-BOX Hub</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
                Power on the Raspberry Pi or laptop (battery or solar powered). It automatically creates a local Wi-Fi hotspot: <code>EDU-BOX-HUB</code>.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--soft-green-100)', color: 'var(--soft-green-800)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.25rem' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Students Connect Wi-Fi</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
                Students open any phone, tablet, or old PC browser. They connect to the Wi-Fi and the EDU-BOX portal opens with zero internet required.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--amber-100)', color: 'var(--amber-800)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.25rem' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Learn, Quiz & Track</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
                Children complete interactive lessons, practice quizzes, and ask questions to the offline AI assistant. Scores save locally to IndexedDB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: For Students & For Teachers Showcase */}
      <section style={{ padding: '4rem 0', background: 'var(--white)' }}>
        <div className="app-container">
          <div className="grid grid-cols-2 lg-grid-cols-1 gap-8 items-center">
            {/* For Students */}
            <div className="card" style={{ borderLeft: '6px solid var(--primary-blue-600)' }}>
              <div className="badge badge-blue" style={{ marginBottom: '1rem' }}>FOR STUDENTS</div>
              <h3 style={{ fontSize: '1.65rem', marginBottom: '0.75rem' }}>Empowering Young Minds</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--slate-700)', fontSize: '0.95rem' }}>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                  Interactive visual fraction pizza slicing & geometry simulations.
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                  Built-in audio reader narrates lessons in regional accents.
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                  "Ask EDU 🤖" offline tutor answers tough science & math doubts.
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                  Gamified streak badges and instant quiz scores keep kids motivated.
                </li>
              </ul>
              <button className="btn btn-primary btn-sm" style={{ marginTop: '1.5rem' }} onClick={() => onOpenPage('student-dash')}>
                Explore Student Dashboard →
              </button>
            </div>

            {/* For Teachers */}
            <div className="card" style={{ borderLeft: '6px solid var(--soft-green-600)' }}>
              <div className="badge badge-green" style={{ marginBottom: '1rem' }}>FOR TEACHERS & COORDINATORS</div>
              <h3 style={{ fontSize: '1.65rem', marginBottom: '0.75rem' }}>Classroom Supervision & Intervention</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--slate-700)', fontSize: '0.95rem' }}>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                  Real-time table of all 40+ students connected to the local hub.
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                  Automated "Weak Topic" identification (e.g. Arun needs help with Fractions).
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                  1-Click Lesson Assignment to target individual student gaps.
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                  Rich offline content library with downloadable modular packs.
                </li>
              </ul>
              <button className="btn btn-green btn-sm" style={{ marginTop: '1.5rem' }} onClick={() => onOpenPage('teacher-dash')}>
                Explore Teacher Dashboard →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #1e3a8a, #047857)', color: 'var(--white)', textAlign: 'center' }}>
        <div className="app-container" style={{ maxWidth: '720px' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Ready to Experience EDU-BOX?
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '2rem' }}>
            Try the interactive offline student workflow, take a quiz, chat with Ask EDU, or explore the teacher diagnostic console right now.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="btn btn-green btn-lg" onClick={onTryDemo}>
              🚀 Launch Instant Demo Tour
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => onOpenPage('student-login')}>
              Login as Student
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => onOpenPage('teacher-login')}>
              Login as Teacher
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// -------------------------------------------------------------
// 2. STUDENT LOGIN PAGE
// -------------------------------------------------------------
function StudentLoginPage({ t, currentLang, onLanguageChange, onLoginSuccess, onGoLanguage }) {
  const [name, setName] = useState('Arun Kumar');
  const [studentId, setStudentId] = useState('STU-801');
  const [grade, setGrade] = useState('8');
  const [selectedLang, setSelectedLang] = useState(currentLang);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const userObj = {
      id: studentId || "STU-" + Math.floor(Math.random() * 900 + 100),
      name: name.trim(),
      grade: grade,
      section: "A",
      avatar: "👨‍🎓",
      progress: 75,
      streakDays: 5,
      quizzesCompleted: 12,
      avgQuizScore: 82,
      subjectProgress: { math: 75, science: 60, cs: 85, english: 70 }
    };
    eduDB.setCurrentUser(userObj);
    onLanguageChange(selectedLang);
    onLoginSuccess(userObj);
  };

  const handleQuickDemoFill = () => {
    setName('Arun Kumar');
    setStudentId('STU-801');
    setGrade('8');
  };

  return (
    <div style={{ padding: '3.5rem 0', background: 'radial-gradient(circle at top, #eff6ff, #f8fafc)' }}>
      <div className="app-container" style={{ maxWidth: '480px' }}>
        <div className="card" style={{ padding: '2.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👨‍🎓</div>
            <h2 style={{ fontSize: '1.75rem' }}>Student Login</h2>
            <p style={{ color: 'var(--slate-500)', fontSize: '0.88rem', marginTop: '0.25rem' }}>
              Connect to your local EDU-BOX learning center
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <span className="badge badge-green">
                <span className="pulse-dot"></span>
                🟢 Offline Mode Available
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.15rem' }}>
              <label className="form-label">Student Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Arun Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: '1.15rem' }}>
              <label className="form-label">Student Roll Number / ID</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. STU-801"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: '1.15rem' }}>
              <label className="form-label">Class / Grade</label>
              <select className="form-select" value={grade} onChange={(e) => setGrade(e.target.value)}>
                <option value="5">Grade 5 (Primary)</option>
                <option value="6">Grade 6 (Middle School)</option>
                <option value="7">Grade 7 (Middle School)</option>
                <option value="8">Grade 8 (Middle School)</option>
                <option value="9">Grade 9 (High School)</option>
                <option value="10">Grade 10 (Secondary)</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '0.35rem' }}>
                <label className="form-label" style={{ margin: 0 }}>Preferred Learning Language</label>
                <button type="button" onClick={onGoLanguage} style={{ background: 'transparent', border: 'none', color: 'var(--primary-blue-600)', fontSize: '0.78rem', cursor: 'pointer', fontWeight: 600 }}>
                  View All Dialects →
                </button>
              </div>
              <select className="form-select" value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)}>
                <option value="en">🇬🇧 English</option>
                <option value="ta">🇮🇳 தமிழ் (Tamil)</option>
                <option value="hi">🇮🇳 हिन्दी (Hindi)</option>
                <option value="te">🇮🇳 తెలుగు (Telugu)</option>
                <option value="kn">🇮🇳 ಕನ್ನಡ (Kannada)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
              Enter Learning Dashboard →
            </button>

            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', marginTop: '0.75rem', background: 'var(--slate-100)' }}
            >
              ⚡ Quick Fill Sample Student (Arun - Grade 8)
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.82rem', color: 'var(--slate-500)', borderTop: '1px solid var(--slate-200)', paddingTop: '1rem' }}>
            Are you an instructor? <a href="#teacher-login" onClick={(e) => { e.preventDefault(); window.location.hash = 'teacher-login'; }}>Go to Teacher Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. LANGUAGE SELECTION PAGE
// -------------------------------------------------------------
function LanguagePage({ t, currentLang, onSelectLang, onBack }) {
  const languages = [
    { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', sample: 'Quality Education Anywhere' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳', sample: 'தரமான கல்வி. எங்கும். ஆஃப்லைனில்.' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', sample: 'गुणवत्तापूर्ण शिक्षा। कहीं भी।' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳', sample: 'నాణ్యమైన విద్య. ఎక్కడైనా.' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳', sample: 'ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ. ಎಲ್ಲಿಯಾದರೂ.' }
  ];

  return (
    <div style={{ padding: '3.5rem 0' }}>
      <div className="app-container" style={{ maxWidth: '720px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge badge-green" style={{ marginBottom: '0.5rem' }}>MULTILINGUAL ACCESSIBILITY</span>
          <h2 style={{ fontSize: '2.25rem' }}>Choose Your Learning Language</h2>
          <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>
            Select your preferred regional language. All lessons, buttons, and offline assistant responses will instantly adapt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {languages.map((item) => (
            <div
              key={item.code}
              onClick={() => onSelectLang(item.code)}
              className={`card card-interactive flex items-center justify-between ${currentLang === item.code ? 'quiz-option selected' : ''}`}
              style={{ padding: '1.25rem 1.5rem' }}
            >
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '2rem' }}>{item.flag}</span>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                    {item.native} <span style={{ fontSize: '0.9rem', color: 'var(--slate-500)', fontWeight: 500 }}>({item.name})</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', fontStyle: 'italic', marginTop: '0.2rem' }}>
                    "{item.sample}"
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {currentLang === item.code ? (
                  <span className="badge badge-green">✓ Active Selected</span>
                ) : (
                  <button className="btn btn-secondary btn-sm">Select</button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button className="btn btn-secondary" onClick={onBack}>
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. STUDENT DASHBOARD
// -------------------------------------------------------------
function StudentDashboardPage({ t, user, onOpenLesson, onOpenQuiz, onLaunchQuiz, onOpenAskEdu, onOpenProgress, onOpenCourses }) {
  const courses = eduDB.getCourses();
  const assignments = eduDB.getAssignments ? eduDB.getAssignments() : [];
  const activeAssignment = assignments.length > 0 ? assignments[0] : null;

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container">
        {/* Welcome Banner */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #1e40af, #047857)', color: 'var(--white)', padding: '2rem', marginBottom: '1.75rem', borderRadius: 'var(--radius-xl)' }}>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <div className="badge badge-green" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', marginBottom: '0.75rem' }}>
                🟢 Local Hub Wi-Fi Connected
              </div>
              <h1 style={{ color: 'var(--white)', fontSize: '2.1rem', marginBottom: '0.4rem' }}>
                {t.dashboard.welcome.replace('{name}', user.name)}
              </h1>
              <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
                {t.dashboard.subtitle.replace('{grade}', user.grade).replace('{id}', user.id)}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="btn btn-green btn-lg" onClick={onOpenLesson}>
                📖 {t.dashboard.continueLearning}
              </button>
              <button className="btn btn-secondary btn-lg" onClick={onOpenAskEdu} style={{ color: 'var(--slate-900)' }}>
                🤖 Ask EDU Tutor
              </button>
            </div>
          </div>
        </div>

        {/* Active Teacher Assignment Alert Banner */}
        {activeAssignment && (
          <div className="card flex items-center justify-between flex-wrap gap-4" style={{ background: 'linear-gradient(135deg, #eff6ff, #ecfdf5)', border: '2px solid #3b82f6', marginBottom: '2rem', padding: '1.25rem 1.75rem' }}>
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '2.25rem' }}>📋</span>
              <div>
                <div className="flex items-center gap-2" style={{ marginBottom: '0.2rem' }}>
                  <span className="badge badge-blue">ASSIGNED BY TEACHER: {activeAssignment.assignedBy || 'Ananya Sharma'}</span>
                  <span className={`badge ${activeAssignment.difficulty === 'easy' ? 'badge-green' : activeAssignment.difficulty === 'challenge' ? 'badge-rose' : 'badge-amber'}`}>
                    {activeAssignment.difficulty.toUpperCase()} LEVEL
                  </span>
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                  {activeAssignment.subjectName || 'Science'} Interactive Quiz Challenge ({activeAssignment.questionCount || 10} Questions)
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>
                  Grade {activeAssignment.grade || '8'} • Target: {activeAssignment.assignedTo || 'All Students'} • Local Hub Synchronized
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => onLaunchQuiz(activeAssignment.subject || 'science', activeAssignment.difficulty || 'medium')}
            >
              🚀 Start Assigned Quiz →
            </button>
          </div>
        )}

        {/* 4 Summary Stat Cards */}
        <div className="grid grid-cols-4 lg-grid-cols-2 md-grid-cols-1 gap-6" style={{ marginBottom: '2.5rem' }}>
          <div className="card">
            <div className="flex justify-between items-start" style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)' }}>{t.dashboard.myCourses}</span>
              <span style={{ fontSize: '1.5rem' }}>📚</span>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue-900)' }}>4 Active</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--soft-green-600)', marginTop: '0.25rem', fontWeight: 600 }}>All Available Offline</div>
          </div>

          <div className="card">
            <div className="flex justify-between items-start" style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)' }}>{t.dashboard.lessonsCompleted}</span>
              <span style={{ fontSize: '1.5rem' }}>✅</span>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--soft-green-700)' }}>22 Completed</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', marginTop: '0.25rem' }}>Across 4 subjects</div>
          </div>

          <div className="card">
            <div className="flex justify-between items-start" style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)' }}>{t.dashboard.quizScore}</span>
              <span style={{ fontSize: '1.5rem' }}>🎯</span>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--amber-600)' }}>{user.avgQuizScore || 84}%</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--soft-green-600)', marginTop: '0.25rem', fontWeight: 600 }}>+8% from last week</div>
          </div>

          <div className="card">
            <div className="flex justify-between items-start" style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)' }}>{t.dashboard.learningProgress}</span>
              <span style={{ fontSize: '1.5rem' }}>📈</span>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue-700)' }}>{user.progress || 75}%</div>
            <div className="progress-track" style={{ marginTop: '0.5rem' }}>
              <div className="progress-fill progress-blue" style={{ width: `${user.progress || 75}%` }}></div>
            </div>
          </div>
        </div>

        {/* Subjects Grid: Mathematics, Science, Computer Science, English */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem' }}>
            <div>
              <h2 style={{ fontSize: '1.65rem' }}>My Learning Subjects</h2>
              <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>Select a subject to take randomized offline quizzes or interactive lessons</p>
            </div>
            <button className="btn btn-secondary btn-sm" onClick={onOpenCourses}>
              Explore Full Library 📚
            </button>
          </div>

          <div className="grid grid-cols-2 md-grid-cols-1 gap-6">
            {courses.map((course) => {
              const progressVal = user.subjectProgress ? user.subjectProgress[course.subjectId] : course.progress;
              return (
                <div key={course.id} className="card card-interactive flex flex-col justify-between" onClick={() => onOpenLesson(course.subjectId)}>
                  <div>
                    <div className="flex justify-between items-start" style={{ marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '2rem', padding: '0.5rem', borderRadius: 'var(--radius-lg)', background: 'var(--slate-100)' }}>{course.icon}</span>
                      <div className="flex gap-2">
                        <span className="badge badge-green">✓ 15 Questions</span>
                        <span className="badge badge-blue">✓ 3 Difficulties</span>
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--slate-900)' }}>
                      {course.title}
                    </h3>
                    <p style={{ color: 'var(--slate-600)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      {course.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center" style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--slate-600)' }}>Progress</span>
                      <span style={{ color: course.color }}>{progressVal}% Completed</span>
                    </div>
                    <div className="progress-track" style={{ marginBottom: '1.25rem' }}>
                      <div className="progress-fill" style={{ width: `${progressVal}%`, background: course.color }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                        {course.completedCount}/{course.lessonsCount} Modules
                      </span>
                      <div className="flex gap-2">
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={(e) => { e.stopPropagation(); onLaunchQuiz(course.subjectId, 'all'); }}
                        >
                          Quiz ✍️
                        </button>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={(e) => { e.stopPropagation(); onOpenLesson(course.subjectId); }}
                        >
                          Lesson →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Access Action Banners */}
        <div className="grid grid-cols-2 md-grid-cols-1 gap-6">
          <div className="card flex items-center justify-between" style={{ background: 'var(--primary-blue-50)', borderColor: 'var(--primary-blue-200)' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-blue-900)', marginBottom: '0.25rem' }}>Interactive Question Bank</h3>
              <p style={{ color: 'var(--primary-blue-700)', fontSize: '0.85rem' }}>48 randomized questions across 4 subjects in 5 languages.</p>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => onLaunchQuiz('math', 'all')}>
              Launch Quiz ✍️
            </button>
          </div>

          <div className="card flex items-center justify-between" style={{ background: 'var(--soft-green-50)', borderColor: 'var(--soft-green-200)' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--soft-green-800)', marginBottom: '0.25rem' }}>View Learning Analytics</h3>
              <p style={{ color: 'var(--soft-green-700)', fontSize: '0.85rem' }}>Check your 5-day streak and topic mastery scores.</p>
            </div>
            <button className="btn btn-green btn-sm" onClick={onOpenProgress}>
              View Progress 📈
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5. LESSON PAGE (Multi-Subject Interactive Lessons & Offline Video Player)
// -------------------------------------------------------------
function LessonPage({ t, user, currentLang = 'en', activeSubject = 'math', onSelectSubject, onTakeQuiz, onBack, showToast }) {
  const [selectedSubject, setSelectedSubject] = useState(activeSubject || 'math');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [downloadedLessons, setDownloadedLessons] = useState(eduDB.getDownloadedLessons());

  // Fractions state (Math)
  const [slicesEaten, setSlicesEaten] = useState(2);
  const [totalSlices, setTotalSlices] = useState(4);

  // Photosynthesis state (Science)
  const [sunlightLevel, setSunlightLevel] = useState(85);
  const [waterLevel, setWaterLevel] = useState(75);
  const [co2Level, setCo2Level] = useState(80);

  // Binary Switchboard state (CS)
  const [binaryBits, setBinaryBits] = useState([0, 0, 0, 0, 0, 1, 0, 1]); // default: 5 (00000101)
  const bitWeights = [128, 64, 32, 16, 8, 4, 2, 1];

  // English Verbs & Tenses state
  const [selectedVerbIndex, setSelectedVerbIndex] = useState(4); // default: Play
  const [selectedTense, setSelectedTense] = useState('present'); // 'past', 'present', 'future'
  const verbsList = [
    { base: "run", past: "ran", present: "run", future: "will run", pastSent: "I ran to school yesterday.", presSent: "I run every morning.", futSent: "I will run in the race tomorrow." },
    { base: "eat", past: "ate", present: "eat", future: "will eat", pastSent: "I ate a fresh mango.", presSent: "I eat healthy food.", futSent: "I will eat dinner later." },
    { base: "read", past: "read", present: "read", future: "will read", pastSent: "I read an exciting story.", presSent: "I read my science book.", futSent: "I will read the next chapter tonight." },
    { base: "write", past: "wrote", present: "write", future: "will write", pastSent: "I wrote a letter to my friend.", presSent: "I write notes in class.", futSent: "I will write an essay tomorrow." },
    { base: "play", past: "played", present: "play", future: "will play", pastSent: "I played football.", presSent: "I play football.", futSent: "I will play football." }
  ];

  // Sync selected subject if prop changes
  useEffect(() => {
    if (activeSubject) setSelectedSubject(activeSubject);
  }, [activeSubject]);

  const handleSubjectTab = (sub) => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsPlayingAudio(false);
    setSelectedSubject(sub);
    if (onSelectSubject) onSelectSubject(sub);
  };

  const isDownloaded = downloadedLessons.includes(`lesson-${selectedSubject}-01`);

  const handleToggleDownload = () => {
    const isNow = eduDB.toggleLessonDownload(`lesson-${selectedSubject}-01`);
    setDownloadedLessons(eduDB.getDownloadedLessons());
    showToast(isNow ? "✓ Lesson saved for 100% offline access" : "Lesson removed from local cache");
  };

  // Browser Web Speech API offline voice narration
  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      showToast("Audio stopped");
      return;
    }

    let speechText = "";
    if (selectedSubject === 'math') {
      speechText = "Understanding Fractions. Numerator over Denominator. Two fourths equals one half, which equals four eighths, or fifty percent. One half plus one half equals one whole!";
    } else if (selectedSubject === 'science') {
      speechText = "How plants make food: Photosynthesis. Using sunlight, water, and carbon dioxide, green chlorophyll in plant leaves produces glucose food and releases oxygen.";
    } else if (selectedSubject === 'cs') {
      speechText = "Understanding Binary Code. Computers think in binary using zeroes and ones. Zero is switch OFF, one is switch ON. For example, 1 0 1 in binary equals 5 in decimal.";
    } else if (selectedSubject === 'english') {
      speechText = "Verbs and Tenses. Past happened before: I played football. Present happens now: I play football. Future will happen later: I will play football.";
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
      showToast("Audio narration playing offline 🔊");
    }
  };

  // Binary helpers
  const toggleBit = (idx) => {
    setBinaryBits(prev => {
      const copy = [...prev];
      copy[idx] = copy[idx] === 1 ? 0 : 1;
      return copy;
    });
  };

  const decimalValue = binaryBits.reduce((acc, bit, idx) => acc + (bit * bitWeights[idx]), 0);

  const setBinaryPreset = (val) => {
    const bits = [];
    let rem = val;
    for (let i = 0; i < 8; i++) {
      if (rem >= bitWeights[i]) {
        bits.push(1);
        rem -= bitWeights[i];
      } else {
        bits.push(0);
      }
    }
    setBinaryBits(bits);
  };

  // Photosynthesis reaction calculation
  const glucoseRate = Math.round((sunlightLevel * 0.45) + (waterLevel * 0.3) + (co2Level * 0.25));
  const oxygenRate = Math.round(glucoseRate * 1.2);

  // Active video ID for this subject
  const videoIdMap = {
    math: "vid-fractions-01",
    science: "vid-photosynthesis-02",
    cs: "vid-binary-03",
    english: "vid-verbs-04"
  };

  const activeVideoId = videoIdMap[selectedSubject] || "vid-fractions-01";
  const activeVerb = verbsList[selectedVerbIndex];

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container" style={{ maxWidth: '880px' }}>
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center flex-wrap gap-3" style={{ marginBottom: '1.25rem' }}>
          <button className="btn btn-secondary btn-sm" onClick={onBack}>
            ← Back to Dashboard
          </button>
          <div className="flex items-center gap-2">
            <span className="badge badge-green">🟢 Local Hub Learning Module</span>
            <button
              className={`btn btn-sm ${isDownloaded ? 'btn-green' : 'btn-secondary'}`}
              onClick={handleToggleDownload}
            >
              💾 {isDownloaded ? "✓ Available Offline" : "Download for Offline"}
            </button>
          </div>
        </div>

        {/* 4 Core Subject Tabs */}
        <div className="card" style={{ padding: '0.75rem 1rem', marginBottom: '1.5rem', background: '#ffffff' }}>
          <div className="flex gap-2 flex-wrap justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              <button
                className={`btn btn-sm ${selectedSubject === 'math' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleSubjectTab('math')}
                style={{ fontWeight: selectedSubject === 'math' ? 800 : 600 }}
              >
                📐 Mathematics: Fractions
              </button>
              <button
                className={`btn btn-sm ${selectedSubject === 'science' ? 'btn-green' : 'btn-secondary'}`}
                onClick={() => handleSubjectTab('science')}
                style={{ fontWeight: selectedSubject === 'science' ? 800 : 600 }}
              >
                🌱 Science: Photosynthesis
              </button>
              <button
                className={`btn btn-sm ${selectedSubject === 'cs' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleSubjectTab('cs')}
                style={{ fontWeight: selectedSubject === 'cs' ? 800 : 600, background: selectedSubject === 'cs' ? '#0284c7' : undefined, borderColor: selectedSubject === 'cs' ? '#0284c7' : undefined }}
              >
                💻 Computer Science: Binary
              </button>
              <button
                className={`btn btn-sm ${selectedSubject === 'english' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleSubjectTab('english')}
                style={{ fontWeight: selectedSubject === 'english' ? 800 : 600, background: selectedSubject === 'english' ? '#6366f1' : undefined, borderColor: selectedSubject === 'english' ? '#6366f1' : undefined }}
              >
                📚 English: Verbs & Tenses
              </button>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)', fontWeight: 600 }}>
              Grade 8 Syllabus
            </span>
          </div>
        </div>

        {/* Main Lesson Content Card */}
        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--slate-200)', paddingBottom: '1.5rem', marginBottom: '1.75rem' }}>
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <div className="badge badge-blue" style={{ marginBottom: '0.4rem' }}>
                  {selectedSubject === 'math' && "Grade 8 Mathematics • Unit 3"}
                  {selectedSubject === 'science' && "Grade 8 Science • Unit 4"}
                  {selectedSubject === 'cs' && "Grade 8 Computer Science • Unit 2"}
                  {selectedSubject === 'english' && "Grade 8 English Grammar • Unit 1"}
                </div>
                <h1 style={{ fontSize: '2.2rem', marginBottom: '0.35rem' }}>
                  {selectedSubject === 'math' && "Understanding Fractions"}
                  {selectedSubject === 'science' && "How Plants Make Food — Photosynthesis"}
                  {selectedSubject === 'cs' && "Understanding Binary Code"}
                  {selectedSubject === 'english' && "Verbs & Tenses (Past, Present, Future)"}
                </h1>
                <p style={{ color: 'var(--slate-500)', fontSize: '0.95rem' }}>
                  {selectedSubject === 'math' && "Visual exploration of numerators, denominators, and equivalent parts."}
                  {selectedSubject === 'science' && "Explore how leaves harness sunlight, water, and CO₂ to produce glucose and oxygen."}
                  {selectedSubject === 'cs' && "Discover how digital machines use 0 and 1 switch states to represent all data."}
                  {selectedSubject === 'english' && "Master core action verbs and travel through time with three fundamental tenses."}
                </p>
              </div>

              {/* Multimedia Controls */}
              <div className="flex gap-2">
                <button
                  className={`btn ${isPlayingAudio ? 'btn-primary audio-pulsing' : 'btn-soft-blue'} btn-sm`}
                  onClick={handleToggleAudio}
                >
                  {isPlayingAudio ? "⏹ Stop Voice" : "🔊 Listen to Lesson"}
                </button>
              </div>
            </div>
          </div>

          {/* ================= SUBJECT 1: MATHEMATICS ================= */}
          {selectedSubject === 'math' && (
            <div>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--slate-800)', marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  A <strong>fraction</strong> represents a part of a single whole. Fractions help us divide items fairly, calculate recipes, and measure distance accurately.
                </p>
                <div style={{ background: 'var(--primary-blue-50)', borderLeft: '4px solid var(--primary-blue-600)', padding: '1rem 1.25rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontSize: '0.95rem', color: 'var(--primary-blue-900)' }}>
                  💡 <strong>Fraction Rule:</strong> Written as <code>Numerator / Denominator</code>.<br/>
                  • <strong>Numerator (top):</strong> Number of selected or eaten parts.<br/>
                  • <strong>Denominator (bottom):</strong> Total number of equal parts that make up the whole object.
                </div>
              </div>

              {/* Interactive Pizza Slicer Widget */}
              <div className="fraction-widget">
                <div className="flex justify-between items-center flex-wrap gap-2" style={{ marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem' }}>🍕 Interactive Fraction Pizza</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>Click on slices to eat or restore them</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className={`btn btn-sm ${totalSlices === 2 ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => { setTotalSlices(2); setSlicesEaten(1); }}
                    >
                      2 Slices (1/2)
                    </button>
                    <button
                      className={`btn btn-sm ${totalSlices === 4 ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => { setTotalSlices(4); setSlicesEaten(2); }}
                    >
                      4 Slices (2/4)
                    </button>
                    <button
                      className={`btn btn-sm ${totalSlices === 8 ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => { setTotalSlices(8); setSlicesEaten(4); }}
                    >
                      8 Slices (4/8)
                    </button>
                  </div>
                </div>

                {/* Pizza SVG */}
                <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                  <svg width="220" height="220" viewBox="0 0 220 220" style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.1))' }}>
                    <circle cx="110" cy="110" r="100" fill="#fde68a" stroke="#d97706" strokeWidth="8" />
                    {Array.from({ length: totalSlices }).map((_, idx) => {
                      const angle = 360 / totalSlices;
                      const startAngle = idx * angle;
                      const endAngle = (idx + 1) * angle;
                      const isEaten = idx < slicesEaten;

                      const x1 = 110 + 94 * Math.cos((Math.PI * (startAngle - 90)) / 180);
                      const y1 = 110 + 94 * Math.sin((Math.PI * (startAngle - 90)) / 180);
                      const x2 = 110 + 94 * Math.cos((Math.PI * (endAngle - 90)) / 180);
                      const y2 = 110 + 94 * Math.sin((Math.PI * (endAngle - 90)) / 180);
                      const largeArc = angle > 180 ? 1 : 0;

                      return (
                        <path
                          key={idx}
                          d={`M 110 110 L ${x1} ${y1} A 94 94 0 ${largeArc} 1 ${x2} ${y2} Z`}
                          fill={isEaten ? '#ef4444' : '#10b981'}
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          opacity={isEaten ? 0.9 : 0.4}
                          style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                          onClick={() => setSlicesEaten(idx + 1)}
                        />
                      );
                    })}
                    <circle cx="110" cy="110" r="18" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
                    <text x="110" y="115" fontSize="12" fontWeight="800" textAnchor="middle" fill="#d97706">🍕</text>
                  </svg>

                  <div style={{ marginTop: '0.75rem', fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary-blue-900)' }}>
                    Active Fraction: <span style={{ color: '#ef4444' }}>{slicesEaten}</span> / <span style={{ color: 'var(--slate-800)' }}>{totalSlices}</span> = {((slicesEaten / totalSlices) * 100).toFixed(0)}%
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>
                    Notice that {slicesEaten}/{totalSlices} is equal to {(slicesEaten / totalSlices) === 0.5 ? '1/2 (Half a Pizza! 50%)' : (slicesEaten / totalSlices) === 1 ? '1 (Whole Pizza! 100%)' : (slicesEaten / totalSlices).toFixed(2)}
                  </div>
                </div>

                {/* Fraction Bar */}
                <div style={{ marginTop: '1.5rem' }}>
                  <div className="flex justify-between items-center" style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    <span>Linear Fraction Bar Representation:</span>
                    <span>Click segments to adjust numerator</span>
                  </div>
                  <div className="fraction-bar-container">
                    {Array.from({ length: totalSlices }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`fraction-segment ${idx < slicesEaten ? 'active' : 'inactive'}`}
                        onClick={() => setSlicesEaten(idx + 1)}
                      >
                        1/{totalSlices}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reflection Callout */}
              <div style={{ background: 'var(--soft-green-50)', border: '1px solid var(--soft-green-200)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', margin: '1.5rem 0' }}>
                <h4 style={{ color: 'var(--soft-green-800)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  ✏️ Math Rule to Remember
                </h4>
                <div style={{ fontWeight: 800, color: 'var(--soft-green-900)', fontSize: '1.1rem' }}>
                  1/2 = 2/4 = 4/8 = 50%
                </div>
                <p style={{ color: 'var(--slate-700)', fontSize: '0.92rem', marginTop: '0.3rem' }}>
                  When two halves are added together: <strong>1/2 + 1/2 = 2/2 = 1 Complete Whole</strong>.
                </p>
              </div>
            </div>
          )}

          {/* ================= SUBJECT 2: SCIENCE ================= */}
          {selectedSubject === 'science' && (
            <div>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--slate-800)', marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  Plants are nature’s solar-powered food factories! Through <strong>photosynthesis</strong>, green plants convert raw sunlight, soil moisture, and atmospheric carbon dioxide into glucose and release oxygen.
                </p>
                <div style={{ background: 'var(--soft-green-50)', borderLeft: '4px solid var(--soft-green-600)', padding: '1rem 1.25rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontSize: '0.95rem', color: 'var(--soft-green-900)' }}>
                  🌿 <strong>Chemical Reaction Equation:</strong><br/>
                  <code>Sunlight + Water (H₂O) + Carbon Dioxide (CO₂) ➔ Glucose + Oxygen (O₂)</code>
                </div>
              </div>

              {/* Interactive Photosynthesis Reactor */}
              <div className="fraction-widget" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#166534' }}>🌱 Interactive Chloroplast Reaction Chamber</h3>
                    <p style={{ fontSize: '0.85rem', color: '#15803d' }}>Adjust environmental inputs to observe food and oxygen production</p>
                  </div>
                  <span className="badge badge-green">🍃 Chlorophyll Active</span>
                </div>

                <div className="grid grid-cols-3 md-grid-cols-1 gap-4" style={{ marginBottom: '1.5rem' }}>
                  <div style={{ background: '#ffffff', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #dcfce7' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span>☀️ Sunlight:</span>
                      <span style={{ color: '#d97706' }}>{sunlightLevel}%</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sunlightLevel}
                      onChange={(e) => setSunlightLevel(parseInt(e.target.value))}
                      style={{ width: '100%', accentColor: '#f59e0b' }}
                    />
                  </div>

                  <div style={{ background: '#ffffff', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #dcfce7' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span>💧 Water (Soil Moisture):</span>
                      <span style={{ color: '#2563eb' }}>{waterLevel}%</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={waterLevel}
                      onChange={(e) => setWaterLevel(parseInt(e.target.value))}
                      style={{ width: '100%', accentColor: '#3b82f6' }}
                    />
                  </div>

                  <div style={{ background: '#ffffff', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #dcfce7' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span>🌬️ Carbon Dioxide (CO₂):</span>
                      <span style={{ color: '#059669' }}>{co2Level}%</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={co2Level}
                      onChange={(e) => setCo2Level(parseInt(e.target.value))}
                      style={{ width: '100%', accentColor: '#10b981' }}
                    />
                  </div>
                </div>

                {/* Reaction Output Meter */}
                <div className="grid grid-cols-2 md-grid-cols-1 gap-4">
                  <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '2px solid #34d399' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#059669' }}>{glucoseRate} mg/h</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-700)' }}>🍬 Glucose (Plant Nourishment)</div>
                    <div className="progress-track" style={{ marginTop: '0.5rem' }}>
                      <div className="progress-fill progress-green" style={{ width: `${glucoseRate}%` }}></div>
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '2px solid #38bdf8' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0284c7' }}>{oxygenRate} mL/min</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-700)' }}>💨 Oxygen Released (O₂)</div>
                    <div className="progress-track" style={{ marginTop: '0.5rem' }}>
                      <div className="progress-fill" style={{ width: `${Math.min(100, oxygenRate)}%`, background: '#0284c7' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflection Callout */}
              <div style={{ background: 'var(--soft-green-50)', border: '1px solid var(--soft-green-200)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', margin: '1.5rem 0' }}>
                <h4 style={{ color: 'var(--soft-green-800)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  ✏️ Science Check
                </h4>
                <p style={{ color: 'var(--slate-700)', fontSize: '0.92rem' }}>
                  <strong>Which gas do plants take in during photosynthesis?</strong> Answer: <strong>Carbon dioxide (CO₂)</strong> from the air, releasing life-giving Oxygen back into our atmosphere.
                </p>
              </div>
            </div>
          )}

          {/* ================= SUBJECT 3: COMPUTER SCIENCE ================= */}
          {selectedSubject === 'cs' && (
            <div>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--slate-800)', marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  Computers do not speak English, Tamil, or Hindi natively. At their deepest hardware level, they process everything using <strong>binary code</strong>: a system composed exclusively of <strong>0s and 1s</strong>.
                </p>
                <div style={{ background: 'var(--primary-blue-50)', borderLeft: '4px solid #0284c7', padding: '1rem 1.25rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontSize: '0.95rem', color: '#0369a1' }}>
                  ⚡ <strong>The Physical Meaning of Binary:</strong><br/>
                  • <strong>0 ➔ OFF:</strong> Low electrical voltage (transistor switch open).<br/>
                  • <strong>1 ➔ ON:</strong> High electrical voltage (transistor switch closed).
                </div>
              </div>

              {/* Interactive 8-Bit Binary Switchboard */}
              <div className="fraction-widget" style={{ background: '#0f172a', borderColor: '#334155', color: '#ffffff' }}>
                <div className="flex justify-between items-center flex-wrap gap-2" style={{ marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#38bdf8' }}>💻 Interactive 8-Bit Switchboard</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Click each bit to toggle between 0 (OFF) and 1 (ON)</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="btn btn-secondary btn-sm" onClick={() => setBinaryPreset(5)} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>5₁₀ (101)</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setBinaryPreset(10)} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>10₁₀</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setBinaryPreset(42)} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>42₁₀</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setBinaryBits([0,0,0,0,0,0,0,0])} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Reset 0</button>
                  </div>
                </div>

                {/* 8 Bits Grid */}
                <div className="grid grid-cols-8 gap-2 text-center" style={{ margin: '1.25rem 0' }}>
                  {binaryBits.map((bit, idx) => (
                    <div
                      key={idx}
                      onClick={() => toggleBit(idx)}
                      style={{
                        background: bit === 1 ? '#0369a1' : '#1e293b',
                        border: `2px solid ${bit === 1 ? '#38bdf8' : '#475569'}`,
                        borderRadius: 'var(--radius-md)',
                        padding: '0.75rem 0.25rem',
                        cursor: 'pointer',
                        transition: 'var(--transition)'
                      }}
                    >
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                        {bit === 1 ? "💡" : "🌑"}
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 900, color: bit === 1 ? '#ffffff' : '#94a3b8' }}>
                        {bit}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                        {bitWeights[idx]}s
                      </div>
                    </div>
                  ))}
                </div>

                {/* Real-time Binary to Decimal Calculation */}
                <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 'var(--radius-lg)', padding: '1rem 1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Active 8-Bit Binary String:
                  </div>
                  <div style={{ fontSize: '1.4rem', fontFamily: 'monospace', fontWeight: 800, color: '#38bdf8', margin: '0.25rem 0' }}>
                    {binaryBits.join('')}₂
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#34d399' }}>
                    Decimal Value: {decimalValue}₁₀
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                    Example: Binary 101₂ = (1×4) + (0×2) + (1×1) = 5₁₀
                  </div>
                </div>
              </div>

              {/* Reflection Callout */}
              <div style={{ background: 'var(--primary-blue-50)', border: '1px solid var(--primary-blue-200)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', margin: '1.5rem 0' }}>
                <h4 style={{ color: 'var(--primary-blue-900)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  ✏️ CS Concept to Remember
                </h4>
                <p style={{ color: 'var(--primary-blue-800)', fontSize: '0.92rem' }}>
                  The two digits used in binary are <strong>0 and 1</strong>. A single binary digit is called a <strong>bit</strong>, and 8 bits combine to form one <strong>byte</strong>.
                </p>
              </div>
            </div>
          )}

          {/* ================= SUBJECT 4: ENGLISH ================= */}
          {selectedSubject === 'english' && (
            <div>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--slate-800)', marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Verbs</strong> are action words that bring sentences to life. <strong>Tenses</strong> tell us when that action occurs along the timeline of life: in the past, present, or future.
                </p>
                <div style={{ background: '#eef2ff', borderLeft: '4px solid #6366f1', padding: '1rem 1.25rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontSize: '0.95rem', color: '#3730a3' }}>
                  ⏳ <strong>The Three Fundamental Tenses:</strong><br/>
                  • <strong>Past ➔</strong> Happened before (e.g., <em>I played football.</em>)<br/>
                  • <strong>Present ➔</strong> Happening now or regularly (e.g., <em>I play football.</em>)<br/>
                  • <strong>Future ➔</strong> Will happen later (e.g., <em>I will play football.</em>)
                </div>
              </div>

              {/* Interactive Verb Tense Transformer */}
              <div className="fraction-widget" style={{ background: '#f5f3ff', borderColor: '#ddd6fe' }}>
                <div className="flex justify-between items-center flex-wrap gap-2" style={{ marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#4338ca' }}>📚 Interactive Verb Tense Transformer</h3>
                    <p style={{ fontSize: '0.85rem', color: '#6366f1' }}>Choose a verb and toggle the tense to see sentence transformation</p>
                  </div>
                </div>

                {/* Verb Selection Chips */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate-600)', marginBottom: '0.35rem' }}>
                    Select an Action Verb:
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {verbsList.map((v, vIdx) => (
                      <button
                        key={v.base}
                        className={`btn btn-sm ${selectedVerbIndex === vIdx ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ background: selectedVerbIndex === vIdx ? '#4f46e5' : undefined, textTransform: 'capitalize' }}
                        onClick={() => setSelectedVerbIndex(vIdx)}
                      >
                        {v.base}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tense Toggle Tabs */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div className="flex gap-2">
                    <button
                      className={`btn btn-sm ${selectedTense === 'past' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1, background: selectedTense === 'past' ? '#2563eb' : undefined }}
                      onClick={() => setSelectedTense('past')}
                    >
                      ⏪ PAST (Happened Before)
                    </button>
                    <button
                      className={`btn btn-sm ${selectedTense === 'present' ? 'btn-green' : 'btn-secondary'}`}
                      style={{ flex: 1 }}
                      onClick={() => setSelectedTense('present')}
                    >
                      ▶ PRESENT (Happening Now)
                    </button>
                    <button
                      className={`btn btn-sm ${selectedTense === 'future' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1, background: selectedTense === 'future' ? '#8b5cf6' : undefined, borderColor: selectedTense === 'future' ? '#8b5cf6' : undefined }}
                      onClick={() => setSelectedTense('future')}
                    >
                      ⏩ FUTURE (Will Happen)
                    </button>
                  </div>
                </div>

                {/* Transformed Sentence Box */}
                <div style={{ background: '#ffffff', border: '2px solid #c7d2fe', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Sentence in {selectedTense.toUpperCase()} Tense:
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--slate-900)', margin: '0.5rem 0' }}>
                    "{selectedTense === 'past' ? activeVerb.pastSent : selectedTense === 'present' ? activeVerb.presSent : activeVerb.futSent}"
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--slate-600)' }}>
                    Active Verb Form: <strong>{selectedTense === 'past' ? activeVerb.past : selectedTense === 'present' ? activeVerb.present : activeVerb.future}</strong>
                  </div>
                </div>
              </div>

              {/* Reflection Callout */}
              <div style={{ background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: 'var(--radius-lg)', padding: '1.25rem', margin: '1.5rem 0' }}>
                <h4 style={{ color: '#3730a3', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  ✏️ Grammar Rule to Remember
                </h4>
                <p style={{ color: 'var(--slate-700)', fontSize: '0.92rem' }}>
                  In English future tense, the modal auxiliary verb <strong>"will"</strong> (e.g. <em>"I will play football"</em>) signals an event scheduled for the future.
                </p>
              </div>
            </div>
          )}

          {/* ================= OFFLINE EDUCATIONAL VIDEO PLAYER ================= */}
          <div style={{ marginTop: '2rem', borderTop: '1px solid var(--slate-200)', paddingTop: '1.5rem' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem' }}>🎥 Offline Educational Video</h3>
                <p style={{ color: 'var(--slate-500)', fontSize: '0.88rem' }}>Stored locally in EDU-BOX hub storage • Zero internet required</p>
              </div>
              <span className="badge badge-green">🟢 Available Offline</span>
            </div>

            {/* Embedded Educational Video Player */}
            {window.EducationalVideoPlayer ? (
              <window.EducationalVideoPlayer videoId={activeVideoId} />
            ) : (
              <div style={{ background: '#0f172a', color: '#fff', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                Loading local offline video player...
              </div>
            )}
          </div>

          {/* Previous & Next Buttons */}
          <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid var(--slate-200)', marginTop: '2rem' }}>
            <button className="btn btn-secondary" onClick={onBack}>
              ← Back to Dashboard
            </button>
            <button className="btn btn-primary btn-lg" onClick={() => onTakeQuiz(selectedSubject)}>
              Next: Take Offline Quiz ({selectedSubject === 'math' ? 'Math' : selectedSubject === 'science' ? 'Science' : selectedSubject === 'cs' ? 'Computer Science' : 'English'}) ✍️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 6. INTERACTIVE MULTILINGUAL OFFLINE QUIZ SYSTEM
// -------------------------------------------------------------
function QuizPage({ t, user, currentLang = 'en', onQuizComplete, onBack, showToast, initialSubject = 'math', initialDifficulty = 'all' }) {
  const [subject, setSubject] = useState(initialSubject);
  const [difficulty, setDifficulty] = useState(initialDifficulty); // 'all', 'easy', 'medium', 'challenge'
  const [questionCount, setQuestionCount] = useState(10);

  // Progression state
  const [quizState, setQuizState] = useState('active'); // 'active' | 'summary'
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Scoring & Streaks
  const [currentStreak, setCurrentStreak] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [answersLog, setAnswersLog] = useState([]); // Array of question review items
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  const subjectNames = {
    math: { title: "Mathematics", icon: "📐", color: "#2563eb" },
    science: { title: "Science", icon: "🌱", color: "#059669" },
    cs: { title: "Computer Science", icon: "💻", color: "#0284c7" },
    english: { title: "English", icon: "📚", color: "#6366f1" }
  };

  // Generate randomized quiz strictly from subject-specific question bank
  const initializeQuiz = (subKey, diffLevel, count = 10) => {
    const subjectMap = {
      math: "Mathematics",
      science: "Science",
      cs: "Computer Science",
      english: "English"
    };
    const resolvedSubject = subjectMap[subKey] || subKey;

    // Strict Subject-Specific Question Bank selection via window.getQuestions(subject, language, grade, difficulty, count)
    let rawQuestions = [];
    if (window.getQuestions) {
      rawQuestions = window.getQuestions(resolvedSubject, currentLang, 8, diffLevel, count);
    }

    if (!rawQuestions || rawQuestions.length === 0) {
      const rawBank = window.EDU_QUIZ_DATA || [];
      rawQuestions = rawBank.filter(q => q.subject === subKey).slice(0, count);
    }

    const keys = ['A', 'B', 'C', 'D'];
    const prepared = rawQuestions.map((q, qIndex) => {
      // Standardized from window.getQuestions
      if (Array.isArray(q.options) && typeof q.options[0] === 'string') {
        const remappedOptions = q.options.map((optText, optIdx) => ({
          key: keys[optIdx],
          text: optText,
          isCorrect: optIdx === q.correctAnswer
        }));
        const correctOption = remappedOptions.find(o => o.isCorrect) || remappedOptions[0];

        return {
          id: q.id || `q-${qIndex}`,
          topic: q.topic || "Core Concept",
          difficulty: (q.difficulty || "medium").toLowerCase(),
          basePoints: q.points || (q.difficulty === 'Challenge' ? 20 : q.difficulty === 'Medium' ? 15 : 10),
          questionText: q.question,
          options: remappedOptions,
          correctKey: correctOption.key,
          explanation: q.explanation
        };
      }

      // Legacy fallback
      const qTrans = (q.translations && q.translations[currentLang]) ? q.translations[currentLang] : (q.translations?.en || q);
      const rawOptions = qTrans.options || [{ id: '1', text: 'Option A' }];
      const shuffledOptions = [...rawOptions].sort(() => Math.random() - 0.5);
      const remappedOptions = shuffledOptions.map((opt, optIdx) => ({
        key: keys[optIdx],
        originalId: opt.id,
        text: opt.text || opt
      }));
      const correctOption = remappedOptions.find(o => o.originalId === q.correctOptionId) || remappedOptions[0];

      return {
        id: q.id || `q-${qIndex}`,
        topic: q.topic || "Core Concept",
        difficulty: (q.difficulty || "medium").toLowerCase(),
        basePoints: q.points || (q.difficulty === 'challenge' ? 20 : q.difficulty === 'medium' ? 15 : 10),
        questionText: qTrans.question || q.question,
        options: remappedOptions,
        correctKey: correctOption.key,
        explanation: qTrans.explanation || q.explanation
      };
    });

    setSessionQuestions(prepared);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentStreak(0);
    setTotalPoints(0);
    setAnswersLog([]);
    setQuizState('active');
  };

  // Initialize on mount or when subject, difficulty, or language changes
  useEffect(() => {
    initializeQuiz(subject, difficulty, questionCount);
  }, [subject, difficulty, currentLang]);

  // Current active question
  const currentQ = sessionQuestions[currentIndex];

  // Handle student selecting an answer
  const handleSelectOption = (chosenKey) => {
    if (isAnswered || !currentQ) return;

    setSelectedOption(chosenKey);
    setIsAnswered(true);

    const isCorrect = chosenKey === currentQ.correctKey;
    const selectedOptObj = currentQ.options.find(o => o.key === chosenKey);
    const correctOptObj = currentQ.options.find(o => o.key === currentQ.correctKey);

    let earned = 0;
    if (isCorrect) {
      earned = currentQ.basePoints + (currentStreak >= 2 ? 5 : 0); // streak bonus!
      setTotalPoints(prev => prev + earned);
      setCurrentStreak(prev => prev + 1);
    } else {
      setCurrentStreak(0);
    }

    // Record review entry
    const reviewItem = {
      questionId: currentQ.id,
      topic: currentQ.topic,
      difficulty: currentQ.difficulty,
      questionText: currentQ.questionText,
      selectedKey: chosenKey,
      selectedText: selectedOptObj ? selectedOptObj.text : '',
      correctKey: currentQ.correctKey,
      correctText: correctOptObj ? correctOptObj.text : '',
      isCorrect: isCorrect,
      pointsEarned: earned,
      explanation: currentQ.explanation
    };

    setAnswersLog(prev => [...prev, reviewItem]);
  };

  // Advance to next question or complete quiz
  const handleNextQuestion = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Final question reached - calculate summary and persist locally
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const totalQ = sessionQuestions.length;
    const correctCount = answersLog.filter(a => a.isCorrect).length;
    const finalPercentage = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;

    // Identify weak topic if 2 or more errors in a specific topic
    const topicMistakes = {};
    answersLog.forEach(item => {
      if (!item.isCorrect) {
        topicMistakes[item.topic] = (topicMistakes[item.topic] || 0) + 1;
      }
    });
    let detectedWeakTopic = null;
    let maxMistakes = 0;
    Object.entries(topicMistakes).forEach(([top, count]) => {
      if (count > maxMistakes) {
        maxMistakes = count;
        detectedWeakTopic = top;
      }
    });

    // Save offline attempt
    eduDB.saveQuizAttempt({
      studentId: user.id,
      subject: subject,
      subjectTitle: subjectNames[subject].title,
      difficulty: difficulty,
      score: correctCount,
      total: totalQ,
      percentage: finalPercentage,
      pointsEarned: totalPoints,
      weakTopicIdentified: detectedWeakTopic,
      quizTitle: `${subjectNames[subject].title}: ${difficulty.toUpperCase()} Quiz (${correctCount}/${totalQ})`
    });

    setQuizState('summary');
    showToast(`✓ Quiz completed! Scored ${finalPercentage}% (${totalPoints} pts) saved to local hub.`);
  };

  const bestScores = eduDB.getBestScores ? eduDB.getBestScores() : {};
  const currentBest = bestScores[subject] || 85;

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container" style={{ maxWidth: '820px' }}>
        {/* Navigation Breadcrumb & Hub Status */}
        <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
          <button className="btn btn-secondary btn-sm" onClick={onBack}>
            ← Back to Learning Hub
          </button>
          <div className="flex items-center gap-3">
            <span className="badge badge-green">
              <span className="pulse-dot"></span>
              🟢 100% Offline Interactive Engine
            </span>
            <span className="badge badge-blue">
              🏆 Best: {currentBest}%
            </span>
          </div>
        </div>

        {/* Top Controls: Subject Selection & Difficulty Levels */}
        <div className="card" style={{ padding: '1.25rem 1.5rem', marginBottom: '1.75rem', background: '#ffffff' }}>
          <div className="flex justify-between items-center flex-wrap gap-3">
            {/* Subject Tabs */}
            <div className="flex gap-2 flex-wrap">
              {Object.entries(subjectNames).map(([key, info]) => (
                <button
                  key={key}
                  className={`btn btn-sm ${subject === key ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => { setSubject(key); }}
                  style={{ fontWeight: subject === key ? 800 : 600 }}
                >
                  {info.icon} {info.title}
                </button>
              ))}
            </div>

            {/* Difficulty Toggle (🟢 Easy, 🟡 Medium, 🔴 Challenge) */}
            <div className="flex items-center gap-1" style={{ background: 'var(--slate-100)', padding: '0.25rem', borderRadius: 'var(--radius-lg)' }}>
              <button
                className={`btn btn-sm ${difficulty === 'all' ? 'btn-secondary' : ''}`}
                style={{ background: difficulty === 'all' ? '#ffffff' : 'transparent', border: 'none', padding: '0.25rem 0.55rem', fontSize: '0.78rem' }}
                onClick={() => setDifficulty('all')}
              >
                All
              </button>
              <button
                className={`btn btn-sm ${difficulty === 'easy' ? 'btn-green' : ''}`}
                style={{ background: difficulty === 'easy' ? '#10b981' : 'transparent', color: difficulty === 'easy' ? '#ffffff' : 'inherit', border: 'none', padding: '0.25rem 0.55rem', fontSize: '0.78rem' }}
                onClick={() => setDifficulty('easy')}
              >
                🟢 Easy
              </button>
              <button
                className={`btn btn-sm ${difficulty === 'medium' ? 'btn-primary' : ''}`}
                style={{ background: difficulty === 'medium' ? '#2563eb' : 'transparent', color: difficulty === 'medium' ? '#ffffff' : 'inherit', border: 'none', padding: '0.25rem 0.55rem', fontSize: '0.78rem' }}
                onClick={() => setDifficulty('medium')}
              >
                🟡 Medium
              </button>
              <button
                className={`btn btn-sm ${difficulty === 'challenge' ? 'btn-primary' : ''}`}
                style={{ background: difficulty === 'challenge' ? '#e11d48' : 'transparent', color: difficulty === 'challenge' ? '#ffffff' : 'inherit', border: 'none', padding: '0.25rem 0.55rem', fontSize: '0.78rem' }}
                onClick={() => setDifficulty('challenge')}
              >
                🔴 Challenge
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- ACTIVE QUIZ VIEW ---------------- */}
        {quizState === 'active' && currentQ && (
          <div className="card" style={{ padding: '2.25rem' }}>
            {/* Header: Question counter, Topic, Difficulty & Points */}
            <div style={{ borderBottom: '1px solid var(--slate-200)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div className="flex justify-between items-center flex-wrap gap-2" style={{ marginBottom: '0.5rem' }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: '1.25rem' }}>{subjectNames[subject].icon}</span>
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                    {subjectNames[subject].title} — Question {currentIndex + 1} of {sessionQuestions.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="badge badge-blue">
                    Topic: {currentQ.topic}
                  </span>
                  <span className={`badge ${currentQ.difficulty === 'easy' ? 'badge-green' : currentQ.difficulty === 'medium' ? 'badge-amber' : 'badge-rose'}`}>
                    {currentQ.difficulty === 'easy' ? '🟢 Easy (10 pts)' : currentQ.difficulty === 'medium' ? '🟡 Medium (15 pts)' : '🔴 Challenge (20 pts)'}
                  </span>
                </div>
              </div>

              {/* Progress Bar & Real-time Live Counters */}
              <div className="flex justify-between items-center" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate-500)', marginBottom: '0.35rem' }}>
                <span>Progress: {Math.round(((currentIndex + 1) / sessionQuestions.length) * 100)}%</span>
                <div className="flex items-center gap-3">
                  <span style={{ color: 'var(--amber-600)' }}>⭐ {totalPoints} Points</span>
                  {currentStreak >= 2 && (
                    <span style={{ color: '#e11d48' }}>🔥 {currentStreak} in a row (+5 bonus!)</span>
                  )}
                </div>
              </div>
              <div className="progress-track" style={{ height: '0.5rem' }}>
                <div
                  className="progress-fill"
                  style={{
                    width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%`,
                    background: subjectNames[subject].color
                  }}
                ></div>
              </div>
            </div>

            {/* Question Text Prompt */}
            <div style={{ background: 'var(--slate-50)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: subjectNames[subject].color, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                Problem Statement:
              </div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', lineHeight: 1.45 }}>
                {currentQ.questionText}
              </div>
            </div>

            {/* Randomized Options (A, B, C, D) */}
            <div style={{ marginBottom: '1.5rem' }}>
              {currentQ.options.map((opt) => {
                let optClass = "quiz-option";
                if (selectedOption === opt.key) {
                  optClass += " selected";
                }
                if (isAnswered) {
                  if (opt.key === currentQ.correctKey) {
                    optClass += " correct";
                  } else if (selectedOption === opt.key && opt.key !== currentQ.correctKey) {
                    optClass += " incorrect";
                  }
                }

                return (
                  <div
                    key={opt.key}
                    className={optClass}
                    onClick={() => handleSelectOption(opt.key)}
                    style={{ cursor: isAnswered ? 'default' : 'pointer' }}
                  >
                    <div className="option-circle">
                      {opt.key}
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                      {opt.text}
                    </div>
                    {isAnswered && opt.key === currentQ.correctKey && (
                      <span style={{ marginLeft: 'auto', fontWeight: 800, color: 'var(--soft-green-700)', fontSize: '0.9rem' }}>
                        ✓ Correct
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Instant Feedback & Educational Explanation Card */}
            {isAnswered && (
              <div style={{
                background: selectedOption === currentQ.correctKey ? 'var(--soft-green-50)' : 'var(--rose-50)',
                border: `2px solid ${selectedOption === currentQ.correctKey ? 'var(--soft-green-500)' : 'var(--rose-500)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
                animation: 'modal-enter 0.2s ease-out'
              }}>
                <div className="flex justify-between items-center" style={{ marginBottom: '0.4rem' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: selectedOption === currentQ.correctKey ? 'var(--soft-green-800)' : 'var(--rose-800)' }}>
                    {selectedOption === currentQ.correctKey ? "✅ Correct! Well done!" : "❌ Not quite right. Here's why:"}
                  </div>
                  {selectedOption === currentQ.correctKey && (
                    <span className="badge badge-green">+{currentQ.basePoints + (currentStreak >= 2 ? 5 : 0)} Points</span>
                  )}
                </div>
                <p style={{ color: 'var(--slate-700)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex justify-between items-center flex-wrap gap-4 pt-3" style={{ borderTop: '1px solid var(--slate-100)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>
                {isAnswered ? "✓ Instant feedback verified locally" : "Select one option to reveal the explanation"}
              </div>

              {isAnswered && (
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleNextQuestion}
                >
                  {currentIndex < sessionQuestions.length - 1 ? "Next Question →" : "View Quiz Summary & Results 🏆"}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ---------------- RESULTS & REVIEW VIEW ---------------- */}
        {quizState === 'summary' && (
          <div className="card" style={{ padding: '2.5rem' }}>
            {/* Score Banner */}
            <div style={{ textAlign: 'center', marginBottom: '2.25rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--slate-200)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                {answersLog.filter(a => a.isCorrect).length >= (sessionQuestions.length * 0.8) ? '🏆' : answersLog.filter(a => a.isCorrect).length >= (sessionQuestions.length * 0.5) ? '🌟' : '💡'}
              </div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '0.35rem' }}>
                Quiz Completed!
              </h2>
              <p style={{ color: 'var(--slate-600)', fontSize: '1rem' }}>
                Subject: <strong>{subjectNames[subject].title}</strong> • Difficulty: <strong style={{ textTransform: 'capitalize' }}>{difficulty}</strong>
              </p>

              {/* Big Circular Score & Points */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem', background: 'var(--slate-50)', padding: '1.25rem 2rem', borderRadius: 'var(--radius-xl)', marginTop: '1.25rem', border: '1px solid var(--slate-200)' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--slate-500)', textTransform: 'uppercase' }}>FINAL SCORE</div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-blue-900)' }}>
                    {answersLog.filter(a => a.isCorrect).length} / {sessionQuestions.length}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--soft-green-600)' }}>
                    {Math.round((answersLog.filter(a => a.isCorrect).length / sessionQuestions.length) * 100)}% Accuracy
                  </div>
                </div>

                <div style={{ width: '1px', height: '60px', background: 'var(--slate-200)' }}></div>

                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--slate-500)', textTransform: 'uppercase' }}>POINTS EARNED</div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--amber-600)' }}>
                    +{totalPoints} ⭐
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--slate-500)' }}>
                    Personal Best: {Math.max(currentBest, Math.round((answersLog.filter(a => a.isCorrect).length / sessionQuestions.length) * 100))}%
                  </div>
                </div>
              </div>
            </div>

            {/* Comprehensive Question-by-Question Review */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.35rem' }}>Question-by-Question Review</h3>
                <span className="badge badge-slate">
                  {answersLog.filter(a => a.isCorrect).length} Correct • {answersLog.filter(a => !a.isCorrect).length} Incorrect
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {answersLog.map((item, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: '1.15rem 1.4rem',
                      borderLeft: `5px solid ${item.isCorrect ? '#10b981' : '#ef4444'}`,
                      background: item.isCorrect ? '#f8fafc' : '#fff1f2'
                    }}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <div className="flex items-center gap-2" style={{ marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: item.isCorrect ? '#047857' : '#b91c1c' }}>
                            {item.isCorrect ? '✅ CORRECT' : '❌ INCORRECT'}
                          </span>
                          <span className="badge badge-slate" style={{ fontSize: '0.7rem' }}>{item.topic}</span>
                        </div>
                        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--slate-900)' }}>
                          {idx + 1}. {item.questionText}
                        </div>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '0.85rem', color: item.isCorrect ? '#047857' : '#b91c1c', whiteSpace: 'nowrap' }}>
                        {item.isCorrect ? `+${item.pointsEarned} pts` : '0 pts'}
                      </span>
                    </div>

                    <div style={{ marginTop: '0.65rem', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <div>
                        <span style={{ color: 'var(--slate-500)', fontWeight: 600 }}>Your Answer: </span>
                        <strong style={{ color: item.isCorrect ? '#047857' : '#b91c1c' }}>
                          ({item.selectedKey}) {item.selectedText}
                        </strong>
                      </div>
                      {!item.isCorrect && (
                        <div>
                          <span style={{ color: 'var(--slate-500)', fontWeight: 600 }}>Correct Answer: </span>
                          <strong style={{ color: '#047857' }}>
                            ({item.correctKey}) {item.correctText}
                          </strong>
                        </div>
                      )}
                    </div>

                    {/* Explanation */}
                    <div style={{ marginTop: '0.65rem', background: '#ffffff', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--slate-700)', border: '1px solid var(--slate-200)' }}>
                      💡 <strong>Explanation:</strong> {item.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Try Again with new random questions, or return to progress */}
            <div className="flex justify-between items-center flex-wrap gap-4 pt-3" style={{ borderTop: '1px solid var(--slate-200)' }}>
              <button
                className="btn btn-green btn-lg"
                onClick={() => initializeQuiz(subject, difficulty, questionCount)}
              >
                🔄 Try Again with Different Questions
              </button>
              <div className="flex gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => { setSubject(subject === 'math' ? 'science' : subject === 'science' ? 'cs' : 'english'); }}
                >
                  Try Another Subject 📚
                </button>
                <button
                  className="btn btn-primary"
                  onClick={onQuizComplete}
                >
                  View Student Progress 📈
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 7. "ASK EDU" PAGE (Offline Predefined Knowledge Base Assistant)
// -------------------------------------------------------------
function AskEduPage({ t, onBack }) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "Hello! I am EDU 🤖, your offline learning assistant. You can ask me math concepts, science phenomena, coding basics, or how EDU-BOX works. What would you like to learn today?",
      time: "Just now"
    }
  ]);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "Why is 1/2 + 1/2 = 1?",
    "What is a fraction?",
    "How do plants make food?",
    "What is binary code?",
    "Why is the sky blue?",
    "How does EDU-BOX work without internet?"
  ];

  const handleAsk = (questionText) => {
    const textToSearch = questionText || query;
    if (!textToSearch.trim()) return;

    // Append user message
    const userMsg = {
      sender: 'user',
      text: textToSearch.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuery('');
    setIsSearching(true);

    // Offline Instant Search using local Knowledge Base with short typing simulation
    setTimeout(() => {
      const match = eduDB.searchKnowledgeBase(textToSearch);
      const assistantMsg = {
        sender: 'assistant',
        text: match ? match.answer : "I couldn't find an exact match in our offline library. Try asking about fractions, photosynthesis, binary numbers, or the solar system!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setIsSearching(false);
      setMessages((prev) => [...prev, assistantMsg]);
    }, 600);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSearching]);

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container" style={{ maxWidth: '820px' }}>
        {/* Header */}
        <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem' }}>
          <button className="btn btn-secondary btn-sm" onClick={onBack}>
            ← Back to Dashboard
          </button>
          <div className="flex items-center gap-2">
            <span className="badge badge-green">
              <span className="pulse-dot"></span>
              🟢 Local Knowledge Base
            </span>
            <span className="badge badge-blue">
              🔌 Works Offline
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.35rem' }}>
            {t.askEdu.title}
          </h1>
          <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
            {t.askEdu.subtitle}
          </p>
        </div>

        {/* Suggestion Chips */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            {t.askEdu.suggestionsTitle}
          </div>
          <div className="flex gap-2 flex-wrap">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                className="suggestion-pill"
                onClick={() => handleAsk(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`chat-bubble ${m.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}
              >
                {m.sender === 'assistant' && (
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary-blue-700)', marginBottom: '0.25rem' }}>
                    EDU ASSISTANT 🤖 (Offline Hub Library)
                  </div>
                )}
                <div>{m.text}</div>
                <div style={{ fontSize: '0.65rem', opacity: 0.7, textAlign: 'right', marginTop: '0.3rem' }}>
                  {m.time}
                </div>
              </div>
            ))}
            {isSearching && (
              <div className="chat-bubble chat-bubble-assistant" style={{ animation: 'modal-enter 0.2s ease' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary-blue-700)', marginBottom: '0.25rem' }}>
                  EDU ASSISTANT 🤖 (Local Offline Knowledge Base)
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
                  <span className="pulse-dot"></span>
                  <em>Searching local EDU-BOX database...</em>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleAsk(query); }}
            style={{ padding: '0.75rem 1rem', background: 'var(--slate-50)', borderTop: '1px solid var(--slate-200)', display: 'flex', gap: '0.5rem' }}
          >
            <input
              type="text"
              className="form-input"
              placeholder={t.askEdu.inputPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ background: 'var(--white)' }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
              {t.askEdu.askBtn}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 8. STUDENT PROGRESS PAGE
// -------------------------------------------------------------
function ProgressPage({ t, user, onBack, onTakeQuiz, onOpenTeacherView }) {
  const attempts = eduDB.getQuizAttempts();
  const mathProgress = user.subjectProgress?.math || 75;
  const scienceProgress = user.subjectProgress?.science || 60;
  const csProgress = user.subjectProgress?.cs || 85;
  const englishProgress = user.subjectProgress?.english || 70;

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
          <button className="btn btn-secondary btn-sm" onClick={onBack}>
            ← Back to Dashboard
          </button>
          <div className="flex gap-2">
            <button className="btn btn-green btn-sm" onClick={onOpenTeacherView}>
              👩‍🏫 View as Teacher
            </button>
            <button className="btn btn-primary btn-sm" onClick={onTakeQuiz}>
              ✍️ Take Another Quiz
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.1rem', marginBottom: '0.35rem' }}>
            {t.progress.title}
          </h1>
          <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
            Learner: <strong>{user.name}</strong> • Grade {user.grade} • Device ID: {user.id}
          </p>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-3 md-grid-cols-1 gap-6" style={{ marginBottom: '2rem' }}>
          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #eff6ff, #ffffff)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🔥</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-blue-900)' }}>
              {t.progress.streakDays}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>{t.progress.learningStreak}</p>
          </div>

          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #ecfdf5, #ffffff)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🎯</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--soft-green-700)' }}>
              {user.avgQuizScore || 84}%
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>Average Quiz Mastery</p>
          </div>

          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #fef3c7, #ffffff)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>⚠️</div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--amber-600)', marginTop: '0.4rem' }}>
              Fractions & Division
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>{t.progress.needsImprovement}</p>
          </div>
        </div>

        {/* Subject-Wise Progress Bars */}
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Subject Mastery & Completion</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div className="flex justify-between" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                <span>📐 Mathematics</span>
                <span style={{ color: 'var(--primary-blue-700)' }}>{mathProgress}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill progress-blue" style={{ width: `${mathProgress}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                <span>🌱 Science</span>
                <span style={{ color: 'var(--soft-green-700)' }}>{scienceProgress}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill progress-green" style={{ width: `${scienceProgress}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                <span>💻 Computer Science</span>
                <span style={{ color: '#0284c7' }}>{csProgress}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${csProgress}%`, background: '#0284c7' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                <span>📚 English</span>
                <span style={{ color: '#6366f1' }}>{englishProgress}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${englishProgress}%`, background: '#6366f1' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Attempts Table */}
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
            {t.progress.recentAttempts}
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table className="edu-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Quiz Topic</th>
                  <th>Score</th>
                  <th>Hub Sync Status</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((att) => (
                  <tr key={att.id}>
                    <td>{att.date}</td>
                    <td style={{ fontWeight: 600 }}>{att.quizTitle}</td>
                    <td>
                      <span className={`badge ${att.score >= 80 ? 'badge-green' : 'badge-amber'}`}>
                        {att.score}%
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-blue">
                        ✓ Stored in Local Hub
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 9. TEACHER LOGIN PAGE
// -------------------------------------------------------------
function TeacherLoginPage({ t, onLoginSuccess }) {
  const [teacherName, setTeacherName] = useState('Ananya Sharma');
  const [centerId, setCenterId] = useState('HUB-VILLAGE-04');
  const [pin, setPin] = useState('2026');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div style={{ padding: '3.5rem 0' }}>
      <div className="app-container" style={{ maxWidth: '460px' }}>
        <div className="card" style={{ padding: '2.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👩‍🏫</div>
            <h2 style={{ fontSize: '1.75rem' }}>Teacher & Coordinator Portal</h2>
            <p style={{ color: 'var(--slate-500)', fontSize: '0.88rem' }}>
              Access classroom diagnostics, weak area analysis & assignments
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.15rem' }}>
              <label className="form-label">Teacher / Coordinator Name</label>
              <input
                type="text"
                className="form-input"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: '1.15rem' }}>
              <label className="form-label">Learning Center Hub ID</label>
              <input
                type="text"
                className="form-input"
                value={centerId}
                onChange={(e) => setCenterId(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Offline Access PIN</label>
              <input
                type="password"
                className="form-input"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-green" style={{ width: '100%', padding: '0.85rem' }}>
              Access Teacher Console →
            </button>
          </form>

          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <button
              className="btn btn-secondary btn-sm"
              style={{ width: '100%' }}
              onClick={() => { setTeacherName('Ananya Sharma'); setCenterId('HUB-VILLAGE-04'); setPin('2026'); }}
            >
              ⚡ Quick Fill Sample Teacher (Ananya)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 10. TEACHER DASHBOARD (Classroom Overview, Student Table, Weak Area Analysis)
// -------------------------------------------------------------
function TeacherDashboardPage({ t, onSelectStudent, onOpenAssignModal, onOpenWeakAreas, onOpenLibrary }) {
  const [filter, setFilter] = useState('all'); // all, help, good
  const students = eduDB.getStudents();

  const filteredStudents = useMemo(() => {
    if (filter === 'help') return students.filter(s => s.status === 'Needs Help');
    if (filter === 'good') return students.filter(s => s.status === 'Good');
    return students;
  }, [students, filter]);

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4" style={{ marginBottom: '2rem' }}>
          <div>
            <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
              🟢 Local Hub Wi-Fi Connected: 42 Devices
            </div>
            <h1 style={{ fontSize: '2.2rem' }}>{t.teacher.title}</h1>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
              Coordinator: <strong>Ananya Sharma</strong> • Learning Hub: EDUBX-VILLAGE-04 • Grade 8 Class
            </p>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-primary" onClick={onOpenAssignModal}>
              + Assign Lesson
            </button>
            <button className="btn btn-secondary" onClick={onOpenWeakAreas}>
              Identify Weak Areas 🔍
            </button>
            <button className="btn btn-secondary" onClick={onOpenLibrary}>
              Browse Resources 📚
            </button>
          </div>
        </div>

        {/* 4 Overview Metric Cards */}
        <div className="grid grid-cols-4 lg-grid-cols-2 md-grid-cols-1 gap-6" style={{ marginBottom: '2.5rem' }}>
          <div className="card">
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)', marginBottom: '0.4rem' }}>{t.teacher.totalStudents}</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--slate-900)' }}>42</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>Enrolled in Hub</div>
          </div>

          <div className="card">
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)', marginBottom: '0.4rem' }}>{t.teacher.activeStudents}</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--soft-green-700)' }}>38</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--soft-green-600)', fontWeight: 600 }}>Connected to Wi-Fi now</div>
          </div>

          <div className="card">
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)', marginBottom: '0.4rem' }}>{t.teacher.avgProgress}</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-blue-700)' }}>68%</div>
            <div className="progress-track" style={{ marginTop: '0.35rem' }}>
              <div className="progress-fill progress-blue" style={{ width: '68%' }}></div>
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)', marginBottom: '0.4rem' }}>{t.teacher.needingHelp}</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--rose-600)' }}>6</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--rose-600)', fontWeight: 600 }}>Targeted intervention recommended</div>
          </div>
        </div>

        {/* Student Table Section */}
        <div className="card" style={{ padding: '2rem' }}>
          <div className="flex justify-between items-center flex-wrap gap-4" style={{ marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem' }}>Student Progress & Weak Area Roster</h3>
              <p style={{ color: 'var(--slate-500)', fontSize: '0.88rem' }}>Live synchronisation with all active tablets and phones</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
              <button
                className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter('all')}
              >
                {t.teacher.filterAll}
              </button>
              <button
                className={`btn btn-sm ${filter === 'help' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter('help')}
              >
                {t.teacher.filterHelp}
              </button>
              <button
                className={`btn btn-sm ${filter === 'good' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter('good')}
              >
                {t.teacher.filterGood}
              </button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="edu-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Class</th>
                  <th>Progress</th>
                  <th>Weak Topic</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <span style={{ fontSize: '1.5rem' }}>{s.avatar}</span>
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--slate-900)' }}>{s.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Roll: {s.id}</div>
                        </div>
                      </div>
                    </td>
                    <td>Grade {s.grade}</td>
                    <td style={{ width: '180px' }}>
                      <div className="flex justify-between" style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                        <span>{s.progress}%</span>
                      </div>
                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${s.progress}%`,
                            background: s.status === 'Needs Help' ? '#ef4444' : '#10b981'
                          }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      {s.weakTopic === 'None' ? (
                        <span className="badge badge-green">No Weakness</span>
                      ) : (
                        <span className="badge badge-rose">
                          {s.weakTopic}
                        </span>
                      )}
                    </td>
                    <td>
                      <span className={`badge ${s.status === 'Good' ? 'badge-green' : 'badge-amber'}`}>
                        {s.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn btn-secondary btn-sm" onClick={() => onSelectStudent(s)}>
                          View Student
                        </button>
                        <button className="btn btn-primary btn-sm" onClick={onOpenAssignModal}>
                          Assign
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 11. CONTENT LIBRARY PAGE
// -------------------------------------------------------------
function ContentLibraryPage({ t, showToast, onOpenLesson }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [resources, setResources] = useState(eduDB.getContentLibrary());

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.subject.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [resources, selectedCategory, searchQuery]);

  const handleDownload = (id) => {
    setResources(prev => prev.map(item => item.id === id ? { ...item, downloaded: true } : item));
    showToast("Downloaded resource to local hub cache ✓");
  };

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container">
        <div className="flex justify-between items-center flex-wrap gap-4" style={{ marginBottom: '2rem' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>OFFLINE REPOSITORY</span>
            <h1 style={{ fontSize: '2.2rem' }}>Community Content Library</h1>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
              Browse educational modules, visual guides, and interactive curriculum packs ready for offline distribution.
            </p>
          </div>

          <div style={{ width: '280px' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Search lessons & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap" style={{ marginBottom: '2rem' }}>
          {[
            { id: 'all', label: 'All Subjects' },
            { id: 'math', label: '📐 Mathematics' },
            { id: 'science', label: '🌱 Science' },
            { id: 'cs', label: '💻 Computer Science' },
            { id: 'languages', label: '📚 Languages' },
            { id: 'gk', label: '🌍 General Knowledge' }
          ].map((cat) => (
            <button
              key={cat.id}
              className={`btn btn-sm ${selectedCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-3 md-grid-cols-1 gap-6">
          {filteredResources.map((res) => (
            <div key={res.id} className="card flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start" style={{ marginBottom: '0.5rem' }}>
                  <span className="badge badge-blue">{res.subject}</span>
                  <span className={`badge ${res.downloaded ? 'badge-green' : 'badge-slate'}`}>
                    {res.downloaded ? '✓ Offline Available' : 'Cloud Sync Pending'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--slate-900)' }}>
                  {res.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--slate-500)', marginBottom: '0.75rem' }}>
                  Language: <strong>{res.language}</strong> • {res.grade}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '1.25rem' }}>
                  Format: {res.format} • Size: {res.size}
                </div>
              </div>

              <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid var(--slate-100)' }}>
                <span className="badge badge-slate">{res.difficulty}</span>
                {res.downloaded ? (
                  <button className="btn btn-primary btn-sm" onClick={onOpenLesson}>
                    Open Lesson →
                  </button>
                ) : (
                  <button className="btn btn-green btn-sm" onClick={() => handleDownload(res.id)}>
                    Download 💾
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 12. OFFLINE MODE STATUS & SYNC PAGE
// -------------------------------------------------------------
function OfflineModePage({ t, isOfflineSim, onToggleOffline, showToast }) {
  const [syncQueue, setSyncQueue] = useState(eduDB.getSyncQueue());
  const [lastSync, setLastSync] = useState(eduDB.getLastSyncTime());
  const [isSyncing, setIsSyncing] = useState(false);
  const hubStatus = eduDB.getHubStatus();

  const handleSyncNow = () => {
    setIsSyncing(true);
    setTimeout(() => {
      const timeStr = eduDB.clearSyncQueue();
      setSyncQueue([]);
      setLastSync(timeStr);
      setIsSyncing(false);
      showToast("✓ Successfully synchronized offline progress to regional cloud!");
    }, 1800);
  };

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
            <span className="pulse-dot"></span>
            ZERO-INTERNET MESH ACTIVE
          </span>
          <h1 style={{ fontSize: '2.4rem' }}>{t.offline.statusActive}</h1>
          <p style={{ color: 'var(--slate-600)', fontSize: '1rem', maxWidth: '580px', margin: '0.5rem auto 0' }}>
            EDU-BOX caches all core learning modules on the local hub. You can continue reading lessons, submitting answers, and tracking mastery with zero mobile data.
          </p>
        </div>

        {/* Offline Simulation Toggle Card */}
        <div className="card" style={{ background: isOfflineSim ? 'var(--amber-50)' : 'var(--soft-green-50)', borderColor: isOfflineSim ? 'var(--amber-300)' : 'var(--soft-green-300)', padding: '1.75rem', marginBottom: '2rem' }}>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: isOfflineSim ? 'var(--amber-800)' : 'var(--soft-green-800)', marginBottom: '0.25rem' }}>
                {isOfflineSim ? t.offline.simulated : "Online Network Connected"}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-700)' }}>
                {isOfflineSim ? t.offline.simulatedDesc : "You have access to both local hub services and automatic cloud backups."}
              </p>
            </div>
            <button
              className={`btn ${isOfflineSim ? 'btn-green' : 'btn-secondary'}`}
              onClick={onToggleOffline}
            >
              {isOfflineSim ? "Turn ON Online Sync" : "Simulate Offline Mode"}
            </button>
          </div>
        </div>

        {/* Hub Diagnostics */}
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>EDU-BOX Local Hardware Hub Status</h3>

          <div className="grid grid-cols-3 md-grid-cols-1 gap-6">
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 700 }}>LOCAL WI-FI SSID</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-blue-900)' }}>{hubStatus.ssid}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--soft-green-600)' }}>Channel 6 (2.4 GHz) & 36 (5 GHz)</div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 700 }}>CONNECTED STUDENTS</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--soft-green-700)' }}>{hubStatus.connectedDevices} Active Devices</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>Arun, Priya, Kumar + 15 others</div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 700 }}>BATTERY & POWER</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--amber-600)' }}>{hubStatus.batteryPercent}% (Solar DC)</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>Est. 9.5 hours remaining</div>
            </div>
          </div>
        </div>

        {/* Offline Features Checklist */}
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{t.offline.featuresHeading}</h3>

          <div className="grid grid-cols-2 md-grid-cols-1 gap-4" style={{ fontSize: '0.95rem', color: 'var(--slate-700)' }}>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--soft-green-600)', fontWeight: 800, fontSize: '1.1rem' }}>✓</span>
              Interactive visual lessons (Fractions, Science, Coding)
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--soft-green-600)', fontWeight: 800, fontSize: '1.1rem' }}>✓</span>
              Instant multiple-choice quizzes with local scoring
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--soft-green-600)', fontWeight: 800, fontSize: '1.1rem' }}>✓</span>
              Offline audio voice reader via Web Speech API
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--soft-green-600)', fontWeight: 800, fontSize: '1.1rem' }}>✓</span>
              "Ask EDU 🤖" offline question answering knowledge base
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--soft-green-600)', fontWeight: 800, fontSize: '1.1rem' }}>✓</span>
              Teacher dashboard & weak topic diagnosis
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--soft-green-600)', fontWeight: 800, fontSize: '1.1rem' }}>✓</span>
              Automatic IndexedDB synchronization queue
            </div>
          </div>
        </div>

        {/* Sync Indicator Card */}
        <div className="card" style={{ padding: '2rem', background: 'var(--slate-50)' }}>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase' }}>
                Synchronization Queue
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: '0.2rem' }}>
                {syncQueue.length === 0 ? "All offline progress is fully synchronized!" : `${syncQueue.length} quiz records waiting in local queue`}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginTop: '0.25rem' }}>
                {t.offline.lastSync}
              </div>
            </div>

            <button
              className="btn btn-primary"
              disabled={isSyncing}
              onClick={handleSyncNow}
            >
              {isSyncing ? t.offline.syncing : t.offline.syncNow}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 13. ADMIN DASHBOARD PAGE
// -------------------------------------------------------------
function AdminDashboardPage({ t, showToast }) {
  const centers = [
    { id: "HUB-VILLAGE-01", name: "Ramanathapuram Rural Center", students: 48, teachers: 3, devices: 22, status: "Active (Offline Mesh)" },
    { id: "HUB-VILLAGE-02", name: "Dharmapuri Tribal School", students: 34, teachers: 2, devices: 16, status: "Active (Offline Mesh)" },
    { id: "HUB-VILLAGE-03", name: "Nellore Coastal Community Hub", students: 52, teachers: 4, devices: 28, status: "Active (Offline Mesh)" },
    { id: "HUB-VILLAGE-04", name: "Bidar North Learning Lab", students: 42, teachers: 3, devices: 18, status: "Active (Offline Mesh)" }
  ];

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="app-container">
        <div style={{ marginBottom: '2rem' }}>
          <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>CENTRALIZED SYSTEM DIAGNOSTICS</span>
          <h1 style={{ fontSize: '2.2rem' }}>EDU-BOX Administration Hub</h1>
          <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
            Regional monitoring of distributed offline learning hubs, hardware telemetry & synchronization metrics.
          </p>
        </div>

        {/* 6 Key Admin Stats */}
        <div className="grid grid-cols-6 lg-grid-cols-3 md-grid-cols-2 gap-4" style={{ marginBottom: '2.5rem' }}>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 700 }}>LEARNING HUBS</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-blue-900)' }}>14</div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 700 }}>TOTAL STUDENTS</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--soft-green-700)' }}>640+</div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 700 }}>TEACHERS</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--amber-600)' }}>42</div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 700 }}>COURSES</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7' }}>18</div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 700 }}>OFFLINE DEVICES</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#6366f1' }}>280</div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 700 }}>SYNC HEALTH</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--soft-green-600)' }}>99.4%</div>
          </div>
        </div>

        {/* Learning Centers Table */}
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>Active Learning Center Hubs</h3>

          <div style={{ overflowX: 'auto' }}>
            <table className="edu-table">
              <thead>
                <tr>
                  <th>Hub ID</th>
                  <th>Center Name</th>
                  <th>Enrolled Students</th>
                  <th>Teachers</th>
                  <th>Connected Devices</th>
                  <th>Mesh Status</th>
                </tr>
              </thead>
              <tbody>
                {centers.map((c) => (
                  <tr key={c.id}>
                    <td><code>{c.id}</code></td>
                    <td style={{ fontWeight: 700 }}>{c.name}</td>
                    <td>{c.students} Students</td>
                    <td>{c.teachers} Mentors</td>
                    <td>{c.devices} Tablets</td>
                    <td>
                      <span className="badge badge-green">
                        <span className="pulse-dot"></span>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 14. ABOUT PAGE
// -------------------------------------------------------------
function AboutPage({ t, onStart }) {
  return (
    <div style={{ padding: '3.5rem 0' }}>
      <div className="app-container" style={{ maxWidth: '860px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-green" style={{ marginBottom: '0.5rem' }}>MISSION & VISION</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>About EDU-BOX</h1>
          <p style={{ color: 'var(--slate-600)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            EDU-BOX is designed to reduce educational inequality caused by limited connectivity, devices, teachers, and learning resources.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--primary-blue-900)' }}>
              🎯 Our Mission
            </h2>
            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              We believe that quality education is a fundamental human right, not a luxury reserved for those with high-speed fiber internet. EDU-BOX transforms any single piece of low-cost hardware—a refurbished laptop, a Raspberry Pi, or a community tablet—into a self-contained local digital university that serves 30+ students simultaneously without requiring mobile data or cellular towers.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--soft-green-800)' }}>
              🌍 How It Helps Communities
            </h2>
            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              Rural and tribal schools often face three massive barriers: irregular electricity, zero cellular signal inside classrooms, and multi-grade single-teacher loads. EDU-BOX solves this by operating on low-power 12V DC solar batteries, broadcasting its own zero-cost Wi-Fi radio waves, and providing interactive self-paced lessons that allow children to learn at their own speed while teachers monitor progress from a unified dashboard.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: '#0284c7' }}>
              ⚙️ Technology Architecture
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--slate-700)', fontSize: '0.95rem' }}>
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                <strong>Frontend:</strong> React 18 with high-contrast, accessible UI design tokens.
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                <strong>Offline Storage:</strong> PWA Service Worker + IndexedDB & LocalStorage relational stores.
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                <strong>Voice Narration:</strong> Native Web Speech API synthesis for offline spoken audio in regional accents.
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--soft-green-600)', fontWeight: 800 }}>✓</span>
                <strong>Lightweight Local Server:</strong> Zero-dependency microserver for Windows & Linux hubs.
              </li>
            </ul>
          </div>

          <div className="card" style={{ padding: '2rem', background: 'linear-gradient(135deg, #1e40af, #047857)', color: 'var(--white)' }}>
            <h2 style={{ color: 'var(--white)', fontSize: '1.45rem', marginBottom: '0.75rem' }}>
              🚀 Future Vision
            </h2>
            <p style={{ opacity: 0.9, lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '1.5rem' }}>
              Our roadmap includes peer-to-peer peer review across solar micro-hubs via LoRa radio meshes, expanded curriculum covering 15 official Indian languages, and lightweight on-device edge AI models capable of personalized student guidance.
            </p>
            <button className="btn btn-green btn-lg" onClick={onStart}>
              Start Learning Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// MODALS
// -------------------------------------------------------------
function StudentDetailModal({ student, onClose, onAssignLesson }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem' }}>
          <div className="flex items-center gap-3">
            <span style={{ fontSize: '2.5rem' }}>{student.avatar}</span>
            <div>
              <h3 style={{ fontSize: '1.4rem' }}>{student.name}</h3>
              <p style={{ color: 'var(--slate-500)', fontSize: '0.85rem' }}>Roll: {student.id} • Grade {student.grade}</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '1.75rem', cursor: 'pointer' }}>×</button>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)', marginBottom: '0.5rem' }}>SUBJECT PERFORMANCE</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <div className="flex justify-between" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                <span>Mathematics</span>
                <span>{student.subjectProgress?.math || student.progress}%</span>
              </div>
              <div className="progress-track" style={{ marginTop: '0.25rem' }}>
                <div className="progress-fill progress-blue" style={{ width: `${student.subjectProgress?.math || student.progress}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                <span>Science</span>
                <span>{student.subjectProgress?.science || 60}%</span>
              </div>
              <div className="progress-track" style={{ marginTop: '0.25rem' }}>
                <div className="progress-fill progress-green" style={{ width: `${student.subjectProgress?.science || 60}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--rose-50)', border: '1px solid var(--rose-200)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ fontWeight: 700, color: 'var(--rose-800)', fontSize: '0.9rem' }}>Weak Topic Identified:</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--rose-900)' }}>{student.weakTopic}</div>
          <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginTop: '0.25rem' }}>
            Recommended action: Assign "Understanding Fractions Part 1" with visual pizza simulator.
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
          <button className="btn btn-primary" onClick={onAssignLesson}>Assign Targeted Lesson</button>
        </div>
      </div>
    </div>
  );
}

function AssignLessonModal({ onClose, showToast }) {
  const [assignType, setAssignType] = useState('quiz'); // 'quiz' | 'lesson'
  const [selectedSubject, setSelectedSubject] = useState('science');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [questionCount, setQuestionCount] = useState(10);
  const [targetStudent, setTargetStudent] = useState('all-class');

  const subjectNames = {
    science: "Science",
    math: "Mathematics",
    cs: "Computer Science",
    english: "English"
  };

  const handleAssign = () => {
    eduDB.addAssignment({
      subject: selectedSubject,
      subjectName: subjectNames[selectedSubject],
      grade: "8",
      difficulty: selectedDifficulty,
      questionCount: parseInt(questionCount, 10),
      assignedTo: targetStudent === 'all-class' ? "Entire Grade 8 Class" : targetStudent === 'all-weak' ? "Students Needing Help (Arun, Priya, Kumar)" : targetStudent,
      assignedBy: "Ananya Sharma (Head Teacher)"
    });
    showToast(`✓ Assigned: ${subjectNames[selectedSubject]} → Grade 8 → ${selectedDifficulty.toUpperCase()} → ${questionCount} Questions!`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem' }}>Teacher Assignment Portal</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Configure a targeted learning or quiz task for student devices</p>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '1.75rem', cursor: 'pointer' }}>×</button>
        </div>

        {/* Assignment Type Selector */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label className="form-label">Assignment Type</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`btn btn-sm ${assignType === 'quiz' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setAssignType('quiz')}
              style={{ padding: '0.65rem' }}
            >
              🎯 Interactive Quiz
            </button>
            <button
              type="button"
              className={`btn btn-sm ${assignType === 'lesson' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setAssignType('lesson')}
              style={{ padding: '0.65rem' }}
            >
              📖 Interactive Lesson
            </button>
          </div>
        </div>

        {/* Subject Selection */}
        <div style={{ marginBottom: '1.15rem' }}>
          <label className="form-label">Subject</label>
          <select className="form-select" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            <option value="science">🌱 Science (Plants, Human Body, Animals, Matter, Energy, Environment)</option>
            <option value="math">📐 Mathematics (Fractions, Decimals, Percentages, Algebra, Geometry)</option>
            <option value="cs">💻 Computer Science (Binary, Algorithms, Hardware, Internet, Logic)</option>
            <option value="english">📚 English (Grammar, Tenses, Verbs, Vocabulary, Reading)</option>
          </select>
        </div>

        {/* Grade & Difficulty in 2 columns */}
        <div className="grid grid-cols-2 gap-3" style={{ marginBottom: '1.15rem' }}>
          <div>
            <label className="form-label">Grade / Class</label>
            <select className="form-select" value="8" disabled style={{ background: 'var(--slate-100)' }}>
              <option value="8">Grade 8 (Middle School)</option>
            </select>
          </div>

          <div>
            <label className="form-label">Difficulty Level</label>
            <select className="form-select" value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
              <option value="easy">🟢 Easy (Basic Knowledge)</option>
              <option value="medium">🟡 Medium (Application)</option>
              <option value="challenge">🔴 Challenge (Problem Solving)</option>
            </select>
          </div>
        </div>

        {/* Question Count & Assignee */}
        <div className="grid grid-cols-2 gap-3" style={{ marginBottom: '1.5rem' }}>
          <div>
            <label className="form-label">Question Count</label>
            <select className="form-select" value={questionCount} onChange={(e) => setQuestionCount(e.target.value)}>
              <option value="5">5 Questions (Quick Check)</option>
              <option value="10">10 Questions (Standard Quiz)</option>
              <option value="12">12 Questions (Comprehensive Mastery)</option>
            </select>
          </div>

          <div>
            <label className="form-label">Assign To</label>
            <select className="form-select" value={targetStudent} onChange={(e) => setTargetStudent(e.target.value)}>
              <option value="all-class">Entire Grade 8 Class (42 Students)</option>
              <option value="all-weak">Students Needing Help (Arun, Priya, Kumar)</option>
              <option value="arun">Arun Kumar (STU-801)</option>
              <option value="priya">Priya Sharma (STU-802)</option>
              <option value="kumar">Kumar Raman (STU-803)</option>
            </select>
          </div>
        </div>

        {/* Live Assignment Summary Pill */}
        <div style={{ background: 'var(--primary-blue-50)', border: '1px solid var(--primary-blue-200)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--primary-blue-900)' }}>
          📋 <strong>Target Assignment:</strong> {subjectNames[selectedSubject]} → Grade 8 → {selectedDifficulty.toUpperCase()} → {questionCount} Questions (Randomized per student on local hub).
        </div>

        <div className="flex justify-end gap-3">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleAssign}>Confirm & Broadcast to Hub 📡</button>
        </div>
      </div>
    </div>
  );
}

function WeakAreasModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.35rem' }}>Classroom Weak Topic Diagnostic</h3>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '1.75rem', cursor: 'pointer' }}>×</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ padding: '1rem', borderLeft: '4px solid #ef4444' }}>
            <div className="flex justify-between">
              <strong style={{ color: '#ef4444' }}>Fractions & Partitions (Math)</strong>
              <span className="badge badge-rose">12 Students Struggling</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginTop: '0.35rem' }}>
              Common error: Adding denominators directly (e.g. 1/2 + 1/2 = 2/4).
            </p>
          </div>

          <div className="card" style={{ padding: '1rem', borderLeft: '4px solid #f59e0b' }}>
            <div className="flex justify-between">
              <strong style={{ color: '#d97706' }}>Multiplication Tables 6 to 9 (Math)</strong>
              <span className="badge badge-amber">8 Students Struggling</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginTop: '0.35rem' }}>
              Recommendation: Run daily 5-minute offline speed math drills.
            </p>
          </div>

          <div className="card" style={{ padding: '1rem', borderLeft: '4px solid #3b82f6' }}>
            <div className="flex justify-between">
              <strong style={{ color: '#2563eb' }}>Past Tense Irregular Verbs (English)</strong>
              <span className="badge badge-blue">5 Students Struggling</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginTop: '0.35rem' }}>
              Recommendation: Assign story audio comprehension module.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-secondary" onClick={onClose}>Close Diagnostic</button>
        </div>
      </div>
    </div>
  );
}

// Mount React Root
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
