'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">rfid documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-729cd05342f7e94268c9d84c9b354e5e"' : 'data-target="#xs-components-links-module-AdminModule-729cd05342f7e94268c9d84c9b354e5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-729cd05342f7e94268c9d84c9b354e5e"' :
                                            'id="xs-components-links-module-AdminModule-729cd05342f7e94268c9d84c9b354e5e"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-69f65f43cb15930a41b614e6c2d90da8"' : 'data-target="#xs-components-links-module-AppModule-69f65f43cb15930a41b614e6c2d90da8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-69f65f43cb15930a41b614e6c2d90da8"' :
                                            'id="xs-components-links-module-AppModule-69f65f43cb15930a41b614e6c2d90da8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DecouverteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DecouverteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediaqueryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MediaqueryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-69f65f43cb15930a41b614e6c2d90da8"' : 'data-target="#xs-directives-links-module-AppModule-69f65f43cb15930a41b614e6c2d90da8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-69f65f43cb15930a41b614e6c2d90da8"' :
                                        'id="xs-directives-links-module-AppModule-69f65f43cb15930a41b614e6c2d90da8"' }>
                                        <li class="link">
                                            <a href="directives/ResponsiveDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResponsiveDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ShowIfLoggedInDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowIfLoggedInDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/showIfRoleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">showIfRoleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link">ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientModule-88b2745e246ccab4b2d6902086ede828"' : 'data-target="#xs-components-links-module-ClientModule-88b2745e246ccab4b2d6902086ede828"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientModule-88b2745e246ccab4b2d6902086ede828"' :
                                            'id="xs-components-links-module-ClientModule-88b2745e246ccab4b2d6902086ede828"' }>
                                            <li class="link">
                                                <a href="components/CalendrierCoursComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendrierCoursComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MesCoursComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MesCoursComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonCompteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MonCompteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientRoutingModule.html" data-type="entity-link">ClientRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link">PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-7399cf16e5936c2aefdfae476d32abb8"' : 'data-target="#xs-components-links-module-PublicModule-7399cf16e5936c2aefdfae476d32abb8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-7399cf16e5936c2aefdfae476d32abb8"' :
                                            'id="xs-components-links-module-PublicModule-7399cf16e5936c2aefdfae476d32abb8"' }>
                                            <li class="link">
                                                <a href="components/CoursdetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoursdetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourslistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourslistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TarifComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TarifComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link">PublicRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/TypeAbnmt.html" data-type="entity-link">TypeAbnmt</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeCours.html" data-type="entity-link">TypeCours</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link">Users</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AbonnementsService.html" data-type="entity-link">AbonnementsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthQuery.html" data-type="entity-link">AuthQuery</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthStore.html" data-type="entity-link">AuthStore</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionDataService.html" data-type="entity-link">SessionDataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link">JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGardService.html" data-type="entity-link">AuthGardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuardService.html" data-type="entity-link">RoleGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthState.html" data-type="entity-link">AuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileNode.html" data-type="entity-link">FileNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode.html" data-type="entity-link">TreeNode</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});