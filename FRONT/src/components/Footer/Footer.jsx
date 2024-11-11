import logo from "../../assets/images/m-logo.png"

function Footer() {
  return (
    <footer className="h-32 sm:h-24 w-100 bg-dynamic flex items-center " >
      <div className="container mx-auto flex sm:flex-row flex-col items-center sm:justify-between">
        <div className=" hidden sm:block">
          <a href="#">
           <img  className=" h-24 logo w-auto"src={logo} alt="logo" />
          </a>

        </div>
        <div className="flex flex-col items-center text-sm font-textPrimary">
            <a className="mb-3" href="">Mentions légales</a>
            <p>© 2024 Mathias Jacquart. Tous droits réservés</p>
        </div>
        <div className="flex flex-row mt-3 sm:my-0">
          <div className="mx-2">
            <a target="_blank" href="https://github.com/mathiasjacquart?tab=repositories">
              <i className="fa-brands fa-square-github social"></i> 
            </a>

          </div>
          <div className="mx-2">
          <a  target='_blank'href="https://www.linkedin.com/in/mathiasjacquart/">
              <i className="fa-brands fa-linkedin social"></i> 
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
