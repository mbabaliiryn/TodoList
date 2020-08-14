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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/accordion/src/accordion.css":
/*!**************************************************!*\
  !*** ./node_modules/accordion/src/accordion.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./accordion.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/accordion/src/accordion.css");

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

/***/ "./node_modules/accordion/src/accordion.mjs":
/*!**************************************************!*\
  !*** ./node_modules/accordion/src/accordion.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _helpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.mjs */ "./node_modules/accordion/src/helpers.mjs");
/* harmony import */ var _fold_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fold.mjs */ "./node_modules/accordion/src/fold.mjs");





const accordions     = [];
let activeAccordions = 0;
let lastResizeRate;


/**
 * Represents a column of collapsible content regions.
 * @class
 */
class Accordion {

	/**
	 * Instantiate a new Accordion instance.
	 *
	 * @param {HTMLElement} el                    - Container wrapped around each immediate fold
	 * @param {Object}      options               - Optional hash of settings
	 * @param {String}      options.openClass     - CSS class controlling each fold's "open" state
	 * @param {String}      options.closeClass    - CSS class used to mark a fold as closed
	 * @param {String}      options.edgeClass     - CSS class toggled based on whether the bottom-edge is visible
	 * @param {String}      options.snapClass     - CSS class for disabling transitions between window resizes
	 * @param {String}      options.enabledClass  - CSS class marking an accordion as enabled
	 * @param {String}      options.disabledClass - CSS class marking an accordion as disabled
	 * @param {Boolean}     options.disabled      - Whether to disable the accordion on creation
	 * @param {Boolean}     options.modal         - Whether to close the current fold when opening another
	 * @param {Boolean}     options.noAria        - Disable the addition and management of ARIA attributes
	 * @param {Boolean}     options.noKeys        - Disable keyboard navigation
	 * @param {Boolean}     options.noTransforms  - Disable CSS transforms; positioning will be used instead
	 * @param {Number}      options.heightOffset  - Distance to offset each fold by
	 * @param {Boolean}     options.useBorders    - Consider borders when calculating fold heights
	 * @param {Function}    options.onToggle      - Callback executed when opening or closing a fold
	 * @constructor
	 */
	constructor(el, options){
		this.index = accordions.push(this) - 1;
		
		// Parse options
		options            = options || {};
		this.openClass     = options.openClass  || "open";
		this.closeClass    = options.closeClass || "closed";
		this.edgeClass     = (undefined === options.edgeClass    ? "edge-visible" : options.edgeClass);
		this.snapClass     = (undefined === options.snapClass    ? "snap"         : options.snapClass);
		this.enabledClass  = (undefined === options.enabledClass ? "accordion"    : options.enabledClass);
		this.disabledClass = options.disabledClass;
		this.modal         = !!options.modal;
		this.noAria        = !!options.noAria;
		this.noKeys        = !!options.noKeys;
		this.noTransforms  = !!options.noTransforms;
		this.heightOffset  = +options.heightOffset || 0;
		this.useBorders    = undefined === options.useBorders ? "auto" : options.useBorders;
		this.onToggle      = options.onToggle;
		
		
		// Create a fold for each immediate descendant of the Accordion's container
		let folds = [];
		for(let i of Array.from(el.children)){
			let fold = new _fold_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](this, i);
			folds.push(fold);
			
			// Connect the fold to its previous sibling, if it's not the first to be added
			let prev = folds[folds.length - 2];
			if(prev){
				prev.nextFold     = fold;
				fold.previousFold = prev;
			}
		}
		
		
		el.accordion    = this.index;
		this.noAria || el.setAttribute("role", "tablist");
		this.el         = el;
		this.folds      = folds;

		// Add .enabledClass early - it might affect the heights of each fold
		if(!options.disabled && this.enabledClass)
			el.classList.add(this.enabledClass);
		
		this.update();
		
		
		// Find out if this accordion's nested inside another
		let next = el;
		while((next = next.parentNode) && 1 === next.nodeType){
			let fold = Accordion.getFold(next);
			if(fold){
				let accordion   = fold.accordion;
				this.parent     = accordion;
				this.parentFold = fold;
				this.edgeClass && el.classList.remove(this.edgeClass);
				(accordion.childAccordions = accordion.childAccordions || []).push(this);
				(fold.childAccordions      = fold.childAccordions      || []).push(this);

				// Adjust the height of the containing fold's element
				if(fold.open){
					let scrollHeight = fold.el.scrollHeight;
					let distance     = (fold.headingHeight + fold.content.scrollHeight) - scrollHeight || (scrollHeight - fold.el.clientHeight);
					accordion.updateFold(fold, distance);
				}
				break;
			}
		}
		
		
		this.edgeClass && this.el.addEventListener(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"], this.onTransitionEnd = e => {
			if(!this.parent && e.target === el && "height" === e.propertyName && el.getBoundingClientRect().bottom > window.innerHeight)
				el.classList.remove(this.edgeClass);
		});
		
		this.disabled = !!options.disabled;
	}
	
	
	/**
	 * Get or set the accordion enclosing this one.
	 *
	 * @property
	 * @type {Accordion}
	 */
	set parent(input){ this._parent = input; }
	get parent(){
		let result = this._parent;
		if(!result) return null;
		
		// Search for the first ancestor that *isn't* disabled
		while(result){
			if(!result.disabled) return result;
			result = result.parent;
		}
		return null;
	}
	
	
	/**
	 * Get or set the fold of the accordion enclosing this one.
	 *
	 * @property
	 * @type {Fold}
	 */
	set parentFold(input){ this._parentFold = input; }
	get parentFold(){
		let fold = this._parentFold;
		if(!fold) return null;
		
		let accordion = fold.accordion;
		
		// Search for the first ancestor that *isn't* disabled
		while(fold && accordion){
			if(!accordion.disabled) return fold;
			if(accordion = accordion.parent)
				fold = accordion.parentFold;
		}
		return null;
	}
	
	
	/**
	 * Whether the accordion's been deactivated.
	 *
	 * @property
	 * @type {Boolean}
	 */
	get disabled(){ return this._disabled; }
	set disabled(input){
		if((input = !!input) !== this._disabled){
			const el      = this.el;
			const style   = el.style;
			const classes = el.classList;
			
			this.enabledClass  && Object(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["setToken"])(classes, this.enabledClass,  !input);
			this.disabledClass && Object(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["setToken"])(classes, this.disabledClass,  input);
			
			
			// Deactivating
			if(this._disabled = input){
				style.height = null;
				this.snapClass && classes.remove(this.snapClass);
				if(this.edgeClass){
					el.removeEventListener(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"], this.onTransitionEnd);
					classes.remove(this.edgeClass);
				}
				
				for(let i of this.folds)
					i.disabled = true;
				
				this.noAria || el.removeAttribute("role");
				--activeAccordions;
			}
			
			
			// Reactivating
			else{
				for(let i of this.folds)
					i.disabled = false;
				
				this.noAria || el.setAttribute("role", "tablist");
				++activeAccordions;
				this.update();
			}
			

			
			// If there're no more active accordions, disable the onResize handler
			if(activeAccordions <= 0){
				activeAccordions = 0;
				Accordion.setResizeRate(false);
			}
			
			// Otherwise, reactivate the onResize handler, assuming it was previously active
			else if(lastResizeRate)
				Accordion.setResizeRate(lastResizeRate);
		}
	}
	
	
	
	/**
	 * Height of the accordion's container element.
	 *
	 * @property
	 * @type {Number}
	 */
	get height(){ return this._height; }
	set height(input){
		if(input && (input = +input) !== this._height){
			this.el.style.height = input + "px";
			this._height         = input;
		}
	}
	
	
	
	/**
	 * Internal method to check if an accordion's bottom-edge is visible to the user (or about to be).
	 *
	 * @param {Number} offset
	 * @private
	 */
	edgeCheck(offset){
		let edgeClass = this.edgeClass;
		if(edgeClass){
			let box         = this.el.getBoundingClientRect();
			let windowEdge  = window.innerHeight;
			let classes     = this.el.classList;
			
			// If the bottom-edge is visible (or about to be), enable height animation
			if(box.bottom + (offset || 0) < windowEdge)
				classes.add(edgeClass);
			
			// If the bottom-edge isn't visible anyway, disable height animation immediately
			else if(box.bottom > windowEdge)
				classes.remove(edgeClass);
		}
	}
	
	
	
	/**
	 * Update the vertical ordinate of each sibling for a particular fold.
	 *
	 * @param {Fold} fold
	 * @param {Number} offset - Pixel distance to adjust by
	 */
	updateFold(fold, offset){
		let next = fold;
		let parentFold = this.parentFold;
		
		while(next = next.nextFold)
			next.y  += offset;
		parentFold || this.edgeCheck(offset);
		fold.height += offset;
		this.height += offset;
		
		parentFold && parentFold.open && this.parent.updateFold(parentFold, offset);
	}
	
	
	/**
	 * Update the height of each fold to fit its content.
	 */
	update(){
		let y = 0;
		let height = 0;
		for(let i of this.folds){
			i.y = y;
			i.fit();
			y      += i.height;
			height += i.height;
		}
		
		let parentFold = this.parentFold;
		let diff       = height - this._height;
		parentFold
			? (parentFold.open && this.parent.updateFold(parentFold, diff))
			: this.edgeCheck(diff);
		
		this.height = height;
	}
	
	
	
	/**
	 * Recalculate the boundaries of an Accordion and its descendants.
	 *
	 * This method should only be called if the width of a container changes,
	 * or a fold's contents have resized unexpectedly (such as when images load).
	 *
	 * @param {Boolean} allowSnap - Snap folds instantly into place without transitioning
	 */
	refresh(allowSnap){
		let snap = allowSnap ? this.snapClass : false;
		snap && this.el.classList.add(snap);
		
		this.update();
		if(this.childAccordions)
			this.childAccordions.forEach(a => a.parentFold.open
				? a.refresh(allowSnap)
				: (a.parentFold.needsRefresh = true));
		
		snap && setTimeout(() => this.el.classList.remove(snap), 20);
	}
	
	
	
	/**
	 * Whether one of the Accordion's folds has been resized incorrectly.
	 *
	 * @type {Boolean}
	 * @readonly
	 * @property
	 */
	get wrongSize(){
		for(let i of this.folds)
			if(i.wrongSize) return true;
		if(this.childAccordions) for(let i of this.childAccordions)
			if(i.wrongSize) return true;
		return false;
	}
	
	
	
	/**
	 * Return the top-level ancestor this accordion's nested inside.
	 *
	 * @type {Accordion}
	 * @readonly
	 * @property
	 */
	get root(){
		let result = this;
		while(result){
			if(!result.parent) return result;
			result = result.parent;
		}
	}
	
	
	
	/**
	 * Alter the rate at which screen-resize events update accordion widths.
	 *
	 * @param {Number} delay - Rate expressed in milliseconds
	 */
	static setResizeRate(delay){
		let fn = function(){
			for(let i of accordions)
				i.parent || i.disabled || i.refresh(true);
		};
		
		window.removeEventListener("resize", this.onResize);
		
		// Make sure we weren't passed an explicit value of FALSE, or a negative value
		if(false !== delay && (delay = +delay || 0) >= 0){
			this.onResize = delay ? Object(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["debounce"])(fn, delay) : fn;
			window.addEventListener("resize", this.onResize);
			if(delay) lastResizeRate = delay;
		}
	}
	
	
	
	/**
	 * Return the closest (most deeply-nested) accordion enclosing an element.
	 *
	 * @param {Node} node
	 * @return {Accordion}
	 */
	static getAccordion(node){
		while(node){
			if("accordion" in node)
				return accordions[node.accordion];
			
			node = node.parentNode;
			if(!node || node.nodeType !== 1) return null;
		}
	}
	
	
	/**
	 * Return the closest (most deeply-nested) fold enclosing an element.
	 *
	 * @param {Node} node
	 * @return {Fold}
	 */
	static getFold(node){
		while(node){
			if("accordionFold" in node)
				return _fold_mjs__WEBPACK_IMPORTED_MODULE_1__["folds"][node.accordionFold];
			
			node = node.parentNode;
			if(!node || node.nodeType !== 1) return null;
		}
	}
}


Accordion.setResizeRate(25);
window.Accordion = Accordion;


/***/ }),

/***/ "./node_modules/accordion/src/fold.mjs":
/*!*********************************************!*\
  !*** ./node_modules/accordion/src/fold.mjs ***!
  \*********************************************/
/*! exports provided: folds, default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "folds", function() { return folds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fold; });
/* harmony import */ var _helpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.mjs */ "./node_modules/accordion/src/helpers.mjs");




const folds = [];


/**
 * Represents a single panel of togglable content inside an Accordion.
 *
 * @class
 */
class Fold{
	
	/**
	 * Instantiate a new Fold instance.
	 *
	 * @param {Accordion} accordion
	 * @param {HTMLElement} el
	 * @constructor
	 */
	constructor(accordion, el){
		let heading          = el.firstElementChild;
		let content          = el.lastElementChild;
		let useBorders       = accordion.useBorders;
		
		this.index           = folds.push(this) - 1;
		this.accordion       = accordion;
		this.el              = el;
		this.heading         = heading;
		this.content         = content;
		this.openClass       = accordion.openClass;
		this.closeClass      = accordion.closeClass;
		this.ariaEnabled     = !accordion.noAria;
		this.heightOffset    = accordion.heightOffset;
		this.useBorders      = "auto" === useBorders ? (0 !== this.elBorder + this.headingBorder) : useBorders;
		this.useTransforms   = !accordion.noTransforms && _helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["cssTransform"];
		this.onToggle        = accordion.onToggle;
		el.accordionFold     = this.index;
		
		
		// Keyboard navigation
		if(!accordion.noKeys){
			heading.tabIndex = 0;
			heading.addEventListener("keydown", this.onKeyDown = e => {
				const key = e.keyCode;
				let fold;
				
				switch(key){

					// Spacebar: Toggle
					case 32:
						e.preventDefault(); // Fall-through
					
					
					// Enter: Toggle
					case 13:
						this.open = !this.open;
						if("A" === e.target.tagName)
							e.preventDefault();
						break;
					
					
					// Escape: Clear focus
					case 27:
						e.target.blur();
						break;
					
					
					// Up arrow: Previous section
					case 38:{
						
						// Is there a previous sibling to navigate up to?
						if(fold = this.previousFold){
							let children = fold.childAccordions;
							
							// Is it open, and does it have nested accordions?
							if(fold.open && children){
								let lastAcc;
								let lastFold;
								
								// Locate the deepest/nearest accordion that's currently exposed
								while(children){
									lastAcc  = children[children.length - 1];
									lastFold = lastAcc.folds[lastAcc.folds.length - 1];
									if(!lastFold.open) break;
									children = lastFold.childAccordions;
								}
								
								lastFold.heading.focus();
							}
							
							// Nope
							else fold.heading.focus();
						}
						
						// Is there a higher level we can jump back up to?
						else if(this.accordion.parent)
							this.accordion.parentFold.heading.focus();
						
						// There's nothing to move back to, so just let the browser run its usual behaviour
						else return true;
						
						e.preventDefault();
						return false;
					}
					
					
					
					// Down arrow: Next section
					case 40:{
						const children = this.childAccordions;
						
						// Is there a nested accordion to jump into?
						if(this.open && children)
							children[0].folds[0].heading.focus();
						
						// No, there isn't. Is there another sibling to move down to?
						else if(fold = this.nextFold)
							fold.heading.focus();
						
						// Is there a containing accordion we can navigate back up to?
						else if(this.accordion.parent){
							let parent = this;
							while(parent = parent.accordion.parentFold)
								if(fold = parent.nextFold){
									fold.heading.focus();
									break;
								}
							
							// Nowhere left to go...
							if(!parent) return true;
						}
						
						// Nah. Just scroll the window normally, as per browser default
						else return true;
						
						e.preventDefault();
						return false;
					}
					
					
					// Left arrow
					case 37:{
						
						// Close an opened section
						if(this.open) this.open = false;
						
						// Switch focus back to parent
						else if(this.accordion.parent)
							this.accordion.parentFold.heading.focus();
						
						break;
					}
					
					// Right arrow
					case 39:{
						
						// Open a closed section
						if(!this.open) this.open = true;
						
						// Switch focus to a nested accordion
						else if(this.childAccordions)
							this.childAccordions[0].folds[0].heading.focus();
						
						break;
					}
				}
			});
		}
		
		
		// Listener to record the viewport's scroll offsets at the beginning of a touch
		let scrollX, scrollY;
		_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["touchEnabled"] && heading.addEventListener("touchstart", this.onTouchStart = () => {
			scrollX = window.pageXOffset;
			scrollY = window.pageYOffset;
		}, {passive: true});
		
		
		heading.addEventListener(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["pressEvent"], this.onPress = e => {
			
			// Pressed on something inside the header
			if(e.target !== heading && heading.contains(e.target)){
				
				// Cancel fold-toggle if user clicked on an anchor-link
				if("A" === e.target.tagName && e.target.href)
					return true;
			}
			
			if(e.type !== "touchend" || (e.cancelable && window.pageXOffset === scrollX && window.pageYOffset === scrollY)){
				this.open = !this.open;
				e.preventDefault();
			}
			return false;
		});
	}
	
	
	
	/**
	 * Adjust a fold's container to fit its content.
	 */
	fit(){
		let height = this.headingHeight;
		if(this.open)        height += this.content.scrollHeight;
		if(this.useBorders)  height += this.elBorder;
		this.height = height;
	}
	
	
	
	/**
	 * Add or remove relevant ARIA attributes from the fold's elements.
	 *
	 * @property
	 * @type {Boolean}
	 */
	get ariaEnabled(){ return this._ariaEnabled; }
	set ariaEnabled(input){
		if((input = !!input) !== !!this._ariaEnabled){
			const heading = this.heading;
			const content = this.content;
			this._ariaEnabled = input;
			
			// Enable ARIA-attribute management
			if(input){
				heading.setAttribute("role", "tab");
				content.setAttribute("role", "tabpanel");
				
				
				// Ensure the fold's elements have unique ID attributes.
				const headingSuffix = "-heading";
				const contentSuffix = "-content";
				let elID            = this.el.id;
				let id;
				
				// Neither of the fold's elements have an ID attribute
				if(!heading.id && !content.id){
					id             = elID || Object(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["uniqueID"])("a");
					heading.id     = id + headingSuffix;
					content.id     = id + contentSuffix;
				}
				
				// Either the heading or element lack an ID
				else if(!content.id) content.id   = (elID || heading.id) + contentSuffix;
				else if(!heading.id) heading.id   = (elID || content.id) + headingSuffix;
				
				// Finally, double-check each element's ID is really unique
				const $ = s => document.querySelectorAll("#"+s);
				while($(content.id).length > 1 || $(heading.id).length > 1){
					id         = Object(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["uniqueID"])("a");
					content.id = id + contentSuffix;
					heading.id = id + headingSuffix;
				}
				
				// Update ARIA attributes
				heading.setAttribute("aria-controls",    content.id);
				content.setAttribute("aria-labelledby",  heading.id);
				
				
				// Update the attributes that're controlled by .open's setter
				heading.setAttribute("aria-selected",  !!this._open);
				heading.setAttribute("aria-expanded",  !!this._open);
				content.setAttribute("aria-hidden",     !this._open);
			}
			
			// Disabling; remove all relevant attributes
			else{
				heading.removeAttribute("role");
				heading.removeAttribute("aria-controls");
				heading.removeAttribute("aria-selected");
				heading.removeAttribute("aria-expanded");
				
				content.removeAttribute("role");
				content.removeAttribute("aria-labelledby");
				content.removeAttribute("aria-hidden");
			}
		}
	}
	
	
	
	/**
	 * Whether or not the fold's currently opened.
	 *
	 * @property
	 * @type {Boolean}
	 */
	get open(){
		
		// Derive the fold's opened state from the DOM if it's not been determined yet
		if(undefined === this._open){
			const classes = this.el.classList;
			this._open    = classes.contains(this.openClass);
			Object(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["setToken"])(classes, this.closeClass, !this._open);
		}
		
		return this._open;
	}
	
	set open(input){
		if((input = !!input) !== this._open){
			
			// If an onToggle callback was specified, run it. Avoid doing anything if it returns false.
			if("function" === typeof this.onToggle && false === this.onToggle.call(null, this, input))
				return;
			
			Object(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["setToken"])(this.el.classList, this.openClass,   input);
			Object(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["setToken"])(this.el.classList, this.closeClass, !input);
			this._open = input;
			
			// Update ARIA attributes
			if(this.ariaEnabled){
				const heading = this.heading;
				heading.setAttribute("aria-selected",      input);
				heading.setAttribute("aria-expanded",      input);
				this.content.setAttribute("aria-hidden",  !input);
			}
			
			// If this fold was closed when the screen resized, run a full update in case its contents were juggled around
			if(this.needsRefresh){
				delete this.needsRefresh;
				this.accordion.refresh();
			}
			else this.accordion.update();
			
			// Close other folds if accordion is modal
			if(this.accordion.modal && input){
				for(const fold of this.accordion.folds)
					if(this !== fold) fold.open = false;
			}
		}
	}
	
	
	
	/**
	 * Whether the fold's been deactivated.
	 *
	 * Not set directly; changed when setting an accordion's .disabled property.
	 *
	 * @property
	 * @type {Boolean}
	 */
	get disabled(){ return this._disabled; }
	set disabled(input){
		if((input = !!input) !== !!this._disabled){
			let heading = this.heading;
			let style   = this.el.style;
			let classes = this.el.classList;
			
			// Deactivated
			if(this._disabled = input){
				style.height = null;
				this.useTransforms
					? (style[_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["cssTransform"]] = null)
					: (style.top = null);
				
				_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["touchEnabled"] && heading.removeEventListener("touchstart", this.onTouchStart);
				heading.removeEventListener(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["pressEvent"], this.onPress);
				classes.remove(this.openClass, this.closeClass);
				if(this.onKeyDown){
					heading.removeEventListener("keydown", this.onKeyDown);
					heading.removeAttribute("tabindex");
				}
				
				if(this.ariaEnabled){
					this.ariaEnabled  = false;
					this._ariaEnabled = true;
				}
			}
			
			// Reactivated
			else{
				style.height = this._height + "px";
				this.useTransforms
					? style[_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["cssTransform"]] =
						_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["css3DSupported"]
							? ("translate3D(0," + this._y + "px,0)")
							: ("translateY("    + this._y + "px)")
					: (style.top = this._y + "px");
				
				_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["touchEnabled"] && heading.addEventListener("touchstart", this.onTouchStart);
				heading.addEventListener(_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["pressEvent"], this.onPress);
				
				if(this.onKeyDown){
					heading.addEventListener("keydown", this.onKeyDown);
					heading.tabIndex = 0;
				}
			}
		}
	}
	
	
	/**
	 * Vertical position of the fold within an accordion's container.
	 *
	 * @property
	 * @type {Number}
	 */
	get y(){
		if(undefined === this._y)
			return (this._y = parseInt(this.el.style.top) || 0);
		return this._y;
	}
	
	set y(input){
		if((input = +input) !== this._y){
			this._y     = input;
			const style = this.el.style;
			this.useTransforms
				? style[_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["cssTransform"]] =
					_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__["css3DSupported"]
						? ("translate3D(0," + input + "px,0)")
						: ("translateY("    + input + "px)")
				: (style.top = input + "px");
		}
	}
	
	
	
	/**
	 * Height of the fold's outermost container.
	 *
	 * @property
	 * @type {Number}
	 */
	get height(){
		if(undefined === this._height){
			let height           = this.headingHeight + this.content.scrollHeight;
			this.el.style.height = height + "px";
			return (this._height = height);
		}
		return this._height;
	}
	
	set height(input){
		if(input && (input = +input) !== this._height){
			this.el.style.height = input + "px";
			this._height         = input;
		}
	}
	
	
	
	/**
	 * Current height of the fold's heading.
	 *
	 * @type {Number}
	 * @readonly
	 */
	get headingHeight(){
		return this.heading.scrollHeight
			+ this.heightOffset
			+ (this.useBorders ? this.headingBorder : 0);
	}
	
	/**
	 * Total height consumed by the heading element's CSS borders, if any.
	 *
	 * @type {Number}
	 * @readonly
	 */
	get headingBorder(){
		let heading = this.heading;
		return (heading.offsetHeight || 0) - (heading.clientHeight || 0);
	}
	
	
	/**
	 * Total height of the fold's container element.
	 *
	 * @type {Number}
	 * @readonly
	 */
	get elHeight(){
		return this.el.scrollHeight + (this.useBorders ? this.elBorder : 0);
	}
	
	/**
	 * Total height consumed by container element's CSS borders, if any.
	 * 
	 * @type {Number}
	 * @readonly
	 */
	get elBorder(){
		let el = this.el;
		return (el.offsetHeight || 0) - (el.clientHeight || 0);
	}
	
	
	/**
	 * Whether the fold's container has been resized incorrectly.
	 *
	 * @type {Boolean}
	 * @readonly
	 * @property
	 */
	get wrongSize(){
		return this.headingHeight + this.content.scrollHeight !== this.el.scrollHeight;
	}
}


/***/ }),

/***/ "./node_modules/accordion/src/helpers.mjs":
/*!************************************************!*\
  !*** ./node_modules/accordion/src/helpers.mjs ***!
  \************************************************/
