import header from './img/header.png';
import avatar from './img/profile.jpg';
import codepen from './img/codepen.png';
import github from './img/github.png';
import frontend from './img/frontend.png';
import togo from './img/togo-logo.png'
import pet from './img/pet.png'
import calculator from './img/calculator.png'

const colors = {
  gray: "RGB(151, 154, 154)",
  purple: "RGB(123, 24, 173)",
  pink: "rgb(246 213 230)"
}

const style = {
  header: {
    width: "100%",
  },
  profileContainer: {
    display: "flex",
  },
  avatarContainer: {
    position: "relative",
    marginLeft: "180px",
    marginRight: "250px"
  },
  avatar: {
    position: "absolute",
    top: "-50px",
    height: "200px",
    width: "200px",
    borderRadius: "100px",
    borderStyle: "groove",
  },
  contactContainer: {
    marginLeft: "5px",
  },
  h1contact: {
    marginBottom: "5px",
  },
  h3contact: {
    fontSize: "16px",
    marginTop: "5px",
    color: colors.purple,
    marginBottom: '15px'
  },
  h3title: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "gray",
    marginTop: "5px",
  },
  aboutmeContainer: {
    marginTop: "100px",
    borderTop: `1px solid ${colors.gray}`,
    display: "flex",
    marginLeft: "180px",
  },
  h1aboutme: {
    minWidth: "250px",
  },
  aboutme: {
    marginRight: "200px",
    marginTop: "30px",
    maxWidth: "1300px",
    lineHeight: "25px",
  },
  experienceContainer: {
    marginTop: "100px",
    borderTop: `1px solid ${colors.gray}`,
    display: "flex",
    marginLeft: "180px",
  },
  h1experience: {
    minWidth: "250px",
  },
  proyectsContainer: {
    display: "flex",
    maxWidth: "1300px",
    flexWrap: "wrap"
  },
  cardContainer: {
    display: "flex",
    minHeight: "80px"
  },
  componentContainer: {
    width: "300px",
    marginRight: "10px",
    marginTop: "20px",
    border: `1px solid ${colors.purple}`,
    borderRadius: "30px",
  },
  icon: {
    marginTop: "20px",
    marginLeft: "15px",
    borderRadius: "100px",
    width: "50px",
    height: "50px"
  },
  image: {
    marginTop: "20px",
    marginLeft: "15px",
    width: "50px",
    height: "50px"
  },
  h3card: {
    marginLeft: "15px",
    marginBottom: "1px",
  },
  text: {
    margin: "10px",
    fontSize: "12px",
    color: "gray",
  },
  urlContainer: {
    borderTop: `1px solid ${colors.gray}`,
    textAlign: "center",
    padding: "15px",
    marginTop: "10px",
  },
  link: {
    fontSize: "20px",
    fontWeight: "700",
    textDecoration: "none",
  },
  footer: {
    marginTop: "100px",
    height: "70px",
    backgroundColor: colors.pink,
  }
}

