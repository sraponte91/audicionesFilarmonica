<template>
  <main>
    <section class="mani-bnner position-relative after-po">
      <div class="text-center position-absolute bnner-contain ff-sans-b">
        <h1>Filarmónica Joven de Colombia</h1>
        <p>
          La selección del talento joven colombiano con mayor proyección
          internacional.
        </p>
      </div>
    </section>

    <section class="info-section">
      <div class="container">
        <div class="comman-contain">
          <div class="inner-bx margin-0-auto ff-sans-r">
            <p>
              La Filarmónica Joven de Colombia, desarrolla el talento de los
              mejores jóvenes músicos del país, con el propósito de formar
              grandes intérpretes, capaces de inspirar la transformación a
              través de la cultura, demostrando su excelencia en escenarios
              emblemáticos a nivel mundial.
            </p>
            <p>
              Las audiciones de la <b>#LaJoven</b> son la puerta de entrada para
              los más talentosos músicos colombianos entre los 16 y 24 años
              hacia el fortalecimiento de su formación y proyección profesional
              de la mano con actores importantes del mundo cultural y maestros
              de talla mundial.
            </p>
          </div>
          <div class="big-box-in margin-0-auto ff-sans-b">
            <p>
              Envíe su audición antes del 31 de mayo y sea parte de una orquesta
              de talla mundial.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="box-manu-main">
      <div class="d-flex flex-wrap ff-sans-b">
        <div class="sigle-bx position-relative after-po before-po">
          <NuxtLink to="/requisitos" class="requisitos-tag"> 
            <img
              src="/images/bx_requisitos.svg"
              alt="requisitos"
              class="object-fit-cover"
            />
            <div class="bx-name position-absolute">
              <h3 >Requisitos</h3>
            </div>
          </NuxtLink>
        </div>
        <div class="sigle-bx position-relative after-po before-po bx-two">
          <NuxtLink to="/prepare-su-audicion">
            <img
              src="/images/bx_prepare_audicion.svg"
              alt="Prepare su Audición"
              class="object-fit-cover"
            />
            <div class="bx-name position-absolute">
              <h3>
                Prepare su <br />
                Audición
              </h3>
            </div>
          </NuxtLink>
        </div>
        <div class="sigle-bx position-relative after-po before-po">
          <NuxtLink to="/repertorios">
            <img
              src="/images/bx_repertorios.svg"
              alt="Repertorios"
              class="object-fit-cover"
            />
            <div class="bx-name position-absolute">
              <h3>Repertorios</h3>
            </div>
          </NuxtLink>
        </div>
        <div class="sigle-bx position-relative after-po before-po">
          <NuxtLink to="/jurados">
            <img
              src="/images/bx_jurados.svg"
              alt="Jurados"
              class="object-fit-cover"
            />
            <div class="bx-name position-absolute">
              <h3>Jurados</h3>
            </div>
          </NuxtLink>
        </div>
        <div class="sigle-bx position-relative after-po before-po">
          <NuxtLink to="/faqs">
            <img
              src="/images/bx_faq.svg"
              alt="FAQ"
              class="object-fit-cover"
            />
            <div class="bx-name position-absolute">
              <h3>FAQ</h3>
            </div>
          </NuxtLink>
        </div>
        <div class="sigle-bx position-relative after-po before-po">
          <NuxtLink to="#">
            <img
              src="/images/bx_seleccionados.svg"
              alt=""
              class="object-fit-cover"
            />
            <div class="bx-name position-absolute">
              <h3>Seleccionados - Próximamente</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="black-bx">
        <div class="text-center">
          <h2 class="ff-sans-b">¡#LAJOVEN lo espera!</h2>
          <a target="_blank" :href="$constants.homeBtnLink" class="ff-lato" >
            Inscríbase aquí
          </a>
        </div>
      </div>
    </section>

    <section class="que-abt-lajoven">
      <div class="container">
        <div class="text-center">
          <h3 class="ff-sans-b">¿Por qué estar en #LaJoven?</h3>
        </div>
        <div class="iner-que margin-0-auto">
          <div
            v-if="points.length"
            class="d-flex flex-wrap align-items-start for-mar-lr"
          >
            <div
              v-for="(p, i) in points"
              :key="i"
              class="one-que position-relative"
              :class="{ dispclass: p.toggle === 2 }"
            >
              <p class="position-relative after-po">
                {{ p.summary }}
                <span v-if="p.toggle === 1" class="dot-b">..</span>
                <span v-if="p.toggle === 2" class="dn">
                  {{ p.description }}
                </span>
              </p>
              <a
                v-if="p.toggle === 1 || p.toggle === 2"
                href="javascript:void(0)"
                class="position-absolute after-po before-po plus-sign"
                :class="{ dispclasse: p.toggle === 2 }"
                @click="toggleDesc(p)"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      points: [],
    }
  },
  created() {
    this.points = this.$constants.homePagePoints.map((p) => {
      const shortStr = p.replace(/^(.{80}[^\s]*).*/, '$1')
      return {
        summary: shortStr,
        description: p.substr(shortStr.length),
        toggle: p.length > shortStr.length ? 1 : 0,
      }
    })
  },
  methods: {
      toggleDesc(item) {
        item.toggle = item.toggle === 1 ? 2 : 1
      },
    }
  }

</script>