/*! exports provided: touchEnabled, pressEvent, transitionEnd, setToken, debounce, uniqueID, cssTransform, css3DSupported */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchEnabled", function() { return touchEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressEvent", function() { return pressEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueID", function() { return uniqueID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssTransform", function() { return cssTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css3DSupported", function() { return css3DSupported; });


const touchEnabled = "ontouchstart" in document.documentElement;
const pressEvent   = touchEnabled ? "touchend" : "click";


/**
 * Name of the onTransitionEnd event supported by this browser.
 * @const {String} transitionEnd
 */
const transitionEnd = (function(){
	const names = "transitionend webkitTransitionEnd oTransitionEnd otransitionend".split(" ");
	for(let i = 0; i < 4; ++i)
		if("on" + names[i].toLowerCase() in window)
			return names[i];
	return names[0];
}());



/**
 * Conditionally add or remove a token from a token-list.
 *
 * @param {DOMTokenList} list
 * @param {String} token
 * @param {Boolean} enabled
 */
function setToken(list, token, enabled){
	enabled ? list.add(token) : list.remove(token);
}



/**
 * Stop a function from firing too quickly.
 *
 * Returns a copy of the original function that runs only after the designated
 * number of milliseconds have elapsed. Useful for throttling onResize handlers.
 *
 * @param {Function} fn - Function to debounce
 * @param {Number} [limit=0] - Threshold to stall execution by, in milliseconds.
 * @param {Boolean} [asap=false] - Call function *before* threshold elapses, not after.
 * @return {Function}
 */
function debounce(fn, limit = 0, asap = false){
	let started, context, args, timing;
	
	const delayed = function(){
		const timeSince = Date.now() - started;
		if(timeSince >= limit){
			if(!asap) fn.apply(context, args);
			if(timing) clearTimeout(timing);
			timing = context = args = null;
		}
		else timing = setTimeout(delayed, limit - timeSince);
	};
	
	// Debounced copy of original function
	return function(){
		context = this,
		args    = arguments;
		if(!limit)
			return fn.apply(context, args);
		started = Date.now();
		if(!timing){
			if(asap) fn.apply(context, args);
			timing = setTimeout(delayed, limit);
		}
	};
}



const uniqueID = (function(){
	const IDs     = {};
	const indexes = {};
	
	
	/**
	 * Generate a unique ID for a DOM element.
	 *
	 * By default, minimalist IDs like "_1" or "_2" are generated using internally
	 * tracked incrementation. Uglier, more collision-proof IDs can be generated by
	 * passing a truthy value to the function's first argument.
	 *
	 * Irrespective of whether values are being generated simply or randomly, the
	 * document tree is always consulted first to ensure a duplicate ID is never
	 * returned.
	 *
	 * @param {String}  prefix - Prefix prepended to result. Default: "_"
	 * @param {Boolean} random - Generate collision-proof IDs using random symbols
	 * @param {Number}  length - Length of random passwords. Default: 6
	 * @return {String}
	 */
	function uniqueID(prefix, complex, length){
		length     = +(length || 6);
		let result =  (prefix = prefix || "_");
		
		// Simple IDs
		if(!complex){
			
			// Set this prefix's starting index if it's not been used yet
			if(!indexes[prefix])
				indexes[prefix] = 0;
			
			result += ++indexes[prefix];
		}
		
		// Uglier, more collision-proof IDs
		else{
			const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			result += chars[ Math.round(Math.random() * 51) ];
			while(result.length < length)
				result += chars[ Math.round(Math.random() * 61)];
		}
		
		return IDs[result] || document.getElementById(result)
			? uniqueID(prefix, complex)
			: (IDs[result] = true, result);
	}
	
	
	return uniqueID;
}());



// Name of the CSSOM property used by this browser for CSS transforms
const cssTransform = (function(n){
	s = document.documentElement.style;
	if((prop = n.toLowerCase()) in s) return prop;
	for(var prop, s, p = "Webkit Moz Ms O Khtml", p = (p.toLowerCase() + p).split(" "), i = 0; i < 10; ++i)
		if((prop = p[i]+n) in s) return prop;
	return "";
}("Transform"));


// Whether 3D transforms are supported by this browser
const css3DSupported = (function(propName){
	const e = document.createElement("div"), s = e.style;
	const v = [["translateY(", ")"], ["translate3d(0,", ",0)"]];
	try{ s[propName] = v[1].join("1px"); } catch(e){}
	return v[+!!s[propName]] === v[1];
}(cssTransform));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/accordion/src/accordion.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/accordion/src/accordion.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/** Core styling */\n.accordion {\n  padding: 0;\n  margin: 0;\n  position: relative;\n  list-style: none;\n}\n\n.accordion > * {\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n\n.accordion > *,\n.accordion.edge-visible,\n.accordion .accordion {\n  -webkit-transition: 0.3s ease all;\n  -moz-transition: 0.3s ease all;\n  -o-transition: 0.3s ease all;\n  transition: 0.3s ease all;\n}\n\n/** Transform-related */\n.accordion,\n.accordion > * {\n  will-change: height, transform;\n  -webkit-perspective: 90em;\n  -moz-perspective: 90em;\n  perspective: 90em;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translateY(0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n/** Rule to disable transitions between gap corrections */\n.snap.accordion > *,\n.snap.accordion .accordion {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n\n/** Headings */\n.accordion > * > :first-child {\n  cursor: pointer;\n  margin: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/** Collapsible content */\n.accordion > * > :last-child {\n  overflow: hidden;\n  -webkit-transition: 0.3s ease height, 0.3s step-start visibility;\n  -moz-transition: 0.3s ease height, 0.3s step-start visibility;\n  -o-transition: 0.3s ease height, 0.3s step-start visibility;\n  transition: 0.3s ease height, 0.3s step-start visibility;\n}\n\n.accordion > .closed > :last-child,\n.accordion > .closed .accordion > .open > :last-child {\n  -webkit-transition-timing-function: ease, step-end;\n  -moz-transition-timing-function: ease, step-end;\n  -o-transition-timing-function: ease, step-end;\n  transition-timing-function: ease, step-end;\n  visibility: hidden;\n}", "",{"version":3,"sources":["/home/keshavchakravarthy/repos/javascript/TodoList/node_modules/accordion/src/accordion.css","accordion.css"],"names":[],"mappings":"AAAA,kBAAA;AACA;EACC,UAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;ACCD;;ADCC;EACC,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;ACEF;;ADAE;;;EAGC,iCAAA;EACA,8BAAA;EACA,4BAAA;EACA,yBAAA;ACGH;;ADAE,uBAAA;AACA;;EAEC,8BAAA;EACA,yBAAA;EACA,sBAAA;EACA,iBAAA;EAEA,mCAAA;EACA,gCAAA;EACA,2BAAA;EAEA,uCAAA;EACA,oCAAA;EACA,4BAAA;EACA,kCAAA;EACA,+BAAA;ACCH;;ADEE,yDAAA;AACA;;EAEC,mCAAA;EACA,gCAAA;EACA,8BAAA;EACA,2BAAA;ACCH;;ADEE,cAAA;AACA;EACC,eAAA;EACA,SAAA;EAEA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;ACAH;;ADGE,yBAAA;AACA;EACC,gBAAA;EACA,gEAAA;EACA,6DAAA;EACA,2DAAA;EACA,wDAAA;ACAH;;ADEG;;EAEC,kDAAA;EACA,+CAAA;EACA,6CAAA;EACA,0CAAA;EACA,kBAAA;ACCJ","file":"accordion.css","sourcesContent":["/** Core styling */\n.accordion{\n\tpadding: 0;\n\tmargin:  0;\n\tposition: relative;\n\tlist-style: none;\n}\n\t.accordion > *{\n\t\tposition: absolute;\n\t\toverflow: hidden;\n\t\tpadding: 0;\n\t\tmargin:  0;\n\t}\n\t\t.accordion > *,\n\t\t.accordion.edge-visible,\n\t\t.accordion .accordion{\n\t\t\t-webkit-transition: .3s ease all;\n\t\t\t-moz-transition:    .3s ease all;\n\t\t\t-o-transition:      .3s ease all;\n\t\t\ttransition:         .3s ease all;\n\t\t}\n\t\t\n\t\t/** Transform-related */\n\t\t.accordion,\n\t\t.accordion > *{\n\t\t\twill-change: height, transform;\n\t\t\t-webkit-perspective: 90em;\n\t\t\t-moz-perspective:    90em;\n\t\t\tperspective:         90em;\n\t\t\t\n\t\t\t-webkit-backface-visibility: hidden;\n\t\t\t-moz-backface-visibility:    hidden;\n\t\t\tbackface-visibility:         hidden;\n\t\t\t\n\t\t\t-webkit-transform:  translate3d(0,0,0);\n\t\t\t-moz-transform:     translate3d(0,0,0);\n\t\t\t-ms-transform:      translateY(0);\n\t\t\t-o-transform:       translate3d(0,0,0);\n\t\t\ttransform:          translate3d(0,0,0);\n\t\t}\n\t\t\n\t\t/** Rule to disable transitions between gap corrections */\n\t\t.snap.accordion > *,\n\t\t.snap.accordion .accordion{\n\t\t\t-webkit-transition: none !important;\n\t\t\t-moz-transition:    none !important;\n\t\t\t-o-transition:      none !important;\n\t\t\ttransition:         none !important;\n\t\t}\n\n\t\t/** Headings */\n\t\t.accordion > * > :first-child{\n\t\t\tcursor: pointer;\n\t\t\tmargin: 0;\n\t\t\t\n\t\t\t-webkit-user-select: none;\n\t\t\t-moz-user-select:    none;\n\t\t\t-ms-user-select:     none;\n\t\t\tuser-select:         none;\n\t\t}\n\t\t\n\t\t/** Collapsible content */\n\t\t.accordion > * > :last-child{\n\t\t\toverflow: hidden;\n\t\t\t-webkit-transition: .3s ease height, .3s step-start visibility;\n\t\t\t-moz-transition:    .3s ease height, .3s step-start visibility;\n\t\t\t-o-transition:      .3s ease height, .3s step-start visibility;\n\t\t\ttransition:         .3s ease height, .3s step-start visibility;\n\t\t}\n\t\t\t.accordion > .closed > :last-child,\n\t\t\t.accordion > .closed .accordion > .open > :last-child{\n\t\t\t\t-webkit-transition-timing-function: ease, step-end;\n\t\t\t\t-moz-transition-timing-function:    ease, step-end;\n\t\t\t\t-o-transition-timing-function:      ease, step-end;\n\t\t\t\ttransition-timing-function:         ease, step-end;\n\t\t\t\tvisibility: hidden;\n\t\t\t}\n","/** Core styling */\n.accordion {\n  padding: 0;\n  margin: 0;\n  position: relative;\n  list-style: none;\n}\n\n.accordion > * {\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n\n.accordion > *,\n.accordion.edge-visible,\n.accordion .accordion {\n  -webkit-transition: 0.3s ease all;\n  -moz-transition: 0.3s ease all;\n  -o-transition: 0.3s ease all;\n  transition: 0.3s ease all;\n}\n\n/** Transform-related */\n.accordion,\n.accordion > * {\n  will-change: height, transform;\n  -webkit-perspective: 90em;\n  -moz-perspective: 90em;\n  perspective: 90em;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translateY(0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n/** Rule to disable transitions between gap corrections */\n.snap.accordion > *,\n.snap.accordion .accordion {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n\n/** Headings */\n.accordion > * > :first-child {\n  cursor: pointer;\n  margin: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/** Collapsible content */\n.accordion > * > :last-child {\n  overflow: hidden;\n  -webkit-transition: 0.3s ease height, 0.3s step-start visibility;\n  -moz-transition: 0.3s ease height, 0.3s step-start visibility;\n  -o-transition: 0.3s ease height, 0.3s step-start visibility;\n  transition: 0.3s ease height, 0.3s step-start visibility;\n}\n\n.accordion > .closed > :last-child,\n.accordion > .closed .accordion > .open > :last-child {\n  -webkit-transition-timing-function: ease, step-end;\n  -moz-transition-timing-function: ease, step-end;\n  -o-transition-timing-function: ease, step-end;\n  transition-timing-function: ease, step-end;\n  visibility: hidden;\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#form-section {\n  text-align: center;\n}\n#form-section form {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n}\n\n#new-todo {\n  font-size: 1.5rem;\n  color: #9d10d4;\n  margin-left: 10px;\n}\n\n#todo-title-input {\n  margin-bottom: 10px;\n}\n\n#todo-desc-input {\n  margin-bottom: 10px;\n}\n\n#todo-duedate-input {\n  margin-bottom: 10px;\n}\n\nfieldset {\n  width: 30%;\n  margin: 0 auto;\n}\n\nlegend {\n  text-align: center;\n}\n\ntextarea {\n  margin-top: 30px;\n}\n\ninput[type=submit] {\n  font-size: 1.3rem;\n  background-color: green;\n  border: none;\n  color: brown;\n}\n\n#results p {\n  font-size: 1.3rem;\n  color: blueviolet;\n}\n\n#content {\n  background-color: #e0dcdc;\n}\n\n.todo-title {\n  font-size: 1.3rem;\n  color: #1bbbeb;\n  font-weight: bold;\n  border: none;\n}\n\n.project {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #1100ff;\n}\n\n.todo-content {\n  font-weight: 100;\n  background-color: #c4c7bf;\n  color: black;\n}\n\n#project-list,\n.project,\n.todo {\n  width: 500px;\n}\n\n.add-todo-btn {\n  background-color: #24db13;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: 0;\n  border-radius: 0;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  margin-left: 100px;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n.add-todo-btn:hover {\n  cursor: pointer;\n}\n\n.delete-project-btn {\n  background-color: #b84a4a;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: none;\n  border-radius: 5px;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #050505;\n}\n\n.delete-project-btn:hover {\n  cursor: pointer;\n}\n\n.delete-todo-btn {\n  background-color: #b84a4a;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: 0;\n  border-radius: 0;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  margin-left: 100px;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #080808;\n}\n\n.delete-todo-btn:hover {\n  cursor: pointer;\n}\n\n.edit-todo-btn {\n  background-color: #0b2ada;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: 0;\n  border-radius: 0;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #0bf0e4;\n}\n\n.edit-todo-btn:hover {\n  cursor: pointer;\n}\n\np {\n  color: blue;\n  text-align: center;\n}\n\n:root {\n  --clr-orange: rgb(231, 158, 22);\n  --clr-orange-dark: rgb(204, 147, 40);\n  --clr-grey: rgb(65, 64, 64);\n  --pad-modal: 0.125rem 1rem;\n}\n\n#add-project-btn {\n  background-color: var(--clr-orange);\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: 0;\n  border-radius: 0.5rem;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2.5;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n#add-project-btn:hover {\n  background-color: var(--clr-orange-dark);\n}\n\n#add-project-btn:active {\n  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\n.modal {\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: none;\n  height: 100%;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.show-form {\n  display: block;\n}\n\n.modal-header {\n  background-color: var(--clr-orange);\n  color: var(--clr-grey);\n  padding: var(--pad-modal);\n}\n\n.modal-body {\n  padding: var(--pad-modal);\n}\n\n.modal-content {\n  animation-name: slideform;\n  animation-duration: 0.5s;\n  background-color: #fefefe;\n  border: 1px solid #888;\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.4);\n  margin: 15% auto;\n  max-width: 1000px;\n  padding: 1.25rem;\n  position: relative;\n  width: 80%;\n}\n\n@keyframes slideform {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.close {\n  color: #aaa;\n  background-color: crimson;\n  float: right;\n  font-size: 1.75em;\n  font-weight: bold;\n  line-height: 1rem;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nh1 {\n  color: rebeccapurple;\n}\n\nh3 {\n  color: chocolate;\n}", "",{"version":3,"sources":["/home/keshavchakravarthy/repos/javascript/TodoList/src/css/_form.scss","style.scss","/home/keshavchakravarthy/repos/javascript/TodoList/src/css/_results.scss","/home/keshavchakravarthy/repos/javascript/TodoList/src/css/_add_project.scss","/home/keshavchakravarthy/repos/javascript/TodoList/src/css/style.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;ACCF;ADCE;EACE,gBAAA;EACA,mBAAA;EACA,YAAA;ACCJ;;ADGA;EACE,iBAAA;EACA,cAAA;EACA,iBAAA;ACAF;;ADGA;EACE,mBAAA;ACAF;;ADGA;EACE,mBAAA;ACAF;;ADGA;EACE,mBAAA;ACAF;;ADGA;EACE,UAAA;EACA,cAAA;ACAF;;ADGA;EACE,kBAAA;ACAF;;ADGA;EACE,gBAAA;ACAF;;ADGA;EACE,iBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;ACAF;;ADGA;EACE,iBAAA;EACA,iBAAA;ACAF;;ADGA;EACE,yBAAA;ACAF;;ACrDA;EACE,iBAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;ADwDF;;ACrDA;EACE,iBAAA;EACA,iBAAA;EACA,cAAA;ADwDF;;ACrDA;EACE,gBAAA;EACA,yBAAA;EACA,YAAA;ADwDF;;ACrDA;;;EAGE,YAAA;ADwDF;;ACrDA;EACE,yBAAA;EACA,4GACE;EAMF,SAAA;EACA,gBAAA;EACA,8FACE;EAEF,sBAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,6BAAA;ADgDF;;AC7CA;EACE,eAAA;ADgDF;;AC7CA;EACE,yBAAA;EACA,4GACE;EAMF,YAAA;EACA,kBAAA;EACA,8FACE;EAEF,sBAAA;EACA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,gCAAA;ADwCF;;ACrCA;EACE,eAAA;ADwCF;;ACrCA;EACE,yBAAA;EACA,4GACE;EAMF,SAAA;EACA,gBAAA;EACA,8FACE;EAEF,sBAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,gCAAA;ADgCF;;AC7BA;EACE,eAAA;ADgCF;;AC7BA;EACE,yBAAA;EACA,4GACE;EAMF,SAAA;EACA,gBAAA;EACA,8FACE;EAEF,sBAAA;EACA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,gCAAA;ADwBF;;ACrBA;EACE,eAAA;ADwBF;;ACrBA;EACE,WAAA;EACA,kBAAA;ADwBF;;AE1JA;EACE,+BAAA;EACA,oCAAA;EACA,2BAAA;EACA,0BAAA;AF6JF;;AE1JA;EACE,mCAAA;EACA,4GACE;EAMF,SAAA;EACA,qBAAA;EACA,8FACE;EAEF,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;AFqJF;;AElJA;EACE,wCAAA;AFqJF;;AElJA;EACE,8FACE;AFoJJ;;AEhJA;EACE,uBAAA;EACA,oCAAA;EACA,aAAA;EACA,YAAA;EACA,OAAA;EACA,cAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,UAAA;AFmJF;;AEhJA;EACE,cAAA;AFmJF;;AEhJA;EACE,mCAAA;EACA,sBAAA;EACA,yBAAA;AFmJF;;AEhJA;EACE,yBAAA;AFmJF;;AEhJA;EACE,yBAAA;EACA,wBAAA;EACA,yBAAA;EACA,sBAAA;EACA,0FACE;EAEF,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;AFiJF;;AE9IA;EACE;IACE,WAAA;IACA,UAAA;EFiJF;EE9IA;IACE,MAAA;IACA,UAAA;EFgJF;AACF;AE7IA;EACE,WAAA;EACA,yBAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;AF+IF;;AE5IA;;EAEE,YAAA;EACA,qBAAA;EACA,eAAA;AF+IF;;AGpPA;EACE,oBAAA;AHuPF;;AGpPA;EACE,gBAAA;AHuPF","file":"style.scss","sourcesContent":["#form-section {\n  text-align: center;\n\n  form {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 5px;\n  }\n}\n\n#new-todo {\n  font-size: 1.5rem;\n  color: rgb(157, 16, 212);\n  margin-left: 10px;\n}\n\n#todo-title-input {\n  margin-bottom: 10px;\n}\n\n#todo-desc-input {\n  margin-bottom: 10px;\n}\n\n#todo-duedate-input {\n  margin-bottom: 10px;\n}\n\nfieldset {\n  width: 30%;\n  margin: 0 auto;\n}\n\nlegend {\n  text-align: center;\n}\n\ntextarea {\n  margin-top: 30px;\n}\n\ninput[type=\"submit\"] {\n  font-size: 1.3rem;\n  background-color: green;\n  border: none;\n  color: brown;\n}\n\n#results p {\n  font-size: 1.3rem;\n  color: blueviolet;\n}\n\n#content {\n  background-color: rgb(224, 220, 220);\n}\n","#form-section {\n  text-align: center;\n}\n#form-section form {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n}\n\n#new-todo {\n  font-size: 1.5rem;\n  color: #9d10d4;\n  margin-left: 10px;\n}\n\n#todo-title-input {\n  margin-bottom: 10px;\n}\n\n#todo-desc-input {\n  margin-bottom: 10px;\n}\n\n#todo-duedate-input {\n  margin-bottom: 10px;\n}\n\nfieldset {\n  width: 30%;\n  margin: 0 auto;\n}\n\nlegend {\n  text-align: center;\n}\n\ntextarea {\n  margin-top: 30px;\n}\n\ninput[type=submit] {\n  font-size: 1.3rem;\n  background-color: green;\n  border: none;\n  color: brown;\n}\n\n#results p {\n  font-size: 1.3rem;\n  color: blueviolet;\n}\n\n#content {\n  background-color: #e0dcdc;\n}\n\n.todo-title {\n  font-size: 1.3rem;\n  color: #1bbbeb;\n  font-weight: bold;\n  border: none;\n}\n\n.project {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #1100ff;\n}\n\n.todo-content {\n  font-weight: 100;\n  background-color: #c4c7bf;\n  color: black;\n}\n\n#project-list,\n.project,\n.todo {\n  width: 500px;\n}\n\n.add-todo-btn {\n  background-color: #24db13;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: 0;\n  border-radius: 0;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  margin-left: 100px;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n.add-todo-btn:hover {\n  cursor: pointer;\n}\n\n.delete-project-btn {\n  background-color: #b84a4a;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: none;\n  border-radius: 5px;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #050505;\n}\n\n.delete-project-btn:hover {\n  cursor: pointer;\n}\n\n.delete-todo-btn {\n  background-color: #b84a4a;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: 0;\n  border-radius: 0;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  margin-left: 100px;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #080808;\n}\n\n.delete-todo-btn:hover {\n  cursor: pointer;\n}\n\n.edit-todo-btn {\n  background-color: #0b2ada;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: 0;\n  border-radius: 0;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #0bf0e4;\n}\n\n.edit-todo-btn:hover {\n  cursor: pointer;\n}\n\np {\n  color: blue;\n  text-align: center;\n}\n\n:root {\n  --clr-orange: rgb(231, 158, 22);\n  --clr-orange-dark: rgb(204, 147, 40);\n  --clr-grey: rgb(65, 64, 64);\n  --pad-modal: 0.125rem 1rem;\n}\n\n#add-project-btn {\n  background-color: var(--clr-orange);\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: 0;\n  border-radius: 0.5rem;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2.5;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n#add-project-btn:hover {\n  background-color: var(--clr-orange-dark);\n}\n\n#add-project-btn:active {\n  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\n.modal {\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: none;\n  height: 100%;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.show-form {\n  display: block;\n}\n\n.modal-header {\n  background-color: var(--clr-orange);\n  color: var(--clr-grey);\n  padding: var(--pad-modal);\n}\n\n.modal-body {\n  padding: var(--pad-modal);\n}\n\n.modal-content {\n  animation-name: slideform;\n  animation-duration: 0.5s;\n  background-color: #fefefe;\n  border: 1px solid #888;\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.4);\n  margin: 15% auto;\n  max-width: 1000px;\n  padding: 1.25rem;\n  position: relative;\n  width: 80%;\n}\n\n@keyframes slideform {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.close {\n  color: #aaa;\n  background-color: crimson;\n  float: right;\n  font-size: 1.75em;\n  font-weight: bold;\n  line-height: 1rem;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nh1 {\n  color: rebeccapurple;\n}\n\nh3 {\n  color: chocolate;\n}","\n.todo-title {\n  font-size: 1.3rem;\n  color: #1bbbeb;\n  font-weight: bold;\n  border: none;\n}\n\n.project {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: rgb(17, 0, 255);\n}\n\n.todo-content {\n  font-weight: 100;\n  background-color: rgb(196, 199, 191);\n  color: black;\n}\n\n#project-list,\n.project,\n.todo {\n  width: 500px;\n}\n\n.add-todo-btn {\n  background-color: darken($color: #24db13, $amount: 0);\n  background-image:\n    linear-gradient(\n      to top left,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.2) 30%,\n      rgba(0, 0, 0, 0)\n    );\n  border: 0;\n  border-radius: 0;\n  box-shadow:\n    inset 2px 2px 3px rgba(255, 255, 255, 0.6),\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  margin-left: 100px;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n.add-todo-btn:hover {\n  cursor: pointer;\n}\n\n.delete-project-btn {\n  background-color: darken($color: #b84a4a, $amount: 0);\n  background-image:\n    linear-gradient(\n      to top left,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.2) 30%,\n      rgba(0, 0, 0, 0)\n    );\n  border: none;\n  border-radius: 5px;\n  box-shadow:\n    inset 2px 2px 3px rgba(255, 255, 255, 0.6),\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px rgb(5, 5, 5);\n}\n\n.delete-project-btn:hover {\n  cursor: pointer;\n}\n\n.delete-todo-btn {\n  background-color: darken($color: #b84a4a, $amount: 0);\n  background-image:\n    linear-gradient(\n      to top left,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.2) 30%,\n      rgba(0, 0, 0, 0)\n    );\n  border: 0;\n  border-radius: 0;\n  box-shadow:\n    inset 2px 2px 3px rgba(255, 255, 255, 0.6),\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  margin-left: 100px;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px rgb(8, 8, 8);\n}\n\n.delete-todo-btn:hover {\n  cursor: pointer;\n}\n\n.edit-todo-btn {\n  background-color: darken($color: #0b2ada, $amount: 0);\n  background-image:\n    linear-gradient(\n      to top left,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.2) 30%,\n      rgba(0, 0, 0, 0)\n    );\n  border: 0;\n  border-radius: 0;\n  box-shadow:\n    inset 2px 2px 3px rgba(255, 255, 255, 0.6),\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px rgb(11, 240, 228);\n}\n\n.edit-todo-btn:hover {\n  cursor: pointer;\n}\n\np {\n  color: blue;\n  text-align: center;\n}\n",":root {\n  --clr-orange: rgb(231, 158, 22);\n  --clr-orange-dark: rgb(204, 147, 40);\n  --clr-grey: rgb(65, 64, 64);\n  --pad-modal: 0.125rem 1rem;\n}\n\n#add-project-btn {\n  background-color: var(--clr-orange);\n  background-image:\n    linear-gradient(\n      to top left,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.2) 30%,\n      rgba(0, 0, 0, 0)\n    );\n  border: 0;\n  border-radius: 0.5rem;\n  box-shadow:\n    inset 2px 2px 3px rgba(255, 255, 255, 0.6),\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: var(--clr-grey);\n  font-size: 1rem;\n  line-height: 2.5;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n#add-project-btn:hover {\n  background-color: var(--clr-orange-dark);\n}\n\n#add-project-btn:active {\n  box-shadow:\n    inset -2px -2px 3px rgba(255, 255, 255, 0.6),\n    inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\n.modal {\n  background-color: rgb(0, 0, 0);\n  background-color: rgb(0, 0, 0, 0.4);\n  display: none;\n  height: 100%;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.show-form {\n  display: block;\n}\n\n.modal-header {\n  background-color: var(--clr-orange);\n  color: var(--clr-grey);\n  padding: var(--pad-modal);\n}\n\n.modal-body {\n  padding: var(--pad-modal);\n}\n\n.modal-content {\n  animation-name: slideform;\n  animation-duration: 0.5s;\n  background-color: #fefefe;\n  border: 1px solid #888;\n  box-shadow:\n    0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),\n    0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.4);\n  margin: 15% auto;\n  max-width: 1000px;\n  padding: 1.25rem;\n  position: relative;\n  width: 80%;\n}\n\n@keyframes slideform {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.close {\n  color: #aaa;\n  background-color: crimson;\n  float: right;\n  font-size: 1.75em;\n  font-weight: bold;\n  line-height: 1rem;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n","@use 'form';\n@use 'results';\n@use 'add_project';\n\nh1 {\n  color: rebeccapurple;\n}\n\nh3 {\n  color: chocolate;\n}\n\n// #content {\n//   text-align: center;\n// }\n"]}]);
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

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss");

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

/***/ "./src/js/display/accordion_utils.js":
/*!*******************************************!*\
  !*** ./src/js/display/accordion_utils.js ***!
  \*******************************************/
/*! exports provided: createAccordions, closeFold, openFold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccordions", function() { return createAccordions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeFold", function() { return closeFold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFold", function() { return openFold; });
/* harmony import */ var accordion_src_accordion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion/src/accordion.mjs */ "./node_modules/accordion/src/accordion.mjs");
// eslint-disable-next-line import/extensions


const closeFold = (fold) => {
  fold.open = false;
};

const openFold = (fold) => {
  fold.open = true;
};

const createAccordions = () => {
  const accordions = document.querySelectorAll('#project-list, .project-todos');
  for (let i = 0; i < accordions.length; i += 1) {
    // eslint-disable-next-line no-new
    new accordion_src_accordion_mjs__WEBPACK_IMPORTED_MODULE_0__["default"](accordions[i], {
      modal: true,
    });
  }
};



/***/ }),

/***/ "./src/js/display/button_action.js":
/*!*****************************************!*\
  !*** ./src/js/display/button_action.js ***!
  \*****************************************/
/*! exports provided: addTodoBtnAction, editTodoBtnAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodoBtnAction", function() { return addTodoBtnAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTodoBtnAction", function() { return editTodoBtnAction; });
/* harmony import */ var _models_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/data */ "./src/js/models/data.js");


const addTodoBtnAction = (projectId) => {
  document.forms['new-todo'].querySelector('#todo-title-input').value = '';
  document.forms['new-todo'].querySelector('#todo-desc-input').value = '';
  document.forms['new-todo'].querySelector('#todo-duedate-input').value = '';
  document.forms['new-todo'].querySelector('#todo-low-priority').checked = false;
  document.forms['new-todo'].querySelector('#todo-medium-priority').checked = true;
  document.forms['new-todo'].querySelector('#todo-high-priority').checked = false;
  document.forms['new-todo'].querySelector('#todo-notes-input').value = '';
  document.forms['new-todo'].querySelector('#project-input').value = projectId;
  document.forms['new-todo'].querySelector('#todo-input').value = -1;
  document.forms['new-todo'].querySelector('input[type=submit]').value = 'Create New Todo';
  document.getElementById('todo-form-box').classList.toggle('show-form');
};

const editTodoBtnAction = (todoId, projectId) => {
  const todo = Object(_models_data__WEBPACK_IMPORTED_MODULE_0__["getTodo"])(todoId, projectId);
  const {
    title,
    description,
    dueDate,
    priority,
    notes,
  } = todo.getAttributes();
  document.forms['new-todo'].querySelector('#todo-title-input').value = title;
  document.forms['new-todo'].querySelector('#todo-desc-input').value = description;
  document.forms['new-todo'].querySelector('#todo-duedate-input').value = dueDate;
  document.forms['new-todo'].querySelector('#todo-medium-priority').checked = false;
  document.forms['new-todo'].querySelector(`#todo-${priority}-priority`).checked = true;
  document.forms['new-todo'].querySelector('#todo-notes-input').value = notes;
  document.forms['new-todo'].querySelector('#project-input').value = projectId;
  document.forms['new-todo'].querySelector('#todo-input').value = todoId;
  document.forms['new-todo'].querySelector('input[type=submit]').value = 'Update Todo';
  document.getElementById('todo-form-box').classList.toggle('show-form');
};



/***/ }),

/***/ "./src/js/display/change_dom.js":
/*!**************************************!*\
  !*** ./src/js/display/change_dom.js ***!
  \**************************************/
/*! exports provided: deleteProjectFromUI, deleteTodoFromUI, openProjectTab, openTodoTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectFromUI", function() { return deleteProjectFromUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodoFromUI", function() { return deleteTodoFromUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openProjectTab", function() { return openProjectTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTodoTab", function() { return openTodoTab; });
/* harmony import */ var accordion_src_accordion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion/src/accordion.mjs */ "./node_modules/accordion/src/accordion.mjs");
/* harmony import */ var _accordion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion_utils */ "./src/js/display/accordion_utils.js");
// eslint-disable-next-line import/extensions



const deleteProjectFromUI = (projectId) => {
  const projectDiv = document.getElementById(`project-${projectId}`);
  const projectFold = accordion_src_accordion_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getFold(projectDiv);
  const { accordion } = projectFold;
  const foldIndex = accordion.folds.findIndex(fold => fold === projectFold);
  accordion.folds.splice(foldIndex, 1);
  projectDiv.remove();
  setTimeout(_accordion_utils__WEBPACK_IMPORTED_MODULE_1__["closeFold"], 200, projectFold);
};

const deleteTodoFromUI = (todoId, projectId) => {
  const todoDiv = document.getElementById(`project-${projectId}-todo-${todoId}`);
  const todoFold = accordion_src_accordion_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getFold(todoDiv);
  const { accordion } = todoFold;
  const { parentFold } = accordion;
  setTimeout(_accordion_utils__WEBPACK_IMPORTED_MODULE_1__["closeFold"], 200, todoFold);
  const foldIndex = accordion.folds.findIndex(fold => fold === todoFold);
  accordion.folds.splice(foldIndex, 1);
  todoDiv.remove();
  setTimeout(_accordion_utils__WEBPACK_IMPORTED_MODULE_1__["closeFold"], 400, parentFold);
  setTimeout(_accordion_utils__WEBPACK_IMPORTED_MODULE_1__["openFold"], 600, parentFold);
};

const openProjectTab = (projectId) => {
  const projectDiv = document.getElementById(`project-${projectId}`);
  const projectFold = accordion_src_accordion_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getFold(projectDiv);
  setTimeout(_accordion_utils__WEBPACK_IMPORTED_MODULE_1__["openFold"], 200, projectFold);
};

const openTodoTab = (todoId, projectId) => {
  const projectDiv = document.getElementById(`project-${projectId}`);
  const projectFold = accordion_src_accordion_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getFold(projectDiv);
  const todoDiv = document.getElementById(`project-${projectId}-todo-${todoId}`);
  const todoFold = accordion_src_accordion_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getFold(todoDiv);
  setTimeout(_accordion_utils__WEBPACK_IMPORTED_MODULE_1__["openFold"], 150, projectFold);
  setTimeout(_accordion_utils__WEBPACK_IMPORTED_MODULE_1__["openFold"], 300, todoFold);
};



/***/ }),

/***/ "./src/js/display/components/project_display.js":
/*!******************************************************!*\
  !*** ./src/js/display/components/project_display.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_display */ "./src/js/display/components/todo_display.js");


const createProjectTitle = (project) => {
  const projectHeader = document.createElement('div');
  const projectTitle = document.createElement('span');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.getTitle();
  projectHeader.appendChild(projectTitle);

  return projectHeader;
};

const createProjectContent = (project) => {
  const projectTodos = document.createElement('div');
  projectTodos.classList.add('project-todos', 'accordion');

  const projectControls = document.createElement('div');
  projectControls.classList.add('project-controls');
  const buttons = document.createElement('div');
  projectControls.appendChild(buttons);
  projectControls.appendChild(document.createElement('div'));
  projectTodos.appendChild(projectControls);

  const addTodoButton = document.createElement('button');
  addTodoButton.className = 'add-todo-btn';
  addTodoButton.setAttribute('data-id', project.getId());
  addTodoButton.textContent = 'Add Todo';
  buttons.appendChild(addTodoButton);

  if (project.getId() !== 0) {
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.className = 'delete-project-btn';
    deleteProjectButton.setAttribute('data-id', project.getId());
    deleteProjectButton.textContent = 'Delete Project';
    buttons.appendChild(deleteProjectButton);
  }

  const todos = project.getTodos();
  todos.forEach(todo => {
    const todoDiv = Object(_todo_display__WEBPACK_IMPORTED_MODULE_0__["default"])(todo);
    projectTodos.appendChild(todoDiv);
  });
  return projectTodos;
};

const createProjectDiv = (project) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.id = `project-${project.getId()}`;
  projectDiv.appendChild(createProjectTitle(project));
  projectDiv.appendChild(createProjectContent(project));
  return projectDiv;
};

/* harmony default export */ __webpack_exports__["default"] = (createProjectDiv);

/***/ }),

