/**
 * Physics Lab – Czech/English i18n
 * Usage: include this script, then call initLang() on DOMContentLoaded.
 * Add data-i18n="key" attributes to elements you want translated.
 * For attributes, use data-i18n-attr="placeholder:key" etc.
 */

const TRANSLATIONS = {
  // ── index.html ──────────────────────────────────────────────────────────
  "index.title":          { en: "Physics Lab", cs: "Fyzikální laboratoř" },
  "index.subtitle":       { en: "A premium interactive physics playground for scientific exploration.", cs: "Prémiové interaktivní fyzikální hřiště pro vědecké bádání." },
  "index.learningHub":    { en: "🎓 Learning Hub", cs: "🎓 Centrum výuky" },
  "index.knowledgeCenter":{ en: "Knowledge Center", cs: "Znalostní centrum" },
  "index.kcDesc":         { en: "Master the laws of nature and challenge your scientific intuition with our integrated learning modules.", cs: "Zvládněte přírodní zákony a otestujte svou vědeckou intuici pomocí našich integrovaných výukových modulů." },
  "index.laws":           { en: "Laws & Meanings", cs: "Zákony & Výklady" },
  "index.quizzes":        { en: "Tests & Quizzes", cs: "Testy & Kvízy" },
  "index.alpha":          { en: "Development phase: Alpha 2.0", cs: "Fáze vývoje: Alpha 2.0" },
  "index.simulations":    { en: "🔬 Simulations", cs: "🔬 Simulace" },
  "index.footer":         { en: "© Copyright - Žula Z Žulacrew", cs: "© Copyright - Žula Z Žulacrew" },

  // ── laws.html ────────────────────────────────────────────────────────────
  "laws.backToLab":       { en: "← Back to Lab", cs: "← Zpět do laboratoře" },
  "laws.brand":           { en: "PhysicsLab", cs: "FyzLabor" },
  "laws.title":           { en: "Laws & Meanings", cs: "Zákony & Výklady" },
  "laws.subtitle":        { en: "A comprehensive repository of physical laws, principles, and mathematical foundations for high school physics.", cs: "Komprehenzivní přehled fyzikálních zákonů, principů a matematických základů pro středoškolskou fyziku." },
  "laws.mechanics":       { en: "Classical Mechanics", cs: "Klasická mechanika" },
  "laws.thermo":          { en: "Thermodynamics", cs: "Termodynamika" },
  "laws.em":              { en: "Electricity & Magnetism", cs: "Elektřina & Magnetismus" },
  "laws.waves":           { en: "Optics & Waves", cs: "Optika & Vlnění" },
  "laws.modern":          { en: "Modern Physics", cs: "Moderní fyzika" },
  "laws.footer":          { en: "© 2026 PhysicsLab - High School Edition", cs: "© 2026 FyzLabor - Středoškolské vydání" },

  // Law card names / meanings / variables
  "law.newton2.name":     { en: "Newton's Second Law", cs: "Druhý Newtonův zákon" },
  "law.newton2.meaning":  { en: "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.", cs: "Zrychlení tělesa je přímo úměrné výsledné síle na něj působící a nepřímo úměrné jeho hmotnosti." },
  "law.newton2.F":        { en: "F: Net force (N)", cs: "F: Výsledná síla (N)" },
  "law.newton2.m":        { en: "m: Mass (kg)", cs: "m: Hmotnost (kg)" },
  "law.newton2.a":        { en: "a: Acceleration (m/s²)", cs: "a: Zrychlení (m/s²)" },

  "law.gravity.name":     { en: "Law of Universal Gravitation", cs: "Zákon všeobecné gravitace" },
  "law.gravity.meaning":  { en: "Every point mass attracts every other point mass by a force acting along the line intersecting both points.", cs: "Každé dvě hmotné body se přitahují silou, která působí podél přímky procházející oběma body." },
  "law.gravity.G":        { en: "G: Gravitational constant", cs: "G: Gravitační konstanta" },
  "law.gravity.m":        { en: "m₁, m₂: Masses (kg)", cs: "m₁, m₂: Hmotnosti (kg)" },
  "law.gravity.r":        { en: "r: Distance (m)", cs: "r: Vzdálenost (m)" },

  "law.work.name":        { en: "Work-Energy Theorem", cs: "Věta o práci a energii" },
  "law.work.meaning":     { en: "The work done by the net force on a particle equals the change in its kinetic energy.", cs: "Práce výsledné síly na částici se rovná změně její kinetické energie." },
  "law.work.W":           { en: "W: Work (J)", cs: "W: Práce (J)" },
  "law.work.K":           { en: "ΔK: Change in Kinetic Energy (J)", cs: "ΔK: Změna kinetické energie (J)" },

  "law.momentum.name":    { en: "Conservation of Momentum", cs: "Zákon zachování hybnosti" },
  "law.momentum.meaning": { en: "In an isolated system, the total momentum remains constant during a collision or interaction.", cs: "V izolované soustavě zůstává celková hybnost při srážce nebo vzájemném působení konstantní." },
  "law.momentum.p":       { en: "p: Momentum (kg·m/s)", cs: "p: Hybnost (kg·m/s)" },

  "law.thermo1.name":     { en: "First Law of Thermodynamics", cs: "První zákon termodynamiky" },
  "law.thermo1.meaning":  { en: "The change in internal energy of a system is equal to the heat added to the system minus the work done by the system.", cs: "Změna vnitřní energie soustavy se rovná teplu přijatému soustavou minus práci, kterou soustava vykoná." },
  "law.thermo1.U":        { en: "ΔU: Internal energy change (J)", cs: "ΔU: Změna vnitřní energie (J)" },
  "law.thermo1.Q":        { en: "Q: Heat added (J)", cs: "Q: Přijaté teplo (J)" },
  "law.thermo1.W":        { en: "W: Work done (J)", cs: "W: Vykonaná práce (J)" },

  "law.ideal.name":       { en: "Ideal Gas Law", cs: "Stavová rovnice ideálního plynu" },
  "law.ideal.meaning":    { en: "The state of an amount of gas is determined by its pressure, volume, and temperature.", cs: "Stav množství plynu je určen jeho tlakem, objemem a teplotou." },
  "law.ideal.P":          { en: "P: Pressure (Pa)", cs: "P: Tlak (Pa)" },
  "law.ideal.V":          { en: "V: Volume (m³)", cs: "V: Objem (m³)" },
  "law.ideal.n":          { en: "n: Amount of substance (mol)", cs: "n: Látkové množství (mol)" },
  "law.ideal.R":          { en: "R: Ideal gas constant", cs: "R: Plynová konstanta" },
  "law.ideal.T":          { en: "T: Temperature (K)", cs: "T: Teplota (K)" },

  "law.fourier.name":     { en: "Fourier's Law (Heat Conduction)", cs: "Fourierův zákon (vedení tepla)" },
  "law.fourier.meaning":  { en: "The time rate of heat transfer through a material is proportional to the negative gradient in the temperature.", cs: "Rychlost přenosu tepla materiálem je úměrná zápornému gradientu teploty." },
  "law.fourier.q":        { en: "q: Local heat flux density (W/m²)", cs: "q: Hustota tepelného toku (W/m²)" },
  "law.fourier.k":        { en: "k: Thermal conductivity (W/m·K)", cs: "k: Tepelná vodivost (W/m·K)" },
  "law.fourier.T":        { en: "∇T: Temperature gradient (K/m)", cs: "∇T: Teplotní gradient (K/m)" },

  "law.ohm.name":         { en: "Ohm's Law", cs: "Ohmův zákon" },
  "law.ohm.meaning":      { en: "The current through a conductor between two points is directly proportional to the voltage across the two points.", cs: "Proud procházející vodičem mezi dvěma body je přímo úměrný napětí mezi těmito body." },
  "law.ohm.V":            { en: "V: Voltage (V)", cs: "V: Napětí (V)" },
  "law.ohm.I":            { en: "I: Current (A)", cs: "I: Elektrický proud (A)" },
  "law.ohm.R":            { en: "R: Resistance (Ω)", cs: "R: Odpor (Ω)" },

  "law.coulomb.name":     { en: "Coulomb's Law", cs: "Coulombův zákon" },
  "law.coulomb.meaning":  { en: "The force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them.", cs: "Síla mezi dvěma bodovými náboji je úměrná součinu nábojů a nepřímo úměrná druhé mocnině vzdálenosti." },
  "law.coulomb.F":        { en: "F: Electric force (N)", cs: "F: Elektrická síla (N)" },
  "law.coulomb.q":        { en: "q₁, q₂: Charges (C)", cs: "q₁, q₂: Náboje (C)" },
  "law.coulomb.k":        { en: "k: Coulomb's constant", cs: "k: Coulombova konstanta" },
  "law.coulomb.r":        { en: "r: Distance (m)", cs: "r: Vzdálenost (m)" },

  "law.faraday.name":     { en: "Faraday's Law", cs: "Faradayův zákon" },
  "law.faraday.meaning":  { en: "Any change in the magnetic environment of a coil of wire will cause a voltage (EMF) to be induced in the coil.", cs: "Každá změna magnetického prostředí cívky způsobí indukci napětí (EMF) v cívce." },
  "law.faraday.e":        { en: "ε: Electromotive force (V)", cs: "ε: Elektromotorická síla (V)" },
  "law.faraday.phi":      { en: "Φ: Magnetic flux (Wb)", cs: "Φ: Magnetický tok (Wb)" },
  "law.faraday.t":        { en: "t: Time (s)", cs: "t: Čas (s)" },

  "law.snell.name":       { en: "Snell's Law", cs: "Snellův zákon" },
  "law.snell.meaning":    { en: "Describes the relationship between the angles of incidence and refraction when light passes through the boundary between two different media.", cs: "Popisuje vztah mezi úhly dopadu a lomu světla přecházejícího rozhraním dvou různých prostředí." },
  "law.snell.n":          { en: "n₁, n₂: Refractive indices", cs: "n₁, n₂: Indexy lomu" },
  "law.snell.theta":      { en: "θ₁, θ₂: Angles of incidence/refraction", cs: "θ₁, θ₂: Úhly dopadu/lomu" },

  "law.wave.name":        { en: "Wave Speed Equation", cs: "Rovnice rychlosti vlnění" },
  "law.wave.meaning":     { en: "The speed of a wave is equal to its frequency multiplied by its wavelength.", cs: "Rychlost vlnění se rovná součinu frekvence a vlnové délky." },
  "law.wave.v":           { en: "v: Wave speed (m/s)", cs: "v: Rychlost vlnění (m/s)" },
  "law.wave.f":           { en: "f: Frequency (Hz)", cs: "f: Frekvence (Hz)" },
  "law.wave.lambda":      { en: "λ: Wavelength (m)", cs: "λ: Vlnová délka (m)" },

  "law.reflection.name":  { en: "Law of Reflection", cs: "Zákon odrazu" },
  "law.reflection.meaning":{ en: "The angle of incidence is equal to the angle of reflection when a wave reflects off a surface.", cs: "Úhel dopadu se rovná úhlu odrazu, když se vlna odrazí od povrchu." },

  "law.einstein.name":    { en: "Einstein's Mass-Energy Equivalence", cs: "Einsteinova ekvivalence hmoty a energie" },
  "law.einstein.meaning": { en: "Energy and mass are different forms of the same thing; a small amount of mass can be converted into a large amount of energy.", cs: "Energie a hmotnost jsou různé formy téhož; malé množství hmoty lze přeměnit na velké množství energie." },
  "law.einstein.E":       { en: "E: Energy (J)", cs: "E: Energie (J)" },
  "law.einstein.m":       { en: "m: Mass (kg)", cs: "m: Hmotnost (kg)" },
  "law.einstein.c":       { en: "c: Speed of light (≈ 3·10⁸ m/s)", cs: "c: Rychlost světla (≈ 3·10⁸ m/s)" },

  "law.planck.name":      { en: "Planck's Relation", cs: "Planckův vztah" },
  "law.planck.meaning":   { en: "The energy of a photon is proportional to its frequency.", cs: "Energie fotonu je úměrná jeho frekvenci." },
  "law.planck.E":         { en: "E: Photon energy (J)", cs: "E: Energie fotonu (J)" },
  "law.planck.h":         { en: "h: Planck constant", cs: "h: Planckova konstanta" },
  "law.planck.f":         { en: "f: Frequency (Hz)", cs: "f: Frekvence (Hz)" },

  "law.debroglie.name":   { en: "De Broglie Wavelength", cs: "De Broglieova vlnová délka" },
  "law.debroglie.meaning":{ en: "Matter exhibits wave-like behavior; the wavelength is inversely proportional to the momentum.", cs: "Hmota vykazuje vlnové vlastnosti; vlnová délka je nepřímo úměrná hybnosti." },
  "law.debroglie.lambda": { en: "λ: Wavelength (m)", cs: "λ: Vlnová délka (m)" },
  "law.debroglie.h":      { en: "h: Planck constant", cs: "h: Planckova konstanta" },
  "law.debroglie.p":      { en: "p: Momentum (kg·m/s)", cs: "p: Hybnost (kg·m/s)" },

  // ── Simulations shared ──────────────────────────────────────────────────
  "sim.backHome":         { en: "← Home", cs: "← Domů" },
  "sim.parameters":       { en: "Parameters", cs: "Parametry" },
  "sim.pause":            { en: "PAUSE", cs: "PAUZA" },
  "sim.resume":           { en: "RESUME", cs: "POKRAČOVAT" },
  "sim.reset":            { en: "RESET", cs: "RESET" },
  "sim.learningHub":      { en: "Learning Hub", cs: "Centrum výuky" },
  "sim.laws":             { en: "Laws", cs: "Zákony" },
  "sim.quiz":             { en: "Quiz", cs: "Kvíz" },

  // ── simulation-1.html (Pendulum) ────────────────────────────────────────
  "sim1.title":           { en: "Simple Pendulum Lab", cs: "Laboratoř jednoduchého kyvadla" },
  "sim1.subtitle":        { en: "Non-linear Oscillatory Dynamics & Energy Conservation", cs: "Nelineární oscilační dynamika & zachování energie" },
  "sim1.angle":           { en: "Angle", cs: "Úhel" },
  "sim1.velocity":        { en: "Velocity", cs: "Rychlost" },
  "sim1.potentialE":      { en: "Potential E", cs: "Potenc. E" },
  "sim1.kineticE":        { en: "Kinetic E", cs: "Kinet. E" },
  "sim1.length":          { en: "Length (L)", cs: "Délka (L)" },
  "sim1.mass":            { en: "Mass (m)", cs: "Hmotnost (m)" },
  "sim1.gravity":         { en: "Gravity (g)", cs: "Gravitace (g)" },
  "sim1.damping":         { en: "Damping (b)", cs: "Tlumení (b)" },
  "sim1.dragHint":        { en: "DRAG BOB TO SET STARTING ANGLE", cs: "TÁHNĚTE ZÁVAŽÍ PRO NASTAVENÍ ÚHLU" },

  // ── simulation-2.html (Projectile) ─────────────────────────────────────
  "sim2.title":           { en: "Projectile Motion", cs: "Vrh šikmý" },
  "sim2.subtitle":        { en: "Explore how velocity, angle, gravity, and height shape a ball's trajectory", cs: "Prozkoumejte, jak rychlost, úhel, gravitace a výška ovlivňují dráhu míče" },
  "sim2.backHome":        { en: "← Back to Home", cs: "← Zpět domů" },
  "sim2.params":          { en: "Parameters", cs: "Parametry" },
  "sim2.initVel":         { en: "Initial Velocity", cs: "Počáteční rychlost" },
  "sim2.launchAngle":     { en: "Launch Angle", cs: "Úhel vrhu" },
  "sim2.gravity":         { en: "Gravity", cs: "Gravitace" },
  "sim2.initHeight":      { en: "Initial Height", cs: "Počáteční výška" },
  "sim2.standard":        { en: "Standard", cs: "Standardní" },
  "sim2.highToss":        { en: "High Toss", cs: "Vysoký vrh" },
  "sim2.fastLow":         { en: "Fast Low", cs: "Rychlý nízký" },
  "sim2.moon":            { en: "Moon", cs: "Měsíc" },
  "sim2.mars":            { en: "Mars", cs: "Mars" },
  "sim2.cliffDrop":       { en: "Cliff Drop", cs: "Pád ze skály" },
  "sim2.readyToLaunch":   { en: "Ready to launch", cs: "Připraveno ke startu" },
  "sim2.speed":           { en: "Speed:", cs: "Rychlost:" },
  "sim2.launch":          { en: "Launch", cs: "Vypustit" },
  "sim2.trail":           { en: "Trail", cs: "Stopa" },
  "sim2.results":         { en: "Results", cs: "Výsledky" },
  "sim2.maxHeight":       { en: "Max Height", cs: "Max. výška" },
  "sim2.range":           { en: "Horizontal Range", cs: "Horizontální dosah" },
  "sim2.flightTime":      { en: "Time of Flight", cs: "Doba letu" },
  "sim2.impactSpeed":     { en: "Impact Speed", cs: "Rychlost dopadu" },
  "sim2.impactAngle":     { en: "Impact Angle", cs: "Úhel dopadu" },
  "sim2.learningHub":     { en: "Learning Hub", cs: "Centrum výuky" },
  "sim2.vxConst":         { en: "Vx (constant)", cs: "Vx (konstantní)" },

  // ── simulation-3.html (Free Fall) ───────────────────────────────────────
  "sim3.title":           { en: "Planetary Free Fall Lab", cs: "Laboratoř planetárního volného pádu" },
  "sim3.subtitle":        { en: "Verlet Integration • Multivariable Aerodynamics", cs: "Verletova integrace • Víceproměnná aerodynamika" },
  "sim3.presets":         { en: "Celestial Presets", cs: "Přednastavení těles" },
  "sim3.objProps":        { en: "Object Properties", cs: "Vlastnosti objektu" },
  "sim3.launchSettings":  { en: "Launch Settings", cs: "Nastavení vypuštění" },
  "sim3.gravity":         { en: "Gravity", cs: "Gravitace" },
  "sim3.ballMass":        { en: "Ball Mass", cs: "Hmotnost míče" },
  "sim3.ballRadius":      { en: "Ball Radius", cs: "Poloměr míče" },
  "sim3.environment":     { en: "Environment (Drag)", cs: "Prostředí (odpor)" },
  "sim3.vacuum":          { en: "Vacuum", cs: "Vakuum" },
  "sim3.air":             { en: "Air", cs: "Vzduch" },
  "sim3.water":           { en: "Water", cs: "Voda" },
  "sim3.height":          { en: "Height", cs: "Výška" },
  "sim3.drop":            { en: "INITIALIZE DROP", cs: "SPUSTIT PÁD" },
  "sim3.telemetry":       { en: "Live Telemetry", cs: "Živá telemetrie" },
  "sim3.elapsed":         { en: "Elapsed Time", cs: "Uplynulý čas" },
  "sim3.velocity":        { en: "Velocity", cs: "Rychlost" },
  "sim3.altitude":        { en: "Altitude", cs: "Výška" },
  "sim3.netAccel":        { en: "Net Accel", cs: "Výsl. zrychlení" },
  "sim3.impact":          { en: "Impact Analysis", cs: "Analýza dopadu" },
  "sim3.impactSpeed":     { en: "Impact Speed", cs: "Rychlost dopadu" },
  "sim3.duration":        { en: "Duration", cs: "Trvání" },
  "sim3.heightGraph":     { en: "Height Tracking (m)", cs: "Výška v čase (m)" },
  "sim3.velGraph":        { en: "Velocity Tracking (m/s)", cs: "Rychlost v čase (m/s)" },

  // ── simulation-4.html (Wave) ─────────────────────────────────────────────
  "sim4.title":           { en: "Wave Superposition Lab", cs: "Laboratoř superpozice vln" },
  "sim4.subtitle":        { en: "Independent multi-variable wave interaction and interference", cs: "Nezávislá víceproměnná interakce a interference vln" },
  "sim4.wave1":           { en: "WAVE 1", cs: "VLNA 1" },
  "sim4.wave2":           { en: "WAVE 2", cs: "VLNA 2" },
  "sim4.amplitude":       { en: "Amplitude", cs: "Amplituda" },
  "sim4.frequency":       { en: "Frequency", cs: "Frekvence" },
  "sim4.phase":           { en: "Phase", cs: "Fáze" },
  "sim4.yOffset":         { en: "Y-Offset", cs: "Posunutí Y" },
  "sim4.wave1disp":       { en: "Wave 1 Displacement (y₁)", cs: "Výchylka vlny 1 (y₁)" },
  "sim4.wave2disp":       { en: "Wave 2 Displacement (y₂)", cs: "Výchylka vlny 2 (y₂)" },
  "sim4.resultant":       { en: "Resultant Wave (y₁ + y₂)", cs: "Výsledná vlna (y₁ + y₂)" },
  "sim4.wave1label":      { en: "Wave 1 (y₁)", cs: "Vlna 1 (y₁)" },
  "sim4.wave2label":      { en: "Wave 2 (y₂)", cs: "Vlna 2 (y₂)" },
  "sim4.superposition":   { en: "Superposition (y₁ + y₂)", cs: "Superpozice (y₁ + y₂)" },

  // ── simulation-5.html (Spring) ──────────────────────────────────────────
  "sim5.title":           { en: "Spring Oscillator Lab", cs: "Laboratoř oscilátoru na pružině" },
  "sim5.subtitle":        { en: "Advanced Harmonic Motion with Energy Conservation Analysis", cs: "Pokročilý harmonický pohyb s analýzou zachování energie" },
  "sim5.displacement":    { en: "Displacement", cs: "Výchylka" },
  "sim5.velocity":        { en: "Velocity", cs: "Rychlost" },
  "sim5.potentialE":      { en: "Potential E", cs: "Potenc. E" },
  "sim5.kineticE":        { en: "Kinetic E", cs: "Kinet. E" },
  "sim5.springConst":     { en: "Spring Constant (k)", cs: "Tuhost pružiny (k)" },
  "sim5.mass":            { en: "Mass (m)", cs: "Hmotnost (m)" },
  "sim5.damping":         { en: "Damping (b)", cs: "Tlumení (b)" },
  "sim5.posGraph":        { en: "Position vs Time", cs: "Poloha vs Čas" },
  "sim5.phaseGraph":      { en: "Phase Space (v vs x)", cs: "Fázový prostor (v vs x)" },
  "sim5.kineticBar":      { en: "KINETIC ENERGY", cs: "KINETICKÁ ENERGIE" },
  "sim5.potentialBar":    { en: "POTENTIAL ENERGY", cs: "POTENCIÁLNÍ ENERGIE" },

  // ── quizzes.html ────────────────────────────────────────────────────────
  "quiz.title":           { en: "Physics Quizzes", cs: "Fyzikální kvízy" },
  "quiz.backHome":        { en: "← Back to Home", cs: "← Zpět domů" },
  "quiz.correct":         { en: "Correct!", cs: "Správně!" },
  "quiz.incorrect":       { en: "Incorrect", cs: "Špatně" },
  "quiz.next":            { en: "Next Question →", cs: "Další otázka →" },
  "quiz.finish":          { en: "Finish", cs: "Dokončit" },
  "quiz.exitQuiz":        { en: "Exit Quiz", cs: "Ukončit kvíz" },
  "quiz.tryAgain":        { en: "Try Again", cs: "Zkusit znovu" },
  "quiz.backBrowse":      { en: "Browse Quizzes", cs: "Procházet kvízy" },
  "quiz.darkMode":        { en: "Dark", cs: "Tmavý" },
  "quiz.lightMode":       { en: "Light", cs: "Světlý" },

  // ── physics-test-v2.html ─────────────────────────────────────────────────
  "test.backHome":        { en: "Back to Home", cs: "Domů" },
  "test.complete":        { en: "Quiz Complete!", cs: "Kvíz dokončen!" },
  "test.greatJob":        { en: "Great Job!", cs: "Skvělá práce!" },
  "test.q1":              { en: "What is the unit of electric resistance?", cs: "Jaká je jednotka elektrického odporu?" },
  "test.q2":              { en: "Which law states that energy cannot be created or destroyed?", cs: "Který zákon říká, že energie nemůže být vytvořena ani zničena?" },
  "test.q3":              { en: "What is the approximate value of gravity on Earth?", cs: "Jaká je přibližná hodnota gravitačního zrychlení na Zemi?" },

  // ── Global / UI ──────────────────────────────────────────────────────────
  "lang.toggle":          { en: "🇨🇿 Czech", cs: "🇬🇧 English" },
};

