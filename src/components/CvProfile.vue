<template>
  <div class="cv-profile" :class="{ 'dark-mode': isDarkMode }">
    <!-- Controles de Idioma y Modo Oscuro -->
    <div class="controls">
      <button @click="toggleLanguage" class="control-btn lang-btn">{{ t.langBtn }}</button>
      <button @click="toggleDarkMode" class="control-btn dark-mode-toggle">
        <i v-if="isDarkMode" class="bi bi-sun-fill"></i>
        <i v-else class="bi bi-moon-fill"></i>
      </button>
    </div>

    <!-- Encabezado Principal -->
    <header class="profile-header">
      <div class="header-content-main">
        <h1>{{ name }}</h1>
        <p>{{ t.jobTitle }}</p>
      </div>
    </header>

    <main class="container">
      <!-- Sección 1: Sobre Mí y Foto de Perfil -->
      <section class="card-section row align-items-center">
        <div class="col-md-8">
          <div class="card">
            <h2><i class="bi bi-person-square"></i> {{ t.aboutMeTitle }}</h2>
            <p v-html="t.aboutMeP1"></p>
            <p v-html="t.aboutMeP2"></p>
            <p v-html="t.aboutMeP3"></p>
            <div class="social-links-inline">
              <a :href="linkin" target="_blank" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a :href="github" target="_blank" aria-label="GitHub"><i class="bi bi-github"></i></a>
              <a :href="youtube" target="_blank" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            </div>
            <div class="action-buttons">
              <a :href="`${publicPath}CV-Johan-Carmino-EN.pdf`" :download="t.cvDownloadName" class="btn-cv">
                <i class="bi bi-file-earmark-pdf"></i> {{ t.downloadCv }}
              </a>
              <a href="mailto:jcdeveloped@gmail.com" class="btn-cv">{{ t.contact }}</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 text-center">
          <div class="profile-image-container">
            <img src="@/assets/perfil-yo.jpeg" alt="Profile Picture" class="profile-pic-section">
          </div>
        </div>
      </section>

      <!-- Sección 2: Pasatiempos e Imagen -->
      <section class="card-section row align-items-center">
        <div class="col-md-5">
          <img src="@/assets/desktop-setup.png" alt="Desktop Setup" class="img-fluid rounded">
        </div>
        <div class="col-md-7">
          <div class="card">
            <h2><i class="bi bi-person-workspace"></i> {{ t.hobbiesTitle }}</h2>
            <ul class="hobbies-list">
              <li>{{ t.hobby1 }}</li>
              <li>{{ t.hobby2 }}</li>
              <li>{{ t.hobby3 }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Sección 3: Experiencia Laboral -->
      <section class="experience">
        <h2><i class="bi bi-laptop"></i> {{ t.experienceTitle }}</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card experience-card">
              <img src="@/assets/Logo_Excle_164x50.png" class="company-logo" alt="Excle Logo">
              <h3>{{ t.exp1Title }}</h3>
              <p class="company">{{ t.exp1Company }}</p>
              <span class="date">{{ t.exp1Date }}</span>
              <p class="desc">{{ t.exp1Desc }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card experience-card">
              <img src="@/assets/darian_tech_img.png" class="company-logo" alt="Darian.Tech Logo">
              <h3>{{ t.exp2Title }}</h3>
              <p class="company">{{ t.exp2Company }}</p>
              <span class="date">{{ t.exp2Date }}</span>
              <p class="desc">{{ t.exp2Desc }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card experience-card">
              <img src="@/assets/mgi_accusys.png" class="company-logo" alt="MGI Accusys Logo">
              <h3>{{ t.exp3Title }}</h3>
              <p class="company">{{ t.exp3Company }}</p>
              <span class="date">{{ t.exp3Date }}</span>
              <p class="desc">{{ t.exp3Desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección 4: Máquinas de Pentesting -->
      <section class="pentesting-machines">
        <h2><i class="bi bi-file-earmark-lock2-fill"></i> {{ t.pentestingTitle }}</h2>
        <div class="carousel-container">
          <div id="carousel" class="carousel">
            <div class="machine-card card">
              <img src="@/assets/Maquina_completada_ANONYMOUS.png" alt="Anonymous Machine">
              <div class="card-content">
                <h3>{{ t.machine1Title }}</h3>
                <p>{{ t.machine1Desc }}</p>
              </div>
            </div>
            <div class="machine-card card">
              <img src="@/assets/Maquina_completada_DOGCAT.png" alt="Dogcat Machine">
              <div class="card-content">
                <h3>{{ t.machine2Title }}</h3>
                <p>{{ t.machine2Desc }}</p>
              </div>
            </div>
            <div class="machine-card card">
              <img src="@/assets/Maquina_completada_PickleRick.png" alt="Pickle Rick Machine">
              <div class="card-content">
                <h3>{{ t.machine3Title }}</h3>
                <p>{{ t.machine3Desc }}</p>
              </div>
            </div>
          </div>
          <button @click="prevCard" class="carousel-btn prev-btn"><i class="bi bi-chevron-left"></i></button>
          <button @click="nextCard" class="carousel-btn next-btn"><i class="bi bi-chevron-right"></i></button>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} {{ name }}. {{ t.footerRights }}</p>
        <p>jcdeveloped@gmail.com</p>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CvProfile',
  data() {

    // Check for localStorage to prevent flash on load. Default to dark.
    const darkModePreference = typeof window !== 'undefined' ? localStorage.getItem('darkMode') : null;

    return {
      // Datos personales estáticos
      name: 'JOHAN CARMINO',
      linkin: 'https://www.linkedin.com/in/johan-carmino-3b8775201/',
      github: 'https://github.com/codefazt',
      youtube: 'https://www.youtube.com/watch?v=On2676eKeXs&t=1670s',
      publicPath: process.env.BASE_URL,

      // Estado de la UI
      isDarkMode: darkModePreference !== 'false',
      currentLanguage: 'en', // 'en' o 'es'

      // Estado del carrusel
      carouselCurrent: 0,
      carouselCards: [],

      // Contenido de texto para i18n
      content: {
        en: {
          jobTitle: 'Full Stack Developer | DevOps | Cybersecurity',
          aboutMeTitle: 'About Me',
          aboutMeP1: 'I am a developer passionate about innovation and development, always keeping up with new market technologies.',
          aboutMeP2: 'I specialize in development architecture, including networks, infrastructure, and especially, information security.',
          aboutMeP3: 'I perform red team and blue team tests on the applications I develop to improve the experience of the delivered products. I have over 7 years of experience in various programming languages such as C#, <strong>Golang</strong>, Java, JavaScript, PHP, and <strong>Python</strong>, among others.',
          downloadCv: 'Download CV',
          cvPath: process.env.BASE_URL + 'CV-JohanC-En.pdf',
          cvDownloadName: 'CV-Johan-Carmino-EN.pdf',
          contact: 'Contact',
          hobbiesTitle: 'Hobbies',
          hobby1: 'Making videos about pentesting and programming techniques.',
          hobby2: 'Solving machines on sites like: tryhackme.com, vulnhub, dockerslab, etc.',
          hobby3: 'Playing ping pong.',
          experienceTitle: 'Work Experience',
          exp1Title: 'Software Developer',
          exp1Company: 'Excle C.A.',
          exp1Date: '2022 - Present',
          exp1Desc: 'Creation of an internal system (ERP) for accounting and finance management, employee payroll, logistics of product and service (purchase-sales). Framework used -> (Frappe with ERPNEXT), Python, JavaScript, Docker containers.',
          exp2Title: 'Web Developer',
          exp2Company: 'Darian.Tech',
          exp2Date: 'June 2021 - Sep 2021',
          exp2Desc: 'Creation of Web systems with Angular.js, Django, different Databases like (Postgres, Redshift, Mysql, Server setups and version control (Git) and container management with Docker).',
          exp3Title: 'Full Stack Developer',
          exp3Company: 'MGI Accusys',
          exp3Date: '2019 - 2022',
          exp3Desc: 'Full Stack web developer in Golang, C#.NetCore, JavaScript with Vue. (Creation of Factory model app).',
          pentestingTitle: 'Pentesting Machines',
          machine1Title: 'Anonymous',
          machine1Desc: 'Vulnerable machine through port 21 (FTP) allowing the default user (Anonymous) without a password, permitting entry.',
          machine2Title: 'Dogcat',
          machine2Desc: 'Vulnerable through a web flaw, allowing PHP code injection to access unauthorized paths.',
          machine3Title: 'Pickle Rick',
          machine3Desc: 'Intrusion through the web allowing a reverse shell and accessing the server.',
          langBtn: 'Español',
          footerRights: 'All rights reserved.'
        },
        es: {
          jobTitle: 'Desarrollador Full Stack | DevOps | Ciberseguridad',
          aboutMeTitle: 'Sobre Mí',
          aboutMeP1: 'Soy un <b>desarrollador</b> apasionado por la innovación y el desarrollo, siempre al tanto de las nuevas tecnologías del mercado.',
          aboutMeP2: 'Me <b>especializo en la arquitectura del desarrollo</b>, incluyendo redes, infraestructura y, especialmente, seguridad de la información.',
          aboutMeP3: 'Realizo pruebas de red team y blue team en las aplicaciones que desarrollo para mejorar la experiencia de los productos entregados. Cuento con más de 7 años de experiencia en diversos lenguajes de programación, como C#, <strong>Golang</strong>, Java, JavaScript, PHP y <strong>Python</strong>, entre otros.',
          downloadCv: 'Descargar CV',
          cvPath: process.env.BASE_URL + 'CV-JohanC-En.pdf', // Puedes cambiar esto por un CV en español si tienes uno
          cvDownloadName: 'CV-Johan-Carmino-ES.pdf',
          contact: 'Contactar',
          hobbiesTitle: 'Pasatiempos',
          hobby1: 'Realizar videos sobre pentesting y tecnicas de programación.',
          hobby2: 'Resolucion de maquinas en paginas como: tryhackme.com, vulnhub, dockerslab, etc.',
          hobby3: 'Jugar ping pong.',
          experienceTitle: 'Experiencia Laboral',
          exp1Title: 'Desarrollador de Software',
          exp1Company: 'Excle C.A.',
          exp1Date: '2022 - Presente',
          exp1Desc: 'Creacion de sistema interno (ERP) para la gerencia de administracion contable y finanzas, nomina de empleados, logistica de (compra - ventas) de productos y servicios, Framework empleado -> (Frappe con ERPNEXT), Python, javascript, contenedores dockers.',
          exp2Title: 'Desarrollador Web',
          exp2Company: 'Darian.Tech',
          exp2Date: 'Jun 2021 - Sep 2021',
          exp2Desc: 'Creacion de sistemas Web con Angular.js, Django, diferentes Bases de Datos como (Postgres, Redshift, Mysql, levantamientos de Servidores y controlador de versiones (Git) y gestion de contenedores con Docker).',
          exp3Title: 'Desarrollador Full Stack',
          exp3Company: 'MGI Accusys',
          exp3Date: '2019 - 2022',
          exp3Desc: 'Desarrollador web Full Stack en Golang, C#.NetCore, JavaScript con Vue. (Creacion de app modelo Factory).',
          pentestingTitle: 'Máquinas de Pentesting',
          machine1Title: 'Anonymous',
          machine1Desc: 'Maquina vulnerable a traves del puerto 21 (FTP) permite el usuario default (Anonimous) sin password permitiendo el ingreso.',
          machine2Title: 'Dogcat',
          machine2Desc: 'Vulnerable mediante fallo en web, permitiendo inyeccion de codigo php acceder a rutas no autorizadas.',
          machine3Title: 'Pickle Rick',
          machine3Desc: 'Intrusion mediante web permitiendo una reverse shell y accediendo al servidor.',
          langBtn: 'English',
          footerRights: 'Todos los derechos reservados.'
        }
      }
    }
  },
  computed: {
    t() {
      return this.content[this.currentLanguage];
    }
  },
  mounted() {
    // The theme is already set in data().
    // We just need to ensure the preference is stored for the next visit if it's the first time.
    if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', 'true');
    }
    this.initCarousel();
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
    },
    setDarkMode(isDark) {
      this.isDarkMode = isDark;
      localStorage.setItem('darkMode', String(isDark));
    },
    toggleDarkMode() {
      this.setDarkMode(!this.isDarkMode);
    },
    initCarousel() {
      const carousel = this.$el.querySelector('#carousel');
      if (!carousel) return;
      
      this.carouselCards = carousel.querySelectorAll('.machine-card');
      this.showCard(this.carouselCurrent);      
    },
    nextCard() {
      this.carouselCurrent = (this.carouselCurrent + 1) % (this.carouselCards.length || 1);
      this.showCard(this.carouselCurrent);
    },
    prevCard() {
      this.carouselCurrent = (this.carouselCurrent - 1 + (this.carouselCards.length || 1)) % (this.carouselCards.length || 1);
      this.showCard(this.carouselCurrent);
    },
    showCard(idx) {
      const carousel = this.$el.querySelector('#carousel');
      if (!carousel) return;
      const offset = -idx * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }
  }
}
</script>

<style scoped>
/* --- Variables de Tema --- */
.cv-profile {
    --primary-color: #5cacee;
    --bg-color: #f8f9fa;
    --card-bg: #ffffff;
    --text-color: #212529;
    --header-bg: linear-gradient(135deg, #5cacee 0%, #4682b4 100%);
    --header-text: #ffffff;
    --border-color: #e9ecef;
    --shadow-color: rgba(0, 0, 0, 0.1);

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
    padding-bottom: 2rem;
}

.cv-profile.dark-mode {
    --primary-color: #5cacee;
    --bg-color: #121212;
    --card-bg: #1e1e1e;
    --text-color: #e0e0e0;
    --header-bg: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
    --header-text: #e0e0e0;
    --border-color: #343a40;
    --shadow-color: rgba(0, 0, 0, 0.4);
}

/* --- Controles --- */
.controls {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    gap: 10px;
}

.control-btn {
    background: var(--card-bg);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px var(--shadow-color);
    transition: transform 0.2s, box-shadow 0.2s;
}

.control-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px var(--shadow-color);
}

.lang-btn {
    font-size: 0.8rem;
    font-weight: bold;
}

/* --- Encabezado --- */
.profile-header {
    background: var(--header-bg);
    color: var(--header-text);
    padding: 2rem;
    text-align: center;
}

.profile-header h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 600;
}

