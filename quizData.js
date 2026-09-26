// EDU-BOX Subject-Specific Multilingual Question Bank
// Strict Separation: Mathematics, Science, Computer Science, English
// 15 Distinct Grade-8 Questions per Subject across Easy, Medium, Challenge
// Equivalent translations in English, Tamil, Hindi, Telugu, Kannada
// Selection via getQuestions(subject, language, grade, difficulty)

window.EDU_QUESTION_BANKS = {
  // =========================================================================
  // MATHEMATICS (15 Questions: Fractions, Decimals, Percentages, Algebra, Geometry, Word Problems)
  // =========================================================================
  Mathematics: [
    {
      id: "math-001",
      topic: "Fractions",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1, // index of option
      en: { question: "What is 1/2 + 1/2?", options: ["1/2", "1", "2", "1/4"], explanation: "Two halves combine to make one complete whole (2/2 = 1)." },
      ta: { question: "1/2 + 1/2 என்பதன் மதிப்பு என்ன?", options: ["1/2", "1", "2", "1/4"], explanation: "இரண்டு அரை பகுதிகளை சேர்த்தால் ஒரு முழு பகுதி கிடைக்கும் (2/2 = 1)." },
      hi: { question: "1/2 + 1/2 का मान क्या है?", options: ["1/2", "1", "2", "1/4"], explanation: "दो आधों को जोड़ने पर एक पूरा बनता है (2/2 = 1)।" },
      te: { question: "1/2 + 1/2 విలువ ఎంత?", options: ["1/2", "1", "2", "1/4"], explanation: "రెండు అర భాగాలు కలిస్తే ఒక పూర్తి భాగం (2/2 = 1)." },
      kn: { question: "1/2 + 1/2 ರ ಮೌಲ್ಯ ಎಷ್ಟು?", options: ["1/2", "1", "2", "1/4"], explanation: "ಎರಡು ಅರ್ಧ ಭಾಗಗಳು ಸೇರಿದರೆ ಒಂದು ಪೂರ್ಣವಾಗುತ್ತದೆ (2/2 = 1)." }
    },
    {
      id: "math-002",
      topic: "Fractions",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "If a pizza has 8 equal slices and Arun eats 3 slices, what fraction remains?", options: ["3/8", "1/2", "5/8", "5/3"], explanation: "Remaining slices = 8 - 3 = 5. Fraction remaining = 5/8." },
      ta: { question: "ஒரு பீட்சாவில் 8 சம துண்டுகள் உள்ளன. அருண் 3 துண்டுகளை சாப்பிட்டால், மீதமுள்ள பின்னம் என்ன?", options: ["3/8", "1/2", "5/8", "5/3"], explanation: "மீதமுள்ள துண்டுகள் = 8 - 3 = 5. பின்னம் = 5/8." },
      hi: { question: "यदि 8 स्लाइस में से अरुण 3 स्लाइस खाता है, तो कितना भिन्न भाग शेष बचेगा?", options: ["3/8", "1/2", "5/8", "5/3"], explanation: "शेष स्लाइस = 8 - 3 = 5। भिन्न = 5/8।" },
      te: { question: "8 ముక్కల పిజ్జాలో అరుణ్ 3 ముక్కలు తింటే, మిగిలిన భిన్నం ఎంత?", options: ["3/8", "1/2", "5/8", "5/3"], explanation: "మిగిలిన ముక్కలు = 8 - 3 = 5. భిన్నం = 5/8." },
      kn: { question: "8 ತುಂಡುಗಳ ಪಿಜ್ಜಾದಲ್ಲಿ ಅರುಣ್ 3 ತುಂಡು ತಿಂದರೆ, ಉಳಿದ ಭಿನ್ನರಾಶಿ ಎಷ್ಟು?", options: ["3/8", "1/2", "5/8", "5/3"], explanation: "ಉಳಿದ ತುಂಡುಗಳು = 8 - 3 = 5. ಭಿನ್ನರಾಶಿ = 5/8." }
    },
    {
      id: "math-003",
      topic: "Equivalent Fractions",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 0,
      en: { question: "Which fraction is strictly greater: 2/3 or 3/4?", options: ["3/4", "2/3", "Both are equal", "Cannot be determined"], explanation: "Common denominator is 12: 2/3 = 8/12, 3/4 = 9/12. Since 9/12 > 8/12, 3/4 is greater (0.75 > 0.67)." },
      ta: { question: "2/3 மற்றும் 3/4 ஆகியவற்றில் எது பெரிய பின்னம்?", options: ["3/4", "2/3", "இரண்டும் சமம்", "கூற முடியாது"], explanation: "பொதுப் பகுதி 12: 2/3 = 8/12, 3/4 = 9/12. எனவே 3/4 பெரியது." },
      hi: { question: "2/3 और 3/4 में से कौन सा भिन्न बड़ा है?", options: ["3/4", "2/3", "दोनों बराबर हैं", "तय नहीं किया जा सकता"], explanation: "समान हर 12 बनाने पर: 2/3 = 8/12 और 3/4 = 9/12। अतः 3/4 बड़ा है।" },
      te: { question: "2/3 మరియు 3/4 లలో ఏ భిన్నం పెద్దది?", options: ["3/4", "2/3", "రెండూ సమానం", "చెప్పలేము"], explanation: "హారాలను 12 గా మారిస్తే: 2/3 = 8/12, 3/4 = 9/12. కాబట్టి 3/4 పెద్దది." },
      kn: { question: "2/3 ಮತ್ತು 3/4 ರಲ್ಲಿ ಯಾವುದು ದೊಡ್ಡ ಭಿನ್ನರಾಶಿ?", options: ["3/4", "2/3", "ಎರಡೂ ಸಮಾನವಾಗಿವೆ", "ಹೇಳಲಾಗುವುದಿಲ್ಲ"], explanation: "12 ಛೇದಕ್ಕೆ ಪರಿವರ್ತಿಸಿದಾಗ: 3/4 = 9/12 > 8/12." }
    },
    {
      id: "math-004",
      topic: "Decimals",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Convert 0.75 into a fraction in its simplest form:", options: ["7/5", "3/4", "1/4", "75/10"], explanation: "0.75 = 75/100 = 3/4 when divided by 25." },
      ta: { question: "0.75 என்ற தசம எண்ணின் எளிய பின்ன வடிவம் என்ன?", options: ["7/5", "3/4", "1/4", "75/10"], explanation: "0.75 = 75/100 = 3/4 (25-ஆல் வகுக்க)." },
      hi: { question: "0.75 का सरलतम भिन्न रूप क्या है?", options: ["7/5", "3/4", "1/4", "75/10"], explanation: "0.75 = 75/100 = 3/4 (25 से भाग देने पर)।" },
      te: { question: "0.75 యొక్క సరళమైన భిన్న రూపం ఏది?", options: ["7/5", "3/4", "1/4", "75/10"], explanation: "0.75 = 75/100 = 3/4." },
      kn: { question: "0.75 ರ ಸರಳ ಭಿನ್ನರಾಶಿ ರೂಪ ಯಾವುದು?", options: ["7/5", "3/4", "1/4", "75/10"], explanation: "0.75 = 75/100 = 3/4." }
    },
    {
      id: "math-005",
      topic: "Decimals",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 3,
      en: { question: "What is 4.6 + 3.75?", options: ["7.15", "8.25", "7.85", "8.35"], explanation: "Aligning decimals: 4.60 + 3.75 = 8.35." },
      ta: { question: "4.6 + 3.75 என்பதன் மதிப்பு என்ன?", options: ["7.15", "8.25", "7.85", "8.35"], explanation: "4.60 + 3.75 = 8.35." },
      hi: { question: "4.6 + 3.75 का मान क्या होगा?", options: ["7.15", "8.25", "7.85", "8.35"], explanation: "4.60 + 3.75 = 8.35।" },
      te: { question: "4.6 + 3.75 విలువ ఎంత?", options: ["7.15", "8.25", "7.85", "8.35"], explanation: "4.60 + 3.75 = 8.35." },
      kn: { question: "4.6 + 3.75 ರ ಮೊತ್ತ ಎಷ್ಟು?", options: ["7.15", "8.25", "7.85", "8.35"], explanation: "4.60 + 3.75 = 8.35." }
    },
    {
      id: "math-006",
      topic: "Percentages",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 2,
      en: { question: "What is 25% of 80?", options: ["15", "25", "20", "30"], explanation: "25% = 1/4. So 80 / 4 = 20." },
      ta: { question: "80-ல் 25% எவ்வளவு?", options: ["15", "25", "20", "30"], explanation: "25% என்பது 1/4 பங்கு. 80 / 4 = 20." },
      hi: { question: "80 का 25% कितना होगा?", options: ["15", "25", "20", "30"], explanation: "25% = 1/4 भाग। 80 / 4 = 20।" },
      te: { question: "80 లో 25% ఎంత?", options: ["15", "25", "20", "30"], explanation: "25% అంటే నాల్గవ వంతు (80 / 4 = 20)." },
      kn: { question: "80 ರ 25% ಎಷ್ಟು?", options: ["15", "25", "20", "30"], explanation: "25% ಎಂದರೆ ಕಾಲು ಭಾಗ (80 / 4 = 20)." }
    },
    {
      id: "math-007",
      topic: "Percentages",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 0,
      en: { question: "A school bag costs ₹200. With a 10% discount, what is the selling price?", options: ["₹180", "₹190", "₹170", "₹160"], explanation: "Discount = 10% of 200 = ₹20. Final price = 200 - 20 = ₹180." },
      ta: { question: "ஒரு பையின் விலை ₹200. அதற்கு 10% தள்ளுபடி வழங்கப்பட்டால் விற்பனை விலை என்ன?", options: ["₹180", "₹190", "₹170", "₹160"], explanation: "தள்ளுபடி = ₹20. விற்பனை விலை = 200 - 20 = ₹180." },
      hi: { question: "एक बैग का मूल्य ₹200 है। 10% छूट के बाद उसका विक्रय मूल्य क्या होगा?", options: ["₹180", "₹190", "₹170", "₹160"], explanation: "छूट = ₹20। अंतिम मूल्य = 200 - 20 = ₹180।" },
      te: { question: "ఒక బ్యాగ్ ధర ₹200. 10% తగ్గింపు తర్వాత దాని ధర ఎంత?", options: ["₹180", "₹190", "₹170", "₹160"], explanation: "తగ్గింపు = ₹20. తుది ధర = ₹180." },
      kn: { question: "ಬ್ಯಾಗಿನ ಬೆಲೆ ₹200. 10% ರಿಯಾಯಿತಿಯ ನಂತರ ಮಾರಾಟ ಬೆಲೆ ಎಷ್ಟು?", options: ["₹180", "₹190", "₹170", "₹160"], explanation: "ರಿಯಾಯಿತಿ = ₹20. ಅಂತಿಮ ಬೆಲೆ = ₹180." }
    },
    {
      id: "math-008",
      topic: "Ratios",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 1,
      en: { question: "If the ratio of boys to girls in class is 3:2 and there are 15 boys, how many girls are there?", options: ["8", "10", "12", "6"], explanation: "3 units = 15, so 1 unit = 5. Girls = 2 units × 5 = 10." },
      ta: { question: "வகுப்பில் மாணவர்கள் மற்றும் மாணவிகளின் விகிதம் 3:2. மாணவர்கள் 15 எனில் மாணவிகள் எத்தனை பேர்?", options: ["8", "10", "12", "6"], explanation: "3 பங்கு = 15, எனவே 1 பங்கு = 5. மாணவிகள் = 2 × 5 = 10." },
      hi: { question: "यदि लड़कों और लड़कियों का अनुपात 3:2 है और 15 लड़के हैं, तो लड़कियां कितनी हैं?", options: ["8", "10", "12", "6"], explanation: "3 इकाई = 15, अतः 1 इकाई = 5। लड़कियां = 2 × 5 = 10।" },
      te: { question: "అమ్మాయిలు, అబ్బాయిల నిష్పత్తి 3:2 మరియు 15 మంది అబ్బాయిలు ఉంటే, అమ్మాయిలు ఎంతమంది?", options: ["8", "10", "12", "6"], explanation: "3 భాగాలు = 15, 1 భాగం = 5. అమ్మాయిలు = 2 × 5 = 10." },
      kn: { question: "ಹುಡುಗರು ಮತ್ತು ಹುಡುಗಿಯರ ಅನುಪಾತ 3:2 ಇದ್ದು, 15 ಹುಡುಗರಿದ್ದರೆ ಹುಡುಗಿಯರೆಷ್ಟು?", options: ["8", "10", "12", "6"], explanation: "3 ಭಾಗ = 15, 1 ಭಾಗ = 5. ಹುಡುಗಿಯರು = 2 × 5 = 10." }
    },
    {
      id: "math-009",
      topic: "Basic Algebra",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Solve for x: 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 8"], explanation: "2x = 14 - 6 = 8. Dividing by 2 gives x = 4." },
      ta: { question: "x-ன் மதிப்பை காண்க: 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 8"], explanation: "2x = 8, எனவே x = 4." },
      hi: { question: "हल करें: 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 8"], explanation: "2x = 8, अतः x = 4।" },
      te: { question: "x విలువను కనుగొనండి: 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 8"], explanation: "2x = 8, కాబట్టి x = 4." },
      kn: { question: "x ನ ಬೆಲೆ ಕಂಡುಹಿಡಿಯಿರಿ: 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 8"], explanation: "2x = 8, ಆದ್ದರಿಂದ x = 4." }
    },
    {
      id: "math-010",
      topic: "Basic Algebra",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 2,
      en: { question: "Solve for y: 3y - 5 = y + 7", options: ["y = 4", "y = 5", "y = 6", "y = 12"], explanation: "3y - y = 7 + 5 => 2y = 12 => y = 6." },
      ta: { question: "y-ன் மதிப்பை காண்க: 3y - 5 = y + 7", options: ["y = 4", "y = 5", "y = 6", "y = 12"], explanation: "2y = 12, எனவே y = 6." },
      hi: { question: "हल करें: 3y - 5 = y + 7", options: ["y = 4", "y = 5", "y = 6", "y = 12"], explanation: "2y = 12, अतः y = 6।" },
      te: { question: "y విలువను కనుగొనండి: 3y - 5 = y + 7", options: ["y = 4", "y = 5", "y = 6", "y = 12"], explanation: "2y = 12, కాబట్టి y = 6." },
      kn: { question: "y ನ ಬೆಲೆ ಕಂಡುಹಿಡಿಯಿರಿ: 3y - 5 = y + 7", options: ["y = 4", "y = 5", "y = 6", "y = 12"], explanation: "2y = 12, ಆದ್ದರಿಂದ y = 6." }
    },
    {
      id: "math-011",
      topic: "Geometry",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "What is the sum of all interior angles of a triangle?", options: ["90°", "180°", "270°", "360°"], explanation: "The sum of interior angles of any triangle is always exactly 180 degrees." },
      ta: { question: "எந்த ஒரு முக்கோணத்தின் மூன்று கோணங்களின் கூடுதல் என்ன?", options: ["90°", "180°", "270°", "360°"], explanation: "முக்கோணத்தின் மூன்று கோணங்களின் கூடுதல் எப்போதும் 180°." },
      hi: { question: "त्रिभुज के तीनों आंतरिक कोणों का योग कितना होता है?", options: ["90°", "180°", "270°", "360°"], explanation: "किसी भी त्रिभुज के कोणों का योग 180° होता है।" },
      te: { question: "త్రిభుజంలోని మూడు కోణాల మొత్తం ఎంత?", options: ["90°", "180°", "270°", "360°"], explanation: "త్రిభుజం అంతర్గత కోణాల మొత్తం 180°." },
      kn: { question: "ತ್ರಿಕೋನದ ಮೂರು ಒಳಕೋನಗಳ ಮೊತ್ತ ಎಷ್ಟು?", options: ["90°", "180°", "270°", "360°"], explanation: "ತ್ರಿಭುಜದ ಕೋನಗಳ ಮೊತ್ತ ಯಾವಾಗಲೂ 180°." }
    },
    {
      id: "math-012",
      topic: "Geometry",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "What is the perimeter of a rectangle with length 8 cm and width 5 cm?", options: ["13 cm", "40 cm", "26 cm", "21 cm"], explanation: "Perimeter = 2 × (length + width) = 2 × (8 + 5) = 26 cm." },
      ta: { question: "நீளம் 8 செ.மீ மற்றும் அகலம் 5 செ.மீ கொண்ட செவ்வகத்தின் சுற்றளவு என்ன?", options: ["13 செ.மீ", "40 செ.மீ", "26 செ.மீ", "21 செ.மீ"], explanation: "சுற்றளவு = 2 × (8 + 5) = 26 செ.மீ." },
      hi: { question: "8 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का परिमाप क्या होगा?", options: ["13 सेमी", "40 सेमी", "26 सेमी", "21 सेमी"], explanation: "परिमाप = 2 × (8 + 5) = 26 सेमी।" },
      te: { question: "పొడవు 8 సెం.మీ మరియు వెడల్పు 5 సెం.మీ దీర్ఘచతురస్ర చుట్టుకొలత ఎంత?", options: ["13 సెం.మీ", "40 సెం.మీ", "26 సెం.మీ", "21 సెం.మీ"], explanation: "చుట్టుకొలత = 2 × (8 + 5) = 26 సెం.మీ." },
      kn: { question: "ಉದ್ದ 8 ಸೆಂ.ಮೀ ಮತ್ತು ಅಗಲ 5 ಸೆಂ.ಮೀ ಇರುವ ಆಯತದ ಸುತ್ತಳತೆ ಎಷ್ಟು?", options: ["13 ಸೆಂ.ಮೀ", "40 ಸೆಂ.ಮೀ", "26 ಸೆಂ.ಮೀ", "21 ಸೆಂ.ಮೀ"], explanation: "ಸುತ್ತಳತೆ = 2 × (8 + 5) = 26 ಸೆಂ.ಮೀ." }
    },
    {
      id: "math-013",
      topic: "Multiplication",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 3,
      en: { question: "What is 15 × 12?", options: ["150", "160", "170", "180"], explanation: "15 × 12 = 15 × 10 + 15 × 2 = 150 + 30 = 180." },
      ta: { question: "15 × 12 என்பதன் மதிப்பு என்ன?", options: ["150", "160", "170", "180"], explanation: "15 × 12 = 180." },
      hi: { question: "15 × 12 का मान कितना है?", options: ["150", "160", "170", "180"], explanation: "15 × 12 = 180।" },
      te: { question: "15 × 12 విలువ ఎంత?", options: ["150", "160", "170", "180"], explanation: "15 × 12 = 180." },
      kn: { question: "15 × 12 ರ ಮೌಲ್ಯ ಎಷ್ಟು?", options: ["150", "160", "170", "180"], explanation: "15 × 12 = 180." }
    },
    {
      id: "math-014",
      topic: "Division",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 3,
      en: { question: "72 notebooks are distributed equally among 8 students. How many does each get?", options: ["7", "8", "12", "9"], explanation: "72 / 8 = 9 notebooks per student." },
      ta: { question: "72 நோட்டுகள் 8 பேருக்கு சமமாகப் பிரித்தால் தலா எத்தனை கிடைக்கும்?", options: ["7", "8", "12", "9"], explanation: "72 / 8 = 9 நோட்டுகள்." },
      hi: { question: "72 कॉपियां 8 छात्रों में बराबर बांटने पर प्रत्येक को कितनी मिलेंगी?", options: ["7", "8", "12", "9"], explanation: "72 / 8 = 9 कॉपियां।" },
      te: { question: "72 పుస్తకాలను 8 మందికి పంచితే ఒక్కొక్కరికి ఎన్ని వస్తాయి?", options: ["7", "8", "12", "9"], explanation: "72 / 8 = 9 పుస్తకాలు." },
      kn: { question: "72 ಪುಸ್ತಕಗಳನ್ನು 8 ಜನರಿಗೆ ಹಂಚಿದರೆ ಪ್ರತಿಯೊಬ್ಬರಿಗೆ ಎಷ್ಟು ಸಿಗುತ್ತದೆ?", options: ["7", "8", "12", "9"], explanation: "72 / 8 = 9 ಪುಸ್ತಕಗಳು." }
    },
    {
      id: "math-015",
      topic: "Word Problems",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 1,
      en: { question: "A train travels 240 km in 3 hours at constant speed. How far will it travel in 5 hours?", options: ["360 km", "400 km", "420 km", "480 km"], explanation: "Speed = 240 / 3 = 80 km/h. Distance in 5 hours = 80 × 5 = 400 km." },
      ta: { question: "ஒரு ரயில் 3 மணி நேரத்தில் 240 கி.மீ தூரம் செல்கிறது. அதே வேகத்தில் 5 மணி நேரத்தில் எவ்வளவு தூரம் செல்லும்?", options: ["360 கி.மீ", "400 கி.மீ", "420 கி.மீ", "480 கி.மீ"], explanation: "வேகம் = 240/3 = 80 கி.மீ/மணி. 5 மணி நேரத்தில் தூரம் = 80 × 5 = 400 கி.மீ." },
      hi: { question: "एक रेलगाड़ी 3 घंटे में 240 किमी चलती है। 5 घंटे में वह कितनी दूरी तय करेगी?", options: ["360 किमी", "400 किमी", "420 किमी", "480 किमी"], explanation: "गति = 80 किमी/घंटा। 5 घंटे में दूरी = 80 × 5 = 400 किमी।" },
      te: { question: "రైలు 3 గంటల్లో 240 కి.మీ ప్రయాణిస్తే, 5 గంటల్లో ఎంత దూరం వెళుతుంది?", options: ["360 కి.మీ", "400 కి.మీ", "420 కి.మీ", "480 కి.మీ"], explanation: "వేగం = 80 కి.మీ/గం. 5 గంటల్లో దూరం = 80 × 5 = 400 కి.మీ." },
      kn: { question: "ಒಂದು ರೈಲು 3 ಗಂಟೆಯಲ್ಲಿ 240 ಕಿ.ಮೀ ಚಲಿಸಿದರೆ, 5 ಗಂಟೆಯಲ್ಲಿ ಎಷ್ಟು ದೂರ ಚಲಿಸುತ್ತದೆ?", options: ["360 ಕಿ.ಮೀ", "400 ಕಿ.ಮೀ", "420 ಕಿ.ಮೀ", "480 ಕಿ.ಮೀ"], explanation: "ವೇಗ = 80 ಕಿ.ಮೀ/ಗಂ. 5 ಗಂಟೆಗಳಲ್ಲಿ = 400 ಕಿ.ಮೀ." }
    }
  ],

  // =========================================================================
  // SCIENCE (15 Questions: Photosynthesis, Plants, Body, Animals, Matter, Energy, Environment, Water Cycle)
  // =========================================================================
  Science: [
    {
      id: "sci-001",
      topic: "Plants",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 2,
      en: { question: "Which part of a plant absorbs water and minerals from the soil?", options: ["Leaf", "Flower", "Root", "Fruit"], explanation: "Roots anchor the plant and absorb moisture and dissolved nutrients from the soil." },
      ta: { question: "மண்ணிலிருந்து நீரையும் கனிமங்களையும் உறிஞ்சும் தாவரத்தின் பகுதி எது?", options: ["இலை", "பூ", "வேர்", "காய்"], explanation: "வேர்கள் மண்ணிலுள்ள நீரையும் கனிமங்களையும் உறிஞ்சி தாவரத்திற்கு அனுப்புகின்றன." },
      hi: { question: "पौधे का कौन सा भाग मिट्टी से जल और खनिज अवशोषित करता है?", options: ["पत्ती", "फूल", "जड़", "फल"], explanation: "जड़ें मिट्टी से जल और खनिज लवण अवशोषित करती हैं।" },
      te: { question: "మట్టి నుండి నీరు మరియు ఖనిజాలను పీల్చుకునే మొక్క భాగం ఏది?", options: ["ఆకు", "పువ్వు", "వేరు", "కాయ"], explanation: "వేర్లు నేల నుండి నీటిని గ్రహిస్తాయి." },
      kn: { question: "ಮಣ್ಣಿನಿಂದ ನೀರು ಮತ್ತು ಖನಿಜಗಳನ್ನು ಹೀರಿಕೊಳ್ಳುವ ಸಸ್ಯದ ಅಂಗ ಯಾವುದು?", options: ["ಎಲೆ", "ಹೂವು", "ಬೇರು", "ಹಣ್ಣು"], explanation: "ಬೇರುಗಳು ಮಣ್ಣಿನಿಂದ ನೀರನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತವೆ." }
    },
    {
      id: "sci-002",
      topic: "Photosynthesis",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 1,
      en: { question: "In which plant cell organelle does photosynthesis take place?", options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"], explanation: "Chloroplasts contain green chlorophyll pigments that absorb sunlight for photosynthesis." },
      ta: { question: "தாவரங்களில் ஒளிச்சேர்க்கை நடைபெறும் செல் நுண்ணுறுப்பு எது?", options: ["மைட்டோகாண்ட்ரியா", "குளோரோபிளாஸ்ட் (பசுங்கணிகம்)", "நியூக்ளியஸ்", "ரைபோசோம்"], explanation: "பசுங்கணிகத்திலுள்ள குளோரோபில் சூரிய ஒளியை ஈர்த்து உணவு தயாரிக்கிறது." },
      hi: { question: "हरे पौधों में प्रकाश संश्लेषण किस कोशिकांग में होता है?", options: ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट (हरितलवक)", "केंद्रक", "राइबोसोम"], explanation: "क्लोरोप्लास्ट में मौजूद क्लोरोफिल सूर्य के प्रकाश को ग्रहण करता है।" },
      te: { question: "మొక్కలలో కిరణజన్య సంయోగక్రియ ఏ కణాంగంలో జరుగుతుంది?", options: ["మైటోకాండ్రియా", "హరితరేణువు (క్లోరోప్లాస్ట్)", "కేంద్రకం", "రైబోజోమ్"], explanation: "హరితరేణువులలో ఆహారం తయారవుతుంది." },
      kn: { question: "ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ನಡೆಯುವ ಕಣದ ಭಾಗ ಯಾವುದು?", options: ["ಮೈಟೋಕಾಂಡ್ರಿಯಾ", "ಕ್ಲೋರೋಪ್ಲಾಸ್ಟ್", "ಕೋಶಕೇಂದ್ರ", "ರೈಬೋಸೋಮ್"], explanation: "ಕ್ಲೋರೋಪ್ಲಾಸ್ಟ್ ಸೂರ್ಯನ ಬೆಳಕನ್ನು ಹಿಡಿದಿಟ್ಟು ಆಹಾರ ತಯಾರಿಸುತ್ತದೆ." }
    },
    {
      id: "sci-003",
      topic: "Photosynthesis",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 0,
      en: { question: "Which gas do plants take in from the air during photosynthesis?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Argon"], explanation: "Plants absorb carbon dioxide (CO₂) through stomata on leaves to synthesize glucose." },
      ta: { question: "ஒளிச்சேர்க்கையின் போது தாவரங்கள் காற்றிலிருந்து உள்ளிழுக்கும் வாயு எது?", options: ["கார்பன் டை ஆக்சைடு", "ஆக்சிஜன்", "நைட்ரஜன்", "ஆர்கான்"], explanation: "தாவரங்கள் இலைத் துளைகள் வழியே கார்பன் டை ஆக்சைடை உறிஞ்சுகின்றன." },
      hi: { question: "प्रकाश संश्लेषण के लिए पौधे वायु से कौन सी गैस लेते हैं?", options: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "आर्गन"], explanation: "पौधे प्रकाश संश्लेषण में कार्बन डाइऑक्साइड (CO₂) का उपयोग करते हैं।" },
      te: { question: "కిరణజన్య సంయోగక్రియ కోసం మొక్కలు గాలి నుండి ఏ వాయువును తీసుకుంటాయి?", options: ["కార్బన్ డయాక్సైడ్", "ఆక్సిజన్", "నైట్రోజన్", "ఆర్గాన్"], explanation: "మొక్కలు కార్బన్ డయాక్సైడ్ (CO₂) ను తీసుకుంటాయి." },
      kn: { question: "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಗಾಗಿ ಸಸ್ಯಗಳು ಗಾಳಿಯಿಂದ ಯಾವ ಅನಿಲವನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ?", options: ["ಇಂಗಾಲದ ಡೈಆಕ್ಸೈಡ್", "ಆಮ್ಲಜನಕ", "ಸಾರಜನಕ", "ಆರ್ಗಾನ್"], explanation: "ಸಸ್ಯಗಳು ಇಂಗಾಲದ ಡೈಆಕ್ಸೈಡ್ (CO₂) ಅನ್ನು ಬಳಸಿಕೊಳ್ಳುತ್ತವೆ." }
    },
    {
      id: "sci-004",
      topic: "Human body",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 0,
      en: { question: "Which muscular organ pumps blood throughout the entire human body?", options: ["Heart", "Lungs", "Kidney", "Liver"], explanation: "The heart pumps oxygenated and deoxygenated blood through the circulatory network." },
      ta: { question: "மனித உடலில் இரத்தத்தை உந்தி செலுத்தும் தசை உறுப்பு எது?", options: ["இதயம்", "நுரையீரல்", "சிறுநீரகம்", "கல்லீரல்"], explanation: "இதயம் சீராக துடித்து இரத்தத்தை உடலெங்கும் செலுத்துகிறது." },
      hi: { question: "मानव शरीर में रक्त को पंप करने वाला मुख्य अंग कौन सा है?", options: ["हृदय", "फेफड़े", "गुर्दा", "यकृत"], explanation: "हृदय पूरे शरीर में रक्त का संचार करता है।" },
      te: { question: "శరీరమంతటా రక్తాన్ని పంప్ చేసే అవయవం ఏది?", options: ["గుండె", "ఊపిరితిత్తులు", "మూత్రపిండాలు", "కాలేయం"], explanation: "గుండె రక్తాన్ని శరీరానికి పంపుతుంది." },
      kn: { question: "ದೇಹದಾದ್ಯಂತ ರಕ್ತವನ್ನು ಪಂಪ್ ಮಾಡುವ ಅಂಗ ಯಾವುದು?", options: ["ಹೃದಯ", "ಶ್ವಾಸಕೋಶ", "ಮೂತ್ರಪಿಂಡ", "ಯಕೃತ್"], explanation: "ಹೃದಯವು ರಕ್ತ ಪರಿಚಲನೆ ಮಾಡುತ್ತದೆ." }
    },
    {
      id: "sci-005",
      topic: "Human body",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "What is the primary role of red blood cells (RBCs)?", options: ["Fighting pathogens", "Clotting blood", "Carrying oxygen to cells", "Producing insulin"], explanation: "RBCs contain hemoglobin that binds and transports oxygen from lungs to body tissues." },
      ta: { question: "இரத்த சிவப்பணுக்களின் (RBC) முதன்மையான பணி என்ன?", options: ["தொற்றை எதிர்த்தல்", "இரத்த உறைதல்", "ஆக்சிஜனை கடத்துதல்", "இன்சுலின் சுரத்தல்"], explanation: "சிவப்பணுக்களில் உள்ள ஹீமோகுளோபின் ஆக்சிஜனை உடலின் அனைத்து செல்களுக்கும் கடத்துகிறது." },
      hi: { question: "लाल रक्त कोशिकाओं (RBC) का मुख्य कार्य क्या है?", options: ["रोगाणुओं से लड़ना", "रक्त का थक्का बनाना", "ऑक्सीजन पहुंचाना", "इंसुलिन बनाना"], explanation: "RBC में हीमोग्लोबिन होता है जो ऑक्सीजन को कोशिकाओं तक पहुंचाता है।" },
      te: { question: "ఎర్ర రక్త కణాల (RBC) ప్రధాన విధి ఏమిటి?", options: ["వ్యాధులతో పోరాడటం", "రక్తం గడ్డకట్టడం", "ఆక్సిజన్‌ను అందించడం", "ఇన్సులిన్ ఉత్పత్తి"], explanation: "RBC శరీర కణాలకు ఆక్సిజన్‌ను మోసుకెళుతుంది." },
      kn: { question: "ಕೆಂಪು ರಕ್ತ ಕಣಗಳ (RBC) ಮುಖ್ಯ ಕಾರ್ಯವೇನು?", options: ["ರೋಗಾಣುಗಳ ವಿರುದ್ಧ ಹೋರಾಡುವುದು", "ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟಿಸುವುದು", "ಆಮ್ಲಜನಕವನ್ನು ಸಾಗಿಸುವುದು", "ಇನ್ಸುಲಿನ್ ಉತ್ಪಾದನೆ"], explanation: "RBC ದೇಹಕ್ಕೆ ಆಮ್ಲಜನಕವನ್ನು ಒದಗಿಸುತ್ತದೆ." }
    },
    {
      id: "sci-006",
      topic: "Animals",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Animals that consume only plants are classified as:", options: ["Carnivores", "Herbivores", "Omnivores", "Parasites"], explanation: "Herbivores like cows and deer eat only grass, leaves, and vegetation." },
      ta: { question: "தாவரங்களை மட்டுமே உண்ணும் விலங்குகள் எவ்வாறு அழைக்கப்படுகின்றன?", options: ["ஊனுண்ணிகள்", "தாவரவுண்ணிகள்", "அனைத்துண்ணிகள்", "ஒட்டுண்ணிகள்"], explanation: "தாவரங்களை மட்டுமே உண்ணும் விலங்குகள் தாவரவுண்ணிகள் (Herbivores) எனப்படும்." },
      hi: { question: "केवल पेड़-पौधे खाने वाले जीव क्या कहलाते हैं?", options: ["मांसाहारी", "शाकाहारी", "सर्वाहारी", "परजीवी"], explanation: "पादप खाने वाले जीव शाकाहारी (Herbivores) कहलाते हैं।" },
      te: { question: "మొక్కలను మాత్రమే తినే జంతువులను ఏమంటారు?", options: ["మాంసాహారులు", "శాకాహారులు", "సర్వాహారులు", "పరాన్నజీవులు"], explanation: "మొక్కలను మాత్రమే తినేవి శాకాహారులు." },
      kn: { question: "ಕೇವಲ ಸಸ್ಯಗಳನ್ನು ಮಾತ್ರ ತಿನ್ನುವ ಪ್ರಾಣಿಗಳನ್ನು ಏನೆಂದು ಕರೆಯುತ್ತಾರೆ?", options: ["ಮಾಂಸಾಹಾರಿ", "ಸಸ್ಯಾಹಾರಿ", "ಮಿಶ್ರಾಹಾರಿ", "ಪರಾವಲಂಬಿ"], explanation: "ಸಸ್ಯಗಳನ್ನು ಮಾತ್ರ ತಿನ್ನುವ ಪ್ರಾಣಿಗಳು ಸಸ್ಯಾಹಾರಿಗಳು." }
    },
    {
      id: "sci-007",
      topic: "Animals",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 3,
      en: { question: "How do fish extract dissolved oxygen from water?", options: ["Through skin", "Through lungs", "Through fins", "Through gills"], explanation: "Fish pass water across capillary-rich gills to absorb dissolved oxygen." },
      ta: { question: "மீன்கள் தண்ணீரில் கரைந்துள்ள ஆக்சிஜனை எவ்வாறு பெறுகின்றன?", options: ["தோல் வழியே", "நுரையீரல் வழியே", "துடுப்பு வழியே", "செவுள்கள் வழியே"], explanation: "செவுள்கள் நீரிலுள்ள கரைந்த ஆக்சிஜனை உறிஞ்சுகின்றன." },
      hi: { question: "मछलियां पानी में घुली ऑक्सीजन किस अंग से प्राप्त करती हैं?", options: ["त्वचा द्वारा", "फेफड़ों द्वारा", "पंखों द्वारा", "गलफड़ों (गिल्स) द्वारा"], explanation: "मछलियां गलफड़ों से पानी में घुली ऑक्सीजन ग्रहण करती हैं।" },
      te: { question: "చేపలు నీటిలోని ఆక్సిజన్‌ను ఏ అవయవంతో పీల్చుకుంటాయి?", options: ["చర్మం ద్వారా", "ఊపిరితిత్తులు", "రెక్కలు", "మొప్పలు (గిల్స్)"], explanation: "చేపలు మొప్పల ద్వారా శ్వాసిస్తాయి." },
      kn: { question: "ಮೀನುಗಳು ನೀರಿನಲ್ಲಿ ಕರಗಿರುವ ಆಮ್ಲಜನಕವನ್ನು ಹೇಗೆ ಪಡೆಯುತ್ತವೆ?", options: ["ಚರ್ಮದ ಮೂಲಕ", "ಶ್ವಾಸಕೋಶ", "ರೆಕ್ಕೆಗಳು", "ಕಿವಿರುಗಳ ಮೂಲಕ"], explanation: "ಮೀನುಗಳು ಕಿವಿರುಗಳ ಮೂಲಕ ಉಸಿರಾಡುತ್ತವೆ." }
    },
    {
      id: "sci-008",
      topic: "Matter",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Which state of matter has a fixed volume but no fixed shape?", options: ["Solid", "Liquid", "Gas", "Plasma"], explanation: "Liquids retain their volume but conform to the container's geometry." },
      ta: { question: "நிலையான பருமன் கொண்ட ஆனால் குறிப்பிட்ட வடிவம் இல்லாத பருப்பொருள் நிலை எது?", options: ["திண்மம்", "திரவம்", "வாயு", "பிளாஸ்மா"], explanation: "திரவத்திற்கு நிலையான பருமன் உண்டு, ஆனால் பாத்திரத்தின் வடிவத்தையே ஏற்கும்." },
      hi: { question: "पदार्थ की किस अवस्था का आयतन निश्चित होता है पर आकार नहीं?", options: ["ठोस", "द्रव", "गैस", "प्लाज्मा"], explanation: "द्रव का आयतन निश्चित होता है लेकिन यह बर्तन का आकार लेता है।" },
      te: { question: "స్థిర ఘనపరిమాణం ఉండి, స్థిర ఆకారం లేని పదార్ధ స్థితి ఏది?", options: ["ఘన", "ద్రవ", "వాయు", "ప్లాస్మా"], explanation: "ద్రవాలకు స్థిర పరిమాణం ఉంటుంది కానీ పాత్ర ఆకారం తీసుకుంటాయి." },
      kn: { question: "ನಿರ್ದಿಷ್ಟ ಪರಿಮಾಣವಿದ್ದು, ನಿರ್ದಿಷ್ಟ ಆಕಾರವಿಲ್ಲದ ದ್ರವ್ಯದ ಸ್ಥಿತಿ ಯಾವುದು?", options: ["ಘನ", "ದ್ರವ", "ಅನಿಲ", "ಪ್ಲಾಸ್ಮಾ"], explanation: "ದ್ರವಕ್ಕೆ ನಿಶ್ಚಿತ ಪರಿಮಾಣವಿರುತ್ತದೆ ಆದರೆ ಆಕಾರವಿರುವುದಿಲ್ಲ." }
    },
    {
      id: "sci-009",
      topic: "Matter",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 0,
      en: { question: "What is the process of water vapor cooling into liquid droplets called?", options: ["Condensation", "Evaporation", "Sublimation", "Freezing"], explanation: "Condensation transforms gas vapor back into liquid (forming clouds, dew)." },
      ta: { question: "நீராவியானது குளிர்ந்து நீர் துளிகளாக மாறும் நிகழ்வு என்ன?", options: ["ஆவி சுருங்குதல்", "ஆவியாதல்", "பதங்கமாதல்", "உறைதல்"], explanation: "நீராவி குளிர்ந்து நீராக மாறுவது ஆவி சுருங்குதல் (Condensation) எனப்படும்." },
      hi: { question: "वाष्प के ठंडा होकर द्रव बनने की प्रक्रिया क्या कहलाती है?", options: ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "हिमीकरण"], explanation: "वाष्प का द्रव में बदलना संघनन (Condensation) कहलाता है।" },
      te: { question: "నీటి ఆవిరి చల్లబడి నీటి బిందువులుగా మారే ప్రక్రియను ఏమంటారు?", options: ["సాంద్రీకరణం", "భాష్పీభవనం", "ఉత్పతనం", "ఘనీభవనం"], explanation: "ఆవిరి నీరుగా మారడాన్ని సాంద్రీకరణం అంటారు." },
      kn: { question: "ಹಬೆ ತಂಪಾಗಿ ನೀರಿನ ಹನಿಗಳಾಗುವ ಪ್ರಕ್ರಿಯೆಗೆ ಏನೆನ್ನುತ್ತಾರೆ?", options: ["ಸಾಂದ್ರೀಕರಣ", "ಭಾಷ್ಪೀಕರಣ", "ಉತ್ಪತನ", "ಘನೀಕರಣ"], explanation: "ಹಬೆ ನೀರಾಗುವುದನ್ನು ಸಾಂದ್ರೀಕರಣ ಎನ್ನಲಾಗುತ್ತದೆ." }
    },
    {
      id: "sci-010",
      topic: "Energy",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 2,
      en: { question: "What is the primary source of natural energy for Earth?", options: ["Moon", "Wind", "Sun", "Geothermal Core"], explanation: "The Sun radiates solar energy fueling climate, wind, and plant photosynthesis." },
      ta: { question: "பூமிக்கு இயற்கை ஆற்றலை வழங்கும் முதன்மை ஆதாரம் எது?", options: ["நிலா", "காற்று", "சூரியன்", "பூமி மையம்"], explanation: "சூரியனே பூமியின் முதன்மையான ஆற்றல் மூலமாகும்." },
      hi: { question: "पृथ्वी पर ऊर्जा का प्राथमिक प्राकृतिक स्रोत क्या है?", options: ["चंद्रमा", "पवन", "सूर्य", "भूगर्भ"], explanation: "सूर्य पृथ्वी के समस्त पारिस्थितिकी तंत्र की ऊर्जा का मुख्य स्रोत है।" },
      te: { question: "భూమికి ప్రాథమిక శక్తి వనరు ఏది?", options: ["చంద్రుడు", "గాలి", "సూర్యుడు", "భూగర్భం"], explanation: "సూర్యుడు భూమికి సహజ శక్తిని ఇస్తాడు." },
      kn: { question: "ಭೂಮಿಯ ನೈಸರ್ಗಿಕ ಶಕ್ತಿಯ ಪ್ರಾಥಮಿಕ ಮೂಲ ಯಾವುದು?", options: ["ಚಂದ್ರ", "ಗಾಳಿ", "ಸೂರ್ಯ", "ಭೂಗರ್ಭ"], explanation: "ಸೂರ್ಯನೇ ಭೂಮಿಯ ಶಕ್ತಿಯ ಪ್ರಮುಖ ಮೂಲ." }
    },
    {
      id: "sci-011",
      topic: "Energy",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 1,
      en: { question: "When a boulder rests atop a cliff, what form of energy is stored?", options: ["Kinetic energy", "Gravitational potential energy", "Chemical energy", "Thermal energy"], explanation: "Elevation gives the boulder gravitational potential energy (mgh)." },
      ta: { question: "மலையின் உச்சியில் உள்ள பாறையில் சேமிக்கப்பட்டுள்ள ஆற்றல் வடிவம் எது?", options: ["இயக்க ஆற்றல்", "ஈர்ப்பு நிலை ஆற்றல்", "வேதி ஆற்றல்", "வெப்ப ஆற்றல்"], explanation: "உயரத்தில் வைக்கப்பட்டுள்ள பொருட்களில் ஈர்ப்பு நிலை ஆற்றல் இருக்கும்." },
      hi: { question: "पहाड़ की चोटी पर स्थिर रखी चट्टान में कौन सी ऊर्जा संचित होती है?", options: ["गतिज ऊर्जा", "गुरुत्वीय स्थितिज ऊर्जा", "रासायनिक ऊर्जा", "तापीय ऊर्जा"], explanation: "ऊंचाई पर स्थित किसी वस्तु में गुरुत्वीय स्थितिज ऊर्जा होती है।" },
      te: { question: "కొండపై నిశ్చలంగా ఉన్న బండరాయిలో ఏ శక్తి ఉంటుంది?", options: ["గతిజ శక్తి", "స్థితిజ శక్తి", "రసాయన శక్తి", "ఉష్ణ శక్తి"], explanation: "ఎత్తులో ఉన్న వస్తువులో స్థితిజ శక్తి నిల్వ ఉంటుంది." },
      kn: { question: "ಬೆಟ್ಟದ ಮೇಲಿರುವ ಬಂಡೆಯಲ್ಲಿ ಯಾವ ಶಕ್ತಿ ಇರುತ್ತದೆ?", options: ["ಚಲನ ಶಕ್ತಿ", "ಪ್ರಚ್ಛನ್ನ ಶಕ್ತಿ", "ರಾಸಾಯನಿಕ ಶಕ್ತಿ", "ಶಾಖ ಶಕ್ತಿ"], explanation: "ಎತ್ತರದಲ್ಲಿರುವ ವಸ್ತುವಿನಲ್ಲಿ ಪ್ರಚ್ಛನ್ನ ಶಕ್ತಿ ಇರುತ್ತದೆ." }
    },
    {
      id: "sci-012",
      topic: "Environment",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Which gas is released by plants during daytime photosynthesis?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"], explanation: "Water molecules are split during light reactions, releasing oxygen gas." },
      ta: { question: "பகலில் ஒளிச்சேர்க்கையின் போது தாவரங்களால் வெளியேற்றப்படும் வாயு எது?", options: ["கார்பன் டை ஆக்சைடு", "ஆக்சிஜன்", "நைட்ரஜன்", "மீத்தேன்"], explanation: "ஒளிச்சேர்க்கையில் தாவரங்கள் ஆக்சிஜனை வெளியேற்றுகின்றன." },
      hi: { question: "दिन के समय प्रकाश संश्लेषण में पौधे कौन सी गैस छोड़ते हैं?", options: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "मीथेन"], explanation: "पौधे प्रकाश संश्लेषण में ऑक्सीजन छोड़ते हैं।" },
      te: { question: "కిరణజన్య సంయోగక్రియలో మొక్కలు విడుదల చేసే వాయువు ఏది?", options: ["కార్బన్ డయాక్సైడ్", "ఆక్సిజన్", "నైట్రోజన్", "మీథేన్"], explanation: "మొక్కలు ఆక్సిజన్‌ను విడుదల చేస్తాయి." },
      kn: { question: "ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಲ್ಲಿ ಸಸ್ಯಗಳು ಯಾವ ಅನಿಲವನ್ನು ಬಿಡುಗಡೆ ಮಾಡುತ್ತವೆ?", options: ["ಇಂಗಾಲದ ಡೈಆಕ್ಸೈಡ್", "ಆಮ್ಲಜನಕ", "ಸಾರಜನಕ", "ಮೀಥೇನ್"], explanation: "ಸಸ್ಯಗಳು ಆಮ್ಲಜನಕವನ್ನು ಹೊರಹಾಕುತ್ತವೆ." }
    },
    {
      id: "sci-013",
      topic: "Environment",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 0,
      en: { question: "What is the primary greenhouse gas emitted by burning petroleum and coal?", options: ["Carbon Dioxide (CO₂)", "Argon (Ar)", "Hydrogen (H₂)", "Helium (He)"], explanation: "Combustion of hydrocarbons releases carbon dioxide, trapping atmospheric heat." },
      ta: { question: "புதைபடிவ எரிபொருட்களை எரிப்பதால் வெளியாகும் முதன்மை பசுமைக்குடில் வாயு எது?", options: ["கார்பன் டை ஆக்சைடு", "ஆர்கான்", "ஹைட்ரஜன்", "ஹீலியம்"], explanation: "எரிபொருட்களை எரிப்பதால் வெளிவரும் CO₂ புவி வெப்பமயமாதலுக்கு வழிவகுக்கிறது." },
      hi: { question: "जीवाश्म ईंधन जलाने से कौन सी मुख्य ग्रीनहाउस गैस निकलती है?", options: ["कार्बन डाइऑक्साइड", "ऑर्गन", "हाइड्रोजन", "हीलियम"], explanation: "जीवाश्म ईंधन जलने पर कार्बन डाइऑक्साइड (CO₂) निकलती है।" },
      te: { question: "ఇంధనాలు కాల్చడం వల్ల విడుదలయ్యే ప్రధాన గ్రీన్‌హౌస్ వాయువు ఏది?", options: ["కార్బన్ డయాక్సైడ్", "ఆర్గాన్", "హైడ్రోజన్", "హీలియం"], explanation: "కార్బన్ డయాక్సైడ్ గ్రీన్‌హౌస్ ప్రభావానికి కారణం." },
      kn: { question: "ಇಂಧನಗಳನ್ನು ಸುಡುವುದರಿಂದ ಬಿಡುಗಡೆಯಾಗುವ ಪ್ರಮುಖ ಹಸಿರುಮನೆ ಅನಿಲ ಯಾವುದು?", options: ["ಇಂಗಾಲದ ಡೈಆಕ್ಸೈಡ್", "ಆರ್ಗಾನ್", "ಹೈಡ್ರೋಜನ್", "ಹೀಲಿಯಂ"], explanation: "ಇಂಧನ ದಹನದಿಂದ CO₂ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ." }
    },
    {
      id: "sci-014",
      topic: "Food chains",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "In a forest ecosystem, which organisms occupy the producer trophic level?", options: ["Lions", "Frogs", "Green Plants", "Fungi"], explanation: "Green plants produce their own chemical food through photosynthesis." },
      ta: { question: "காட்டுச் சூழலில் 'உற்பத்தியாளர்' மட்டத்தில் உள்ளவை எவை?", options: ["சிங்கம்", "தவளை", "பச்சைத் தாவரங்கள்", "பூஞ்சை"], explanation: "தாவரங்கள் தங்கள் உணவை தாங்களே தயாரிப்பதால் உற்பத்தியாளர்கள் எனப்படுகின்றன." },
      hi: { question: "पारिस्थितिकी तंत्र में 'उत्पादक' (Producer) स्तर पर कौन होते हैं?", options: ["शेर", "मेंढक", "हरे पौधे", "कवक"], explanation: "हरे पौधे प्रकाश संश्लेषण से स्वयं भोजन बनाते हैं, अतः वे उत्पादक हैं।" },
      te: { question: "పర్యావరణంలో 'ఉత్పత్తిదారులు' అని వేటిని అంటారు?", options: ["సింహాలు", "కప్పలు", "ఆకుపచ్చని మొక్కలు", "శిలీంధ్రాలు"], explanation: "మొక్కలు ఆహారాన్ని తయారుచేసుకుంటాయి కాబట్టి ఉత్పత్తిదారులు." },
      kn: { question: "ಪರಿಸರ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ 'ಉತ್ಪಾದಕರು' ಯಾರು?", options: ["ಸಿಂಹಗಳು", "ಕಪ್ಪೆಗಳು", "ಹಸಿರು ಸಸ್ಯಗಳು", "ಶಿಲೀಂಧ್ರಗಳು"], explanation: "ಹಸಿರು ಸಸ್ಯಗಳು ಉತ್ಪಾದಕರಾಗಿವೆ." }
    },
    {
      id: "sci-015",
      topic: "Water cycle",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 0,
      en: { question: "The release of water vapor from microscopic pores in plant leaves is known as:", options: ["Transpiration", "Precipitation", "Infiltration", "Condensation"], explanation: "Transpiration pulls water upwards through plant xylem while releasing vapor." },
      ta: { question: "தாவரங்களின் இலைத் துளைகள் வழியே நீர் நீராவியாக வெளியேறும் நிகழ்வு என்ன?", options: ["நீராவிப்போக்கு (Transpiration)", "மழைப்பொழிவு", "ஊடுருவல்", "ஆவி சுருங்குதல்"], explanation: "இலைகளில் இருந்து நீர் வெளியேறுவது நீராவிப்போக்கு எனப்படும்." },
      hi: { question: "पौधों की पत्तियों द्वारा जलवाष्प का बाहर निकलना क्या कहलाता है?", options: ["वाष्पोत्सर्जन (Transpiration)", "वर्षा", "अंतःस्यंदन", "संघनन"], explanation: "पत्तियों के रंध्रों से जलवाष्प निकलना वाष्पोत्सर्जन कहलाता है।" },
      te: { question: "మొక్కల ఆకుల నుండి నీరు ఆవిరిగా విడుదలయ్యే ప్రక్రియ ఏది?", options: ["భాష్పోత్సేకం (ట్రాన్స్‌పిరేషన్)", "వర్షపాతం", "ఇంకిపోవడం", "సాంద్రీకరణం"], explanation: "ఆకుల నుండి నీరు ఆవిరవడాన్ని భాష్పోత్సేకం అంటారు." },
      kn: { question: "ಸಸ್ಯದ ಎಲೆಗಳಿಂದ ನೀರಿನ ಆವಿ ಹೊರಹೋಗುವ ಪ್ರಕ್ರಿಯೆಗೆ ಏನೆನ್ನುತ್ತಾರೆ?", options: ["ಭಾಷ್ಪೋತ್ಸರ್ಜನ (Transpiration)", "ಮಳೆ", "ಇಂಗುವಿಕೆ", "ಸಾಂದ್ರೀಕರಣ"], explanation: "ಎಲೆಗಳಿಂದ ನೀರು ಆವಿಯಾಗುವುದನ್ನು ಭಾಷ್ಪೋತ್ಸರ್ಜನ ಎನ್ನಲಾಗುತ್ತದೆ." }
    }
  ],

  // =========================================================================
  // COMPUTER SCIENCE (15 Questions: Binary, Hardware, Software, Algorithms, Programming, Internet, Logic)
  // =========================================================================
  "Computer Science": [
    {
      id: "cs-001",
      topic: "Binary numbers",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Which two numerical digits form the entire binary numbering system?", options: ["1 and 2", "0 and 1", "0 and 9", "A and B"], explanation: "Digital computers represent information using binary: 0 (OFF) and 1 (ON)." },
      ta: { question: "கணினியின் பைனரி (இருநிலை) எண் அமைப்பில் உள்ள இரு எண்கள் எவை?", options: ["1 மற்றும் 2", "0 மற்றும் 1", "0 மற்றும் 9", "A மற்றும் B"], explanation: "பைனரி முறையில் 0 மற்றும் 1 மட்டுமே பயன்படுத்தப்படுகிறது." },
      hi: { question: "कंप्यूटर की बाइनरी प्रणाली में कौन से दो अंक होते हैं?", options: ["1 और 2", "0 और 1", "0 और 9", "A और B"], explanation: "बाइनरी में केवल 0 (OFF) और 1 (ON) होते हैं।" },
      te: { question: "బైనరీ విధానంలో ఉపయోగించే రెండు అంకెలు ఏవి?", options: ["1 మరియు 2", "0 మరియు 1", "0 మరియు 9", "A మరియు B"], explanation: "బైనరీలో 0 మరియు 1 అంకెలు మాత్రమే ఉంటాయి." },
      kn: { question: "ಬೈನರಿ ಪದ್ಧತಿಯಲ್ಲಿ ಬಳಸಲಾಗುವ ಎರಡು ಅಂಕಿಗಳು ಯಾವುವು?", options: ["1 ಮತ್ತು 2", "0 ಮತ್ತು 1", "0 ಮತ್ತು 9", "A ಮತ್ತು B"], explanation: "ಬೈನರಿಯಲ್ಲಿ 0 ಮತ್ತು 1 ಮಾತ್ರ ಇರುತ್ತವೆ." }
    },
    {
      id: "cs-002",
      topic: "Binary numbers",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "What is the decimal (base-10) equivalent of the binary number 101?", options: ["3", "4", "5", "6"], explanation: "(1 × 2²) + (0 × 2¹) + (1 × 2⁰) = 4 + 0 + 1 = 5." },
      ta: { question: "101 என்ற பைனரி எண்ணின் தசம (Decimal) மதிப்பு என்ன?", options: ["3", "4", "5", "6"], explanation: "101 = 4 + 0 + 1 = 5." },
      hi: { question: "बाइनरी संख्या 101 का दशमलव मान क्या है?", options: ["3", "4", "5", "6"], explanation: "101 = 4 + 0 + 1 = 5।" },
      te: { question: "101 బైనరీ సంఖ్య యొక్క దశాంశ విలువ ఎంత?", options: ["3", "4", "5", "6"], explanation: "101 = 4 + 0 + 1 = 5." },
      kn: { question: "101 ಬೈನರಿ ಸಂಖ್ಯೆಯ ದಶಮಾಂಶ ಮೌಲ್ಯ ಎಷ್ಟು?", options: ["3", "4", "5", "6"], explanation: "101 = 4 + 0 + 1 = 5." }
    },
    {
      id: "cs-003",
      topic: "Binary numbers",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 0,
      en: { question: "How many bits constitute one computer byte?", options: ["8 bits", "4 bits", "16 bits", "10 bits"], explanation: "1 Byte = 8 bits, capable of representing 256 unique digital values." },
      ta: { question: "ஒரு பைட்டில் (Byte) எத்தனை பிட்டுகள் (Bits) உள்ளன?", options: ["8 பிட்டுகள்", "4 பிட்டுகள்", "16 பிட்டுகள்", "10 பிட்டுகள்"], explanation: "1 பைட் = 8 பிட்டுகள்." },
      hi: { question: "एक बाइट में कितने बिट्स होते हैं?", options: ["8 बिट्स", "4 बिट्स", "16 बिट्स", "10 बिट्स"], explanation: "1 बाइट = 8 बिट्स।" },
      te: { question: "ఒక బైట్ (Byte) లో ఎన్ని బిట్లు ఉంటాయి?", options: ["8 బిట్లు", "4 బిట్లు", "16 బిట్లు", "10 బిట్లు"], explanation: "1 బైట్ = 8 బిట్లు." },
      kn: { question: "ಒಂದು ಬೈಟ್‌ನಲ್ಲಿ ಎಷ್ಟು ಬಿಟ್‌ಗಳಿರುತ್ತವೆ?", options: ["8 ಬಿಟ್‌ಗಳು", "4 ಬಿಟ್‌ಗಳು", "16 ಬಿಟ್‌ಗಳು", "10 ಬಿಟ್‌ಗಳು"], explanation: "1 ಬೈಟ್ = 8 ಬಿಟ್‌ಗಳು." }
    },
    {
      id: "cs-004",
      topic: "Hardware",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Which core chip is recognized as the 'Brain of the Computer'?", options: ["Hard Drive", "CPU", "Monitor", "RAM"], explanation: "The CPU (Central Processing Unit) executes program instructions and logic." },
      ta: { question: "கணினியின் 'மூளை' என அழைக்கப்படும் முதன்மை பகுதி எது?", options: ["ஹார்ட் டிரைவ்", "CPU", "மானிட்டர்", "RAM"], explanation: "CPU அனைத்து அறிவுறுத்தல்களையும் செயலாக்கும் மூளையாகும்." },
      hi: { question: "कंप्यूटर का 'मस्तिष्क' किसे कहा जाता है?", options: ["हार्ड ड्राइव", "CPU", "मॉनिटर", "RAM"], explanation: "CPU को कंप्यूटर का मस्तिष्क कहा जाता है।" },
      te: { question: "కంప్యూటర్ మెదడు అని దేనిని పిలుస్తారు?", options: ["హార్డ్ డ్రైవ్", "CPU", "మాానిటర్", "RAM"], explanation: "CPU అన్ని పనులను ప్రాసెస్ చేస్తుంది." },
      kn: { question: "ಕಂಪ್ಯೂಟರ್‌ನ 'ಮೆದುಳು' ಎಂದು ಯಾವುದನ್ನು ಕರೆಯುತ್ತಾರೆ?", options: ["ಹಾರ್ಡ್ ಡ್ರೈವ್", "CPU", "ಮಾನಿಟರ್", "RAM"], explanation: "CPU ಕಂಪ್ಯೂಟರ್‌ನ ಮೆದುಳಾಗಿದೆ." }
    },
    {
      id: "cs-005",
      topic: "Computer memory",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 0,
      en: { question: "What is the critical distinction between RAM and ROM?", options: ["RAM is volatile (temporary); ROM is non-volatile (permanent)", "RAM is permanent; ROM is temporary", "RAM stores photos only", "There is no difference"], explanation: "RAM resets when power is off; ROM preserves permanent startup firmware." },
      ta: { question: "RAM மற்றும் ROM இடையே உள்ள முக்கிய வேறுபாடு என்ன?", options: ["RAM தற்காலிக நினைவகம்; ROM நிரந்தர நினைவகம்", "RAM நிரந்தரமானது; ROM தற்காலிகமானது", "RAM புகைப்படங்களை மட்டுமே சேமிக்கும்", "இரண்டும் ஒன்றே"], explanation: "மின்சாரம் நிறுத்தப்பட்டால் RAM தகவல்கள் அழியும்; ROM நிரந்தரமாக இருக்கும்." },
      hi: { question: "RAM और ROM में मुख्य अंतर क्या है?", options: ["RAM अस्थायी है; ROM स्थायी है", "RAM स्थायी है; ROM अस्थायी है", "RAM केवल फोटो रखता है", "कोई अंतर नहीं"], explanation: "बिजली बंद होने पर RAM का डेटा मिट जाता है, ROM का सुरक्षित रहता है।" },
      te: { question: "RAM మరియు ROM మధ్య తేడా ఏమిటి?", options: ["RAM తాత్కాలికం; ROM శాశ్వతం", "RAM శాశ్వతం; ROM తాత్కాలికం", "తేడా లేదు", "RAM ఫోటోలకు మాత్రమే"], explanation: "RAM లో డేటా తాత్కాలికంగా ఉంటుంది, ROM లో శాశ్వతం." },
      kn: { question: "RAM ಮತ್ತು ROM ನಡುವಿನ ವ್ಯತ್ಯಾಸವೇನು?", options: ["RAM ತಾತ್ಕಾಲಿಕ; ROM ಶಾಶ್ವತ", "RAM ಶಾಶ್ವತ; ROM ತಾತ್ಕಾಲಿಕ", "ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ", "RAM ಫೋಟೋಗಳಿಗೆ ಮಾತ್ರ"], explanation: "RAM ತಾತ್ಕಾಲಿಕ ಮೆಮೊರಿ, ROM ಶಾಶ್ವತ ಮೆಮೊರಿ." }
    },
    {
      id: "cs-006",
      topic: "Algorithms",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 2,
      en: { question: "What is an 'Algorithm' in computing?", options: ["A hardware part", "A computer virus", "A step-by-step procedure to solve a problem", "A display screen"], explanation: "An algorithm is an ordered sequence of instructions that solves a computational problem." },
      ta: { question: "கணினி அறிவியலில் 'அல்காரிதம்' என்பது என்ன?", options: ["வன்பொருள் பகுதி", "வைரஸ்", "ஒரு சிக்கலை தீர்க்கும் படிப்படியான வழிமுறை", "திரை"], explanation: "அல்காரிதம் என்பது ஒரு செயலை செய்து முடிக்க உதவும் படிநிலைகளின் தொகுப்பு." },
      hi: { question: "कंप्यूटर में 'एल्गोरिदम' क्या है?", options: ["हार्डवेयर पुर्जा", "वायरस", "समस्या हल करने के क्रमबद्ध निर्देश", "स्क्रीन"], explanation: "एल्गोरिदम समस्या सुलझाने के चरणबद्ध निर्देशों का समूह है।" },
      te: { question: "అల్గోరిథం అంటే ఏమిటి?", options: ["హార్డ్‌వేర్ భాగం", "వైరస్", "సమస్యను పరిష్కరించే దశలవారీ సూచనలు", "స్క్రీన్"], explanation: "క్రమబద్ధమైన సూచనల సమాహారాన్ని అల్గోరిథం అంటారు." },
      kn: { question: "ಅಲ್ಗಾರಿದಮ್ ಎಂದರೇನು?", options: ["ಹಾರ್ಡ್‌ವೇರ್", "ವೈರಸ್", "ಸಮಸ್ಯೆ ಪರಿಹರಿಸುವ ಹಂತ-ಹಂತದ ಸೂಚನೆಗಳು", "ಸ್ಕ್ರೀನ್"], explanation: "ಕ್ರಮಬದ್ಧ ಸೂಚನೆಗಳ ಸಮೂಹವೇ ಅಲ್ಗಾರಿದಮ್." }
    },
    {
      id: "cs-007",
      topic: "Software",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Which of the following is an Operating System?", options: ["Google Chrome", "Linux", "Microsoft Excel", "Intel i7"], explanation: "Linux is an operating system that manages hardware and software resources." },
      ta: { question: "பின்வருவனவற்றில் இயக்க முறைமை (Operating System) எது?", options: ["கூகிள் குரோம்", "லினக்ஸ் (Linux)", "மைக்ரோசாப்ட் எக்செல்", "இன்டெல் i7"], explanation: "லினக்ஸ் என்பது கணினியை இயக்கும் இயங்குதளம் ஆகும்." },
      hi: { question: "इनमें से कौन सा एक ऑपरेटिंग सिस्टम (OS) है?", options: ["गूगल क्रोम", "लिनक्स (Linux)", "माइक्रोसॉफ्ट एक्सेल", "इंटेल i7"], explanation: "लिनक्स एक मुख्य ऑपरेटिंग सिस्टम है।" },
      te: { question: "వీటిలో ఆపరేటింగ్ సిస్టమ్ ఏది?", options: ["గూగుల్ క్రోమ్", "లైనక్స్ (Linux)", "ఎంఎస్ ఎక్సెల్", "ఇంటెల్ i7"], explanation: "లైనక్స్ ఒక ఆపరేటింగ్ సిస్టమ్." },
      kn: { question: "ಇವುಗಳಲ್ಲಿ ಯಾವುದು ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್ ಆಗಿದೆ?", options: ["ಗೂಗಲ್ ಕ್ರೋಮ್", "ಲಿನಕ್ಸ್ (Linux)", "ಎಕ್ಸೆಲ್", "ಇಂಟೆಲ್ i7"], explanation: "ಲಿನಕ್ಸ್ ಒಂದು ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್." }
    },
    {
      id: "cs-008",
      topic: "Internet basics",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 2,
      en: { question: "What does 'URL' stand for in web browsing?", options: ["Universal Radio Link", "United Resource List", "Uniform Resource Locator", "User Routing Line"], explanation: "A URL identifies the address of an online or local resource." },
      ta: { question: "வலை முகவரியில் 'URL' என்பதன் விரிவாக்கம் என்ன?", options: ["Universal Radio Link", "United Resource List", "Uniform Resource Locator", "User Routing Line"], explanation: "URL என்பது வளத்தின் சரியான முகவரியைக் குறிக்கிறது." },
      hi: { question: "वेबसाइट पते में 'URL' का पूर्ण रूप क्या है?", options: ["Universal Radio Link", "United Resource List", "Uniform Resource Locator", "User Routing Line"], explanation: "URL किसी वेब संसाधन का मानक पता होता है।" },
      te: { question: "URL పూర్తి రూపం ఏమిటి?", options: ["Universal Radio Link", "United Resource List", "Uniform Resource Locator", "User Routing Line"], explanation: "URL అనేది వెబ్ చిరునామా." },
      kn: { question: "URL ನ ವಿಸ್ತೃತ ರೂಪವೇನು?", options: ["Universal Radio Link", "United Resource List", "Uniform Resource Locator", "User Routing Line"], explanation: "URL ವೆಬ್ ವಿಳಾಸವನ್ನು ಸೂಚಿಸುತ್ತದೆ." }
    },
    {
      id: "cs-009",
      topic: "Internet basics",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 1,
      en: { question: "In an offline local Wi-Fi hub like EDU-BOX, which service automatically hands out IP addresses to tablets?", options: ["HTTP", "DHCP", "FTP", "DNS"], explanation: "DHCP (Dynamic Host Configuration Protocol) assigns local IP addresses without needing internet." },
      ta: { question: "EDU-BOX போன்ற ஆஃப்லைன் Wi-Fi மையத்தில் சாதனங்களுக்கு IP முகவரி வழங்கும் சேவை எது?", options: ["HTTP", "DHCP", "FTP", "DNS"], explanation: "DHCP நெறிமுறை அனைத்து கருவிகளுக்கும் உள்ளூர் IP-ஐ ஒதுக்குகிறது." },
      hi: { question: "ऑफलाइन वाई-फाई हब में उपकरणों को IP एड्रेस कौन सा प्रोटोकॉल आवंटित करता है?", options: ["HTTP", "DHCP", "FTP", "DNS"], explanation: "DHCP प्रोटोकॉल स्थानीय नेटवर्क पर IP एड्रेस देता है।" },
      te: { question: "ఆఫ్‌లైన్ Wi-Fi లో పరికరాలకు IP అడ్రస్‌లను కేటాయించేది ఏది?", options: ["HTTP", "DHCP", "FTP", "DNS"], explanation: "DHCP ప్రోటోకాల్ IP లను కేటాయిస్తుంది." },
      kn: { question: "ಆಫ್‌ಲೈನ್ Wi-Fi ನಲ್ಲಿ ಸಾಧನಗಳಿಗೆ IP ವಿಳಾಸ ನೀಡುವ ಪ್ರೋಟೋಕಾಲ್ ಯಾವುದು?", options: ["HTTP", "DHCP", "FTP", "DNS"], explanation: "DHCP ಪ್ರೋಟೋಕಾಲ್ IP ನೀಡುತ್ತದೆ." }
    },
    {
      id: "cs-010",
      topic: "Programming basics",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 3,
      en: { question: "What is a 'variable' used for in computer programming?", options: ["Play music", "Clear screen", "Cool the processor", "Store and label data in memory"], explanation: "A variable holds a value (number, text) in computer memory with an identifier name." },
      ta: { question: "கணினி நிரலாக்கத்தில் 'மாறி' (Variable) எதற்காக பயன்படுகிறது?", options: ["பாடல் இசைக்க", "திரை துடைக்க", "குளிரூட்ட", "நினைவகத்தில் தகவலை சேமிக்க"], explanation: "மாறி என்பது மதிப்புகளை சேமித்து வைக்கும் கொள்கலன் போன்றது." },
      hi: { question: "प्रोग्रामिंग में 'वेरिएबल' का क्या कार्य है?", options: ["गाने बजाना", "स्क्रीन साफ करना", "पंखा चलाना", "डेटा को मेमोरी में स्टोर करना"], explanation: "वेरिएबल डेटा मानों को मेमोरी में सहेजने के लिए उपयोग होता है।" },
      te: { question: "ప్రోగ్రామింగ్‌లో 'వేరియబుల్' దేనికి ఉపయోగపడుతుంది?", options: ["సంగీతం కోసం", "స్క్రీన్ కోసం", "కూలర్ కోసం", "డేటాను మెమరీలో దాచడానికి"], explanation: "వేరియబుల్ డేటాను నిల్వ చేయడానికి ఉపయోగపడుతుంది." },
      kn: { question: "ಪ್ರೋಗ್ರಾಮಿಂಗ್‌ನಲ್ಲಿ 'ವೇರಿಯೇಬಲ್' ನ ಕೆಲಸವೇನು?", options: ["ಹಾಡು ಕೇಳಲು", "ಸ್ಕ್ರೀನ್ ಕ್ಲೀನ್ ಮಾಡಲು", "ಫ್ಯಾನ್ ತಿರುಗಿಸಲು", "ಡೇಟಾವನ್ನು ಮೆಮೊರಿಯಲ್ಲಿ ಇಡಲು"], explanation: "ವೇರಿಯೇಬಲ್ ಡೇಟಾ ಸಂಗ್ರಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ." }
    },
    {
      id: "cs-011",
      topic: "Programming basics",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 1,
      en: { question: "If a loop starts with i = 0 and repeats while i < 5, how many times will it run?", options: ["4 times", "5 times", "6 times", "0 times"], explanation: "It iterates for i = 0, 1, 2, 3, and 4 (exactly 5 times)." },
      ta: { question: "i = 0 என தொடங்கி, i < 5 வரை இயங்கும் ஒரு லூப் எத்தனை முறை சுழலும்?", options: ["4 முறை", "5 முறை", "6 முறை", "0 முறை"], explanation: "i = 0, 1, 2, 3, 4 என மொத்தம் 5 முறை இயங்கும்." },
      hi: { question: "यदि कोई लूप i = 0 से i < 5 तक चलता है, तो यह कितनी बार चलेगा?", options: ["4 बार", "5 बार", "6 बार", "0 बार"], explanation: "i = 0, 1, 2, 3, 4 के लिए कुल 5 बार चलेगा।" },
      te: { question: "i = 0 నుండి i < 5 వరకు నడిచే లూప్ ఎన్నిసార్లు తిరుగుతుంది?", options: ["4 సార్లు", "5 సార్లు", "6 సార్లు", "0 సార్లు"], explanation: "0, 1, 2, 3, 4 మొత్తం 5 సార్లు తిరుగుతుంది." },
      kn: { question: "i = 0 ನಿಂದ i < 5 ವರೆಗೆ ಚಲಿಸುವ ಲೂಪ್ ಎಷ್ಟು ಬಾರಿ ರನ್ ಆಗುತ್ತದೆ?", options: ["4 ಬಾರಿ", "5 ಬಾರಿ", "6 ಬಾರಿ", "0 ಬಾರಿ"], explanation: "0, 1, 2, 3, 4 ಒಟ್ಟು 5 ಬಾರಿ ಚಲಿಸುತ್ತದೆ." }
    },
    {
      id: "cs-012",
      topic: "Logic",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 1,
      en: { question: "In Boolean logic gates, what is the output of: TRUE AND FALSE?", options: ["TRUE", "FALSE", "ERROR", "NULL"], explanation: "An AND gate requires all inputs to be TRUE; since one is FALSE, output is FALSE." },
      ta: { question: "பூலியன் தர்க்கத்தில் TRUE AND FALSE என்பதன் முடிவு என்ன?", options: ["TRUE", "FALSE", "ERROR", "NULL"], explanation: "AND வாயிலில் ஒன்று FALSE என்றாலும் விடை FALSE ஆகும்." },
      hi: { question: "बूलियन तर्क में TRUE AND FALSE का परिणाम क्या होगा?", options: ["TRUE", "FALSE", "ERROR", "NULL"], explanation: "AND गेट में एक भी इनपुट FALSE होने पर उत्तर FALSE होता है।" },
      te: { question: "బూలియన్ లాజిక్‌లో TRUE AND FALSE ఫలితం ఏమిటి?", options: ["TRUE", "FALSE", "ERROR", "NULL"], explanation: "AND గేట్‌లో ఒకటి FALSE అయినా ఫలితం FALSE." },
      kn: { question: "ಬೂಲಿಯನ್ ತರ್ಕದಲ್ಲಿ TRUE AND FALSE ನ ಫಲಿತಾಂಶವೇನು?", options: ["TRUE", "FALSE", "ERROR", "NULL"], explanation: "AND ಗೇಟ್‌ನಲ್ಲಿ ಒಂದು FALSE ಆದರೂ ಉತ್ತರ FALSE." }
    },
    {
      id: "cs-013",
      topic: "Logic",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "Which logical operator flips a boolean condition from TRUE to FALSE?", options: ["AND", "OR", "NOT", "XOR"], explanation: "The NOT operator inverts the truth value of an input." },
      ta: { question: "TRUE என்பதை FALSE என தலைகீழாக மாற்றும் தர்க்கக் குறியீடு எது?", options: ["AND", "OR", "NOT", "XOR"], explanation: "NOT குறியீடு உண்மையை பொய்யாகவும், பொய்யை உண்மையாகவும் மாற்றும்." },
      hi: { question: "कौन सा ऑपरेटर TRUE को FALSE में बदलता है?", options: ["AND", "OR", "NOT", "XOR"], explanation: "NOT ऑपरेटर मान को उल्टा कर देता है।" },
      te: { question: "TRUE ని FALSE గా మార్చే లాజిక్ ఏది?", options: ["AND", "OR", "NOT", "XOR"], explanation: "NOT ఆపరేటర్ విలువను తిరగవేస్తుంది." },
      kn: { question: "TRUE ಅನ್ನು FALSE ಗೆ ತಿರುಗಿಸುವ ಆಪರೇಟರ್ ಯಾವುದು?", options: ["AND", "OR", "NOT", "XOR"], explanation: "NOT ಆಪರೇಟರ್ ಮೌಲ್ಯವನ್ನು ತಿರುವು ಮುರುವು ಮಾಡುತ್ತದೆ." }
    },
    {
      id: "cs-014",
      topic: "Input/output devices",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 0,
      en: { question: "Which of the following is strictly an INPUT device?", options: ["Keyboard", "Printer", "Monitor", "Speaker"], explanation: "Keyboards send user keystrokes into the computer as data." },
      ta: { question: "பின்வருவனவற்றில் உள்ளீட்டுச் சாதனம் (Input device) எது?", options: ["விசைப்பலகை (Keyboard)", "அச்சுப்பொறி (Printer)", "மானிட்டர்", "ஸ்பீக்கர்"], explanation: "விசைப்பலகை தகவல்களை கணினிக்கு அனுப்பும் உள்ளீட்டு சாதனம்." },
      hi: { question: "इनमें से कौन सा इनपुट डिवाइस (Input Device) है?", options: ["कीबोर्ड", "प्रिंटर", "मॉनिटर", "स्पीकर"], explanation: "कीबोर्ड कंप्यूटर में डेटा इनपुट करने के काम आता है।" },
      te: { question: "వీటిలో ఇన్‌పుట్ పరికరం ఏది?", options: ["కీబోర్డ్", "ప్రింటర్", "మాానిటర్", "స్పీకర్"], explanation: "కీబోర్డ్ ద్వారా డేటాను ఇన్‌పుట్ చేస్తారు." },
      kn: { question: "ಇವುಗಳಲ್ಲಿ ಇನ್‌ಪುಟ್ ಸಾಧನ ಯಾವುದು?", options: ["ಕೀಬೋರ್ಡ್", "ಪ್ರಿಂಟರ್", "ಮಾನಿಟರ್", "ಸ್ಪೀಕರ್"], explanation: "ಕೀಬೋರ್ಡ್ ಇನ್‌ಪುಟ್ ಸಾಧನವಾಗಿದೆ." }
    },
    {
      id: "cs-015",
      topic: "Data",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Approximately how many bytes are in 1 Kilobyte (KB) in standard binary computing?", options: ["100 bytes", "1024 bytes", "500 bytes", "2048 bytes"], explanation: "In binary computing, 1 KB = 2¹⁰ bytes = 1024 bytes." },
      ta: { question: "கணினி கணக்கீட்டில் 1 கிலோபைட் (KB) என்பது எத்தனை பைட்டுகளுக்கு சமம்?", options: ["100 பைட்டுகள்", "1024 பைட்டுகள்", "500 பைட்டுகள்", "2048 பைட்டுகள்"], explanation: "1 KB = 2¹⁰ = 1024 பைட்டுகள்." },
      hi: { question: "कंप्यूटिंग में 1 किलोबाइट (KB) में कितने बाइट्स होते हैं?", options: ["100", "1024", "500", "2048"], explanation: "1 KB = 1024 बाइट्स होते हैं।" },
      te: { question: "1 కిలోబైట్ (KB) లో ఎన్ని బైట్లు ఉంటాయి?", options: ["100", "1024", "500", "2048"], explanation: "1 KB = 1024 బైట్లు." },
      kn: { question: "1 ಕಿಲೋಬೈಟ್ (KB) ನಲ್ಲಿ ಎಷ್ಟು ಬೈಟ್‌ಗಳಿರುತ್ತವೆ?", options: ["100", "1024", "500", "2048"], explanation: "1 KB = 1024 ಬೈಟ್‌ಗಳು." }
    }
  ],

  // =========================================================================
  // ENGLISH (15 Questions: Verbs, Tenses, Vocabulary, Grammar, Sentence Correction, Nouns, Reading)
  // =========================================================================
  English: [
    {
      id: "eng-001",
      topic: "Nouns",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 2,
      en: { question: "Identify the NOUN in this sentence: 'The clever student solved the difficult puzzle.'", options: ["clever", "solved", "student", "difficult"], explanation: "'Student' is a naming word (noun) referring to a person." },
      ta: { question: "'The clever student solved the difficult puzzle' என்ற வாக்கியத்தில் பெயர்ச்சொல் (Noun) எது?", options: ["clever", "solved", "student", "difficult"], explanation: "'Student' (மாணவர்) என்பது பெயர்ச்சொல் ஆகும்." },
      hi: { question: "'The clever student solved the difficult puzzle' वाक्य में संज्ञा (Noun) कौन सा है?", options: ["clever", "solved", "student", "difficult"], explanation: "'Student' (विद्यार्थी) एक संज्ञा है।" },
      te: { question: "ఈ వాక్యంలో నామవాచకం (Noun) ఏది: 'The clever student solved the difficult puzzle.'", options: ["clever", "solved", "student", "difficult"], explanation: "'student' అనేది నామవాచకం." },
      kn: { question: "'The clever student solved the difficult puzzle' ವಾಕ್ಯದಲ್ಲಿ ನಾಮಪದ (Noun) ಯಾವುದು?", options: ["clever", "solved", "student", "difficult"], explanation: "'student' (ವಿದ್ಯಾರ್ಥಿ) ನಾಮಪದವಾಗಿದೆ." }
    },
    {
      id: "eng-002",
      topic: "Grammar",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Choose the correct pronoun: 'Ravi and ___ went to the local learning hub.'", options: ["me", "I", "myself", "us"], explanation: "As part of the compound subject, the subjective case pronoun 'I' is grammatically correct." },
      ta: { question: "சரியான பிரதிப்பெயர்ச்சொல் எது: 'Ravi and ___ went to the local learning hub.'", options: ["me", "I", "myself", "us"], explanation: "எழுவாய் இடத்தில் 'I' வர வேண்டும்." },
      hi: { question: "उचित सर्वनाम चुनें: 'Ravi and ___ went to the local learning hub.'", options: ["me", "I", "myself", "us"], explanation: "कर्ता के रूप में 'I' सही सर्वनाम है।" },
      te: { question: "సరైన పదం ఎంచుకోండి: 'Ravi and ___ went to the local learning hub.'", options: ["me", "I", "myself", "us"], explanation: "సబ్జెక్ట్‌గా 'I' సరిపోతుంది." },
      kn: { question: "ಸರಿಯಾದ ಪದವನ್ನು ಆರಿಸಿ: 'Ravi and ___ went to the local learning hub.'", options: ["me", "I", "myself", "us"], explanation: "ಕರ್ತೃ ಸ್ಥಾನದಲ್ಲಿ 'I' ಬರುತ್ತದೆ." }
    },
    {
      id: "eng-003",
      topic: "Tenses",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "Identify the tense: 'She has completed all her science assignments.'", options: ["Simple Present", "Simple Past", "Present Perfect", "Past Continuous"], explanation: "'has + past participle (completed)' signifies Present Perfect tense." },
      ta: { question: "'She has completed all her science assignments' என்பது எந்த காலத்தைக் குறிக்கிறது?", options: ["Simple Present", "Simple Past", "Present Perfect", "Past Continuous"], explanation: "'has + completed' என்பது Present Perfect காலமாகும்." },
      hi: { question: "'She has completed all her science assignments' में कौन सा काल है?", options: ["Simple Present", "Simple Past", "Present Perfect", "Past Continuous"], explanation: "'has + V3' Present Perfect Tense दर्शाता है।" },
      te: { question: "'She has completed all her science assignments' ఏ కాలంలో ఉంది?", options: ["Simple Present", "Simple Past", "Present Perfect", "Past Continuous"], explanation: "'has + completed' అనేది Present Perfect టెన్స్." },
      kn: { question: "'She has completed all her science assignments' ಯಾವ ಕಾಲದಲ್ಲಿದೆ?", options: ["Simple Present", "Simple Past", "Present Perfect", "Past Continuous"], explanation: "'has + completed' ಎನ್ನುವುದು Present Perfect ಕಾಲ." }
    },
    {
      id: "eng-004",
      topic: "Tenses",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "What is the past tense form of the irregular verb 'catch'?", options: ["Catched", "Caught", "Catching", "Cought"], explanation: "The irregular past tense of catch is 'caught'." },
      ta: { question: "'catch' என்ற சொல்லின் இறந்த காலம் என்ன?", options: ["Catched", "Caught", "Catching", "Cought"], explanation: "'catch' என்பதன் இறந்த காலம் 'caught' ஆகும்." },
      hi: { question: "'catch' क्रिया का भूतकाल रूप क्या है?", options: ["Catched", "Caught", "Catching", "Cought"], explanation: "'catch' का भूतकाल 'caught' होता है।" },
      te: { question: "'catch' యొక్క భూతకాల రూపం ఏది?", options: ["Catched", "Caught", "Catching", "Cought"], explanation: "'catch' కి పాస్ట్ టెన్స్ 'caught'." },
      kn: { question: "'catch' ಕ್ರಿಯಾಪದದ ಭೂತಕಾಲ ಯಾವುದು?", options: ["Catched", "Caught", "Catching", "Cought"], explanation: "'catch' ನ ಭೂತಕಾಲ 'caught'." }
    },
    {
      id: "eng-005",
      topic: "Verbs",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 3,
      en: { question: "Which sentence displays correct subject-verb agreement?", options: ["The students plays football.", "He go to school.", "They is watching.", "She studies mathematics."], explanation: "Singular subject 'She' agrees with singular verb 'studies'." },
      ta: { question: "சரியான வினைச்சொல் உடன்பாடு கொண்ட வாக்கியம் எது?", options: ["The students plays football.", "He go to school.", "They is watching.", "She studies mathematics."], explanation: "'She' என்ற ஒருமைக்கு 'studies' சரியானது." },
      hi: { question: "व्याकरण की दृष्टि से सही कर्ता-क्रिया वाला वाक्य कौन सा है?", options: ["The students plays football.", "He go to school.", "They is watching.", "She studies mathematics."], explanation: "एकवचन 'She' के साथ क्रिया 'studies' आती है।" },
      te: { question: "సరిగ్గా ఉన్న వాక్యం ఏది?", options: ["The students plays football.", "He go to school.", "They is watching.", "She studies mathematics."], explanation: "'She' కి 'studies' సరైనది." },
      kn: { question: "ಸರಿಯಾದ ವಾಕ್ಯ ಯಾವುದು?", options: ["The students plays football.", "He go to school.", "They is watching.", "She studies mathematics."], explanation: "'She' ಜತೆ 'studies' ಸರಿಯಾದ ಕ್ರಿಯಾಪದ." }
    },
    {
      id: "eng-006",
      topic: "Verbs",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 0,
      en: { question: "Which sentence represents FUTURE tense?", options: ["I will play football tomorrow.", "I played football yesterday.", "I play football daily.", "I am playing football."], explanation: "'will play' indicates an action that will take place in the future." },
      ta: { question: "எதிர்காலத்தை (Future tense) குறிக்கும் வாக்கியம் எது?", options: ["I will play football tomorrow.", "I played football yesterday.", "I play football daily.", "I am playing football."], explanation: "'will play' என்பது எதிர்காலத்தைக் குறிக்கிறது." },
      hi: { question: "भविष्य काल (Future Tense) का वाक्य कौन सा है?", options: ["I will play football tomorrow.", "I played football yesterday.", "I play football daily.", "I am playing football."], explanation: "'will play' भविष्य काल को दर्शाता है।" },
      te: { question: "భవిష్యత్ కాలాన్ని (Future tense) తెలిపే వాక్యం ఏది?", options: ["I will play football tomorrow.", "I played football yesterday.", "I play football daily.", "I am playing football."], explanation: "'will play' భవిష్యత్తును సూచిస్తుంది." },
      kn: { question: "ಭವಿಷ್ಯತ್ ಕಾಲವನ್ನು (Future tense) ಸೂಚಿಸುವ ವಾಕ್ಯ ಯಾವುದು?", options: ["I will play football tomorrow.", "I played football yesterday.", "I play football daily.", "I am playing football."], explanation: "'will play' ಭವಿಷ್ಯತ್ ಕಾಲವಾಗಿದೆ." }
    },
    {
      id: "eng-007",
      topic: "Vocabulary",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "What is a SYNONYM for 'abundant'?", options: ["Scarce", "Tiny", "Plentiful", "Narrow"], explanation: "'Abundant' means available in large quantities, synonymous with 'plentiful'." },
      ta: { question: "'abundant' என்ற சொல்லின் ஒத்த சொல் (Synonym) எது?", options: ["Scarce", "Tiny", "Plentiful", "Narrow"], explanation: "'abundant' என்றால் ஏராளமாக இருப்பது ('plentiful')." },
      hi: { question: "'abundant' का पर्यायवाची शब्द क्या है?", options: ["Scarce", "Tiny", "Plentiful", "Narrow"], explanation: "'Abundant' का अर्थ प्रचुर होता है, अतः 'Plentiful' सही है।" },
      te: { question: "'abundant' కి పర్యాయపదం ఏది?", options: ["Scarce", "Tiny", "Plentiful", "Narrow"], explanation: "'abundant' అంటే సమృద్ధిగా ఉండటం ('plentiful')." },
      kn: { question: "'abundant' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ["Scarce", "Tiny", "Plentiful", "Narrow"], explanation: "'abundant' ಎಂದರೆ ಹೇರಳವಾಗಿರುವುದು ('plentiful')." }
    },
    {
      id: "eng-008",
      topic: "Vocabulary",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 1,
      en: { question: "What is the ANTONYM of 'transparent'?", options: ["Clear", "Opaque", "Bright", "Thin"], explanation: "'Opaque' blocks light completely, the opposite of transparent." },
      ta: { question: "'transparent' (ஒளி ஊடுருவும்) என்பதன் எதிர்ச்சொல் எது?", options: ["Clear", "Opaque", "Bright", "Thin"], explanation: "transparent-ன் எதிர்ச்சொல் opaque (ஒளி புகாதது)." },
      hi: { question: "'transparent' (पारदर्शी) का विलोम शब्द क्या है?", options: ["Clear", "Opaque", "Bright", "Thin"], explanation: "'Transparent' का विलोम 'Opaque' (अपारदर्शी) होता है।" },
      te: { question: "'transparent' కి వ్యతిరేక పదం ఏది?", options: ["Clear", "Opaque", "Bright", "Thin"], explanation: "'transparent' కి వ్యతిరేకం 'opaque'." },
      kn: { question: "'transparent' (ಪಾರದರ್ಶಕ) ದ ವಿರುದ್ಧ ಪದ ಯಾವುದು?", options: ["Clear", "Opaque", "Bright", "Thin"], explanation: "'transparent' ನ ವಿರುದ್ಧ ಪದ 'opaque'." }
    },
    {
      id: "eng-009",
      topic: "Adjectives",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 0,
      en: { question: "Identify the ADJECTIVE: 'The silent village had an active learning hub.'", options: ["silent", "village", "had", "hub"], explanation: "'Silent' describes the noun village, making it an adjective." },
      ta: { question: "'The silent village had an active learning hub' என்பதில் பெயரடை (Adjective) எது?", options: ["silent", "village", "had", "hub"], explanation: "'silent' என்பது கிராமத்தை விவரிக்கும் பெயரடை ஆகும்." },
      hi: { question: "'The silent village had an active learning hub' में विशेषण (Adjective) क्या है?", options: ["silent", "village", "had", "hub"], explanation: "'Silent' गांव की विशेषता बताता है, अतः विशेषण है।" },
      te: { question: "ఈ వాక్యంలో విశేషణం (Adjective) ఏది?", options: ["silent", "village", "had", "hub"], explanation: "'silent' అనేది విశేషణం." },
      kn: { question: "ವಾಕ್ಯದಲ್ಲಿ ಗುಣವಾಚಕ (Adjective) ಯಾವುದು?", options: ["silent", "village", "had", "hub"], explanation: "'silent' ಗುಣವಾಚಕವಾಗಿದೆ." }
    },
    {
      id: "eng-010",
      topic: "Prepositions",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Fill in the blank: 'The tablet was placed ___ the wooden table.'", options: ["at", "on", "into", "between"], explanation: "'On' describes contact with an upper surface." },
      ta: { question: "சரியான உருபுச்சொல்லை நிரப்புக: 'The tablet was placed ___ the wooden table.'", options: ["at", "on", "into", "between"], explanation: "மேற்பரப்பில் வைக்கப்படும் போது 'on' வரும்." },
      hi: { question: "रिक्त स्थान भरें: 'The tablet was placed ___ the wooden table.'", options: ["at", "on", "into", "between"], explanation: "मेज की सतह पर होने के कारण 'on' सही है।" },
      te: { question: "ఖాళీని పూరించండి: 'The tablet was placed ___ the wooden table.'", options: ["at", "on", "into", "between"], explanation: "బల్ల ఉపరితలంపై ఉండటానికి 'on' వాడతాము." },
      kn: { question: "ಖಾಲಿ ಜಾಗವನ್ನು ಭರ್ತಿ ಮಾಡಿ: 'The tablet was placed ___ the wooden table.'", options: ["at", "on", "into", "between"], explanation: "ಮೇಲ್ಮೈ ಮೇಲೆ ಇರಿಸಲು 'on' ಬಳಸಲಾಗುತ್ತದೆ." }
    },
    {
      id: "eng-011",
      topic: "Sentence correction",
      difficulty: "Medium",
      grade: 8,
      correctAnswer: 2,
      en: { question: "Which sentence is written without grammatical errors?", options: ["Their going to the lab.", "There books are on table.", "They're excited about the offline quiz.", "They is very happy."], explanation: "'They're' properly contracts 'They are'." },
      ta: { question: "இலக்கணப் பிழையின்றி எழுதப்பட்ட வாக்கியம் எது?", options: ["Their going to the lab.", "There books are on table.", "They're excited about the offline quiz.", "They is very happy."], explanation: "C வாக்கியத்தில் 'They're' சரியாகப் பயன்படுத்தப்பட்டுள்ளது." },
      hi: { question: "व्याकरणिक दृष्टि से सही वाक्य कौन सा है?", options: ["Their going to the lab.", "There books are on table.", "They're excited about the offline quiz.", "They is very happy."], explanation: "वाक्य C में 'They're' (They are) का सही प्रयोग है।" },
      te: { question: "దోషాలు లేని సరైన వాక్యం ఏది?", options: ["Their going to the lab.", "There books are on table.", "They're excited about the offline quiz.", "They is very happy."], explanation: "C లో 'They're' సరిగ్గా వాడబడింది." },
      kn: { question: "ಸರಿಯಾದ ವಾಕ್ಯ ಯಾವುದು?", options: ["Their going to the lab.", "There books are on table.", "They're excited about the offline quiz.", "They is very happy."], explanation: "ವಾಕ್ಯ C ಸರಿಯಾಗಿದೆ." }
    },
    {
      id: "eng-012",
      topic: "Sentence correction",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 1,
      en: { question: "Choose the correct verb: 'Neither the teacher nor the students ___ present.'", options: ["was", "were", "is", "has"], explanation: "With 'neither... nor', the verb agrees with the closer plural subject ('students' -> 'were')." },
      ta: { question: "சரியான சொல்லைத் தேர்ந்தெடுக்க: 'Neither the teacher nor the students ___ present.'", options: ["was", "were", "is", "has"], explanation: "'students' என்ற பன்மைக்கு ஏற்ப 'were' வரும்." },
      hi: { question: "उचित क्रिया चुनें: 'Neither the teacher nor the students ___ present.'", options: ["was", "were", "is", "has"], explanation: "निकटवर्ती बहुवचन कर्ता 'students' के अनुसार 'were' आएगा।" },
      te: { question: "సరైన పదం ఎంచుకోండి: 'Neither the teacher nor the students ___ present.'", options: ["was", "were", "is", "has"], explanation: "'students' బహువచనం కాబట్టి 'were' వస్తుంది." },
      kn: { question: "ಸರಿಯಾದ ಕ್ರಿಯಾಪದವನ್ನು ಆರಿಸಿ: 'Neither the teacher nor the students ___ present.'", options: ["was", "were", "is", "has"], explanation: "'students' ಬಹುವಚನಕ್ಕೆ 'were' ಹೊಂದುತ್ತದೆ." }
    },
    {
      id: "eng-013",
      topic: "Sentence formation",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 0,
      en: { question: "Arrange the words into a sensible sentence: 'read / every day / books / We'", options: ["We read books every day.", "Every day read books we.", "Books read we every day.", "Read we books every day."], explanation: "Standard Subject + Verb + Object word order: 'We read books every day.'" },
      ta: { question: "சொற்களை ஒழுங்குபடுத்தி சரியான வாக்கியமாக்குக: 'read / every day / books / We'", options: ["We read books every day.", "Every day read books we.", "Books read we every day.", "Read we books every day."], explanation: "ஆங்கிலத்தில் எழுவாய் + பயனிலை + செயப்படுபொருள் அமைப்பில் 'We read books every day' சரியானது." },
      hi: { question: "शब्दों को सही क्रम में लगाकर अर्थपूर्ण वाक्य बनाएं: 'read / every day / books / We'", options: ["We read books every day.", "Every day read books we.", "Books read we every day.", "Read we books every day."], explanation: "सही वाक्य क्रम: 'We read books every day.'।" },
      te: { question: "సరిగ్గా అమర్చిన వాక్యం ఏది: 'read / every day / books / We'", options: ["We read books every day.", "Every day read books we.", "Books read we every day.", "Read we books every day."], explanation: "'We read books every day' సరైన క్రమం." },
      kn: { question: "ಸರಿಯಾದ ವಾಕ್ಯ ರಚನೆ ಯಾವುದು: 'read / every day / books / We'", options: ["We read books every day.", "Every day read books we.", "Books read we every day.", "Read we books every day."], explanation: "'We read books every day' ಸರಿಯಾದ ವಾಕ್ಯ." }
    },
    {
      id: "eng-014",
      topic: "Reading comprehension",
      difficulty: "Easy",
      grade: 8,
      correctAnswer: 1,
      en: { question: "'The century-old banyan tree sheltered travelers and birds from scorching summer heat.' Why is the tree valued?", options: ["It bears golden fruits", "It provides cooling shelter and shade", "It requires zero soil", "It talks to children"], explanation: "As explicitly stated, it sheltered travelers and birds from heat." },
      ta: { question: "'நூற்றாண்டு பழமையான ஆலமரம் பயணிகளுக்கும் பறவைகளுக்கும் கோடை வெயிலில் நிழல் தந்தது.' ஆலமரம் ஏன் போற்றப்படுகிறது?", options: ["அது தங்க கனி தரும்", "அது குளிர்ச்சியான நிழலும் அடைக்கலமும் தந்தது", "அதற்கு மண்ணே வேண்டாம்", "அது பேசும்"], explanation: "பத்தியில் கூறியபடி, அது வெயிலில் நிழலும் அடைக்கலமும் தந்தது." },
      hi: { question: "'बरगद के पेड़ ने भीषण गर्मी में यात्रियों और पक्षियों को छाया दी।' पेड़ क्यों महत्वपूर्ण है?", options: ["यह सोने के फल देता है", "यह शीतलता और छाया प्रदान करता है", "इसे मिट्टी की जरूरत नहीं", "यह बातें करता है"], explanation: "गद्यांश के अनुसार, यह छाया और आश्रय देता है।" },
      te: { question: "మర్రిచెట్టు ఎందుకు విలువైనది?", options: ["బంగారు పండ్లు ఇస్తుంది", "చల్లని నీడను, ఆశ్రయాన్ని ఇస్తుంది", "మట్టి అవసరం లేదు", "మాట్లాడుతుంది"], explanation: "పాసేజ్ ప్రకారం ప్రయాణికులకు చల్లని నీడను ఇస్తుంది." },
      kn: { question: "ಆಲದ ಮರ ಏಕೆ ಮುಖ್ಯವಾಗಿದೆ?", options: ["ಬಂಗಾರದ ಹಣ್ಣು ಕೊಡುತ್ತದೆ", "ತಂಪಾದ ನೆರಳು ಮತ್ತು ಆಶ್ರಯ ನೀಡುತ್ತದೆ", "ಮಣ್ಣೇ ಬೇಡ", "ಮಾತನಾಡುತ್ತದೆ"], explanation: "ಅದು ಜನರಿಗೆ ತಂಪಾದ ನೆರಳು ನೀಡುತ್ತದೆ." }
    },
    {
      id: "eng-015",
      topic: "Reading comprehension",
      difficulty: "Challenge",
      grade: 8,
      correctAnswer: 2,
      en: { question: "'Despite heavy storms, the lighthouse keeper kept the beacon burning through the night to steer fishing boats away from reef rocks.' What character trait does this describe?", options: ["Carelessness", "Fearfulness", "Dedication and responsibility", "Impatience"], explanation: "Enduring the storm to protect fishing boats demonstrates unwavering dedication and responsibility." },
      ta: { question: "'கடும் புயலிலும் கலங்கரை விளக்கக் காப்பாளர் படகுகளைப் பாதுகாக்க விளக்கை விடிய விடிய எரிய வைத்தார்.' இது அவரின் எந்த குணத்தைக் காட்டுகிறது?", options: ["அலட்சியம்", "பயம்", "அர்ப்பணிப்பு மற்றும் பொறுப்புணர்வு", "பொறுமையின்மை"], explanation: "புயலிலும் பிறரின் பாதுகாப்பிற்காக உழைப்பது அர்ப்பணிப்பு மற்றும் பொறுப்புணர்வைக் காட்டுகிறது." },
      hi: { question: "'तूफान के बावजूद रखवाले ने पूरी रात लाइट जलाई रखी ताकि नावें पत्थरों से न टकराएं।' यह कौन सा गुण दर्शाता है?", options: ["लापरवाही", "डर", "समर्पण और जिम्मेदारी", "अधीरता"], explanation: "कठिन परिस्थिति में दूसरों की रक्षा करना कर्तव्यनिष्ठा और समर्पण दर्शाता है।" },
      te: { question: "తుఫానులో కూడా లైట్‌హౌస్ కీపర్ లైట్ వెలిగించి ఉంచడం ఏ గుణాన్ని సూచిస్తుంది?", options: ["నిర్లక్ష్యం", "భయం", "అంకితభావం మరియు బాధ్యత", "అసహనం"], explanation: "ఇది బాధ్యత మరియు అంకితభావాన్ని సూచిస్తుంది." },
      kn: { question: "ಬಿರುಗಾಳಿಯಲ್ಲೂ ದೀಪಸ್ತಂಭದ ರಕ್ಷಕ ದೀಪವನ್ನು ಉರಿಸಿ ದೋಣಿಗಳನ್ನು ರಕ್ಷಿಸಿದ್ದು ಯಾವ ಗುಣವನ್ನು ತೋರಿಸುತ್ತದೆ?", options: ["ನಿರ್ಲಕ್ಷ್ಯ", "ಭಯ", "ಕರ್ತವ್ಯನಿಷ್ಠೆ ಮತ್ತು ಜವಾಬ್ದಾರಿ", "ಅಸಹನೆ"], explanation: "ಇದು ಜವಾಬ್ದಾರಿ ಮತ್ತು ಕರ್ತವ್ಯನಿಷ್ಠೆಯನ್ನು ತೋರಿಸುತ್ತದೆ." }
    }
  ]
};

