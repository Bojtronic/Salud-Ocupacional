const contenido = document.getElementById("contenido");

function cargarSeccion(seccion) {

    switch (seccion) {

        case "inicio":

            contenido.innerHTML = `
                <section class="hero">
                    <h1>Promovemos Ambientes de Trabajo Seguros y Saludables</h1>

                    <p>
                        Brindamos servicios especializados en salud ocupacional,
                        prevención de riesgos laborales y bienestar organizacional
                        para empresas comprometidas con la seguridad de sus colaboradores.
                    </p>

                    <button onclick="cargarSeccion('contacto')">
                        Solicitar Información
                    </button>
                </section>

                <section class="section">
                    <div class="section-title">
                        <h2>¿Por qué elegirnos?</h2>
                        <p>Compromiso con la salud y la seguridad laboral.</p>
                    </div>

                    <div class="cards">

                        <div class="card">
                            <h3>Prevención</h3>
                            <p>
                                Identificamos y mitigamos riesgos antes de que se conviertan en incidentes.
                            </p>
                        </div>

                        <div class="card">
                            <h3>Capacitación</h3>
                            <p>
                                Formación continua para fortalecer la cultura preventiva.
                            </p>
                        </div>

                        <div class="card">
                            <h3>Cumplimiento</h3>
                            <p>
                                Apoyo en normativas y requisitos legales aplicables.
                            </p>
                        </div>

                    </div>
                </section>
            `;

            break;

        case "servicios":

            contenido.innerHTML = `
                <section class="section">

                    <div class="section-title">
                        <h2>Nuestros Servicios</h2>
                    </div>

                    <div class="cards">

                        <div class="card">
                            <h3>Evaluaciones Médicas</h3>
                            <p>Exámenes preocupacionales, periódicos y de egreso.</p>
                        </div>

                        <div class="card">
                            <h3>Capacitaciones</h3>
                            <p>Programas de formación en seguridad y salud laboral.</p>
                        </div>

                        <div class="card">
                            <h3>Gestión de Riesgos</h3>
                            <p>Identificación, evaluación y control de riesgos.</p>
                        </div>

                        <div class="card">
                            <h3>Inspecciones</h3>
                            <p>Evaluaciones de condiciones y actos inseguros.</p>
                        </div>

                        <div class="card">
                            <h3>Planes de Emergencia</h3>
                            <p>Diseño y actualización de protocolos de respuesta.</p>
                        </div>

                        <div class="card">
                            <h3>Asesoría Técnica</h3>
                            <p>Consultoría especializada para empresas.</p>
                        </div>

                    </div>

                </section>
            `;

            break;

        case "nosotros":

            contenido.innerHTML = `
                <section class="section">

                    <div class="info-box">

                        <h2>Quiénes Somos</h2>

                        <br>

                        <p>
                            Somos una organización dedicada a la promoción
                            de la salud ocupacional y la prevención de riesgos laborales.
                        </p>

                        <br>

                        <p>
                            Nuestro objetivo es apoyar a las empresas en la creación
                            de entornos de trabajo seguros, saludables y productivos.
                        </p>

                    </div>

                </section>
            `;

            break;

        case "contacto":

            contenido.innerHTML = `
                <section class="section">

                    <div class="info-box">

                        <h2>Contacto</h2>

                        <br>

                        <ul class="contact-list">
                            <li>📧 info@so.com</li>
                            <li>📞 +506 8888-8888</li>
                            <li>📍 San José, Costa Rica</li>
                            <li>
                                <i class="fab fa-facebook"></i>
                                <a href="https://www.facebook.com/LA_PAGINA_DE_FACEBOOK"
                                target="_blank">
                                Síguenos en Facebook
                                </a>        
                            </li>
                        </ul>

                    </div>

                </section>
            `;

            break;
    }
}

document.querySelectorAll("[data-section]").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();
        cargarSeccion(item.dataset.section);
    });
});

cargarSeccion("inicio");