/***/ "./src/js/display/components/todo_display.js":
/*!***************************************************!*\
  !*** ./src/js/display/components/todo_display.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createTodoTitle = (todo) => {
  const todoTitle = document.createElement('p');
  todoTitle.classList.add('todo-title');
  todoTitle.textContent = todo.getTitle();
  return todoTitle;
};

const createTodoContent = (todo) => {
  const todoContent = document.createElement('div');
  todoContent.classList.add('todo-content');
  const description = document.createElement('p');
  description.classList.add('todo-description');
  description.textContent = todo.getDescription();
  const dueDate = document.createElement('p');
  dueDate.classList.add('todo-duedate');
  dueDate.textContent = `Due on ${todo.getDueDate()}`;
  const notes = document.createElement('p');
  notes.classList.add('todo-notes');
  notes.textContent = todo.getNotes();
  const priority = document.createElement('p');
  priority.classList.add('todo-priority');
  priority.textContent = `This task has ${todo.getPriority()} priority`;

  const deleteTodoButton = document.createElement('button');
  deleteTodoButton.className = 'delete-todo-btn';
  deleteTodoButton.setAttribute('data-todoid', todo.getTodoId());
  deleteTodoButton.setAttribute('data-projectid', todo.getProjectId());
  deleteTodoButton.textContent = 'Delete Todo';
  const editTodoButton = document.createElement('button');
  editTodoButton.className = 'edit-todo-btn';
  editTodoButton.setAttribute('data-todoid', todo.getTodoId());
  editTodoButton.setAttribute('data-projectid', todo.getProjectId());
  editTodoButton.textContent = 'Edit Todo';

  todoContent.appendChild(description);
  todoContent.appendChild(dueDate);
  todoContent.appendChild(priority);
  todoContent.appendChild(notes);

  todoContent.appendChild(deleteTodoButton);
  todoContent.appendChild(editTodoButton);

  return todoContent;
};

const createTodoDiv = (todo) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  todoDiv.id = `project-${todo.getProjectId()}-todo-${todo.getTodoId()}`;
  todoDiv.appendChild(createTodoTitle(todo));
  todoDiv.appendChild(createTodoContent(todo));
  return todoDiv;
};

/* harmony default export */ __webpack_exports__["default"] = (createTodoDiv);

/***/ }),

/***/ "./src/js/display/display_results.js":
/*!*******************************************!*\
  !*** ./src/js/display/display_results.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion_utils */ "./src/js/display/accordion_utils.js");
/* harmony import */ var _models_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/data */ "./src/js/models/data.js");
/* harmony import */ var _button_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button_action */ "./src/js/display/button_action.js");
/* harmony import */ var _components_project_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/project_display */ "./src/js/display/components/project_display.js");
/* harmony import */ var _change_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change_dom */ "./src/js/display/change_dom.js");






const createResultsSection = (projects) => {
  const listOfProjects = document.createElement('div');
  listOfProjects.id = 'project-list';
  listOfProjects.className = 'accordion';
  projects.forEach(project => {
    const projectDiv = Object(_components_project_display__WEBPACK_IMPORTED_MODULE_3__["default"])(project);
    listOfProjects.appendChild(projectDiv);
  });
  return listOfProjects;
};

const setupBtnEventListeners = () => {
  const app = document.getElementById('project-list');
  app.addEventListener('click', (event) => {
    const btn = event.target.closest('button');
    if (btn) {
      switch (btn.className) {
        case 'delete-project-btn':
          Object(_models_data__WEBPACK_IMPORTED_MODULE_1__["deleteProject"])(Number(btn.dataset.id));
          Object(_change_dom__WEBPACK_IMPORTED_MODULE_4__["deleteProjectFromUI"])(btn.dataset.id);
          break;
        case 'delete-todo-btn':
          Object(_models_data__WEBPACK_IMPORTED_MODULE_1__["deleteTodo"])(Number(btn.dataset.todoid), Number(btn.dataset.projectid));
          Object(_change_dom__WEBPACK_IMPORTED_MODULE_4__["deleteTodoFromUI"])(btn.dataset.todoid, btn.dataset.projectid);
          break;
        case 'add-todo-btn':
          Object(_button_action__WEBPACK_IMPORTED_MODULE_2__["addTodoBtnAction"])(Number(btn.dataset.id));
          break;
        case 'edit-todo-btn':
          Object(_button_action__WEBPACK_IMPORTED_MODULE_2__["editTodoBtnAction"])(Number(btn.dataset.todoid), Number(btn.dataset.projectid));
          break;
        default:
          break;
      }
    }
  });
};

const renderResults = () => {
  const displaySection = document.getElementById('projects-data');
  let results = document.getElementById('project-list');
  if (results !== null) {
    results.remove();
  }
  const { defaultProject, otherProjects } = Object(_models_data__WEBPACK_IMPORTED_MODULE_1__["getAppData"])();
  const allProjects = [defaultProject].concat(otherProjects);
  results = createResultsSection(allProjects);
  displaySection.appendChild(results);
  Object(_accordion_utils__WEBPACK_IMPORTED_MODULE_0__["createAccordions"])();
  setupBtnEventListeners();
};

/* harmony default export */ __webpack_exports__["default"] = (renderResults);


/***/ }),

/***/ "./src/js/form_builder/components/description_section.js":
/*!***************************************************************!*\
  !*** ./src/js/form_builder/components/description_section.js ***!
  \***************************************************************/
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

/***/ "./src/js/form_builder/components/due_date_section.js":
/*!************************************************************!*\
  !*** ./src/js/form_builder/components/due_date_section.js ***!
  \************************************************************/
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

/***/ "./src/js/form_builder/components/notes_section.js":
/*!*********************************************************!*\
  !*** ./src/js/form_builder/components/notes_section.js ***!
  \*********************************************************/
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

/***/ "./src/js/form_builder/components/priority_section.js":
/*!************************************************************!*\
  !*** ./src/js/form_builder/components/priority_section.js ***!
  \************************************************************/
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
prioritySection.querySelector('#todo-medium-priority').checked = true;

/* harmony default export */ __webpack_exports__["default"] = (prioritySection);

/***/ }),

/***/ "./src/js/form_builder/components/submit_section.js":
/*!**********************************************************!*\
  !*** ./src/js/form_builder/components/submit_section.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getSubmitSection = (formFor) => {
  const submitSection = document.createElement('section');
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = `Create ${formFor.charAt(0).toUpperCase().concat(formFor.slice(1))}`;
  submitSection.appendChild(submitButton);
  return submitSection;
};

/* harmony default export */ __webpack_exports__["default"] = (getSubmitSection);

/***/ }),

/***/ "./src/js/form_builder/components/title_section.js":
/*!*********************************************************!*\
  !*** ./src/js/form_builder/components/title_section.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getTitleSection = (formFor) => {
  const titleSection = document.createElement('section');
  const titleLabel = document.createElement('label');
  titleLabel.htmlFor = `${formFor}-title-input`;
  titleLabel.textContent = 'Title:';
  const titleInput = document.createElement('input');
  titleInput.id = titleLabel.htmlFor;
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleSection.appendChild(titleLabel);
  titleSection.appendChild(titleInput);
  return titleSection;
};

/* harmony default export */ __webpack_exports__["default"] = (getTitleSection);

/***/ }),

/***/ "./src/js/form_builder/forms/project_form.js":
/*!***************************************************!*\
  !*** ./src/js/form_builder/forms/project_form.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_title_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/title_section */ "./src/js/form_builder/components/title_section.js");
/* harmony import */ var _components_submit_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/submit_section */ "./src/js/form_builder/components/submit_section.js");
/* harmony import */ var _display_display_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../display/display_results */ "./src/js/display/display_results.js");
/* harmony import */ var _display_change_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../display/change_dom */ "./src/js/display/change_dom.js");
/* eslint-disable no-unused-vars */





// const validateForm = () => {
//   const projectFormInputs = document.forms['new-project'].title.value;
//   if (projectFormInputs === '') {
//     alert('Title can not be empty');
//     return false;
//   }
//   return projectFormInputs;
// };

const getProjectForm = (formAction) => {
  const projectForm = document.createElement('form');
  projectForm.id = 'new-project';

  projectForm.appendChild(Object(_components_title_section__WEBPACK_IMPORTED_MODULE_0__["default"])('project'));
  projectForm.appendChild(Object(_components_submit_section__WEBPACK_IMPORTED_MODULE_1__["default"])('project'));

  projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectFormInputs = {
      title: projectForm.elements.title.value,
    };
    // validateForm();
    const project = formAction(projectFormInputs);
    projectForm.reset();
    const formModalBox = document.getElementById('project-form-box');
    formModalBox.classList.toggle('show-form');
    Object(_display_display_results__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_display_change_dom__WEBPACK_IMPORTED_MODULE_3__["openProjectTab"])(project.getId());
  });

  return projectForm;
};

/* harmony default export */ __webpack_exports__["default"] = (getProjectForm);

/***/ }),

/***/ "./src/js/form_builder/forms/todo_form.js":
/*!************************************************!*\
  !*** ./src/js/form_builder/forms/todo_form.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_title_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/title_section */ "./src/js/form_builder/components/title_section.js");
/* harmony import */ var _components_description_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/description_section */ "./src/js/form_builder/components/description_section.js");
/* harmony import */ var _components_due_date_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/due_date_section */ "./src/js/form_builder/components/due_date_section.js");
/* harmony import */ var _components_priority_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/priority_section */ "./src/js/form_builder/components/priority_section.js");
/* harmony import */ var _components_notes_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/notes_section */ "./src/js/form_builder/components/notes_section.js");
/* harmony import */ var _components_submit_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/submit_section */ "./src/js/form_builder/components/submit_section.js");
/* harmony import */ var _display_display_results__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../display/display_results */ "./src/js/display/display_results.js");
/* harmony import */ var _display_change_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../display/change_dom */ "./src/js/display/change_dom.js");









const getTodoForm = (formAction) => {
  const todoForm = document.createElement('form');
  todoForm.id = 'new-todo';

  todoForm.appendChild(Object(_components_title_section__WEBPACK_IMPORTED_MODULE_0__["default"])('todo'));

  const projectIdInput = document.createElement('input');
  projectIdInput.name = 'projectid';
  projectIdInput.type = 'hidden';
  projectIdInput.id = 'project-input';
  todoForm.appendChild(projectIdInput);

  const todoIdInput = document.createElement('input');
  todoIdInput.name = 'todoid';
  todoIdInput.type = 'hidden';
  todoIdInput.id = 'todo-input';
  todoIdInput.value = '-1';
  todoForm.appendChild(todoIdInput);

  todoForm.appendChild(_components_description_section__WEBPACK_IMPORTED_MODULE_1__["default"]);
  todoForm.appendChild(_components_due_date_section__WEBPACK_IMPORTED_MODULE_2__["default"]);
  todoForm.appendChild(_components_priority_section__WEBPACK_IMPORTED_MODULE_3__["default"]);
  todoForm.appendChild(_components_notes_section__WEBPACK_IMPORTED_MODULE_4__["default"]);
  todoForm.appendChild(Object(_components_submit_section__WEBPACK_IMPORTED_MODULE_5__["default"])('todo'));

  // eslint-disable-next-line no-unused-vars
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoFormInputs = {
      title: todoForm.elements.title.value,
      description: todoForm.elements.description.value,
      duedate: todoForm.elements.duedate.value,
      priority: todoForm.elements.priority.value,
      notes: todoForm.elements.notes.value,
      projectId: Number(todoForm.elements.projectid.value),
      todoId: Number(todoForm.elements.todoid.value),
      checklist: [],
    };
    const todo = formAction(todoFormInputs);
    todoForm.reset();
    const formModalBox = document.getElementById('todo-form-box');
    formModalBox.classList.toggle('show-form');
    Object(_display_display_results__WEBPACK_IMPORTED_MODULE_6__["default"])();
    Object(_display_change_dom__WEBPACK_IMPORTED_MODULE_7__["openTodoTab"])(todo.getTodoId(), todo.getProjectId());
  });

  return todoForm;
};

/* harmony default export */ __webpack_exports__["default"] = (getTodoForm);


/***/ }),

/***/ "./src/js/form_builder/methods.js":
/*!****************************************!*\
  !*** ./src/js/form_builder/methods.js ***!
  \****************************************/
/*! exports provided: addNewTodoToProject, createNewProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewTodoToProject", function() { return addNewTodoToProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewProject", function() { return createNewProject; });
/* harmony import */ var _models_todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo_factory */ "./src/js/models/todo_factory.js");
/* harmony import */ var _models_project_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project_factory */ "./src/js/models/project_factory.js");
/* harmony import */ var _models_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/data */ "./src/js/models/data.js");




const nextTodoId = (project) => {
  const todos = project.getTodos();
  const numTodos = todos.length;
  const todoId = numTodos === 0 ? 0 : todos[numTodos - 1].getTodoId() + 1;
  return todoId;
};

const nextProjectId = (projectList) => {
  const numProjects = projectList.length;
  const projectId = numProjects === 0 ? 1 : projectList[numProjects - 1].getId() + 1;
  return projectId;
};

const addNewTodoToProject = ({
  title,
  description,
  duedate,
  priority,
  notes,
  projectId,
  todoId,
  checklist,
}) => {
  let todo;
  const projectLibrary = Object(_models_data__WEBPACK_IMPORTED_MODULE_2__["getAppData"])();
  const { defaultProject, otherProjects } = projectLibrary;
  const project = projectId === 0
    ? defaultProject
    : otherProjects.find(project => project.getId() === projectId);
  if (todoId === -1) {
    todoId = nextTodoId(project);
    const newTodo = Object(_models_todo_factory__WEBPACK_IMPORTED_MODULE_0__["default"])(
      title,
      description,
      duedate,
      priority,
      notes,
      projectId,
      todoId,
      checklist,
    );
    project.addTodo(newTodo);
    todo = newTodo;
  } else {
    const todos = project.getTodos();
    const todoToUpdate = todos.find(todo => todo.getTodoId() === todoId);
    const newTitle = title;
    const newDescription = description;
    const newDueDate = duedate;
    const newPriority = priority;
    const newNotes = notes;
    const newChecklist = checklist;
    todoToUpdate.update({
      newTitle,
      newDescription,
      newDueDate,
      newPriority,
      newNotes,
      newChecklist,
    });
    todo = todoToUpdate;
  }
  Object(_models_data__WEBPACK_IMPORTED_MODULE_2__["storeAppData"])(projectLibrary);
  return todo;
};

const createNewProject = ({
  title,
}) => {
  const projects = Object(_models_data__WEBPACK_IMPORTED_MODULE_2__["getAppData"])();
  const projectId = nextProjectId(projects.otherProjects);
  const project = Object(_models_project_factory__WEBPACK_IMPORTED_MODULE_1__["newProjectInstance"])(title, projectId);
  projects.otherProjects.push(project);
  Object(_models_data__WEBPACK_IMPORTED_MODULE_2__["storeAppData"])(projects);
  return project;
};




/***/ }),

/***/ "./src/js/form_builder/modal.js":
/*!**************************************!*\
  !*** ./src/js/form_builder/modal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_todo_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/todo_form */ "./src/js/form_builder/forms/todo_form.js");
/* harmony import */ var _forms_project_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/project_form */ "./src/js/form_builder/forms/project_form.js");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods */ "./src/js/form_builder/methods.js");





const getModal = (formType) => {
  const modal = document.createElement('div');
  modal.id = `${formType}-form-box`;
  modal.className = 'modal';
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modal.appendChild(modalContent);
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = () => {
    const modalBox = document.getElementById(`${formType}-form-box`);
    modalBox.classList.toggle('show-form');
  };
  modalHeader.appendChild(closeBtn);
  const headerText = document.createElement('h2');
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  let form;
  switch (formType) {
    case 'project':
      form = Object(_forms_project_form__WEBPACK_IMPORTED_MODULE_1__["default"])(_methods__WEBPACK_IMPORTED_MODULE_2__["createNewProject"]);
      headerText.textContent = 'Enter Project Name';
      break;
    case 'todo':
      headerText.textContent = 'Enter Todo Details';
      form = Object(_forms_todo_form__WEBPACK_IMPORTED_MODULE_0__["default"])(_methods__WEBPACK_IMPORTED_MODULE_2__["addNewTodoToProject"]);
      break;
    default:
      break;
  }
  modalHeader.appendChild(headerText);
  modalBody.appendChild(form);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  return modal;
};

/* harmony default export */ __webpack_exports__["default"] = (getModal);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var accordion_src_accordion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion/src/accordion.css */ "./node_modules/accordion/src/accordion.css");
/* harmony import */ var accordion_src_accordion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_src_accordion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_builder_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_builder/modal */ "./src/js/form_builder/modal.js");
/* harmony import */ var _display_display_results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/display_results */ "./src/js/display/display_results.js");





const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
contentTag.appendChild(h1);

const modalContainer = document.createElement('div');
modalContainer.id = 'modal-box';
modalContainer.appendChild(Object(_form_builder_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('project'));
modalContainer.appendChild(Object(_form_builder_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('todo'));
contentTag.appendChild(modalContainer);

const displaySection = document.createElement('section');
displaySection.id = 'projects-data';
const heading = document.createElement('h2');
heading.textContent = 'Projects and Todos';
displaySection.appendChild(heading);

const projectControls = document.createElement('div');
const addProjectButton = document.createElement('button');
addProjectButton.id = 'add-project-btn';
addProjectButton.textContent = 'Add Project';
projectControls.appendChild(addProjectButton);
addProjectButton.onclick = () => {
  const modal = document.getElementById('project-form-box');
  modal.classList.toggle('show-form');
};
displaySection.appendChild(projectControls);

contentTag.appendChild(displaySection);
Object(_display_display_results__WEBPACK_IMPORTED_MODULE_3__["default"])();


/***/ }),

/***/ "./src/js/models/data.js":
/*!*******************************!*\
  !*** ./src/js/models/data.js ***!
  \*******************************/
/*! exports provided: getAppData, storeAppData, getTodo, deleteProject, deleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppData", function() { return getAppData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeAppData", function() { return storeAppData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodo", function() { return getTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodo", function() { return deleteTodo; });
/* harmony import */ var _project_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_factory */ "./src/js/models/project_factory.js");


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

const getTodo = (todoId, projectId) => {
  const { defaultProject, otherProjects } = getAppData();
  const project = projectId === 0
    ? defaultProject
    : otherProjects.find(project => project.getId() === projectId);
  const todos = project.getTodos();
  const todoToUpdate = todos.find(todo => todo.getTodoId() === todoId);
  return todoToUpdate;
};

const deleteProject = (projectId) => {
  if (projectId !== 0) {
    const { defaultProject, otherProjects } = getAppData();
    const projectIndex = otherProjects.findIndex(project => project.getId() === projectId);
    otherProjects.splice(projectIndex, 1);
    storeAppData({ defaultProject, otherProjects });
  }
};

const deleteTodo = (todoId, projectId) => {
  const { defaultProject, otherProjects } = getAppData();
  const project = projectId === 0
    ? defaultProject
    : otherProjects.find(project => project.getId() === projectId);
  const todos = project.getTodos();
  const todoIndex = todos.findIndex(todo => todo.getTodoId() === todoId);
  todos.splice(todoIndex, 1);
  storeAppData({ defaultProject, otherProjects });
};




/***/ }),

/***/ "./src/js/models/project_factory.js":
/*!******************************************!*\
  !*** ./src/js/models/project_factory.js ***!
  \******************************************/
/*! exports provided: newProjectInstance, projectFromJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newProjectInstance", function() { return newProjectInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectFromJSON", function() { return projectFromJSON; });
/* harmony import */ var _todo_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_factory */ "./src/js/models/todo_factory.js");


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
    todoId,
    checklist,
  }) => Object(_todo_factory__WEBPACK_IMPORTED_MODULE_0__["default"])(
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    todoId,
    checklist,
  ));
  return newProjectInstance(title, id, todoInstances);
});




/***/ }),

/***/ "./src/js/models/todo_factory.js":
/*!***************************************!*\
  !*** ./src/js/models/todo_factory.js ***!
  \***************************************/
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
  todoId,
  checklist,
) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNotes = () => notes;
  const getProjectId = () => projectId;
  const getTodoId = () => todoId;
  const getAttributes = () => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    todoId,
    checklist,
  });

  const update = ({
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newNotes,
    newChecklist,
  }) => {
    title = newTitle;
    description = newDescription;
    dueDate = newDueDate;
    priority = newPriority;
    notes = newNotes;
    checklist = newChecklist;
  };

  return {
    getAttributes,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNotes,
    getProjectId,
    getTodoId,
    update,
  };
};

