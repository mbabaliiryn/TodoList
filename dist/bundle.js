/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#form-section {\n  text-align: center;\n}\n\n#new-todo {\n  font-size: 1.5rem;\n  color: #9d10d4;\n  margin-left: 10px;\n}\n\n#todo-title-input {\n  margin-bottom: 10px;\n}\n\n#todo-desc-input {\n  margin-bottom: 10px;\n}\n\n#todo-duedate-input {\n  margin-bottom: 10px;\n}\n\nfieldset {\n  width: 30%;\n  margin: 0 auto;\n}\n\nlegend {\n  text-align: center;\n}\n\ntextarea {\n  margin-top: 30px;\n}\n\ninput[type=submit] {\n  font-size: 1.3rem;\n  background-color: green;\n  border: none;\n  color: brown;\n}\n\nh1 {\n  color: rebeccapurple;\n}\n\nh3 {\n  color: chocolate;\n}", "",{"version":3,"sources":["/home/keshavchakravarthy/repos/javascript/TodoList/src/styles/_form.scss","style.scss","/home/keshavchakravarthy/repos/javascript/TodoList/src/styles/style.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;ACCF;;ADEA;EACI,iBAAA;EACA,cAAA;EACA,iBAAA;ACCJ;;ADEE;EACE,mBAAA;ACCJ;;ADEE;EACE,mBAAA;ACCJ;;ADEE;EACE,mBAAA;ACCJ;;ADEE;EACE,UAAA;EACA,cAAA;ACCJ;;ADEE;EACE,kBAAA;ACCJ;;ADEE;EACE,gBAAA;ACCJ;;ADEA;EACI,iBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;ACCJ;;ACvCA;EACE,oBAAA;AD0CF;;ACvCA;EACE,gBAAA;AD0CF","file":"style.scss","sourcesContent":["#form-section {\n  text-align: center;\n}\n\n#new-todo {\n    font-size: 1.5rem;\n    color: rgb(157, 16, 212);\n    margin-left: 10px;\n  }\n  \n  #todo-title-input {\n    margin-bottom: 10px;\n  }\n  \n  #todo-desc-input {\n    margin-bottom: 10px;\n  }\n  \n  #todo-duedate-input {\n    margin-bottom: 10px;\n  }\n  \n  fieldset {\n    width: 30%;\n    margin: 0 auto;\n  }\n  \n  legend {\n    text-align: center;\n  }\n  \n  textarea {\n    margin-top: 30px;\n  }\n\ninput[type=\"submit\"] {\n    font-size: 1.3rem;\n    background-color: green;\n    border: none;\n    color: brown;\n  }","#form-section {\n  text-align: center;\n}\n\n#new-todo {\n  font-size: 1.5rem;\n  color: #9d10d4;\n  margin-left: 10px;\n}\n\n#todo-title-input {\n  margin-bottom: 10px;\n}\n\n#todo-desc-input {\n  margin-bottom: 10px;\n}\n\n#todo-duedate-input {\n  margin-bottom: 10px;\n}\n\nfieldset {\n  width: 30%;\n  margin: 0 auto;\n}\n\nlegend {\n  text-align: center;\n}\n\ntextarea {\n  margin-top: 30px;\n}\n\ninput[type=submit] {\n  font-size: 1.3rem;\n  background-color: green;\n  border: none;\n  color: brown;\n}\n\nh1 {\n  color: rebeccapurple;\n}\n\nh3 {\n  color: chocolate;\n}","@use 'form';\nh1 {\n  color: rebeccapurple;\n}\n\nh3 {\n  color: chocolate;\n}\n\n// #content {\n//   text-align: center;\n// }\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: getAppData, storeAppData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppData", function() { return getAppData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeAppData", function() { return storeAppData; });
/* harmony import */ var _project_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_factory */ "./src/project_factory.js");


const storeAppData = ({ defaultProject, otherProjects }) => {
  const JSONifiedData = {};
  JSONifiedData.defaultProject = defaultProject.toJSON();
  JSONifiedData.otherProjects = otherProjects.map(project => project.toJSON());
  localStorage.setItem('projects', JSON.stringify(JSONifiedData));
};


