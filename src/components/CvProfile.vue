<template>
  <div class="cv-profile">
    <div class="container-style rounded-4">
      <!-- Header -->
      <div class="row">
        <div class="col-12 text-center text-md-left mt-5">
          <h1 class="mt-3">{{ name }}</h1>
          <p class="lead">{{ job }}</p>
        </div>
      </div>

      <!-- Seccion 1 -->
      <div class="row rounded-3 pt-5 pb-5 align-items-center">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <img src="./../assets/desktop-setup.png" class="img-fluid rounded-end mx-auto d-block" alt="...">
        </div>
        <div class="col-12 col-md-6 pt-3 pt-md-5">
          <div class="card card-style shadow h-100">
            <div class="card-body d-flex flex-column justify-content-center">
              <h4 class="card-title text-left">
                <strong><i class="bi bi-person-workspace"></i> &nbsp; PASATIEMPOS</strong>
              </h4>
              <hr/>
              <div class="text-style">
                <p class="text-justify mb-2">
                  1.- Realizar videos sobre pentesting y tecnicas de programación.
                </p>
                <p class="text-justify mb-2">
                  2.- Resolucion de maquinas en paginas como: trytohackme.com, vulnhub, dockerslab, etc
                </p>
                <p class="text-justify mb-2">
                  3.- jugar ping pong
                </p>
              </div>
              <hr/>
              <div class="d-flex flex-wrap gap-2">
                <a :href="youtube" class="btn btn-outline-danger"><i class="bi bi-youtube"></i></a>
                <a :href="github" class="btn btn-outline-secondary"><i class="bi bi-github"></i></a>
                <a :href="linkin" class="btn btn-outline-info"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seccion 2 -->
      <div class="row align-items-stretch no-gutters">
        <div class="col-12 col-md-8 shadow mb-4 mb-md-0">
          <div class="card ms-md-5 card-style h-100">
            <div class="card-body d-flex flex-column justify-content-center">
              <h4 class="card-title text-left">
                <strong><i class="bi bi-person-square"></i> &nbsp; {{ name }}</strong>
              </h4>
              <hr/>
              <div class="text-style">
                <p class="text-justify">
                  Soy un <b>desarrollador</b> apasionado por la innovación y el desarrollo, siempre al tanto de las nuevas tecnologías del mercado.
                </p>
                <p class="text-justify">
                  Me <b>especializo en la arquitectura del desarrollo</b>, incluyendo redes, infraestructura y, especialmente, seguridad de la información.
                </p>
                <p class="text-justify">
                  Realizo pruebas de red team y blue team en las aplicaciones que desarrollo para mejorar la experiencia de los productos entregados.
                  Cuento con más de 7 años de experiencia en diversos lenguajes de programación, como C#, <b>Golang</b>, Java, JavaScript, PHP y <b>Python</b>, entre otros.
                </p>
              </div>
              <hr/>
              <div class="d-flex flex-wrap gap-2">
                <a :href="`${publicPath}CV-JCarmino-2025.pdf`" download="CV-JCarmino.pdf" class="btn btn-outline-light">
                  <i class="bi bi-file-earmark-pdf"></i> Curriculum
                </a>
                <a href="mailto:jcdeveloped@gmail.com" class="btn btn-outline-light">Contactos</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Imagen solo visible en md+ y ocupa todo el alto del row -->
        <div class="col-12 col-md-4 d-none d-md-block p-0">
          <img
            src="./../assets/perfil-yo.jpeg"
            class="profile-side-image h-100 w-100"
            alt="..."
            style="object-fit: cover; border-radius: 0 1rem 1rem 0;"
          >
        </div>
      </div>

      <!-- Seccion 3 -->
      <div class="row rounded-3 pt-5 pb-5">
        <div class="col-12">
          <h3><b><i class="bi bi-laptop"></i> &nbsp; EXPERIENCIA LABORAL</b></h3>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <img src="./../assets/Logo_Excle_164x50.png" class="card-img-top smaller-image" alt="...">
            <div class="card-body">
              <p class="card-text">
                Creacion de sistema interno (ERP) para la gerencia de administracion contable y finanzas, nomina de empleados, logistica de (compra - ventas) de productos y servicios, Framework empleado -> (Frappe con ERPNEXT), Python, javascript, contenedores dockers,
              </p>
              <hr>
              <button class="btn btn-dark" type="button">
                2022 - Present
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <img src="./../assets/darian_tech_img.png" class="card-img-top smaller-image" alt="...">
            <div class="card-body">
              <p class="card-text">
                Creacion de sistemas Web con Angular.js, Django, diferentes Bases de Datos como (Postgres, Redshift, Mysql, levantamientos de Servidores y controlador de versiones (Git) y gestion de contenedores con Docker)
              </p>
              <hr>
              <button class="btn btn-dark" type="button">
                Jun 2021 - Sep 2021
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <img src="./../assets/mgi_accusys.png" class="card-img-top smaller-image" alt="...">
            <div class="card-body">
              <p class="card-text">
                Desarrollador web Full Stack en Golang, C#.NetCore, JavaScript con Vue. (Creacion de app modelo Factory)
              </p>
              <hr>
              <button class="btn btn-dark" type="button">
                2019 - 2022
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Seccion 4 -->
      <div class="row rounded-3 pt-5 pb-5">
        <div class="col-12">
          <h3><b><i class="bi bi-file-earmark-lock2-fill"></i> &nbsp; Maquinas de Pentesting Hechas</b></h3>
        </div>
        <hr class="d-none d-md-block">
        <div class="col-12 col-md-8 offset-md-2">
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./../assets/Maquina_completada_ANONYMOUS.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Anonimous</h5>
                  <p>Maquina vulnerable a traves del puerto 21 (FTP) permite el usuario default (Anonimous) sin password permitiendo el ingreso</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./../assets/Maquina_completada_DOGCAT.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>dogcat</h5>
                  <p>Vulnerable mediante fallo en web, permitiendo inyeccion de codigo php acceder a rutas no autorizadas</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./../assets/Maquina_completada_PickleRick.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Pickle Rick</h5>
                  <p>intrusion mediante web permitiendo una reverse shell y accediendo al servidor.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="card-style d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top cv-profile">
        <p class="col-12 col-md-4 mb-0 text-center text-md-left">
          &nbsp; jcdeveloped@gmail.com  &nbsp; <i class="bi bi-mailbox2-flag"></i>
        </p>
        <a href="/" class="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"></a>
        <ul class="nav col-12 col-md-4 justify-content-center justify-content-md-end">
          <li class="nav-item"><a href="#" class="nav-link px-2 cv-profile"><i class="bi bi-house-door-fill"></i></a></li>
          <li class="nav-item"><a :href="youtube" class="btn btn-outline-danger"><i class="bi bi-youtube"></i></a></li>
          <li class="nav-item"><a :href="github" class="btn btn-outline-secondary"><i class="bi bi-github"></i></a></li>
          <li class="nav-item"><a :href="linkin" class="btn btn-outline-info"><i class="bi bi-linkedin"></i></a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 cv-profile"><i class="bi bi-tools"></i></a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvProfile',
  data() {
    return {
      name: 'JOHAN CARMINO',
      job: 'DESARROLLADOR DE SOFTWARE',
      linkin: 'https://www.linkedin.com/in/johan-carmino-3b8775201/',
      github: 'https://github.com/codefazt',
      youtube: 'https://www.youtube.com/watch?v=On2676eKeXs&t=1670s',
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.cv-profile {
  color: #f1f1f1 !important;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}
.text-style {
  font-size: 0.95em;
}

.card-style {
  background-color: rgb(44, 44, 44);
  color: #f1f1f1;
}

.container-style {
  background-color: rgb(26, 26, 26);
  padding: 1.5rem;
}

.image-style {
  max-width: 100%;
  height: auto;
}

.smaller-image {
  height: 80px;
  width: auto;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}

.profile-side-image {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 0 1rem 1rem 0;
  display: block;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > [class^="col-"],
.no-gutters > [class*=" col-"] {
  padding-right: 0;
  padding-left: 0;
}

@media (max-width: 767.98px) {
  .container-style {
    padding: 0.5rem;
  }
  h1 {
    font-size: 1.5em;
  }
  .card-style {
    font-size: 0.95em;
  }

  .profile-side-image {
    display: none;
  }
}
</style>