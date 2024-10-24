import "../css/AboutPage.css";
import data from "../assets/FakeData.json";
import aboutUs from "../assets/about_us.png";
import erataniLogo from "../assets/eratani.svg";
import linkedInLogo from "../assets/linkedIn.svg";

const AboutPage = () => {
  return (
    <div>
      <section>
        <div className='hero-background' />
      </section>
      <section id='about-us' className='about-section'>
        <h2>Tentang Kami</h2>
        <div className='about-content'>
          <div className='about-image-container'>
            <img src={aboutUs} alt='About Us' className='about-image' />
            <img src={erataniLogo} alt='Logo' className='about-logo' />
          </div>
          <p>{data.aboutUs}</p>
        </div>
      </section>

      <section id='vision' className='vision-section'>
        <h2>Visi Eratani</h2>
        <p>{data.vision}</p>
      </section>

      <section id='mission' className='mission-section'>
        <h2>Misi Eratani</h2>
        <ul>
          {data.mission.map((missionItem, index) => (
            <li key={index}>{missionItem}</li>
          ))}
        </ul>
      </section>

      <section id='team' className='team-section'>
        <h2>Tim Kami</h2>
        <div className='team-members'>
          {data.team.map((member, index) => (
            <div key={index} className='team-member'>
              <div className='linkedin-button'>
                <a href={member.linkedin} target='_blank' rel='noreferrer'>
                  <img src={linkedInLogo} alt='LinkedIn' />
                </a>
              </div>
              <img
                src={require(`../assets/${member.photo}`)}
                alt={member.name}
                className='team-photo'
              />
              <div className='team-identity'>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
