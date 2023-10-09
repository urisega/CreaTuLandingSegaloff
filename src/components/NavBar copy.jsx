const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light navbar-light">
      <div class="container-fluid">
        <img src="tortugalogo.jpg" width="50" height="50"></img>
        <a class="navbar-brand" href="#">MiECommerce</a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
 
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                Opciones </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Accion1</a></li>
                <li><a class="dropdown-item" href="#">Accion2</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
    
          <ul class="navbar-nav d-flex flex-row me-1">
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
            </li>
          </ul>
          <form class="w-auto">
            <input
              type="search"
              class="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar