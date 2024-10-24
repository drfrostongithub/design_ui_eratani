import "../css/Navbar.css";
import ErataniLogo from "../assets/eratani.svg";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <div className='logo'>
            <img src={ErataniLogo} alt='Eratani Logo' />{" "}
          </div>
        </li>
        <li>
          <a href='#tim-kami'>Beranda</a>
        </li>
        <li>
          <a href='#tentang-kami'>Tentang Kami</a>
        </li>
        <li>
          <a href='#visi'>Tips & Berita Pertanian</a>
        </li>

        <li>
          <a href='#footer'>Kegiatan</a>
        </li>
        <li>
          <button className='login-btn'>Mitra Petani</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
