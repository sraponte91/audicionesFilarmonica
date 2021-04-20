<template>
  <main>
    <section
      class="mani-bnner repertorios-pg inner-pg position-relative after-po"
    >
      <div class="container">
        <div class="breadcrumbs-div position-relative">
          <ul class="d-flex">
            <li><NuxtLink to="/"></NuxtLink>Home</li>
            <li>/</li>
            <li>Repertorios</li>
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
        <h1>Repertorios</h1>
      </div>
    </section>

    <section class="repertorios-main-tabs">
      <div class="container">
        <div class="">
          <ul
            id="tabs"
            class="nav nav-tabs flex-nowrap d-flex margin-0-auto"
            role="tablist"
          >
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-1' }"
                @click="changeTab('panel-1')"
                >VIOLÍN</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-2' }"
                @click="changeTab('panel-2')"
                >VIOLA</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-3' }"
                @click="changeTab('panel-3')"
                >VIOLONCHELO</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-4' }"
                @click="changeTab('panel-4')"
                >CONTRABAJO</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-5' }"
                @click="changeTab('panel-5')"
                >FLAUTA</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-6' }"
                @click="changeTab('panel-6')"
                >OBOE</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-7' }"
                @click="changeTab('panel-7')"
                >CLARINETE</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-8' }"
                @click="changeTab('panel-8')"
                >FAGOT</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-9' }"
                @click="changeTab('panel-9')"
                >CORNO FRANCÉS</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-10' }"
                @click="changeTab('panel-10')"
                >TROMPETA</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-11' }"
                @click="changeTab('panel-11')"
                >TROMBÓN TENOR</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-12' }"
                @click="changeTab('panel-12')"
                >TROMBÓN BAJO</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-13' }"
                @click="changeTab('panel-13')"
                >TUBA</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-14' }"
                @click="changeTab('panel-14')"
                >PIANO</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-15' }"
                @click="changeTab('panel-15')"
                >ARPA</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-16' }"
                @click="changeTab('panel-16')"
                >TIMPANI</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                data-toggle="tab"
                role="tab"
                :class="{ 'active show': selectedTab === 'panel-17' }"
                @click="changeTab('panel-17')"
                >PERCUSIÓN</a
              >
            </li>
          </ul>

          <div id="content" class="tab-content margin-0-auto" role="tablist">
            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-1' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-1' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_violin.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>VIOLÍN</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol>
                            <ul class="li-stl">1. J. BRAHMS: Sinfonía No. 2; 1st Mov.  Letra E - Letra F </ul>
                            <ul class="li-stl">2. W. A. MOZART: Sinfonía No. 39, 4º. Mov, compás 1 – Letra B </ul>
                            <ul class="li-stl">3. S. PROKOFIEV, Sinfonía 1 “Clásica”, II mov: Comienzo hasta letra C. </ul>
                            <ul class="li-stl">4. R. STRAUSS: Don Juan (1st Violin) pág. 1.</ul>
                            <ul class="li-stl">5. H. BERLIOZ: Symphonie fantastique (“Un bal”: 38–51)</ul>
                            <ul class="li-stl">6. Exposición y Cadenza (Sin acompañamiento) del primer movimiento de alguno de los siguientes conciertos:
                                <li class="nml-sl ml-3">W. A. MOZART #3 en Sol mayor, K. 216,  </li>
                                <li class="nml-sl ml-3">W. A. MOZART en Re mayor, K. 218 </li>
                                <li class="nml-sl ml-3">W. A. MOZART #5 en La major, K.219.</li>
                            </ul>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-2' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-2' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_viola.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>VIOLA</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol>
                            <li class="li-stl">CLAUDE DEBUSSY. La mer. 2 mouvement.</li>
                            <li class="li-stl">RICHARD WAGNER. Vorspiel of Tannhäuser</li>
                            <li class="li-stl">LUDWIG VAN BEETHOVEN: Coriolan Overture. ( To celebrate the Beethoven year!)</li>
                            <li class="li-stl">W. A. MOZART: Ouverture Le Nozze di Figaro</li>
                            <li class="li-stl">GUSTAV MAHLER. 4th Symphony.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-3' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-3' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_violonchelo.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>VIOLONCHELO</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol>
                            <ul class="li-stl">1. L. V. BEETHOVEN: Sinfonía No. 5. Mvt. 2 – Compases 1 - 10, 49 – 59, 98 - 106 y Mvt. 3 – Compás 141 - 177; trío sin repeticiones</ul>
                            <ul class="li-stl">2. MENDELSSOHN: “A Midsummer Night’s Dream”, Scherzo (N – O)</ul>
                            <ul class="li-stl">3. J. BRAHMS: Sinfonía No. 2, Adagio non troppo, desde el principio hasta letra A</ul>
                            <ul class="li-stl">4. I STRAVINSKY: Petrouchka, # 108 al 112   —  # 196  al 199  —  # 204 al 209</ul>
                            <ul class="li-stl">5. R. STRAUSS – Don Juan. Pag 1</ul>
                            <ul class="li-stl">6. Exposición (Sin acompañamiento) del primer movimiento de alguno de los siguientes conciertos:                           
                              <li class="nml-sl ml-3">F.J. HAYDN,  D major or C major concerto </li>
                              <li class="nml-sl ml-3">BOCCHERINI (cualquiera de los conciertos para violonchelo) </li>
                              <li class="nml-sl ml-3">C. Ph. E. BACH  (cualquiera de los conciertos para violonchelo)</li>
                            </ul>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-4' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-4' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_contrabajo.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>CONTRABAJO</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>W. A. MOZART: Sinfonía No. 35, I Mov, Compás  1 – 48;   Compás 58 - Letra B. </li>
                            <li>L. V. BEETHOVEN: Sinfonía No. 5 - Mvt. 3, Trío sin repetición. </li>
                            <li>R. STRAUSS: Ein Heldenleben; 2 compases antes de 61 a 63;   # 77 a 78 </li>
                            <li>J. BRAHMS: Sinfonía No. 2, 1er Mov: Letra E a letra F </li>
                            <li>G. MAHLER: Sinfonía No. 1, 3er Mov, Comienzo - Dos compases después de #2 </li>
                            <li>Un movimiento de obra de libre elección para Contrabajo solo.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-5' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-5' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_flauta.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>FLAUTA</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>J.S.BACH, Aria de la Pasión Según San Mateo (Aus liebe...) Fragmento dado. </li>
                            <li>L.van BEETHOVEN, Sinfonía num 3 "Heroica"  (4°Mov) desde 172 hasta el 200 </li>
                            <li>F. MENDELSSOHN, "A Midsummer night's dream" Scherzo </li>
                            <li>J. BRAHMS Sinfonía num 4 (4°Mov) 13 compases después letra D hasta compás 105. </li>
                            <li>S. PROKOFIEFF, Pedro y el lobo, desde el número 2 hasta el 4 y desde el 51 al 52.</li><br>
                            <ul>PICCOLO</ul>
                                <p style="font-style:italic;">Todos los postulantes a flauta deben presentar la audición de piccolo</p><br>
                                <li>L. van BEETHOVEN, Sinfonía num 9 (4°Mov), Allegro assai vivace, Compás 343 hasta 406. </li>
                                <li>G. ROSSINI, Semiramide, 5 compases después de G hasta 2 compases después de H; y 8 compases antes letra U </li>
                                <li>D. SHOSTAKOVICH, Sinfonía num 6 (1°Mov),  4 antes cifra 9 hasta 1 después cifra 10.</li>
                            </ul>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-6' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-6' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_oboe.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>OBOE</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>W. A. MOZART, Concierto para Oboe en Do Mayor, K. 314, (Exposición)</li>
                            <li>J. BRAHMS: Violin Concerto; 2do. mvt., solo "hasta compás 32" </li>
                            <li>BEETHOVEN: Sinfonía 3: Marcha Fúnebre, compás 8 - 47 y Scherzo hasta compás 28 </li>
                            <li>MUSSORGSKY: Cuadros de una exposición: III. Tuileries, hasta compás 10 y  V. Ballet Des Poussins Dans Leurs Coques, Oboe 1 hasta No. 55 </li>
                            <li>I. STRAVINSKY: Suite Pulcinella. II Serenata hasta el # 10. - VI Gavotta hasta el # 76.           - Variazione 1a. </li>
                            <li>M. RAVEL: " Le Tombeau de Couperin "</li>
                            <li>G. ROSSINI: "La Scala di Seta" Overture, fragmento dado</li><br>
                            <ul>CORNO INGLES</ul><br>
                            <li>A. DVORAK: Sinfonía No. 9 “New World” (2do Mov: comienzo - Compás 18)</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-7' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-7' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_clarinete.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>CLARINETE</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <ul>1. W.A. MOZART: Concierto para Clarinete, K. 622, I. Allegro – Exposición, hasta compás 98. (Clarinete en La) </ul>
                            <ul>2. I. STRAVINSKY, Petrushka (1947), 108 al final de la Cadenza </ul>
                            <ul>3. H. BERLIOZ: Mvt III (3 Compases después de 43 a 44) </ul>
                            <ul>4. L. van BEETHOVEN: Sinfonía No. 8; 3rd Mov, Trio </ul>
                            <ul>5. J. BRAHMS: Sinfonía No. 3, 1er. Mov. Compás 36 al 46 </ul>
                            <ul>6. O. RESPIGHI: " Pini di Roma "; 3rd mov. #13 - #15 </ul> <br>
                            <!-- Pending to create a card -->
                            <ul>CLARINETE EN Eb</ul><br>
                              <ul>7. M. RAVEL, Bolero</ul>
                              <ul>8. H. BERLIOZ: Symphonie fantastique (“Hexensabbat”: 63–6 after 64)</ul><br>
                            <!-- Pending to create a card -->
                            <ul>CLARINETE BAJO </ul><br>
                              <ul>9. I. STRAVINSKY, The Rite of Spring: L’Adoration de la Terre: 5 - 6</ul> 
                          </ol><br>
                          <p class="nml-sl mt-2">*Fragmentos de Clarinete en Eb y Clarinete Bajo, son opcionales.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-8' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-8' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_fagot.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>FAGOT</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>W.A. MOZART, Concierto Bb Mayor: 1er Mov. Exposición. </li>
                            <li>B. BARTOK, Concerto for Orchestra. 2 Mov. (Giuoco della Coppie) 8-24 & 164-180 (1. Fg); 5 Mov (Finale), 59-72</li>
                            <li>W. A. MOZART: "The Marriage of Figaro" Overture; 139 - 171 </li>
                            <li>M. RAVEL: "Bolero"; 2 - 3 </li>
                            <li>N. RIMSKY-KORSAKOV: "Scheherazade" 2nd mvt., 5 hasta letra A; Cadenza </li>
                            <li>I. STRAVINSKY: La Consagración de la Primavera,  “L´Adoration de la Terre”, Comienzo hasta # 9.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-9' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-9' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_corno_frances.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>CORNO FRANCÉS</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>D. SHOSTAKOVICH: Sinfonía No. 5; 1st mvt </li>
                            <li>P.I. TCHAIKOVSKY. Sinfonía No. 5, II mov.  </li>
                            <li>L. BEETHOVEN: Sinfonía No. 7; 1st mvt., compases  86 – 110 y  423 al fin (1st horn) </li>
                            <li>J. BRAHMS, Sinfonía No. 3; III Mov.  </li>
                            <li>R. STRAUSS: Ein Heldenleben; Lebhaft bewegt </li>
                            <li>M. RAVEL: Pavane pour une infante défunte; (1st horn introduction solo) </li>
                            <li>Un movimiento de obra de libre elección para Corno Francés solo.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-10' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-10' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_trompeta.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>TROMPETA</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>G. MAHLER: Sinfonía No. 5 (I Mov: comienzo – 8 compases antes de 2) </li>
                            <li>R. STRAUSS, Ein Heldenleben. Op. 40, Trompeta 1 en Eb </li>
                            <li>M. MUSSORGSKY: Pictures at an Exhibition (Promenade) </li>
                            <li>I. STRAVINSKY: Petrushka “Ballerina’s Dance” - “Waltz”</li>
                            <li>O. RESPIGHI: Pines of Rome (II Mov: offstage solo)</li>
                            <li>N. RIMSKY-KORSAKOV: Scheherazade, IV Mov, un compás antes de [C]–hasta letra [E]  </li>
                            <li>I. STRAVINSKY, Consagración de la Primavera: 1 compás ante del # 11 al 12 (Piccolo) </li>
                            <li>Un movimiento de un concierto, sonata, o un movimiento de una obra para instrumento solo.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-11' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-11' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_trombon_tenor.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>TROMBÓN TENOR</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>R. WAGNER, Ride of the Valkyries, Fragmento dado  </li>
                            <li>R. WAGNER, Lohengrin, Preludio 3er Acto, fragmento dado. </li>
                            <li>MAHLER Sinfonía No. 3.</li>
                            <li>M. RAVEL, Bolero: solo </li>
                            <li>G. ROSSINI: " William Tell " Overture, Letra C hasta 9 compases de letra D. </li>
                            <li>SCHUMANN:  Sinfonía No. 3, IV Mov.compases 1 - 23 </li>
                            <li>F. DAVID,  Concierto, Movimientos 1 y 2</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-12' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-12' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_trombon_bajo.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>TROMBÓN BAJO</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>R. WAGNER: Ride of the Valkyries </li>
                            <li>R. WAGNER, Lohengrin, Preludio 3er Acto, fragmento dado. </li>
                            <li>R. SCHUMANN: Sinfonía No. 3</li>
                            <li>R. STRAUSS, Ein Heldenleben </li>
                            <li>G. ROSSINI: " William Tell " Overture, Letra C hasta 9 compases de letra D. </li>
                            <li>HAYDN: La Creación</li>
                            <li>SACHSE: Concertino en F (mvts. 1 y 2)</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-13' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-13' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_tuba.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>TUBA</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>I. STRAVINSKY Petrushka # 100 y # 121 </li>
                            <li>R. WAGNER: Overture to Die Meistersinger von Nürnberg del 158 - 188  </li>
                            <li>G. MAHLER, Sinfonía  No. 1, III Mov. Solo, 4 compases antes del número 3 hasta el número 4 </li>
                            <li>BRUCKNER Symphony 8</li>
                            <li>R. WAGNER: Ride of the Valkyries, 8 compases antes del # 11 hasta el  12 </li>
                            <li>O. RESPIGHI: The Fountains of Rome</li>
                            <li>V. WILLIAMS: Tuba concerto 1 Mov.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-14' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-14' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_piano.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>PIANO</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <p class="li-stl">Recomendaciones:</p>
                          <p style="font-style:italic;">Las audiciones se deben hacer en un piano de cola. Puede ser de media o cola completa; pianos pequeños o de pared no son buenos para apreciar el sonido y sus colores. </p>
                          <p>Cuando pongan la cámara por favor ponerla en el mismo lado de la tapa del piano abierta. Si  la cámara se pone en el lado opuesto, se pierde toda la apreciación del sonido y sus armónicos.</p>
                          <ol class="li-stl">
                            <li>PERCY A. GRAINGER: Children’s March, 189 - 205 </li>
                            <li>I. STRAVINSKY: Firebird Suite (1919), 72 - 81 y 266 - 279 </li>
                            <li>JOHN MACKEY: Redline Tango, C - 120 y F - 207 </li>
                            <li>A. COPLAND: Appalachian Spring, 6 - 14 y 30 - 32 </li>
                            <li>D. SHOSTAKOVICH, Sinfonía No 1 en Fa menor, Op 10. II Mov. dos antes del # 18 – tres después del # 22. </li>
                            <li>I. STRAVINSKY:  Petrushka (1947), Danza Rusa.  64 - 81 </li>
                            <li>C. FRANK, Sonata para Violín y Piano en LA Mayor, Compáses 1 - 45, 2do Mov. </li>
                            <li>Un movimiento de una obra de libre elección.</li>
                          </ol>
                          <p style="font-style:italic;">Enviar archivo en PDF de la obra de libre elección,  al correo electrónico cbuitrago@fundacionbd.org</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-15' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-15' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_arpa.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>ARPA</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <ol class="li-stl">
                            <li>H. BERLIOZ: Symphonie Fantastique (Un Bal), comienzo – 4 compases después de 23 </li>
                            <li>BARTOK, Concerto for Orchestra: IV Mov., Intermezzo- compases 42-58. V Mov.,. Finale- compases 345-356</li>
                            <li>B. BRITTEN: Young Person’s Guide to the Orchestra  Var. I ; Fugue theme I - J </li>
                            <li>M. RAVEL: Tzigane (Número 4 al 5) </li>
                            <li>P.I. TCHAIKOVSKY: cadenza from the Ballet Swan Lake </li>
                            <li>Obra solista de su elección.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-16' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-16' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_timpani.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>TIMPANI</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <p class="li-stl">Recomendaciones</p>
                          <p style="font-style:italic;">Se recomienda a los aspirantes presentar audición para percusión y timbales, pero pueden presentar audición para una sola categoría. </p>
                          <ol class="li-stl">
                            <ul>1. HINDEMITH: Symphonic  Metamorphoses (2do. Mov: S–T y 2 de Z– hasta el fin) </ul>
                            <ul>2. P. I. TCHAIKOVSKY: Sinfonía No.4. 1er Mov (4 compases antes de T - V) </ul>
                            <ul>3. L. V. BEETHOVEN: Sinfonía No. 9 en Re menor.
                              <li class="nml-sl ml-3">Mov. I - Desde la anacrusa del compás 17 hasta el compás 35. </li>
                              <li class="nml-sl ml-3">Mov. I - Del compás 297 al compás 345. </li>
                              <li class="nml-sl ml-3">Mov. I - Compás 513 – Final del movimiento </li>
                              <li class="nml-sl ml-3"> Mov. II - 1 compás antes de la letra “F”, hasta “H” </li>
                            </ul>
                            <ul>4. STRAVINSKY - Rite of Spring: Part 2, 189 – fin (Timpani I)</ul>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card tab-pane fade"
              role="tabpanel"
              :class="{ 'active show': selectedTab === 'panel-17' }"
            >
              <div
                class="collapse"
                role="tabpanel"
                :class="{ show: selectedTab === 'panel-17' }"
              >
                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_xilofono.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>XILÓFONO</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <p style="font-style:italic;">Se recomienda a los aspirantes presentar audición para percusión y timbales, pero pueden presentar audición para una sola categoría. El video no debe tener cortes o ediciones. </p>
                          <ol class="li-stl">
                            <li>G. GERSHWIN: “Porgy and Bess” (Overture) - compases 4 al 18. </li>
                            <li>A. Copland. 5 compases del # 48 -  4 compases del # 49 </li>
                            <li>Z. KODALY: Suite Hary Janos IV Movimiento  “Alla Marcia”  Compases 4 al 12;  Número 7 de ensayo /  Un compás después del número 10 de ensayo (8 compases) </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_glockenspiel.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>GLOCKENSPIEL</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <p style="font-style:italic;">Se recomienda a los aspirantes presentar audición para percusión y timbales, pero pueden presentar audición para una sola categoría. El video no debe tener cortes o ediciones. </p>
                          <ol class="li-stl">
                            <li>P. DUKAS: “El Aprendiz de Brujo” - 4 compases después del No. 17 de ensayo, hasta 4 compases después del No. 19 de ensayo / Del número 22 de ensayo al número 24 de ensayo </li>
                            <li>W. A. MOZART: La Flauta Mágica; Finale del 1 Acto de la Ópera; fragmento completo "Allegro".  </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_redoblante.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>REDOBLANTE</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                          >
                          <p style="font-style:italic;">Se recomienda a los aspirantes presentar audición para percusión y timbales, pero pueden presentar audición para una sola categoría. El video no debe tener cortes o ediciones. </p>
                          <ol class="li-stl">
                            <ul>1. S. PROKOFIEV: “Teniente Kijé”, I Movimiento 'The Birth of Kijé' del No. 1 al No. 3 </ul>
                            <ul>2. N. RIMSKY-KORSAKOV: Scheherezade. </ul>                        
                            <ul class="ml-3">III Movimiento (de la letra D a la letra E)  </ul>
                            <ul class="ml-3">IV Mov: Desde un compás antes de la letra C, hasta la letra D </ul>
                            <ul class="ml-3">IV Mov: 4 compases antes de la letra N, hasta 19 compases después de la letra N </ul><br>
                            <ul>3. Redoble fortísimo (ff) (en estilo de concierto) - 10 segundos</ul>
                            <ul class="ml-3">Redoble pianissimo, (pp) (en estilo de concierto) - 10 segundos </ul>
                            <ul class="ml-3">Redoble pp cresc.- ff - decresc. pp  - 10 segundos en total   </ul>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_tambourine.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>TAMBOURINE</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <p style="font-style:italic;">Se recomienda a los aspirantes presentar audición para percusión y timbales, pero pueden presentar audición para una sola categoría. El video no debe tener cortes o ediciones. </p>
                          <ol class="li-stl">
                            <li>DVORAK: Carnival Overture, Desde el principio hasta 5 compases después de la letra A / 17 compases después de la letra K hasta 26 compases después de la letra K / Desde la letra T hasta el final </li>
                            <li>CHABRIER: España; 20 compases después de la letra A hasta un compás antes de la letra B. </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_platillos.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>PLATILLOS</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <p style="font-style:italic">Se recomienda a los aspirantes presentar audición para percusión y timbales, pero pueden presentar audición para una sola categoría. El video no debe tener cortes o ediciones. </p>
                          <ol class="li-stl"> 
                            <li>P. I. TCHAIKOVSKY: Sinfonía No. 4  Mvt. IV Finale - Primeros 8 compases y 272 hasta el final. </li>
                            <li>RACHMANINOFF – Piano Concerto #2: Mov. III - 13 compases a partir del número 32 de ensayo (hasta el primer pulso del Allegro scherzando).</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="tab-iner-contain">
                    <div class="d-flex flex-wrap-991 position-relative">
                      <div class="img-bx position-relative">
                        <img
                          src="/images/repertorios_otros.jpg"
                          alt=""
                          class="object-fit-cover"
                        />
                        <div class="tab-title position-absolute ff-sans-b">
                          <h5>OTROS</h5>
                        </div>
                      </div>
                      <div class="cont-bx position-absolute after-po">
                        <div
                          class="d-flex align-items-center position-absolute v-center-tw innr-cont-bx"
                        >
                          <p class="li-stl">Demuestre su habilidad en percusión latina con un instrumento de su elección entre: congas, timbales, bongó, tambora, maracas, pandeiro, repinique, tamborin, caja, o en su lugar, cualquier instrumento de percusión tradicional de Colombia. Elija 2 de los instrumentos y toque en cada uno por un máximo de 1 minuto por instrumento.</p>
                          <p class="li-stl">También toque un solo de su elección (máximo 3 minutos) con uno de los siguientes instrumentos: Marimba, Vibráfono, Xilófono, Timbales o Redoblante.   </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Cards Content End -->
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
      selectedTab: 'panel-1',
    }
  },
  methods: {
    changeTab(tab) {
      this.selectedTab = tab
    },
    goBack() {
      window.history.back()
    },
  },
}
</script>
