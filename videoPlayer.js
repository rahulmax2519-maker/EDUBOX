// EDU-BOX Offline Educational Video Engine
// 100% Zero-Internet Capable: supports local MP4 files + Built-in Educational Motion Canvas/SVG Playback with native browser Web Speech API offline narration

(function() {
  // Video Content Catalog (5 Educational Videos specified for Grade 8)
  window.EDU_VIDEO_CATALOG = [
    {
      id: "vid-fractions-01",
      title: "Understanding Fractions",
      subject: "Mathematics",
      subjectKey: "math",
      duration: 75, // 75 seconds
      durationFormatted: "01:15",
      badge: "Grade 8 Math",
      thumbnailIcon: "🍕",
      accentColor: "#2563eb",
      description: "Visual exploration of numerators, denominators, and equivalent fractions (1/2 = 2/4 = 4/8).",
      scenes: [
        {
          time: 0,
          title: "Introduction to Fractions",
          narration: "Welcome to EDU-BOX Mathematics. Today we explore fractions! Imagine a delicious round pizza divided into four equal slices.",
          visualType: "pizza_intro",
          caption: "A fraction represents equal parts of a single whole."
        },
        {
          time: 15,
          title: "Numerator and Denominator",
          narration: "In any fraction, the top number is the numerator, which tells us how many parts we have. The bottom number is the denominator, which is the total equal pieces.",
          visualType: "num_den",
          caption: "Numerator (parts taken) / Denominator (total parts)"
        },
        {
          time: 32,
          title: "One-Half and Equivalent Fractions",
          narration: "If we take two slices out of four, that is two-fourths. Notice that two-fourths is exactly equal to one-half, and equal to four-eighths, or fifty percent!",
          visualType: "equivalents",
          caption: "1/2 = 2/4 = 4/8 = 50%"
        },
        {
          time: 48,
          title: "Interactive Checkpoint Challenge",
          narration: "Quick check: What is one-half plus one-half? Select your answer on screen!",
          visualType: "checkpoint",
          checkpoint: {
            question: "What is 1/2 + 1/2?",
            options: ["1/4", "1", "2", "1/2"],
            correctAnswer: 1, // index 1 is "1"
            explanation: "Two halves make one complete whole! 1/2 + 1/2 = 2/2 = 1."
          }
        },
        {
          time: 63,
          title: "Lesson Summary & EDU-BOX",
          narration: "Great job! Fractions help us measure and share accurately in real life. Keep practicing offline on your EDU-BOX learning hub.",
          visualType: "ending",
          caption: "EDU-BOX • Learn Anywhere. Learn Offline. • 🟢 Available Offline"
        }
      ]
    },
    {
      id: "vid-photosynthesis-02",
      title: "How Plants Make Food — Photosynthesis",
      subject: "Science",
      subjectKey: "science",
      duration: 80,
      durationFormatted: "01:20",
      badge: "Grade 8 Science",
      thumbnailIcon: "🌱",
      accentColor: "#059669",
      description: "How plants transform sunlight, water, and carbon dioxide into glucose and release life-giving oxygen.",
      scenes: [
        {
          time: 0,
          title: "The Wonder of Plant Food",
          narration: "Welcome to EDU-BOX Science! Unlike animals, green plants make their own food through a miraculous process called photosynthesis.",
          visualType: "sun_leaf",
          caption: "Photosynthesis: Photo = Light, Synthesis = Putting together"
        },
        {
          time: 16,
          title: "Four Essential Ingredients",
          narration: "Plants capture bright sunlight using green chlorophyll inside their leaves. Their roots draw water from the soil, and tiny leaf pores take in carbon dioxide from the air.",
          visualType: "ingredients",
          caption: "☀️ Sunlight + 💧 Water + 🌬️ Carbon Dioxide + 🍃 Chlorophyll"
        },
        {
          time: 35,
          title: "The Chemical Miracle",
          narration: "Inside chloroplasts, light energy transforms water and carbon dioxide into sweet glucose for plant energy, and releases fresh oxygen for us to breathe!",
          visualType: "reaction",
          caption: "6 CO₂ + 6 H₂O + Light ➔ C₆H₁₂O₆ (Glucose) + 6 O₂ (Oxygen)"
        },
        {
          time: 52,
          title: "Interactive Checkpoint Challenge",
          narration: "Test your understanding: Which gas do plants take in from the air during photosynthesis?",
          visualType: "checkpoint",
          checkpoint: {
            question: "Which gas do plants take in during photosynthesis?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: 1, // index 1 is "Carbon dioxide"
            explanation: "Plants absorb carbon dioxide (CO₂) from the air and release oxygen (O₂)."
          }
        },
        {
          time: 68,
          title: "Lesson Summary & EDU-BOX",
          narration: "Photosynthesis fuels virtually all life on planet Earth! EDU-BOX: Quality education anywhere, offline.",
          visualType: "ending",
          caption: "EDU-BOX • Learn Anywhere. Learn Offline. • 🟢 Available Offline"
        }
      ]
    },
    {
      id: "vid-binary-03",
      title: "Understanding Binary Code",
      subject: "Computer Science",
      subjectKey: "cs",
      duration: 75,
      durationFormatted: "01:15",
      badge: "Grade 8 CS",
      thumbnailIcon: "💻",
      accentColor: "#0284c7",
      description: "How computers use 0 and 1, switch states (OFF/ON), and represent numbers like 101₂ = 5₁₀.",
      scenes: [
        {
          time: 0,
          title: "The Secret Language of Computers",
          narration: "Welcome to EDU-BOX Computer Science! Behind every game, phone, and app is binary code: the language of just two numbers, zero and one.",
          visualType: "binary_stream",
          caption: "Binary = Base-2 Number System (0 and 1)"
        },
        {
          time: 16,
          title: "Electronic Switches: ON and OFF",
          narration: "Inside a computer processor, billions of microscopic transistors act like tiny light switches. Zero represents OFF, and one represents ON.",
          visualType: "switches",
          caption: "0 ➔ Switch OFF (0V) | 1 ➔ Switch ON (+5V)"
        },
        {
          time: 34,
          title: "Counting in Binary: 101 is 5!",
          narration: "Each position doubles in value: 1, 2, 4, 8. So the binary number 1 0 1 means one 4 plus zero 2s plus one 1, which equals 5 in decimal!",
          visualType: "powers_of_two",
          caption: "1 = 1 | 10 = 2 | 11 = 3 | 100 = 4 | 101 = 5"
        },
        {
          time: 50,
          title: "Interactive Checkpoint Challenge",
          narration: "Quick question: Which two digits are used in the binary number system?",
          visualType: "checkpoint",
          checkpoint: {
            question: "Which two digits are used in binary code?",
            options: ["1 and 2", "0 and 1", "0 and 9", "A and B"],
            correctAnswer: 1, // index 1 is "0 and 1"
            explanation: "Binary uses only two digits: 0 (OFF) and 1 (ON)."
          }
        },
        {
          time: 65,
          title: "Lesson Summary & EDU-BOX",
          narration: "Every photo, video, and text you see is stored in binary. EDU-BOX: Quality education anywhere, offline.",
          visualType: "ending",
          caption: "EDU-BOX • Learn Anywhere. Learn Offline. • 🟢 Available Offline"
        }
      ]
    },
    {
      id: "vid-verbs-04",
      title: "Verbs & Tenses (Past, Present, Future)",
      subject: "English",
      subjectKey: "english",
      duration: 75,
      durationFormatted: "01:15",
      badge: "Grade 8 English",
      thumbnailIcon: "📚",
      accentColor: "#6366f1",
      description: "Master action verbs and navigate time with Past, Present, and Future tenses.",
      scenes: [
        {
          time: 0,
          title: "Action Words: What are Verbs?",
          narration: "Welcome to EDU-BOX English! Verbs are action words that show what someone or something is doing. Words like run, eat, read, write, and play.",
          visualType: "verbs_action",
          caption: "Verbs = Action Words: Run, Eat, Read, Write, Play"
        },
        {
          time: 15,
          title: "Travelling in Time with Tenses",
          narration: "Tenses tell us when an action occurs. Past happened before. Present is happening now or regularly. Future will happen later.",
          visualType: "timeline",
          caption: "Past (Happened) ➔ Present (Happens Now) ➔ Future (Will Happen)"
        },
        {
          time: 32,
          title: "Sentence Comparison in Action",
          narration: "Notice how the sentence changes: In past tense: I played football. In present tense: I play football. In future tense: I will play football.",
          visualType: "tense_transform",
          caption: "Past: I played football | Present: I play football | Future: I will play football"
        },
        {
          time: 48,
          title: "Interactive Checkpoint Challenge",
          narration: "Let's check your skill: Which of these sentences is written in the future tense?",
          visualType: "checkpoint",
          checkpoint: {
            question: "Which sentence is in the future tense?",
            options: ["I played football.", "I play football.", "I will play football.", "I was playing football."],
            correctAnswer: 2, // index 2 is "I will play football."
            explanation: "The modal verb 'will' indicates an action that will take place in the future."
          }
        },
        {
          time: 64,
          title: "Lesson Summary & EDU-BOX",
          narration: "Mastering tenses helps you express thoughts clearly in writing and speech. EDU-BOX: Learn anywhere, offline.",
          visualType: "ending",
          caption: "EDU-BOX • Learn Anywhere. Learn Offline. • 🟢 Available Offline"
        }
      ]
    },
    {
      id: "vid-sky-05",
      title: "Why Is the Sky Blue?",
      subject: "Science & Discovery",
      subjectKey: "science",
      duration: 80,
      durationFormatted: "01:20",
      badge: "Grade 8 Discovery",
      thumbnailIcon: "🌤️",
      accentColor: "#0284c7",
      description: "Atmospheric Rayleigh scattering: how gas molecules scatter short blue sunlight wavelengths across our sky.",
      scenes: [
        {
          time: 0,
          title: "A Universal Question",
          narration: "Welcome to EDU-BOX Science! Have you ever looked up on a sunny day and wondered: why is the sky bright blue instead of green, violet, or yellow?",
          visualType: "blue_sky_intro",
          caption: "Why is our atmosphere illuminated in vibrant blue?"
        },
        {
          time: 16,
          title: "Sunlight is a Rainbow of Colors",
          narration: "Although sunlight looks pure white, it is actually made of all colors of the rainbow combined together, from long red waves to short blue and violet waves.",
          visualType: "prism_spectrum",
          caption: "White Light = Red + Orange + Yellow + Green + Blue + Violet"
        },
        {
          time: 35,
          title: "Rayleigh Light Scattering",
          narration: "When sunlight enters Earth's atmosphere, it collides with nitrogen and oxygen molecules. Shorter blue wavelengths scatter in all directions much more strongly than red light!",
          visualType: "scattering",
          caption: "Molecules scatter short blue wavelengths 10x more than longer red waves."
        },
        {
          time: 52,
          title: "Interactive Checkpoint Challenge",
          narration: "Test your scientific knowledge: Why does the sky appear blue from the ground?",
          visualType: "checkpoint",
          checkpoint: {
            question: "Why does the sky appear blue?",
            options: [
              "Oceans reflect blue light into the sky",
              "Blue light is scattered strongly by atmospheric molecules",
              "Clouds absorb red light",
              "The ozone layer glows blue"
            ],
            correctAnswer: 1, // index 1
            explanation: "Short blue light wavelengths are scattered in all directions by gases in Earth's atmosphere (Rayleigh Scattering)."
          }
        },
        {
          time: 68,
          title: "Lesson Summary & EDU-BOX",
          narration: "Every time you see a blue sky, you are watching physics in action! EDU-BOX: Quality education anywhere, offline.",
          visualType: "ending",
          caption: "EDU-BOX • Learn Anywhere. Learn Offline. • 🟢 Available Offline"
        }
      ]
    }
  ];

  // Helper to format seconds as MM:SS
  window.formatTime = function(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Reusable Educational Offline Video Player React Component
  window.EducationalVideoPlayer = function({ videoId = "vid-fractions-01", onComplete, autoPlay = false }) {
    const { useState, useEffect, useMemo, useRef } = React;
    const [currentVideoId, setCurrentVideoId] = useState(videoId);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [speechEnabled, setSpeechEnabled] = useState(true);
    const [selectedCheckpointAnswer, setSelectedCheckpointAnswer] = useState(null);
    const [checkpointFeedback, setCheckpointFeedback] = useState(null);

    const playerContainerRef = useRef(null);
    const timerRef = useRef(null);

    // Find current video metadata
    const activeVideo = useMemo(() => {
      return window.EDU_VIDEO_CATALOG.find(v => v.id === currentVideoId) || window.EDU_VIDEO_CATALOG[0];
    }, [currentVideoId]);

    // Active scene determination
    const activeSceneIndex = useMemo(() => {
      let activeIdx = 0;
      for (let i = 0; i < activeVideo.scenes.length; i++) {
        if (currentTime >= activeVideo.scenes[i].time) {
          activeIdx = i;
        }
      }
      return activeIdx;
    }, [currentTime, activeVideo]);

    const activeScene = activeVideo.scenes[activeSceneIndex] || activeVideo.scenes[0];

    // Narration via offline Web Speech API
    const speakSceneNarration = (text) => {
      if (!speechEnabled || isMuted || volume === 0) return;
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.volume = volume;
        window.speechSynthesis.speak(utterance);
      }
    };

    // Trigger narration on scene transition when playing
    useEffect(() => {
      if (isPlaying && activeScene && activeScene.narration) {
        speakSceneNarration(activeScene.narration);
      }
    }, [activeSceneIndex, isPlaying, speechEnabled]);

    // Playback loop timer
    useEffect(() => {
      if (isPlaying) {
        timerRef.current = setInterval(() => {
          setCurrentTime(prev => {
            // Check if current moment has an unanswered checkpoint
            const nextSec = prev + 1;
            const sceneAtNext = activeVideo.scenes.find(s => s.visualType === 'checkpoint' && Math.floor(prev) === s.time);
            if (sceneAtNext && selectedCheckpointAnswer === null) {
              // Pause at checkpoint
              setIsPlaying(false);
              return prev;
            }

            if (nextSec >= activeVideo.duration) {
              setIsPlaying(false);
              if (onComplete) onComplete(activeVideo.id);
              return activeVideo.duration;
            }
            return nextSec;
          });
        }, 1000);
      } else {
        clearInterval(timerRef.current);
      }
      return () => clearInterval(timerRef.current);
    }, [isPlaying, activeVideo, selectedCheckpointAnswer]);

    // Play / Pause toggle
    const handleTogglePlay = () => {
      if (currentTime >= activeVideo.duration) {
        // Restart if at end
        setCurrentTime(0);
        setSelectedCheckpointAnswer(null);
        setCheckpointFeedback(null);
      }
      const nextPlay = !isPlaying;
      setIsPlaying(nextPlay);
      if (!nextPlay && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };

    // Restart
    const handleRestart = () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setCurrentTime(0);
      setSelectedCheckpointAnswer(null);
      setCheckpointFeedback(null);
      setIsPlaying(true);
    };

    // Fullscreen toggle
    const handleToggleFullscreen = () => {
      if (!document.fullscreenElement) {
        playerContainerRef.current?.requestFullscreen?.();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen?.();
        setIsFullscreen(false);
      }
    };

    // Scrubber click
    const handleScrub = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const newSec = Math.floor(pct * activeVideo.duration);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setCurrentTime(newSec);
    };

    // Checkpoint option selection
    const handleSelectCheckpoint = (idx) => {
      setSelectedCheckpointAnswer(idx);
      const isCorrect = idx === activeScene.checkpoint.correctAnswer;
      setCheckpointFeedback(isCorrect ? "correct" : "incorrect");

      // Voice feedback
      if ('speechSynthesis' in window && speechEnabled) {
        const feedbackSpeech = new SpeechSynthesisUtterance(isCorrect ? "Correct! Well done!" : "Not quite. " + activeScene.checkpoint.explanation);
        window.speechSynthesis.speak(feedbackSpeech);
      }

      if (isCorrect) {
        setTimeout(() => {
          setIsPlaying(true);
        }, 2200);
      }
    };

    return (
      <div className="edu-video-player-wrapper" ref={playerContainerRef}>
        {/* Top Video Header Bar */}
        <div className="edu-video-topbar">
          <div className="flex items-center gap-2">
            <span className="edu-video-icon">{activeVideo.thumbnailIcon}</span>
            <div>
              <div className="edu-video-title">{activeVideo.title}</div>
              <div className="edu-video-sub">
                <span className="badge badge-green" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>
                  🟢 Available Offline
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>• Local Hub MP4 & Canvas Engine</span>
              </div>
            </div>
          </div>

          {/* Video Selector Dropdown */}
          <div className="flex items-center gap-2">
            <label style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Select Video:</label>
            <select
              value={currentVideoId}
              onChange={(e) => {
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                setCurrentVideoId(e.target.value);
                setCurrentTime(0);
                setSelectedCheckpointAnswer(null);
                setCheckpointFeedback(null);
                setIsPlaying(false);
              }}
              className="form-select"
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem', background: '#1e293b', color: '#f8fafc', borderColor: '#334155' }}
            >
              {window.EDU_VIDEO_CATALOG.map(v => (
                <option key={v.id} value={v.id}>
                  {v.thumbnailIcon} {v.title} ({v.durationFormatted})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Video Canvas / Vector Stage Display Screen */}
        <div className="edu-video-screen">
          {/* Visual Scene Renderer according to active video and scene */}
          <div className="edu-video-stage-content">
            {/* Visual 1: Pizza Fractions */}
            {activeVideo.id === "vid-fractions-01" && (
              <div className="edu-stage-fractions">
                {activeScene.visualType === "pizza_intro" && (
                  <div className="stage-anim-box">
                    <svg width="220" height="220" viewBox="0 0 200 200" className="pizza-rotator">
                      <circle cx="100" cy="100" r="90" fill="#fde68a" stroke="#d97706" strokeWidth="8" />
                      <line x1="100" y1="10" x2="100" y2="190" stroke="#d97706" strokeWidth="4" />
                      <line x1="10" y1="100" x2="190" y2="100" stroke="#d97706" strokeWidth="4" />
                      <circle cx="55" cy="55" r="10" fill="#ef4444" />
                      <circle cx="145" cy="55" r="10" fill="#ef4444" />
                      <circle cx="55" cy="145" r="10" fill="#ef4444" />
                      <circle cx="145" cy="145" r="10" fill="#ef4444" />
                    </svg>
                    <div className="stage-scene-tag">4 Equal Slices = 1 Whole Pizza</div>
                  </div>
                )}

                {activeScene.visualType === "num_den" && (
                  <div className="stage-anim-box">
                    <div className="fraction-display-giant">
                      <div className="num-box">Numerator: 1 (Part selected)</div>
                      <div className="fraction-bar-line"></div>
                      <div className="den-box">Denominator: 2 (Total equal parts)</div>
                    </div>
                  </div>
                )}

                {activeScene.visualType === "equivalents" && (
                  <div className="stage-anim-box">
                    <div className="flex items-center gap-4 flex-wrap justify-center">
                      <div className="equiv-card">
                        <div className="equiv-frac">1 / 2</div>
                        <div className="equiv-pct">50%</div>
                      </div>
                      <div style={{ fontSize: '1.5rem', color: '#38bdf8' }}>=</div>
                      <div className="equiv-card">
                        <div className="equiv-frac">2 / 4</div>
                        <div className="equiv-pct">50%</div>
                      </div>
                      <div style={{ fontSize: '1.5rem', color: '#38bdf8' }}>=</div>
                      <div className="equiv-card">
                        <div className="equiv-frac">4 / 8</div>
                        <div className="equiv-pct">50%</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Visual 2: Photosynthesis */}
            {activeVideo.id === "vid-photosynthesis-02" && (
              <div className="edu-stage-science">
                {activeScene.visualType === "sun_leaf" && (
                  <div className="stage-anim-box">
                    <div style={{ fontSize: '4.5rem', animation: 'sun-pulse 2s infinite' }}>☀️</div>
                    <div style={{ fontSize: '4rem', marginTop: '0.5rem' }}>🍃</div>
                    <div className="stage-scene-tag">Sunlight Energy + Green Plant Chloroplasts</div>
                  </div>
                )}

                {activeScene.visualType === "ingredients" && (
                  <div className="stage-anim-box">
                    <div className="grid grid-cols-4 gap-3 text-center">
                      <div className="ingredient-badge">☀️ Sunlight</div>
                      <div className="ingredient-badge">💧 Water (H₂O)</div>
                      <div className="ingredient-badge">🌬️ CO₂</div>
                      <div className="ingredient-badge">🍃 Chlorophyll</div>
                    </div>
                  </div>
                )}

                {activeScene.visualType === "reaction" && (
                  <div className="stage-anim-box">
                    <div className="chemical-eq-box">
                      <span style={{ color: '#fbbf24' }}>Sunlight</span> + <span style={{ color: '#60a5fa' }}>Water</span> + <span style={{ color: '#94a3b8' }}>CO₂</span>
                      <div style={{ fontSize: '1.5rem', margin: '0.4rem 0', color: '#34d399' }}>➔ Produces ➔</div>
                      <span style={{ color: '#4ade80', fontWeight: 800 }}>Glucose (Plant Food)</span> + <span style={{ color: '#38bdf8', fontWeight: 800 }}>Oxygen (O₂)</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Visual 3: Binary Code */}
            {activeVideo.id === "vid-binary-03" && (
              <div className="edu-stage-cs">
                {activeScene.visualType === "binary_stream" && (
                  <div className="stage-anim-box">
                    <div className="binary-stream-text">
                      01000101 01000100 01010101 00101101 01000010 01001111 01011000
                    </div>
                    <div className="stage-scene-tag">Everything in Computers is 0 and 1</div>
                  </div>
                )}

                {activeScene.visualType === "switches" && (
                  <div className="stage-anim-box">
                    <div className="flex gap-6 justify-center items-center">
                      <div className="switch-card off">
                        <div style={{ fontSize: '2.5rem' }}>🌑</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>0</div>
                        <div>OFF (No Current)</div>
                      </div>
                      <div className="switch-card on">
                        <div style={{ fontSize: '2.5rem' }}>💡</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>1</div>
                        <div>ON (Flowing Current)</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeScene.visualType === "powers_of_two" && (
                  <div className="stage-anim-box">
                    <div className="binary-math-board">
                      <div className="flex gap-4 justify-center">
                        <div className="bit-col"><span className="bit-val">1</span><span className="bit-weight">4s</span></div>
                        <div className="bit-col"><span className="bit-val">0</span><span className="bit-weight">2s</span></div>
                        <div className="bit-col"><span className="bit-val">1</span><span className="bit-weight">1s</span></div>
                      </div>
                      <div style={{ marginTop: '0.8rem', fontSize: '1.25rem', color: '#38bdf8', fontWeight: 800 }}>
                        (1 × 4) + (0 × 2) + (1 × 1) = 5₁₀
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Visual 4: Verbs & Tenses */}
            {activeVideo.id === "vid-verbs-04" && (
              <div className="edu-stage-english">
                {activeScene.visualType === "verbs_action" && (
                  <div className="stage-anim-box">
                    <div className="flex gap-3 justify-center flex-wrap">
                      <span className="verb-action-chip">🏃 Run</span>
                      <span className="verb-action-chip">🍎 Eat</span>
                      <span className="verb-action-chip">📖 Read</span>
                      <span className="verb-action-chip">✍️ Write</span>
                      <span className="verb-action-chip">⚽ Play</span>
                    </div>
                    <div className="stage-scene-tag">Verbs express actions and states of being</div>
                  </div>
                )}

                {activeScene.visualType === "timeline" && (
                  <div className="stage-anim-box">
                    <div className="flex justify-between items-center timeline-bar">
                      <div className="timeline-node">
                        <div className="t-label">PAST</div>
                        <div className="t-desc">Happened Before</div>
                      </div>
                      <div className="timeline-arrow">➔</div>
                      <div className="timeline-node active">
                        <div className="t-label">PRESENT</div>
                        <div className="t-desc">Happens Now</div>
                      </div>
                      <div className="timeline-arrow">➔</div>
                      <div className="timeline-node">
                        <div className="t-label">FUTURE</div>
                        <div className="t-desc">Will Happen Later</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeScene.visualType === "tense_transform" && (
                  <div className="stage-anim-box">
                    <div className="tense-sentence-cards">
                      <div className="t-sentence-card">
                        <span className="t-pill past">PAST</span>
                        <span>I <strong>played</strong> football.</span>
                      </div>
                      <div className="t-sentence-card">
                        <span className="t-pill present">PRESENT</span>
                        <span>I <strong>play</strong> football.</span>
                      </div>
                      <div className="t-sentence-card">
                        <span className="t-pill future">FUTURE</span>
                        <span>I <strong>will play</strong> football.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Visual 5: Why Is the Sky Blue? */}
            {activeVideo.id === "vid-sky-05" && (
              <div className="edu-stage-discovery">
                {activeScene.visualType === "blue_sky_intro" && (
                  <div className="stage-anim-box">
                    <div style={{ fontSize: '4.5rem' }}>🌤️</div>
                    <div className="stage-scene-tag">Why does our daytime sky glow radiant blue?</div>
                  </div>
                )}

                {activeScene.visualType === "prism_spectrum" && (
                  <div className="stage-anim-box">
                    <div className="spectrum-strip">
                      <span style={{ background: '#ef4444' }}>Red (Long)</span>
                      <span style={{ background: '#f97316' }}>Orange</span>
                      <span style={{ background: '#eab308' }}>Yellow</span>
                      <span style={{ background: '#22c55e' }}>Green</span>
                      <span style={{ background: '#3b82f6', fontWeight: 800 }}>Blue (Short)</span>
                      <span style={{ background: '#8b5cf6' }}>Violet</span>
                    </div>
                    <div className="stage-scene-tag">Sunlight combines all rainbow wavelengths</div>
                  </div>
                )}

                {activeScene.visualType === "scattering" && (
                  <div className="stage-anim-box">
                    <div className="scattering-diagram">
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8', marginBottom: '0.4rem' }}>
                        Rayleigh Scattering in Atmosphere
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                        Nitrogen (N₂) & Oxygen (O₂) scatter short blue light in every direction!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Interactive Checkpoint Overlay for all videos */}
            {activeScene.visualType === "checkpoint" && activeScene.checkpoint && (
              <div className="edu-checkpoint-overlay">
                <div className="checkpoint-card">
                  <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
                    <span className="badge badge-amber">⚡ Video Checkpoint Challenge</span>
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '1rem' }}>
                    {activeScene.checkpoint.question}
                  </h4>
                  <div className="grid grid-cols-2 gap-2" style={{ marginBottom: '1rem' }}>
                    {activeScene.checkpoint.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        className={`checkpoint-opt-btn ${selectedCheckpointAnswer === oIdx ? (oIdx === activeScene.checkpoint.correctAnswer ? 'correct' : 'incorrect') : ''}`}
                        onClick={() => handleSelectCheckpoint(oIdx)}
                      >
                        {String.fromCharCode(65 + oIdx)}. {opt}
                      </button>
                    ))}
                  </div>

                  {checkpointFeedback && (
                    <div className={`checkpoint-feedback-msg ${checkpointFeedback}`}>
                      {checkpointFeedback === "correct" ? "✅ Correct! Resuming video..." : `❌ Not quite: ${activeScene.checkpoint.explanation}`}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Ending Scene for all videos */}
            {activeScene.visualType === "ending" && (
              <div className="stage-anim-box edu-ending-card">
                <div style={{ fontSize: '3rem', marginBottom: '0.4rem' }}>📦</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.04em' }}>
                  EDU-BOX
                </div>
                <div style={{ color: '#34d399', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.2rem' }}>
                  Learn Anywhere. Learn Offline.
                </div>
                <div style={{ marginTop: '0.75rem' }}>
                  <span className="badge badge-green">🟢 Available Offline</span>
                </div>
              </div>
            )}
          </div>

          {/* Subtitles / Caption Overlay */}
          {activeScene.caption && (
            <div className="edu-video-caption">
              {activeScene.caption}
            </div>
          )}
        </div>

        {/* Video Scrubber & Timeline Bar */}
        <div className="edu-video-timeline-area" onClick={handleScrub}>
          <div
            className="edu-video-timeline-fill"
            style={{ width: `${(currentTime / activeVideo.duration) * 100}%`, background: activeVideo.accentColor }}
          ></div>
          {/* Keyframe scene dots */}
          {activeVideo.scenes.map((s, idx) => (
            <div
              key={idx}
              className={`timeline-scene-dot ${s.visualType === 'checkpoint' ? 'checkpoint-dot' : ''}`}
              style={{ left: `${(s.time / activeVideo.duration) * 100}%` }}
              title={s.title}
            ></div>
          ))}
        </div>

        {/* Bottom Control Bar */}
        <div className="edu-video-controls">
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button className="edu-ctrl-btn" onClick={handleTogglePlay} title={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? "⏸" : "▶"}
            </button>

            {/* Restart */}
            <button className="edu-ctrl-btn" onClick={handleRestart} title="Restart from beginning">
              ⏮
            </button>

            {/* Time Display */}
            <span className="edu-video-time">
              {window.formatTime(currentTime)} / {activeVideo.durationFormatted}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Offline Speech Narration Toggle */}
            <button
              className={`edu-ctrl-btn ${speechEnabled ? 'active' : ''}`}
              onClick={() => {
                const nextSpeech = !speechEnabled;
                setSpeechEnabled(nextSpeech);
                if (!nextSpeech && 'speechSynthesis' in window) {
                  window.speechSynthesis.cancel();
                }
              }}
              title="Toggle Browser Voice Narration"
            >
              🗣️ {speechEnabled ? "Voice ON" : "Voice OFF"}
            </button>

            {/* Volume / Mute */}
            <div className="flex items-center gap-1">
              <button
                className="edu-ctrl-btn"
                onClick={() => {
                  const nextMuted = !isMuted;
                  setIsMuted(nextMuted);
                  if (nextMuted && 'speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                  }
                }}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? "🔇" : "🔊"}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  setIsMuted(val === 0);
                }}
                style={{ width: '60px', accentColor: '#34d399', cursor: 'pointer' }}
              />
            </div>

            {/* Fullscreen */}
            <button className="edu-ctrl-btn" onClick={handleToggleFullscreen} title="Toggle Fullscreen">
              ⛶
            </button>
          </div>
        </div>

        {/* 5 Video Selector Thumbnails Grid */}
        <div className="edu-video-grid-selector">
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            📚 Offline Video Library (5 Included Educational Videos)
          </div>
          <div className="grid grid-cols-5 md-grid-cols-2 gap-3">
            {window.EDU_VIDEO_CATALOG.map((vid) => (
              <div
                key={vid.id}
                className={`edu-video-card-thumb ${currentVideoId === vid.id ? 'active' : ''}`}
                onClick={() => {
                  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                  setCurrentVideoId(vid.id);
                  setCurrentTime(0);
                  setSelectedCheckpointAnswer(null);
                  setCheckpointFeedback(null);
                  setIsPlaying(false);
                }}
              >
                <div className="flex justify-between items-start" style={{ marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{vid.thumbnailIcon}</span>
                  <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>Offline</span>
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-900)', lineHeight: 1.25, marginBottom: '0.25rem' }}>
                  {vid.title}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>
                  ⏱ {vid.durationFormatted} • {vid.subject}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
})();
