<template>
  <main>
    <section
      class="mani-bnner seleccionados-pg inner-pg position-relative after-po"
    >
      <div class="container">
        <div class="breadcrumbs-div position-relative">
          <ul class="d-flex">
            <li><NuxtLink to="/"></NuxtLink>Home</li>
            <li>/</li>
            <li>Seleccionados</li>
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
        <h1>Seleccionados 2022</h1>
      </div>
    </section>

    <section class="main-con-seleco">
      <div class="container">
        <div class="inner-main-bx margin-0-auto">
          <p>
            Luego de haber realizado el proceso de selección por parte de los
            jurados de la Filarmónica Joven de Colombia: Robin Kesselman, Kathy
            Kienzle, Fernando Meza y Eduardo Rojas; nos complace informar la
            lista de seleccionados para ser parte de la Filarmónica Joven de
            Colombia Temporada 2021.
          </p>
          <div class="table-contain">
            <h2 class="ff-sans-b">Músicos seleccionados</h2>
            <div class="form-group">
              <input
                v-model="search"
                type="text"
                class="form-control"
                aria-describedby=""
                placeholder="Ingrese nombre, apellido o instrumento..."
              />
            </div>
            <div class="table-responsive">
              <table class="table ff-lato">
                <thead>
                  <tr>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Instrumento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(musician, i) in selectedMusicians" :key="i">
                    <td scope="row">{{ musician.name }}</td>
                    <td>{{ musician.surname }}</td>
                    <td>{{ musician.instrument }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div class="diff-color">
              <p>Mostrando desde 1 hasta 15 de 15 registros</p>
            </div>
            <div class="nxt-prev">
              <a href="javascript:void(0)">&lt;</a
              ><a href="javascript:void(0)">&gt;</a>
            </div> -->
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
      search: '',
    }
  },
  computed: {
    selectedMusicians() {
      return this.$constants.selectedMusicians.filter((row) => {
        for (const key in row) {
          if (
            String(row[key]).toLowerCase().includes(this.search.toLowerCase())
          ) {
            return true
          }
        }
        return false
      })
    },
  },
  methods: {
    goBack() {
      window.history.back()
    },
  },
}
</script>