.profile-header p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    opacity: 0.9;
}

/* --- Contenedor Principal y Secciones --- */
.container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 2rem;
}

section {
    margin-bottom: 3rem;
}

.card-section {
    margin-bottom: 3rem;
}

h2 {
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    color: var(--primary-color);
}

/* --- Tarjetas (Cards) --- */
.card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 5px 15px var(--shadow-color);
    border: 1px solid var(--border-color);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    color: var(--text-color);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px var(--shadow-color);
}

/* --- Animaciones de Hover para Foto de Perfil --- */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes shake {
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(-1.5deg); }
  75% { transform: rotate(1.5deg); }
}

.profile-image-container {
  position: relative;
  display: inline-block;
}

.profile-image-container::before {
  content: '';
  position: absolute;
  /* Se posiciona justo fuera del borde de la imagen */
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  /* Crea una línea de gradiente que se puede animar */
  background: conic-gradient(
    var(--primary-color) 120deg,
    transparent 120deg
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.profile-image-container:hover::before {
  opacity: 1;
  animation: spin 1.5s linear infinite;
}

.profile-image-container:hover .profile-pic-section {
  animation: shake 0.4s ease-in-out;
}

/* --- Sobre Mí y Pasatiempos --- */
.profile-pic-section {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--card-bg);
    box-shadow: 0 4px 20px var(--shadow-color);
    position: relative; /* Para que el z-index funcione */
    z-index: 1;
}

.social-links-inline {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.social-links-inline a {
    color: var(--text-color);
    font-size: 1.8rem;
    margin-right: 1rem;
    transition: color 0.2s;
}

.social-links-inline a:hover {
    color: var(--primary-color);
}

.action-buttons {
    margin-top: 1.5rem;
}

.btn-cv {
    display: inline-block;
    background-color: var(--primary-color);
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    margin-right: 1rem;
    margin-top: 1rem;
    transition: background-color 0.3s, transform 0.2s;
    font-weight: bold;
}

.btn-cv:hover {
    transform: translateY(-2px);
    background-color: #4a9ddb;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.rounded {
  border-radius: 15px;
}

.hobbies-list {
  list-style: none;
  padding-left: 0;
}

.hobbies-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.hobbies-list li:last-child {
  border-bottom: none;
}

/* --- Experiencia --- */
.experience-card {
  text-align: center;
}

.company-logo {
  height: 50px;
  max-width: 150px;
  object-fit: contain;
  margin: 0 auto 1rem;
}

.experience-card h3 {
    margin-top: 0;
    font-size: 1.2rem;
}

.experience-card .company {
    font-style: italic;
    margin-bottom: 0.5rem;
}

.experience-card .date {
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 1rem;
    display: block;
    font-size: 0.9rem;
}

.experience-card .desc {
  font-size: 0.9rem;
  text-align: left;
}

/* --- Carrusel --- */
.carousel-container {
    position: relative;
    width: 100%;
    margin: auto;
    overflow: hidden;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.machine-card {
    min-width: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
    flex-shrink: 0;
}

.machine-card img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-bottom: 1px solid var(--border-color);
}

.card-content {
    padding: 1.5rem;
    text-align: center;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--card-bg);
    color: var(--text-color);
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 2px 5px var(--shadow-color);
}

.prev-btn { left: 10px; }
.next-btn { right: 10px; }

/* --- Footer --- */
.footer {
  text-align: center;
  padding: 2rem 1rem;
  margin-top: 2rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.7;
}
/* --- Clases de Grid (Flexbox) y Responsividad --- */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.align-items-center {
  align-items: center;
}

.text-center {
  text-align: center;
}

.col-md-4, .col-md-5, .col-md-7, .col-md-8 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .col-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
  .col-md-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
  .col-md-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
  .col-md-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
  .col-md-4, .col-md-5, .col-md-7, .col-md-8 { margin-bottom: 0; }
}
</style>
