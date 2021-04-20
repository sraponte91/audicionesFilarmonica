<template>
  <main>
    <section
      class="mani-bnner prep-su-audi-bg inner-pg position-relative after-po"
    >
      <div class="container">
        <div class="breadcrumbs-div position-relative">
          <ul class="d-flex">
            <li><NuxtLink to="/"></NuxtLink>Home</li>
            <li>/</li>
            <li>Prepare su Audición</li>
          </ul>
          <div class="go-return ff-sans-b">
            <a
              href="javascript:void(0)"
              class="position-relative after-po"
              @click="goBack()"
              >Volver</a
            >
          </div>
        </div>
      </div>
      <div class="text-center position-absolute bnner-contain ff-sans-b">
        <h1>Prepare su Audición</h1>
      </div>
    </section>

    <section class="video-section">
      <div class="container">
        <div class="text-center">
          <h2 class="ff-sans-b">Recomendaciones</h2>
          <div class="video-here position-relative margin-0-auto">
            <div
              class="play-btn position-absolute v-center-tw d-flex align-items-center justify-content-center"
            >
              <iframe
                width="100%"
                height="100%"
                :src="$constants.prepareSuAudicionVideo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="que-abt-lajoven pre-su-ad-pg">
      <div class="container">
        <div class="text-center">
          <h3 class="ff-sans-b">¿Cómo preparar su Audición?</h3>
        </div>
        <div class="iner-que margin-0-auto">
          <div class="d-flex flex-wrap align-items-start for-mar-lr">
            <div class="part-a">
              <div
                v-for="(col1, i) in $constants.prepareSuAudicionPointsCol1"
                :key="i"
                class="one-que"
              >
                <p class="position-relative after-po">
                  {{ col1 }}
                </p>
              </div>
            </div>
            <div class="part-a">
              <div
                v-for="(col2, i) in $constants.prepareSuAudicionPointsCol2"
                :key="i"
                class="one-que"
              >
                <p class="position-relative after-po">
                  {{ col2 }}
                </p>
              </div>
              <div class="one-que diff-style d-flex align-items-center">
                <p class="position-relative before-po">
                  Recuerde, el video no debe tener cortes ni ser editado.
                </p>
              </div>
            </div>
          </div>
          <div class="jut-line margin-0-auto position-relative after-po"></div>
        </div>
      </div>
    </section>

    <section class="que-about-ytube">
      <div class="container">
        <div class="text-center">
          <h3 class="ff-sans-b">¿Cómo subir videos en Youtube?</h3>
          <p>
            Lo primero que debe hacer es abrir su cuenta de Google, si aún no la
            tiene, abra una cuenta gratuita en el siguiente botón
          </p>
          <a
            target="_blank"
            :href="$constants.prepareSuAudicionBtnLink"
            class="btn-seguir-en ff-lato"
            @click="prepareYt"
            >Seguir enlace</a
          >
        </div>
        <div class="zig-zag-se margin-0-auto">
          <div
            v-for="(step, i) in $constants.prepareSuAudicionSteps"
            :key="i"
            class="inr-zig-zag"
          >
            <div class="d-flex">
              <div
                class="num-se d-flex align-items-center justify-content-center ff-sans-b"
              >
                {{ i + 1 }}
              </div>
              <div
                class="txt-prt d-flex align-items-center position-relative after-po"
              >
                <p class="position-relative" v-html="step"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="black-fq-bx">
      <div class="container text-center ff-sans-b">
        <p>
          Si tiene alguna consulta, puede escribir a
          <a :href="'mailto:' + $constants.contactEmail">{{
            $constants.contactEmail
          }}</a>
        </p>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  methods: {
    goBack() {
      window.history.back()
    },
  },
}
</script>