function App() {
  return (
    <div style={style.app}>
      <div style={style.header}>
        <img src={header} alt="encabezado"></img>
      </div>
      <div style={style.profileContainer}>
        <div style={style.avatarContainer}>
          <img style={style.avatar} src={avatar} alt="avatar"></img>
        </div>
        <div style={style.contactContainer}>
          <h1 style={style.h1contact}>Ingrid López</h1>
          <h3 style={style.h3contact}>Frontend & Web developer</h3>
          <a target="_blank" rel="noopener noreferrer" href='mailto:mtra.ingrid.lopez@gmail.com'>
            <h3 style={style.h3title}>
              <i class="fa-icon fa-solid fa-envelope"></i>mtra.ingrid.lopez@gmail.com
            </h3>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ingrid-lopez-61a874321/'>
            <h3 style={style.h3title}>
              <i class="fa-icon fa-brands fa-linkedin"></i>https://www.linkedin.com/
            </h3>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/maxsteelat'>
            <h3 style={style.h3title}>
              <i class="fa-icon fa-brands fa-square-github"></i>https://github.com/maxsteelat
            </h3>
          </a>
        </div>
      </div>
      <div>
        <div style={style.aboutmeContainer}>
          <h1 style={style.h1aboutme}>Sobre mí</h1>
          <p style={style.aboutme}>
            Siempre he tenido una gran curiosidad por la tecnología. Comencé con cursos en línea, aprendiendo los fundamentos y tecnologías como <strong>CSS</strong>, <strong>HTML</strong>, <strong>JS</strong>, <strong>React.js</strong>, etc. A pesar de los retos iniciales, mi dedicación me llevó a desarrollar proyectos pequeños, desde una página web hasta una aplicación web interactiva. Hoy en día, aspiro a convertirme en una programadora profesional, buscando constantemente mejorar mis habilidades y mantenerme al día con las últimas tecnologías.
          </p>
        </div>
        <div style={style.experienceContainer}>
          <h1 style={style.h1experience}>Experiencia</h1>
          <div style={style.proyectsContainer}>
            <div style={style.componentContainer}>
              <div style={style.cardContainer}>
                <img style={style.icon} src={codepen} alt="icono"></img>
                <div>
                  <h3 style={style.h3card}>Codepen.io</h3>
                  <p style={style.text}>CodePen es un entorno de desarrollo para diseñadores y desarrolladores front-end.</p>
                </div>
              </div>
              <div style={style.urlContainer}>
                <a style={style.link} target="_blank" rel="noopener noreferrer" href="https://codepen.io/Ingrid-Lopez">Ver perfil</a>
              </div>
            </div>
            <div style={style.componentContainer}>
              <div style={style.cardContainer}>
                <img style={style.icon} src={frontend} alt="icono"></img>
                <div>
                  <h3 style={style.h3card}>Frontend Mentor</h3>
                  <p style={style.text}>Frontend Mentor ofrece invaluables desafíos de desarrollo web del mundo real, agudizando mis habilidades en <strong>HTML</strong>, <strong>CSS</strong> y <strong>JS</strong>.</p>
                </div>
              </div>
              <div style={style.urlContainer}>
                <a style={style.link} target="_blank" rel="noopener noreferrer" href="https://www.frontendmentor.io/profile/MaxSteelAT">Ver perfil</a>
              </div>
            </div>
            <div style={style.componentContainer}>
              <div style={style.cardContainer}>
                <img style={style.icon} src={github} alt="icono"></img>
                <div>
                  <h3 style={style.h3card}>Github</h3>
                  <p style={style.text}>GitHub es una plataforma donde puedes almacenar, compartir y trabajar junto con otros usuarios para escribir código. </p>
                </div>
              </div>
              <div style={style.urlContainer}>
                <a style={style.link} target="_blank" rel="noopener noreferrer" href="https://github.com/MaxSteelAT">Ver perfil</a>
              </div>
            </div>
          </div>
        </div>
        <div style={style.experienceContainer}>
          <h1 style={style.h1experience}>Proyectos</h1>
          <div style={style.proyectsContainer}>
            <div style={style.componentContainer}>
              <div style={style.cardContainer}>
                <img style={style.image} src={togo} alt="icono"></img>
                <div>
                  <h3 style={style.h3card}>TOGO México - Sitio web - Wordpress</h3>
                  <p style={style.text}>
                  Desarrollo web con Wordpress:
                  Análisis de componentes.
                  Actualización de diseño.
                  Creación de componentes.
                  Integración y actualización de plugins.
                  </p>
                </div>
              </div>
              <div style={style.urlContainer}>
                <a style={style.link} target="_blank" rel="noopener noreferrer" href="https://togomexico.com.mx/">Ir a sitio</a>
              </div>
            </div>
            <div style={style.componentContainer}>
              <div style={style.cardContainer}>
                <img style={style.image} src={pet} alt="icono"></img>
                <div>
                  <h3 style={style.h3card}>Adoption center - personal</h3>
                  <p style={style.text}>Sitio web para visualizar listado y almacenamiento temporal utilizando información de API.</p>
                </div>
              </div>
              <div style={style.urlContainer}>
                <a style={style.link} target="_blank" rel="noopener noreferrer" href="https://maxsteelat.github.io/Adoption-Center/index.html">Ir a sitio</a>
              </div>
            </div>
            <div style={style.componentContainer}>
              <div style={style.cardContainer}>
                <img style={style.image} src={calculator} alt="icono"></img>
                <div>
                  <h3 style={style.h3card}>Calculator app with React - personal</h3>
                  <p style={style.text}>Simple calculadora creado con React.js. Se agregaron las operaciones básicas.</p>
                </div>
              </div>
              <div style={style.urlContainer}>
                <a style={style.link} target="_blank" rel="noopener noreferrer" href="https://maxsteelat.github.io/React-Calculator/">Ir a sitio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={style.footer}></footer>
    </div>
  );
}

export default App;
