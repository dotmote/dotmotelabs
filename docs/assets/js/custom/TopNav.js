class TopNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<header id="headerBasic" class="u-header">
            <div class="u-header__section">
                <div id="basicLogoAndNav" class="container">
                    <!-- Nav -->
                    <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
                        <!-- Logo -->
                        <a class="navbar-brand u-header__navbar-brand" href="../index.html" aria-label="Front">
                            <img class="u-header__navbar-brand-default" src="../design/logo_horizontal_1.svg" alt="Logo"
                                width="75px" height="75px">
                        </a>
                        <!-- End Logo -->

                        <!-- Responsive Toggle Button -->
                        <button type="button" class="navbar-toggler btn u-hamburger" aria-label="Toggle navigation"
                            aria-expanded="false" aria-controls="navBarBasic" data-toggle="collapse"
                            data-target="#navBarBasic">
                            <span id="hamburgerTriggerBasic" class="u-hamburger__box">
                                <span class="u-hamburger__inner"></span>
                            </span>
                        </button>
                        <!-- End Responsive Toggle Button -->

                        <!-- Navigation -->
                        <div id="navBarBasic" class="collapse navbar-collapse u-header__navbar-collapse">
                            <ul class="navbar-nav u-header__navbar-nav">
                                <!-- Link -->
                                <li class="nav-item u-header__nav-item active">
                                    <a class="nav-link u-header__nav-link" href="../index.html">Home</a>
                                </li>
                                <!-- End Link -->

                                <li class="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover"
                                    data-animation-in="slideInUp" data-animation-out="fadeOut">
                                    <a id="dropdownMegaMenuWithDropdown"
                                        class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;"
                                        aria-haspopup="true" aria-expanded="false"
                                        aria-labelledby="dropdownSubMenuWithDropdown">Products</a>

                                    <!-- Dropdown - Submenu -->
                                    <ul id="dropdownSubMenuWithDropdown"
                                        class="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer"
                                        aria-labelledby="dropdownMegaMenuWithDropdown" style="min-width: 230px;">
                                        <li><a class="nav-link u-header__sub-menu-nav-link" href="../sweep.html">SWEEP</a>
                                        </li>
                                        <li><a class="nav-link u-header__sub-menu-nav-link"
                                            href="../plantbeats.html">Plantbeats®</a></li>
                                        <li><a class="nav-link u-header__sub-menu-nav-link"
                                            href="../sapflow_monitor.html">Sapflow Monitor</a></li>
                                        <li><a class="nav-link u-header__sub-menu-nav-link"
                                            href="../micromet_station.html">Micro-Met Station</a></li>
                                        <li><a class="nav-link u-header__sub-menu-nav-link"
                                            href="../terraview.html">TerraView™</a></li>
                                    </ul>
                                    <!-- End Dropdown - Submenu -->
                                </li>
                                <!-- End Dropdown -->

                                <!-- Link -->
                                <li class="nav-item u-header__nav-item">
                                    <a class="nav-link u-header__nav-link" href="../publications.html">Publications</a>
                                </li>
                                <!-- End Link -->

                                <!-- Link -->
                                <li class="nav-item u-header__nav-item">
                                    <a class="nav-link u-header__nav-link" href="../blog.html">Blog</a>
                                </li>
                                <!-- End Link -->

                                <!-- Link -->
                                <li class="nav-item u-header__nav-item">
                                    <a class="nav-link u-header__nav-link" href="../about_us.html">About Us</a>
                                </li>
                                <!-- End Link -->

                                <!-- Link -->
                                <li class="nav-item u-header__nav-item">
                                    <a class="nav-link u-header__nav-link" href="../contact_us.html">Contact Us</a>
                                </li>
                                <!-- End Link -->

                                <!-- End Dropdown -->
                            </ul>
                        </div>
                        <!-- End Navigation -->
                    </nav>
                    <!-- End Nav -->
                </div>
            </div>
        </header>`;
    }
}

window.customElements.define("top-nav", TopNav);