// ── Core Engine ──────────────────────────────────────────────────────────────

function getLang() {
  return localStorage.getItem('physicsLang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('physicsLang', lang);
}

function t(key) {
  const lang = getLang();
  if (!TRANSLATIONS[key]) return key;
  return TRANSLATIONS[key][lang] || TRANSLATIONS[key]['en'] || key;
}

/**
 * Apply translations to all [data-i18n] elements in the document.
 * Also updates [data-i18n-html] for innerHTML and [data-i18n-title] for the page <title>.
 */
function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[key];
    if (val) el.textContent = val[lang] || val['en'] || key;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = TRANSLATIONS[key];
    if (val) el.innerHTML = val[lang] || val['en'] || key;
  });

  // Update toggle button text
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) {
    const next = lang === 'en' ? { label: '🇨🇿 Česky', title: 'Přepnout do češtiny' } : { label: '🇬🇧 English', title: 'Switch to English' };
    btn.textContent = next.label;
    btn.title = next.title;
  }
}

/**
 * Inject a floating language toggle button into the page.
 * Pass position = 'nav' to inject into an existing <nav> element instead.
 */
function injectLangToggle(containerId) {
  const btn = document.createElement('button');
  btn.id = 'lang-toggle-btn';
  btn.title = 'Switch language / Přepnout jazyk';
  btn.textContent = getLang() === 'en' ? '🇨🇿 Česky' : '🇬🇧 English';

  btn.style.cssText = `
    padding: 8px 16px;
    border: 2px solid rgba(255,255,255,0.35);
    border-radius: 99px;
    background: rgba(255,255,255,0.15);
    color: white;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.25s;
    white-space: nowrap;
    letter-spacing: 0.3px;
  `;

  btn.addEventListener('mouseover', () => {
    btn.style.background = 'rgba(255,255,255,0.3)';
    btn.style.borderColor = 'white';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.background = 'rgba(255,255,255,0.15)';
    btn.style.borderColor = 'rgba(255,255,255,0.35)';
  });

  btn.addEventListener('click', () => {
    const current = getLang();
    setLang(current === 'en' ? 'cs' : 'en');
    applyTranslations();
  });

  if (containerId) {
    const container = document.getElementById(containerId);
    if (container) { container.appendChild(btn); return; }
  }

  // Fallback: fixed floating button (top-right)
  btn.style.position = 'fixed';
  btn.style.top = '16px';
  btn.style.right = '20px';
  btn.style.zIndex = '9999';
  btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
  btn.style.background = 'rgba(0,71,171,0.85)';
  btn.style.borderColor = 'rgba(255,255,255,0.4)';
  document.body.appendChild(btn);
}

/**
 * Main init – call once per page on DOMContentLoaded.
 * @param {string|null} containerId – optional element id to inject the toggle button into
 */
function initLang(containerId) {
  injectLangToggle(containerId);
  applyTranslations();
}
