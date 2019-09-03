module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/App.jsx":
/*!***********************!*\
  !*** ./pages/App.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Main */ "./pages/pages/Main.jsx");
/* harmony import */ var _pages_Odyssey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Odyssey */ "./pages/pages/Odyssey.jsx");
/* harmony import */ var _pages_Enroute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Enroute */ "./pages/pages/Enroute.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Nav */ "./pages/components/Nav.jsx");
/* harmony import */ var _components_ProjectNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ProjectNav */ "./pages/components/ProjectNav.jsx");






 // import mainContent from '/static/content/main.json.js';

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
      projects: mainContent.nav.projects,
      logo: mainContent.nav.logo
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProjectNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
      projects: mainContent.nav.projects
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/",
      exact: true,
      component: _pages_Main__WEBPACK_IMPORTED_MODULE_2__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/projects/odyssey",
      component: _pages_Odyssey__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/projects/enroute",
      component: _pages_Enroute__WEBPACK_IMPORTED_MODULE_4__["default"]
    }))));
  }

}

/***/ }),

/***/ "./pages/components/Hero.jsx":
/*!***********************************!*\
  !*** ./pages/components/Hero.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Hero = ({
  heroImage,
  heroAlt
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "row center-xs"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col-xs-12 col-sm-10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: heroImage,
  alt: heroAlt
})));

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./pages/components/ImageSection.jsx":
/*!*******************************************!*\
  !*** ./pages/components/ImageSection.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // Example: <ImageSection images={[]} header={} caption={[]} />

const ImageSection = ({
  images,
  header,
  caption
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  className: "container"
}, (caption || header) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "row center-xs"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col-sm-6 col-xs-10"
}, header && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  className: "main-titles"
}, header), caption && caption.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  dangerouslySetInnerHTML: {
    __html: caption
  }
}))), images && images.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "row center-xs"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col-xs-12 col-sm-10"
}, images.map(image => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  key: image.url,
  src: image.url,
  alt: image.alt
})))));

/* harmony default export */ __webpack_exports__["default"] = (ImageSection);

/***/ }),

/***/ "./pages/components/IntroSection.jsx":
/*!*******************************************!*\
  !*** ./pages/components/IntroSection.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const IntroSection = ({
  introHeader,
  introCaption
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "row center-xs"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col-sm-6 col-xs-10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, introHeader), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "intro",
  dangerouslySetInnerHTML: {
    __html: introCaption
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (IntroSection);

/***/ }),

/***/ "./pages/components/MethodologySection.jsx":
/*!*************************************************!*\
  !*** ./pages/components/MethodologySection.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const MethodologySection = ({
  methodologyHeader,
  methodologyContent
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "row center-xs"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col-sm-6 col-xs-10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "methodology-box"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, methodologyHeader), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  dangerouslySetInnerHTML: {
    __html: methodologyContent
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (MethodologySection);

/***/ }),

/***/ "./pages/components/Nav.jsx":
/*!**********************************!*\
  !*** ./pages/components/Nav.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      projectsHover: false
    };
  }

  render() {
    const {
      projectsHover
    } = this.state;
    const {
      projects,
      logo
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-fluid"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row middle-xs nav-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-4"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "nav-logo",
      src: logo,
      alt: "laboy logo"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-6 col-sm-offset-2 end-sm"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onMouseEnter: () => {
        this.setState({
          projectsHover: true
        });
      },
      onMouseLeave: () => {
        this.setState({
          projectsHover: false
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "navbar-links"
    }, "Projects"), projectsHover && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: "relative"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "navbar-links",
      style: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, projects.map(project => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: project.name
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: project.url
    }, project.name)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      className: "navbar-links"
    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      className: "navbar-links"
    }, "Contact")))))));
  }

}

/***/ }),

/***/ "./pages/components/ProjectNav.jsx":
/*!*****************************************!*\
  !*** ./pages/components/ProjectNav.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



const ProjectNav = ({
  projects
}) => {
  let index;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].url === window.location.pathname) {
      index = i;
    }
  }

  const projectIndexAmount = projects.length - 1;
  const nextIndex = index === projectIndexAmount ? 0 : index + 1;
  const previousIndex = index === 0 ? projectIndexAmount : index - 1;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row project-navigation-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, !isNaN(previousIndex) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: projects[previousIndex].url,
    className: "project-navigation-links previous-project"
  }, "< Previous"), !isNaN(nextIndex) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: projects[nextIndex].url,
    className: "project-navigation-links next-project"
  }, "Next >")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ProjectNav));

/***/ }),

/***/ "./pages/components/TopSection.jsx":
/*!*****************************************!*\
  !*** ./pages/components/TopSection.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero */ "./pages/components/Hero.jsx");
/* harmony import */ var _IntroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IntroSection */ "./pages/components/IntroSection.jsx");
/* harmony import */ var _MethodologySection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MethodologySection */ "./pages/components/MethodologySection.jsx");





const TopSection = ({
  heroImage,
  heroAlt,
  introHeader,
  introCaption,
  methodologyHeader,
  methodologyContent,
  description
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, console.log(heroImage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
  heroImage: heroImage,
  heroAlt: heroAlt
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IntroSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
  introHeader: introHeader,
  introCaption: introCaption
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MethodologySection__WEBPACK_IMPORTED_MODULE_3__["default"], {
  methodologyHeader: methodologyHeader,
  methodologyContent: methodologyContent
}), description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "row center-xs"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col-sm-6 col-xs-10"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  dangerouslySetInnerHTML: {
    __html: description
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (TopSection);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./pages/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./pages/pages/Enroute.jsx":
/*!*********************************!*\
  !*** ./pages/pages/Enroute.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ImageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ImageSection */ "./pages/components/ImageSection.jsx");
/* harmony import */ var _components_TopSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TopSection */ "./pages/components/TopSection.jsx");


 // import enrouteContent from '/static/content/enroute.json.js';

class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      topSection,
      imageSections
    } = enrouteContent;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heroImage: topSection.hero.image,
      heroAlt: topSection.hero.name,
      introHeader: topSection.intro.header,
      introCaption: topSection.intro.content,
      methodologyHeader: topSection.methodology.header,
      methodologyContent: topSection.methodology.content,
      description: topSection.description
    }), imageSections && imageSections.length > 0 && imageSections.map(section => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ImageSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: section.header,
      images: section.images,
      header: section.header,
      caption: section.caption
    })));
  }

}

/***/ }),

/***/ "./pages/pages/Main.jsx":
/*!******************************!*\
  !*** ./pages/pages/Main.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "This is the main page", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/odyssey"
    }, "Odyssey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/enroute"
    }, "Enroute"));
  }

}

/***/ }),

/***/ "./pages/pages/Odyssey.jsx":
/*!*********************************!*\
  !*** ./pages/pages/Odyssey.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopSection */ "./pages/components/TopSection.jsx");
/* harmony import */ var _components_ImageSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageSection */ "./pages/components/ImageSection.jsx");


 // import odysseyContent from '/static/content/odyssey.json.js';

class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      topSection,
      imageSections
    } = odysseyContent;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      heroImage: topSection.hero.image,
      heroAlt: topSection.hero.name,
      introHeader: topSection.intro.header,
      introCaption: topSection.intro.content,
      methodologyHeader: topSection.methodology.header,
      methodologyContent: topSection.methodology.content
    }), imageSections && imageSections.length > 0 && imageSections.map(section => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ImageSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: section.header,
      images: section.images,
      header: section.header,
      caption: section.caption
    })));
  }

}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mfjvacas/Documents/Dev/GitHub/projects/laboy/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map