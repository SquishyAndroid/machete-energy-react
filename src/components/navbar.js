export function Navbar() {
  return(
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div className="navbar-brand">
          <a href="/">
            <span className="brand-header">Machete</span>
            <div className="subtitle">ENERGY DRINK</div>
            </a>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">
                <li><a href="#product">PRODUCT</a></li>
                <li><a href="#ingredients">INGREDIENTS</a></li>
                <li><a href="#locations">LOCATIONS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}