// =========================================================================
// STRICT GETQUESTIONS API
// getQuestions(subject, language, grade, difficulty, count = 10)
// =========================================================================
window.getQuestions = function(subject = "Mathematics", language = "en", grade = 8, difficulty = "all", count = 10) {
  // Normalize subject key
  let subKey = "Mathematics";
  const sLow = (subject || "").toLowerCase();
  if (sLow.includes("sci") && !sLow.includes("comp")) subKey = "Science";
  else if (sLow.includes("comp") || sLow.includes("cs")) subKey = "Computer Science";
  else if (sLow.includes("eng")) subKey = "English";
  else subKey = "Mathematics";

  const bank = window.EDU_QUESTION_BANKS[subKey] || window.EDU_QUESTION_BANKS.Mathematics;
  
  // Normalize language
  let langKey = "en";
  const lLow = (language || "").toLowerCase();
  if (lLow.startsWith("ta") || lLow.includes("tamil")) langKey = "ta";
  else if (lLow.startsWith("hi") || lLow.includes("hindi")) langKey = "hi";
  else if (lLow.startsWith("te") || lLow.includes("telugu")) langKey = "te";
  else if (lLow.startsWith("kn") || lLow.includes("kannada")) langKey = "kn";
  else langKey = "en";

  // Filter strictly by difficulty if specified (case-insensitive)
  let pool = bank;
  if (difficulty && difficulty.toLowerCase() !== "all") {
    const diffMatch = bank.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
    if (diffMatch.length >= 3) {
      pool = diffMatch;
    }
  }

  // Shuffle without repeating within this session
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  // Remap each question into standardized object with randomized options
  return selected.map((q, idx) => {
    const content = q[langKey] || q.en;
    const rawOptions = content.options || ["A", "B", "C", "D"];
    const correctText = rawOptions[q.correctAnswer] !== undefined ? rawOptions[q.correctAnswer] : rawOptions[0];

    // Shuffle options while preserving which one is correct
    const shuffledOptions = [...rawOptions].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledOptions.indexOf(correctText);

    return {
      id: q.id,
      index: idx + 1,
      subject: subKey,
      topic: q.topic,
      difficulty: q.difficulty,
      grade: q.grade || grade,
      language: langKey,
      question: content.question,
      options: shuffledOptions,
      correctAnswer: newCorrectIndex !== -1 ? newCorrectIndex : 0,
      correctAnswerText: correctText,
      explanation: content.explanation
    };
  });
};
