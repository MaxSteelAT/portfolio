import header from './img/header.png';
import avatar from './img/profile.jpg';
import codepen from './img/codepen.png';
import github from './img/github.png';
import frontend from './img/frontend.png';
import email from './img/email.png'

const colors = {
  gray: "RGB(151, 154, 154)",
  purple: "RGB(123, 24, 173)",
  pink: "rgb(246 213 230)"
}

const style = {
  header: {
    width: "100%",
    overflow: "hidden",
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
    marginBottom: "5px",
    color: colors.gray,
  },
  h3email: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "gray",
    marginTop: "5px",
  },
  email: {
    width: "30px",
    marginRight: "10px",
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
    marginBottom: "20px",
    height: "100px"
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
    marginTop: "30px",
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
          <h3 style={style.h3email}>
            <img alt="Correo electrónico" style={style.email} src={email}></img>mtra.ingrid.lopez@gmail.com
          </h3>
        </div>
      </div>
      <div>
        <div style={style.aboutmeContainer}>
          <h1 style={style.h1aboutme}>About me</h1>
          <p style={style.aboutme}>
            Siempre he tenido una gran curiosidad por la tecnología, pero fue después de algunas experiencias laborales cuando entendí que mi verdadera pasión era la programación. Comencé con cursos en línea, aprendiendo los fundamentos de lenguajes como JavaScript, React etc. A pesar de los retos iniciales, mi dedicación me llevó a desarrollar proyectos pequeños, desde una aplicación de gestión de tareas hasta una página web interactiva. Hoy en día, aspiro a convertirme en una programadora profesional, buscando constantemente mejorar mis habilidades y mantenerme al día con las últimas tecnologías. Mi objetivo es trabajar en una empresa de software innovadora, donde pueda contribuir con soluciones creativas y seguir aprendiendo de expertos en el campo.
          </p>
        </div>
        <div style={style.experienceContainer}>
          <h1 style={style.h1experience}>Experience</h1>
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
                <a style={style.link} target="_blank" rel="noopener" href="https://codepen.io/Ingrid-Lopez">Ver perfil</a>
              </div>
            </div>
            <div style={style.componentContainer}>
              <div style={style.cardContainer}>
                <img style={style.icon} src={frontend} alt="icono"></img>
                <div>
                  <h3 style={style.h3card}>Frontend Mentor</h3>
                  <p style={style.text}>Frontend Mentor ofrece invaluables desafíos de desarrollo web del mundo real, agudizando mis habilidades en HTML, CSS y JavaScript.</p>
                </div>
              </div>
              <div style={style.urlContainer}>
                <a style={style.link} target="_blank" rel="noopener" href="https://www.frontendmentor.io/profile/MaxSteelAT">Ver perfil</a>
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
                <a style={style.link} target="_blank" rel="noopener" href="https://github.com/MaxSteelAT">Ver perfil</a>
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