/* harmony default export */ __webpack_exports__["default"] = (newTodoInstance);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvYWNjb3JkaW9uLmNzcz80YTI3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hY2NvcmRpb24vc3JjL2FjY29yZGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvZm9sZC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvaGVscGVycy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvYWNjb3JkaW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzNmZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Rpc3BsYXkvYWNjb3JkaW9uX3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaXNwbGF5L2J1dHRvbl9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Rpc3BsYXkvY2hhbmdlX2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGlzcGxheS9jb21wb25lbnRzL3Byb2plY3RfZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGlzcGxheS9jb21wb25lbnRzL3RvZG9fZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGlzcGxheS9kaXNwbGF5X3Jlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9jb21wb25lbnRzL2Rlc2NyaXB0aW9uX3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9jb21wb25lbnRzL2R1ZV9kYXRlX3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9jb21wb25lbnRzL25vdGVzX3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9jb21wb25lbnRzL3ByaW9yaXR5X3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9jb21wb25lbnRzL3N1Ym1pdF9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtX2J1aWxkZXIvY29tcG9uZW50cy90aXRsZV9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtX2J1aWxkZXIvZm9ybXMvcHJvamVjdF9mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtX2J1aWxkZXIvZm9ybXMvdG9kb19mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtX2J1aWxkZXIvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybV9idWlsZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9wcm9qZWN0X2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy90b2RvX2ZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztR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QTtBQUNBO0FBQ0E7O0FBRWUsOEVBQWUsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWNjb3JkaW9uLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7dHJhbnNpdGlvbkVuZCwgc2V0VG9rZW4sIGRlYm91bmNlfSBmcm9tIFwiLi9oZWxwZXJzLm1qc1wiO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEZvbGQsIGZvbGRzfSBmcm9tIFwiLi9mb2xkLm1qc1wiO1xuXG5jb25zdCBhY2NvcmRpb25zICAgICA9IFtdO1xubGV0IGFjdGl2ZUFjY29yZGlvbnMgPSAwO1xubGV0IGxhc3RSZXNpemVSYXRlO1xuXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNvbHVtbiBvZiBjb2xsYXBzaWJsZSBjb250ZW50IHJlZ2lvbnMuXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblxuXHQvKipcblx0ICogSW5zdGFudGlhdGUgYSBuZXcgQWNjb3JkaW9uIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCAgICAgICAgICAgICAgICAgICAgLSBDb250YWluZXIgd3JhcHBlZCBhcm91bmQgZWFjaCBpbW1lZGlhdGUgZm9sZFxuXHQgKiBAcGFyYW0ge09iamVjdH0gICAgICBvcHRpb25zICAgICAgICAgICAgICAgLSBPcHRpb25hbCBoYXNoIG9mIHNldHRpbmdzXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSAgICAgIG9wdGlvbnMub3BlbkNsYXNzICAgICAtIENTUyBjbGFzcyBjb250cm9sbGluZyBlYWNoIGZvbGQncyBcIm9wZW5cIiBzdGF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gICAgICBvcHRpb25zLmNsb3NlQ2xhc3MgICAgLSBDU1MgY2xhc3MgdXNlZCB0byBtYXJrIGEgZm9sZCBhcyBjbG9zZWRcblx0ICogQHBhcmFtIHtTdHJpbmd9ICAgICAgb3B0aW9ucy5lZGdlQ2xhc3MgICAgIC0gQ1NTIGNsYXNzIHRvZ2dsZWQgYmFzZWQgb24gd2hldGhlciB0aGUgYm90dG9tLWVkZ2UgaXMgdmlzaWJsZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gICAgICBvcHRpb25zLnNuYXBDbGFzcyAgICAgLSBDU1MgY2xhc3MgZm9yIGRpc2FibGluZyB0cmFuc2l0aW9ucyBiZXR3ZWVuIHdpbmRvdyByZXNpemVzXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSAgICAgIG9wdGlvbnMuZW5hYmxlZENsYXNzICAtIENTUyBjbGFzcyBtYXJraW5nIGFuIGFjY29yZGlvbiBhcyBlbmFibGVkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSAgICAgIG9wdGlvbnMuZGlzYWJsZWRDbGFzcyAtIENTUyBjbGFzcyBtYXJraW5nIGFuIGFjY29yZGlvbiBhcyBkaXNhYmxlZFxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICBvcHRpb25zLmRpc2FibGVkICAgICAgLSBXaGV0aGVyIHRvIGRpc2FibGUgdGhlIGFjY29yZGlvbiBvbiBjcmVhdGlvblxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICBvcHRpb25zLm1vZGFsICAgICAgICAgLSBXaGV0aGVyIHRvIGNsb3NlIHRoZSBjdXJyZW50IGZvbGQgd2hlbiBvcGVuaW5nIGFub3RoZXJcblx0ICogQHBhcmFtIHtCb29sZWFufSAgICAgb3B0aW9ucy5ub0FyaWEgICAgICAgIC0gRGlzYWJsZSB0aGUgYWRkaXRpb24gYW5kIG1hbmFnZW1lbnQgb2YgQVJJQSBhdHRyaWJ1dGVzXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gICAgIG9wdGlvbnMubm9LZXlzICAgICAgICAtIERpc2FibGUga2V5Ym9hcmQgbmF2aWdhdGlvblxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICBvcHRpb25zLm5vVHJhbnNmb3JtcyAgLSBEaXNhYmxlIENTUyB0cmFuc2Zvcm1zOyBwb3NpdGlvbmluZyB3aWxsIGJlIHVzZWQgaW5zdGVhZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gICAgICBvcHRpb25zLmhlaWdodE9mZnNldCAgLSBEaXN0YW5jZSB0byBvZmZzZXQgZWFjaCBmb2xkIGJ5XG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gICAgIG9wdGlvbnMudXNlQm9yZGVycyAgICAtIENvbnNpZGVyIGJvcmRlcnMgd2hlbiBjYWxjdWxhdGluZyBmb2xkIGhlaWdodHNcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gICAgb3B0aW9ucy5vblRvZ2dsZSAgICAgIC0gQ2FsbGJhY2sgZXhlY3V0ZWQgd2hlbiBvcGVuaW5nIG9yIGNsb3NpbmcgYSBmb2xkXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Y29uc3RydWN0b3IoZWwsIG9wdGlvbnMpe1xuXHRcdHRoaXMuaW5kZXggPSBhY2NvcmRpb25zLnB1c2godGhpcykgLSAxO1xuXHRcdFxuXHRcdC8vIFBhcnNlIG9wdGlvbnNcblx0XHRvcHRpb25zICAgICAgICAgICAgPSBvcHRpb25zIHx8IHt9O1xuXHRcdHRoaXMub3BlbkNsYXNzICAgICA9IG9wdGlvbnMub3BlbkNsYXNzICB8fCBcIm9wZW5cIjtcblx0XHR0aGlzLmNsb3NlQ2xhc3MgICAgPSBvcHRpb25zLmNsb3NlQ2xhc3MgfHwgXCJjbG9zZWRcIjtcblx0XHR0aGlzLmVkZ2VDbGFzcyAgICAgPSAodW5kZWZpbmVkID09PSBvcHRpb25zLmVkZ2VDbGFzcyAgICA/IFwiZWRnZS12aXNpYmxlXCIgOiBvcHRpb25zLmVkZ2VDbGFzcyk7XG5cdFx0dGhpcy5zbmFwQ2xhc3MgICAgID0gKHVuZGVmaW5lZCA9PT0gb3B0aW9ucy5zbmFwQ2xhc3MgICAgPyBcInNuYXBcIiAgICAgICAgIDogb3B0aW9ucy5zbmFwQ2xhc3MpO1xuXHRcdHRoaXMuZW5hYmxlZENsYXNzICA9ICh1bmRlZmluZWQgPT09IG9wdGlvbnMuZW5hYmxlZENsYXNzID8gXCJhY2NvcmRpb25cIiAgICA6IG9wdGlvbnMuZW5hYmxlZENsYXNzKTtcblx0XHR0aGlzLmRpc2FibGVkQ2xhc3MgPSBvcHRpb25zLmRpc2FibGVkQ2xhc3M7XG5cdFx0dGhpcy5tb2RhbCAgICAgICAgID0gISFvcHRpb25zLm1vZGFsO1xuXHRcdHRoaXMubm9BcmlhICAgICAgICA9ICEhb3B0aW9ucy5ub0FyaWE7XG5cdFx0dGhpcy5ub0tleXMgICAgICAgID0gISFvcHRpb25zLm5vS2V5cztcblx0XHR0aGlzLm5vVHJhbnNmb3JtcyAgPSAhIW9wdGlvbnMubm9UcmFuc2Zvcm1zO1xuXHRcdHRoaXMuaGVpZ2h0T2Zmc2V0ICA9ICtvcHRpb25zLmhlaWdodE9mZnNldCB8fCAwO1xuXHRcdHRoaXMudXNlQm9yZGVycyAgICA9IHVuZGVmaW5lZCA9PT0gb3B0aW9ucy51c2VCb3JkZXJzID8gXCJhdXRvXCIgOiBvcHRpb25zLnVzZUJvcmRlcnM7XG5cdFx0dGhpcy5vblRvZ2dsZSAgICAgID0gb3B0aW9ucy5vblRvZ2dsZTtcblx0XHRcblx0XHRcblx0XHQvLyBDcmVhdGUgYSBmb2xkIGZvciBlYWNoIGltbWVkaWF0ZSBkZXNjZW5kYW50IG9mIHRoZSBBY2NvcmRpb24ncyBjb250YWluZXJcblx0XHRsZXQgZm9sZHMgPSBbXTtcblx0XHRmb3IobGV0IGkgb2YgQXJyYXkuZnJvbShlbC5jaGlsZHJlbikpe1xuXHRcdFx0bGV0IGZvbGQgPSBuZXcgRm9sZCh0aGlzLCBpKTtcblx0XHRcdGZvbGRzLnB1c2goZm9sZCk7XG5cdFx0XHRcblx0XHRcdC8vIENvbm5lY3QgdGhlIGZvbGQgdG8gaXRzIHByZXZpb3VzIHNpYmxpbmcsIGlmIGl0J3Mgbm90IHRoZSBmaXJzdCB0byBiZSBhZGRlZFxuXHRcdFx0bGV0IHByZXYgPSBmb2xkc1tmb2xkcy5sZW5ndGggLSAyXTtcblx0XHRcdGlmKHByZXYpe1xuXHRcdFx0XHRwcmV2Lm5leHRGb2xkICAgICA9IGZvbGQ7XG5cdFx0XHRcdGZvbGQucHJldmlvdXNGb2xkID0gcHJldjtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0ZWwuYWNjb3JkaW9uICAgID0gdGhpcy5pbmRleDtcblx0XHR0aGlzLm5vQXJpYSB8fCBlbC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwidGFibGlzdFwiKTtcblx0XHR0aGlzLmVsICAgICAgICAgPSBlbDtcblx0XHR0aGlzLmZvbGRzICAgICAgPSBmb2xkcztcblxuXHRcdC8vIEFkZCAuZW5hYmxlZENsYXNzIGVhcmx5IC0gaXQgbWlnaHQgYWZmZWN0IHRoZSBoZWlnaHRzIG9mIGVhY2ggZm9sZFxuXHRcdGlmKCFvcHRpb25zLmRpc2FibGVkICYmIHRoaXMuZW5hYmxlZENsYXNzKVxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmVuYWJsZWRDbGFzcyk7XG5cdFx0XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcblx0XHRcblx0XHQvLyBGaW5kIG91dCBpZiB0aGlzIGFjY29yZGlvbidzIG5lc3RlZCBpbnNpZGUgYW5vdGhlclxuXHRcdGxldCBuZXh0ID0gZWw7XG5cdFx0d2hpbGUoKG5leHQgPSBuZXh0LnBhcmVudE5vZGUpICYmIDEgPT09IG5leHQubm9kZVR5cGUpe1xuXHRcdFx0bGV0IGZvbGQgPSBBY2NvcmRpb24uZ2V0Rm9sZChuZXh0KTtcblx0XHRcdGlmKGZvbGQpe1xuXHRcdFx0XHRsZXQgYWNjb3JkaW9uICAgPSBmb2xkLmFjY29yZGlvbjtcblx0XHRcdFx0dGhpcy5wYXJlbnQgICAgID0gYWNjb3JkaW9uO1xuXHRcdFx0XHR0aGlzLnBhcmVudEZvbGQgPSBmb2xkO1xuXHRcdFx0XHR0aGlzLmVkZ2VDbGFzcyAmJiBlbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZWRnZUNsYXNzKTtcblx0XHRcdFx0KGFjY29yZGlvbi5jaGlsZEFjY29yZGlvbnMgPSBhY2NvcmRpb24uY2hpbGRBY2NvcmRpb25zIHx8IFtdKS5wdXNoKHRoaXMpO1xuXHRcdFx0XHQoZm9sZC5jaGlsZEFjY29yZGlvbnMgICAgICA9IGZvbGQuY2hpbGRBY2NvcmRpb25zICAgICAgfHwgW10pLnB1c2godGhpcyk7XG5cblx0XHRcdFx0Ly8gQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5pbmcgZm9sZCdzIGVsZW1lbnRcblx0XHRcdFx0aWYoZm9sZC5vcGVuKXtcblx0XHRcdFx0XHRsZXQgc2Nyb2xsSGVpZ2h0ID0gZm9sZC5lbC5zY3JvbGxIZWlnaHQ7XG5cdFx0XHRcdFx0bGV0IGRpc3RhbmNlICAgICA9IChmb2xkLmhlYWRpbmdIZWlnaHQgKyBmb2xkLmNvbnRlbnQuc2Nyb2xsSGVpZ2h0KSAtIHNjcm9sbEhlaWdodCB8fCAoc2Nyb2xsSGVpZ2h0IC0gZm9sZC5lbC5jbGllbnRIZWlnaHQpO1xuXHRcdFx0XHRcdGFjY29yZGlvbi51cGRhdGVGb2xkKGZvbGQsIGRpc3RhbmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5lZGdlQ2xhc3MgJiYgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmQsIHRoaXMub25UcmFuc2l0aW9uRW5kID0gZSA9PiB7XG5cdFx0XHRpZighdGhpcy5wYXJlbnQgJiYgZS50YXJnZXQgPT09IGVsICYmIFwiaGVpZ2h0XCIgPT09IGUucHJvcGVydHlOYW1lICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodClcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmVkZ2VDbGFzcyk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0dGhpcy5kaXNhYmxlZCA9ICEhb3B0aW9ucy5kaXNhYmxlZDtcblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBHZXQgb3Igc2V0IHRoZSBhY2NvcmRpb24gZW5jbG9zaW5nIHRoaXMgb25lLlxuXHQgKlxuXHQgKiBAcHJvcGVydHlcblx0ICogQHR5cGUge0FjY29yZGlvbn1cblx0ICovXG5cdHNldCBwYXJlbnQoaW5wdXQpeyB0aGlzLl9wYXJlbnQgPSBpbnB1dDsgfVxuXHRnZXQgcGFyZW50KCl7XG5cdFx0bGV0IHJlc3VsdCA9IHRoaXMuX3BhcmVudDtcblx0XHRpZighcmVzdWx0KSByZXR1cm4gbnVsbDtcblx0XHRcblx0XHQvLyBTZWFyY2ggZm9yIHRoZSBmaXJzdCBhbmNlc3RvciB0aGF0ICppc24ndCogZGlzYWJsZWRcblx0XHR3aGlsZShyZXN1bHQpe1xuXHRcdFx0aWYoIXJlc3VsdC5kaXNhYmxlZCkgcmV0dXJuIHJlc3VsdDtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIEdldCBvciBzZXQgdGhlIGZvbGQgb2YgdGhlIGFjY29yZGlvbiBlbmNsb3NpbmcgdGhpcyBvbmUuXG5cdCAqXG5cdCAqIEBwcm9wZXJ0eVxuXHQgKiBAdHlwZSB7Rm9sZH1cblx0ICovXG5cdHNldCBwYXJlbnRGb2xkKGlucHV0KXsgdGhpcy5fcGFyZW50Rm9sZCA9IGlucHV0OyB9XG5cdGdldCBwYXJlbnRGb2xkKCl7XG5cdFx0bGV0IGZvbGQgPSB0aGlzLl9wYXJlbnRGb2xkO1xuXHRcdGlmKCFmb2xkKSByZXR1cm4gbnVsbDtcblx0XHRcblx0XHRsZXQgYWNjb3JkaW9uID0gZm9sZC5hY2NvcmRpb247XG5cdFx0XG5cdFx0Ly8gU2VhcmNoIGZvciB0aGUgZmlyc3QgYW5jZXN0b3IgdGhhdCAqaXNuJ3QqIGRpc2FibGVkXG5cdFx0d2hpbGUoZm9sZCAmJiBhY2NvcmRpb24pe1xuXHRcdFx0aWYoIWFjY29yZGlvbi5kaXNhYmxlZCkgcmV0dXJuIGZvbGQ7XG5cdFx0XHRpZihhY2NvcmRpb24gPSBhY2NvcmRpb24ucGFyZW50KVxuXHRcdFx0XHRmb2xkID0gYWNjb3JkaW9uLnBhcmVudEZvbGQ7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIGFjY29yZGlvbidzIGJlZW4gZGVhY3RpdmF0ZWQuXG5cdCAqXG5cdCAqIEBwcm9wZXJ0eVxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBkaXNhYmxlZCgpeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cblx0c2V0IGRpc2FibGVkKGlucHV0KXtcblx0XHRpZigoaW5wdXQgPSAhIWlucHV0KSAhPT0gdGhpcy5fZGlzYWJsZWQpe1xuXHRcdFx0Y29uc3QgZWwgICAgICA9IHRoaXMuZWw7XG5cdFx0XHRjb25zdCBzdHlsZSAgID0gZWwuc3R5bGU7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gZWwuY2xhc3NMaXN0O1xuXHRcdFx0XG5cdFx0XHR0aGlzLmVuYWJsZWRDbGFzcyAgJiYgc2V0VG9rZW4oY2xhc3NlcywgdGhpcy5lbmFibGVkQ2xhc3MsICAhaW5wdXQpO1xuXHRcdFx0dGhpcy5kaXNhYmxlZENsYXNzICYmIHNldFRva2VuKGNsYXNzZXMsIHRoaXMuZGlzYWJsZWRDbGFzcywgIGlucHV0KTtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvLyBEZWFjdGl2YXRpbmdcblx0XHRcdGlmKHRoaXMuX2Rpc2FibGVkID0gaW5wdXQpe1xuXHRcdFx0XHRzdHlsZS5oZWlnaHQgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnNuYXBDbGFzcyAmJiBjbGFzc2VzLnJlbW92ZSh0aGlzLnNuYXBDbGFzcyk7XG5cdFx0XHRcdGlmKHRoaXMuZWRnZUNsYXNzKXtcblx0XHRcdFx0XHRlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmQsIHRoaXMub25UcmFuc2l0aW9uRW5kKTtcblx0XHRcdFx0XHRjbGFzc2VzLnJlbW92ZSh0aGlzLmVkZ2VDbGFzcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGZvcihsZXQgaSBvZiB0aGlzLmZvbGRzKVxuXHRcdFx0XHRcdGkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5ub0FyaWEgfHwgZWwucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKTtcblx0XHRcdFx0LS1hY3RpdmVBY2NvcmRpb25zO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIFJlYWN0aXZhdGluZ1xuXHRcdFx0ZWxzZXtcblx0XHRcdFx0Zm9yKGxldCBpIG9mIHRoaXMuZm9sZHMpXG5cdFx0XHRcdFx0aS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5ub0FyaWEgfHwgZWwuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRhYmxpc3RcIik7XG5cdFx0XHRcdCsrYWN0aXZlQWNjb3JkaW9ucztcblx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRcblx0XHRcdC8vIElmIHRoZXJlJ3JlIG5vIG1vcmUgYWN0aXZlIGFjY29yZGlvbnMsIGRpc2FibGUgdGhlIG9uUmVzaXplIGhhbmRsZXJcblx0XHRcdGlmKGFjdGl2ZUFjY29yZGlvbnMgPD0gMCl7XG5cdFx0XHRcdGFjdGl2ZUFjY29yZGlvbnMgPSAwO1xuXHRcdFx0XHRBY2NvcmRpb24uc2V0UmVzaXplUmF0ZShmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIE90aGVyd2lzZSwgcmVhY3RpdmF0ZSB0aGUgb25SZXNpemUgaGFuZGxlciwgYXNzdW1pbmcgaXQgd2FzIHByZXZpb3VzbHkgYWN0aXZlXG5cdFx0XHRlbHNlIGlmKGxhc3RSZXNpemVSYXRlKVxuXHRcdFx0XHRBY2NvcmRpb24uc2V0UmVzaXplUmF0ZShsYXN0UmVzaXplUmF0ZSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIGFjY29yZGlvbidzIGNvbnRhaW5lciBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcHJvcGVydHlcblx0ICogQHR5cGUge051bWJlcn1cblx0ICovXG5cdGdldCBoZWlnaHQoKXsgcmV0dXJuIHRoaXMuX2hlaWdodDsgfVxuXHRzZXQgaGVpZ2h0KGlucHV0KXtcblx0XHRpZihpbnB1dCAmJiAoaW5wdXQgPSAraW5wdXQpICE9PSB0aGlzLl9oZWlnaHQpe1xuXHRcdFx0dGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBpbnB1dCArIFwicHhcIjtcblx0XHRcdHRoaXMuX2hlaWdodCAgICAgICAgID0gaW5wdXQ7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBJbnRlcm5hbCBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYWNjb3JkaW9uJ3MgYm90dG9tLWVkZ2UgaXMgdmlzaWJsZSB0byB0aGUgdXNlciAob3IgYWJvdXQgdG8gYmUpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRlZGdlQ2hlY2sob2Zmc2V0KXtcblx0XHRsZXQgZWRnZUNsYXNzID0gdGhpcy5lZGdlQ2xhc3M7XG5cdFx0aWYoZWRnZUNsYXNzKXtcblx0XHRcdGxldCBib3ggICAgICAgICA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRsZXQgd2luZG93RWRnZSAgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0XHRsZXQgY2xhc3NlcyAgICAgPSB0aGlzLmVsLmNsYXNzTGlzdDtcblx0XHRcdFxuXHRcdFx0Ly8gSWYgdGhlIGJvdHRvbS1lZGdlIGlzIHZpc2libGUgKG9yIGFib3V0IHRvIGJlKSwgZW5hYmxlIGhlaWdodCBhbmltYXRpb25cblx0XHRcdGlmKGJveC5ib3R0b20gKyAob2Zmc2V0IHx8IDApIDwgd2luZG93RWRnZSlcblx0XHRcdFx0Y2xhc3Nlcy5hZGQoZWRnZUNsYXNzKTtcblx0XHRcdFxuXHRcdFx0Ly8gSWYgdGhlIGJvdHRvbS1lZGdlIGlzbid0IHZpc2libGUgYW55d2F5LCBkaXNhYmxlIGhlaWdodCBhbmltYXRpb24gaW1tZWRpYXRlbHlcblx0XHRcdGVsc2UgaWYoYm94LmJvdHRvbSA+IHdpbmRvd0VkZ2UpXG5cdFx0XHRcdGNsYXNzZXMucmVtb3ZlKGVkZ2VDbGFzcyk7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIHZlcnRpY2FsIG9yZGluYXRlIG9mIGVhY2ggc2libGluZyBmb3IgYSBwYXJ0aWN1bGFyIGZvbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Rm9sZH0gZm9sZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IC0gUGl4ZWwgZGlzdGFuY2UgdG8gYWRqdXN0IGJ5XG5cdCAqL1xuXHR1cGRhdGVGb2xkKGZvbGQsIG9mZnNldCl7XG5cdFx0bGV0IG5leHQgPSBmb2xkO1xuXHRcdGxldCBwYXJlbnRGb2xkID0gdGhpcy5wYXJlbnRGb2xkO1xuXHRcdFxuXHRcdHdoaWxlKG5leHQgPSBuZXh0Lm5leHRGb2xkKVxuXHRcdFx0bmV4dC55ICArPSBvZmZzZXQ7XG5cdFx0cGFyZW50Rm9sZCB8fCB0aGlzLmVkZ2VDaGVjayhvZmZzZXQpO1xuXHRcdGZvbGQuaGVpZ2h0ICs9IG9mZnNldDtcblx0XHR0aGlzLmhlaWdodCArPSBvZmZzZXQ7XG5cdFx0XG5cdFx0cGFyZW50Rm9sZCAmJiBwYXJlbnRGb2xkLm9wZW4gJiYgdGhpcy5wYXJlbnQudXBkYXRlRm9sZChwYXJlbnRGb2xkLCBvZmZzZXQpO1xuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgaGVpZ2h0IG9mIGVhY2ggZm9sZCB0byBmaXQgaXRzIGNvbnRlbnQuXG5cdCAqL1xuXHR1cGRhdGUoKXtcblx0XHRsZXQgeSA9IDA7XG5cdFx0bGV0IGhlaWdodCA9IDA7XG5cdFx0Zm9yKGxldCBpIG9mIHRoaXMuZm9sZHMpe1xuXHRcdFx0aS55ID0geTtcblx0XHRcdGkuZml0KCk7XG5cdFx0XHR5ICAgICAgKz0gaS5oZWlnaHQ7XG5cdFx0XHRoZWlnaHQgKz0gaS5oZWlnaHQ7XG5cdFx0fVxuXHRcdFxuXHRcdGxldCBwYXJlbnRGb2xkID0gdGhpcy5wYXJlbnRGb2xkO1xuXHRcdGxldCBkaWZmICAgICAgID0gaGVpZ2h0IC0gdGhpcy5faGVpZ2h0O1xuXHRcdHBhcmVudEZvbGRcblx0XHRcdD8gKHBhcmVudEZvbGQub3BlbiAmJiB0aGlzLnBhcmVudC51cGRhdGVGb2xkKHBhcmVudEZvbGQsIGRpZmYpKVxuXHRcdFx0OiB0aGlzLmVkZ2VDaGVjayhkaWZmKTtcblx0XHRcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogUmVjYWxjdWxhdGUgdGhlIGJvdW5kYXJpZXMgb2YgYW4gQWNjb3JkaW9uIGFuZCBpdHMgZGVzY2VuZGFudHMuXG5cdCAqXG5cdCAqIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBpZiB0aGUgd2lkdGggb2YgYSBjb250YWluZXIgY2hhbmdlcyxcblx0ICogb3IgYSBmb2xkJ3MgY29udGVudHMgaGF2ZSByZXNpemVkIHVuZXhwZWN0ZWRseSAoc3VjaCBhcyB3aGVuIGltYWdlcyBsb2FkKS5cblx0ICpcblx0ICogQHBhcmFtIHtCb29sZWFufSBhbGxvd1NuYXAgLSBTbmFwIGZvbGRzIGluc3RhbnRseSBpbnRvIHBsYWNlIHdpdGhvdXQgdHJhbnNpdGlvbmluZ1xuXHQgKi9cblx0cmVmcmVzaChhbGxvd1NuYXApe1xuXHRcdGxldCBzbmFwID0gYWxsb3dTbmFwID8gdGhpcy5zbmFwQ2xhc3MgOiBmYWxzZTtcblx0XHRzbmFwICYmIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChzbmFwKTtcblx0XHRcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdGlmKHRoaXMuY2hpbGRBY2NvcmRpb25zKVxuXHRcdFx0dGhpcy5jaGlsZEFjY29yZGlvbnMuZm9yRWFjaChhID0+IGEucGFyZW50Rm9sZC5vcGVuXG5cdFx0XHRcdD8gYS5yZWZyZXNoKGFsbG93U25hcClcblx0XHRcdFx0OiAoYS5wYXJlbnRGb2xkLm5lZWRzUmVmcmVzaCA9IHRydWUpKTtcblx0XHRcblx0XHRzbmFwICYmIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKHNuYXApLCAyMCk7XG5cdH1cblx0XG5cdFxuXHRcblx0LyoqXG5cdCAqIFdoZXRoZXIgb25lIG9mIHRoZSBBY2NvcmRpb24ncyBmb2xkcyBoYXMgYmVlbiByZXNpemVkIGluY29ycmVjdGx5LlxuXHQgKlxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICogQHJlYWRvbmx5XG5cdCAqIEBwcm9wZXJ0eVxuXHQgKi9cblx0Z2V0IHdyb25nU2l6ZSgpe1xuXHRcdGZvcihsZXQgaSBvZiB0aGlzLmZvbGRzKVxuXHRcdFx0aWYoaS53cm9uZ1NpemUpIHJldHVybiB0cnVlO1xuXHRcdGlmKHRoaXMuY2hpbGRBY2NvcmRpb25zKSBmb3IobGV0IGkgb2YgdGhpcy5jaGlsZEFjY29yZGlvbnMpXG5cdFx0XHRpZihpLndyb25nU2l6ZSkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHRvcC1sZXZlbCBhbmNlc3RvciB0aGlzIGFjY29yZGlvbidzIG5lc3RlZCBpbnNpZGUuXG5cdCAqXG5cdCAqIEB0eXBlIHtBY2NvcmRpb259XG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvcGVydHlcblx0ICovXG5cdGdldCByb290KCl7XG5cdFx0bGV0IHJlc3VsdCA9IHRoaXM7XG5cdFx0d2hpbGUocmVzdWx0KXtcblx0XHRcdGlmKCFyZXN1bHQucGFyZW50KSByZXR1cm4gcmVzdWx0O1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudDtcblx0XHR9XG5cdH1cblx0XG5cdFxuXHRcblx0LyoqXG5cdCAqIEFsdGVyIHRoZSByYXRlIGF0IHdoaWNoIHNjcmVlbi1yZXNpemUgZXZlbnRzIHVwZGF0ZSBhY2NvcmRpb24gd2lkdGhzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgLSBSYXRlIGV4cHJlc3NlZCBpbiBtaWxsaXNlY29uZHNcblx0ICovXG5cdHN0YXRpYyBzZXRSZXNpemVSYXRlKGRlbGF5KXtcblx0XHRsZXQgZm4gPSBmdW5jdGlvbigpe1xuXHRcdFx0Zm9yKGxldCBpIG9mIGFjY29yZGlvbnMpXG5cdFx0XHRcdGkucGFyZW50IHx8IGkuZGlzYWJsZWQgfHwgaS5yZWZyZXNoKHRydWUpO1xuXHRcdH07XG5cdFx0XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XG5cdFx0XG5cdFx0Ly8gTWFrZSBzdXJlIHdlIHdlcmVuJ3QgcGFzc2VkIGFuIGV4cGxpY2l0IHZhbHVlIG9mIEZBTFNFLCBvciBhIG5lZ2F0aXZlIHZhbHVlXG5cdFx0aWYoZmFsc2UgIT09IGRlbGF5ICYmIChkZWxheSA9ICtkZWxheSB8fCAwKSA+PSAwKXtcblx0XHRcdHRoaXMub25SZXNpemUgPSBkZWxheSA/IGRlYm91bmNlKGZuLCBkZWxheSkgOiBmbjtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xuXHRcdFx0aWYoZGVsYXkpIGxhc3RSZXNpemVSYXRlID0gZGVsYXk7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIGNsb3Nlc3QgKG1vc3QgZGVlcGx5LW5lc3RlZCkgYWNjb3JkaW9uIGVuY2xvc2luZyBhbiBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge05vZGV9IG5vZGVcblx0ICogQHJldHVybiB7QWNjb3JkaW9ufVxuXHQgKi9cblx0c3RhdGljIGdldEFjY29yZGlvbihub2RlKXtcblx0XHR3aGlsZShub2RlKXtcblx0XHRcdGlmKFwiYWNjb3JkaW9uXCIgaW4gbm9kZSlcblx0XHRcdFx0cmV0dXJuIGFjY29yZGlvbnNbbm9kZS5hY2NvcmRpb25dO1xuXHRcdFx0XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0aWYoIW5vZGUgfHwgbm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIFJldHVybiB0aGUgY2xvc2VzdCAobW9zdCBkZWVwbHktbmVzdGVkKSBmb2xkIGVuY2xvc2luZyBhbiBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge05vZGV9IG5vZGVcblx0ICogQHJldHVybiB7Rm9sZH1cblx0ICovXG5cdHN0YXRpYyBnZXRGb2xkKG5vZGUpe1xuXHRcdHdoaWxlKG5vZGUpe1xuXHRcdFx0aWYoXCJhY2NvcmRpb25Gb2xkXCIgaW4gbm9kZSlcblx0XHRcdFx0cmV0dXJuIGZvbGRzW25vZGUuYWNjb3JkaW9uRm9sZF07XG5cdFx0XHRcblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0XHRpZighbm9kZSB8fCBub2RlLm5vZGVUeXBlICE9PSAxKSByZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cbn1cblxuXG5BY2NvcmRpb24uc2V0UmVzaXplUmF0ZSgyNSk7XG53aW5kb3cuQWNjb3JkaW9uID0gQWNjb3JkaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7XG5cdHRvdWNoRW5hYmxlZCxcblx0cHJlc3NFdmVudCxcblx0c2V0VG9rZW4sXG5cdHVuaXF1ZUlELFxuXHRjc3NUcmFuc2Zvcm0sXG5cdGNzczNEU3VwcG9ydGVkLFxufSBmcm9tIFwiLi9oZWxwZXJzLm1qc1wiO1xuXG5leHBvcnQgY29uc3QgZm9sZHMgPSBbXTtcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgcGFuZWwgb2YgdG9nZ2xhYmxlIGNvbnRlbnQgaW5zaWRlIGFuIEFjY29yZGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZHtcblx0XG5cdC8qKlxuXHQgKiBJbnN0YW50aWF0ZSBhIG5ldyBGb2xkIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FjY29yZGlvbn0gYWNjb3JkaW9uXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Y29uc3RydWN0b3IoYWNjb3JkaW9uLCBlbCl7XG5cdFx0bGV0IGhlYWRpbmcgICAgICAgICAgPSBlbC5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRsZXQgY29udGVudCAgICAgICAgICA9IGVsLmxhc3RFbGVtZW50Q2hpbGQ7XG5cdFx0bGV0IHVzZUJvcmRlcnMgICAgICAgPSBhY2NvcmRpb24udXNlQm9yZGVycztcblx0XHRcblx0XHR0aGlzLmluZGV4ICAgICAgICAgICA9IGZvbGRzLnB1c2godGhpcykgLSAxO1xuXHRcdHRoaXMuYWNjb3JkaW9uICAgICAgID0gYWNjb3JkaW9uO1xuXHRcdHRoaXMuZWwgICAgICAgICAgICAgID0gZWw7XG5cdFx0dGhpcy5oZWFkaW5nICAgICAgICAgPSBoZWFkaW5nO1xuXHRcdHRoaXMuY29udGVudCAgICAgICAgID0gY29udGVudDtcblx0XHR0aGlzLm9wZW5DbGFzcyAgICAgICA9IGFjY29yZGlvbi5vcGVuQ2xhc3M7XG5cdFx0dGhpcy5jbG9zZUNsYXNzICAgICAgPSBhY2NvcmRpb24uY2xvc2VDbGFzcztcblx0XHR0aGlzLmFyaWFFbmFibGVkICAgICA9ICFhY2NvcmRpb24ubm9BcmlhO1xuXHRcdHRoaXMuaGVpZ2h0T2Zmc2V0ICAgID0gYWNjb3JkaW9uLmhlaWdodE9mZnNldDtcblx0XHR0aGlzLnVzZUJvcmRlcnMgICAgICA9IFwiYXV0b1wiID09PSB1c2VCb3JkZXJzID8gKDAgIT09IHRoaXMuZWxCb3JkZXIgKyB0aGlzLmhlYWRpbmdCb3JkZXIpIDogdXNlQm9yZGVycztcblx0XHR0aGlzLnVzZVRyYW5zZm9ybXMgICA9ICFhY2NvcmRpb24ubm9UcmFuc2Zvcm1zICYmIGNzc1RyYW5zZm9ybTtcblx0XHR0aGlzLm9uVG9nZ2xlICAgICAgICA9IGFjY29yZGlvbi5vblRvZ2dsZTtcblx0XHRlbC5hY2NvcmRpb25Gb2xkICAgICA9IHRoaXMuaW5kZXg7XG5cdFx0XG5cdFx0XG5cdFx0Ly8gS2V5Ym9hcmQgbmF2aWdhdGlvblxuXHRcdGlmKCFhY2NvcmRpb24ubm9LZXlzKXtcblx0XHRcdGhlYWRpbmcudGFiSW5kZXggPSAwO1xuXHRcdFx0aGVhZGluZy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93biA9IGUgPT4ge1xuXHRcdFx0XHRjb25zdCBrZXkgPSBlLmtleUNvZGU7XG5cdFx0XHRcdGxldCBmb2xkO1xuXHRcdFx0XHRcblx0XHRcdFx0c3dpdGNoKGtleSl7XG5cblx0XHRcdFx0XHQvLyBTcGFjZWJhcjogVG9nZ2xlXG5cdFx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gRmFsbC10aHJvdWdoXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gRW50ZXI6IFRvZ2dsZVxuXHRcdFx0XHRcdGNhc2UgMTM6XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuXHRcdFx0XHRcdFx0aWYoXCJBXCIgPT09IGUudGFyZ2V0LnRhZ05hbWUpXG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIEVzY2FwZTogQ2xlYXIgZm9jdXNcblx0XHRcdFx0XHRjYXNlIDI3OlxuXHRcdFx0XHRcdFx0ZS50YXJnZXQuYmx1cigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gVXAgYXJyb3c6IFByZXZpb3VzIHNlY3Rpb25cblx0XHRcdFx0XHRjYXNlIDM4Ontcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gSXMgdGhlcmUgYSBwcmV2aW91cyBzaWJsaW5nIHRvIG5hdmlnYXRlIHVwIHRvP1xuXHRcdFx0XHRcdFx0aWYoZm9sZCA9IHRoaXMucHJldmlvdXNGb2xkKXtcblx0XHRcdFx0XHRcdFx0bGV0IGNoaWxkcmVuID0gZm9sZC5jaGlsZEFjY29yZGlvbnM7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyBJcyBpdCBvcGVuLCBhbmQgZG9lcyBpdCBoYXZlIG5lc3RlZCBhY2NvcmRpb25zP1xuXHRcdFx0XHRcdFx0XHRpZihmb2xkLm9wZW4gJiYgY2hpbGRyZW4pe1xuXHRcdFx0XHRcdFx0XHRcdGxldCBsYXN0QWNjO1xuXHRcdFx0XHRcdFx0XHRcdGxldCBsYXN0Rm9sZDtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHQvLyBMb2NhdGUgdGhlIGRlZXBlc3QvbmVhcmVzdCBhY2NvcmRpb24gdGhhdCdzIGN1cnJlbnRseSBleHBvc2VkXG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUoY2hpbGRyZW4pe1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFzdEFjYyAgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXTtcblx0XHRcdFx0XHRcdFx0XHRcdGxhc3RGb2xkID0gbGFzdEFjYy5mb2xkc1tsYXN0QWNjLmZvbGRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIWxhc3RGb2xkLm9wZW4pIGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSBsYXN0Rm9sZC5jaGlsZEFjY29yZGlvbnM7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdGxhc3RGb2xkLmhlYWRpbmcuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8gTm9wZVxuXHRcdFx0XHRcdFx0XHRlbHNlIGZvbGQuaGVhZGluZy5mb2N1cygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBJcyB0aGVyZSBhIGhpZ2hlciBsZXZlbCB3ZSBjYW4ganVtcCBiYWNrIHVwIHRvP1xuXHRcdFx0XHRcdFx0ZWxzZSBpZih0aGlzLmFjY29yZGlvbi5wYXJlbnQpXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWNjb3JkaW9uLnBhcmVudEZvbGQuaGVhZGluZy5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBUaGVyZSdzIG5vdGhpbmcgdG8gbW92ZSBiYWNrIHRvLCBzbyBqdXN0IGxldCB0aGUgYnJvd3NlciBydW4gaXRzIHVzdWFsIGJlaGF2aW91clxuXHRcdFx0XHRcdFx0ZWxzZSByZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBEb3duIGFycm93OiBOZXh0IHNlY3Rpb25cblx0XHRcdFx0XHRjYXNlIDQwOntcblx0XHRcdFx0XHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZEFjY29yZGlvbnM7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIElzIHRoZXJlIGEgbmVzdGVkIGFjY29yZGlvbiB0byBqdW1wIGludG8/XG5cdFx0XHRcdFx0XHRpZih0aGlzLm9wZW4gJiYgY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuWzBdLmZvbGRzWzBdLmhlYWRpbmcuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gTm8sIHRoZXJlIGlzbid0LiBJcyB0aGVyZSBhbm90aGVyIHNpYmxpbmcgdG8gbW92ZSBkb3duIHRvP1xuXHRcdFx0XHRcdFx0ZWxzZSBpZihmb2xkID0gdGhpcy5uZXh0Rm9sZClcblx0XHRcdFx0XHRcdFx0Zm9sZC5oZWFkaW5nLmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIElzIHRoZXJlIGEgY29udGFpbmluZyBhY2NvcmRpb24gd2UgY2FuIG5hdmlnYXRlIGJhY2sgdXAgdG8/XG5cdFx0XHRcdFx0XHRlbHNlIGlmKHRoaXMuYWNjb3JkaW9uLnBhcmVudCl7XG5cdFx0XHRcdFx0XHRcdGxldCBwYXJlbnQgPSB0aGlzO1xuXHRcdFx0XHRcdFx0XHR3aGlsZShwYXJlbnQgPSBwYXJlbnQuYWNjb3JkaW9uLnBhcmVudEZvbGQpXG5cdFx0XHRcdFx0XHRcdFx0aWYoZm9sZCA9IHBhcmVudC5uZXh0Rm9sZCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb2xkLmhlYWRpbmcuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIE5vd2hlcmUgbGVmdCB0byBnby4uLlxuXHRcdFx0XHRcdFx0XHRpZighcGFyZW50KSByZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gTmFoLiBKdXN0IHNjcm9sbCB0aGUgd2luZG93IG5vcm1hbGx5LCBhcyBwZXIgYnJvd3NlciBkZWZhdWx0XG5cdFx0XHRcdFx0XHRlbHNlIHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIExlZnQgYXJyb3dcblx0XHRcdFx0XHRjYXNlIDM3Ontcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gQ2xvc2UgYW4gb3BlbmVkIHNlY3Rpb25cblx0XHRcdFx0XHRcdGlmKHRoaXMub3BlbikgdGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIFN3aXRjaCBmb2N1cyBiYWNrIHRvIHBhcmVudFxuXHRcdFx0XHRcdFx0ZWxzZSBpZih0aGlzLmFjY29yZGlvbi5wYXJlbnQpXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWNjb3JkaW9uLnBhcmVudEZvbGQuaGVhZGluZy5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gUmlnaHQgYXJyb3dcblx0XHRcdFx0XHRjYXNlIDM5Ontcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gT3BlbiBhIGNsb3NlZCBzZWN0aW9uXG5cdFx0XHRcdFx0XHRpZighdGhpcy5vcGVuKSB0aGlzLm9wZW4gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBTd2l0Y2ggZm9jdXMgdG8gYSBuZXN0ZWQgYWNjb3JkaW9uXG5cdFx0XHRcdFx0XHRlbHNlIGlmKHRoaXMuY2hpbGRBY2NvcmRpb25zKVxuXHRcdFx0XHRcdFx0XHR0aGlzLmNoaWxkQWNjb3JkaW9uc1swXS5mb2xkc1swXS5oZWFkaW5nLmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdC8vIExpc3RlbmVyIHRvIHJlY29yZCB0aGUgdmlld3BvcnQncyBzY3JvbGwgb2Zmc2V0cyBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgdG91Y2hcblx0XHRsZXQgc2Nyb2xsWCwgc2Nyb2xsWTtcblx0XHR0b3VjaEVuYWJsZWQgJiYgaGVhZGluZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCA9ICgpID0+IHtcblx0XHRcdHNjcm9sbFggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG5cdFx0XHRzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdH0sIHtwYXNzaXZlOiB0cnVlfSk7XG5cdFx0XG5cdFx0XG5cdFx0aGVhZGluZy5hZGRFdmVudExpc3RlbmVyKHByZXNzRXZlbnQsIHRoaXMub25QcmVzcyA9IGUgPT4ge1xuXHRcdFx0XG5cdFx0XHQvLyBQcmVzc2VkIG9uIHNvbWV0aGluZyBpbnNpZGUgdGhlIGhlYWRlclxuXHRcdFx0aWYoZS50YXJnZXQgIT09IGhlYWRpbmcgJiYgaGVhZGluZy5jb250YWlucyhlLnRhcmdldCkpe1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gQ2FuY2VsIGZvbGQtdG9nZ2xlIGlmIHVzZXIgY2xpY2tlZCBvbiBhbiBhbmNob3ItbGlua1xuXHRcdFx0XHRpZihcIkFcIiA9PT0gZS50YXJnZXQudGFnTmFtZSAmJiBlLnRhcmdldC5ocmVmKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihlLnR5cGUgIT09IFwidG91Y2hlbmRcIiB8fCAoZS5jYW5jZWxhYmxlICYmIHdpbmRvdy5wYWdlWE9mZnNldCA9PT0gc2Nyb2xsWCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPT09IHNjcm9sbFkpKXtcblx0XHRcdFx0dGhpcy5vcGVuID0gIXRoaXMub3Blbjtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBBZGp1c3QgYSBmb2xkJ3MgY29udGFpbmVyIHRvIGZpdCBpdHMgY29udGVudC5cblx0ICovXG5cdGZpdCgpe1xuXHRcdGxldCBoZWlnaHQgPSB0aGlzLmhlYWRpbmdIZWlnaHQ7XG5cdFx0aWYodGhpcy5vcGVuKSAgICAgICAgaGVpZ2h0ICs9IHRoaXMuY29udGVudC5zY3JvbGxIZWlnaHQ7XG5cdFx0aWYodGhpcy51c2VCb3JkZXJzKSAgaGVpZ2h0ICs9IHRoaXMuZWxCb3JkZXI7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdH1cblx0XG5cdFxuXHRcblx0LyoqXG5cdCAqIEFkZCBvciByZW1vdmUgcmVsZXZhbnQgQVJJQSBhdHRyaWJ1dGVzIGZyb20gdGhlIGZvbGQncyBlbGVtZW50cy5cblx0ICpcblx0ICogQHByb3BlcnR5XG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IGFyaWFFbmFibGVkKCl7IHJldHVybiB0aGlzLl9hcmlhRW5hYmxlZDsgfVxuXHRzZXQgYXJpYUVuYWJsZWQoaW5wdXQpe1xuXHRcdGlmKChpbnB1dCA9ICEhaW5wdXQpICE9PSAhIXRoaXMuX2FyaWFFbmFibGVkKXtcblx0XHRcdGNvbnN0IGhlYWRpbmcgPSB0aGlzLmhlYWRpbmc7XG5cdFx0XHRjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuXHRcdFx0dGhpcy5fYXJpYUVuYWJsZWQgPSBpbnB1dDtcblx0XHRcdFxuXHRcdFx0Ly8gRW5hYmxlIEFSSUEtYXR0cmlidXRlIG1hbmFnZW1lbnRcblx0XHRcdGlmKGlucHV0KXtcblx0XHRcdFx0aGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwidGFiXCIpO1xuXHRcdFx0XHRjb250ZW50LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0YWJwYW5lbFwiKTtcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBFbnN1cmUgdGhlIGZvbGQncyBlbGVtZW50cyBoYXZlIHVuaXF1ZSBJRCBhdHRyaWJ1dGVzLlxuXHRcdFx0XHRjb25zdCBoZWFkaW5nU3VmZml4ID0gXCItaGVhZGluZ1wiO1xuXHRcdFx0XHRjb25zdCBjb250ZW50U3VmZml4ID0gXCItY29udGVudFwiO1xuXHRcdFx0XHRsZXQgZWxJRCAgICAgICAgICAgID0gdGhpcy5lbC5pZDtcblx0XHRcdFx0bGV0IGlkO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gTmVpdGhlciBvZiB0aGUgZm9sZCdzIGVsZW1lbnRzIGhhdmUgYW4gSUQgYXR0cmlidXRlXG5cdFx0XHRcdGlmKCFoZWFkaW5nLmlkICYmICFjb250ZW50LmlkKXtcblx0XHRcdFx0XHRpZCAgICAgICAgICAgICA9IGVsSUQgfHwgdW5pcXVlSUQoXCJhXCIpO1xuXHRcdFx0XHRcdGhlYWRpbmcuaWQgICAgID0gaWQgKyBoZWFkaW5nU3VmZml4O1xuXHRcdFx0XHRcdGNvbnRlbnQuaWQgICAgID0gaWQgKyBjb250ZW50U3VmZml4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBFaXRoZXIgdGhlIGhlYWRpbmcgb3IgZWxlbWVudCBsYWNrIGFuIElEXG5cdFx0XHRcdGVsc2UgaWYoIWNvbnRlbnQuaWQpIGNvbnRlbnQuaWQgICA9IChlbElEIHx8IGhlYWRpbmcuaWQpICsgY29udGVudFN1ZmZpeDtcblx0XHRcdFx0ZWxzZSBpZighaGVhZGluZy5pZCkgaGVhZGluZy5pZCAgID0gKGVsSUQgfHwgY29udGVudC5pZCkgKyBoZWFkaW5nU3VmZml4O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gRmluYWxseSwgZG91YmxlLWNoZWNrIGVhY2ggZWxlbWVudCdzIElEIGlzIHJlYWxseSB1bmlxdWVcblx0XHRcdFx0Y29uc3QgJCA9IHMgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNcIitzKTtcblx0XHRcdFx0d2hpbGUoJChjb250ZW50LmlkKS5sZW5ndGggPiAxIHx8ICQoaGVhZGluZy5pZCkubGVuZ3RoID4gMSl7XG5cdFx0XHRcdFx0aWQgICAgICAgICA9IHVuaXF1ZUlEKFwiYVwiKTtcblx0XHRcdFx0XHRjb250ZW50LmlkID0gaWQgKyBjb250ZW50U3VmZml4O1xuXHRcdFx0XHRcdGhlYWRpbmcuaWQgPSBpZCArIGhlYWRpbmdTdWZmaXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC8vIFVwZGF0ZSBBUklBIGF0dHJpYnV0ZXNcblx0XHRcdFx0aGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsICAgIGNvbnRlbnQuaWQpO1xuXHRcdFx0XHRjb250ZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLCAgaGVhZGluZy5pZCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0Ly8gVXBkYXRlIHRoZSBhdHRyaWJ1dGVzIHRoYXQncmUgY29udHJvbGxlZCBieSAub3BlbidzIHNldHRlclxuXHRcdFx0XHRoZWFkaW5nLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgICEhdGhpcy5fb3Blbik7XG5cdFx0XHRcdGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCAgISF0aGlzLl9vcGVuKTtcblx0XHRcdFx0Y29udGVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCAgICAgIXRoaXMuX29wZW4pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBEaXNhYmxpbmc7IHJlbW92ZSBhbGwgcmVsZXZhbnQgYXR0cmlidXRlc1xuXHRcdFx0ZWxzZXtcblx0XHRcdFx0aGVhZGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJyb2xlXCIpO1xuXHRcdFx0XHRoZWFkaW5nLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7XG5cdFx0XHRcdGhlYWRpbmcucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiKTtcblx0XHRcdFx0aGVhZGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJyb2xlXCIpO1xuXHRcdFx0XHRjb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKTtcblx0XHRcdFx0Y29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdFxuXHRcblx0LyoqXG5cdCAqIFdoZXRoZXIgb3Igbm90IHRoZSBmb2xkJ3MgY3VycmVudGx5IG9wZW5lZC5cblx0ICpcblx0ICogQHByb3BlcnR5XG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IG9wZW4oKXtcblx0XHRcblx0XHQvLyBEZXJpdmUgdGhlIGZvbGQncyBvcGVuZWQgc3RhdGUgZnJvbSB0aGUgRE9NIGlmIGl0J3Mgbm90IGJlZW4gZGV0ZXJtaW5lZCB5ZXRcblx0XHRpZih1bmRlZmluZWQgPT09IHRoaXMuX29wZW4pe1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMuZWwuY2xhc3NMaXN0O1xuXHRcdFx0dGhpcy5fb3BlbiAgICA9IGNsYXNzZXMuY29udGFpbnModGhpcy5vcGVuQ2xhc3MpO1xuXHRcdFx0c2V0VG9rZW4oY2xhc3NlcywgdGhpcy5jbG9zZUNsYXNzLCAhdGhpcy5fb3Blbik7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLl9vcGVuO1xuXHR9XG5cdFxuXHRzZXQgb3BlbihpbnB1dCl7XG5cdFx0aWYoKGlucHV0ID0gISFpbnB1dCkgIT09IHRoaXMuX29wZW4pe1xuXHRcdFx0XG5cdFx0XHQvLyBJZiBhbiBvblRvZ2dsZSBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCBydW4gaXQuIEF2b2lkIGRvaW5nIGFueXRoaW5nIGlmIGl0IHJldHVybnMgZmFsc2UuXG5cdFx0XHRpZihcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0aGlzLm9uVG9nZ2xlICYmIGZhbHNlID09PSB0aGlzLm9uVG9nZ2xlLmNhbGwobnVsbCwgdGhpcywgaW5wdXQpKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcblx0XHRcdHNldFRva2VuKHRoaXMuZWwuY2xhc3NMaXN0LCB0aGlzLm9wZW5DbGFzcywgICBpbnB1dCk7XG5cdFx0XHRzZXRUb2tlbih0aGlzLmVsLmNsYXNzTGlzdCwgdGhpcy5jbG9zZUNsYXNzLCAhaW5wdXQpO1xuXHRcdFx0dGhpcy5fb3BlbiA9IGlucHV0O1xuXHRcdFx0XG5cdFx0XHQvLyBVcGRhdGUgQVJJQSBhdHRyaWJ1dGVzXG5cdFx0XHRpZih0aGlzLmFyaWFFbmFibGVkKXtcblx0XHRcdFx0Y29uc3QgaGVhZGluZyA9IHRoaXMuaGVhZGluZztcblx0XHRcdFx0aGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsICAgICAgaW5wdXQpO1xuXHRcdFx0XHRoZWFkaW5nLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgICAgICBpbnB1dCk7XG5cdFx0XHRcdHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCAgIWlucHV0KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gSWYgdGhpcyBmb2xkIHdhcyBjbG9zZWQgd2hlbiB0aGUgc2NyZWVuIHJlc2l6ZWQsIHJ1biBhIGZ1bGwgdXBkYXRlIGluIGNhc2UgaXRzIGNvbnRlbnRzIHdlcmUganVnZ2xlZCBhcm91bmRcblx0XHRcdGlmKHRoaXMubmVlZHNSZWZyZXNoKXtcblx0XHRcdFx0ZGVsZXRlIHRoaXMubmVlZHNSZWZyZXNoO1xuXHRcdFx0XHR0aGlzLmFjY29yZGlvbi5yZWZyZXNoKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHRoaXMuYWNjb3JkaW9uLnVwZGF0ZSgpO1xuXHRcdFx0XG5cdFx0XHQvLyBDbG9zZSBvdGhlciBmb2xkcyBpZiBhY2NvcmRpb24gaXMgbW9kYWxcblx0XHRcdGlmKHRoaXMuYWNjb3JkaW9uLm1vZGFsICYmIGlucHV0KXtcblx0XHRcdFx0Zm9yKGNvbnN0IGZvbGQgb2YgdGhpcy5hY2NvcmRpb24uZm9sZHMpXG5cdFx0XHRcdFx0aWYodGhpcyAhPT0gZm9sZCkgZm9sZC5vcGVuID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBmb2xkJ3MgYmVlbiBkZWFjdGl2YXRlZC5cblx0ICpcblx0ICogTm90IHNldCBkaXJlY3RseTsgY2hhbmdlZCB3aGVuIHNldHRpbmcgYW4gYWNjb3JkaW9uJ3MgLmRpc2FibGVkIHByb3BlcnR5LlxuXHQgKlxuXHQgKiBAcHJvcGVydHlcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgZGlzYWJsZWQoKXsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG5cdHNldCBkaXNhYmxlZChpbnB1dCl7XG5cdFx0aWYoKGlucHV0ID0gISFpbnB1dCkgIT09ICEhdGhpcy5fZGlzYWJsZWQpe1xuXHRcdFx0bGV0IGhlYWRpbmcgPSB0aGlzLmhlYWRpbmc7XG5cdFx0XHRsZXQgc3R5bGUgICA9IHRoaXMuZWwuc3R5bGU7XG5cdFx0XHRsZXQgY2xhc3NlcyA9IHRoaXMuZWwuY2xhc3NMaXN0O1xuXHRcdFx0XG5cdFx0XHQvLyBEZWFjdGl2YXRlZFxuXHRcdFx0aWYodGhpcy5fZGlzYWJsZWQgPSBpbnB1dCl7XG5cdFx0XHRcdHN0eWxlLmhlaWdodCA9IG51bGw7XG5cdFx0XHRcdHRoaXMudXNlVHJhbnNmb3Jtc1xuXHRcdFx0XHRcdD8gKHN0eWxlW2Nzc1RyYW5zZm9ybV0gPSBudWxsKVxuXHRcdFx0XHRcdDogKHN0eWxlLnRvcCA9IG51bGwpO1xuXHRcdFx0XHRcblx0XHRcdFx0dG91Y2hFbmFibGVkICYmIGhlYWRpbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQpO1xuXHRcdFx0XHRoZWFkaW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIocHJlc3NFdmVudCwgdGhpcy5vblByZXNzKTtcblx0XHRcdFx0Y2xhc3Nlcy5yZW1vdmUodGhpcy5vcGVuQ2xhc3MsIHRoaXMuY2xvc2VDbGFzcyk7XG5cdFx0XHRcdGlmKHRoaXMub25LZXlEb3duKXtcblx0XHRcdFx0XHRoZWFkaW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcblx0XHRcdFx0XHRoZWFkaW5nLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZih0aGlzLmFyaWFFbmFibGVkKXtcblx0XHRcdFx0XHR0aGlzLmFyaWFFbmFibGVkICA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuX2FyaWFFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBSZWFjdGl2YXRlZFxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0c3R5bGUuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0XHR0aGlzLnVzZVRyYW5zZm9ybXNcblx0XHRcdFx0XHQ/IHN0eWxlW2Nzc1RyYW5zZm9ybV0gPVxuXHRcdFx0XHRcdFx0Y3NzM0RTdXBwb3J0ZWRcblx0XHRcdFx0XHRcdFx0PyAoXCJ0cmFuc2xhdGUzRCgwLFwiICsgdGhpcy5feSArIFwicHgsMClcIilcblx0XHRcdFx0XHRcdFx0OiAoXCJ0cmFuc2xhdGVZKFwiICAgICsgdGhpcy5feSArIFwicHgpXCIpXG5cdFx0XHRcdFx0OiAoc3R5bGUudG9wID0gdGhpcy5feSArIFwicHhcIik7XG5cdFx0XHRcdFxuXHRcdFx0XHR0b3VjaEVuYWJsZWQgJiYgaGVhZGluZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCk7XG5cdFx0XHRcdGhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcihwcmVzc0V2ZW50LCB0aGlzLm9uUHJlc3MpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYodGhpcy5vbktleURvd24pe1xuXHRcdFx0XHRcdGhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xuXHRcdFx0XHRcdGhlYWRpbmcudGFiSW5kZXggPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIFZlcnRpY2FsIHBvc2l0aW9uIG9mIHRoZSBmb2xkIHdpdGhpbiBhbiBhY2NvcmRpb24ncyBjb250YWluZXIuXG5cdCAqXG5cdCAqIEBwcm9wZXJ0eVxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKi9cblx0Z2V0IHkoKXtcblx0XHRpZih1bmRlZmluZWQgPT09IHRoaXMuX3kpXG5cdFx0XHRyZXR1cm4gKHRoaXMuX3kgPSBwYXJzZUludCh0aGlzLmVsLnN0eWxlLnRvcCkgfHwgMCk7XG5cdFx0cmV0dXJuIHRoaXMuX3k7XG5cdH1cblx0XG5cdHNldCB5KGlucHV0KXtcblx0XHRpZigoaW5wdXQgPSAraW5wdXQpICE9PSB0aGlzLl95KXtcblx0XHRcdHRoaXMuX3kgICAgID0gaW5wdXQ7XG5cdFx0XHRjb25zdCBzdHlsZSA9IHRoaXMuZWwuc3R5bGU7XG5cdFx0XHR0aGlzLnVzZVRyYW5zZm9ybXNcblx0XHRcdFx0PyBzdHlsZVtjc3NUcmFuc2Zvcm1dID1cblx0XHRcdFx0XHRjc3MzRFN1cHBvcnRlZFxuXHRcdFx0XHRcdFx0PyAoXCJ0cmFuc2xhdGUzRCgwLFwiICsgaW5wdXQgKyBcInB4LDApXCIpXG5cdFx0XHRcdFx0XHQ6IChcInRyYW5zbGF0ZVkoXCIgICAgKyBpbnB1dCArIFwicHgpXCIpXG5cdFx0XHRcdDogKHN0eWxlLnRvcCA9IGlucHV0ICsgXCJweFwiKTtcblx0XHR9XG5cdH1cblx0XG5cdFxuXHRcblx0LyoqXG5cdCAqIEhlaWdodCBvZiB0aGUgZm9sZCdzIG91dGVybW9zdCBjb250YWluZXIuXG5cdCAqXG5cdCAqIEBwcm9wZXJ0eVxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKi9cblx0Z2V0IGhlaWdodCgpe1xuXHRcdGlmKHVuZGVmaW5lZCA9PT0gdGhpcy5faGVpZ2h0KXtcblx0XHRcdGxldCBoZWlnaHQgICAgICAgICAgID0gdGhpcy5oZWFkaW5nSGVpZ2h0ICsgdGhpcy5jb250ZW50LnNjcm9sbEhlaWdodDtcblx0XHRcdHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0cmV0dXJuICh0aGlzLl9oZWlnaHQgPSBoZWlnaHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5faGVpZ2h0O1xuXHR9XG5cdFxuXHRzZXQgaGVpZ2h0KGlucHV0KXtcblx0XHRpZihpbnB1dCAmJiAoaW5wdXQgPSAraW5wdXQpICE9PSB0aGlzLl9oZWlnaHQpe1xuXHRcdFx0dGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBpbnB1dCArIFwicHhcIjtcblx0XHRcdHRoaXMuX2hlaWdodCAgICAgICAgID0gaW5wdXQ7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBDdXJyZW50IGhlaWdodCBvZiB0aGUgZm9sZCdzIGhlYWRpbmcuXG5cdCAqXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEByZWFkb25seVxuXHQgKi9cblx0Z2V0IGhlYWRpbmdIZWlnaHQoKXtcblx0XHRyZXR1cm4gdGhpcy5oZWFkaW5nLnNjcm9sbEhlaWdodFxuXHRcdFx0KyB0aGlzLmhlaWdodE9mZnNldFxuXHRcdFx0KyAodGhpcy51c2VCb3JkZXJzID8gdGhpcy5oZWFkaW5nQm9yZGVyIDogMCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBUb3RhbCBoZWlnaHQgY29uc3VtZWQgYnkgdGhlIGhlYWRpbmcgZWxlbWVudCdzIENTUyBib3JkZXJzLCBpZiBhbnkuXG5cdCAqXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEByZWFkb25seVxuXHQgKi9cblx0Z2V0IGhlYWRpbmdCb3JkZXIoKXtcblx0XHRsZXQgaGVhZGluZyA9IHRoaXMuaGVhZGluZztcblx0XHRyZXR1cm4gKGhlYWRpbmcub2Zmc2V0SGVpZ2h0IHx8IDApIC0gKGhlYWRpbmcuY2xpZW50SGVpZ2h0IHx8IDApO1xuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIFRvdGFsIGhlaWdodCBvZiB0aGUgZm9sZCdzIGNvbnRhaW5lciBlbGVtZW50LlxuXHQgKlxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAcmVhZG9ubHlcblx0ICovXG5cdGdldCBlbEhlaWdodCgpe1xuXHRcdHJldHVybiB0aGlzLmVsLnNjcm9sbEhlaWdodCArICh0aGlzLnVzZUJvcmRlcnMgPyB0aGlzLmVsQm9yZGVyIDogMCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBUb3RhbCBoZWlnaHQgY29uc3VtZWQgYnkgY29udGFpbmVyIGVsZW1lbnQncyBDU1MgYm9yZGVycywgaWYgYW55LlxuXHQgKiBcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQHJlYWRvbmx5XG5cdCAqL1xuXHRnZXQgZWxCb3JkZXIoKXtcblx0XHRsZXQgZWwgPSB0aGlzLmVsO1xuXHRcdHJldHVybiAoZWwub2Zmc2V0SGVpZ2h0IHx8IDApIC0gKGVsLmNsaWVudEhlaWdodCB8fCAwKTtcblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBmb2xkJ3MgY29udGFpbmVyIGhhcyBiZWVuIHJlc2l6ZWQgaW5jb3JyZWN0bHkuXG5cdCAqXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3BlcnR5XG5cdCAqL1xuXHRnZXQgd3JvbmdTaXplKCl7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGluZ0hlaWdodCArIHRoaXMuY29udGVudC5zY3JvbGxIZWlnaHQgIT09IHRoaXMuZWwuc2Nyb2xsSGVpZ2h0O1xuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHRvdWNoRW5hYmxlZCA9IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHByZXNzRXZlbnQgICA9IHRvdWNoRW5hYmxlZCA/IFwidG91Y2hlbmRcIiA6IFwiY2xpY2tcIjtcblxuXG4vKipcbiAqIE5hbWUgb2YgdGhlIG9uVHJhbnNpdGlvbkVuZCBldmVudCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLlxuICogQGNvbnN0IHtTdHJpbmd9IHRyYW5zaXRpb25FbmRcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb25FbmQgPSAoZnVuY3Rpb24oKXtcblx0Y29uc3QgbmFtZXMgPSBcInRyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZFwiLnNwbGl0KFwiIFwiKTtcblx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSlcblx0XHRpZihcIm9uXCIgKyBuYW1lc1tpXS50b0xvd2VyQ2FzZSgpIGluIHdpbmRvdylcblx0XHRcdHJldHVybiBuYW1lc1tpXTtcblx0cmV0dXJuIG5hbWVzWzBdO1xufSgpKTtcblxuXG5cbi8qKlxuICogQ29uZGl0aW9uYWxseSBhZGQgb3IgcmVtb3ZlIGEgdG9rZW4gZnJvbSBhIHRva2VuLWxpc3QuXG4gKlxuICogQHBhcmFtIHtET01Ub2tlbkxpc3R9IGxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0b2tlblxuICogQHBhcmFtIHtCb29sZWFufSBlbmFibGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbihsaXN0LCB0b2tlbiwgZW5hYmxlZCl7XG5cdGVuYWJsZWQgPyBsaXN0LmFkZCh0b2tlbikgOiBsaXN0LnJlbW92ZSh0b2tlbik7XG59XG5cblxuXG4vKipcbiAqIFN0b3AgYSBmdW5jdGlvbiBmcm9tIGZpcmluZyB0b28gcXVpY2tseS5cbiAqXG4gKiBSZXR1cm5zIGEgY29weSBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gdGhhdCBydW5zIG9ubHkgYWZ0ZXIgdGhlIGRlc2lnbmF0ZWRcbiAqIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkLiBVc2VmdWwgZm9yIHRocm90dGxpbmcgb25SZXNpemUgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBGdW5jdGlvbiB0byBkZWJvdW5jZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtsaW1pdD0wXSAtIFRocmVzaG9sZCB0byBzdGFsbCBleGVjdXRpb24gYnksIGluIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FzYXA9ZmFsc2VdIC0gQ2FsbCBmdW5jdGlvbiAqYmVmb3JlKiB0aHJlc2hvbGQgZWxhcHNlcywgbm90IGFmdGVyLlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbiwgbGltaXQgPSAwLCBhc2FwID0gZmFsc2Upe1xuXHRsZXQgc3RhcnRlZCwgY29udGV4dCwgYXJncywgdGltaW5nO1xuXHRcblx0Y29uc3QgZGVsYXllZCA9IGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgdGltZVNpbmNlID0gRGF0ZS5ub3coKSAtIHN0YXJ0ZWQ7XG5cdFx0aWYodGltZVNpbmNlID49IGxpbWl0KXtcblx0XHRcdGlmKCFhc2FwKSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdGlmKHRpbWluZykgY2xlYXJUaW1lb3V0KHRpbWluZyk7XG5cdFx0XHR0aW1pbmcgPSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG5cdFx0fVxuXHRcdGVsc2UgdGltaW5nID0gc2V0VGltZW91dChkZWxheWVkLCBsaW1pdCAtIHRpbWVTaW5jZSk7XG5cdH07XG5cdFxuXHQvLyBEZWJvdW5jZWQgY29weSBvZiBvcmlnaW5hbCBmdW5jdGlvblxuXHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRjb250ZXh0ID0gdGhpcyxcblx0XHRhcmdzICAgID0gYXJndW1lbnRzO1xuXHRcdGlmKCFsaW1pdClcblx0XHRcdHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRzdGFydGVkID0gRGF0ZS5ub3coKTtcblx0XHRpZighdGltaW5nKXtcblx0XHRcdGlmKGFzYXApIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0dGltaW5nID0gc2V0VGltZW91dChkZWxheWVkLCBsaW1pdCk7XG5cdFx0fVxuXHR9O1xufVxuXG5cblxuZXhwb3J0IGNvbnN0IHVuaXF1ZUlEID0gKGZ1bmN0aW9uKCl7XG5cdGNvbnN0IElEcyAgICAgPSB7fTtcblx0Y29uc3QgaW5kZXhlcyA9IHt9O1xuXHRcblx0XG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgYSBET00gZWxlbWVudC5cblx0ICpcblx0ICogQnkgZGVmYXVsdCwgbWluaW1hbGlzdCBJRHMgbGlrZSBcIl8xXCIgb3IgXCJfMlwiIGFyZSBnZW5lcmF0ZWQgdXNpbmcgaW50ZXJuYWxseVxuXHQgKiB0cmFja2VkIGluY3JlbWVudGF0aW9uLiBVZ2xpZXIsIG1vcmUgY29sbGlzaW9uLXByb29mIElEcyBjYW4gYmUgZ2VuZXJhdGVkIGJ5XG5cdCAqIHBhc3NpbmcgYSB0cnV0aHkgdmFsdWUgdG8gdGhlIGZ1bmN0aW9uJ3MgZmlyc3QgYXJndW1lbnQuXG5cdCAqXG5cdCAqIElycmVzcGVjdGl2ZSBvZiB3aGV0aGVyIHZhbHVlcyBhcmUgYmVpbmcgZ2VuZXJhdGVkIHNpbXBseSBvciByYW5kb21seSwgdGhlXG5cdCAqIGRvY3VtZW50IHRyZWUgaXMgYWx3YXlzIGNvbnN1bHRlZCBmaXJzdCB0byBlbnN1cmUgYSBkdXBsaWNhdGUgSUQgaXMgbmV2ZXJcblx0ICogcmV0dXJuZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSAgcHJlZml4IC0gUHJlZml4IHByZXBlbmRlZCB0byByZXN1bHQuIERlZmF1bHQ6IFwiX1wiXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gcmFuZG9tIC0gR2VuZXJhdGUgY29sbGlzaW9uLXByb29mIElEcyB1c2luZyByYW5kb20gc3ltYm9sc1xuXHQgKiBAcGFyYW0ge051bWJlcn0gIGxlbmd0aCAtIExlbmd0aCBvZiByYW5kb20gcGFzc3dvcmRzLiBEZWZhdWx0OiA2XG5cdCAqIEByZXR1cm4ge1N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIHVuaXF1ZUlEKHByZWZpeCwgY29tcGxleCwgbGVuZ3RoKXtcblx0XHRsZW5ndGggICAgID0gKyhsZW5ndGggfHwgNik7XG5cdFx0bGV0IHJlc3VsdCA9ICAocHJlZml4ID0gcHJlZml4IHx8IFwiX1wiKTtcblx0XHRcblx0XHQvLyBTaW1wbGUgSURzXG5cdFx0aWYoIWNvbXBsZXgpe1xuXHRcdFx0XG5cdFx0XHQvLyBTZXQgdGhpcyBwcmVmaXgncyBzdGFydGluZyBpbmRleCBpZiBpdCdzIG5vdCBiZWVuIHVzZWQgeWV0XG5cdFx0XHRpZighaW5kZXhlc1twcmVmaXhdKVxuXHRcdFx0XHRpbmRleGVzW3ByZWZpeF0gPSAwO1xuXHRcdFx0XG5cdFx0XHRyZXN1bHQgKz0gKytpbmRleGVzW3ByZWZpeF07XG5cdFx0fVxuXHRcdFxuXHRcdC8vIFVnbGllciwgbW9yZSBjb2xsaXNpb24tcHJvb2YgSURzXG5cdFx0ZWxzZXtcblx0XHRcdGNvbnN0IGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRcdFx0cmVzdWx0ICs9IGNoYXJzWyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MSkgXTtcblx0XHRcdHdoaWxlKHJlc3VsdC5sZW5ndGggPCBsZW5ndGgpXG5cdFx0XHRcdHJlc3VsdCArPSBjaGFyc1sgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNjEpXTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIElEc1tyZXN1bHRdIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlc3VsdClcblx0XHRcdD8gdW5pcXVlSUQocHJlZml4LCBjb21wbGV4KVxuXHRcdFx0OiAoSURzW3Jlc3VsdF0gPSB0cnVlLCByZXN1bHQpO1xuXHR9XG5cdFxuXHRcblx0cmV0dXJuIHVuaXF1ZUlEO1xufSgpKTtcblxuXG5cbi8vIE5hbWUgb2YgdGhlIENTU09NIHByb3BlcnR5IHVzZWQgYnkgdGhpcyBicm93c2VyIGZvciBDU1MgdHJhbnNmb3Jtc1xuZXhwb3J0IGNvbnN0IGNzc1RyYW5zZm9ybSA9IChmdW5jdGlvbihuKXtcblx0cyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblx0aWYoKHByb3AgPSBuLnRvTG93ZXJDYXNlKCkpIGluIHMpIHJldHVybiBwcm9wO1xuXHRmb3IodmFyIHByb3AsIHMsIHAgPSBcIldlYmtpdCBNb3ogTXMgTyBLaHRtbFwiLCBwID0gKHAudG9Mb3dlckNhc2UoKSArIHApLnNwbGl0KFwiIFwiKSwgaSA9IDA7IGkgPCAxMDsgKytpKVxuXHRcdGlmKChwcm9wID0gcFtpXStuKSBpbiBzKSByZXR1cm4gcHJvcDtcblx0cmV0dXJuIFwiXCI7XG59KFwiVHJhbnNmb3JtXCIpKTtcblxuXG4vLyBXaGV0aGVyIDNEIHRyYW5zZm9ybXMgYXJlIHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXJcbmV4cG9ydCBjb25zdCBjc3MzRFN1cHBvcnRlZCA9IChmdW5jdGlvbihwcm9wTmFtZSl7XG5cdGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBzID0gZS5zdHlsZTtcblx0Y29uc3QgdiA9IFtbXCJ0cmFuc2xhdGVZKFwiLCBcIilcIl0sIFtcInRyYW5zbGF0ZTNkKDAsXCIsIFwiLDApXCJdXTtcblx0dHJ5eyBzW3Byb3BOYW1lXSA9IHZbMV0uam9pbihcIjFweFwiKTsgfSBjYXRjaChlKXt9XG5cdHJldHVybiB2WyshIXNbcHJvcE5hbWVdXSA9PT0gdlsxXTtcbn0oY3NzVHJhbnNmb3JtKSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKiBDb3JlIHN0eWxpbmcgKi9cXG4uYWNjb3JkaW9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uYWNjb3JkaW9uID4gKiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmFjY29yZGlvbiA+ICosXFxuLmFjY29yZGlvbi5lZGdlLXZpc2libGUsXFxuLmFjY29yZGlvbiAuYWNjb3JkaW9uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcXG4gIC1vLXRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcbn1cXG5cXG4vKiogVHJhbnNmb3JtLXJlbGF0ZWQgKi9cXG4uYWNjb3JkaW9uLFxcbi5hY2NvcmRpb24gPiAqIHtcXG4gIHdpbGwtY2hhbmdlOiBoZWlnaHQsIHRyYW5zZm9ybTtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDkwZW07XFxuICAtbW96LXBlcnNwZWN0aXZlOiA5MGVtO1xcbiAgcGVyc3BlY3RpdmU6IDkwZW07XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4vKiogUnVsZSB0byBkaXNhYmxlIHRyYW5zaXRpb25zIGJldHdlZW4gZ2FwIGNvcnJlY3Rpb25zICovXFxuLnNuYXAuYWNjb3JkaW9uID4gKixcXG4uc25hcC5hY2NvcmRpb24gLmFjY29yZGlvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW8tdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiogSGVhZGluZ3MgKi9cXG4uYWNjb3JkaW9uID4gKiA+IDpmaXJzdC1jaGlsZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4vKiogQ29sbGFwc2libGUgY29udGVudCAqL1xcbi5hY2NvcmRpb24gPiAqID4gOmxhc3QtY2hpbGQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlIGhlaWdodCwgMC4zcyBzdGVwLXN0YXJ0IHZpc2liaWxpdHk7XFxuICAtbW96LXRyYW5zaXRpb246IDAuM3MgZWFzZSBoZWlnaHQsIDAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcbiAgLW8tdHJhbnNpdGlvbjogMC4zcyBlYXNlIGhlaWdodCwgMC4zcyBzdGVwLXN0YXJ0IHZpc2liaWxpdHk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgaGVpZ2h0LCAwLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG59XFxuXFxuLmFjY29yZGlvbiA+IC5jbG9zZWQgPiA6bGFzdC1jaGlsZCxcXG4uYWNjb3JkaW9uID4gLmNsb3NlZCAuYWNjb3JkaW9uID4gLm9wZW4gPiA6bGFzdC1jaGlsZCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBzdGVwLWVuZDtcXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIHN0ZXAtZW5kO1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIHN0ZXAtZW5kO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIHN0ZXAtZW5kO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9rZXNoYXZjaGFrcmF2YXJ0aHkvcmVwb3MvamF2YXNjcmlwdC9Ub2RvTGlzdC9ub2RlX21vZHVsZXMvYWNjb3JkaW9uL3NyYy9hY2NvcmRpb24uY3NzXCIsXCJhY2NvcmRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFBO0FBQ0E7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURDQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0VGOztBREFFOzs7RUFHQyxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ0dIOztBREFFLHVCQUFBO0FBQ0E7O0VBRUMsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFFQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0FDQ0g7O0FERUUseURBQUE7QUFDQTs7RUFFQyxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQ0NIOztBREVFLGNBQUE7QUFDQTtFQUNDLGVBQUE7RUFDQSxTQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBSDs7QURHRSx5QkFBQTtBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxnRUFBQTtFQUNBLDZEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3REFBQTtBQ0FIOztBREVHOztFQUVDLGtEQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUNDSlwiLFwiZmlsZVwiOlwiYWNjb3JkaW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiogQ29yZSBzdHlsaW5nICovXFxuLmFjY29yZGlvbntcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogIDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcdC5hY2NvcmRpb24gPiAqe1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0XFx0bWFyZ2luOiAgMDtcXG5cXHR9XFxuXFx0XFx0LmFjY29yZGlvbiA+ICosXFxuXFx0XFx0LmFjY29yZGlvbi5lZGdlLXZpc2libGUsXFxuXFx0XFx0LmFjY29yZGlvbiAuYWNjb3JkaW9ue1xcblxcdFxcdFxcdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UgYWxsO1xcblxcdFxcdFxcdC1tb3otdHJhbnNpdGlvbjogICAgLjNzIGVhc2UgYWxsO1xcblxcdFxcdFxcdC1vLXRyYW5zaXRpb246ICAgICAgLjNzIGVhc2UgYWxsO1xcblxcdFxcdFxcdHRyYW5zaXRpb246ICAgICAgICAgLjNzIGVhc2UgYWxsO1xcblxcdFxcdH1cXG5cXHRcXHRcXG5cXHRcXHQvKiogVHJhbnNmb3JtLXJlbGF0ZWQgKi9cXG5cXHRcXHQuYWNjb3JkaW9uLFxcblxcdFxcdC5hY2NvcmRpb24gPiAqe1xcblxcdFxcdFxcdHdpbGwtY2hhbmdlOiBoZWlnaHQsIHRyYW5zZm9ybTtcXG5cXHRcXHRcXHQtd2Via2l0LXBlcnNwZWN0aXZlOiA5MGVtO1xcblxcdFxcdFxcdC1tb3otcGVyc3BlY3RpdmU6ICAgIDkwZW07XFxuXFx0XFx0XFx0cGVyc3BlY3RpdmU6ICAgICAgICAgOTBlbTtcXG5cXHRcXHRcXHRcXG5cXHRcXHRcXHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRcXHRcXHQtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6ICAgIGhpZGRlbjtcXG5cXHRcXHRcXHRiYWNrZmFjZS12aXNpYmlsaXR5OiAgICAgICAgIGhpZGRlbjtcXG5cXHRcXHRcXHRcXG5cXHRcXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogIHRyYW5zbGF0ZTNkKDAsMCwwKTtcXG5cXHRcXHRcXHQtbW96LXRyYW5zZm9ybTogICAgIHRyYW5zbGF0ZTNkKDAsMCwwKTtcXG5cXHRcXHRcXHQtbXMtdHJhbnNmb3JtOiAgICAgIHRyYW5zbGF0ZVkoMCk7XFxuXFx0XFx0XFx0LW8tdHJhbnNmb3JtOiAgICAgICB0cmFuc2xhdGUzZCgwLDAsMCk7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiAgICAgICAgICB0cmFuc2xhdGUzZCgwLDAsMCk7XFxuXFx0XFx0fVxcblxcdFxcdFxcblxcdFxcdC8qKiBSdWxlIHRvIGRpc2FibGUgdHJhbnNpdGlvbnMgYmV0d2VlbiBnYXAgY29ycmVjdGlvbnMgKi9cXG5cXHRcXHQuc25hcC5hY2NvcmRpb24gPiAqLFxcblxcdFxcdC5zbmFwLmFjY29yZGlvbiAuYWNjb3JkaW9ue1xcblxcdFxcdFxcdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdFxcdFxcdC1tb3otdHJhbnNpdGlvbjogICAgbm9uZSAhaW1wb3J0YW50O1xcblxcdFxcdFxcdC1vLXRyYW5zaXRpb246ICAgICAgbm9uZSAhaW1wb3J0YW50O1xcblxcdFxcdFxcdHRyYW5zaXRpb246ICAgICAgICAgbm9uZSAhaW1wb3J0YW50O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQvKiogSGVhZGluZ3MgKi9cXG5cXHRcXHQuYWNjb3JkaW9uID4gKiA+IDpmaXJzdC1jaGlsZHtcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0XFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdFxcdFxcblxcdFxcdFxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0XFx0XFx0LW1vei11c2VyLXNlbGVjdDogICAgbm9uZTtcXG5cXHRcXHRcXHQtbXMtdXNlci1zZWxlY3Q6ICAgICBub25lO1xcblxcdFxcdFxcdHVzZXItc2VsZWN0OiAgICAgICAgIG5vbmU7XFxuXFx0XFx0fVxcblxcdFxcdFxcblxcdFxcdC8qKiBDb2xsYXBzaWJsZSBjb250ZW50ICovXFxuXFx0XFx0LmFjY29yZGlvbiA+ICogPiA6bGFzdC1jaGlsZHtcXG5cXHRcXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdFxcdFxcdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UgaGVpZ2h0LCAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcblxcdFxcdFxcdC1tb3otdHJhbnNpdGlvbjogICAgLjNzIGVhc2UgaGVpZ2h0LCAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcblxcdFxcdFxcdC1vLXRyYW5zaXRpb246ICAgICAgLjNzIGVhc2UgaGVpZ2h0LCAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcblxcdFxcdFxcdHRyYW5zaXRpb246ICAgICAgICAgLjNzIGVhc2UgaGVpZ2h0LCAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcblxcdFxcdH1cXG5cXHRcXHRcXHQuYWNjb3JkaW9uID4gLmNsb3NlZCA+IDpsYXN0LWNoaWxkLFxcblxcdFxcdFxcdC5hY2NvcmRpb24gPiAuY2xvc2VkIC5hY2NvcmRpb24gPiAub3BlbiA+IDpsYXN0LWNoaWxke1xcblxcdFxcdFxcdFxcdC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIHN0ZXAtZW5kO1xcblxcdFxcdFxcdFxcdC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICAgIGVhc2UsIHN0ZXAtZW5kO1xcblxcdFxcdFxcdFxcdC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAgICAgIGVhc2UsIHN0ZXAtZW5kO1xcblxcdFxcdFxcdFxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAgICAgICAgIGVhc2UsIHN0ZXAtZW5kO1xcblxcdFxcdFxcdFxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRcXHRcXHR9XFxuXCIsXCIvKiogQ29yZSBzdHlsaW5nICovXFxuLmFjY29yZGlvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmFjY29yZGlvbiA+ICoge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hY2NvcmRpb24gPiAqLFxcbi5hY2NvcmRpb24uZWRnZS12aXNpYmxlLFxcbi5hY2NvcmRpb24gLmFjY29yZGlvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxuICAtby10cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcXG59XFxuXFxuLyoqIFRyYW5zZm9ybS1yZWxhdGVkICovXFxuLmFjY29yZGlvbixcXG4uYWNjb3JkaW9uID4gKiB7XFxuICB3aWxsLWNoYW5nZTogaGVpZ2h0LCB0cmFuc2Zvcm07XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA5MGVtO1xcbiAgLW1vei1wZXJzcGVjdGl2ZTogOTBlbTtcXG4gIHBlcnNwZWN0aXZlOiA5MGVtO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLyoqIFJ1bGUgdG8gZGlzYWJsZSB0cmFuc2l0aW9ucyBiZXR3ZWVuIGdhcCBjb3JyZWN0aW9ucyAqL1xcbi5zbmFwLmFjY29yZGlvbiA+ICosXFxuLnNuYXAuYWNjb3JkaW9uIC5hY2NvcmRpb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqIEhlYWRpbmdzICovXFxuLmFjY29yZGlvbiA+ICogPiA6Zmlyc3QtY2hpbGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyoqIENvbGxhcHNpYmxlIGNvbnRlbnQgKi9cXG4uYWNjb3JkaW9uID4gKiA+IDpsYXN0LWNoaWxkIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZSBoZWlnaHQsIDAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGVhc2UgaGVpZ2h0LCAwLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG4gIC1vLXRyYW5zaXRpb246IDAuM3MgZWFzZSBoZWlnaHQsIDAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGhlaWdodCwgMC4zcyBzdGVwLXN0YXJ0IHZpc2liaWxpdHk7XFxufVxcblxcbi5hY2NvcmRpb24gPiAuY2xvc2VkID4gOmxhc3QtY2hpbGQsXFxuLmFjY29yZGlvbiA+IC5jbG9zZWQgLmFjY29yZGlvbiA+IC5vcGVuID4gOmxhc3QtY2hpbGQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZSwgc3RlcC1lbmQ7XFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBzdGVwLWVuZDtcXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBzdGVwLWVuZDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBzdGVwLWVuZDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjZm9ybS1zZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2Zvcm0tc2VjdGlvbiBmb3JtIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jbmV3LXRvZG8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogIzlkMTBkNDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jdG9kby10aXRsZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jdG9kby1kZXNjLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN0b2RvLWR1ZWRhdGUtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuI3Jlc3VsdHMgcCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBkY2RjO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiAjMWJiYmViO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzExMDBmZjtcXG59XFxuXFxuLnRvZG8tY29udGVudCB7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzdiZjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI3Byb2plY3QtbGlzdCxcXG4ucHJvamVjdCxcXG4udG9kbyB7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0ZGIxMztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikgMzAlLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IC0ycHggLTJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6IHZhcigtLWNsci1ncmV5KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzExMTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4NGE0YTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikgMzAlLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDUwNTA1O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjg0YTRhO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDgwODA4O1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMmFkYTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikgMzAlLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IC0ycHggLTJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6IHZhcigtLWNsci1ncmV5KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzBiZjBlNDtcXG59XFxuXFxuLmVkaXQtdG9kby1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5wIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNsci1vcmFuZ2U6IHJnYigyMzEsIDE1OCwgMjIpO1xcbiAgLS1jbHItb3JhbmdlLWRhcms6IHJnYigyMDQsIDE0NywgNDApO1xcbiAgLS1jbHItZ3JleTogcmdiKDY1LCA2NCwgNjQpO1xcbiAgLS1wYWQtbW9kYWw6IDAuMTI1cmVtIDFyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9yYW5nZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpIDMwJSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IC0ycHggLTJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6IHZhcigtLWNsci1ncmV5KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMTExO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1vcmFuZ2UtZGFyayk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0ycHggLTJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zaG93LWZvcm0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9yYW5nZSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXkpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkLW1vZGFsKTtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgcGFkZGluZzogdmFyKC0tcGFkLW1vZGFsKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlZm9ybTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwLjM3NXJlbSAxLjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgcGFkZGluZzogMS4yNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVmb3JtIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxLjc1ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiBjaG9jb2xhdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL2tlc2hhdmNoYWtyYXZhcnRoeS9yZXBvcy9qYXZhc2NyaXB0L1RvZG9MaXN0L3NyYy9jc3MvX2Zvcm0uc2Nzc1wiLFwic3R5bGUuc2Nzc1wiLFwiL2hvbWUva2VzaGF2Y2hha3JhdmFydGh5L3JlcG9zL2phdmFzY3JpcHQvVG9kb0xpc3Qvc3JjL2Nzcy9fcmVzdWx0cy5zY3NzXCIsXCIvaG9tZS9rZXNoYXZjaGFrcmF2YXJ0aHkvcmVwb3MvamF2YXNjcmlwdC9Ub2RvTGlzdC9zcmMvY3NzL19hZGRfcHJvamVjdC5zY3NzXCIsXCIvaG9tZS9rZXNoYXZjaGFrcmF2YXJ0aHkvcmVwb3MvamF2YXNjcmlwdC9Ub2RvTGlzdC9zcmMvY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QUNyREE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUR3REY7O0FDckRBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUR3REY7O0FDckRBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUR3REY7O0FDckRBOzs7RUFHRSxZQUFBO0FEd0RGOztBQ3JEQTtFQUNFLHlCQUFBO0VBQ0EsNEdBQ0U7RUFNRixTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RkFDRTtFQUVGLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QURnREY7O0FDN0NBO0VBQ0UsZUFBQTtBRGdERjs7QUM3Q0E7RUFDRSx5QkFBQTtFQUNBLDRHQUNFO0VBTUYsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEZBQ0U7RUFFRixzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBRHdDRjs7QUNyQ0E7RUFDRSxlQUFBO0FEd0NGOztBQ3JDQTtFQUNFLHlCQUFBO0VBQ0EsNEdBQ0U7RUFNRixTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RkFDRTtFQUVGLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QURnQ0Y7O0FDN0JBO0VBQ0UsZUFBQTtBRGdDRjs7QUM3QkE7RUFDRSx5QkFBQTtFQUNBLDRHQUNFO0VBTUYsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEZBQ0U7RUFFRixzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBRHdCRjs7QUNyQkE7RUFDRSxlQUFBO0FEd0JGOztBQ3JCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBRHdCRjs7QUUxSkE7RUFDRSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBRjZKRjs7QUUxSkE7RUFDRSxtQ0FBQTtFQUNBLDRHQUNFO0VBTUYsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsOEZBQ0U7RUFFRixzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUZxSkY7O0FFbEpBO0VBQ0Usd0NBQUE7QUZxSkY7O0FFbEpBO0VBQ0UsOEZBQ0U7QUZvSko7O0FFaEpBO0VBQ0UsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FGbUpGOztBRWhKQTtFQUNFLGNBQUE7QUZtSkY7O0FFaEpBO0VBQ0UsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FGbUpGOztBRWhKQTtFQUNFLHlCQUFBO0FGbUpGOztBRWhKQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEZBQ0U7RUFFRixnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUZpSkY7O0FFOUlBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFRmlKRjtFRTlJQTtJQUNFLE1BQUE7SUFDQSxVQUFBO0VGZ0pGO0FBQ0Y7QUU3SUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FGK0lGOztBRTVJQTs7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FGK0lGOztBR3BQQTtFQUNFLG9CQUFBO0FIdVBGOztBR3BQQTtFQUNFLGdCQUFBO0FIdVBGXCIsXCJmaWxlXCI6XCJzdHlsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNmb3JtLXNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG59XFxuXFxuI25ldy10b2RvIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHJnYigxNTcsIDE2LCAyMTIpO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiN0b2RvLXRpdGxlLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN0b2RvLWRlc2MtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3RvZG8tZHVlZGF0ZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmxlZ2VuZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogYnJvd247XFxufVxcblxcbiNyZXN1bHRzIHAge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjIwLCAyMjApO1xcbn1cXG5cIixcIiNmb3JtLXNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jZm9ybS1zZWN0aW9uIGZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNuZXctdG9kbyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjOWQxMGQ0O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiN0b2RvLXRpdGxlLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN0b2RvLWRlc2MtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3RvZG8tZHVlZGF0ZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmxlZ2VuZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG4jcmVzdWx0cyBwIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGRjZGM7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICMxYmJiZWI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMTEwMGZmO1xcbn1cXG5cXG4udG9kby1jb250ZW50IHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjN2JmO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LFxcbi5wcm9qZWN0LFxcbi50b2RvIHtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRkYjEzO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMTExO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjg0YTRhO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZ3JleSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwNTA1MDU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiODRhNGE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpIDMwJSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZ3JleSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwODA4MDg7XFxufVxcblxcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyYWRhO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMGJmMGU0O1xcbn1cXG5cXG4uZWRpdC10b2RvLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnAge1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2xyLW9yYW5nZTogcmdiKDIzMSwgMTU4LCAyMik7XFxuICAtLWNsci1vcmFuZ2UtZGFyazogcmdiKDIwNCwgMTQ3LCA0MCk7XFxuICAtLWNsci1ncmV5OiByZ2IoNjUsIDY0LCA2NCk7XFxuICAtLXBhZC1tb2RhbDogMC4xMjVyZW0gMXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItb3JhbmdlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikgMzAlLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMxMTE7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9yYW5nZS1kYXJrKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNob3ctZm9ybSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItb3JhbmdlKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZ3JleSk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWQtbW9kYWwpO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWQtbW9kYWwpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVmb3JtO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAuMzc1cmVtIDEuMjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZWZvcm0ge1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDEuNzVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG59XFxuXFxuaDMge1xcbiAgY29sb3I6IGNob2NvbGF0ZTtcXG59XCIsXCJcXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiAjMWJiYmViO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDE3LCAwLCAyNTUpO1xcbn1cXG5cXG4udG9kby1jb250ZW50IHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxOTksIDE5MSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QsXFxuLnByb2plY3QsXFxuLnRvZG8ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICMyNGRiMTMsICRhbW91bnQ6IDApO1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIHRvcCBsZWZ0LFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMikgMzAlLFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMClcXG4gICAgKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3gtc2hhZG93OlxcbiAgICBpbnNldCAycHggMnB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXFxuICAgIGluc2V0IC0ycHggLTJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgY29sb3I6IHZhcigtLWNsci1ncmV5KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzExMTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogI2I4NGE0YSwgJGFtb3VudDogMCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gdG9wIGxlZnQsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwKVxcbiAgICApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgMnB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxcbiAgICBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZ3JleSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYig1LCA1LCA1KTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogI2I4NGE0YSwgJGFtb3VudDogMCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gdG9wIGxlZnQsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwKVxcbiAgICApO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSxcXG4gICAgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoOCwgOCwgOCk7XFxufVxcblxcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjMGIyYWRhLCAkYW1vdW50OiAwKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byB0b3AgbGVmdCxcXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjIpIDMwJSxcXG4gICAgICByZ2JhKDAsIDAsIDAsIDApXFxuICAgICk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgMnB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxcbiAgICBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZ3JleSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigxMSwgMjQwLCAyMjgpO1xcbn1cXG5cXG4uZWRpdC10b2RvLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnAge1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLFwiOnJvb3Qge1xcbiAgLS1jbHItb3JhbmdlOiByZ2IoMjMxLCAxNTgsIDIyKTtcXG4gIC0tY2xyLW9yYW5nZS1kYXJrOiByZ2IoMjA0LCAxNDcsIDQwKTtcXG4gIC0tY2xyLWdyZXk6IHJnYig2NSwgNjQsIDY0KTtcXG4gIC0tcGFkLW1vZGFsOiAwLjEyNXJlbSAxcmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1vcmFuZ2UpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIHRvcCBsZWZ0LFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMikgMzAlLFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMClcXG4gICAgKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSxcXG4gICAgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMxMTE7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW9yYW5nZS1kYXJrKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXFxuICAgIGluc2V0IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNob3ctZm9ybSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItb3JhbmdlKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZ3JleSk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWQtbW9kYWwpO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWQtbW9kYWwpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVmb3JtO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBib3gtc2hhZG93OlxcbiAgICAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAwIDAuMzc1cmVtIDEuMjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZWZvcm0ge1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDEuNzVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIkB1c2UgJ2Zvcm0nO1xcbkB1c2UgJ3Jlc3VsdHMnO1xcbkB1c2UgJ2FkZF9wcm9qZWN0JztcXG5cXG5oMSB7XFxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG59XFxuXFxuaDMge1xcbiAgY29sb3I6IGNob2NvbGF0ZTtcXG59XFxuXFxuLy8gI2NvbnRlbnQge1xcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbi8vIH1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2FjY29yZGlvbi9zcmMvYWNjb3JkaW9uLm1qcyc7XG5cbmNvbnN0IGNsb3NlRm9sZCA9IChmb2xkKSA9PiB7XG4gIGZvbGQub3BlbiA9IGZhbHNlO1xufTtcblxuY29uc3Qgb3BlbkZvbGQgPSAoZm9sZCkgPT4ge1xuICBmb2xkLm9wZW4gPSB0cnVlO1xufTtcblxuY29uc3QgY3JlYXRlQWNjb3JkaW9ucyA9ICgpID0+IHtcbiAgY29uc3QgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0LWxpc3QsIC5wcm9qZWN0LXRvZG9zJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjb3JkaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICBuZXcgQWNjb3JkaW9uKGFjY29yZGlvbnNbaV0sIHtcbiAgICAgIG1vZGFsOiB0cnVlLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBjcmVhdGVBY2NvcmRpb25zLCBjbG9zZUZvbGQsIG9wZW5Gb2xkIH07IiwiaW1wb3J0IHsgZ2V0VG9kbyB9IGZyb20gJy4uL21vZGVscy9kYXRhJztcblxuY29uc3QgYWRkVG9kb0J0bkFjdGlvbiA9IChwcm9qZWN0SWQpID0+IHtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby1kZXNjLWlucHV0JykudmFsdWUgPSAnJztcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8tZHVlZGF0ZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxvdy1wcmlvcml0eScpLmNoZWNrZWQgPSBmYWxzZTtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8tbWVkaXVtLXByaW9yaXR5JykuY2hlY2tlZCA9IHRydWU7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWhpZ2gtcHJpb3JpdHknKS5jaGVja2VkID0gZmFsc2U7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5vdGVzLWlucHV0JykudmFsdWUgPSAnJztcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKS52YWx1ZSA9IHByb2plY3RJZDtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8taW5wdXQnKS52YWx1ZSA9IC0xO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXN1Ym1pdF0nKS52YWx1ZSA9ICdDcmVhdGUgTmV3IFRvZG8nO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtLWJveCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpO1xufTtcblxuY29uc3QgZWRpdFRvZG9CdG5BY3Rpb24gPSAodG9kb0lkLCBwcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgdG9kbyA9IGdldFRvZG8odG9kb0lkLCBwcm9qZWN0SWQpO1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgfSA9IHRvZG8uZ2V0QXR0cmlidXRlcygpO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZS1pbnB1dCcpLnZhbHVlID0gdGl0bGU7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2MtaW5wdXQnKS52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby1kdWVkYXRlLWlucHV0JykudmFsdWUgPSBkdWVEYXRlO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby1tZWRpdW0tcHJpb3JpdHknKS5jaGVja2VkID0gZmFsc2U7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoYCN0b2RvLSR7cHJpb3JpdHl9LXByaW9yaXR5YCkuY2hlY2tlZCA9IHRydWU7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5vdGVzLWlucHV0JykudmFsdWUgPSBub3RlcztcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKS52YWx1ZSA9IHByb2plY3RJZDtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8taW5wdXQnKS52YWx1ZSA9IHRvZG9JZDtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1zdWJtaXRdJykudmFsdWUgPSAnVXBkYXRlIFRvZG8nO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtLWJveCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpO1xufTtcblxuZXhwb3J0IHsgYWRkVG9kb0J0bkFjdGlvbiwgZWRpdFRvZG9CdG5BY3Rpb24gfTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnYWNjb3JkaW9uL3NyYy9hY2NvcmRpb24ubWpzJztcbmltcG9ydCB7IGNsb3NlRm9sZCwgb3BlbkZvbGQgfSBmcm9tICcuL2FjY29yZGlvbl91dGlscyc7XG5cbmNvbnN0IGRlbGV0ZVByb2plY3RGcm9tVUkgPSAocHJvamVjdElkKSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke3Byb2plY3RJZH1gKTtcbiAgY29uc3QgcHJvamVjdEZvbGQgPSBBY2NvcmRpb24uZ2V0Rm9sZChwcm9qZWN0RGl2KTtcbiAgY29uc3QgeyBhY2NvcmRpb24gfSA9IHByb2plY3RGb2xkO1xuICBjb25zdCBmb2xkSW5kZXggPSBhY2NvcmRpb24uZm9sZHMuZmluZEluZGV4KGZvbGQgPT4gZm9sZCA9PT0gcHJvamVjdEZvbGQpO1xuICBhY2NvcmRpb24uZm9sZHMuc3BsaWNlKGZvbGRJbmRleCwgMSk7XG4gIHByb2plY3REaXYucmVtb3ZlKCk7XG4gIHNldFRpbWVvdXQoY2xvc2VGb2xkLCAyMDAsIHByb2plY3RGb2xkKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG9Gcm9tVUkgPSAodG9kb0lkLCBwcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7cHJvamVjdElkfS10b2RvLSR7dG9kb0lkfWApO1xuICBjb25zdCB0b2RvRm9sZCA9IEFjY29yZGlvbi5nZXRGb2xkKHRvZG9EaXYpO1xuICBjb25zdCB7IGFjY29yZGlvbiB9ID0gdG9kb0ZvbGQ7XG4gIGNvbnN0IHsgcGFyZW50Rm9sZCB9ID0gYWNjb3JkaW9uO1xuICBzZXRUaW1lb3V0KGNsb3NlRm9sZCwgMjAwLCB0b2RvRm9sZCk7XG4gIGNvbnN0IGZvbGRJbmRleCA9IGFjY29yZGlvbi5mb2xkcy5maW5kSW5kZXgoZm9sZCA9PiBmb2xkID09PSB0b2RvRm9sZCk7XG4gIGFjY29yZGlvbi5mb2xkcy5zcGxpY2UoZm9sZEluZGV4LCAxKTtcbiAgdG9kb0Rpdi5yZW1vdmUoKTtcbiAgc2V0VGltZW91dChjbG9zZUZvbGQsIDQwMCwgcGFyZW50Rm9sZCk7XG4gIHNldFRpbWVvdXQob3BlbkZvbGQsIDYwMCwgcGFyZW50Rm9sZCk7XG59O1xuXG5jb25zdCBvcGVuUHJvamVjdFRhYiA9IChwcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7cHJvamVjdElkfWApO1xuICBjb25zdCBwcm9qZWN0Rm9sZCA9IEFjY29yZGlvbi5nZXRGb2xkKHByb2plY3REaXYpO1xuICBzZXRUaW1lb3V0KG9wZW5Gb2xkLCAyMDAsIHByb2plY3RGb2xkKTtcbn07XG5cbmNvbnN0IG9wZW5Ub2RvVGFiID0gKHRvZG9JZCwgcHJvamVjdElkKSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke3Byb2plY3RJZH1gKTtcbiAgY29uc3QgcHJvamVjdEZvbGQgPSBBY2NvcmRpb24uZ2V0Rm9sZChwcm9qZWN0RGl2KTtcbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7cHJvamVjdElkfS10b2RvLSR7dG9kb0lkfWApO1xuICBjb25zdCB0b2RvRm9sZCA9IEFjY29yZGlvbi5nZXRGb2xkKHRvZG9EaXYpO1xuICBzZXRUaW1lb3V0KG9wZW5Gb2xkLCAxNTAsIHByb2plY3RGb2xkKTtcbiAgc2V0VGltZW91dChvcGVuRm9sZCwgMzAwLCB0b2RvRm9sZCk7XG59O1xuXG5leHBvcnQge1xuICBkZWxldGVQcm9qZWN0RnJvbVVJLFxuICBkZWxldGVUb2RvRnJvbVVJLFxuICBvcGVuUHJvamVjdFRhYixcbiAgb3BlblRvZG9UYWIsXG59OyIsImltcG9ydCBjcmVhdGVUb2RvRGl2IGZyb20gJy4vdG9kb19kaXNwbGF5JztcblxuY29uc3QgY3JlYXRlUHJvamVjdFRpdGxlID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gIHJldHVybiBwcm9qZWN0SGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdENvbnRlbnQgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kb3MnLCAnYWNjb3JkaW9uJyk7XG5cbiAgY29uc3QgcHJvamVjdENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RDb250cm9scy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRyb2xzJyk7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdENvbnRyb2xzLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICBwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICBwcm9qZWN0VG9kb3MuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRyb2xzKTtcblxuICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ2FkZC10b2RvLWJ0bic7XG4gIGFkZFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5nZXRJZCgpKTtcbiAgYWRkVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbik7XG5cbiAgaWYgKHByb2plY3QuZ2V0SWQoKSAhPT0gMCkge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUtcHJvamVjdC1idG4nO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5nZXRJZCgpKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICB9XG5cbiAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG4gIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgY29uc3QgdG9kb0RpdiA9IGNyZWF0ZVRvZG9EaXYodG9kbyk7XG4gICAgcHJvamVjdFRvZG9zLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICB9KTtcbiAgcmV0dXJuIHByb2plY3RUb2Rvcztcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3REaXYgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICBwcm9qZWN0RGl2LmlkID0gYHByb2plY3QtJHtwcm9qZWN0LmdldElkKCl9YDtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0VGl0bGUocHJvamVjdCkpO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDb250ZW50KHByb2plY3QpKTtcbiAgcmV0dXJuIHByb2plY3REaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0RGl2OyIsImNvbnN0IGNyZWF0ZVRvZG9UaXRsZSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICByZXR1cm4gdG9kb1RpdGxlO1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0NvbnRlbnQgPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRlbnQnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIG9uICR7dG9kby5nZXREdWVEYXRlKCl9YDtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbm90ZXMnKTtcbiAgbm90ZXMudGV4dENvbnRlbnQgPSB0b2RvLmdldE5vdGVzKCk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5Jyk7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFRoaXMgdGFzayBoYXMgJHt0b2RvLmdldFByaW9yaXR5KCl9IHByaW9yaXR5YDtcblxuICBjb25zdCBkZWxldGVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZVRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS10b2RvLWJ0bic7XG4gIGRlbGV0ZVRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG9pZCcsIHRvZG8uZ2V0VG9kb0lkKCkpO1xuICBkZWxldGVUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0aWQnLCB0b2RvLmdldFByb2plY3RJZCgpKTtcbiAgZGVsZXRlVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgVG9kbyc7XG4gIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRUb2RvQnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0LXRvZG8tYnRuJztcbiAgZWRpdFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG9pZCcsIHRvZG8uZ2V0VG9kb0lkKCkpO1xuICBlZGl0VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdGlkJywgdG9kby5nZXRQcm9qZWN0SWQoKSk7XG4gIGVkaXRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVG9kbyc7XG5cbiAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0J1dHRvbik7XG4gIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKGVkaXRUb2RvQnV0dG9uKTtcblxuICByZXR1cm4gdG9kb0NvbnRlbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvRGl2ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgdG9kb0Rpdi5pZCA9IGBwcm9qZWN0LSR7dG9kby5nZXRQcm9qZWN0SWQoKX0tdG9kby0ke3RvZG8uZ2V0VG9kb0lkKCl9YDtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvVGl0bGUodG9kbykpO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Db250ZW50KHRvZG8pKTtcbiAgcmV0dXJuIHRvZG9EaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvRGl2OyIsImltcG9ydCB7IGNyZWF0ZUFjY29yZGlvbnMgfSBmcm9tICcuL2FjY29yZGlvbl91dGlscyc7XG5pbXBvcnQgeyBnZXRBcHBEYXRhLCBkZWxldGVQcm9qZWN0LCBkZWxldGVUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEnO1xuaW1wb3J0IHsgYWRkVG9kb0J0bkFjdGlvbiwgZWRpdFRvZG9CdG5BY3Rpb24gfSBmcm9tICcuL2J1dHRvbl9hY3Rpb24nO1xuaW1wb3J0IGNyZWF0ZVByb2plY3REaXYgZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3RfZGlzcGxheSc7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0RnJvbVVJLCBkZWxldGVUb2RvRnJvbVVJIH0gZnJvbSAnLi9jaGFuZ2VfZG9tJztcblxuY29uc3QgY3JlYXRlUmVzdWx0c1NlY3Rpb24gPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgbGlzdE9mUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGlzdE9mUHJvamVjdHMuaWQgPSAncHJvamVjdC1saXN0JztcbiAgbGlzdE9mUHJvamVjdHMuY2xhc3NOYW1lID0gJ2FjY29yZGlvbic7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGNyZWF0ZVByb2plY3REaXYocHJvamVjdCk7XG4gICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH0pO1xuICByZXR1cm4gbGlzdE9mUHJvamVjdHM7XG59O1xuXG5jb25zdCBzZXR1cEJ0bkV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0Jyk7XG4gIGFwcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTtcbiAgICBpZiAoYnRuKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGFzc05hbWUpIHtcbiAgICAgICAgY2FzZSAnZGVsZXRlLXByb2plY3QtYnRuJzpcbiAgICAgICAgICBkZWxldGVQcm9qZWN0KE51bWJlcihidG4uZGF0YXNldC5pZCkpO1xuICAgICAgICAgIGRlbGV0ZVByb2plY3RGcm9tVUkoYnRuLmRhdGFzZXQuaWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkZWxldGUtdG9kby1idG4nOlxuICAgICAgICAgIGRlbGV0ZVRvZG8oTnVtYmVyKGJ0bi5kYXRhc2V0LnRvZG9pZCksIE51bWJlcihidG4uZGF0YXNldC5wcm9qZWN0aWQpKTtcbiAgICAgICAgICBkZWxldGVUb2RvRnJvbVVJKGJ0bi5kYXRhc2V0LnRvZG9pZCwgYnRuLmRhdGFzZXQucHJvamVjdGlkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWRkLXRvZG8tYnRuJzpcbiAgICAgICAgICBhZGRUb2RvQnRuQWN0aW9uKE51bWJlcihidG4uZGF0YXNldC5pZCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlZGl0LXRvZG8tYnRuJzpcbiAgICAgICAgICBlZGl0VG9kb0J0bkFjdGlvbihOdW1iZXIoYnRuLmRhdGFzZXQudG9kb2lkKSwgTnVtYmVyKGJ0bi5kYXRhc2V0LnByb2plY3RpZCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJSZXN1bHRzID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1kYXRhJyk7XG4gIGxldCByZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpO1xuICBpZiAocmVzdWx0cyAhPT0gbnVsbCkge1xuICAgIHJlc3VsdHMucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9ID0gZ2V0QXBwRGF0YSgpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF0uY29uY2F0KG90aGVyUHJvamVjdHMpO1xuICByZXN1bHRzID0gY3JlYXRlUmVzdWx0c1NlY3Rpb24oYWxsUHJvamVjdHMpO1xuICBkaXNwbGF5U2VjdGlvbi5hcHBlbmRDaGlsZChyZXN1bHRzKTtcbiAgY3JlYXRlQWNjb3JkaW9ucygpO1xuICBzZXR1cEJ0bkV2ZW50TGlzdGVuZXJzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJSZXN1bHRzO1xuIiwiY29uc3QgZGVzY1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZGVzY0xhYmVsLmh0bWxGb3IgPSAndG9kby1kZXNjLWlucHV0JztcbmRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRlc2NJbnB1dC5pZCA9ICd0b2RvLWRlc2MtaW5wdXQnO1xuZGVzY0lucHV0LnR5cGUgPSAndGV4dCc7XG5kZXNjSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XG5kZXNjU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuZGVzY1NlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVzY1NlY3Rpb247IiwiY29uc3QgZHVlRGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAndG9kby1kdWVkYXRlLWlucHV0JztcbmR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgb246JztcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5kdWVEYXRlSW5wdXQuaWQgPSAndG9kby1kdWVkYXRlLWlucHV0JztcbmR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlZGF0ZSc7XG5kdWVEYXRlU2VjdGlvbi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuZHVlRGF0ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuZXhwb3J0IGRlZmF1bHQgZHVlRGF0ZVNlY3Rpb247IiwiY29uc3Qgbm90ZXNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5ub3Rlc0xhYmVsLmh0bWxGb3IgPSAndG9kby1ub3Rlcy1pbnB1dCc7XG5ub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gJ05vdGVzOic7XG5jb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbm5vdGVzSW5wdXQuaWQgPSAndG9kby1ub3Rlcy1pbnB1dCc7XG5ub3Rlc0lucHV0Lm5hbWUgPSAnbm90ZXMnO1xubm90ZXNJbnB1dC5yb3dzID0gJzUnO1xubm90ZXNJbnB1dC5jb2xzID0gJzMzJztcbm5vdGVzSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgcG9pbnRzIG9mIG5vdGUgZm9yIHRoaXMgdG9kby4uLic7XG5ub3Rlc1NlY3Rpb24uYXBwZW5kQ2hpbGQobm90ZXNMYWJlbCk7XG5ub3Rlc1NlY3Rpb24uYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vdGVzU2VjdGlvbjsiLCJjb25zdCBwcmlvcml0eVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuY29uc3QgcHJpb3JpdHlMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbnByaW9yaXR5TGVnZW5kLnRleHRDb250ZW50ID0gJ1RvZG8gUHJpb3JpdHknO1xucHJpb3JpdHlTZWN0aW9uLmFwcGVuZENoaWxkKHByaW9yaXR5TGVnZW5kKTtcbmNvbnN0IHByaW9yaXR5TGlzdFZhbHVlcyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XG5wcmlvcml0eUxpc3RWYWx1ZXMuZm9yRWFjaCgocFZhbCkgPT4ge1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJpb3JpdHlJbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgcHJpb3JpdHlJbnB1dC5pZCA9IGB0b2RvLSR7cFZhbH0tcHJpb3JpdHlgO1xuICBwcmlvcml0eUlucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gcFZhbDtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IHByaW9yaXR5SW5wdXQuaWQ7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBwVmFsO1xuICBwcmlvcml0eVNlY3Rpb24uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIHByaW9yaXR5U2VjdGlvbi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbn0pO1xucHJpb3JpdHlTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW1lZGl1bS1wcmlvcml0eScpLmNoZWNrZWQgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlvcml0eVNlY3Rpb247IiwiY29uc3QgZ2V0U3VibWl0U2VjdGlvbiA9IChmb3JtRm9yKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IGBDcmVhdGUgJHtmb3JtRm9yLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpLmNvbmNhdChmb3JtRm9yLnNsaWNlKDEpKX1gO1xuICBzdWJtaXRTZWN0aW9uLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gIHJldHVybiBzdWJtaXRTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U3VibWl0U2VjdGlvbjsiLCJjb25zdCBnZXRUaXRsZVNlY3Rpb24gPSAoZm9ybUZvcikgPT4ge1xuICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aXRsZUxhYmVsLmh0bWxGb3IgPSBgJHtmb3JtRm9yfS10aXRsZS1pbnB1dGA7XG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlSW5wdXQuaWQgPSB0aXRsZUxhYmVsLmh0bWxGb3I7XG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIHJldHVybiB0aXRsZVNlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRUaXRsZVNlY3Rpb247IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB0aXRsZUlucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGVfc2VjdGlvbic7XG5pbXBvcnQgc3VibWl0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvc3VibWl0X3NlY3Rpb24nO1xuaW1wb3J0IHJlbmRlckFwcERhdGEgZnJvbSAnLi4vLi4vZGlzcGxheS9kaXNwbGF5X3Jlc3VsdHMnO1xuaW1wb3J0IHsgb3BlblByb2plY3RUYWIgfSBmcm9tICcuLi8uLi9kaXNwbGF5L2NoYW5nZV9kb20nO1xuXG4vLyBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHByb2plY3RGb3JtSW5wdXRzID0gZG9jdW1lbnQuZm9ybXNbJ25ldy1wcm9qZWN0J10udGl0bGUudmFsdWU7XG4vLyAgIGlmIChwcm9qZWN0Rm9ybUlucHV0cyA9PT0gJycpIHtcbi8vICAgICBhbGVydCgnVGl0bGUgY2FuIG5vdCBiZSBlbXB0eScpO1xuLy8gICAgIHJldHVybiBmYWxzZTtcbi8vICAgfVxuLy8gICByZXR1cm4gcHJvamVjdEZvcm1JbnB1dHM7XG4vLyB9O1xuXG5jb25zdCBnZXRQcm9qZWN0Rm9ybSA9IChmb3JtQWN0aW9uKSA9PiB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5pZCA9ICduZXctcHJvamVjdCc7XG5cbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCgncHJvamVjdCcpKTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKCdwcm9qZWN0JykpO1xuXG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1JbnB1dHMgPSB7XG4gICAgICB0aXRsZTogcHJvamVjdEZvcm0uZWxlbWVudHMudGl0bGUudmFsdWUsXG4gICAgfTtcbiAgICAvLyB2YWxpZGF0ZUZvcm0oKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZm9ybUFjdGlvbihwcm9qZWN0Rm9ybUlucHV0cyk7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBjb25zdCBmb3JtTW9kYWxCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtLWJveCcpO1xuICAgIGZvcm1Nb2RhbEJveC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKTtcbiAgICByZW5kZXJBcHBEYXRhKCk7XG4gICAgb3BlblByb2plY3RUYWIocHJvamVjdC5nZXRJZCgpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvamVjdEZvcm07IiwiaW1wb3J0IHRpdGxlSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZV9zZWN0aW9uJztcbmltcG9ydCBkZXNjSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbl9zZWN0aW9uJztcbmltcG9ydCBkdWVEYXRlSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9kdWVfZGF0ZV9zZWN0aW9uJztcbmltcG9ydCBwcmlvcml0eUlucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvcHJpb3JpdHlfc2VjdGlvbic7XG5pbXBvcnQgbm90ZXNJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL25vdGVzX3NlY3Rpb24nO1xuaW1wb3J0IHN1Ym1pdEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3N1Ym1pdF9zZWN0aW9uJztcbmltcG9ydCByZW5kZXJBcHBEYXRhIGZyb20gJy4uLy4uL2Rpc3BsYXkvZGlzcGxheV9yZXN1bHRzJztcbmltcG9ydCB7IG9wZW5Ub2RvVGFiIH0gZnJvbSAnLi4vLi4vZGlzcGxheS9jaGFuZ2VfZG9tJztcblxuY29uc3QgZ2V0VG9kb0Zvcm0gPSAoZm9ybUFjdGlvbikgPT4ge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdG9kb0Zvcm0uaWQgPSAnbmV3LXRvZG8nO1xuXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQoJ3RvZG8nKSk7XG5cbiAgY29uc3QgcHJvamVjdElkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qZWN0SWRJbnB1dC5uYW1lID0gJ3Byb2plY3RpZCc7XG4gIHByb2plY3RJZElucHV0LnR5cGUgPSAnaGlkZGVuJztcbiAgcHJvamVjdElkSW5wdXQuaWQgPSAncHJvamVjdC1pbnB1dCc7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByb2plY3RJZElucHV0KTtcblxuICBjb25zdCB0b2RvSWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvZG9JZElucHV0Lm5hbWUgPSAndG9kb2lkJztcbiAgdG9kb0lkSW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICB0b2RvSWRJbnB1dC5pZCA9ICd0b2RvLWlucHV0JztcbiAgdG9kb0lkSW5wdXQudmFsdWUgPSAnLTEnO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvSWRJbnB1dCk7XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24oJ3RvZG8nKSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG9kb0Zvcm1JbnB1dHMgPSB7XG4gICAgICB0aXRsZTogdG9kb0Zvcm0uZWxlbWVudHMudGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogdG9kb0Zvcm0uZWxlbWVudHMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBkdWVkYXRlOiB0b2RvRm9ybS5lbGVtZW50cy5kdWVkYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHRvZG9Gb3JtLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlLFxuICAgICAgbm90ZXM6IHRvZG9Gb3JtLmVsZW1lbnRzLm5vdGVzLnZhbHVlLFxuICAgICAgcHJvamVjdElkOiBOdW1iZXIodG9kb0Zvcm0uZWxlbWVudHMucHJvamVjdGlkLnZhbHVlKSxcbiAgICAgIHRvZG9JZDogTnVtYmVyKHRvZG9Gb3JtLmVsZW1lbnRzLnRvZG9pZC52YWx1ZSksXG4gICAgICBjaGVja2xpc3Q6IFtdLFxuICAgIH07XG4gICAgY29uc3QgdG9kbyA9IGZvcm1BY3Rpb24odG9kb0Zvcm1JbnB1dHMpO1xuICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgY29uc3QgZm9ybU1vZGFsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybS1ib3gnKTtcbiAgICBmb3JtTW9kYWxCb3guY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1mb3JtJyk7XG4gICAgcmVuZGVyQXBwRGF0YSgpO1xuICAgIG9wZW5Ub2RvVGFiKHRvZG8uZ2V0VG9kb0lkKCksIHRvZG8uZ2V0UHJvamVjdElkKCkpO1xuICB9KTtcblxuICByZXR1cm4gdG9kb0Zvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRUb2RvRm9ybTtcbiIsImltcG9ydCB0b2RvRmFjdG9yeSBmcm9tICcuLi9tb2RlbHMvdG9kb19mYWN0b3J5JztcbmltcG9ydCB7IG5ld1Byb2plY3RJbnN0YW5jZSB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0X2ZhY3RvcnknO1xuaW1wb3J0IHsgZ2V0QXBwRGF0YSwgc3RvcmVBcHBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEnO1xuXG5jb25zdCBuZXh0VG9kb0lkID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG4gIGNvbnN0IG51bVRvZG9zID0gdG9kb3MubGVuZ3RoO1xuICBjb25zdCB0b2RvSWQgPSBudW1Ub2RvcyA9PT0gMCA/IDAgOiB0b2Rvc1tudW1Ub2RvcyAtIDFdLmdldFRvZG9JZCgpICsgMTtcbiAgcmV0dXJuIHRvZG9JZDtcbn07XG5cbmNvbnN0IG5leHRQcm9qZWN0SWQgPSAocHJvamVjdExpc3QpID0+IHtcbiAgY29uc3QgbnVtUHJvamVjdHMgPSBwcm9qZWN0TGlzdC5sZW5ndGg7XG4gIGNvbnN0IHByb2plY3RJZCA9IG51bVByb2plY3RzID09PSAwID8gMSA6IHByb2plY3RMaXN0W251bVByb2plY3RzIC0gMV0uZ2V0SWQoKSArIDE7XG4gIHJldHVybiBwcm9qZWN0SWQ7XG59O1xuXG5jb25zdCBhZGROZXdUb2RvVG9Qcm9qZWN0ID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVkYXRlLFxuICBwcmlvcml0eSxcbiAgbm90ZXMsXG4gIHByb2plY3RJZCxcbiAgdG9kb0lkLFxuICBjaGVja2xpc3QsXG59KSA9PiB7XG4gIGxldCB0b2RvO1xuICBjb25zdCBwcm9qZWN0TGlicmFyeSA9IGdldEFwcERhdGEoKTtcbiAgY29uc3QgeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9ID0gcHJvamVjdExpYnJhcnk7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SWQgPT09IDBcbiAgICA/IGRlZmF1bHRQcm9qZWN0XG4gICAgOiBvdGhlclByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldElkKCkgPT09IHByb2plY3RJZCk7XG4gIGlmICh0b2RvSWQgPT09IC0xKSB7XG4gICAgdG9kb0lkID0gbmV4dFRvZG9JZChwcm9qZWN0KTtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlZGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgbm90ZXMsXG4gICAgICBwcm9qZWN0SWQsXG4gICAgICB0b2RvSWQsXG4gICAgICBjaGVja2xpc3QsXG4gICAgKTtcbiAgICBwcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgdG9kbyA9IG5ld1RvZG87XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG4gICAgY29uc3QgdG9kb1RvVXBkYXRlID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uZ2V0VG9kb0lkKCkgPT09IHRvZG9JZCk7XG4gICAgY29uc3QgbmV3VGl0bGUgPSB0aXRsZTtcbiAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkdWVkYXRlO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgY29uc3QgbmV3Tm90ZXMgPSBub3RlcztcbiAgICBjb25zdCBuZXdDaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgdG9kb1RvVXBkYXRlLnVwZGF0ZSh7XG4gICAgICBuZXdUaXRsZSxcbiAgICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgICAgbmV3RHVlRGF0ZSxcbiAgICAgIG5ld1ByaW9yaXR5LFxuICAgICAgbmV3Tm90ZXMsXG4gICAgICBuZXdDaGVja2xpc3QsXG4gICAgfSk7XG4gICAgdG9kbyA9IHRvZG9Ub1VwZGF0ZTtcbiAgfVxuICBzdG9yZUFwcERhdGEocHJvamVjdExpYnJhcnkpO1xuICByZXR1cm4gdG9kbztcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAoe1xuICB0aXRsZSxcbn0pID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRBcHBEYXRhKCk7XG4gIGNvbnN0IHByb2plY3RJZCA9IG5leHRQcm9qZWN0SWQocHJvamVjdHMub3RoZXJQcm9qZWN0cyk7XG4gIGNvbnN0IHByb2plY3QgPSBuZXdQcm9qZWN0SW5zdGFuY2UodGl0bGUsIHByb2plY3RJZCk7XG4gIHByb2plY3RzLm90aGVyUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgc3RvcmVBcHBEYXRhKHByb2plY3RzKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59O1xuXG5leHBvcnQge1xuICBhZGROZXdUb2RvVG9Qcm9qZWN0LFxuICBjcmVhdGVOZXdQcm9qZWN0LFxufTtcbiIsImltcG9ydCBnZXRUb2RvRm9ybSBmcm9tICcuL2Zvcm1zL3RvZG9fZm9ybSc7XG5pbXBvcnQgZ2V0UHJvamVjdEZvcm0gZnJvbSAnLi9mb3Jtcy9wcm9qZWN0X2Zvcm0nO1xuaW1wb3J0IHsgYWRkTmV3VG9kb1RvUHJvamVjdCwgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vbWV0aG9kcyc7XG5cblxuY29uc3QgZ2V0TW9kYWwgPSAoZm9ybVR5cGUpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuaWQgPSBgJHtmb3JtVHlwZX0tZm9ybS1ib3hgO1xuICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwnO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxIZWFkZXIuY2xhc3NOYW1lID0gJ21vZGFsLWhlYWRlcic7XG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnY2xvc2UnO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gIGNsb3NlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmb3JtVHlwZX0tZm9ybS1ib3hgKTtcbiAgICBtb2RhbEJveC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKTtcbiAgfTtcbiAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XG4gIGxldCBmb3JtO1xuICBzd2l0Y2ggKGZvcm1UeXBlKSB7XG4gICAgY2FzZSAncHJvamVjdCc6XG4gICAgICBmb3JtID0gZ2V0UHJvamVjdEZvcm0oY3JlYXRlTmV3UHJvamVjdCk7XG4gICAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0VudGVyIFByb2plY3QgTmFtZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2RvJzpcbiAgICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnRW50ZXIgVG9kbyBEZXRhaWxzJztcbiAgICAgIGZvcm0gPSBnZXRUb2RvRm9ybShhZGROZXdUb2RvVG9Qcm9qZWN0KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCb2R5KTtcblxuICByZXR1cm4gbW9kYWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb2RhbDtcbiIsImltcG9ydCAnYWNjb3JkaW9uL3NyYy9hY2NvcmRpb24uY3NzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGdldE1vZGFsIGZyb20gJy4vZm9ybV9idWlsZGVyL21vZGFsJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9kaXNwbGF5L2Rpc3BsYXlfcmVzdWx0cyc7XG5cbmNvbnN0IGNvbnRlbnRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaDEudGV4dENvbnRlbnQgPSAnVG9EbyBMaXN0IEFwcCc7XG5jb250ZW50VGFnLmFwcGVuZENoaWxkKGgxKTtcblxuY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1vZGFsQ29udGFpbmVyLmlkID0gJ21vZGFsLWJveCc7XG5tb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRNb2RhbCgncHJvamVjdCcpKTtcbm1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGdldE1vZGFsKCd0b2RvJykpO1xuY29udGVudFRhZy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG5cbmNvbnN0IGRpc3BsYXlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuZGlzcGxheVNlY3Rpb24uaWQgPSAncHJvamVjdHMtZGF0YSc7XG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmhlYWRpbmcudGV4dENvbnRlbnQgPSAnUHJvamVjdHMgYW5kIFRvZG9zJztcbmRpc3BsYXlTZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZFByb2plY3RCdXR0b24uaWQgPSAnYWRkLXByb2plY3QtYnRuJztcbmFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xucHJvamVjdENvbnRyb2xzLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuYWRkUHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0tYm94Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpO1xufTtcbmRpc3BsYXlTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDb250cm9scyk7XG5cbmNvbnRlbnRUYWcuYXBwZW5kQ2hpbGQoZGlzcGxheVNlY3Rpb24pO1xucmVuZGVyKCk7XG4iLCJpbXBvcnQgeyBuZXdQcm9qZWN0SW5zdGFuY2UsIHByb2plY3RGcm9tSlNPTiB9IGZyb20gJy4vcHJvamVjdF9mYWN0b3J5JztcblxuY29uc3Qgc3RvcmVBcHBEYXRhID0gKHsgZGVmYXVsdFByb2plY3QsIG90aGVyUHJvamVjdHMgfSkgPT4ge1xuICBjb25zdCBKU09OaWZpZWREYXRhID0ge307XG4gIEpTT05pZmllZERhdGEuZGVmYXVsdFByb2plY3QgPSBkZWZhdWx0UHJvamVjdC50b0pTT04oKTtcbiAgSlNPTmlmaWVkRGF0YS5vdGhlclByb2plY3RzID0gb3RoZXJQcm9qZWN0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRvSlNPTigpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoSlNPTmlmaWVkRGF0YSkpO1xufTtcblxuXG5jb25zdCBnZXRBcHBEYXRhID0gKCkgPT4ge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdExpYnJhcnkgPSB7XG4gICAgZGVmYXVsdFByb2plY3Q6IG5ld1Byb2plY3RJbnN0YW5jZSgnTWlzY2VsbGFuZW91cyBUYXNrcycsIDApLFxuICAgIG90aGVyUHJvamVjdHM6IFtdLFxuICB9O1xuICBjb25zdCBKU09OaWZpZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIGxldCBkYXRhO1xuICBpZiAoIUpTT05pZmllZERhdGEpIHtcbiAgICBkYXRhID0gZGVmYXVsdFByb2plY3RMaWJyYXJ5O1xuICB9IGVsc2Uge1xuICAgIGRhdGEgPSB7fTtcbiAgICBjb25zdCB7IGRlZmF1bHRQcm9qZWN0LCBvdGhlclByb2plY3RzIH0gPSBKU09OaWZpZWREYXRhO1xuICAgIGRhdGEuZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RnJvbUpTT04oZGVmYXVsdFByb2plY3QpO1xuICAgIGRhdGEub3RoZXJQcm9qZWN0cyA9IG90aGVyUHJvamVjdHMubWFwKEpTT05pZmllZFByb2plY3QgPT4gcHJvamVjdEZyb21KU09OKEpTT05pZmllZFByb2plY3QpKTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGdldFRvZG8gPSAodG9kb0lkLCBwcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9ID0gZ2V0QXBwRGF0YSgpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdElkID09PSAwXG4gICAgPyBkZWZhdWx0UHJvamVjdFxuICAgIDogb3RoZXJQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpID09PSBwcm9qZWN0SWQpO1xuICBjb25zdCB0b2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcbiAgY29uc3QgdG9kb1RvVXBkYXRlID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uZ2V0VG9kb0lkKCkgPT09IHRvZG9JZCk7XG4gIHJldHVybiB0b2RvVG9VcGRhdGU7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICBpZiAocHJvamVjdElkICE9PSAwKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9ID0gZ2V0QXBwRGF0YSgpO1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IG90aGVyUHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpID09PSBwcm9qZWN0SWQpO1xuICAgIG90aGVyUHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgc3RvcmVBcHBEYXRhKHsgZGVmYXVsdFByb2plY3QsIG90aGVyUHJvamVjdHMgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kb0lkLCBwcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9ID0gZ2V0QXBwRGF0YSgpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdElkID09PSAwXG4gICAgPyBkZWZhdWx0UHJvamVjdFxuICAgIDogb3RoZXJQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpID09PSBwcm9qZWN0SWQpO1xuICBjb25zdCB0b2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcbiAgY29uc3QgdG9kb0luZGV4ID0gdG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5nZXRUb2RvSWQoKSA9PT0gdG9kb0lkKTtcbiAgdG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gIHN0b3JlQXBwRGF0YSh7IGRlZmF1bHRQcm9qZWN0LCBvdGhlclByb2plY3RzIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0QXBwRGF0YSxcbiAgc3RvcmVBcHBEYXRhLFxuICBnZXRUb2RvLFxuICBkZWxldGVQcm9qZWN0LFxuICBkZWxldGVUb2RvLFxufTtcbiIsImltcG9ydCB0b2RvRmFjdG9yeSBmcm9tICcuL3RvZG9fZmFjdG9yeSc7XG5cbmNvbnN0IG5ld1Byb2plY3RJbnN0YW5jZSA9ICh0aXRsZSwgcHJvamVjdElkLCB0b2RvcykgPT4ge1xuICB0b2RvcyA9IHRvZG9zIHx8IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kb0luc3RhbmNlKSA9PiB7XG4gICAgdG9kb3MucHVzaCh0b2RvSW5zdGFuY2UpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gcHJvamVjdElkO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuXG4gIGNvbnN0IGdldFRvZG9UaXRsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGVzID0gW107XG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIHRpdGxlcy5wdXNoKHRvZG8udGl0bGUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aXRsZXM7XG4gIH07XG5cbiAgY29uc3QgdG9KU09OID0gKCkgPT4gKHtcbiAgICB0aXRsZTogZ2V0VGl0bGUoKSxcbiAgICBpZDogZ2V0SWQoKSxcbiAgICB0b2RvczogdG9kb3MubWFwKHRvZG8gPT4gdG9kby5nZXRBdHRyaWJ1dGVzKCkpLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldElkLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgZ2V0VG9kb1RpdGxlcyxcbiAgICB0b0pTT04sXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0RnJvbUpTT04gPSAoKHsgdGl0bGUsIGlkLCB0b2RvcyB9KSA9PiB7XG4gIGNvbnN0IHRvZG9JbnN0YW5jZXMgPSB0b2Rvcy5tYXAoKHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RJZCxcbiAgICB0b2RvSWQsXG4gICAgY2hlY2tsaXN0LFxuICB9KSA9PiB0b2RvRmFjdG9yeShcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RJZCxcbiAgICB0b2RvSWQsXG4gICAgY2hlY2tsaXN0LFxuICApKTtcbiAgcmV0dXJuIG5ld1Byb2plY3RJbnN0YW5jZSh0aXRsZSwgaWQsIHRvZG9JbnN0YW5jZXMpO1xufSk7XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RJbnN0YW5jZSwgcHJvamVjdEZyb21KU09OIH07XG4iLCJjb25zdCBuZXdUb2RvSW5zdGFuY2UgPSAoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIG5vdGVzLFxuICBwcm9qZWN0SWQsXG4gIHRvZG9JZCxcbiAgY2hlY2tsaXN0LFxuKSA9PiB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICBjb25zdCBnZXROb3RlcyA9ICgpID0+IG5vdGVzO1xuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiBwcm9qZWN0SWQ7XG4gIGNvbnN0IGdldFRvZG9JZCA9ICgpID0+IHRvZG9JZDtcbiAgY29uc3QgZ2V0QXR0cmlidXRlcyA9ICgpID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBwcm9qZWN0SWQsXG4gICAgdG9kb0lkLFxuICAgIGNoZWNrbGlzdCxcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlID0gKHtcbiAgICBuZXdUaXRsZSxcbiAgICBuZXdEZXNjcmlwdGlvbixcbiAgICBuZXdEdWVEYXRlLFxuICAgIG5ld1ByaW9yaXR5LFxuICAgIG5ld05vdGVzLFxuICAgIG5ld0NoZWNrbGlzdCxcbiAgfSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIG5vdGVzID0gbmV3Tm90ZXM7XG4gICAgY2hlY2tsaXN0ID0gbmV3Q2hlY2tsaXN0O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0QXR0cmlidXRlcyxcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIGdldE5vdGVzLFxuICAgIGdldFByb2plY3RJZCxcbiAgICBnZXRUb2RvSWQsXG4gICAgdXBkYXRlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3VG9kb0luc3RhbmNlOyJdLCJzb3VyY2VSb290IjoiIn0=