const getAppData = () => {
  const defaultProjectLibrary = {
    defaultProject: Object(_project_factory__WEBPACK_IMPORTED_MODULE_0__["newProjectInstance"])('Miscellaneous Tasks', 0),
    otherProjects: [],
  };
  const JSONifiedData = JSON.parse(localStorage.getItem('projects'));
  let data;
  if (!JSONifiedData) {
    data = defaultProjectLibrary;
  } else {
    data = {};
    const { defaultProject, otherProjects } = JSONifiedData;
    data.defaultProject = Object(_project_factory__WEBPACK_IMPORTED_MODULE_0__["projectFromJSON"])(defaultProject);
    data.otherProjects = otherProjects.map(JSONifiedProject => Object(_project_factory__WEBPACK_IMPORTED_MODULE_0__["projectFromJSON"])(JSONifiedProject));
  }
  return data;
};




/***/ }),

/***/ "./src/display_results.js":
/*!********************************!*\
  !*** ./src/display_results.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


/*
  temporary method to display lists of projects and todos
*/
const createResultsSection = (projects) => {
  const listOfProjects = document.createElement('ul');
  listOfProjects.id = 'results';
  projects.forEach(project => {
    const pItem = document.createElement('li');
    listOfProjects.appendChild(pItem);
    const pTitle = document.createElement('p');
    pTitle.textContent = project.getTitle();
    pItem.appendChild(pTitle);
    const listOfTodos = document.createElement('ul');
    pItem.appendChild(listOfTodos);
    project.getTodos().forEach(todo => {
      const todoDetails = document.createElement('li');
      todoDetails.textContent = JSON.stringify(todo.getAttributes());
      listOfTodos.appendChild(todoDetails);
    });
  });
  return listOfProjects;
};

const renderResults = () => {
  const displaySection = document.getElementById('projects-data');
  let results = document.getElementById('results');
  if (results !== null) {
    results.remove();
  }
  const { defaultProject, otherProjects } = Object(_data__WEBPACK_IMPORTED_MODULE_0__["getAppData"])();
  const allProjects = [defaultProject].concat(otherProjects);
  results = createResultsSection(allProjects);
  displaySection.appendChild(results);
};

/* harmony default export */ __webpack_exports__["default"] = (renderResults);


/***/ }),

/***/ "./src/form_builder/description_section.js":
/*!*************************************************!*\
  !*** ./src/form_builder/description_section.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const descSection = document.createElement('section');
const descLabel = document.createElement('label');
descLabel.htmlFor = 'todo-desc-input';
descLabel.textContent = 'Description:';
const descInput = document.createElement('input');
descInput.id = 'todo-desc-input';
descInput.type = 'text';
descInput.name = 'description';
descSection.appendChild(descLabel);
descSection.appendChild(descInput);

/* harmony default export */ __webpack_exports__["default"] = (descSection);

/***/ }),

/***/ "./src/form_builder/due_date_section.js":
/*!**********************************************!*\
  !*** ./src/form_builder/due_date_section.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dueDateSection = document.createElement('section');
const dueDateLabel = document.createElement('label');
dueDateLabel.htmlFor = 'todo-duedate-input';
dueDateLabel.textContent = 'Due on:';
const dueDateInput = document.createElement('input');
dueDateInput.id = 'todo-duedate-input';
dueDateInput.type = 'date';
dueDateInput.name = 'duedate';
dueDateSection.appendChild(dueDateLabel);
dueDateSection.appendChild(dueDateInput);

/* harmony default export */ __webpack_exports__["default"] = (dueDateSection);

/***/ }),

/***/ "./src/form_builder/notes_section.js":
/*!*******************************************!*\
  !*** ./src/form_builder/notes_section.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const notesSection = document.createElement('section');
const notesLabel = document.createElement('label');
notesLabel.htmlFor = 'todo-notes-input';
notesLabel.textContent = 'Notes:';
const notesInput = document.createElement('textarea');
notesInput.id = 'todo-notes-input';
notesInput.name = 'notes';
notesInput.rows = '5';
notesInput.cols = '33';
notesInput.placeholder = 'Enter points of note for this todo...';
notesSection.appendChild(notesLabel);
notesSection.appendChild(notesInput);

/* harmony default export */ __webpack_exports__["default"] = (notesSection);

/***/ }),

/***/ "./src/form_builder/priority_section.js":
/*!**********************************************!*\
  !*** ./src/form_builder/priority_section.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const prioritySection = document.createElement('fieldset');
const priorityLegend = document.createElement('legend');
priorityLegend.textContent = 'Todo Priority';
prioritySection.appendChild(priorityLegend);
const priorityListValues = ['low', 'medium', 'high'];
priorityListValues.forEach((pVal) => {
  const priorityInput = document.createElement('input');
  priorityInput.type = 'radio';
  priorityInput.id = `todo-${pVal}-priority`;
  priorityInput.name = 'priority';
  priorityInput.value = pVal;
  const priorityLabel = document.createElement('label');
  priorityLabel.htmlFor = priorityInput.id;
  priorityLabel.textContent = pVal;
  prioritySection.appendChild(priorityInput);
  prioritySection.appendChild(priorityLabel);
});

/* harmony default export */ __webpack_exports__["default"] = (prioritySection);

