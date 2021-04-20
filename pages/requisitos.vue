<template>
  <main>
    <section class="mani-bnner reque-pg inner-pg position-relative after-po">
      <div class="container">
        <div class="breadcrumbs-div position-relative">
          <ul class="d-flex">
            <li><NuxtLink to="/"></NuxtLink>Home</li>
            <li>/</li>
            <li>Requisitos</li>
          </ul>
          <div class="go-return ff-sans-b">
            <client-only>
              <a
                href="javascript:void(0)"
                class="position-relative after-po"
                @click="goBack()"
                >Volver</a
              >
            </client-only>
          </div>
        </div>
      </div>
      <div class="text-center position-absolute bnner-contain ff-sans-b">
        <h1>Requisitos</h1>
      </div>
    </section>

    <section class="what-do-ned-div">
      <div class="container">
        <div class="in-sm-bx margin-0-auto ff-sans-b">
          <h3>¿Qué se necesita?</h3>
          <div class="nav pagination">
            <b-pagination
              v-model="currentPage"
              pills
              first-number
              last-number
              :per-page="1"
              :total-rows="9"
              :limit="9"
              size="lg"
              @change="changeSlide"
            ></b-pagination>
          </div>
          <carousel
            ref="carousel"
            class="myslider"
            :per-page="1"
            :pagination-enabled="false"
          >
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito1.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito1.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      La convocatoria está dirigida a músicos con nacionalidad Colombiana.
                    </p>
                  </div>
                </div>
              </div>
            </slide>
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito2.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito2.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      Deben tener entre 16 y 24 años de edad (cumplidos al cierre de la presente convocatoria).
                    </p>
                  </div>
                </div>
              </div>
            </slide>
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito3.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito3.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      Contar con el nivel técnico musical que cumpla con los parámetros establecidos en la sección de Repertorios.
                    </p>
                  </div>
                </div>
              </div>
            </slide>
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito4.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito4.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      Diligenciar el formulario de solicitud y cumplir con lo establecido en los Términos y Condiciones de la Convocatoria.
                    </p>
                  </div>
                </div>
              </div>
            </slide>
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito5.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito5.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      El proceso de inscripción y audición a la convocatoria no tiene costo.
                    </p>
                  </div>
                </div>
              </div>
            </slide>
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito6.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito6.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      Los participantes tienen plazo para audicionar hasta el 31 de mayo de 2021. 
                    </p>
                  </div>
                </div>
              </div>
            </slide>
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito7.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito7.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      Los seleccionados se publicarán el 1 de septiembre de 2021.
                    </p>
                  </div>
                </div>
              </div>
            </slide>
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito8.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito8.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      La vigencia de la Temporada 2022 será desde el 1º de enero al 31 de diciembre de 2022. 
                    </p>
                  </div>
                </div>
              </div>
            </slide>
            <slide class="item">
              <div class="in-box-slide">
                <div class="d-flex align-items-center">
                  <div class="im-prt">
                    <img src="/images/requisito9.svg" alt="" class="d-none-767i" />
                    <img
                      src="/images/requisito9.svg"
                      alt=""
                      class="d-none-ni d-block-767i"
                    />
                  </div>
                  <div class="tx-prt text-center">
                    <p>
                      Los seleccionados deben realizar 20 horas anuales de proyección social en #LaJoven Creando Lazos. 
                    </p>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>

    <section class="how-registration-process position-relative after-po">
      <div class="container">
        <div class="inner-box-how margin-0-auto position-relative">
          <div class="text-center">
            <h3 class="ff-sans-b">¿Cómo funciona el proceso de inscripción?</h3>
          </div>
          <div class="how-flow-work">
            <div class="d-flex flex-wrap justify-content-between">
              <div
                class="position-relative for-roundeded flow-bx d-flex align-items-center justify-content-center after-po f-h-rlign line-bg"
              >
                <div
                  class="flow-nu position-absolute ff-sans-b d-flex justify-content-center align-items-center"
                >
                  1
                </div>
                <div class="text-center tx-bx-n">
                  <p>
                    Llene los datos solicitados sobre el formulario enlazado al botón de inscripciones. 
                  </p>
                </div>
              </div>
              <div
                class="position-relative for-roundeded flow-bx d-flex align-items-center justify-content-center after-po f-h-blign line-bg"
              >
                <div
                  class="flow-nu position-absolute ff-sans-b d-flex justify-content-center align-items-center"
                >
                  2
                </div>
                <div class="text-center tx-bx-n">
                  <p>
                    Por correo, recibirá accesos temporales para ingresar a nuestra plataforma. En ella, podrá completar la información de su inscripción y descargar la partitura de su instrumento. 
                  </p>
                </div>
              </div>
              <div
                class="position-relative for-roundeded flow-bx d-flex align-items-center justify-content-center before-po f-h-boline after-po f-h-rlign line-bg order-4-435"
              >
                <div
                  class="flow-nu position-absolute ff-sans-b d-flex justify-content-center align-items-center"
                >
                  4
                </div>
                <div class="text-center tx-bx-n">
                  <p>
                    Teniendo en cuenta las recomendaciones de PREPARE SU AUDICIÓN, debe grabar un video y cargarlo a YouTube. 
                  </p>
                </div>
              </div>
              <div
                class="position-relative for-roundeded flow-bx d-flex align-items-center justify-content-center order-3-435 after-po f-h-blign-435 line-bg"
              >
                <div
                  class="flow-nu position-absolute ff-sans-b d-flex justify-content-center align-items-center"
                >
                  3
                </div>
                <div class="text-center tx-bx-n">
                  <p>
                    Al completar la inscripción, recibirá una confirmación por correo con las indicaciones que debe tener en cuenta para su audición. 
                  </p>
                </div>
              </div>
              <div
                class="position-relative for-roundeded flow-bx d-flex align-items-center justify-content-center after-po f-h-rlign line-bg order-5-435"
              >
                <div
                  class="flow-nu position-absolute ff-sans-b d-flex justify-content-center align-items-center"
                >
                  5
                </div>
                <div class="text-center tx-bx-n">
                  <p>
                    Ingrese a nuestra plataforma para enviar el link de su video antes 31 de mayo de 2021, y así finalizar su proceso de audición. 
                  </p>
                </div>
              </div>
              <div
                class="position-relative for-roundeded flow-bx d-flex align-items-center justify-content-center after-po f-h-blign line-bg order-6-435"
              >
                <div
                  class="flow-nu position-absolute ff-sans-b d-flex justify-content-center align-items-center"
                >
                  6
                </div>
                <div class="text-center tx-bx-n">
                  <p>
                    Recibirá un correo de confirmación cuando hayamos recibido de forma satisfactoria su audición. 
                  </p>
                </div>
              </div>
              <div
                class="position-relative flow-bx d-flex align-items-center justify-content-center diif-style order-8-435"
              >
                <div class="text-center tx-bx-n">
                  <p>
                    Si desea conocer el texto completo de requerimientos, así
                    como la información completa de términos y condiciones para
                    Audiciones.
                  </p>
                  <a
                    target="_blank"
                    :href="$constants.requisitosLink"
                    class="text-uppercase"
                    >clic aquí</a
                  >
                </div>
              </div>
              <div
                class="position-relative for-roundeded flow-bx d-flex align-items-center justify-content-center order-7-435"
              >
                <div
                  class="flow-nu position-absolute ff-sans-b d-flex justify-content-center align-items-center"
                >
                  7
                </div>
                <div class="text-center tx-bx-n">
                  <p>
                    Publicaremos los seleccionados para la temporada 2022 el 1 de septiembre de 2021.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="black-fq-bx">
      <div class="container text-center ff-sans-b">
        <p>
          Si tiene alguna consulta, puede escribir a
          <a :href="'mailto:' + $constants.contactEmail">{{
            $constants.contactEmail
          }}</a>
        </p>
        <p>#LaJoven lo espera</p>
        <a
          target="_blank"
          :href="$constants.requisitosBtnLink"
          class="btn-inscribase ff-lato"
          >Inscríbase aquí</a
        >
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      currentPage: 1,
    }
  },
  methods: {
    goBack() {
      window.history.back()
    },
    changeSlide(page) {
      this.$refs.carousel.goToPage(page - 1)
    },
    
  },
}
</script>
