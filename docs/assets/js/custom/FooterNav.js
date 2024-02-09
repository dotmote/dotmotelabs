class FooterNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<footer class="border-top">
        <div class="container space-2">
            <div class="row justify-content-between">
                <div class="col-12 col-sm-4 col-md-4 col-lg-4 mb-6 mb-sm-0" style="border: none 3px gray">
                    <div class="row justify-content-center justify-content-sm-start">
                        <div class="text-center text-sm-left align-self-center">
                            <div class="d-flex flex-column justify-content-center" style="border: none 3px red;">
                                <!-- Logo -->
                                <div><a class="navbar-brand u-header__navbar-brand m-0" href="../index.html"
                                        aria-label="Front" style="width: 96px; height: 96px;">
                                        <img class=" u-header__navbar-brand-default" src="../design/logo_vertical.svg"
                                            alt="Logo" style="width: 96px; height: 96px;">
                                    </a></div>
                                <!-- End Logo -->
                                <!-- <p class="small text-muted mt-4 mb-0">© Dotmote Labs 2022</p> -->
                                <p class="small text-muted mt-4 mb-0">© Dotmote Labs <span id="footer-year"></span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-8 col-md col-lg-8 text-center text-sm-left mt-md-0"
                    style="border: none 3px gray">
                    <div class="row">
                        <div class="col-sm-6 col-md-6 col-lg mb-3 mb-sm-4 mb-lg-0" style="border: none 3px blue;">
                            <h4 class="h6 font-weight-semi-bold">Products</h4>

                            <ul class="list-group list-group-flush list-group-borderless mb-0">
                                <li><a class="list-group-item list-group-item-action" href="../sweep.html">SWEEP</a>
                                </li>
                                <li><a class="list-group-item list-group-item-action"
                                        href="../plantbeats.html">Plantbeats®</a>
                                </li>
                                <li><a class="list-group-item list-group-item-action"
                                        href="../sapflow_monitor.html">Sapflow
                                        Monitor</a></li>
                                <li><a class="list-group-item list-group-item-action"
                                        href="../micromet_station.html">Micro-Met
                                        Station</a>
                                </li>
                            </ul>
                            <!-- End List Group -->
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg mb-3 mb-sm-4 mb-lg-0" style="border: none 3px green;">
                            <h4 class="h6 font-weight-semi-bold">Research</h4>

                            <!-- List Group -->
                            <ul class="list-group list-group-flush list-group-borderless mb-0">
                                <li><a class="list-group-item list-group-item-action"
                                        href="../publications.html">Publications</a></li>
                            </ul>
                            <!-- End List Group -->
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg mb-3 mb-sm-0" style="border: none 3px purple;">
                            <h4 class="h6 font-weight-semi-bold">Company</h4>

                            <!-- List Group -->
                            <ul class="list-group list-group-flush list-group-borderless mb-0">
                                <li><a class="list-group-item list-group-item-action" href="../blog.html">Blog</a></li>
                                <li><a class="list-group-item list-group-item-action" href="../about_us.html">About
                                        Us</a>
                                </li>
                            </ul>
                            <!-- End List Group -->
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg" style="border: none 3px orange;">
                            <h4 class="h6 font-weight-semi-bold">Contact</h4>

                            <!-- List Group -->
                            <ul class="list-group list-group-flush list-group-borderless mb-1">
                                <li><a class="list-group-item list-group-item-action" href="../contact_us.html">Contact
                                        Us</a>
                                </li>
                            </ul>

                            <!-- Social Networks -->
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item mx-0">
                                    <a class="btn btn-sm btn-icon btn-soft-secondary rounded-circle"
                                        href="https://twitter.com/dotmotelabs">
                                        <span class="fab fa-twitter btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item mx-0">
                                    <a class="btn btn-sm btn-icon btn-soft-secondary rounded-circle"
                                        href="https://github.com/dotmote">
                                        <span class="fab fa-github btn-icon__inner"></span>
                                    </a>
                                </li>
                            </ul>
                            <!-- End Social Networks -->
                            <!-- End List Group -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>`;
    }
}

window.customElements.define("footer-nav", FooterNav);