/***/ }),

/***/ "./src/form_builder/submit_section.js":
/*!********************************************!*\
  !*** ./src/form_builder/submit_section.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const submitSection = document.createElement('section');
const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Create ToDo';
submitSection.appendChild(submitButton);

/* harmony default export */ __webpack_exports__["default"] = (submitSection);

/***/ }),

/***/ "./src/form_builder/title_section.js":
/*!*******************************************!*\
  !*** ./src/form_builder/title_section.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const titleSection = document.createElement('section');
const titleLabel = document.createElement('label');
titleLabel.htmlFor = 'todo-title-input';
titleLabel.textContent = 'Title:';
const titleInput = document.createElement('input');
titleInput.id = 'todo-title-input';
titleInput.type = 'text';
titleInput.name = 'title';
titleSection.appendChild(titleLabel);
titleSection.appendChild(titleInput);

/* harmony default export */ __webpack_exports__["default"] = (titleSection);

/***/ }),

/***/ "./src/form_builder/todo_form.js":
/*!***************************************!*\
  !*** ./src/form_builder/todo_form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _title_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title_section */ "./src/form_builder/title_section.js");
/* harmony import */ var _description_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description_section */ "./src/form_builder/description_section.js");
/* harmony import */ var _due_date_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./due_date_section */ "./src/form_builder/due_date_section.js");
/* harmony import */ var _priority_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priority_section */ "./src/form_builder/priority_section.js");
/* harmony import */ var _notes_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes_section */ "./src/form_builder/notes_section.js");
/* harmony import */ var _submit_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submit_section */ "./src/form_builder/submit_section.js");







const getTodoForm = (formAction, projectId) => {
  const todoForm = document.createElement('form');
  todoForm.id = 'new-todo';

  todoForm.appendChild(_title_section__WEBPACK_IMPORTED_MODULE_0__["default"]);
  todoForm.appendChild(_description_section__WEBPACK_IMPORTED_MODULE_1__["default"]);
  todoForm.appendChild(_due_date_section__WEBPACK_IMPORTED_MODULE_2__["default"]);
  todoForm.appendChild(_priority_section__WEBPACK_IMPORTED_MODULE_3__["default"]);
  todoForm.appendChild(_notes_section__WEBPACK_IMPORTED_MODULE_4__["default"]);
  todoForm.appendChild(_submit_section__WEBPACK_IMPORTED_MODULE_5__["default"]);

  const projectIdInput = document.createElement('input');
  projectIdInput.type = 'hidden';
  projectIdInput.id = 'todo-pid-input';
  projectIdInput.name = 'projectid';
  projectIdInput.value = Number(projectId).toString();

  todoForm.appendChild(projectIdInput);

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoFormInputs = {
      title: todoForm.elements.title.value,
      description: todoForm.elements.description.value,
      duedate: todoForm.elements.duedate.value,
      priority: todoForm.elements.priority.value,
      notes: todoForm.elements.notes.value,
      projectId: Number(todoForm.elements.projectid.value),
      checklist: [],
    };
    formAction(todoFormInputs);
    todoForm.reset();
  });

  return todoForm;
};

/* harmony default export */ __webpack_exports__["default"] = (getTodoForm);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_builder_todo_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form_builder/todo_form */ "./src/form_builder/todo_form.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods */ "./src/methods.js");





const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
contentTag.appendChild(h1);

// allow switching between project (const -> let)
const { defaultProject, otherProjects } = Object(_data__WEBPACK_IMPORTED_MODULE_2__["getAppData"])();
const currentProject = defaultProject;

const formSection = document.createElement('section');
formSection.id = 'form-section';
const todoForm = Object(_form_builder_todo_form__WEBPACK_IMPORTED_MODULE_1__["default"])(_methods__WEBPACK_IMPORTED_MODULE_3__["default"], currentProject.getId());
formSection.appendChild(todoForm);
contentTag.appendChild(formSection);

// Temporary to display added todos and projects
const displaySection = document.createElement('section');
displaySection.id = 'projects-data';
const heading = document.createElement('h3');
heading.textContent = 'Projects and Todos';
displaySection.appendChild(heading);
contentTag.appendChild(displaySection);


/***/ }),

