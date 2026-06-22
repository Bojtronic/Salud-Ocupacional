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

                    <img class="main-banner" src="img/principal.jpeg" alt="Salud Ocupacional">

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

                    <img class="service-banner" src="img/servicios.jpeg" alt="Servicios">

                    <div class="cards">

                        <div class="card">
                            <h3>Gestión de Riesgos Laborales</h3>
                            <p>Identificamos, evaluamos y controlamos los riesgos presentes en su empresa mediante matrices IPER, inspecciones de seguridad e investigación de accidentes.</p>
                        </div>

                        <div class="card">
                            <h3>Cumplimiento en Salud Ocupacional</h3>
                            <p>Asesoramos en la elaboración e implementación de programas, conformación de comisiones y desarrollo de políticas y procedimientos requeridos por la normativa.</p>
                        </div>

                        <div class="card">
                            <h3>Ergonomía y Procedimientos Seguros</h3>
                            <p>Realizamos evaluaciones ergonómicas básicas y elaboramos procedimientos seguros para promover ambientes de trabajo más seguros y eficientes.</p>
                        </div>

                        <div class="card">
                            <h3>Capacitación en Salud y Seguridad Ocupacional</h3>
                            <p>Brindamos capacitaciones y charlas preventivas adaptadas a las necesidades y actividades de cada organización.</p>
                        </div>

                        <div class="card">
                            <h3>Preparación y Respuesta ante Emergencias</h3>
                            <p>Elaboramos planes de emergencia, mapas de evacuación, capacitamos brigadas y desarrollamos simulacros para fortalecer la respuesta ante emergencias.</p>
                        </div>

                        <div class="card">
                            <h3>Gestión Integral de Residuos</h3>
                            <p>Desarrollamos programas de gestión de residuos y brindamos asesoría para el manejo adecuado de residuos peligrosos.</p>
                        </div>

                        <div class="card">
                            <h3>Educación y Sensibilización Ambiental</h3>
                            <p>Promovemos una cultura ambiental responsable mediante capacitaciones, campañas de reciclaje y actividades de sensibilización.</p>
                        </div>

                        <div class="card">
                            <h3>Diagnóstico en Gestión Ambiental</h3>
                            <p>Realizamos diagnósticos básicos para identificar oportunidades de mejora en el manejo de residuos y el cumplimiento ambiental.</p>
                        </div>

                        <div class="card">
                            <h3>Atención de Órdenes Sanitarias</h3>
                            <p>Brindamos acompañamiento técnico para atender órdenes sanitarias, definiendo acciones correctivas y dando seguimiento a su implementación hasta el cierre de hallazgos.</p>
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

                            <li>
                                📧
                                <a href="mailto:anthonycarballo406@gmail.com">
                                    anthonycarballo406@gmail.com
                                </a>
                            </li>

                            <li>
                                📞
                                <a href="tel:+50687562122">
                                    +506 8756-2122
                                </a>
                            </li>

                            <li>
                                📍 Los chiles, Alajuela, Costa Rica
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
