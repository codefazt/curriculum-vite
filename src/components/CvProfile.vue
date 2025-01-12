<template>
  <div class="cv-profile">


    <div class="container-style rounded-4">

      <div class="row">

        <div class="col-md-12"> 
          <div class="mt-5">
            <h1 class="mt-3">&nbsp; &nbsp; {{ name }}</h1>
            <p class="lead">&nbsp; &nbsp; {{ job }}</p>
          </div>
        </div>

      </div>

      <!-- Seccion 1 -->

      <div class="row rounded-3 pt-5 pb-5">

        <div class="col-md-6">
          <img src="./../assets/desktop-setup.png" height="550" class="rounded-end mx-auto d-block" alt="...">
        </div>

        <div class="col-md-5 pt-5 ">

          <div class="card card-style shadow">
            <div class="card-body mt-5 mb-5 ">
              <h4 class="card-title text-left">
                <strong><i class="bi bi-person-workspace"></i> &nbsp; PASATIEMPOS</strong>
              </h4>
              <hr/>
              <div class="text-style">
                <p class="text-justify">
                  1.- Realizar videos sobre pentesting y tecnicas de programación. <br>
                </p>

                <p class="text-justify">
                  2.- Resolucion de maquinas en paginas como (trytohackme.com, vulnhub, dockerslab, etc)
                </p>

                <p class="text-justify">
                  3.- jugar ping pong
                </p>
              </div>
              <hr/>

              <a href="https://www.youtube.com/watch?v=On2676eKeXs&t=1670s" class="btn btn-outline-danger"><i class="bi bi-youtube"></i></a> &nbsp;
              <a href="https://github.com/codefazt" class="btn btn-outline-secondary"><i class="bi bi-github"></i></a> &nbsp;
              <a href="https://www.linkedin.com/in/johancarmino-3b8775201/" class="btn btn-outline-info"><i class="bi bi-linkedin"></i></a>

            </div>
          </div>

        </div>

      </div>

      <!-- Seccion 2 -->

      <div class="row rounded-3 pt-5 pb-5">

        <div class="col-md-8 shadow">

          <div class="card ms-5 card-style">
            <div class="card-body mt-5 mb-5">
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

              <a href="#" class="btn btn-outline-light">Curriculun</a> &nbsp; &nbsp;
              <a href="#" class="btn btn-outline-light">Contactos</a>

            </div>
          </div>

        </div>

        <div class="col-md-3 pt-5">
          <img src="./../assets/perfil-yo.jpeg" height="250" class="rounded d-block image-sytle mt-4" alt="...">
        </div>

      </div>

      <!-- Seccion 3 -->

      <div class="row rounded-3 pt-5 pb-5">

        <div class="col-md-12">
          <h3 class="">&nbsp;&nbsp;<b><i class="bi bi-laptop"></i> &nbsp; EXPERIENCIA LABORAL</b></h3>
        </div>

        <div class="col-md-4">

          <div class="card ms-5" style="width: 18rem;">
            <img src="./../assets/excle_img.png" height="130px" class="card-img-top" alt="...">
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

        <div class="col-md-4">

          <div class="card ms-3" style="width: 18rem;">
            <img src="./../assets/darian_tech_img.png" class="card-img-top" alt="...">
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

        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="./../assets/mgi_accusys.png" class="card-img-top" alt="...">
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

        <div class="col-md-12">
          <h3 class="">&nbsp;&nbsp;<b><i class="bi bi-file-earmark-lock2-fill"></i> &nbsp; Maquinas de Pentesting Hechas</b></h3>
        </div>
        <hr>

        <div class="col-md-2"></div>

        <div class="col-md-8">
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

        <div class="col-md-2"></div>

      </div>

      <!-- Seccion 5 -->

      <footer class="card-style d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top cv-profile">
        <p class="col-md-4 mb-0">&nbsp; jcdeveloped@gmail.com  &nbsp; <i class="bi bi-mailbox2-flag"></i></p>

        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      
        </a>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item"><a href="#" class="nav-link px-2 cv-profile"><i class="bi bi-house-door-fill"></i></a></li>
          <li class="nav-item"><a href="https://www.youtube.com/watch?v=On2676eKeXs&t=1670s" class="btn btn-outline-danger"><i class="bi bi-youtube"></i></a></li>
          <li class="nav-item"><a href="https://github.com/codefazt" class="btn btn-outline-secondary"><i class="bi bi-github"></i></a></li>
          <li class="nav-item"><a href="https://www.linkedin.com/in/johancarmino-3b8775201/" class="btn btn-outline-info"><i class="bi bi-linkedin"></i></a></li>
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
      linkin:'https://www.linkedin.com/in/johan-carmino-3b8775201/',
      github: 'https://github.com/codefazt',
      youtube: 'https://www.youtube.com/watch?v=On2676eKeXs&t=1670s'
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
text-style {
  font-size: 0.8em;
}

.card-style {
  background-color: rgb(44, 44, 44);
  color: #f1f1f1;
}

.container-style {
  background-color: rgb(26, 26, 26);
  /* margin-right: -3em;
  margin-left: -3em; */
}

.image-sytle {
  margin-left: -8em;
}
</style>