/***/ "./src/methods.js":
/*!************************!*\
  !*** ./src/methods.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_factory */ "./src/todo_factory.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _display_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display_results */ "./src/display_results.js");




const addNewTodoToProject = ({
  title,
  description,
  duedate,
  priority,
  notes,
  projectId,
  checklist,
}) => {
  const newTodo = Object(_todo_factory__WEBPACK_IMPORTED_MODULE_0__["default"])(
    title,
    description,
    duedate,
    priority,
    notes,
    projectId,
    checklist,
  );
  const projectLibrary = Object(_data__WEBPACK_IMPORTED_MODULE_1__["getAppData"])();
  const { defaultProject, otherProjects } = projectLibrary;
  let project;
  if (projectId === 0) {
    project = defaultProject;
  } else {
    project = otherProjects.find(project => project.getId() === projectId);
  }
  project.addTodo(newTodo);
  Object(_data__WEBPACK_IMPORTED_MODULE_1__["storeAppData"])(projectLibrary);
  Object(_display_results__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ __webpack_exports__["default"] = (addNewTodoToProject);

/***/ }),

/***/ "./src/project_factory.js":
/*!********************************!*\
  !*** ./src/project_factory.js ***!
  \********************************/
/*! exports provided: newProjectInstance, projectFromJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProjectInstance", function() { return newProjectInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectFromJSON", function() { return projectFromJSON; });
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_factory */ "./src/todo_factory.js");


const newProjectInstance = (title, projectId, todos) => {
  todos = todos || [];

  const addTodo = (todoInstance) => {
    todos.push(todoInstance);
  };

  const getTitle = () => title;
  const getId = () => projectId;
  const getTodos = () => todos;

  const getTodoTitles = () => {
    const titles = [];
    todos.forEach(todo => {
      titles.push(todo.title);
    });
    return titles;
  };

  const toJSON = () => ({
    title: getTitle(),
    id: getId(),
    todos: todos.map(todo => todo.getAttributes()),
  });

  return {
    getTitle,
    getId,
    getTodos,
    addTodo,
    getTodoTitles,
    toJSON,
  };
};

const projectFromJSON = (({ title, id, todos }) => {
  const todoInstances = todos.map(({
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    checklist,
  }) => Object(_todo_factory__WEBPACK_IMPORTED_MODULE_0__["default"])(
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    checklist,
  ));
  return newProjectInstance(title, id, todoInstances);
});




