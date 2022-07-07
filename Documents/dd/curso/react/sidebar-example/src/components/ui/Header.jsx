export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <i className="bx bx-menu header__menu-icon"></i>
        <div className="header__logo">
          <a href="#" className="header__logo-name">
            DiegoDom
          </a>
        </div>
        <nav className="navegacion">
          <div className="navegacion__logo">
            <span className="navegacion__logo-name">DiegoDom</span>
            <i className="bx bx-x navegacion__logo-icon"></i>
          </div>
          <ul className="enlaces">
            <li className="enlaces__enlace">
              <a href="#" className="enlaces__enlace-link">
                Home
              </a>
            </li>
            <li className="enlaces__enlace">
              <a href="#" className="enlaces__enlace-link">
                HTML & CSS
              </a>
              <i className="bx bx-chevron-down enlaces__enlace-arrow"></i>
              <ul className="enlaces__dropdown">
                <li className="enlaces__dropdown-item">
                  <a href="#" className="enlaces__dropdown-enlace">
                    Web Design
                  </a>
                </li>
                <li className="enlaces__dropdown-item">
                  <a href="#" className="enlaces__dropdown-enlace">
                    Login Form
                  </a>
                </li>
                <li className="enlaces__dropdown-item">
                  <a href="#" className="enlaces__dropdown-enlace">
                    Card Design
                  </a>
                </li>
                <li className="enlaces__dropdown-item submenu">
                  <a href="#" className="submenu__enlace-link">
                    More
                  </a>
                  <i className="bx bx-chevron-right arrow-right submenu__enlace-arrow"></i>
                  <ul className="submenu__dropdown">
                    <li className="submenu__dropdown-item">
                      <a href="#" className="submenu__dropdown-enlace">
                        Responsive Design
                      </a>
                    </li>
                    <li className="submenu__dropdown-item">
                      <a href="#" className="submenu__dropdown-enlace">
                        CSS Advanced
                      </a>
                    </li>
                    <li className="submenu__dropdown-item">
                      <a href="#" className="submenu__dropdown-enlace">
                        SEO
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="enlaces__enlace">
              <a href="#" className="enlaces__enlace-link">
                Javascript
              </a>
              <i className="bx bx-chevron-down enlaces__enlace-arrow"></i>
              <ul className="enlaces__dropdown">
                <li className="enlaces__dropdown-item">
                  <a href="#" className="enlaces__dropdown-enlace">
                    Dinamic Calculator
                  </a>
                </li>
                <li className="enlaces__dropdown-item">
                  <a href="#" className="enlaces__dropdown-enlace">
                    Form Validation
                  </a>
                </li>
                <li className="enlaces__dropdown-item">
                  <a href="#" className="enlaces__dropdown-enlace">
                    Calendar
                  </a>
                </li>
                <li className="enlaces__dropdown-item">
                  <a href="#" className="enlaces__dropdown-enlace">
                    Digital Clock
                  </a>
                </li>
              </ul>
            </li>
            <li className="enlaces__enlace">
              <a href="#" className="enlaces__enlace-link">
                About us
              </a>
            </li>
            <li className="enlaces__enlace">
              <a href="#" className="enlaces__enlace-link">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
