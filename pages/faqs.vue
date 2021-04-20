<template>
  <main>
    <section class="mani-bnner faqs-pg inner-pg position-relative after-po">
      <div class="container">
        <div class="breadcrumbs-div position-relative">
          <ul class="d-flex">
            <li><NuxtLink to="/"></NuxtLink>Home</li>
            <li>/</li>
            <li>FAQ</li>
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
        <h1>FAQ</h1>
      </div>
    </section>

    <section class="faqs-main-que">
      <div class="container">
        <div class="inner-faqs margin-0-auto">
          <div id="faq" class="accordion ff-muli-r">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-1 href="javascript:void(0)" class="btn btn-header-link position-relative">¿En dónde encontrar los repertorios?</a>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>
                    En el paso #2 del proceso de inscripción en nuestra plataforma de registro, encontrará habilitada la descarga de las partes, una vez haya confirmado su instrumento principal.
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-2 href="javascript:void(0)" class="btn btn-header-link position-relative">¿Es
                  necesario preparar todo el repertorio solicitado?</a>
              </b-card-header>
              <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>
                    Sí. Con cada una de las obras, los jurados evalúan distintos aspectos técnicos y musicales de cada uno
                    de los participantes. De no tener el repertorio completo, no se tendrá en cuenta la audición.
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-3 href="javascript:void(0)" class="btn btn-header-link position-relative">¿Debo
                  grabar el repertorio en un orden específico?</a>
              </b-card-header>
              <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>
                    Sí. Grabe todos los fragmentos en el orden dado y sin ediciones. Audiciones en orden diferente, o con
                    ediciones no serán tenidas en cuenta.
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-4 href="javascript:void(0)" class="btn btn-header-link position-relative">¿Los arcos
                  y digitaciones deben ser los impresos o sugeridos en las partes, o podemos proponer nuestros propios arcos
                  y digitaciones?</a>
              </b-card-header>
              <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>
                    Puede asesorarse con su maestro, o proponer arcos y digitaciones que sean coherentes técnica y
                    musicalmente con la obra.
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-5 href="javascript:void(0)" class="btn btn-header-link position-relative">Para la
                  audición de clarinete, ¿es obligatorio presentar los papeles de Clarinete en Eb y clarinete bajo?</a>
              </b-card-header>
              <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>
                    Fragmentos de Clarinete en Eb y Clarinete Bajo son opcionales, debido a la situación actual que puede
                    dificultar la consecución de instrumento.
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-6 href="javascript:void(0)" class="btn btn-header-link position-relative">En el caso
                  de la aplicación para flauta, ¿es necesario grabar el fragmento solicitado para piccolo?</a>
              </b-card-header>
              <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>
                    Sí. Para este año, el comité artístico de la Filarmónica Joven de Colombia solicitó que, debido al
                    repertorio que se va a trabajar durante la temporada, los flautistas deben presentar la audición en
                    piccolo.
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>



            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-7 href="javascript:void(0)" class="btn btn-header-link position-relative">¿Debo
                  grabar mis videos en algún formato especial (por ejemplo, .avi o .mp4)?</a>
              </b-card-header>
              <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>
                    ¿No está seguro del formato en el que debe guardar el vídeo?
                    <br>
                    Asegúrese de estar utilizando uno de los siguientes formatos: <br>

                    .MOV
                    .MPEG4
                    .AVI
                    .WMV
                    .MPEGPS
                    .FLV
                    3GPP
                    WebM
                    <br>

                    Si está utilizando un formato de archivo que no está incluido en la lista anterior, utilice la
                    herramienta de resolución de problemas para obtener información sobre cómo convertir el archivo, para
                    acceder ingrese a la sección de ayuda de YouTube

                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-8 href="javascript:void(0)" class="btn btn-header-link position-relative">
                  ¿Puedo enviar varios videos para la audición?
                  </a>
              </b-card-header>
              <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>No. Solo tendremos en cuenta el primer video que envíe en su audición. A excepción de los que se presentan en percusión y timbales sinfónicos, quienes deben enviar un video para percusión y otro para timbales sinfónicos. </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-9 href="javascript:void(0)" class="btn btn-header-link position-relative">¿Si soy seleccionado debo tener mi propio instrumento?</a>
              </b-card-header>
              <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p> Los Participantes aceptados deberán presentarse a residencias académicas, ensayos, talleres y conciertos con su(s) instrumento(s). A excepción de las secciones de arpa, percusión y en las maderas el contrafagot y corno inglés. </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-10 href="javascript:void(0)" class="btn btn-header-link position-relative">¿Si soy seleccionado recibiré algún tipo de comunicación personal?</a>
              </b-card-header>
              <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p> Sí. Todos los aspirantes a conformar la Filarmónica Joven de Colombia, recibirán una respuesta formal en el correo electrónico registrado en el formulario de inscripción. Esta comunicación informará el resultado de la audición </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-11 href="javascript:void(0)" class="btn btn-header-link position-relative">Soy colombiano, pero vivo fuera del país. ¿Puedo realizar el proceso de selección?</a>
              </b-card-header>
              <b-collapse id="accordion-11" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p> Sí. Si es colombiano y cumple los requisitos de edad, puede realizar el proceso de selección. La Filarmónica Joven de Colombia cubre los gastos totales en Colombia, desde la ciudad de residencia al sitio donde se realizará la residencia artística y viceversa. Además de todos los gastos inherentes a la gira (transportes, hospedaje, alimentación, materiales, etc.) </p>
                </b-card-body>
              </b-collapse>
            </b-card>


            
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-12 href="javascript:void(0)" class="btn btn-header-link position-relative"> ¿Cómo se realizará el proceso de selección para participar en la Filarmónica Joven de Colombia?  </a>
              </b-card-header>
              <b-collapse id="accordion-12" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>Las audiciones serán evaluadas por un jurado internacional de expertos, formado por representantes de las principales orquestas del mundo, y otras instituciones y expertos musicales a nivel internacional.
                    <br>
                    Este jurado revisará las audiciones en función de los criterios establecidos en las normas oficiales, y seleccionará una serie de videos ubicándolos en un orden acorde al resultado obtenido. 
                    <br>
                    El comité artístico de la Filarmónica Joven de Colombia será el encargado de recopilar los datos suministrados por los jurados, y realizará el listado de integrantes de la Filarmónica Joven de Colombia para la temporada, en concordancia con las recomendaciones de los maestros integrantes del jurado.
                      </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            
            
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-13 href="javascript:void(0)" class="btn btn-header-link position-relative"> ¿Tuve problemas al subir mi video, es posible enviar el video después del 31 de mayo de 2021?  </a>
              </b-card-header>
              <b-collapse id="accordion-13" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p> Únicamente tendremos en cuenta los vídeos recibidos hasta el 31 de mayo de 2021 23:59:59 p.m. hora Colombia.
                    <br>

                    ATENCIÓN: Recuerde que subir el video a YouTube es un proceso que puede tomar varias horas.
                    <br>
                    No deje para el último día su inscripción.
                      </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            
            
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-14 href="javascript:void(0)" class="btn btn-header-link position-relative"> Una vez que he llenado el formulario de Inscripción, ¿recibiré una confirmación de la recepción del video? </a>
              </b-card-header>
              <b-collapse id="accordion-14" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>Sí, recibirá un correo donde confirmaremos la recepción de su audición a la dirección de correo electrónico que haya registrado en nuestro sistema. Recuerde que anunciaremos los seleccionados el 1 de septiembre de 2021 en nuestra página web. 
                      </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-15 href="javascript:void(0)" class="btn btn-header-link position-relative"> Soy actual miembro de la Filarmónica Joven de Colombia. ¿Debo volver a realizar el proceso de audición? </a>
              </b-card-header>
              <b-collapse id="accordion-15" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>Sí. La convocatoria para pertenecer a la Filarmónica Joven de Colombia es anual. Todos los años, los integrantes actuales y nuevos aspirantes, deben presentarse al proceso de selección.
                      </p>
                </b-card-body>
              </b-collapse>
            </b-card>



            
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <a v-b-toggle.accordion-16 href="javascript:void(0)" class="btn btn-header-link position-relative">  ¿Hasta cuándo puedo realizar mi inscripción y enviar mi video?  </a>
              </b-card-header>
              <b-collapse id="accordion-16" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <p>El proceso de audiciones abre su registro a partir del 22 de marzo de 2021. La fecha límite para que suba el video en el formulario de registro, es el 31 de mayo de 2021 a las 23:59:59 p.m., hora Colombia. </p>
                </b-card-body>
              </b-collapse>
            </b-card>

            



          </div>
        </div>
      </div>
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
    </section>

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