/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/todo_factory.js":
/*!*****************************!*\
  !*** ./src/todo_factory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newTodoInstance = (
  title,
  description,
  dueDate,
  priority,
  notes,
  projectId,
  checklist,
) => {
  const getTitle = () => title;
  const getAttributes = () => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    checklist,
  });

  return {
    getAttributes,
    getTitle,
  };
};

/* harmony default export */ __webpack_exports__["default"] = (newTodoInstance);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5X3Jlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1fYnVpbGRlci9kZXNjcmlwdGlvbl9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtX2J1aWxkZXIvZHVlX2RhdGVfc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybV9idWlsZGVyL25vdGVzX3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1fYnVpbGRlci9wcmlvcml0eV9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtX2J1aWxkZXIvc3VibWl0X3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1fYnVpbGRlci90aXRsZV9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtX2J1aWxkZXIvdG9kb19mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdF9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovLy8uL3NyYy90b2RvX2ZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsS0FBSyw2REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUU4Qzs7Ozs7Ozs7Ozs7O0FDMUQvQyxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGdOQUFxRzs7QUFFdkk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw4RUFBZSxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2Zvcm0tc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuZXctdG9kbyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjOWQxMGQ0O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiN0b2RvLXRpdGxlLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN0b2RvLWRlc2MtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3RvZG8tZHVlZGF0ZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmxlZ2VuZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG59XFxuXFxuaDMge1xcbiAgY29sb3I6IGNob2NvbGF0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUva2VzaGF2Y2hha3JhdmFydGh5L3JlcG9zL2phdmFzY3JpcHQvVG9kb0xpc3Qvc3JjL3N0eWxlcy9fZm9ybS5zY3NzXCIsXCJzdHlsZS5zY3NzXCIsXCIvaG9tZS9rZXNoYXZjaGFrcmF2YXJ0aHkvcmVwb3MvamF2YXNjcmlwdC9Ub2RvTGlzdC9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBQ3ZDQTtFQUNFLG9CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGdCQUFBO0FEMENGXCIsXCJmaWxlXCI6XCJzdHlsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNmb3JtLXNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJnYigxNTcsIDE2LCAyMTIpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG4gIFxcbiAgI3RvZG8tdGl0bGUtaW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAjdG9kby1kZXNjLWlucHV0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgI3RvZG8tZHVlZGF0ZS1pbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIGZpZWxkc2V0IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICBcXG4gIGxlZ2VuZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgfVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBicm93bjtcXG4gIH1cIixcIiNmb3JtLXNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogIzlkMTBkNDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jdG9kby10aXRsZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jdG9kby1kZXNjLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN0b2RvLWR1ZWRhdGUtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiBjaG9jb2xhdGU7XFxufVwiLFwiQHVzZSAnZm9ybSc7XFxuaDEge1xcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiBjaG9jb2xhdGU7XFxufVxcblxcbi8vICNjb250ZW50IHtcXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4vLyB9XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBuZXdQcm9qZWN0SW5zdGFuY2UsIHByb2plY3RGcm9tSlNPTiB9IGZyb20gJy4vcHJvamVjdF9mYWN0b3J5JztcblxuY29uc3Qgc3RvcmVBcHBEYXRhID0gKHsgZGVmYXVsdFByb2plY3QsIG90aGVyUHJvamVjdHMgfSkgPT4ge1xuICBjb25zdCBKU09OaWZpZWREYXRhID0ge307XG4gIEpTT05pZmllZERhdGEuZGVmYXVsdFByb2plY3QgPSBkZWZhdWx0UHJvamVjdC50b0pTT04oKTtcbiAgSlNPTmlmaWVkRGF0YS5vdGhlclByb2plY3RzID0gb3RoZXJQcm9qZWN0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRvSlNPTigpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoSlNPTmlmaWVkRGF0YSkpO1xufTtcblxuXG5jb25zdCBnZXRBcHBEYXRhID0gKCkgPT4ge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdExpYnJhcnkgPSB7XG4gICAgZGVmYXVsdFByb2plY3Q6IG5ld1Byb2plY3RJbnN0YW5jZSgnTWlzY2VsbGFuZW91cyBUYXNrcycsIDApLFxuICAgIG90aGVyUHJvamVjdHM6IFtdLFxuICB9O1xuICBjb25zdCBKU09OaWZpZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIGxldCBkYXRhO1xuICBpZiAoIUpTT05pZmllZERhdGEpIHtcbiAgICBkYXRhID0gZGVmYXVsdFByb2plY3RMaWJyYXJ5O1xuICB9IGVsc2Uge1xuICAgIGRhdGEgPSB7fTtcbiAgICBjb25zdCB7IGRlZmF1bHRQcm9qZWN0LCBvdGhlclByb2plY3RzIH0gPSBKU09OaWZpZWREYXRhO1xuICAgIGRhdGEuZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RnJvbUpTT04oZGVmYXVsdFByb2plY3QpO1xuICAgIGRhdGEub3RoZXJQcm9qZWN0cyA9IG90aGVyUHJvamVjdHMubWFwKEpTT05pZmllZFByb2plY3QgPT4gcHJvamVjdEZyb21KU09OKEpTT05pZmllZFByb2plY3QpKTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCB7IGdldEFwcERhdGEsIHN0b3JlQXBwRGF0YSB9O1xuIiwiaW1wb3J0IHsgZ2V0QXBwRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5cbi8qXG4gIHRlbXBvcmFyeSBtZXRob2QgdG8gZGlzcGxheSBsaXN0cyBvZiBwcm9qZWN0cyBhbmQgdG9kb3NcbiovXG5jb25zdCBjcmVhdGVSZXN1bHRzU2VjdGlvbiA9IChwcm9qZWN0cykgPT4ge1xuICBjb25zdCBsaXN0T2ZQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpc3RPZlByb2plY3RzLmlkID0gJ3Jlc3VsdHMnO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChwSXRlbSk7XG4gICAgY29uc3QgcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICBwSXRlbS5hcHBlbmRDaGlsZChwVGl0bGUpO1xuICAgIGNvbnN0IGxpc3RPZlRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwSXRlbS5hcHBlbmRDaGlsZChsaXN0T2ZUb2Rvcyk7XG4gICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBjb25zdCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICB0b2RvRGV0YWlscy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHRvZG8uZ2V0QXR0cmlidXRlcygpKTtcbiAgICAgIGxpc3RPZlRvZG9zLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsaXN0T2ZQcm9qZWN0cztcbn07XG5cbmNvbnN0IHJlbmRlclJlc3VsdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWRhdGEnKTtcbiAgbGV0IHJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuICBpZiAocmVzdWx0cyAhPT0gbnVsbCkge1xuICAgIHJlc3VsdHMucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9ID0gZ2V0QXBwRGF0YSgpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF0uY29uY2F0KG90aGVyUHJvamVjdHMpO1xuICByZXN1bHRzID0gY3JlYXRlUmVzdWx0c1NlY3Rpb24oYWxsUHJvamVjdHMpO1xuICBkaXNwbGF5U2VjdGlvbi5hcHBlbmRDaGlsZChyZXN1bHRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclJlc3VsdHM7XG4iLCJjb25zdCBkZXNjU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5kZXNjTGFiZWwuaHRtbEZvciA9ICd0b2RvLWRlc2MtaW5wdXQnO1xuZGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5jb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZGVzY0lucHV0LmlkID0gJ3RvZG8tZGVzYy1pbnB1dCc7XG5kZXNjSW5wdXQudHlwZSA9ICd0ZXh0JztcbmRlc2NJbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbmRlc2NTZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG5kZXNjU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG5leHBvcnQgZGVmYXVsdCBkZXNjU2VjdGlvbjsiLCJjb25zdCBkdWVEYXRlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5kdWVEYXRlTGFiZWwuaHRtbEZvciA9ICd0b2RvLWR1ZWRhdGUtaW5wdXQnO1xuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBvbjonO1xuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmR1ZURhdGVJbnB1dC5pZCA9ICd0b2RvLWR1ZWRhdGUtaW5wdXQnO1xuZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5kdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVkYXRlJztcbmR1ZURhdGVTZWN0aW9uLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG5kdWVEYXRlU2VjdGlvbi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG5leHBvcnQgZGVmYXVsdCBkdWVEYXRlU2VjdGlvbjsiLCJjb25zdCBub3Rlc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbm5vdGVzTGFiZWwuaHRtbEZvciA9ICd0b2RvLW5vdGVzLWlucHV0Jztcbm5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXM6JztcbmNvbnN0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xubm90ZXNJbnB1dC5pZCA9ICd0b2RvLW5vdGVzLWlucHV0Jztcbm5vdGVzSW5wdXQubmFtZSA9ICdub3Rlcyc7XG5ub3Rlc0lucHV0LnJvd3MgPSAnNSc7XG5ub3Rlc0lucHV0LmNvbHMgPSAnMzMnO1xubm90ZXNJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBwb2ludHMgb2Ygbm90ZSBmb3IgdGhpcyB0b2RvLi4uJztcbm5vdGVzU2VjdGlvbi5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKTtcbm5vdGVzU2VjdGlvbi5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcblxuZXhwb3J0IGRlZmF1bHQgbm90ZXNTZWN0aW9uOyIsImNvbnN0IHByaW9yaXR5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5jb25zdCBwcmlvcml0eUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xucHJpb3JpdHlMZWdlbmQudGV4dENvbnRlbnQgPSAnVG9kbyBQcmlvcml0eSc7XG5wcmlvcml0eVNlY3Rpb24uYXBwZW5kQ2hpbGQocHJpb3JpdHlMZWdlbmQpO1xuY29uc3QgcHJpb3JpdHlMaXN0VmFsdWVzID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcbnByaW9yaXR5TGlzdFZhbHVlcy5mb3JFYWNoKChwVmFsKSA9PiB7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcmlvcml0eUlucHV0LnR5cGUgPSAncmFkaW8nO1xuICBwcmlvcml0eUlucHV0LmlkID0gYHRvZG8tJHtwVmFsfS1wcmlvcml0eWA7XG4gIHByaW9yaXR5SW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBwVmFsO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gcHJpb3JpdHlJbnB1dC5pZDtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IHBWYWw7XG4gIHByaW9yaXR5U2VjdGlvbi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgcHJpb3JpdHlTZWN0aW9uLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByaW9yaXR5U2VjdGlvbjsiLCJjb25zdCBzdWJtaXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXRCdXR0b24udmFsdWUgPSAnQ3JlYXRlIFRvRG8nO1xuc3VibWl0U2VjdGlvbi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG5leHBvcnQgZGVmYXVsdCBzdWJtaXRTZWN0aW9uOyIsImNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xudGl0bGVMYWJlbC5odG1sRm9yID0gJ3RvZG8tdGl0bGUtaW5wdXQnO1xudGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG50aXRsZUlucHV0LmlkID0gJ3RvZG8tdGl0bGUtaW5wdXQnO1xudGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xudGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbnRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbnRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuZXhwb3J0IGRlZmF1bHQgdGl0bGVTZWN0aW9uOyIsImltcG9ydCB0aXRsZUlucHV0IGZyb20gJy4vdGl0bGVfc2VjdGlvbic7XG5pbXBvcnQgZGVzY0lucHV0IGZyb20gJy4vZGVzY3JpcHRpb25fc2VjdGlvbic7XG5pbXBvcnQgZHVlRGF0ZUlucHV0IGZyb20gJy4vZHVlX2RhdGVfc2VjdGlvbic7XG5pbXBvcnQgcHJpb3JpdHlJbnB1dCBmcm9tICcuL3ByaW9yaXR5X3NlY3Rpb24nO1xuaW1wb3J0IG5vdGVzSW5wdXQgZnJvbSAnLi9ub3Rlc19zZWN0aW9uJztcbmltcG9ydCBzdWJtaXRCdXR0b24gZnJvbSAnLi9zdWJtaXRfc2VjdGlvbic7XG5cbmNvbnN0IGdldFRvZG9Gb3JtID0gKGZvcm1BY3Rpb24sIHByb2plY3RJZCkgPT4ge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdG9kb0Zvcm0uaWQgPSAnbmV3LXRvZG8nO1xuXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgY29uc3QgcHJvamVjdElkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qZWN0SWRJbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gIHByb2plY3RJZElucHV0LmlkID0gJ3RvZG8tcGlkLWlucHV0JztcbiAgcHJvamVjdElkSW5wdXQubmFtZSA9ICdwcm9qZWN0aWQnO1xuICBwcm9qZWN0SWRJbnB1dC52YWx1ZSA9IE51bWJlcihwcm9qZWN0SWQpLnRvU3RyaW5nKCk7XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdElkSW5wdXQpO1xuXG4gIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG9kb0Zvcm1JbnB1dHMgPSB7XG4gICAgICB0aXRsZTogdG9kb0Zvcm0uZWxlbWVudHMudGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogdG9kb0Zvcm0uZWxlbWVudHMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBkdWVkYXRlOiB0b2RvRm9ybS5lbGVtZW50cy5kdWVkYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHRvZG9Gb3JtLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlLFxuICAgICAgbm90ZXM6IHRvZG9Gb3JtLmVsZW1lbnRzLm5vdGVzLnZhbHVlLFxuICAgICAgcHJvamVjdElkOiBOdW1iZXIodG9kb0Zvcm0uZWxlbWVudHMucHJvamVjdGlkLnZhbHVlKSxcbiAgICAgIGNoZWNrbGlzdDogW10sXG4gICAgfTtcbiAgICBmb3JtQWN0aW9uKHRvZG9Gb3JtSW5wdXRzKTtcbiAgICB0b2RvRm9ybS5yZXNldCgpO1xuICB9KTtcblxuICByZXR1cm4gdG9kb0Zvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRUb2RvRm9ybTtcbiIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZ2V0TmV3VG9kb0Zvcm0gZnJvbSAnLi9mb3JtX2J1aWxkZXIvdG9kb19mb3JtJztcbmltcG9ydCB7IGdldEFwcERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGFkZE5ld1RvZG9Ub1Byb2plY3QgZnJvbSAnLi9tZXRob2RzJztcblxuY29uc3QgY29udGVudFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oMS50ZXh0Q29udGVudCA9ICdUb0RvIExpc3QgQXBwJztcbmNvbnRlbnRUYWcuYXBwZW5kQ2hpbGQoaDEpO1xuXG4vLyBhbGxvdyBzd2l0Y2hpbmcgYmV0d2VlbiBwcm9qZWN0IChjb25zdCAtPiBsZXQpXG5jb25zdCB7IGRlZmF1bHRQcm9qZWN0LCBvdGhlclByb2plY3RzIH0gPSBnZXRBcHBEYXRhKCk7XG5jb25zdCBjdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuXG5jb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmZvcm1TZWN0aW9uLmlkID0gJ2Zvcm0tc2VjdGlvbic7XG5jb25zdCB0b2RvRm9ybSA9IGdldE5ld1RvZG9Gb3JtKGFkZE5ld1RvZG9Ub1Byb2plY3QsIGN1cnJlbnRQcm9qZWN0LmdldElkKCkpO1xuZm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuY29udGVudFRhZy5hcHBlbmRDaGlsZChmb3JtU2VjdGlvbik7XG5cbi8vIFRlbXBvcmFyeSB0byBkaXNwbGF5IGFkZGVkIHRvZG9zIGFuZCBwcm9qZWN0c1xuY29uc3QgZGlzcGxheVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5kaXNwbGF5U2VjdGlvbi5pZCA9ICdwcm9qZWN0cy1kYXRhJztcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuaGVhZGluZy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyBhbmQgVG9kb3MnO1xuZGlzcGxheVNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5jb250ZW50VGFnLmFwcGVuZENoaWxkKGRpc3BsYXlTZWN0aW9uKTtcbiIsImltcG9ydCB0b2RvRmFjdG9yeSBmcm9tICcuL3RvZG9fZmFjdG9yeSc7XG5pbXBvcnQgeyBnZXRBcHBEYXRhLCBzdG9yZUFwcERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHJlbmRlckFwcERhdGEgZnJvbSAnLi9kaXNwbGF5X3Jlc3VsdHMnO1xuXG5jb25zdCBhZGROZXdUb2RvVG9Qcm9qZWN0ID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVkYXRlLFxuICBwcmlvcml0eSxcbiAgbm90ZXMsXG4gIHByb2plY3RJZCxcbiAgY2hlY2tsaXN0LFxufSkgPT4ge1xuICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlZGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBwcm9qZWN0SWQsXG4gICAgY2hlY2tsaXN0LFxuICApO1xuICBjb25zdCBwcm9qZWN0TGlicmFyeSA9IGdldEFwcERhdGEoKTtcbiAgY29uc3QgeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9ID0gcHJvamVjdExpYnJhcnk7XG4gIGxldCBwcm9qZWN0O1xuICBpZiAocHJvamVjdElkID09PSAwKSB7XG4gICAgcHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QgPSBvdGhlclByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgPT09IHByb2plY3RJZCk7XG4gIH1cbiAgcHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICBzdG9yZUFwcERhdGEocHJvamVjdExpYnJhcnkpO1xuICByZW5kZXJBcHBEYXRhKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGROZXdUb2RvVG9Qcm9qZWN0OyIsImltcG9ydCB0b2RvRmFjdG9yeSBmcm9tICcuL3RvZG9fZmFjdG9yeSc7XG5cbmNvbnN0IG5ld1Byb2plY3RJbnN0YW5jZSA9ICh0aXRsZSwgcHJvamVjdElkLCB0b2RvcykgPT4ge1xuICB0b2RvcyA9IHRvZG9zIHx8IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kb0luc3RhbmNlKSA9PiB7XG4gICAgdG9kb3MucHVzaCh0b2RvSW5zdGFuY2UpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gcHJvamVjdElkO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuXG4gIGNvbnN0IGdldFRvZG9UaXRsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGVzID0gW107XG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIHRpdGxlcy5wdXNoKHRvZG8udGl0bGUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aXRsZXM7XG4gIH07XG5cbiAgY29uc3QgdG9KU09OID0gKCkgPT4gKHtcbiAgICB0aXRsZTogZ2V0VGl0bGUoKSxcbiAgICBpZDogZ2V0SWQoKSxcbiAgICB0b2RvczogdG9kb3MubWFwKHRvZG8gPT4gdG9kby5nZXRBdHRyaWJ1dGVzKCkpLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldElkLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgZ2V0VG9kb1RpdGxlcyxcbiAgICB0b0pTT04sXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0RnJvbUpTT04gPSAoKHsgdGl0bGUsIGlkLCB0b2RvcyB9KSA9PiB7XG4gIGNvbnN0IHRvZG9JbnN0YW5jZXMgPSB0b2Rvcy5tYXAoKHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RJZCxcbiAgICBjaGVja2xpc3QsXG4gIH0pID0+IHRvZG9GYWN0b3J5KFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgcHJvamVjdElkLFxuICAgIGNoZWNrbGlzdCxcbiAgKSk7XG4gIHJldHVybiBuZXdQcm9qZWN0SW5zdGFuY2UodGl0bGUsIGlkLCB0b2RvSW5zdGFuY2VzKTtcbn0pO1xuXG5leHBvcnQgeyBuZXdQcm9qZWN0SW5zdGFuY2UsIHByb2plY3RGcm9tSlNPTiB9O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBuZXdUb2RvSW5zdGFuY2UgPSAoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIG5vdGVzLFxuICBwcm9qZWN0SWQsXG4gIGNoZWNrbGlzdCxcbikgPT4ge1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXRBdHRyaWJ1dGVzID0gKCkgPT4gKHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RJZCxcbiAgICBjaGVja2xpc3QsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0QXR0cmlidXRlcyxcbiAgICBnZXRUaXRsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1RvZG9JbnN0YW5jZTsiXSwic291cmNlUm9vdCI6IiJ9