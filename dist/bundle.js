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
___CSS_LOADER_EXPORT___.push([module.i, "/** Core styling */\n.accordion {\n  padding: 0;\n  margin: 0;\n  position: relative;\n  list-style: none;\n}\n\n.accordion > * {\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n\n.accordion > *,\n.accordion.edge-visible,\n.accordion .accordion {\n  -webkit-transition: 0.3s ease all;\n  -moz-transition: 0.3s ease all;\n  -o-transition: 0.3s ease all;\n  transition: 0.3s ease all;\n}\n\n/** Transform-related */\n.accordion,\n.accordion > * {\n  will-change: height, transform;\n  -webkit-perspective: 90em;\n  -moz-perspective: 90em;\n  perspective: 90em;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translateY(0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n/** Rule to disable transitions between gap corrections */\n.snap.accordion > *,\n.snap.accordion .accordion {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n\n/** Headings */\n.accordion > * > :first-child {\n  cursor: pointer;\n  margin: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/** Collapsible content */\n.accordion > * > :last-child {\n  overflow: hidden;\n  -webkit-transition: 0.3s ease height, 0.3s step-start visibility;\n  -moz-transition: 0.3s ease height, 0.3s step-start visibility;\n  -o-transition: 0.3s ease height, 0.3s step-start visibility;\n  transition: 0.3s ease height, 0.3s step-start visibility;\n}\n\n.accordion > .closed > :last-child,\n.accordion > .closed .accordion > .open > :last-child {\n  -webkit-transition-timing-function: ease, step-end;\n  -moz-transition-timing-function: ease, step-end;\n  -o-transition-timing-function: ease, step-end;\n  transition-timing-function: ease, step-end;\n  visibility: hidden;\n}", "",{"version":3,"sources":["/home/mbabali_irene/Desktop/MICROVERSE/TodoList/node_modules/accordion/src/accordion.css","accordion.css"],"names":[],"mappings":"AAAA,kBAAA;AACA;EACC,UAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;ACCD;;ADCC;EACC,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;ACEF;;ADAE;;;EAGC,iCAAA;EACA,8BAAA;EACA,4BAAA;EACA,yBAAA;ACGH;;ADAE,uBAAA;AACA;;EAEC,8BAAA;EACA,yBAAA;EACA,sBAAA;EACA,iBAAA;EAEA,mCAAA;EACA,gCAAA;EACA,2BAAA;EAEA,uCAAA;EACA,oCAAA;EACA,4BAAA;EACA,kCAAA;EACA,+BAAA;ACCH;;ADEE,yDAAA;AACA;;EAEC,mCAAA;EACA,gCAAA;EACA,8BAAA;EACA,2BAAA;ACCH;;ADEE,cAAA;AACA;EACC,eAAA;EACA,SAAA;EAEA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;ACAH;;ADGE,yBAAA;AACA;EACC,gBAAA;EACA,gEAAA;EACA,6DAAA;EACA,2DAAA;EACA,wDAAA;ACAH;;ADEG;;EAEC,kDAAA;EACA,+CAAA;EACA,6CAAA;EACA,0CAAA;EACA,kBAAA;ACCJ","file":"accordion.css","sourcesContent":["/** Core styling */\n.accordion{\n\tpadding: 0;\n\tmargin:  0;\n\tposition: relative;\n\tlist-style: none;\n}\n\t.accordion > *{\n\t\tposition: absolute;\n\t\toverflow: hidden;\n\t\tpadding: 0;\n\t\tmargin:  0;\n\t}\n\t\t.accordion > *,\n\t\t.accordion.edge-visible,\n\t\t.accordion .accordion{\n\t\t\t-webkit-transition: .3s ease all;\n\t\t\t-moz-transition:    .3s ease all;\n\t\t\t-o-transition:      .3s ease all;\n\t\t\ttransition:         .3s ease all;\n\t\t}\n\t\t\n\t\t/** Transform-related */\n\t\t.accordion,\n\t\t.accordion > *{\n\t\t\twill-change: height, transform;\n\t\t\t-webkit-perspective: 90em;\n\t\t\t-moz-perspective:    90em;\n\t\t\tperspective:         90em;\n\t\t\t\n\t\t\t-webkit-backface-visibility: hidden;\n\t\t\t-moz-backface-visibility:    hidden;\n\t\t\tbackface-visibility:         hidden;\n\t\t\t\n\t\t\t-webkit-transform:  translate3d(0,0,0);\n\t\t\t-moz-transform:     translate3d(0,0,0);\n\t\t\t-ms-transform:      translateY(0);\n\t\t\t-o-transform:       translate3d(0,0,0);\n\t\t\ttransform:          translate3d(0,0,0);\n\t\t}\n\t\t\n\t\t/** Rule to disable transitions between gap corrections */\n\t\t.snap.accordion > *,\n\t\t.snap.accordion .accordion{\n\t\t\t-webkit-transition: none !important;\n\t\t\t-moz-transition:    none !important;\n\t\t\t-o-transition:      none !important;\n\t\t\ttransition:         none !important;\n\t\t}\n\n\t\t/** Headings */\n\t\t.accordion > * > :first-child{\n\t\t\tcursor: pointer;\n\t\t\tmargin: 0;\n\t\t\t\n\t\t\t-webkit-user-select: none;\n\t\t\t-moz-user-select:    none;\n\t\t\t-ms-user-select:     none;\n\t\t\tuser-select:         none;\n\t\t}\n\t\t\n\t\t/** Collapsible content */\n\t\t.accordion > * > :last-child{\n\t\t\toverflow: hidden;\n\t\t\t-webkit-transition: .3s ease height, .3s step-start visibility;\n\t\t\t-moz-transition:    .3s ease height, .3s step-start visibility;\n\t\t\t-o-transition:      .3s ease height, .3s step-start visibility;\n\t\t\ttransition:         .3s ease height, .3s step-start visibility;\n\t\t}\n\t\t\t.accordion > .closed > :last-child,\n\t\t\t.accordion > .closed .accordion > .open > :last-child{\n\t\t\t\t-webkit-transition-timing-function: ease, step-end;\n\t\t\t\t-moz-transition-timing-function:    ease, step-end;\n\t\t\t\t-o-transition-timing-function:      ease, step-end;\n\t\t\t\ttransition-timing-function:         ease, step-end;\n\t\t\t\tvisibility: hidden;\n\t\t\t}\n","/** Core styling */\n.accordion {\n  padding: 0;\n  margin: 0;\n  position: relative;\n  list-style: none;\n}\n\n.accordion > * {\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n\n.accordion > *,\n.accordion.edge-visible,\n.accordion .accordion {\n  -webkit-transition: 0.3s ease all;\n  -moz-transition: 0.3s ease all;\n  -o-transition: 0.3s ease all;\n  transition: 0.3s ease all;\n}\n\n/** Transform-related */\n.accordion,\n.accordion > * {\n  will-change: height, transform;\n  -webkit-perspective: 90em;\n  -moz-perspective: 90em;\n  perspective: 90em;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translateY(0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n/** Rule to disable transitions between gap corrections */\n.snap.accordion > *,\n.snap.accordion .accordion {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n\n/** Headings */\n.accordion > * > :first-child {\n  cursor: pointer;\n  margin: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/** Collapsible content */\n.accordion > * > :last-child {\n  overflow: hidden;\n  -webkit-transition: 0.3s ease height, 0.3s step-start visibility;\n  -moz-transition: 0.3s ease height, 0.3s step-start visibility;\n  -o-transition: 0.3s ease height, 0.3s step-start visibility;\n  transition: 0.3s ease height, 0.3s step-start visibility;\n}\n\n.accordion > .closed > :last-child,\n.accordion > .closed .accordion > .open > :last-child {\n  -webkit-transition-timing-function: ease, step-end;\n  -moz-transition-timing-function: ease, step-end;\n  -o-transition-timing-function: ease, step-end;\n  transition-timing-function: ease, step-end;\n  visibility: hidden;\n}"]}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_beach_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/beach.jpg */ "./src/images/beach.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_beach_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  position: relative;\n}\n\n#content {\n  background-color: rgba(245, 245, 245, 0.4);\n  width: 100%;\n  max-width: 800px;\n}\n\n#title-tag {\n  border-style: ridge;\n  margin-top: 0;\n  padding-left: 2rem;\n  padding-bottom: 1rem;\n  padding-top: 0.5rem;\n  background-color: rgba(236, 157, 9, 0.5);\n  text-shadow: 2px 2px 2px rgba(155, 112, 33, 0.863);\n}\n\n#project-control {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n\n.image-attrib {\n  color: grey;\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n}\n.image-attrib a {\n  text-decoration: none;\n  color: grey;\n}\n.image-attrib a:hover {\n  color: black;\n}\n\nform {\n  margin-top: 1.5rem;\n}\nform section,\nform fieldset,\nform textarea,\nform input {\n  margin-bottom: 0.75rem;\n}\nform input[type=text],\nform input[type=submit],\nform textarea,\nform fieldset {\n  width: 95%;\n}\nform label,\nform legend {\n  color: #1e1eb8;\n}\nform label[for=todo-low-priority] {\n  color: #218821;\n}\nform label[for=todo-medium-priority] {\n  color: #c5c532;\n}\nform label[for=todo-high-priority] {\n  color: crimson;\n}\n\n.accordion {\n  margin-bottom: 20px;\n}\n\n#project-list,\n.project {\n  width: 100%;\n}\n\n.project-header {\n  outline: none;\n}\n\n.project-title {\n  font-weight: bold;\n  padding: 0.5rem;\n  display: table;\n}\n\n.project {\n  border-style: outset;\n  padding-bottom: 10px;\n}\n.project .project-title {\n  color: cyan;\n  margin: 0;\n  transition: margin-left 1s ease-in-out 100ms, color 1s ease-in-out 200ms;\n}\n.project.closed {\n  background-color: rgba(223, 13, 223, 0.6);\n  border-color: rgba(170, 36, 170, 0.6);\n}\n.project.closed .project-title {\n  font-size: 1.3rem;\n}\n.project.open {\n  background-color: rgba(255, 217, 0, 0.6);\n  border-color: rgba(177, 156, 39, 0.6);\n  transition: background-color 400ms ease-in-out 100ms;\n}\n.project.open .project-title {\n  font-size: 2rem;\n  color: firebrick;\n  margin: 0 auto;\n}\n\n.project-controls {\n  width: 100%;\n}\n.project-controls .buttons {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.project-todos {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.todo-title {\n  font-size: 1.2rem;\n  color: blueviolet;\n  font-weight: bold;\n  display: table;\n}\n\n.todo {\n  width: 60%;\n  border-style: outset;\n  padding-bottom: 10px;\n}\n.todo.closed {\n  background-color: rgba(241, 5, 52, 0.6);\n  border-color: rgba(155, 8, 37, 0.6);\n  transition: background-color 0.5s ease-in-out;\n}\n.todo.closed .todo-title {\n  color: papayawhip;\n  margin: 0;\n}\n.todo.open {\n  background-color: rgba(255, 248, 220, 0.6);\n  border-color: rgba(190, 182, 150, 0.6);\n  transition: background-color 0.5s ease-in-out;\n}\n.todo.open .todo-title {\n  font-size: 2rem;\n  color: lime;\n  margin: 0 auto;\n}\n\n.todo-header {\n  outline: none;\n}\n\n.todo-content {\n  margin-left: 1.5rem;\n}\n\n.todo-description,\n.todo-duedate,\n.todo-priority {\n  color: darkslategray;\n  font-size: 1.1em;\n  font-weight: 500;\n}\n.todo-description .date,\n.todo-duedate .date,\n.todo-priority .date {\n  color: #ff2400;\n}\n.todo-description .low,\n.todo-duedate .low,\n.todo-priority .low {\n  color: #218821;\n}\n.todo-description .medium,\n.todo-duedate .medium,\n.todo-priority .medium {\n  color: #c5c532;\n}\n.todo-description .high,\n.todo-duedate .high,\n.todo-priority .high {\n  color: crimson;\n}\n\n.todo-controls {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#add-project-btn,\n.delete-project-btn,\n.add-todo-btn,\n.delete-todo-btn,\n.edit-todo-btn {\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: #414040;\n  font-size: 1rem;\n  line-height: 2.5;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n.add-todo-btn {\n  left: 3rem;\n}\n\n#add-project-btn:hover,\n.add-todo-btn:hover,\n.delete-project-btn:hover,\n.delete-todo-btn:hover,\n.edit-todo-btn:hover {\n  cursor: pointer;\n}\n\n#add-project-btn:active,\n.add-todo-btn:active,\n.delete-project-btn:active,\n.delete-todo-btn:active,\n.edit-todo-btn:active {\n  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\n#add-project-btn,\n.add-todo-btn {\n  background-color: #24db13;\n}\n\n.edit-todo-btn {\n  background-color: cyan;\n}\n\n.delete-project-btn,\n.delete-todo-btn {\n  background-color: crimson;\n}\n\n#add-project-btn:hover,\n.add-todo-btn:hover {\n  background-color: #42a039;\n  color: blanchedalmond;\n}\n\n.delete-project-btn:hover,\n.delete-todo-btn:hover {\n  background-color: #92253b;\n  color: blanchedalmond;\n}\n\n.edit-todo-btn:hover {\n  background-color: #25afaf;\n  color: blanchedalmond;\n}\n\n.modal {\n  background-color: rgba(0, 0, 0, 0.4);\n  display: none;\n  height: 100%;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.show-form {\n  display: block;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #dddd15;\n  color: #414040;\n}\n\n.form-title {\n  margin: 0.75rem 0.5rem;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.close {\n  color: #aaa;\n  background-color: crimson;\n  font-size: 1.75em;\n  font-weight: bold;\n  padding-left: 0.8rem;\n  padding-right: 0.8rem;\n  align-self: flex-start;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: 5px;\n}\n\n.modal-content {\n  animation-name: slideform;\n  animation-duration: 0.5s;\n  background-color: #fefefe;\n  border: 1px solid #888;\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.4);\n  margin: 15% auto;\n  max-width: 500px;\n  position: relative;\n  width: 80%;\n}\n\n@keyframes slideform {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["/home/mbabali_irene/Desktop/MICROVERSE/TodoList/src/css/_reset.scss","style.scss","/home/mbabali_irene/Desktop/MICROVERSE/TodoList/src/css/_main.scss","/home/mbabali_irene/Desktop/MICROVERSE/TodoList/src/css/_form.scss","/home/mbabali_irene/Desktop/MICROVERSE/TodoList/src/css/_project.scss","/home/mbabali_irene/Desktop/MICROVERSE/TodoList/src/css/_todo.scss","/home/mbabali_irene/Desktop/MICROVERSE/TodoList/src/css/_buttons.scss","/home/mbabali_irene/Desktop/MICROVERSE/TodoList/src/css/_button_colors.scss","/home/mbabali_irene/Desktop/MICROVERSE/TodoList/src/css/_modal.scss"],"names":[],"mappings":"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","file":"style.scss","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n","*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  background-image: url(\"../images/beach.jpg\");\n  background-size: cover;\n  position: relative;\n}\n\n#content {\n  background-color: rgba(245, 245, 245, 0.4);\n  width: 100%;\n  max-width: 800px;\n}\n\n#title-tag {\n  border-style: ridge;\n  margin-top: 0;\n  padding-left: 2rem;\n  padding-bottom: 1rem;\n  padding-top: 0.5rem;\n  background-color: rgba(236, 157, 9, 0.5);\n  text-shadow: 2px 2px 2px rgba(155, 112, 33, 0.863);\n}\n\n#project-control {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n\n.image-attrib {\n  color: grey;\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n}\n.image-attrib a {\n  text-decoration: none;\n  color: grey;\n}\n.image-attrib a:hover {\n  color: black;\n}\n\nform {\n  margin-top: 1.5rem;\n}\nform section,\nform fieldset,\nform textarea,\nform input {\n  margin-bottom: 0.75rem;\n}\nform input[type=text],\nform input[type=submit],\nform textarea,\nform fieldset {\n  width: 95%;\n}\nform label,\nform legend {\n  color: #1e1eb8;\n}\nform label[for=todo-low-priority] {\n  color: #218821;\n}\nform label[for=todo-medium-priority] {\n  color: #c5c532;\n}\nform label[for=todo-high-priority] {\n  color: crimson;\n}\n\n.accordion {\n  margin-bottom: 20px;\n}\n\n#project-list,\n.project {\n  width: 100%;\n}\n\n.project-header {\n  outline: none;\n}\n\n.project-title {\n  font-weight: bold;\n  padding: 0.5rem;\n  display: table;\n}\n\n.project {\n  border-style: outset;\n  padding-bottom: 10px;\n}\n.project .project-title {\n  color: cyan;\n  margin: 0;\n  transition: margin-left 1s ease-in-out 100ms, color 1s ease-in-out 200ms;\n}\n.project.closed {\n  background-color: rgba(223, 13, 223, 0.6);\n  border-color: rgba(170, 36, 170, 0.6);\n}\n.project.closed .project-title {\n  font-size: 1.3rem;\n}\n.project.open {\n  background-color: rgba(255, 217, 0, 0.6);\n  border-color: rgba(177, 156, 39, 0.6);\n  transition: background-color 400ms ease-in-out 100ms;\n}\n.project.open .project-title {\n  font-size: 2rem;\n  color: firebrick;\n  margin: 0 auto;\n}\n\n.project-controls {\n  width: 100%;\n}\n.project-controls .buttons {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.project-todos {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.todo-title {\n  font-size: 1.2rem;\n  color: blueviolet;\n  font-weight: bold;\n  display: table;\n}\n\n.todo {\n  width: 60%;\n  border-style: outset;\n  padding-bottom: 10px;\n}\n.todo.closed {\n  background-color: rgba(241, 5, 52, 0.6);\n  border-color: rgba(155, 8, 37, 0.6);\n  transition: background-color 0.5s ease-in-out;\n}\n.todo.closed .todo-title {\n  color: papayawhip;\n  margin: 0;\n}\n.todo.open {\n  background-color: rgba(255, 248, 220, 0.6);\n  border-color: rgba(190, 182, 150, 0.6);\n  transition: background-color 0.5s ease-in-out;\n}\n.todo.open .todo-title {\n  font-size: 2rem;\n  color: lime;\n  margin: 0 auto;\n}\n\n.todo-header {\n  outline: none;\n}\n\n.todo-content {\n  margin-left: 1.5rem;\n}\n\n.todo-description,\n.todo-duedate,\n.todo-priority {\n  color: darkslategray;\n  font-size: 1.1em;\n  font-weight: 500;\n}\n.todo-description .date,\n.todo-duedate .date,\n.todo-priority .date {\n  color: #ff2400;\n}\n.todo-description .low,\n.todo-duedate .low,\n.todo-priority .low {\n  color: #218821;\n}\n.todo-description .medium,\n.todo-duedate .medium,\n.todo-priority .medium {\n  color: #c5c532;\n}\n.todo-description .high,\n.todo-duedate .high,\n.todo-priority .high {\n  color: crimson;\n}\n\n.todo-controls {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#add-project-btn,\n.delete-project-btn,\n.add-todo-btn,\n.delete-todo-btn,\n.edit-todo-btn {\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: #414040;\n  font-size: 1rem;\n  line-height: 2.5;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n.add-todo-btn {\n  left: 3rem;\n}\n\n#add-project-btn:hover,\n.add-todo-btn:hover,\n.delete-project-btn:hover,\n.delete-todo-btn:hover,\n.edit-todo-btn:hover {\n  cursor: pointer;\n}\n\n#add-project-btn:active,\n.add-todo-btn:active,\n.delete-project-btn:active,\n.delete-todo-btn:active,\n.edit-todo-btn:active {\n  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\n#add-project-btn,\n.add-todo-btn {\n  background-color: #24db13;\n}\n\n.edit-todo-btn {\n  background-color: cyan;\n}\n\n.delete-project-btn,\n.delete-todo-btn {\n  background-color: crimson;\n}\n\n#add-project-btn:hover,\n.add-todo-btn:hover {\n  background-color: #42a039;\n  color: blanchedalmond;\n}\n\n.delete-project-btn:hover,\n.delete-todo-btn:hover {\n  background-color: #92253b;\n  color: blanchedalmond;\n}\n\n.edit-todo-btn:hover {\n  background-color: #25afaf;\n  color: blanchedalmond;\n}\n\n.modal {\n  background-color: rgba(0, 0, 0, 0.4);\n  display: none;\n  height: 100%;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.show-form {\n  display: block;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #dddd15;\n  color: #414040;\n}\n\n.form-title {\n  margin: 0.75rem 0.5rem;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.close {\n  color: #aaa;\n  background-color: crimson;\n  font-size: 1.75em;\n  font-weight: bold;\n  padding-left: 0.8rem;\n  padding-right: 0.8rem;\n  align-self: flex-start;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: 5px;\n}\n\n.modal-content {\n  animation-name: slideform;\n  animation-duration: 0.5s;\n  background-color: #fefefe;\n  border: 1px solid #888;\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.4);\n  margin: 15% auto;\n  max-width: 500px;\n  position: relative;\n  width: 80%;\n}\n\n@keyframes slideform {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}","$orange: rgba(236, 157, 9, 0.5);\n$orange-dark: rgba(155, 112, 33, 0.863);\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  background-image: url('../images/beach.jpg');\n  background-size: cover;\n  position: relative;\n}\n\n#content {\n  background-color: rgba(245, 245, 245, 0.4);\n  width: 100%;\n  max-width: 800px;\n}\n\n#title-tag {\n  border-style: ridge;\n  margin-top: 0;\n  padding-left: 2rem;\n  padding-bottom: 1rem;\n  padding-top: 0.5rem;\n  background-color: $orange;\n  text-shadow: 2px 2px 2px $orange-dark;\n}\n\n#project-control {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n\n.image-attrib {\n  color: grey;\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n\n  a {\n    text-decoration: none;\n    color: grey;\n\n    &:hover {\n      color: black;\n    }\n  }\n}\n","$low-color: rgb(33, 136, 33);\n$medium-color: rgb(197, 197, 50);\n$high-color: crimson;\n$blue: rgb(30, 30, 184);\n\nform {\n  margin-top: 1.5rem;\n\n  section,\n  fieldset,\n  textarea,\n  input {\n    margin-bottom: 0.75rem;\n    // width: 500px;\n    // margin: 0.75rem auto;\n  }\n\n  input[type=text],\n  input[type=submit],\n  textarea,\n  fieldset {\n    width: 95%;\n  }\n\n  label,\n  legend {\n    color: $blue;\n  }\n\n  label[for=todo-low-priority] {\n    color: $low-color;\n  }\n\n  label[for=todo-medium-priority] {\n    color: $medium-color;\n  }\n\n  label[for=todo-high-priority] {\n    color: $high-color;\n  }\n}\n",".accordion {\n  margin-bottom: 20px;\n}\n\n#project-list,\n.project {\n  width: 100%;\n}\n\n.project-header {\n  outline: none;\n}\n\n.project-title {\n  font-weight: bold;\n  padding: 0.5rem;\n  display: table;\n}\n\n.project {\n  border-style: outset;\n  padding-bottom: 10px;\n\n  .project-title {\n    color: cyan;\n    margin: 0;\n    transition:\n      margin-left 1s ease-in-out 100ms,\n      color 1s ease-in-out 200ms;\n  }\n\n  &.closed {\n    background-color: rgba(223, 13, 223, 0.6);\n    border-color: rgba(170, 36, 170, 0.6);\n\n    .project-title {\n      font-size: 1.3rem;\n    }\n  }\n\n  &.open {\n    background-color: rgba(255, 217, 0, 0.6);\n    border-color: rgba(177, 156, 39, 0.6);\n    transition: background-color 400ms ease-in-out 100ms;\n\n    .project-title {\n      font-size: 2rem;\n      color: firebrick;\n      margin: 0 auto;\n    }\n  }\n}\n\n.project-controls {\n  width: 100%;\n\n  .buttons {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n  }\n}\n","$low-color: rgb(33, 136, 33);\n$medium-color: rgb(197, 197, 50);\n$high-color: crimson;\n\n.project-todos {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.todo-title {\n  font-size: 1.2rem;\n  color: blueviolet;\n  font-weight: bold;\n  display: table;\n}\n\n.todo {\n  width: 60%;\n  border-style: outset;\n  padding-bottom: 10px;\n\n  &.closed {\n    background-color: rgba(241, 5, 52, 0.6);\n    border-color: rgba(155, 8, 37, 0.6);\n    transition: background-color 0.5s ease-in-out;\n\n    .todo-title {\n      color: papayawhip;\n      margin: 0;\n    }\n  }\n\n  &.open {\n    background-color: rgba(255, 248, 220, 0.6);\n    border-color: rgba(190, 182, 150, 0.6);\n    transition: background-color 0.5s ease-in-out;\n\n    .todo-title {\n      font-size: 2rem;\n      color: lime;\n      margin: 0 auto;\n    }\n  }\n}\n\n.todo-header {\n  outline: none;\n}\n\n.todo-content {\n  margin-left: 1.5rem;\n}\n\n.todo-description,\n.todo-duedate,\n.todo-priority {\n  color: darkslategray;\n  font-size: 1.1em;\n  font-weight: 500;\n\n  .date {\n    color: #ff2400;\n  }\n\n  .low {\n    color: $low-color;\n  }\n\n  .medium {\n    color: $medium-color;\n  }\n\n  .high {\n    color: $high-color;\n  }\n}\n\n.todo-controls {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n","$grey: rgb(65, 64, 64);\n\n#add-project-btn,\n.delete-project-btn,\n.add-todo-btn,\n.delete-todo-btn,\n.edit-todo-btn {\n  background-image:\n    linear-gradient(\n      to top left,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.2) 30%,\n      rgba(0, 0, 0, 0)\n    );\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow:\n    inset 2px 2px 3px rgba(255, 255, 255, 0.6),\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  color: $grey;\n  font-size: 1rem;\n  line-height: 2.5;\n  padding: 0 1.5rem;\n  text-shadow: 1px 1px 1px #111;\n}\n\n.add-todo-btn {\n  left: 3rem;\n}\n\n#add-project-btn:hover,\n.add-todo-btn:hover,\n.delete-project-btn:hover,\n.delete-todo-btn:hover,\n.edit-todo-btn:hover {\n  cursor: pointer;\n}\n\n#add-project-btn:active,\n.add-todo-btn:active,\n.delete-project-btn:active,\n.delete-todo-btn:active,\n.edit-todo-btn:active {\n  box-shadow:\n    inset -2px -2px 3px rgba(255, 255, 255, 0.6),\n    inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n","$green: #24db13;\n$green-dark: #42a039;\n$red: crimson;\n$red-dark: rgb(146, 37, 59);\n$blue: cyan;\n$blue-dark: rgb(37, 175, 175);\n\n#add-project-btn,\n.add-todo-btn {\n  background-color: $green;\n}\n\n.edit-todo-btn {\n  background-color: $blue;\n}\n\n.delete-project-btn,\n.delete-todo-btn {\n  background-color: $red;\n}\n\n#add-project-btn:hover,\n.add-todo-btn:hover {\n  background-color: $green-dark;\n  color: blanchedalmond;\n}\n\n.delete-project-btn:hover,\n.delete-todo-btn:hover {\n  background-color: $red-dark;\n  color: blanchedalmond;\n}\n\n.edit-todo-btn:hover {\n  background-color: $blue-dark;\n  color: blanchedalmond;\n}\n","$yellow: rgb(221, 221, 21);\n$grey: rgb(65, 64, 64);\n$modal-padding:  5px;\n\n.modal {\n  background-color: rgb(0, 0, 0, 0.4);\n  display: none;\n  height: 100%;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.show-form {\n  display: block;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: $yellow;\n  color: $grey;\n}\n\n.form-title {\n  margin: 0.75rem 0.5rem;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.close {\n  color: #aaa;\n  background-color: crimson;\n  font-size: 1.75em;\n  font-weight: bold;\n  padding-left: 0.8rem;\n  padding-right: 0.8rem;\n  align-self: flex-start;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: $modal-padding;\n}\n\n.modal-content {\n  animation-name: slideform;\n  animation-duration: 0.5s;\n  background-color: #fefefe;\n  border: 1px solid #888;\n  box-shadow:\n    0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),\n    0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.4);\n  margin: 15% auto;\n  max-width: 500px;\n  position: relative;\n  width: 80%;\n}\n\n@keyframes slideform {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n"]}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

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

/***/ "./src/images/beach.jpg":
/*!******************************!*\
  !*** ./src/images/beach.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d824b9339e2aa437254b10038578b4da.jpg");

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
  projectHeader.className = 'project-header';
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
  projectControls.className = 'project-controls';
  const buttons = document.createElement('div');
  buttons.className = 'buttons';
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
  const todoHeader = document.createElement('div');
  todoHeader.className = 'todo-header';
  const todoTitle = document.createElement('span');
  todoTitle.classList.add('todo-title');
  todoTitle.textContent = todo.getTitle();
  todoHeader.appendChild(todoTitle);
  return todoHeader;
};

const insertLineBreaks = (container, num) => {
  for (let i = 0; i < num; i += 1) {
    container.appendChild(document.createElement('br'));
  }
};

const createTodoContent = (todo) => {
  const todoContent = document.createElement('div');
  todoContent.classList.add('todo-content');
  const description = document.createElement('p');
  description.classList.add('todo-description');
  description.textContent = todo.getDescription();
  const dueDate = document.createElement('p');
  dueDate.classList.add('todo-duedate');
  dueDate.innerHTML = `Due on <span class="date">${todo.getDueDate()}</span>`;
  const notes = document.createElement('p');
  const priority = document.createElement('p');
  priority.classList.add('todo-priority');
  priority.innerHTML = `
  This task has <span class="${todo.getPriority()}">${todo.getPriority()}</span> priority`;
  notes.classList.add('todo-notes');
  notes.textContent = todo.getNotes();

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
  const todoControls = document.createElement('div');
  todoControls.className = 'todo-controls';
  todoControls.appendChild(deleteTodoButton);
  todoControls.appendChild(editTodoButton);

  todoContent.appendChild(description);
  todoContent.appendChild(dueDate);
  todoContent.appendChild(priority);
  todoContent.appendChild(notes);
  todoContent.appendChild(todoControls);

  insertLineBreaks(todoContent, 2);

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
descLabel.textContent = 'Description';
const descInput = document.createElement('input');
descInput.id = 'todo-desc-input';
descInput.type = 'text';
descInput.name = 'description';
descSection.appendChild(descLabel);
descSection.appendChild(document.createElement('br'));
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
dueDateLabel.textContent = 'Due Date';
const dueDateInput = document.createElement('input');
dueDateInput.id = 'todo-duedate-input';
dueDateInput.type = 'date';
dueDateInput.name = 'duedate';
dueDateSection.appendChild(dueDateLabel);
dueDateSection.appendChild(document.createElement('br'));
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
notesLabel.textContent = 'Notes';
const notesInput = document.createElement('textarea');
notesInput.id = 'todo-notes-input';
notesInput.name = 'notes';
notesInput.rows = '5';
notesInput.cols = '33';
notesInput.placeholder = 'Enter points of note for this todo...';
notesSection.appendChild(notesLabel);
notesSection.appendChild(document.createElement('br'));
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
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.id = titleLabel.htmlFor;
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleSection.appendChild(titleLabel);
  titleSection.appendChild(document.createElement('br'));
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
  const headerText = document.createElement('span');
  headerText.className = 'form-title';
  modalHeader.appendChild(headerText);
  modalHeader.appendChild(closeBtn);
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
h1.id = 'title-tag';
contentTag.appendChild(h1);

const modalContainer = document.createElement('div');
modalContainer.id = 'modal-box';
modalContainer.appendChild(Object(_form_builder_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('project'));
modalContainer.appendChild(Object(_form_builder_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('todo'));
contentTag.appendChild(modalContainer);

const displaySection = document.createElement('section');
displaySection.id = 'projects-data';

const projectControls = document.createElement('div');
projectControls.id = 'project-control';
const addProjectButton = document.createElement('button');
addProjectButton.id = 'add-project-btn';
addProjectButton.textContent = 'Add Project';
projectControls.appendChild(addProjectButton);
addProjectButton.onclick = () => {
  const modal = document.getElementById('project-form-box');
  modal.classList.toggle('show-form');
};
displaySection.appendChild(projectControls);

const attrib = document.createElement('div');
attrib.className = 'image-attrib';
attrib.innerHTML = `
<span>Photo by <a href="https://unsplash.com/@seantookthese?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sean O.</a> on <a href="https://unsplash.com/s/photos/beach?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
`;
document.body.appendChild(attrib);
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
/* harmony import */ var _example_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example_data */ "./src/js/models/example_data.js");



const storeAppData = ({ defaultProject, otherProjects }) => {
  const JSONifiedData = {};
  JSONifiedData.defaultProject = defaultProject.toJSON();
  JSONifiedData.otherProjects = otherProjects.map(project => project.toJSON());
  localStorage.setItem('projects', JSON.stringify(JSONifiedData));
};


const getAppData = () => {
  const data = {};
  let JSONifieddefaultProject;
  let JSONifiedotherProjects;
  const JSONifiedData = JSON.parse(localStorage.getItem('projects'));
  if (!JSONifiedData) {
    JSONifieddefaultProject = _example_data__WEBPACK_IMPORTED_MODULE_1__["fakeData"].defaultProject;
    JSONifiedotherProjects = _example_data__WEBPACK_IMPORTED_MODULE_1__["fakeData"].otherProjects;
  } else {
    JSONifieddefaultProject = JSONifiedData.defaultProject;
    JSONifiedotherProjects = JSONifiedData.otherProjects;
  }
  data.defaultProject = Object(_project_factory__WEBPACK_IMPORTED_MODULE_0__["projectFromJSON"])(JSONifieddefaultProject);
  data.otherProjects = JSONifiedotherProjects.map(projectData => Object(_project_factory__WEBPACK_IMPORTED_MODULE_0__["projectFromJSON"])(projectData));
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

/***/ "./src/js/models/example_data.js":
/*!***************************************!*\
  !*** ./src/js/models/example_data.js ***!
  \***************************************/
/*! exports provided: default, fakeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeData", function() { return fakeData; });
/* harmony import */ var _project_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_factory */ "./src/js/models/project_factory.js");


const fakeData = {
  defaultProject: {
    id: 0,
    title: 'Miscellaneous Tasks',
    todos: [
      {
        title: 'Basic Task',
        description: 'This is a basic task',
        dueDate: '2020-08-15',
        priority: 'medium',
        checklist: [],
        notes: 'Take of these things while doing this task.',
        projectId: 0,
        todoId: 0,
      },
    ],
  },
  otherProjects: [
    {
      id: 1,
      title: 'Main Project',
      todos: [
        {
          title: 'Walk Cat',
          description: 'Take the cat out for a walk',
          dueDate: '2020-08-15',
          priority: 'high',
          checklist: [],
          notes: 'Cat is known to have killed neighbourhood dogs. Don\'t\nLet her roam free.',
          projectId: 1,
          todoId: 0,
        },
        {
          title: 'Todo List',
          description: 'Make a todo list app in Javascript',
          dueDate: '2020-08-21',
          priority: 'medium',
          checklist: [],
          notes: 'Do the design first, and then work on the models etc.',
          projectId: 1,
          todoId: 1,
        },
      ],
    },
  ],
};

const defaultData = {
  defaultProject: Object(_project_factory__WEBPACK_IMPORTED_MODULE_0__["newProjectInstance"])('Miscellaneous Tasks', 0),
  otherProjects: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvYWNjb3JkaW9uLmNzcz80YTI3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hY2NvcmRpb24vc3JjL2FjY29yZGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvZm9sZC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvaGVscGVycy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvYWNjb3JkaW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLnNjc3M/M2ZmMCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JlYWNoLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGlzcGxheS9hY2NvcmRpb25fdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Rpc3BsYXkvYnV0dG9uX2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGlzcGxheS9jaGFuZ2VfZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaXNwbGF5L2NvbXBvbmVudHMvcHJvamVjdF9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaXNwbGF5L2NvbXBvbmVudHMvdG9kb19kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaXNwbGF5L2Rpc3BsYXlfcmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybV9idWlsZGVyL2NvbXBvbmVudHMvZGVzY3JpcHRpb25fc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybV9idWlsZGVyL2NvbXBvbmVudHMvZHVlX2RhdGVfc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybV9idWlsZGVyL2NvbXBvbmVudHMvbm90ZXNfc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybV9idWlsZGVyL2NvbXBvbmVudHMvcHJpb3JpdHlfc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybV9idWlsZGVyL2NvbXBvbmVudHMvc3VibWl0X3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9jb21wb25lbnRzL3RpdGxlX3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9mb3Jtcy9wcm9qZWN0X2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9mb3Jtcy90b2RvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1fYnVpbGRlci9tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtX2J1aWxkZXIvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbHMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWxzL2V4YW1wbGVfZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWxzL3Byb2plY3RfZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWxzL3RvZG9fZmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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S0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxXQUFXLE1BQU0sU0FBUyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFFBQVEsV0FBVyxXQUFXLFdBQVcsTUFBTSxRQUFRLFVBQVUsTUFBTSxRQUFRLFdBQVcsTUFBTSxRQUFRLFdBQVcsTUFBTSxRQUFRLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLFVBQVUsVUFBVSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8s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QUFFNEM7Ozs7Ozs7Ozs7Ozs7QUN0RDVDO0FBQUE7QUFBQTtBQUFBO0FBQXlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxLQUFLLDZEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFOEM7Ozs7Ozs7Ozs7Ozs7QUM1RC9DO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDhFQUFlLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FjY29yZGlvbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge3RyYW5zaXRpb25FbmQsIHNldFRva2VuLCBkZWJvdW5jZX0gZnJvbSBcIi4vaGVscGVycy5tanNcIjtcbmltcG9ydCB7ZGVmYXVsdCBhcyBGb2xkLCBmb2xkc30gZnJvbSBcIi4vZm9sZC5tanNcIjtcblxuY29uc3QgYWNjb3JkaW9ucyAgICAgPSBbXTtcbmxldCBhY3RpdmVBY2NvcmRpb25zID0gMDtcbmxldCBsYXN0UmVzaXplUmF0ZTtcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb2x1bW4gb2YgY29sbGFwc2libGUgY29udGVudCByZWdpb25zLlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG5cblx0LyoqXG5cdCAqIEluc3RhbnRpYXRlIGEgbmV3IEFjY29yZGlvbiBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgICAgICAgICAgICAgICAgICAgIC0gQ29udGFpbmVyIHdyYXBwZWQgYXJvdW5kIGVhY2ggaW1tZWRpYXRlIGZvbGRcblx0ICogQHBhcmFtIHtPYmplY3R9ICAgICAgb3B0aW9ucyAgICAgICAgICAgICAgIC0gT3B0aW9uYWwgaGFzaCBvZiBzZXR0aW5nc1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gICAgICBvcHRpb25zLm9wZW5DbGFzcyAgICAgLSBDU1MgY2xhc3MgY29udHJvbGxpbmcgZWFjaCBmb2xkJ3MgXCJvcGVuXCIgc3RhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9ICAgICAgb3B0aW9ucy5jbG9zZUNsYXNzICAgIC0gQ1NTIGNsYXNzIHVzZWQgdG8gbWFyayBhIGZvbGQgYXMgY2xvc2VkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSAgICAgIG9wdGlvbnMuZWRnZUNsYXNzICAgICAtIENTUyBjbGFzcyB0b2dnbGVkIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGJvdHRvbS1lZGdlIGlzIHZpc2libGVcblx0ICogQHBhcmFtIHtTdHJpbmd9ICAgICAgb3B0aW9ucy5zbmFwQ2xhc3MgICAgIC0gQ1NTIGNsYXNzIGZvciBkaXNhYmxpbmcgdHJhbnNpdGlvbnMgYmV0d2VlbiB3aW5kb3cgcmVzaXplc1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gICAgICBvcHRpb25zLmVuYWJsZWRDbGFzcyAgLSBDU1MgY2xhc3MgbWFya2luZyBhbiBhY2NvcmRpb24gYXMgZW5hYmxlZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gICAgICBvcHRpb25zLmRpc2FibGVkQ2xhc3MgLSBDU1MgY2xhc3MgbWFya2luZyBhbiBhY2NvcmRpb24gYXMgZGlzYWJsZWRcblx0ICogQHBhcmFtIHtCb29sZWFufSAgICAgb3B0aW9ucy5kaXNhYmxlZCAgICAgIC0gV2hldGhlciB0byBkaXNhYmxlIHRoZSBhY2NvcmRpb24gb24gY3JlYXRpb25cblx0ICogQHBhcmFtIHtCb29sZWFufSAgICAgb3B0aW9ucy5tb2RhbCAgICAgICAgIC0gV2hldGhlciB0byBjbG9zZSB0aGUgY3VycmVudCBmb2xkIHdoZW4gb3BlbmluZyBhbm90aGVyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gICAgIG9wdGlvbnMubm9BcmlhICAgICAgICAtIERpc2FibGUgdGhlIGFkZGl0aW9uIGFuZCBtYW5hZ2VtZW50IG9mIEFSSUEgYXR0cmlidXRlc1xuXHQgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICBvcHRpb25zLm5vS2V5cyAgICAgICAgLSBEaXNhYmxlIGtleWJvYXJkIG5hdmlnYXRpb25cblx0ICogQHBhcmFtIHtCb29sZWFufSAgICAgb3B0aW9ucy5ub1RyYW5zZm9ybXMgIC0gRGlzYWJsZSBDU1MgdHJhbnNmb3JtczsgcG9zaXRpb25pbmcgd2lsbCBiZSB1c2VkIGluc3RlYWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9ICAgICAgb3B0aW9ucy5oZWlnaHRPZmZzZXQgIC0gRGlzdGFuY2UgdG8gb2Zmc2V0IGVhY2ggZm9sZCBieVxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICBvcHRpb25zLnVzZUJvcmRlcnMgICAgLSBDb25zaWRlciBib3JkZXJzIHdoZW4gY2FsY3VsYXRpbmcgZm9sZCBoZWlnaHRzXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259ICAgIG9wdGlvbnMub25Ub2dnbGUgICAgICAtIENhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gb3BlbmluZyBvciBjbG9zaW5nIGEgZm9sZFxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKXtcblx0XHR0aGlzLmluZGV4ID0gYWNjb3JkaW9ucy5wdXNoKHRoaXMpIC0gMTtcblx0XHRcblx0XHQvLyBQYXJzZSBvcHRpb25zXG5cdFx0b3B0aW9ucyAgICAgICAgICAgID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wZW5DbGFzcyAgICAgPSBvcHRpb25zLm9wZW5DbGFzcyAgfHwgXCJvcGVuXCI7XG5cdFx0dGhpcy5jbG9zZUNsYXNzICAgID0gb3B0aW9ucy5jbG9zZUNsYXNzIHx8IFwiY2xvc2VkXCI7XG5cdFx0dGhpcy5lZGdlQ2xhc3MgICAgID0gKHVuZGVmaW5lZCA9PT0gb3B0aW9ucy5lZGdlQ2xhc3MgICAgPyBcImVkZ2UtdmlzaWJsZVwiIDogb3B0aW9ucy5lZGdlQ2xhc3MpO1xuXHRcdHRoaXMuc25hcENsYXNzICAgICA9ICh1bmRlZmluZWQgPT09IG9wdGlvbnMuc25hcENsYXNzICAgID8gXCJzbmFwXCIgICAgICAgICA6IG9wdGlvbnMuc25hcENsYXNzKTtcblx0XHR0aGlzLmVuYWJsZWRDbGFzcyAgPSAodW5kZWZpbmVkID09PSBvcHRpb25zLmVuYWJsZWRDbGFzcyA/IFwiYWNjb3JkaW9uXCIgICAgOiBvcHRpb25zLmVuYWJsZWRDbGFzcyk7XG5cdFx0dGhpcy5kaXNhYmxlZENsYXNzID0gb3B0aW9ucy5kaXNhYmxlZENsYXNzO1xuXHRcdHRoaXMubW9kYWwgICAgICAgICA9ICEhb3B0aW9ucy5tb2RhbDtcblx0XHR0aGlzLm5vQXJpYSAgICAgICAgPSAhIW9wdGlvbnMubm9BcmlhO1xuXHRcdHRoaXMubm9LZXlzICAgICAgICA9ICEhb3B0aW9ucy5ub0tleXM7XG5cdFx0dGhpcy5ub1RyYW5zZm9ybXMgID0gISFvcHRpb25zLm5vVHJhbnNmb3Jtcztcblx0XHR0aGlzLmhlaWdodE9mZnNldCAgPSArb3B0aW9ucy5oZWlnaHRPZmZzZXQgfHwgMDtcblx0XHR0aGlzLnVzZUJvcmRlcnMgICAgPSB1bmRlZmluZWQgPT09IG9wdGlvbnMudXNlQm9yZGVycyA/IFwiYXV0b1wiIDogb3B0aW9ucy51c2VCb3JkZXJzO1xuXHRcdHRoaXMub25Ub2dnbGUgICAgICA9IG9wdGlvbnMub25Ub2dnbGU7XG5cdFx0XG5cdFx0XG5cdFx0Ly8gQ3JlYXRlIGEgZm9sZCBmb3IgZWFjaCBpbW1lZGlhdGUgZGVzY2VuZGFudCBvZiB0aGUgQWNjb3JkaW9uJ3MgY29udGFpbmVyXG5cdFx0bGV0IGZvbGRzID0gW107XG5cdFx0Zm9yKGxldCBpIG9mIEFycmF5LmZyb20oZWwuY2hpbGRyZW4pKXtcblx0XHRcdGxldCBmb2xkID0gbmV3IEZvbGQodGhpcywgaSk7XG5cdFx0XHRmb2xkcy5wdXNoKGZvbGQpO1xuXHRcdFx0XG5cdFx0XHQvLyBDb25uZWN0IHRoZSBmb2xkIHRvIGl0cyBwcmV2aW91cyBzaWJsaW5nLCBpZiBpdCdzIG5vdCB0aGUgZmlyc3QgdG8gYmUgYWRkZWRcblx0XHRcdGxldCBwcmV2ID0gZm9sZHNbZm9sZHMubGVuZ3RoIC0gMl07XG5cdFx0XHRpZihwcmV2KXtcblx0XHRcdFx0cHJldi5uZXh0Rm9sZCAgICAgPSBmb2xkO1xuXHRcdFx0XHRmb2xkLnByZXZpb3VzRm9sZCA9IHByZXY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdGVsLmFjY29yZGlvbiAgICA9IHRoaXMuaW5kZXg7XG5cdFx0dGhpcy5ub0FyaWEgfHwgZWwuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRhYmxpc3RcIik7XG5cdFx0dGhpcy5lbCAgICAgICAgID0gZWw7XG5cdFx0dGhpcy5mb2xkcyAgICAgID0gZm9sZHM7XG5cblx0XHQvLyBBZGQgLmVuYWJsZWRDbGFzcyBlYXJseSAtIGl0IG1pZ2h0IGFmZmVjdCB0aGUgaGVpZ2h0cyBvZiBlYWNoIGZvbGRcblx0XHRpZighb3B0aW9ucy5kaXNhYmxlZCAmJiB0aGlzLmVuYWJsZWRDbGFzcylcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQodGhpcy5lbmFibGVkQ2xhc3MpO1xuXHRcdFxuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XG5cdFx0XG5cdFx0Ly8gRmluZCBvdXQgaWYgdGhpcyBhY2NvcmRpb24ncyBuZXN0ZWQgaW5zaWRlIGFub3RoZXJcblx0XHRsZXQgbmV4dCA9IGVsO1xuXHRcdHdoaWxlKChuZXh0ID0gbmV4dC5wYXJlbnROb2RlKSAmJiAxID09PSBuZXh0Lm5vZGVUeXBlKXtcblx0XHRcdGxldCBmb2xkID0gQWNjb3JkaW9uLmdldEZvbGQobmV4dCk7XG5cdFx0XHRpZihmb2xkKXtcblx0XHRcdFx0bGV0IGFjY29yZGlvbiAgID0gZm9sZC5hY2NvcmRpb247XG5cdFx0XHRcdHRoaXMucGFyZW50ICAgICA9IGFjY29yZGlvbjtcblx0XHRcdFx0dGhpcy5wYXJlbnRGb2xkID0gZm9sZDtcblx0XHRcdFx0dGhpcy5lZGdlQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmVkZ2VDbGFzcyk7XG5cdFx0XHRcdChhY2NvcmRpb24uY2hpbGRBY2NvcmRpb25zID0gYWNjb3JkaW9uLmNoaWxkQWNjb3JkaW9ucyB8fCBbXSkucHVzaCh0aGlzKTtcblx0XHRcdFx0KGZvbGQuY2hpbGRBY2NvcmRpb25zICAgICAgPSBmb2xkLmNoaWxkQWNjb3JkaW9ucyAgICAgIHx8IFtdKS5wdXNoKHRoaXMpO1xuXG5cdFx0XHRcdC8vIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluaW5nIGZvbGQncyBlbGVtZW50XG5cdFx0XHRcdGlmKGZvbGQub3Blbil7XG5cdFx0XHRcdFx0bGV0IHNjcm9sbEhlaWdodCA9IGZvbGQuZWwuc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0XHRcdGxldCBkaXN0YW5jZSAgICAgPSAoZm9sZC5oZWFkaW5nSGVpZ2h0ICsgZm9sZC5jb250ZW50LnNjcm9sbEhlaWdodCkgLSBzY3JvbGxIZWlnaHQgfHwgKHNjcm9sbEhlaWdodCAtIGZvbGQuZWwuY2xpZW50SGVpZ2h0KTtcblx0XHRcdFx0XHRhY2NvcmRpb24udXBkYXRlRm9sZChmb2xkLCBkaXN0YW5jZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdHRoaXMuZWRnZUNsYXNzICYmIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCB0aGlzLm9uVHJhbnNpdGlvbkVuZCA9IGUgPT4ge1xuXHRcdFx0aWYoIXRoaXMucGFyZW50ICYmIGUudGFyZ2V0ID09PSBlbCAmJiBcImhlaWdodFwiID09PSBlLnByb3BlcnR5TmFtZSAmJiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lZGdlQ2xhc3MpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHRoaXMuZGlzYWJsZWQgPSAhIW9wdGlvbnMuZGlzYWJsZWQ7XG5cdH1cblx0XG5cdFxuXHQvKipcblx0ICogR2V0IG9yIHNldCB0aGUgYWNjb3JkaW9uIGVuY2xvc2luZyB0aGlzIG9uZS5cblx0ICpcblx0ICogQHByb3BlcnR5XG5cdCAqIEB0eXBlIHtBY2NvcmRpb259XG5cdCAqL1xuXHRzZXQgcGFyZW50KGlucHV0KXsgdGhpcy5fcGFyZW50ID0gaW5wdXQ7IH1cblx0Z2V0IHBhcmVudCgpe1xuXHRcdGxldCByZXN1bHQgPSB0aGlzLl9wYXJlbnQ7XG5cdFx0aWYoIXJlc3VsdCkgcmV0dXJuIG51bGw7XG5cdFx0XG5cdFx0Ly8gU2VhcmNoIGZvciB0aGUgZmlyc3QgYW5jZXN0b3IgdGhhdCAqaXNuJ3QqIGRpc2FibGVkXG5cdFx0d2hpbGUocmVzdWx0KXtcblx0XHRcdGlmKCFyZXN1bHQuZGlzYWJsZWQpIHJldHVybiByZXN1bHQ7XG5cdFx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBHZXQgb3Igc2V0IHRoZSBmb2xkIG9mIHRoZSBhY2NvcmRpb24gZW5jbG9zaW5nIHRoaXMgb25lLlxuXHQgKlxuXHQgKiBAcHJvcGVydHlcblx0ICogQHR5cGUge0ZvbGR9XG5cdCAqL1xuXHRzZXQgcGFyZW50Rm9sZChpbnB1dCl7IHRoaXMuX3BhcmVudEZvbGQgPSBpbnB1dDsgfVxuXHRnZXQgcGFyZW50Rm9sZCgpe1xuXHRcdGxldCBmb2xkID0gdGhpcy5fcGFyZW50Rm9sZDtcblx0XHRpZighZm9sZCkgcmV0dXJuIG51bGw7XG5cdFx0XG5cdFx0bGV0IGFjY29yZGlvbiA9IGZvbGQuYWNjb3JkaW9uO1xuXHRcdFxuXHRcdC8vIFNlYXJjaCBmb3IgdGhlIGZpcnN0IGFuY2VzdG9yIHRoYXQgKmlzbid0KiBkaXNhYmxlZFxuXHRcdHdoaWxlKGZvbGQgJiYgYWNjb3JkaW9uKXtcblx0XHRcdGlmKCFhY2NvcmRpb24uZGlzYWJsZWQpIHJldHVybiBmb2xkO1xuXHRcdFx0aWYoYWNjb3JkaW9uID0gYWNjb3JkaW9uLnBhcmVudClcblx0XHRcdFx0Zm9sZCA9IGFjY29yZGlvbi5wYXJlbnRGb2xkO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRoZSBhY2NvcmRpb24ncyBiZWVuIGRlYWN0aXZhdGVkLlxuXHQgKlxuXHQgKiBAcHJvcGVydHlcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgZGlzYWJsZWQoKXsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG5cdHNldCBkaXNhYmxlZChpbnB1dCl7XG5cdFx0aWYoKGlucHV0ID0gISFpbnB1dCkgIT09IHRoaXMuX2Rpc2FibGVkKXtcblx0XHRcdGNvbnN0IGVsICAgICAgPSB0aGlzLmVsO1xuXHRcdFx0Y29uc3Qgc3R5bGUgICA9IGVsLnN0eWxlO1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGVsLmNsYXNzTGlzdDtcblx0XHRcdFxuXHRcdFx0dGhpcy5lbmFibGVkQ2xhc3MgICYmIHNldFRva2VuKGNsYXNzZXMsIHRoaXMuZW5hYmxlZENsYXNzLCAgIWlucHV0KTtcblx0XHRcdHRoaXMuZGlzYWJsZWRDbGFzcyAmJiBzZXRUb2tlbihjbGFzc2VzLCB0aGlzLmRpc2FibGVkQ2xhc3MsICBpbnB1dCk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8gRGVhY3RpdmF0aW5nXG5cdFx0XHRpZih0aGlzLl9kaXNhYmxlZCA9IGlucHV0KXtcblx0XHRcdFx0c3R5bGUuaGVpZ2h0ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5zbmFwQ2xhc3MgJiYgY2xhc3Nlcy5yZW1vdmUodGhpcy5zbmFwQ2xhc3MpO1xuXHRcdFx0XHRpZih0aGlzLmVkZ2VDbGFzcyl7XG5cdFx0XHRcdFx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCB0aGlzLm9uVHJhbnNpdGlvbkVuZCk7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5yZW1vdmUodGhpcy5lZGdlQ2xhc3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRmb3IobGV0IGkgb2YgdGhpcy5mb2xkcylcblx0XHRcdFx0XHRpLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMubm9BcmlhIHx8IGVsLnJlbW92ZUF0dHJpYnV0ZShcInJvbGVcIik7XG5cdFx0XHRcdC0tYWN0aXZlQWNjb3JkaW9ucztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvLyBSZWFjdGl2YXRpbmdcblx0XHRcdGVsc2V7XG5cdFx0XHRcdGZvcihsZXQgaSBvZiB0aGlzLmZvbGRzKVxuXHRcdFx0XHRcdGkuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMubm9BcmlhIHx8IGVsLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0YWJsaXN0XCIpO1xuXHRcdFx0XHQrK2FjdGl2ZUFjY29yZGlvbnM7XG5cdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0XG5cdFx0XHQvLyBJZiB0aGVyZSdyZSBubyBtb3JlIGFjdGl2ZSBhY2NvcmRpb25zLCBkaXNhYmxlIHRoZSBvblJlc2l6ZSBoYW5kbGVyXG5cdFx0XHRpZihhY3RpdmVBY2NvcmRpb25zIDw9IDApe1xuXHRcdFx0XHRhY3RpdmVBY2NvcmRpb25zID0gMDtcblx0XHRcdFx0QWNjb3JkaW9uLnNldFJlc2l6ZVJhdGUoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBPdGhlcndpc2UsIHJlYWN0aXZhdGUgdGhlIG9uUmVzaXplIGhhbmRsZXIsIGFzc3VtaW5nIGl0IHdhcyBwcmV2aW91c2x5IGFjdGl2ZVxuXHRcdFx0ZWxzZSBpZihsYXN0UmVzaXplUmF0ZSlcblx0XHRcdFx0QWNjb3JkaW9uLnNldFJlc2l6ZVJhdGUobGFzdFJlc2l6ZVJhdGUpO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogSGVpZ2h0IG9mIHRoZSBhY2NvcmRpb24ncyBjb250YWluZXIgZWxlbWVudC5cblx0ICpcblx0ICogQHByb3BlcnR5XG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqL1xuXHRnZXQgaGVpZ2h0KCl7IHJldHVybiB0aGlzLl9oZWlnaHQ7IH1cblx0c2V0IGhlaWdodChpbnB1dCl7XG5cdFx0aWYoaW5wdXQgJiYgKGlucHV0ID0gK2lucHV0KSAhPT0gdGhpcy5faGVpZ2h0KXtcblx0XHRcdHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gaW5wdXQgKyBcInB4XCI7XG5cdFx0XHR0aGlzLl9oZWlnaHQgICAgICAgICA9IGlucHV0O1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogSW50ZXJuYWwgbWV0aG9kIHRvIGNoZWNrIGlmIGFuIGFjY29yZGlvbidzIGJvdHRvbS1lZGdlIGlzIHZpc2libGUgdG8gdGhlIHVzZXIgKG9yIGFib3V0IHRvIGJlKS5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZWRnZUNoZWNrKG9mZnNldCl7XG5cdFx0bGV0IGVkZ2VDbGFzcyA9IHRoaXMuZWRnZUNsYXNzO1xuXHRcdGlmKGVkZ2VDbGFzcyl7XG5cdFx0XHRsZXQgYm94ICAgICAgICAgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0bGV0IHdpbmRvd0VkZ2UgID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdFx0bGV0IGNsYXNzZXMgICAgID0gdGhpcy5lbC5jbGFzc0xpc3Q7XG5cdFx0XHRcblx0XHRcdC8vIElmIHRoZSBib3R0b20tZWRnZSBpcyB2aXNpYmxlIChvciBhYm91dCB0byBiZSksIGVuYWJsZSBoZWlnaHQgYW5pbWF0aW9uXG5cdFx0XHRpZihib3guYm90dG9tICsgKG9mZnNldCB8fCAwKSA8IHdpbmRvd0VkZ2UpXG5cdFx0XHRcdGNsYXNzZXMuYWRkKGVkZ2VDbGFzcyk7XG5cdFx0XHRcblx0XHRcdC8vIElmIHRoZSBib3R0b20tZWRnZSBpc24ndCB2aXNpYmxlIGFueXdheSwgZGlzYWJsZSBoZWlnaHQgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0XHRlbHNlIGlmKGJveC5ib3R0b20gPiB3aW5kb3dFZGdlKVxuXHRcdFx0XHRjbGFzc2VzLnJlbW92ZShlZGdlQ2xhc3MpO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogVXBkYXRlIHRoZSB2ZXJ0aWNhbCBvcmRpbmF0ZSBvZiBlYWNoIHNpYmxpbmcgZm9yIGEgcGFydGljdWxhciBmb2xkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0ZvbGR9IGZvbGRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCAtIFBpeGVsIGRpc3RhbmNlIHRvIGFkanVzdCBieVxuXHQgKi9cblx0dXBkYXRlRm9sZChmb2xkLCBvZmZzZXQpe1xuXHRcdGxldCBuZXh0ID0gZm9sZDtcblx0XHRsZXQgcGFyZW50Rm9sZCA9IHRoaXMucGFyZW50Rm9sZDtcblx0XHRcblx0XHR3aGlsZShuZXh0ID0gbmV4dC5uZXh0Rm9sZClcblx0XHRcdG5leHQueSAgKz0gb2Zmc2V0O1xuXHRcdHBhcmVudEZvbGQgfHwgdGhpcy5lZGdlQ2hlY2sob2Zmc2V0KTtcblx0XHRmb2xkLmhlaWdodCArPSBvZmZzZXQ7XG5cdFx0dGhpcy5oZWlnaHQgKz0gb2Zmc2V0O1xuXHRcdFxuXHRcdHBhcmVudEZvbGQgJiYgcGFyZW50Rm9sZC5vcGVuICYmIHRoaXMucGFyZW50LnVwZGF0ZUZvbGQocGFyZW50Rm9sZCwgb2Zmc2V0KTtcblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGhlaWdodCBvZiBlYWNoIGZvbGQgdG8gZml0IGl0cyBjb250ZW50LlxuXHQgKi9cblx0dXBkYXRlKCl7XG5cdFx0bGV0IHkgPSAwO1xuXHRcdGxldCBoZWlnaHQgPSAwO1xuXHRcdGZvcihsZXQgaSBvZiB0aGlzLmZvbGRzKXtcblx0XHRcdGkueSA9IHk7XG5cdFx0XHRpLmZpdCgpO1xuXHRcdFx0eSAgICAgICs9IGkuaGVpZ2h0O1xuXHRcdFx0aGVpZ2h0ICs9IGkuaGVpZ2h0O1xuXHRcdH1cblx0XHRcblx0XHRsZXQgcGFyZW50Rm9sZCA9IHRoaXMucGFyZW50Rm9sZDtcblx0XHRsZXQgZGlmZiAgICAgICA9IGhlaWdodCAtIHRoaXMuX2hlaWdodDtcblx0XHRwYXJlbnRGb2xkXG5cdFx0XHQ/IChwYXJlbnRGb2xkLm9wZW4gJiYgdGhpcy5wYXJlbnQudXBkYXRlRm9sZChwYXJlbnRGb2xkLCBkaWZmKSlcblx0XHRcdDogdGhpcy5lZGdlQ2hlY2soZGlmZik7XG5cdFx0XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdH1cblx0XG5cdFxuXHRcblx0LyoqXG5cdCAqIFJlY2FsY3VsYXRlIHRoZSBib3VuZGFyaWVzIG9mIGFuIEFjY29yZGlvbiBhbmQgaXRzIGRlc2NlbmRhbnRzLlxuXHQgKlxuXHQgKiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgaWYgdGhlIHdpZHRoIG9mIGEgY29udGFpbmVyIGNoYW5nZXMsXG5cdCAqIG9yIGEgZm9sZCdzIGNvbnRlbnRzIGhhdmUgcmVzaXplZCB1bmV4cGVjdGVkbHkgKHN1Y2ggYXMgd2hlbiBpbWFnZXMgbG9hZCkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxsb3dTbmFwIC0gU25hcCBmb2xkcyBpbnN0YW50bHkgaW50byBwbGFjZSB3aXRob3V0IHRyYW5zaXRpb25pbmdcblx0ICovXG5cdHJlZnJlc2goYWxsb3dTbmFwKXtcblx0XHRsZXQgc25hcCA9IGFsbG93U25hcCA/IHRoaXMuc25hcENsYXNzIDogZmFsc2U7XG5cdFx0c25hcCAmJiB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoc25hcCk7XG5cdFx0XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHRpZih0aGlzLmNoaWxkQWNjb3JkaW9ucylcblx0XHRcdHRoaXMuY2hpbGRBY2NvcmRpb25zLmZvckVhY2goYSA9PiBhLnBhcmVudEZvbGQub3BlblxuXHRcdFx0XHQ/IGEucmVmcmVzaChhbGxvd1NuYXApXG5cdFx0XHRcdDogKGEucGFyZW50Rm9sZC5uZWVkc1JlZnJlc2ggPSB0cnVlKSk7XG5cdFx0XG5cdFx0c25hcCAmJiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShzbmFwKSwgMjApO1xuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBXaGV0aGVyIG9uZSBvZiB0aGUgQWNjb3JkaW9uJ3MgZm9sZHMgaGFzIGJlZW4gcmVzaXplZCBpbmNvcnJlY3RseS5cblx0ICpcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvcGVydHlcblx0ICovXG5cdGdldCB3cm9uZ1NpemUoKXtcblx0XHRmb3IobGV0IGkgb2YgdGhpcy5mb2xkcylcblx0XHRcdGlmKGkud3JvbmdTaXplKSByZXR1cm4gdHJ1ZTtcblx0XHRpZih0aGlzLmNoaWxkQWNjb3JkaW9ucykgZm9yKGxldCBpIG9mIHRoaXMuY2hpbGRBY2NvcmRpb25zKVxuXHRcdFx0aWYoaS53cm9uZ1NpemUpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB0b3AtbGV2ZWwgYW5jZXN0b3IgdGhpcyBhY2NvcmRpb24ncyBuZXN0ZWQgaW5zaWRlLlxuXHQgKlxuXHQgKiBAdHlwZSB7QWNjb3JkaW9ufVxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3BlcnR5XG5cdCAqL1xuXHRnZXQgcm9vdCgpe1xuXHRcdGxldCByZXN1bHQgPSB0aGlzO1xuXHRcdHdoaWxlKHJlc3VsdCl7XG5cdFx0XHRpZighcmVzdWx0LnBhcmVudCkgcmV0dXJuIHJlc3VsdDtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQ7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBBbHRlciB0aGUgcmF0ZSBhdCB3aGljaCBzY3JlZW4tcmVzaXplIGV2ZW50cyB1cGRhdGUgYWNjb3JkaW9uIHdpZHRocy5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IC0gUmF0ZSBleHByZXNzZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAqL1xuXHRzdGF0aWMgc2V0UmVzaXplUmF0ZShkZWxheSl7XG5cdFx0bGV0IGZuID0gZnVuY3Rpb24oKXtcblx0XHRcdGZvcihsZXQgaSBvZiBhY2NvcmRpb25zKVxuXHRcdFx0XHRpLnBhcmVudCB8fCBpLmRpc2FibGVkIHx8IGkucmVmcmVzaCh0cnVlKTtcblx0XHR9O1xuXHRcdFxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xuXHRcdFxuXHRcdC8vIE1ha2Ugc3VyZSB3ZSB3ZXJlbid0IHBhc3NlZCBhbiBleHBsaWNpdCB2YWx1ZSBvZiBGQUxTRSwgb3IgYSBuZWdhdGl2ZSB2YWx1ZVxuXHRcdGlmKGZhbHNlICE9PSBkZWxheSAmJiAoZGVsYXkgPSArZGVsYXkgfHwgMCkgPj0gMCl7XG5cdFx0XHR0aGlzLm9uUmVzaXplID0gZGVsYXkgPyBkZWJvdW5jZShmbiwgZGVsYXkpIDogZm47XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcblx0XHRcdGlmKGRlbGF5KSBsYXN0UmVzaXplUmF0ZSA9IGRlbGF5O1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBjbG9zZXN0IChtb3N0IGRlZXBseS1uZXN0ZWQpIGFjY29yZGlvbiBlbmNsb3NpbmcgYW4gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtOb2RlfSBub2RlXG5cdCAqIEByZXR1cm4ge0FjY29yZGlvbn1cblx0ICovXG5cdHN0YXRpYyBnZXRBY2NvcmRpb24obm9kZSl7XG5cdFx0d2hpbGUobm9kZSl7XG5cdFx0XHRpZihcImFjY29yZGlvblwiIGluIG5vZGUpXG5cdFx0XHRcdHJldHVybiBhY2NvcmRpb25zW25vZGUuYWNjb3JkaW9uXTtcblx0XHRcdFxuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRcdGlmKCFub2RlIHx8IG5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIGNsb3Nlc3QgKG1vc3QgZGVlcGx5LW5lc3RlZCkgZm9sZCBlbmNsb3NpbmcgYW4gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtOb2RlfSBub2RlXG5cdCAqIEByZXR1cm4ge0ZvbGR9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0Rm9sZChub2RlKXtcblx0XHR3aGlsZShub2RlKXtcblx0XHRcdGlmKFwiYWNjb3JkaW9uRm9sZFwiIGluIG5vZGUpXG5cdFx0XHRcdHJldHVybiBmb2xkc1tub2RlLmFjY29yZGlvbkZvbGRdO1xuXHRcdFx0XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0aWYoIW5vZGUgfHwgbm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG59XG5cblxuQWNjb3JkaW9uLnNldFJlc2l6ZVJhdGUoMjUpO1xud2luZG93LkFjY29yZGlvbiA9IEFjY29yZGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge1xuXHR0b3VjaEVuYWJsZWQsXG5cdHByZXNzRXZlbnQsXG5cdHNldFRva2VuLFxuXHR1bmlxdWVJRCxcblx0Y3NzVHJhbnNmb3JtLFxuXHRjc3MzRFN1cHBvcnRlZCxcbn0gZnJvbSBcIi4vaGVscGVycy5tanNcIjtcblxuZXhwb3J0IGNvbnN0IGZvbGRzID0gW107XG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIHBhbmVsIG9mIHRvZ2dsYWJsZSBjb250ZW50IGluc2lkZSBhbiBBY2NvcmRpb24uXG4gKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGR7XG5cdFxuXHQvKipcblx0ICogSW5zdGFudGlhdGUgYSBuZXcgRm9sZCBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHtBY2NvcmRpb259IGFjY29yZGlvblxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdGNvbnN0cnVjdG9yKGFjY29yZGlvbiwgZWwpe1xuXHRcdGxldCBoZWFkaW5nICAgICAgICAgID0gZWwuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0bGV0IGNvbnRlbnQgICAgICAgICAgPSBlbC5sYXN0RWxlbWVudENoaWxkO1xuXHRcdGxldCB1c2VCb3JkZXJzICAgICAgID0gYWNjb3JkaW9uLnVzZUJvcmRlcnM7XG5cdFx0XG5cdFx0dGhpcy5pbmRleCAgICAgICAgICAgPSBmb2xkcy5wdXNoKHRoaXMpIC0gMTtcblx0XHR0aGlzLmFjY29yZGlvbiAgICAgICA9IGFjY29yZGlvbjtcblx0XHR0aGlzLmVsICAgICAgICAgICAgICA9IGVsO1xuXHRcdHRoaXMuaGVhZGluZyAgICAgICAgID0gaGVhZGluZztcblx0XHR0aGlzLmNvbnRlbnQgICAgICAgICA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5vcGVuQ2xhc3MgICAgICAgPSBhY2NvcmRpb24ub3BlbkNsYXNzO1xuXHRcdHRoaXMuY2xvc2VDbGFzcyAgICAgID0gYWNjb3JkaW9uLmNsb3NlQ2xhc3M7XG5cdFx0dGhpcy5hcmlhRW5hYmxlZCAgICAgPSAhYWNjb3JkaW9uLm5vQXJpYTtcblx0XHR0aGlzLmhlaWdodE9mZnNldCAgICA9IGFjY29yZGlvbi5oZWlnaHRPZmZzZXQ7XG5cdFx0dGhpcy51c2VCb3JkZXJzICAgICAgPSBcImF1dG9cIiA9PT0gdXNlQm9yZGVycyA/ICgwICE9PSB0aGlzLmVsQm9yZGVyICsgdGhpcy5oZWFkaW5nQm9yZGVyKSA6IHVzZUJvcmRlcnM7XG5cdFx0dGhpcy51c2VUcmFuc2Zvcm1zICAgPSAhYWNjb3JkaW9uLm5vVHJhbnNmb3JtcyAmJiBjc3NUcmFuc2Zvcm07XG5cdFx0dGhpcy5vblRvZ2dsZSAgICAgICAgPSBhY2NvcmRpb24ub25Ub2dnbGU7XG5cdFx0ZWwuYWNjb3JkaW9uRm9sZCAgICAgPSB0aGlzLmluZGV4O1xuXHRcdFxuXHRcdFxuXHRcdC8vIEtleWJvYXJkIG5hdmlnYXRpb25cblx0XHRpZighYWNjb3JkaW9uLm5vS2V5cyl7XG5cdFx0XHRoZWFkaW5nLnRhYkluZGV4ID0gMDtcblx0XHRcdGhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbktleURvd24gPSBlID0+IHtcblx0XHRcdFx0Y29uc3Qga2V5ID0gZS5rZXlDb2RlO1xuXHRcdFx0XHRsZXQgZm9sZDtcblx0XHRcdFx0XG5cdFx0XHRcdHN3aXRjaChrZXkpe1xuXG5cdFx0XHRcdFx0Ly8gU3BhY2ViYXI6IFRvZ2dsZVxuXHRcdFx0XHRcdGNhc2UgMzI6XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIEZhbGwtdGhyb3VnaFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIEVudGVyOiBUb2dnbGVcblx0XHRcdFx0XHRjYXNlIDEzOlxuXHRcdFx0XHRcdFx0dGhpcy5vcGVuID0gIXRoaXMub3Blbjtcblx0XHRcdFx0XHRcdGlmKFwiQVwiID09PSBlLnRhcmdldC50YWdOYW1lKVxuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBFc2NhcGU6IENsZWFyIGZvY3VzXG5cdFx0XHRcdFx0Y2FzZSAyNzpcblx0XHRcdFx0XHRcdGUudGFyZ2V0LmJsdXIoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIFVwIGFycm93OiBQcmV2aW91cyBzZWN0aW9uXG5cdFx0XHRcdFx0Y2FzZSAzODp7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIElzIHRoZXJlIGEgcHJldmlvdXMgc2libGluZyB0byBuYXZpZ2F0ZSB1cCB0bz9cblx0XHRcdFx0XHRcdGlmKGZvbGQgPSB0aGlzLnByZXZpb3VzRm9sZCl7XG5cdFx0XHRcdFx0XHRcdGxldCBjaGlsZHJlbiA9IGZvbGQuY2hpbGRBY2NvcmRpb25zO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8gSXMgaXQgb3BlbiwgYW5kIGRvZXMgaXQgaGF2ZSBuZXN0ZWQgYWNjb3JkaW9ucz9cblx0XHRcdFx0XHRcdFx0aWYoZm9sZC5vcGVuICYmIGNoaWxkcmVuKXtcblx0XHRcdFx0XHRcdFx0XHRsZXQgbGFzdEFjYztcblx0XHRcdFx0XHRcdFx0XHRsZXQgbGFzdEZvbGQ7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0Ly8gTG9jYXRlIHRoZSBkZWVwZXN0L25lYXJlc3QgYWNjb3JkaW9uIHRoYXQncyBjdXJyZW50bHkgZXhwb3NlZFxuXHRcdFx0XHRcdFx0XHRcdHdoaWxlKGNoaWxkcmVuKXtcblx0XHRcdFx0XHRcdFx0XHRcdGxhc3RBY2MgID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0XHRcdFx0XHRsYXN0Rm9sZCA9IGxhc3RBY2MuZm9sZHNbbGFzdEFjYy5mb2xkcy5sZW5ndGggLSAxXTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKCFsYXN0Rm9sZC5vcGVuKSBicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gbGFzdEZvbGQuY2hpbGRBY2NvcmRpb25zO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRsYXN0Rm9sZC5oZWFkaW5nLmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIE5vcGVcblx0XHRcdFx0XHRcdFx0ZWxzZSBmb2xkLmhlYWRpbmcuZm9jdXMoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gSXMgdGhlcmUgYSBoaWdoZXIgbGV2ZWwgd2UgY2FuIGp1bXAgYmFjayB1cCB0bz9cblx0XHRcdFx0XHRcdGVsc2UgaWYodGhpcy5hY2NvcmRpb24ucGFyZW50KVxuXHRcdFx0XHRcdFx0XHR0aGlzLmFjY29yZGlvbi5wYXJlbnRGb2xkLmhlYWRpbmcuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gVGhlcmUncyBub3RoaW5nIHRvIG1vdmUgYmFjayB0bywgc28ganVzdCBsZXQgdGhlIGJyb3dzZXIgcnVuIGl0cyB1c3VhbCBiZWhhdmlvdXJcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gRG93biBhcnJvdzogTmV4dCBzZWN0aW9uXG5cdFx0XHRcdFx0Y2FzZSA0MDp7XG5cdFx0XHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRBY2NvcmRpb25zO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBJcyB0aGVyZSBhIG5lc3RlZCBhY2NvcmRpb24gdG8ganVtcCBpbnRvP1xuXHRcdFx0XHRcdFx0aWYodGhpcy5vcGVuICYmIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlblswXS5mb2xkc1swXS5oZWFkaW5nLmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIE5vLCB0aGVyZSBpc24ndC4gSXMgdGhlcmUgYW5vdGhlciBzaWJsaW5nIHRvIG1vdmUgZG93biB0bz9cblx0XHRcdFx0XHRcdGVsc2UgaWYoZm9sZCA9IHRoaXMubmV4dEZvbGQpXG5cdFx0XHRcdFx0XHRcdGZvbGQuaGVhZGluZy5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBJcyB0aGVyZSBhIGNvbnRhaW5pbmcgYWNjb3JkaW9uIHdlIGNhbiBuYXZpZ2F0ZSBiYWNrIHVwIHRvP1xuXHRcdFx0XHRcdFx0ZWxzZSBpZih0aGlzLmFjY29yZGlvbi5wYXJlbnQpe1xuXHRcdFx0XHRcdFx0XHRsZXQgcGFyZW50ID0gdGhpcztcblx0XHRcdFx0XHRcdFx0d2hpbGUocGFyZW50ID0gcGFyZW50LmFjY29yZGlvbi5wYXJlbnRGb2xkKVxuXHRcdFx0XHRcdFx0XHRcdGlmKGZvbGQgPSBwYXJlbnQubmV4dEZvbGQpe1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9sZC5oZWFkaW5nLmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyBOb3doZXJlIGxlZnQgdG8gZ28uLi5cblx0XHRcdFx0XHRcdFx0aWYoIXBhcmVudCkgcmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIE5haC4gSnVzdCBzY3JvbGwgdGhlIHdpbmRvdyBub3JtYWxseSwgYXMgcGVyIGJyb3dzZXIgZGVmYXVsdFxuXHRcdFx0XHRcdFx0ZWxzZSByZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBMZWZ0IGFycm93XG5cdFx0XHRcdFx0Y2FzZSAzNzp7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIENsb3NlIGFuIG9wZW5lZCBzZWN0aW9uXG5cdFx0XHRcdFx0XHRpZih0aGlzLm9wZW4pIHRoaXMub3BlbiA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBTd2l0Y2ggZm9jdXMgYmFjayB0byBwYXJlbnRcblx0XHRcdFx0XHRcdGVsc2UgaWYodGhpcy5hY2NvcmRpb24ucGFyZW50KVxuXHRcdFx0XHRcdFx0XHR0aGlzLmFjY29yZGlvbi5wYXJlbnRGb2xkLmhlYWRpbmcuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIFJpZ2h0IGFycm93XG5cdFx0XHRcdFx0Y2FzZSAzOTp7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIE9wZW4gYSBjbG9zZWQgc2VjdGlvblxuXHRcdFx0XHRcdFx0aWYoIXRoaXMub3BlbikgdGhpcy5vcGVuID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gU3dpdGNoIGZvY3VzIHRvIGEgbmVzdGVkIGFjY29yZGlvblxuXHRcdFx0XHRcdFx0ZWxzZSBpZih0aGlzLmNoaWxkQWNjb3JkaW9ucylcblx0XHRcdFx0XHRcdFx0dGhpcy5jaGlsZEFjY29yZGlvbnNbMF0uZm9sZHNbMF0uaGVhZGluZy5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHQvLyBMaXN0ZW5lciB0byByZWNvcmQgdGhlIHZpZXdwb3J0J3Mgc2Nyb2xsIG9mZnNldHMgYXQgdGhlIGJlZ2lubmluZyBvZiBhIHRvdWNoXG5cdFx0bGV0IHNjcm9sbFgsIHNjcm9sbFk7XG5cdFx0dG91Y2hFbmFibGVkICYmIGhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQgPSAoKSA9PiB7XG5cdFx0XHRzY3JvbGxYID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHRcdFx0c2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHR9LCB7cGFzc2l2ZTogdHJ1ZX0pO1xuXHRcdFxuXHRcdFxuXHRcdGhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcihwcmVzc0V2ZW50LCB0aGlzLm9uUHJlc3MgPSBlID0+IHtcblx0XHRcdFxuXHRcdFx0Ly8gUHJlc3NlZCBvbiBzb21ldGhpbmcgaW5zaWRlIHRoZSBoZWFkZXJcblx0XHRcdGlmKGUudGFyZ2V0ICE9PSBoZWFkaW5nICYmIGhlYWRpbmcuY29udGFpbnMoZS50YXJnZXQpKXtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIENhbmNlbCBmb2xkLXRvZ2dsZSBpZiB1c2VyIGNsaWNrZWQgb24gYW4gYW5jaG9yLWxpbmtcblx0XHRcdFx0aWYoXCJBXCIgPT09IGUudGFyZ2V0LnRhZ05hbWUgJiYgZS50YXJnZXQuaHJlZilcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoZS50eXBlICE9PSBcInRvdWNoZW5kXCIgfHwgKGUuY2FuY2VsYWJsZSAmJiB3aW5kb3cucGFnZVhPZmZzZXQgPT09IHNjcm9sbFggJiYgd2luZG93LnBhZ2VZT2Zmc2V0ID09PSBzY3JvbGxZKSl7XG5cdFx0XHRcdHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9KTtcblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogQWRqdXN0IGEgZm9sZCdzIGNvbnRhaW5lciB0byBmaXQgaXRzIGNvbnRlbnQuXG5cdCAqL1xuXHRmaXQoKXtcblx0XHRsZXQgaGVpZ2h0ID0gdGhpcy5oZWFkaW5nSGVpZ2h0O1xuXHRcdGlmKHRoaXMub3BlbikgICAgICAgIGhlaWdodCArPSB0aGlzLmNvbnRlbnQuc2Nyb2xsSGVpZ2h0O1xuXHRcdGlmKHRoaXMudXNlQm9yZGVycykgIGhlaWdodCArPSB0aGlzLmVsQm9yZGVyO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBBZGQgb3IgcmVtb3ZlIHJlbGV2YW50IEFSSUEgYXR0cmlidXRlcyBmcm9tIHRoZSBmb2xkJ3MgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEBwcm9wZXJ0eVxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBhcmlhRW5hYmxlZCgpeyByZXR1cm4gdGhpcy5fYXJpYUVuYWJsZWQ7IH1cblx0c2V0IGFyaWFFbmFibGVkKGlucHV0KXtcblx0XHRpZigoaW5wdXQgPSAhIWlucHV0KSAhPT0gISF0aGlzLl9hcmlhRW5hYmxlZCl7XG5cdFx0XHRjb25zdCBoZWFkaW5nID0gdGhpcy5oZWFkaW5nO1xuXHRcdFx0Y29uc3QgY29udGVudCA9IHRoaXMuY29udGVudDtcblx0XHRcdHRoaXMuX2FyaWFFbmFibGVkID0gaW5wdXQ7XG5cdFx0XHRcblx0XHRcdC8vIEVuYWJsZSBBUklBLWF0dHJpYnV0ZSBtYW5hZ2VtZW50XG5cdFx0XHRpZihpbnB1dCl7XG5cdFx0XHRcdGhlYWRpbmcuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRhYlwiKTtcblx0XHRcdFx0Y29udGVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwidGFicGFuZWxcIik7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0Ly8gRW5zdXJlIHRoZSBmb2xkJ3MgZWxlbWVudHMgaGF2ZSB1bmlxdWUgSUQgYXR0cmlidXRlcy5cblx0XHRcdFx0Y29uc3QgaGVhZGluZ1N1ZmZpeCA9IFwiLWhlYWRpbmdcIjtcblx0XHRcdFx0Y29uc3QgY29udGVudFN1ZmZpeCA9IFwiLWNvbnRlbnRcIjtcblx0XHRcdFx0bGV0IGVsSUQgICAgICAgICAgICA9IHRoaXMuZWwuaWQ7XG5cdFx0XHRcdGxldCBpZDtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIE5laXRoZXIgb2YgdGhlIGZvbGQncyBlbGVtZW50cyBoYXZlIGFuIElEIGF0dHJpYnV0ZVxuXHRcdFx0XHRpZighaGVhZGluZy5pZCAmJiAhY29udGVudC5pZCl7XG5cdFx0XHRcdFx0aWQgICAgICAgICAgICAgPSBlbElEIHx8IHVuaXF1ZUlEKFwiYVwiKTtcblx0XHRcdFx0XHRoZWFkaW5nLmlkICAgICA9IGlkICsgaGVhZGluZ1N1ZmZpeDtcblx0XHRcdFx0XHRjb250ZW50LmlkICAgICA9IGlkICsgY29udGVudFN1ZmZpeDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8gRWl0aGVyIHRoZSBoZWFkaW5nIG9yIGVsZW1lbnQgbGFjayBhbiBJRFxuXHRcdFx0XHRlbHNlIGlmKCFjb250ZW50LmlkKSBjb250ZW50LmlkICAgPSAoZWxJRCB8fCBoZWFkaW5nLmlkKSArIGNvbnRlbnRTdWZmaXg7XG5cdFx0XHRcdGVsc2UgaWYoIWhlYWRpbmcuaWQpIGhlYWRpbmcuaWQgICA9IChlbElEIHx8IGNvbnRlbnQuaWQpICsgaGVhZGluZ1N1ZmZpeDtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIEZpbmFsbHksIGRvdWJsZS1jaGVjayBlYWNoIGVsZW1lbnQncyBJRCBpcyByZWFsbHkgdW5pcXVlXG5cdFx0XHRcdGNvbnN0ICQgPSBzID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjXCIrcyk7XG5cdFx0XHRcdHdoaWxlKCQoY29udGVudC5pZCkubGVuZ3RoID4gMSB8fCAkKGhlYWRpbmcuaWQpLmxlbmd0aCA+IDEpe1xuXHRcdFx0XHRcdGlkICAgICAgICAgPSB1bmlxdWVJRChcImFcIik7XG5cdFx0XHRcdFx0Y29udGVudC5pZCA9IGlkICsgY29udGVudFN1ZmZpeDtcblx0XHRcdFx0XHRoZWFkaW5nLmlkID0gaWQgKyBoZWFkaW5nU3VmZml4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBVcGRhdGUgQVJJQSBhdHRyaWJ1dGVzXG5cdFx0XHRcdGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiLCAgICBjb250ZW50LmlkKTtcblx0XHRcdFx0Y29udGVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiwgIGhlYWRpbmcuaWQpO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdC8vIFVwZGF0ZSB0aGUgYXR0cmlidXRlcyB0aGF0J3JlIGNvbnRyb2xsZWQgYnkgLm9wZW4ncyBzZXR0ZXJcblx0XHRcdFx0aGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsICAhIXRoaXMuX29wZW4pO1xuXHRcdFx0XHRoZWFkaW5nLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgICEhdGhpcy5fb3Blbik7XG5cdFx0XHRcdGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgICAgICF0aGlzLl9vcGVuKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gRGlzYWJsaW5nOyByZW1vdmUgYWxsIHJlbGV2YW50IGF0dHJpYnV0ZXNcblx0XHRcdGVsc2V7XG5cdFx0XHRcdGhlYWRpbmcucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKTtcblx0XHRcdFx0aGVhZGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpO1xuXHRcdFx0XHRoZWFkaW5nLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIik7XG5cdFx0XHRcdGhlYWRpbmcucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKTtcblx0XHRcdFx0Y29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIik7XG5cdFx0XHRcdGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBXaGV0aGVyIG9yIG5vdCB0aGUgZm9sZCdzIGN1cnJlbnRseSBvcGVuZWQuXG5cdCAqXG5cdCAqIEBwcm9wZXJ0eVxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBvcGVuKCl7XG5cdFx0XG5cdFx0Ly8gRGVyaXZlIHRoZSBmb2xkJ3Mgb3BlbmVkIHN0YXRlIGZyb20gdGhlIERPTSBpZiBpdCdzIG5vdCBiZWVuIGRldGVybWluZWQgeWV0XG5cdFx0aWYodW5kZWZpbmVkID09PSB0aGlzLl9vcGVuKXtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLmVsLmNsYXNzTGlzdDtcblx0XHRcdHRoaXMuX29wZW4gICAgPSBjbGFzc2VzLmNvbnRhaW5zKHRoaXMub3BlbkNsYXNzKTtcblx0XHRcdHNldFRva2VuKGNsYXNzZXMsIHRoaXMuY2xvc2VDbGFzcywgIXRoaXMuX29wZW4pO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5fb3Blbjtcblx0fVxuXHRcblx0c2V0IG9wZW4oaW5wdXQpe1xuXHRcdGlmKChpbnB1dCA9ICEhaW5wdXQpICE9PSB0aGlzLl9vcGVuKXtcblx0XHRcdFxuXHRcdFx0Ly8gSWYgYW4gb25Ub2dnbGUgY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcnVuIGl0LiBBdm9pZCBkb2luZyBhbnl0aGluZyBpZiBpdCByZXR1cm5zIGZhbHNlLlxuXHRcdFx0aWYoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdGhpcy5vblRvZ2dsZSAmJiBmYWxzZSA9PT0gdGhpcy5vblRvZ2dsZS5jYWxsKG51bGwsIHRoaXMsIGlucHV0KSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XG5cdFx0XHRzZXRUb2tlbih0aGlzLmVsLmNsYXNzTGlzdCwgdGhpcy5vcGVuQ2xhc3MsICAgaW5wdXQpO1xuXHRcdFx0c2V0VG9rZW4odGhpcy5lbC5jbGFzc0xpc3QsIHRoaXMuY2xvc2VDbGFzcywgIWlucHV0KTtcblx0XHRcdHRoaXMuX29wZW4gPSBpbnB1dDtcblx0XHRcdFxuXHRcdFx0Ly8gVXBkYXRlIEFSSUEgYXR0cmlidXRlc1xuXHRcdFx0aWYodGhpcy5hcmlhRW5hYmxlZCl7XG5cdFx0XHRcdGNvbnN0IGhlYWRpbmcgPSB0aGlzLmhlYWRpbmc7XG5cdFx0XHRcdGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCAgICAgIGlucHV0KTtcblx0XHRcdFx0aGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsICAgICAgaW5wdXQpO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgICFpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIElmIHRoaXMgZm9sZCB3YXMgY2xvc2VkIHdoZW4gdGhlIHNjcmVlbiByZXNpemVkLCBydW4gYSBmdWxsIHVwZGF0ZSBpbiBjYXNlIGl0cyBjb250ZW50cyB3ZXJlIGp1Z2dsZWQgYXJvdW5kXG5cdFx0XHRpZih0aGlzLm5lZWRzUmVmcmVzaCl7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLm5lZWRzUmVmcmVzaDtcblx0XHRcdFx0dGhpcy5hY2NvcmRpb24ucmVmcmVzaCgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aGlzLmFjY29yZGlvbi51cGRhdGUoKTtcblx0XHRcdFxuXHRcdFx0Ly8gQ2xvc2Ugb3RoZXIgZm9sZHMgaWYgYWNjb3JkaW9uIGlzIG1vZGFsXG5cdFx0XHRpZih0aGlzLmFjY29yZGlvbi5tb2RhbCAmJiBpbnB1dCl7XG5cdFx0XHRcdGZvcihjb25zdCBmb2xkIG9mIHRoaXMuYWNjb3JkaW9uLmZvbGRzKVxuXHRcdFx0XHRcdGlmKHRoaXMgIT09IGZvbGQpIGZvbGQub3BlbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogV2hldGhlciB0aGUgZm9sZCdzIGJlZW4gZGVhY3RpdmF0ZWQuXG5cdCAqXG5cdCAqIE5vdCBzZXQgZGlyZWN0bHk7IGNoYW5nZWQgd2hlbiBzZXR0aW5nIGFuIGFjY29yZGlvbidzIC5kaXNhYmxlZCBwcm9wZXJ0eS5cblx0ICpcblx0ICogQHByb3BlcnR5XG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IGRpc2FibGVkKCl7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuXHRzZXQgZGlzYWJsZWQoaW5wdXQpe1xuXHRcdGlmKChpbnB1dCA9ICEhaW5wdXQpICE9PSAhIXRoaXMuX2Rpc2FibGVkKXtcblx0XHRcdGxldCBoZWFkaW5nID0gdGhpcy5oZWFkaW5nO1xuXHRcdFx0bGV0IHN0eWxlICAgPSB0aGlzLmVsLnN0eWxlO1xuXHRcdFx0bGV0IGNsYXNzZXMgPSB0aGlzLmVsLmNsYXNzTGlzdDtcblx0XHRcdFxuXHRcdFx0Ly8gRGVhY3RpdmF0ZWRcblx0XHRcdGlmKHRoaXMuX2Rpc2FibGVkID0gaW5wdXQpe1xuXHRcdFx0XHRzdHlsZS5oZWlnaHQgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnVzZVRyYW5zZm9ybXNcblx0XHRcdFx0XHQ/IChzdHlsZVtjc3NUcmFuc2Zvcm1dID0gbnVsbClcblx0XHRcdFx0XHQ6IChzdHlsZS50b3AgPSBudWxsKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRvdWNoRW5hYmxlZCAmJiBoZWFkaW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaFN0YXJ0KTtcblx0XHRcdFx0aGVhZGluZy5yZW1vdmVFdmVudExpc3RlbmVyKHByZXNzRXZlbnQsIHRoaXMub25QcmVzcyk7XG5cdFx0XHRcdGNsYXNzZXMucmVtb3ZlKHRoaXMub3BlbkNsYXNzLCB0aGlzLmNsb3NlQ2xhc3MpO1xuXHRcdFx0XHRpZih0aGlzLm9uS2V5RG93bil7XG5cdFx0XHRcdFx0aGVhZGluZy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XG5cdFx0XHRcdFx0aGVhZGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYodGhpcy5hcmlhRW5hYmxlZCl7XG5cdFx0XHRcdFx0dGhpcy5hcmlhRW5hYmxlZCAgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLl9hcmlhRW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gUmVhY3RpdmF0ZWRcblx0XHRcdGVsc2V7XG5cdFx0XHRcdHN0eWxlLmhlaWdodCA9IHRoaXMuX2hlaWdodCArIFwicHhcIjtcblx0XHRcdFx0dGhpcy51c2VUcmFuc2Zvcm1zXG5cdFx0XHRcdFx0PyBzdHlsZVtjc3NUcmFuc2Zvcm1dID1cblx0XHRcdFx0XHRcdGNzczNEU3VwcG9ydGVkXG5cdFx0XHRcdFx0XHRcdD8gKFwidHJhbnNsYXRlM0QoMCxcIiArIHRoaXMuX3kgKyBcInB4LDApXCIpXG5cdFx0XHRcdFx0XHRcdDogKFwidHJhbnNsYXRlWShcIiAgICArIHRoaXMuX3kgKyBcInB4KVwiKVxuXHRcdFx0XHRcdDogKHN0eWxlLnRvcCA9IHRoaXMuX3kgKyBcInB4XCIpO1xuXHRcdFx0XHRcblx0XHRcdFx0dG91Y2hFbmFibGVkICYmIGhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQpO1xuXHRcdFx0XHRoZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIocHJlc3NFdmVudCwgdGhpcy5vblByZXNzKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHRoaXMub25LZXlEb3duKXtcblx0XHRcdFx0XHRoZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcblx0XHRcdFx0XHRoZWFkaW5nLnRhYkluZGV4ID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBWZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgZm9sZCB3aXRoaW4gYW4gYWNjb3JkaW9uJ3MgY29udGFpbmVyLlxuXHQgKlxuXHQgKiBAcHJvcGVydHlcblx0ICogQHR5cGUge051bWJlcn1cblx0ICovXG5cdGdldCB5KCl7XG5cdFx0aWYodW5kZWZpbmVkID09PSB0aGlzLl95KVxuXHRcdFx0cmV0dXJuICh0aGlzLl95ID0gcGFyc2VJbnQodGhpcy5lbC5zdHlsZS50b3ApIHx8IDApO1xuXHRcdHJldHVybiB0aGlzLl95O1xuXHR9XG5cdFxuXHRzZXQgeShpbnB1dCl7XG5cdFx0aWYoKGlucHV0ID0gK2lucHV0KSAhPT0gdGhpcy5feSl7XG5cdFx0XHR0aGlzLl95ICAgICA9IGlucHV0O1xuXHRcdFx0Y29uc3Qgc3R5bGUgPSB0aGlzLmVsLnN0eWxlO1xuXHRcdFx0dGhpcy51c2VUcmFuc2Zvcm1zXG5cdFx0XHRcdD8gc3R5bGVbY3NzVHJhbnNmb3JtXSA9XG5cdFx0XHRcdFx0Y3NzM0RTdXBwb3J0ZWRcblx0XHRcdFx0XHRcdD8gKFwidHJhbnNsYXRlM0QoMCxcIiArIGlucHV0ICsgXCJweCwwKVwiKVxuXHRcdFx0XHRcdFx0OiAoXCJ0cmFuc2xhdGVZKFwiICAgICsgaW5wdXQgKyBcInB4KVwiKVxuXHRcdFx0XHQ6IChzdHlsZS50b3AgPSBpbnB1dCArIFwicHhcIik7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0XG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIGZvbGQncyBvdXRlcm1vc3QgY29udGFpbmVyLlxuXHQgKlxuXHQgKiBAcHJvcGVydHlcblx0ICogQHR5cGUge051bWJlcn1cblx0ICovXG5cdGdldCBoZWlnaHQoKXtcblx0XHRpZih1bmRlZmluZWQgPT09IHRoaXMuX2hlaWdodCl7XG5cdFx0XHRsZXQgaGVpZ2h0ICAgICAgICAgICA9IHRoaXMuaGVhZGluZ0hlaWdodCArIHRoaXMuY29udGVudC5zY3JvbGxIZWlnaHQ7XG5cdFx0XHR0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcblx0XHRcdHJldHVybiAodGhpcy5faGVpZ2h0ID0gaGVpZ2h0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2hlaWdodDtcblx0fVxuXHRcblx0c2V0IGhlaWdodChpbnB1dCl7XG5cdFx0aWYoaW5wdXQgJiYgKGlucHV0ID0gK2lucHV0KSAhPT0gdGhpcy5faGVpZ2h0KXtcblx0XHRcdHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gaW5wdXQgKyBcInB4XCI7XG5cdFx0XHR0aGlzLl9oZWlnaHQgICAgICAgICA9IGlucHV0O1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdFxuXHQvKipcblx0ICogQ3VycmVudCBoZWlnaHQgb2YgdGhlIGZvbGQncyBoZWFkaW5nLlxuXHQgKlxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAcmVhZG9ubHlcblx0ICovXG5cdGdldCBoZWFkaW5nSGVpZ2h0KCl7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGluZy5zY3JvbGxIZWlnaHRcblx0XHRcdCsgdGhpcy5oZWlnaHRPZmZzZXRcblx0XHRcdCsgKHRoaXMudXNlQm9yZGVycyA/IHRoaXMuaGVhZGluZ0JvcmRlciA6IDApO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVG90YWwgaGVpZ2h0IGNvbnN1bWVkIGJ5IHRoZSBoZWFkaW5nIGVsZW1lbnQncyBDU1MgYm9yZGVycywgaWYgYW55LlxuXHQgKlxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAcmVhZG9ubHlcblx0ICovXG5cdGdldCBoZWFkaW5nQm9yZGVyKCl7XG5cdFx0bGV0IGhlYWRpbmcgPSB0aGlzLmhlYWRpbmc7XG5cdFx0cmV0dXJuIChoZWFkaW5nLm9mZnNldEhlaWdodCB8fCAwKSAtIChoZWFkaW5nLmNsaWVudEhlaWdodCB8fCAwKTtcblx0fVxuXHRcblx0XG5cdC8qKlxuXHQgKiBUb3RhbCBoZWlnaHQgb2YgdGhlIGZvbGQncyBjb250YWluZXIgZWxlbWVudC5cblx0ICpcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQHJlYWRvbmx5XG5cdCAqL1xuXHRnZXQgZWxIZWlnaHQoKXtcblx0XHRyZXR1cm4gdGhpcy5lbC5zY3JvbGxIZWlnaHQgKyAodGhpcy51c2VCb3JkZXJzID8gdGhpcy5lbEJvcmRlciA6IDApO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVG90YWwgaGVpZ2h0IGNvbnN1bWVkIGJ5IGNvbnRhaW5lciBlbGVtZW50J3MgQ1NTIGJvcmRlcnMsIGlmIGFueS5cblx0ICogXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEByZWFkb25seVxuXHQgKi9cblx0Z2V0IGVsQm9yZGVyKCl7XG5cdFx0bGV0IGVsID0gdGhpcy5lbDtcblx0XHRyZXR1cm4gKGVsLm9mZnNldEhlaWdodCB8fCAwKSAtIChlbC5jbGllbnRIZWlnaHQgfHwgMCk7XG5cdH1cblx0XG5cdFxuXHQvKipcblx0ICogV2hldGhlciB0aGUgZm9sZCdzIGNvbnRhaW5lciBoYXMgYmVlbiByZXNpemVkIGluY29ycmVjdGx5LlxuXHQgKlxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICogQHJlYWRvbmx5XG5cdCAqIEBwcm9wZXJ0eVxuXHQgKi9cblx0Z2V0IHdyb25nU2l6ZSgpe1xuXHRcdHJldHVybiB0aGlzLmhlYWRpbmdIZWlnaHQgKyB0aGlzLmNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICE9PSB0aGlzLmVsLnNjcm9sbEhlaWdodDtcblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCB0b3VjaEVuYWJsZWQgPSBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbmV4cG9ydCBjb25zdCBwcmVzc0V2ZW50ICAgPSB0b3VjaEVuYWJsZWQgPyBcInRvdWNoZW5kXCIgOiBcImNsaWNrXCI7XG5cblxuLyoqXG4gKiBOYW1lIG9mIHRoZSBvblRyYW5zaXRpb25FbmQgZXZlbnQgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cbiAqIEBjb25zdCB7U3RyaW5nfSB0cmFuc2l0aW9uRW5kXG4gKi9cbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uRW5kID0gKGZ1bmN0aW9uKCl7XG5cdGNvbnN0IG5hbWVzID0gXCJ0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmRcIi5zcGxpdChcIiBcIik7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpXG5cdFx0aWYoXCJvblwiICsgbmFtZXNbaV0udG9Mb3dlckNhc2UoKSBpbiB3aW5kb3cpXG5cdFx0XHRyZXR1cm4gbmFtZXNbaV07XG5cdHJldHVybiBuYW1lc1swXTtcbn0oKSk7XG5cblxuXG4vKipcbiAqIENvbmRpdGlvbmFsbHkgYWRkIG9yIHJlbW92ZSBhIHRva2VuIGZyb20gYSB0b2tlbi1saXN0LlxuICpcbiAqIEBwYXJhbSB7RE9NVG9rZW5MaXN0fSBsaXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdG9rZW5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5hYmxlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9rZW4obGlzdCwgdG9rZW4sIGVuYWJsZWQpe1xuXHRlbmFibGVkID8gbGlzdC5hZGQodG9rZW4pIDogbGlzdC5yZW1vdmUodG9rZW4pO1xufVxuXG5cblxuLyoqXG4gKiBTdG9wIGEgZnVuY3Rpb24gZnJvbSBmaXJpbmcgdG9vIHF1aWNrbHkuXG4gKlxuICogUmV0dXJucyBhIGNvcHkgb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHRoYXQgcnVucyBvbmx5IGFmdGVyIHRoZSBkZXNpZ25hdGVkXG4gKiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZC4gVXNlZnVsIGZvciB0aHJvdHRsaW5nIG9uUmVzaXplIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gRnVuY3Rpb24gdG8gZGVib3VuY2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBbbGltaXQ9MF0gLSBUaHJlc2hvbGQgdG8gc3RhbGwgZXhlY3V0aW9uIGJ5LCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthc2FwPWZhbHNlXSAtIENhbGwgZnVuY3Rpb24gKmJlZm9yZSogdGhyZXNob2xkIGVsYXBzZXMsIG5vdCBhZnRlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZm4sIGxpbWl0ID0gMCwgYXNhcCA9IGZhbHNlKXtcblx0bGV0IHN0YXJ0ZWQsIGNvbnRleHQsIGFyZ3MsIHRpbWluZztcblx0XG5cdGNvbnN0IGRlbGF5ZWQgPSBmdW5jdGlvbigpe1xuXHRcdGNvbnN0IHRpbWVTaW5jZSA9IERhdGUubm93KCkgLSBzdGFydGVkO1xuXHRcdGlmKHRpbWVTaW5jZSA+PSBsaW1pdCl7XG5cdFx0XHRpZighYXNhcCkgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0XHRpZih0aW1pbmcpIGNsZWFyVGltZW91dCh0aW1pbmcpO1xuXHRcdFx0dGltaW5nID0gY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuXHRcdH1cblx0XHRlbHNlIHRpbWluZyA9IHNldFRpbWVvdXQoZGVsYXllZCwgbGltaXQgLSB0aW1lU2luY2UpO1xuXHR9O1xuXHRcblx0Ly8gRGVib3VuY2VkIGNvcHkgb2Ygb3JpZ2luYWwgZnVuY3Rpb25cblx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0Y29udGV4dCA9IHRoaXMsXG5cdFx0YXJncyAgICA9IGFyZ3VtZW50cztcblx0XHRpZighbGltaXQpXG5cdFx0XHRyZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0c3RhcnRlZCA9IERhdGUubm93KCk7XG5cdFx0aWYoIXRpbWluZyl7XG5cdFx0XHRpZihhc2FwKSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdHRpbWluZyA9IHNldFRpbWVvdXQoZGVsYXllZCwgbGltaXQpO1xuXHRcdH1cblx0fTtcbn1cblxuXG5cbmV4cG9ydCBjb25zdCB1bmlxdWVJRCA9IChmdW5jdGlvbigpe1xuXHRjb25zdCBJRHMgICAgID0ge307XG5cdGNvbnN0IGluZGV4ZXMgPSB7fTtcblx0XG5cdFxuXHQvKipcblx0ICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGEgRE9NIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEJ5IGRlZmF1bHQsIG1pbmltYWxpc3QgSURzIGxpa2UgXCJfMVwiIG9yIFwiXzJcIiBhcmUgZ2VuZXJhdGVkIHVzaW5nIGludGVybmFsbHlcblx0ICogdHJhY2tlZCBpbmNyZW1lbnRhdGlvbi4gVWdsaWVyLCBtb3JlIGNvbGxpc2lvbi1wcm9vZiBJRHMgY2FuIGJlIGdlbmVyYXRlZCBieVxuXHQgKiBwYXNzaW5nIGEgdHJ1dGh5IHZhbHVlIHRvIHRoZSBmdW5jdGlvbidzIGZpcnN0IGFyZ3VtZW50LlxuXHQgKlxuXHQgKiBJcnJlc3BlY3RpdmUgb2Ygd2hldGhlciB2YWx1ZXMgYXJlIGJlaW5nIGdlbmVyYXRlZCBzaW1wbHkgb3IgcmFuZG9tbHksIHRoZVxuXHQgKiBkb2N1bWVudCB0cmVlIGlzIGFsd2F5cyBjb25zdWx0ZWQgZmlyc3QgdG8gZW5zdXJlIGEgZHVwbGljYXRlIElEIGlzIG5ldmVyXG5cdCAqIHJldHVybmVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gIHByZWZpeCAtIFByZWZpeCBwcmVwZW5kZWQgdG8gcmVzdWx0LiBEZWZhdWx0OiBcIl9cIlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IHJhbmRvbSAtIEdlbmVyYXRlIGNvbGxpc2lvbi1wcm9vZiBJRHMgdXNpbmcgcmFuZG9tIHN5bWJvbHNcblx0ICogQHBhcmFtIHtOdW1iZXJ9ICBsZW5ndGggLSBMZW5ndGggb2YgcmFuZG9tIHBhc3N3b3Jkcy4gRGVmYXVsdDogNlxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRmdW5jdGlvbiB1bmlxdWVJRChwcmVmaXgsIGNvbXBsZXgsIGxlbmd0aCl7XG5cdFx0bGVuZ3RoICAgICA9ICsobGVuZ3RoIHx8IDYpO1xuXHRcdGxldCByZXN1bHQgPSAgKHByZWZpeCA9IHByZWZpeCB8fCBcIl9cIik7XG5cdFx0XG5cdFx0Ly8gU2ltcGxlIElEc1xuXHRcdGlmKCFjb21wbGV4KXtcblx0XHRcdFxuXHRcdFx0Ly8gU2V0IHRoaXMgcHJlZml4J3Mgc3RhcnRpbmcgaW5kZXggaWYgaXQncyBub3QgYmVlbiB1c2VkIHlldFxuXHRcdFx0aWYoIWluZGV4ZXNbcHJlZml4XSlcblx0XHRcdFx0aW5kZXhlc1twcmVmaXhdID0gMDtcblx0XHRcdFxuXHRcdFx0cmVzdWx0ICs9ICsraW5kZXhlc1twcmVmaXhdO1xuXHRcdH1cblx0XHRcblx0XHQvLyBVZ2xpZXIsIG1vcmUgY29sbGlzaW9uLXByb29mIElEc1xuXHRcdGVsc2V7XG5cdFx0XHRjb25zdCBjaGFycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcblx0XHRcdHJlc3VsdCArPSBjaGFyc1sgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTEpIF07XG5cdFx0XHR3aGlsZShyZXN1bHQubGVuZ3RoIDwgbGVuZ3RoKVxuXHRcdFx0XHRyZXN1bHQgKz0gY2hhcnNbIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYxKV07XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBJRHNbcmVzdWx0XSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXN1bHQpXG5cdFx0XHQ/IHVuaXF1ZUlEKHByZWZpeCwgY29tcGxleClcblx0XHRcdDogKElEc1tyZXN1bHRdID0gdHJ1ZSwgcmVzdWx0KTtcblx0fVxuXHRcblx0XG5cdHJldHVybiB1bmlxdWVJRDtcbn0oKSk7XG5cblxuXG4vLyBOYW1lIG9mIHRoZSBDU1NPTSBwcm9wZXJ0eSB1c2VkIGJ5IHRoaXMgYnJvd3NlciBmb3IgQ1NTIHRyYW5zZm9ybXNcbmV4cG9ydCBjb25zdCBjc3NUcmFuc2Zvcm0gPSAoZnVuY3Rpb24obil7XG5cdHMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cdGlmKChwcm9wID0gbi50b0xvd2VyQ2FzZSgpKSBpbiBzKSByZXR1cm4gcHJvcDtcblx0Zm9yKHZhciBwcm9wLCBzLCBwID0gXCJXZWJraXQgTW96IE1zIE8gS2h0bWxcIiwgcCA9IChwLnRvTG93ZXJDYXNlKCkgKyBwKS5zcGxpdChcIiBcIiksIGkgPSAwOyBpIDwgMTA7ICsraSlcblx0XHRpZigocHJvcCA9IHBbaV0rbikgaW4gcykgcmV0dXJuIHByb3A7XG5cdHJldHVybiBcIlwiO1xufShcIlRyYW5zZm9ybVwiKSk7XG5cblxuLy8gV2hldGhlciAzRCB0cmFuc2Zvcm1zIGFyZSBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyXG5leHBvcnQgY29uc3QgY3NzM0RTdXBwb3J0ZWQgPSAoZnVuY3Rpb24ocHJvcE5hbWUpe1xuXHRjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgcyA9IGUuc3R5bGU7XG5cdGNvbnN0IHYgPSBbW1widHJhbnNsYXRlWShcIiwgXCIpXCJdLCBbXCJ0cmFuc2xhdGUzZCgwLFwiLCBcIiwwKVwiXV07XG5cdHRyeXsgc1twcm9wTmFtZV0gPSB2WzFdLmpvaW4oXCIxcHhcIik7IH0gY2F0Y2goZSl7fVxuXHRyZXR1cm4gdlsrISFzW3Byb3BOYW1lXV0gPT09IHZbMV07XG59KGNzc1RyYW5zZm9ybSkpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiogQ29yZSBzdHlsaW5nICovXFxuLmFjY29yZGlvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmFjY29yZGlvbiA+ICoge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hY2NvcmRpb24gPiAqLFxcbi5hY2NvcmRpb24uZWRnZS12aXNpYmxlLFxcbi5hY2NvcmRpb24gLmFjY29yZGlvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxuICAtby10cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcXG59XFxuXFxuLyoqIFRyYW5zZm9ybS1yZWxhdGVkICovXFxuLmFjY29yZGlvbixcXG4uYWNjb3JkaW9uID4gKiB7XFxuICB3aWxsLWNoYW5nZTogaGVpZ2h0LCB0cmFuc2Zvcm07XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA5MGVtO1xcbiAgLW1vei1wZXJzcGVjdGl2ZTogOTBlbTtcXG4gIHBlcnNwZWN0aXZlOiA5MGVtO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLyoqIFJ1bGUgdG8gZGlzYWJsZSB0cmFuc2l0aW9ucyBiZXR3ZWVuIGdhcCBjb3JyZWN0aW9ucyAqL1xcbi5zbmFwLmFjY29yZGlvbiA+ICosXFxuLnNuYXAuYWNjb3JkaW9uIC5hY2NvcmRpb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqIEhlYWRpbmdzICovXFxuLmFjY29yZGlvbiA+ICogPiA6Zmlyc3QtY2hpbGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyoqIENvbGxhcHNpYmxlIGNvbnRlbnQgKi9cXG4uYWNjb3JkaW9uID4gKiA+IDpsYXN0LWNoaWxkIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZSBoZWlnaHQsIDAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGVhc2UgaGVpZ2h0LCAwLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG4gIC1vLXRyYW5zaXRpb246IDAuM3MgZWFzZSBoZWlnaHQsIDAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGhlaWdodCwgMC4zcyBzdGVwLXN0YXJ0IHZpc2liaWxpdHk7XFxufVxcblxcbi5hY2NvcmRpb24gPiAuY2xvc2VkID4gOmxhc3QtY2hpbGQsXFxuLmFjY29yZGlvbiA+IC5jbG9zZWQgLmFjY29yZGlvbiA+IC5vcGVuID4gOmxhc3QtY2hpbGQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZSwgc3RlcC1lbmQ7XFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBzdGVwLWVuZDtcXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBzdGVwLWVuZDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBzdGVwLWVuZDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWJhYmFsaV9pcmVuZS9EZXNrdG9wL01JQ1JPVkVSU0UvVG9kb0xpc3Qvbm9kZV9tb2R1bGVzL2FjY29yZGlvbi9zcmMvYWNjb3JkaW9uLmNzc1wiLFwiYWNjb3JkaW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBQTtBQUNBO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFRjs7QURBRTs7O0VBR0MsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUNHSDs7QURBRSx1QkFBQTtBQUNBOztFQUVDLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBRUEsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtBQ0NIOztBREVFLHlEQUFBO0FBQ0E7O0VBRUMsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUNDSDs7QURFRSxjQUFBO0FBQ0E7RUFDQyxlQUFBO0VBQ0EsU0FBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUg7O0FER0UseUJBQUE7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsZ0VBQUE7RUFDQSw2REFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7QUNBSDs7QURFRzs7RUFFQyxrREFBQTtFQUNBLCtDQUFBO0VBQ0EsNkNBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FDQ0pcIixcImZpbGVcIjpcImFjY29yZGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqIENvcmUgc3R5bGluZyAqL1xcbi5hY2NvcmRpb257XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46ICAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXHQuYWNjb3JkaW9uID4gKntcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdG1hcmdpbjogIDA7XFxuXFx0fVxcblxcdFxcdC5hY2NvcmRpb24gPiAqLFxcblxcdFxcdC5hY2NvcmRpb24uZWRnZS12aXNpYmxlLFxcblxcdFxcdC5hY2NvcmRpb24gLmFjY29yZGlvbntcXG5cXHRcXHRcXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcXG5cXHRcXHRcXHQtbW96LXRyYW5zaXRpb246ICAgIC4zcyBlYXNlIGFsbDtcXG5cXHRcXHRcXHQtby10cmFuc2l0aW9uOiAgICAgIC4zcyBlYXNlIGFsbDtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiAgICAgICAgIC4zcyBlYXNlIGFsbDtcXG5cXHRcXHR9XFxuXFx0XFx0XFxuXFx0XFx0LyoqIFRyYW5zZm9ybS1yZWxhdGVkICovXFxuXFx0XFx0LmFjY29yZGlvbixcXG5cXHRcXHQuYWNjb3JkaW9uID4gKntcXG5cXHRcXHRcXHR3aWxsLWNoYW5nZTogaGVpZ2h0LCB0cmFuc2Zvcm07XFxuXFx0XFx0XFx0LXdlYmtpdC1wZXJzcGVjdGl2ZTogOTBlbTtcXG5cXHRcXHRcXHQtbW96LXBlcnNwZWN0aXZlOiAgICA5MGVtO1xcblxcdFxcdFxcdHBlcnNwZWN0aXZlOiAgICAgICAgIDkwZW07XFxuXFx0XFx0XFx0XFxuXFx0XFx0XFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0XFx0XFx0LW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiAgICBoaWRkZW47XFxuXFx0XFx0XFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogICAgICAgICBoaWRkZW47XFxuXFx0XFx0XFx0XFxuXFx0XFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06ICB0cmFuc2xhdGUzZCgwLDAsMCk7XFxuXFx0XFx0XFx0LW1vei10cmFuc2Zvcm06ICAgICB0cmFuc2xhdGUzZCgwLDAsMCk7XFxuXFx0XFx0XFx0LW1zLXRyYW5zZm9ybTogICAgICB0cmFuc2xhdGVZKDApO1xcblxcdFxcdFxcdC1vLXRyYW5zZm9ybTogICAgICAgdHJhbnNsYXRlM2QoMCwwLDApO1xcblxcdFxcdFxcdHRyYW5zZm9ybTogICAgICAgICAgdHJhbnNsYXRlM2QoMCwwLDApO1xcblxcdFxcdH1cXG5cXHRcXHRcXG5cXHRcXHQvKiogUnVsZSB0byBkaXNhYmxlIHRyYW5zaXRpb25zIGJldHdlZW4gZ2FwIGNvcnJlY3Rpb25zICovXFxuXFx0XFx0LnNuYXAuYWNjb3JkaW9uID4gKixcXG5cXHRcXHQuc25hcC5hY2NvcmRpb24gLmFjY29yZGlvbntcXG5cXHRcXHRcXHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRcXHRcXHQtbW96LXRyYW5zaXRpb246ICAgIG5vbmUgIWltcG9ydGFudDtcXG5cXHRcXHRcXHQtby10cmFuc2l0aW9uOiAgICAgIG5vbmUgIWltcG9ydGFudDtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiAgICAgICAgIG5vbmUgIWltcG9ydGFudDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LyoqIEhlYWRpbmdzICovXFxuXFx0XFx0LmFjY29yZGlvbiA+ICogPiA6Zmlyc3QtY2hpbGR7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRcXHRcXG5cXHRcXHRcXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdFxcdFxcdC1tb3otdXNlci1zZWxlY3Q6ICAgIG5vbmU7XFxuXFx0XFx0XFx0LW1zLXVzZXItc2VsZWN0OiAgICAgbm9uZTtcXG5cXHRcXHRcXHR1c2VyLXNlbGVjdDogICAgICAgICBub25lO1xcblxcdFxcdH1cXG5cXHRcXHRcXG5cXHRcXHQvKiogQ29sbGFwc2libGUgY29udGVudCAqL1xcblxcdFxcdC5hY2NvcmRpb24gPiAqID4gOmxhc3QtY2hpbGR7XFxuXFx0XFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHRcXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlIGhlaWdodCwgLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG5cXHRcXHRcXHQtbW96LXRyYW5zaXRpb246ICAgIC4zcyBlYXNlIGhlaWdodCwgLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG5cXHRcXHRcXHQtby10cmFuc2l0aW9uOiAgICAgIC4zcyBlYXNlIGhlaWdodCwgLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiAgICAgICAgIC4zcyBlYXNlIGhlaWdodCwgLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG5cXHRcXHR9XFxuXFx0XFx0XFx0LmFjY29yZGlvbiA+IC5jbG9zZWQgPiA6bGFzdC1jaGlsZCxcXG5cXHRcXHRcXHQuYWNjb3JkaW9uID4gLmNsb3NlZCAuYWNjb3JkaW9uID4gLm9wZW4gPiA6bGFzdC1jaGlsZHtcXG5cXHRcXHRcXHRcXHQtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBzdGVwLWVuZDtcXG5cXHRcXHRcXHRcXHQtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAgICBlYXNlLCBzdGVwLWVuZDtcXG5cXHRcXHRcXHRcXHQtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogICAgICBlYXNlLCBzdGVwLWVuZDtcXG5cXHRcXHRcXHRcXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogICAgICAgICBlYXNlLCBzdGVwLWVuZDtcXG5cXHRcXHRcXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0XFx0XFx0fVxcblwiLFwiLyoqIENvcmUgc3R5bGluZyAqL1xcbi5hY2NvcmRpb24ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5hY2NvcmRpb24gPiAqIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWNjb3JkaW9uID4gKixcXG4uYWNjb3JkaW9uLmVkZ2UtdmlzaWJsZSxcXG4uYWNjb3JkaW9uIC5hY2NvcmRpb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xcbiAgLW8tdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XFxufVxcblxcbi8qKiBUcmFuc2Zvcm0tcmVsYXRlZCAqL1xcbi5hY2NvcmRpb24sXFxuLmFjY29yZGlvbiA+ICoge1xcbiAgd2lsbC1jaGFuZ2U6IGhlaWdodCwgdHJhbnNmb3JtO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogOTBlbTtcXG4gIC1tb3otcGVyc3BlY3RpdmU6IDkwZW07XFxuICBwZXJzcGVjdGl2ZTogOTBlbTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbi8qKiBSdWxlIHRvIGRpc2FibGUgdHJhbnNpdGlvbnMgYmV0d2VlbiBnYXAgY29ycmVjdGlvbnMgKi9cXG4uc25hcC5hY2NvcmRpb24gPiAqLFxcbi5zbmFwLmFjY29yZGlvbiAuYWNjb3JkaW9uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAtby10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qKiBIZWFkaW5ncyAqL1xcbi5hY2NvcmRpb24gPiAqID4gOmZpcnN0LWNoaWxkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi8qKiBDb2xsYXBzaWJsZSBjb250ZW50ICovXFxuLmFjY29yZGlvbiA+ICogPiA6bGFzdC1jaGlsZCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UgaGVpZ2h0LCAwLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcyBlYXNlIGhlaWdodCwgMC4zcyBzdGVwLXN0YXJ0IHZpc2liaWxpdHk7XFxuICAtby10cmFuc2l0aW9uOiAwLjNzIGVhc2UgaGVpZ2h0LCAwLjNzIHN0ZXAtc3RhcnQgdmlzaWJpbGl0eTtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZSBoZWlnaHQsIDAuM3Mgc3RlcC1zdGFydCB2aXNpYmlsaXR5O1xcbn1cXG5cXG4uYWNjb3JkaW9uID4gLmNsb3NlZCA+IDpsYXN0LWNoaWxkLFxcbi5hY2NvcmRpb24gPiAuY2xvc2VkIC5hY2NvcmRpb24gPiAub3BlbiA+IDpsYXN0LWNoaWxkIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIHN0ZXAtZW5kO1xcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZSwgc3RlcC1lbmQ7XFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZSwgc3RlcC1lbmQ7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZSwgc3RlcC1lbmQ7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL2JlYWNoLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbiN0aXRsZS10YWcge1xcbiAgYm9yZGVyLXN0eWxlOiByaWRnZTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMTU3LCA5LCAwLjUpO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMTU1LCAxMTIsIDMzLCAwLjg2Myk7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmltYWdlLWF0dHJpYiB7XFxuICBjb2xvcjogZ3JleTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcbi5pbWFnZS1hdHRyaWIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuLmltYWdlLWF0dHJpYiBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVxcbmZvcm0gc2VjdGlvbixcXG5mb3JtIGZpZWxkc2V0LFxcbmZvcm0gdGV4dGFyZWEsXFxuZm9ybSBpbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5mb3JtIGlucHV0W3R5cGU9dGV4dF0sXFxuZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0sXFxuZm9ybSB0ZXh0YXJlYSxcXG5mb3JtIGZpZWxkc2V0IHtcXG4gIHdpZHRoOiA5NSU7XFxufVxcbmZvcm0gbGFiZWwsXFxuZm9ybSBsZWdlbmQge1xcbiAgY29sb3I6ICMxZTFlYjg7XFxufVxcbmZvcm0gbGFiZWxbZm9yPXRvZG8tbG93LXByaW9yaXR5XSB7XFxuICBjb2xvcjogIzIxODgyMTtcXG59XFxuZm9ybSBsYWJlbFtmb3I9dG9kby1tZWRpdW0tcHJpb3JpdHldIHtcXG4gIGNvbG9yOiAjYzVjNTMyO1xcbn1cXG5mb3JtIGxhYmVsW2Zvcj10b2RvLWhpZ2gtcHJpb3JpdHldIHtcXG4gIGNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4uYWNjb3JkaW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QsXFxuLnByb2plY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBib3JkZXItc3R5bGU6IG91dHNldDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucHJvamVjdCAucHJvamVjdC10aXRsZSB7XFxuICBjb2xvcjogY3lhbjtcXG4gIG1hcmdpbjogMDtcXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDFzIGVhc2UtaW4tb3V0IDEwMG1zLCBjb2xvciAxcyBlYXNlLWluLW91dCAyMDBtcztcXG59XFxuLnByb2plY3QuY2xvc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxMywgMjIzLCAwLjYpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3MCwgMzYsIDE3MCwgMC42KTtcXG59XFxuLnByb2plY3QuY2xvc2VkIC5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4ucHJvamVjdC5vcGVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMTcsIDAsIDAuNik7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMTc3LCAxNTYsIDM5LCAwLjYpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcyBlYXNlLWluLW91dCAxMDBtcztcXG59XFxuLnByb2plY3Qub3BlbiAucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogZmlyZWJyaWNrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1jb250cm9scyAuYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3QtdG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiBibHVldmlvbGV0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci1zdHlsZTogb3V0c2V0O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi50b2RvLmNsb3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgNSwgNTIsIDAuNik7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMTU1LCA4LCAzNywgMC42KTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnRvZG8uY2xvc2VkIC50b2RvLXRpdGxlIHtcXG4gIGNvbG9yOiBwYXBheWF3aGlwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udG9kby5vcGVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDgsIDIyMCwgMC42KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxOTAsIDE4MiwgMTUwLCAwLjYpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4udG9kby5vcGVuIC50b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiBsaW1lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50b2RvLWhlYWRlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uLFxcbi50b2RvLWR1ZWRhdGUsXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24gLmRhdGUsXFxuLnRvZG8tZHVlZGF0ZSAuZGF0ZSxcXG4udG9kby1wcmlvcml0eSAuZGF0ZSB7XFxuICBjb2xvcjogI2ZmMjQwMDtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24gLmxvdyxcXG4udG9kby1kdWVkYXRlIC5sb3csXFxuLnRvZG8tcHJpb3JpdHkgLmxvdyB7XFxuICBjb2xvcjogIzIxODgyMTtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24gLm1lZGl1bSxcXG4udG9kby1kdWVkYXRlIC5tZWRpdW0sXFxuLnRvZG8tcHJpb3JpdHkgLm1lZGl1bSB7XFxuICBjb2xvcjogI2M1YzUzMjtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24gLmhpZ2gsXFxuLnRvZG8tZHVlZGF0ZSAuaGlnaCxcXG4udG9kby1wcmlvcml0eSAuaGlnaCB7XFxuICBjb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLnRvZG8tY29udHJvbHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4sXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bixcXG4uYWRkLXRvZG8tYnRuLFxcbi5kZWxldGUtdG9kby1idG4sXFxuLmVkaXQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiAjNDE0MDQwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMxMTE7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgbGVmdDogM3JlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlcixcXG4uYWRkLXRvZG8tYnRuOmhvdmVyLFxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIsXFxuLmRlbGV0ZS10b2RvLWJ0bjpob3ZlcixcXG4uZWRpdC10b2RvLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46YWN0aXZlLFxcbi5hZGQtdG9kby1idG46YWN0aXZlLFxcbi5kZWxldGUtcHJvamVjdC1idG46YWN0aXZlLFxcbi5kZWxldGUtdG9kby1idG46YWN0aXZlLFxcbi5lZGl0LXRvZG8tYnRuOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuLFxcbi5hZGQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0ZGIxMztcXG59XFxuXFxuLmVkaXQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bixcXG4uZGVsZXRlLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIsXFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJhMDM5O1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyLFxcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyMjUzYjtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuLmVkaXQtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1YWZhZjtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zaG93LWZvcm0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkMTU7XFxuICBjb2xvcjogIzQxNDA0MDtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgbWFyZ2luOiAwLjc1cmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICBmb250LXNpemU6IDEuNzVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVmb3JtO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAuMzc1cmVtIDEuMjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVmb3JtIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9tYmFiYWxpX2lyZW5lL0Rlc2t0b3AvTUlDUk9WRVJTRS9Ub2RvTGlzdC9zcmMvY3NzL19yZXNldC5zY3NzXCIsXCJzdHlsZS5zY3NzXCIsXCIvaG9tZS9tYmFiYWxpX2lyZW5lL0Rlc2t0b3AvTUlDUk9WRVJTRS9Ub2RvTGlzdC9zcmMvY3NzL19tYWluLnNjc3NcIixcIi9ob21lL21iYWJhbGlfaXJlbmUvRGVza3RvcC9NSUNST1ZFUlNFL1RvZG9MaXN0L3NyYy9jc3MvX2Zvcm0uc2Nzc1wiLFwiL2hvbWUvbWJhYmFsaV9pcmVuZS9EZXNrdG9wL01JQ1JPVkVSU0UvVG9kb0xpc3Qvc3JjL2Nzcy9fcHJvamVjdC5zY3NzXCIsXCIvaG9tZS9tYmFiYWxpX2lyZW5lL0Rlc2t0b3AvTUlDUk9WRVJTRS9Ub2RvTGlzdC9zcmMvY3NzL190b2RvLnNjc3NcIixcIi9ob21lL21iYWJhbGlfaXJlbmUvRGVza3RvcC9NSUNST1ZFUlNFL1RvZG9MaXN0L3NyYy9jc3MvX2J1dHRvbnMuc2Nzc1wiLFwiL2hvbWUvbWJhYmFsaV9pcmVuZS9EZXNrdG9wL01JQ1JPVkVSU0UvVG9kb0xpc3Qvc3JjL2Nzcy9fYnV0dG9uX2NvbG9ycy5zY3NzXCIsXCIvaG9tZS9tYmFiYWxpX2lyZW5lL0Rlc2t0b3AvTUlDUk9WRVJTRS9Ub2RvTGlzdC9zcmMvY3NzL19tb2RhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBQTtBQ0NGOztBQ0RBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRElGOztBQ0RBO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURJRjs7QUNEQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQXhCTztFQXlCUCxrREFBQTtBRElGOztBQ0RBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURJRjs7QUNEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QURJRjtBQ0ZFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FESUo7QUNGSTtFQUNFLFlBQUE7QURJTjs7QUU1Q0E7RUFDRSxrQkFBQTtBRitDRjtBRTdDRTs7OztFQUlFLHNCQUFBO0FGK0NKO0FFMUNFOzs7O0VBSUUsVUFBQTtBRjRDSjtBRXpDRTs7RUFFRSxjQXZCRztBRmtFUDtBRXhDRTtFQUNFLGNBOUJRO0FGd0VaO0FFdkNFO0VBQ0UsY0FqQ1c7QUYwRWY7QUV0Q0U7RUFDRSxjQXBDUztBRjRFYjs7QUc5RUE7RUFDRSxtQkFBQTtBSGlGRjs7QUc5RUE7O0VBRUUsV0FBQTtBSGlGRjs7QUc5RUE7RUFDRSxhQUFBO0FIaUZGOztBRzlFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUhpRkY7O0FHOUVBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtBSGlGRjtBRy9FRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esd0VBQ0U7QUhnRk47QUc1RUU7RUFDRSx5Q0FBQTtFQUNBLHFDQUFBO0FIOEVKO0FHNUVJO0VBQ0UsaUJBQUE7QUg4RU47QUcxRUU7RUFDRSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0RBQUE7QUg0RUo7QUcxRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FINEVOOztBR3ZFQTtFQUNFLFdBQUE7QUgwRUY7QUd4RUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FIMEVKOztBSWpJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FKb0lGOztBSWpJQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUpvSUY7O0FJaklBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUpvSUY7QUlsSUU7RUFDRSx1Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7QUpvSUo7QUlsSUk7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUpvSU47QUloSUU7RUFDRSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsNkNBQUE7QUprSUo7QUloSUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUprSU47O0FJN0hBO0VBQ0UsYUFBQTtBSmdJRjs7QUk3SEE7RUFDRSxtQkFBQTtBSmdJRjs7QUk3SEE7OztFQUdFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBSmdJRjtBSTlIRTs7O0VBQ0UsY0FBQTtBSmtJSjtBSS9IRTs7O0VBQ0UsY0FsRVE7QUpxTVo7QUloSUU7OztFQUNFLGNBckVXO0FKeU1mO0FJaklFOzs7RUFDRSxjQXhFUztBSjZNYjs7QUlqSUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FKb0lGOztBS25OQTs7Ozs7RUFLRSw0R0FDRTtFQU1GLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDhGQUNFO0VBRUYsY0FuQks7RUFvQkwsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBTDhNRjs7QUszTUE7RUFDRSxVQUFBO0FMOE1GOztBSzNNQTs7Ozs7RUFLRSxlQUFBO0FMOE1GOztBSzNNQTs7Ozs7RUFLRSw4RkFDRTtBTDZNSjs7QU1sUEE7O0VBRUUseUJBVE07QU44UFI7O0FNbFBBO0VBQ0Usc0JBVEs7QU44UFA7O0FNbFBBOztFQUVFLHlCQWhCSTtBTnFRTjs7QU1sUEE7O0VBRUUseUJBdEJXO0VBdUJYLHFCQUFBO0FOcVBGOztBTWxQQTs7RUFFRSx5QkExQlM7RUEyQlQscUJBQUE7QU5xUEY7O0FNbFBBO0VBQ0UseUJBN0JVO0VBOEJWLHFCQUFBO0FOcVBGOztBT3BSQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QVB1UkY7O0FPcFJBO0VBQ0UsY0FBQTtBUHVSRjs7QU9wUkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkF2Qk87RUF3QlAsY0F2Qks7QVA4U1A7O0FPcFJBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FQdVJGOztBT3BSQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QVB1UkY7O0FPcFJBOztFQUVFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QVB1UkY7O0FPcFJBO0VBQ0UsWUFqRGU7QVB3VWpCOztBT3BSQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEZBQ0U7RUFFRixnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FQcVJGOztBT2xSQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RVBxUkY7RU9sUkE7SUFDRSxNQUFBO0lBQ0EsVUFBQTtFUG9SRjtBQUNGXCIsXCJmaWxlXCI6XCJzdHlsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvYmVhY2guanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbiN0aXRsZS10YWcge1xcbiAgYm9yZGVyLXN0eWxlOiByaWRnZTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMTU3LCA5LCAwLjUpO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMTU1LCAxMTIsIDMzLCAwLjg2Myk7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmltYWdlLWF0dHJpYiB7XFxuICBjb2xvcjogZ3JleTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcbi5pbWFnZS1hdHRyaWIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuLmltYWdlLWF0dHJpYiBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVxcbmZvcm0gc2VjdGlvbixcXG5mb3JtIGZpZWxkc2V0LFxcbmZvcm0gdGV4dGFyZWEsXFxuZm9ybSBpbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5mb3JtIGlucHV0W3R5cGU9dGV4dF0sXFxuZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0sXFxuZm9ybSB0ZXh0YXJlYSxcXG5mb3JtIGZpZWxkc2V0IHtcXG4gIHdpZHRoOiA5NSU7XFxufVxcbmZvcm0gbGFiZWwsXFxuZm9ybSBsZWdlbmQge1xcbiAgY29sb3I6ICMxZTFlYjg7XFxufVxcbmZvcm0gbGFiZWxbZm9yPXRvZG8tbG93LXByaW9yaXR5XSB7XFxuICBjb2xvcjogIzIxODgyMTtcXG59XFxuZm9ybSBsYWJlbFtmb3I9dG9kby1tZWRpdW0tcHJpb3JpdHldIHtcXG4gIGNvbG9yOiAjYzVjNTMyO1xcbn1cXG5mb3JtIGxhYmVsW2Zvcj10b2RvLWhpZ2gtcHJpb3JpdHldIHtcXG4gIGNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4uYWNjb3JkaW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QsXFxuLnByb2plY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBib3JkZXItc3R5bGU6IG91dHNldDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucHJvamVjdCAucHJvamVjdC10aXRsZSB7XFxuICBjb2xvcjogY3lhbjtcXG4gIG1hcmdpbjogMDtcXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDFzIGVhc2UtaW4tb3V0IDEwMG1zLCBjb2xvciAxcyBlYXNlLWluLW91dCAyMDBtcztcXG59XFxuLnByb2plY3QuY2xvc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxMywgMjIzLCAwLjYpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3MCwgMzYsIDE3MCwgMC42KTtcXG59XFxuLnByb2plY3QuY2xvc2VkIC5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4ucHJvamVjdC5vcGVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMTcsIDAsIDAuNik7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMTc3LCAxNTYsIDM5LCAwLjYpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcyBlYXNlLWluLW91dCAxMDBtcztcXG59XFxuLnByb2plY3Qub3BlbiAucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogZmlyZWJyaWNrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1jb250cm9scyAuYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3QtdG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiBibHVldmlvbGV0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci1zdHlsZTogb3V0c2V0O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi50b2RvLmNsb3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgNSwgNTIsIDAuNik7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMTU1LCA4LCAzNywgMC42KTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnRvZG8uY2xvc2VkIC50b2RvLXRpdGxlIHtcXG4gIGNvbG9yOiBwYXBheWF3aGlwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udG9kby5vcGVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDgsIDIyMCwgMC42KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxOTAsIDE4MiwgMTUwLCAwLjYpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4udG9kby5vcGVuIC50b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiBsaW1lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50b2RvLWhlYWRlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uLFxcbi50b2RvLWR1ZWRhdGUsXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24gLmRhdGUsXFxuLnRvZG8tZHVlZGF0ZSAuZGF0ZSxcXG4udG9kby1wcmlvcml0eSAuZGF0ZSB7XFxuICBjb2xvcjogI2ZmMjQwMDtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24gLmxvdyxcXG4udG9kby1kdWVkYXRlIC5sb3csXFxuLnRvZG8tcHJpb3JpdHkgLmxvdyB7XFxuICBjb2xvcjogIzIxODgyMTtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24gLm1lZGl1bSxcXG4udG9kby1kdWVkYXRlIC5tZWRpdW0sXFxuLnRvZG8tcHJpb3JpdHkgLm1lZGl1bSB7XFxuICBjb2xvcjogI2M1YzUzMjtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24gLmhpZ2gsXFxuLnRvZG8tZHVlZGF0ZSAuaGlnaCxcXG4udG9kby1wcmlvcml0eSAuaGlnaCB7XFxuICBjb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLnRvZG8tY29udHJvbHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4sXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bixcXG4uYWRkLXRvZG8tYnRuLFxcbi5kZWxldGUtdG9kby1idG4sXFxuLmVkaXQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiAjNDE0MDQwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMxMTE7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgbGVmdDogM3JlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlcixcXG4uYWRkLXRvZG8tYnRuOmhvdmVyLFxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIsXFxuLmRlbGV0ZS10b2RvLWJ0bjpob3ZlcixcXG4uZWRpdC10b2RvLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46YWN0aXZlLFxcbi5hZGQtdG9kby1idG46YWN0aXZlLFxcbi5kZWxldGUtcHJvamVjdC1idG46YWN0aXZlLFxcbi5kZWxldGUtdG9kby1idG46YWN0aXZlLFxcbi5lZGl0LXRvZG8tYnRuOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuLFxcbi5hZGQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0ZGIxMztcXG59XFxuXFxuLmVkaXQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bixcXG4uZGVsZXRlLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIsXFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJhMDM5O1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyLFxcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyMjUzYjtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuLmVkaXQtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1YWZhZjtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zaG93LWZvcm0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkMTU7XFxuICBjb2xvcjogIzQxNDA0MDtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgbWFyZ2luOiAwLjc1cmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICBmb250LXNpemU6IDEuNzVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVmb3JtO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAuMzc1cmVtIDEuMjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVmb3JtIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cIixcIiRvcmFuZ2U6IHJnYmEoMjM2LCAxNTcsIDksIDAuNSk7XFxuJG9yYW5nZS1kYXJrOiByZ2JhKDE1NSwgMTEyLCAzMywgMC44NjMpO1xcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JlYWNoLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4jdGl0bGUtdGFnIHtcXG4gIGJvcmRlci1zdHlsZTogcmlkZ2U7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAkb3JhbmdlLWRhcms7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmltYWdlLWF0dHJpYiB7XFxuICBjb2xvcjogZ3JleTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxuXFxuICBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogZ3JleTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGxvdy1jb2xvcjogcmdiKDMzLCAxMzYsIDMzKTtcXG4kbWVkaXVtLWNvbG9yOiByZ2IoMTk3LCAxOTcsIDUwKTtcXG4kaGlnaC1jb2xvcjogY3JpbXNvbjtcXG4kYmx1ZTogcmdiKDMwLCAzMCwgMTg0KTtcXG5cXG5mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXG4gIHNlY3Rpb24sXFxuICBmaWVsZHNldCxcXG4gIHRleHRhcmVhLFxcbiAgaW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICAvLyB3aWR0aDogNTAwcHg7XFxuICAgIC8vIG1hcmdpbjogMC43NXJlbSBhdXRvO1xcbiAgfVxcblxcbiAgaW5wdXRbdHlwZT10ZXh0XSxcXG4gIGlucHV0W3R5cGU9c3VibWl0XSxcXG4gIHRleHRhcmVhLFxcbiAgZmllbGRzZXQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgbGFiZWwsXFxuICBsZWdlbmQge1xcbiAgICBjb2xvcjogJGJsdWU7XFxuICB9XFxuXFxuICBsYWJlbFtmb3I9dG9kby1sb3ctcHJpb3JpdHldIHtcXG4gICAgY29sb3I6ICRsb3ctY29sb3I7XFxuICB9XFxuXFxuICBsYWJlbFtmb3I9dG9kby1tZWRpdW0tcHJpb3JpdHldIHtcXG4gICAgY29sb3I6ICRtZWRpdW0tY29sb3I7XFxuICB9XFxuXFxuICBsYWJlbFtmb3I9dG9kby1oaWdoLXByaW9yaXR5XSB7XFxuICAgIGNvbG9yOiAkaGlnaC1jb2xvcjtcXG4gIH1cXG59XFxuXCIsXCIuYWNjb3JkaW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QsXFxuLnByb2plY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBib3JkZXItc3R5bGU6IG91dHNldDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbiAgLnByb2plY3QtdGl0bGUge1xcbiAgICBjb2xvcjogY3lhbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0cmFuc2l0aW9uOlxcbiAgICAgIG1hcmdpbi1sZWZ0IDFzIGVhc2UtaW4tb3V0IDEwMG1zLFxcbiAgICAgIGNvbG9yIDFzIGVhc2UtaW4tb3V0IDIwMG1zO1xcbiAgfVxcblxcbiAgJi5jbG9zZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTMsIDIyMywgMC42KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3MCwgMzYsIDE3MCwgMC42KTtcXG5cXG4gICAgLnByb2plY3QtdGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAmLm9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjE3LCAwLCAwLjYpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTc3LCAxNTYsIDM5LCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGVhc2UtaW4tb3V0IDEwMG1zO1xcblxcbiAgICAucHJvamVjdC10aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIGNvbG9yOiBmaXJlYnJpY2s7XFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByb2plY3QtY29udHJvbHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG59XFxuXCIsXCIkbG93LWNvbG9yOiByZ2IoMzMsIDEzNiwgMzMpO1xcbiRtZWRpdW0tY29sb3I6IHJnYigxOTcsIDE5NywgNTApO1xcbiRoaWdoLWNvbG9yOiBjcmltc29uO1xcblxcbi5wcm9qZWN0LXRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogYmx1ZXZpb2xldDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi50b2RvIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBib3JkZXItc3R5bGU6IG91dHNldDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbiAgJi5jbG9zZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgNSwgNTIsIDAuNik7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNTUsIDgsIDM3LCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIC50b2RvLXRpdGxlIHtcXG4gICAgICBjb2xvcjogcGFwYXlhd2hpcDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYub3BlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDgsIDIyMCwgMC42KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE5MCwgMTgyLCAxNTAsIDAuNik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dDtcXG5cXG4gICAgLnRvZG8tdGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICBjb2xvcjogbGltZTtcXG4gICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY29udGVudCB7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbixcXG4udG9kby1kdWVkYXRlLFxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuICAuZGF0ZSB7XFxuICAgIGNvbG9yOiAjZmYyNDAwO1xcbiAgfVxcblxcbiAgLmxvdyB7XFxuICAgIGNvbG9yOiAkbG93LWNvbG9yO1xcbiAgfVxcblxcbiAgLm1lZGl1bSB7XFxuICAgIGNvbG9yOiAkbWVkaXVtLWNvbG9yO1xcbiAgfVxcblxcbiAgLmhpZ2gge1xcbiAgICBjb2xvcjogJGhpZ2gtY29sb3I7XFxuICB9XFxufVxcblxcbi50b2RvLWNvbnRyb2xzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cIixcIiRncmV5OiByZ2IoNjUsIDY0LCA2NCk7XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bixcXG4uZGVsZXRlLXByb2plY3QtYnRuLFxcbi5hZGQtdG9kby1idG4sXFxuLmRlbGV0ZS10b2RvLWJ0bixcXG4uZWRpdC10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gdG9wIGxlZnQsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yKSAzMCUsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwKVxcbiAgICApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgMnB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxcbiAgICBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiAkZ3JleTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMTExO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuIHtcXG4gIGxlZnQ6IDNyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIsXFxuLmFkZC10b2RvLWJ0bjpob3ZlcixcXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyLFxcbi5kZWxldGUtdG9kby1idG46aG92ZXIsXFxuLmVkaXQtdG9kby1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmFjdGl2ZSxcXG4uYWRkLXRvZG8tYnRuOmFjdGl2ZSxcXG4uZGVsZXRlLXByb2plY3QtYnRuOmFjdGl2ZSxcXG4uZGVsZXRlLXRvZG8tYnRuOmFjdGl2ZSxcXG4uZWRpdC10b2RvLWJ0bjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXFxuICAgIGluc2V0IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXCIsXCIkZ3JlZW46ICMyNGRiMTM7XFxuJGdyZWVuLWRhcms6ICM0MmEwMzk7XFxuJHJlZDogY3JpbXNvbjtcXG4kcmVkLWRhcms6IHJnYigxNDYsIDM3LCA1OSk7XFxuJGJsdWU6IGN5YW47XFxuJGJsdWUtZGFyazogcmdiKDM3LCAxNzUsIDE3NSk7XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bixcXG4uYWRkLXRvZG8tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcXG59XFxuXFxuLmVkaXQtdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4sXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyLFxcbi5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWRhcms7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIsXFxuLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWRhcms7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5lZGl0LXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWRhcms7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblwiLFwiJHllbGxvdzogcmdiKDIyMSwgMjIxLCAyMSk7XFxuJGdyZXk6IHJnYig2NSwgNjQsIDY0KTtcXG4kbW9kYWwtcGFkZGluZzogIDVweDtcXG5cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2hvdy1mb3JtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xcbiAgY29sb3I6ICRncmV5O1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICBtYXJnaW46IDAuNzVyZW0gMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gIGZvbnQtc2l6ZTogMS43NWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBwYWRkaW5nOiAkbW9kYWwtcGFkZGluZztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlZm9ybTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgMCAwLjI1cmVtIDAuNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgMCAwLjM3NXJlbSAxLjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlZm9ybSB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkODI0YjkzMzllMmFhNDM3MjU0YjEwMDM4NTc4YjRkYS5qcGdcIjsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnYWNjb3JkaW9uL3NyYy9hY2NvcmRpb24ubWpzJztcblxuY29uc3QgY2xvc2VGb2xkID0gKGZvbGQpID0+IHtcbiAgZm9sZC5vcGVuID0gZmFsc2U7XG59O1xuXG5jb25zdCBvcGVuRm9sZCA9IChmb2xkKSA9PiB7XG4gIGZvbGQub3BlbiA9IHRydWU7XG59O1xuXG5jb25zdCBjcmVhdGVBY2NvcmRpb25zID0gKCkgPT4ge1xuICBjb25zdCBhY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3QtbGlzdCwgLnByb2plY3QtdG9kb3MnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2NvcmRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIG5ldyBBY2NvcmRpb24oYWNjb3JkaW9uc1tpXSwge1xuICAgICAgbW9kYWw6IHRydWUsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUFjY29yZGlvbnMsIGNsb3NlRm9sZCwgb3BlbkZvbGQgfTsiLCJpbXBvcnQgeyBnZXRUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEnO1xuXG5jb25zdCBhZGRUb2RvQnRuQWN0aW9uID0gKHByb2plY3RJZCkgPT4ge1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2MtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby1kdWVkYXRlLWlucHV0JykudmFsdWUgPSAnJztcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8tbG93LXByaW9yaXR5JykuY2hlY2tlZCA9IGZhbHNlO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby1tZWRpdW0tcHJpb3JpdHknKS5jaGVja2VkID0gdHJ1ZTtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8taGlnaC1wcmlvcml0eScpLmNoZWNrZWQgPSBmYWxzZTtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8tbm90ZXMtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlID0gcHJvamVjdElkO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby1pbnB1dCcpLnZhbHVlID0gLTE7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9c3VibWl0XScpLnZhbHVlID0gJ0NyZWF0ZSBOZXcgVG9kbyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0tYm94JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1mb3JtJyk7XG59O1xuXG5jb25zdCBlZGl0VG9kb0J0bkFjdGlvbiA9ICh0b2RvSWQsIHByb2plY3RJZCkgPT4ge1xuICBjb25zdCB0b2RvID0gZ2V0VG9kbyh0b2RvSWQsIHByb2plY3RJZCk7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICB9ID0gdG9kby5nZXRBdHRyaWJ1dGVzKCk7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlLWlucHV0JykudmFsdWUgPSB0aXRsZTtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzYy1pbnB1dCcpLnZhbHVlID0gZGVzY3JpcHRpb247XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWR1ZWRhdGUtaW5wdXQnKS52YWx1ZSA9IGR1ZURhdGU7XG4gIGRvY3VtZW50LmZvcm1zWyduZXctdG9kbyddLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW1lZGl1bS1wcmlvcml0eScpLmNoZWNrZWQgPSBmYWxzZTtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcihgI3RvZG8tJHtwcmlvcml0eX0tcHJpb3JpdHlgKS5jaGVja2VkID0gdHJ1ZTtcbiAgZG9jdW1lbnQuZm9ybXNbJ25ldy10b2RvJ10ucXVlcnlTZWxlY3RvcignI3RvZG8tbm90ZXMtaW5wdXQnKS52YWx1ZSA9IG5vdGVzO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlID0gcHJvamVjdElkO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCcjdG9kby1pbnB1dCcpLnZhbHVlID0gdG9kb0lkO1xuICBkb2N1bWVudC5mb3Jtc1snbmV3LXRvZG8nXS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXN1Ym1pdF0nKS52YWx1ZSA9ICdVcGRhdGUgVG9kbyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0tYm94JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1mb3JtJyk7XG59O1xuXG5leHBvcnQgeyBhZGRUb2RvQnRuQWN0aW9uLCBlZGl0VG9kb0J0bkFjdGlvbiB9OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdhY2NvcmRpb24vc3JjL2FjY29yZGlvbi5tanMnO1xuaW1wb3J0IHsgY2xvc2VGb2xkLCBvcGVuRm9sZCB9IGZyb20gJy4vYWNjb3JkaW9uX3V0aWxzJztcblxuY29uc3QgZGVsZXRlUHJvamVjdEZyb21VSSA9IChwcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7cHJvamVjdElkfWApO1xuICBjb25zdCBwcm9qZWN0Rm9sZCA9IEFjY29yZGlvbi5nZXRGb2xkKHByb2plY3REaXYpO1xuICBjb25zdCB7IGFjY29yZGlvbiB9ID0gcHJvamVjdEZvbGQ7XG4gIGNvbnN0IGZvbGRJbmRleCA9IGFjY29yZGlvbi5mb2xkcy5maW5kSW5kZXgoZm9sZCA9PiBmb2xkID09PSBwcm9qZWN0Rm9sZCk7XG4gIGFjY29yZGlvbi5mb2xkcy5zcGxpY2UoZm9sZEluZGV4LCAxKTtcbiAgcHJvamVjdERpdi5yZW1vdmUoKTtcbiAgc2V0VGltZW91dChjbG9zZUZvbGQsIDIwMCwgcHJvamVjdEZvbGQpO1xufTtcblxuY29uc3QgZGVsZXRlVG9kb0Zyb21VSSA9ICh0b2RvSWQsIHByb2plY3RJZCkgPT4ge1xuICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtwcm9qZWN0SWR9LXRvZG8tJHt0b2RvSWR9YCk7XG4gIGNvbnN0IHRvZG9Gb2xkID0gQWNjb3JkaW9uLmdldEZvbGQodG9kb0Rpdik7XG4gIGNvbnN0IHsgYWNjb3JkaW9uIH0gPSB0b2RvRm9sZDtcbiAgY29uc3QgeyBwYXJlbnRGb2xkIH0gPSBhY2NvcmRpb247XG4gIHNldFRpbWVvdXQoY2xvc2VGb2xkLCAyMDAsIHRvZG9Gb2xkKTtcbiAgY29uc3QgZm9sZEluZGV4ID0gYWNjb3JkaW9uLmZvbGRzLmZpbmRJbmRleChmb2xkID0+IGZvbGQgPT09IHRvZG9Gb2xkKTtcbiAgYWNjb3JkaW9uLmZvbGRzLnNwbGljZShmb2xkSW5kZXgsIDEpO1xuICB0b2RvRGl2LnJlbW92ZSgpO1xuICBzZXRUaW1lb3V0KGNsb3NlRm9sZCwgNDAwLCBwYXJlbnRGb2xkKTtcbiAgc2V0VGltZW91dChvcGVuRm9sZCwgNjAwLCBwYXJlbnRGb2xkKTtcbn07XG5cbmNvbnN0IG9wZW5Qcm9qZWN0VGFiID0gKHByb2plY3RJZCkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtwcm9qZWN0SWR9YCk7XG4gIGNvbnN0IHByb2plY3RGb2xkID0gQWNjb3JkaW9uLmdldEZvbGQocHJvamVjdERpdik7XG4gIHNldFRpbWVvdXQob3BlbkZvbGQsIDIwMCwgcHJvamVjdEZvbGQpO1xufTtcblxuY29uc3Qgb3BlblRvZG9UYWIgPSAodG9kb0lkLCBwcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7cHJvamVjdElkfWApO1xuICBjb25zdCBwcm9qZWN0Rm9sZCA9IEFjY29yZGlvbi5nZXRGb2xkKHByb2plY3REaXYpO1xuICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtwcm9qZWN0SWR9LXRvZG8tJHt0b2RvSWR9YCk7XG4gIGNvbnN0IHRvZG9Gb2xkID0gQWNjb3JkaW9uLmdldEZvbGQodG9kb0Rpdik7XG4gIHNldFRpbWVvdXQob3BlbkZvbGQsIDE1MCwgcHJvamVjdEZvbGQpO1xuICBzZXRUaW1lb3V0KG9wZW5Gb2xkLCAzMDAsIHRvZG9Gb2xkKTtcbn07XG5cbmV4cG9ydCB7XG4gIGRlbGV0ZVByb2plY3RGcm9tVUksXG4gIGRlbGV0ZVRvZG9Gcm9tVUksXG4gIG9wZW5Qcm9qZWN0VGFiLFxuICBvcGVuVG9kb1RhYixcbn07IiwiaW1wb3J0IGNyZWF0ZVRvZG9EaXYgZnJvbSAnLi90b2RvX2Rpc3BsYXknO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0VGl0bGUgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtaGVhZGVyJztcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICByZXR1cm4gcHJvamVjdEhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RDb250ZW50ID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RUb2Rvcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG9zJywgJ2FjY29yZGlvbicpO1xuXG4gIGNvbnN0IHByb2plY3RDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0Q29udHJvbHMuY2xhc3NOYW1lID0gJ3Byb2plY3QtY29udHJvbHMnO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gJ2J1dHRvbnMnO1xuICBwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gIHByb2plY3RDb250cm9scy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gIHByb2plY3RUb2Rvcy5hcHBlbmRDaGlsZChwcm9qZWN0Q29udHJvbHMpO1xuXG4gIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnYWRkLXRvZG8tYnRuJztcbiAgYWRkVG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0LmdldElkKCkpO1xuICBhZGRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUb2RvJztcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKTtcblxuICBpZiAocHJvamVjdC5nZXRJZCgpICE9PSAwKSB7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1wcm9qZWN0LWJ0bic7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0LmdldElkKCkpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gIH1cblxuICBjb25zdCB0b2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcbiAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICBjb25zdCB0b2RvRGl2ID0gY3JlYXRlVG9kb0Rpdih0b2RvKTtcbiAgICBwcm9qZWN0VG9kb3MuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIH0pO1xuICByZXR1cm4gcHJvamVjdFRvZG9zO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdERpdiA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIHByb2plY3REaXYuaWQgPSBgcHJvamVjdC0ke3Byb2plY3QuZ2V0SWQoKX1gO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RUaXRsZShwcm9qZWN0KSk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdCkpO1xuICByZXR1cm4gcHJvamVjdERpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3REaXY7IiwiY29uc3QgY3JlYXRlVG9kb1RpdGxlID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSGVhZGVyLmNsYXNzTmFtZSA9ICd0b2RvLWhlYWRlcic7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gIHJldHVybiB0b2RvSGVhZGVyO1xufTtcblxuY29uc3QgaW5zZXJ0TGluZUJyZWFrcyA9IChjb250YWluZXIsIG51bSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSArPSAxKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvQ29udGVudCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnKTtcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBgRHVlIG9uIDxzcGFuIGNsYXNzPVwiZGF0ZVwiPiR7dG9kby5nZXREdWVEYXRlKCl9PC9zcGFuPmA7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpO1xuICBwcmlvcml0eS5pbm5lckhUTUwgPSBgXG4gIFRoaXMgdGFzayBoYXMgPHNwYW4gY2xhc3M9XCIke3RvZG8uZ2V0UHJpb3JpdHkoKX1cIj4ke3RvZG8uZ2V0UHJpb3JpdHkoKX08L3NwYW4+IHByaW9yaXR5YDtcbiAgbm90ZXMuY2xhc3NMaXN0LmFkZCgndG9kby1ub3RlcycpO1xuICBub3Rlcy50ZXh0Q29udGVudCA9IHRvZG8uZ2V0Tm90ZXMoKTtcblxuICBjb25zdCBkZWxldGVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZVRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS10b2RvLWJ0bic7XG4gIGRlbGV0ZVRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG9pZCcsIHRvZG8uZ2V0VG9kb0lkKCkpO1xuICBkZWxldGVUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0aWQnLCB0b2RvLmdldFByb2plY3RJZCgpKTtcbiAgZGVsZXRlVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgVG9kbyc7XG4gIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRUb2RvQnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0LXRvZG8tYnRuJztcbiAgZWRpdFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG9pZCcsIHRvZG8uZ2V0VG9kb0lkKCkpO1xuICBlZGl0VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdGlkJywgdG9kby5nZXRQcm9qZWN0SWQoKSk7XG4gIGVkaXRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVG9kbyc7XG4gIGNvbnN0IHRvZG9Db250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvQ29udHJvbHMuY2xhc3NOYW1lID0gJ3RvZG8tY29udHJvbHMnO1xuICB0b2RvQ29udHJvbHMuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0J1dHRvbik7XG4gIHRvZG9Db250cm9scy5hcHBlbmRDaGlsZChlZGl0VG9kb0J1dHRvbik7XG5cbiAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKHRvZG9Db250cm9scyk7XG5cbiAgaW5zZXJ0TGluZUJyZWFrcyh0b2RvQ29udGVudCwgMik7XG5cbiAgcmV0dXJuIHRvZG9Db250ZW50O1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0RpdiA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gIHRvZG9EaXYuaWQgPSBgcHJvamVjdC0ke3RvZG8uZ2V0UHJvamVjdElkKCl9LXRvZG8tJHt0b2RvLmdldFRvZG9JZCgpfWA7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb1RpdGxlKHRvZG8pKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvQ29udGVudCh0b2RvKSk7XG4gIHJldHVybiB0b2RvRGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb0RpdjsiLCJpbXBvcnQgeyBjcmVhdGVBY2NvcmRpb25zIH0gZnJvbSAnLi9hY2NvcmRpb25fdXRpbHMnO1xuaW1wb3J0IHsgZ2V0QXBwRGF0YSwgZGVsZXRlUHJvamVjdCwgZGVsZXRlVG9kbyB9IGZyb20gJy4uL21vZGVscy9kYXRhJztcbmltcG9ydCB7IGFkZFRvZG9CdG5BY3Rpb24sIGVkaXRUb2RvQnRuQWN0aW9uIH0gZnJvbSAnLi9idXR0b25fYWN0aW9uJztcbmltcG9ydCBjcmVhdGVQcm9qZWN0RGl2IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0X2Rpc3BsYXknO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdEZyb21VSSwgZGVsZXRlVG9kb0Zyb21VSSB9IGZyb20gJy4vY2hhbmdlX2RvbSc7XG5cbmNvbnN0IGNyZWF0ZVJlc3VsdHNTZWN0aW9uID0gKHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IGxpc3RPZlByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RPZlByb2plY3RzLmlkID0gJ3Byb2plY3QtbGlzdCc7XG4gIGxpc3RPZlByb2plY3RzLmNsYXNzTmFtZSA9ICdhY2NvcmRpb24nO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QpO1xuICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9KTtcbiAgcmV0dXJuIGxpc3RPZlByb2plY3RzO1xufTtcblxuY29uc3Qgc2V0dXBCdG5FdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpO1xuICBhcHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XG4gICAgaWYgKGJ0bikge1xuICAgICAgc3dpdGNoIChidG4uY2xhc3NOYW1lKSB7XG4gICAgICAgIGNhc2UgJ2RlbGV0ZS1wcm9qZWN0LWJ0bic6XG4gICAgICAgICAgZGVsZXRlUHJvamVjdChOdW1iZXIoYnRuLmRhdGFzZXQuaWQpKTtcbiAgICAgICAgICBkZWxldGVQcm9qZWN0RnJvbVVJKGJ0bi5kYXRhc2V0LmlkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGVsZXRlLXRvZG8tYnRuJzpcbiAgICAgICAgICBkZWxldGVUb2RvKE51bWJlcihidG4uZGF0YXNldC50b2RvaWQpLCBOdW1iZXIoYnRuLmRhdGFzZXQucHJvamVjdGlkKSk7XG4gICAgICAgICAgZGVsZXRlVG9kb0Zyb21VSShidG4uZGF0YXNldC50b2RvaWQsIGJ0bi5kYXRhc2V0LnByb2plY3RpZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkZC10b2RvLWJ0bic6XG4gICAgICAgICAgYWRkVG9kb0J0bkFjdGlvbihOdW1iZXIoYnRuLmRhdGFzZXQuaWQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZWRpdC10b2RvLWJ0bic6XG4gICAgICAgICAgZWRpdFRvZG9CdG5BY3Rpb24oTnVtYmVyKGJ0bi5kYXRhc2V0LnRvZG9pZCksIE51bWJlcihidG4uZGF0YXNldC5wcm9qZWN0aWQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtZGF0YScpO1xuICBsZXQgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcbiAgaWYgKHJlc3VsdHMgIT09IG51bGwpIHtcbiAgICByZXN1bHRzLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IHsgZGVmYXVsdFByb2plY3QsIG90aGVyUHJvamVjdHMgfSA9IGdldEFwcERhdGEoKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3RdLmNvbmNhdChvdGhlclByb2plY3RzKTtcbiAgcmVzdWx0cyA9IGNyZWF0ZVJlc3VsdHNTZWN0aW9uKGFsbFByb2plY3RzKTtcbiAgZGlzcGxheVNlY3Rpb24uYXBwZW5kQ2hpbGQocmVzdWx0cyk7XG4gIGNyZWF0ZUFjY29yZGlvbnMoKTtcbiAgc2V0dXBCdG5FdmVudExpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUmVzdWx0cztcbiIsImNvbnN0IGRlc2NTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmRlc2NMYWJlbC5odG1sRm9yID0gJ3RvZG8tZGVzYy1pbnB1dCc7XG5kZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRlc2NJbnB1dC5pZCA9ICd0b2RvLWRlc2MtaW5wdXQnO1xuZGVzY0lucHV0LnR5cGUgPSAndGV4dCc7XG5kZXNjSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XG5kZXNjU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuZGVzY1NlY3Rpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5kZXNjU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG5leHBvcnQgZGVmYXVsdCBkZXNjU2VjdGlvbjsiLCJjb25zdCBkdWVEYXRlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5kdWVEYXRlTGFiZWwuaHRtbEZvciA9ICd0b2RvLWR1ZWRhdGUtaW5wdXQnO1xuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5kdWVEYXRlSW5wdXQuaWQgPSAndG9kby1kdWVkYXRlLWlucHV0JztcbmR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlZGF0ZSc7XG5kdWVEYXRlU2VjdGlvbi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuZHVlRGF0ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5kdWVEYXRlU2VjdGlvbi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG5leHBvcnQgZGVmYXVsdCBkdWVEYXRlU2VjdGlvbjsiLCJjb25zdCBub3Rlc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbm5vdGVzTGFiZWwuaHRtbEZvciA9ICd0b2RvLW5vdGVzLWlucHV0Jztcbm5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5ub3Rlc0lucHV0LmlkID0gJ3RvZG8tbm90ZXMtaW5wdXQnO1xubm90ZXNJbnB1dC5uYW1lID0gJ25vdGVzJztcbm5vdGVzSW5wdXQucm93cyA9ICc1Jztcbm5vdGVzSW5wdXQuY29scyA9ICczMyc7XG5ub3Rlc0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIHBvaW50cyBvZiBub3RlIGZvciB0aGlzIHRvZG8uLi4nO1xubm90ZXNTZWN0aW9uLmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xubm90ZXNTZWN0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xubm90ZXNTZWN0aW9uLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuXG5leHBvcnQgZGVmYXVsdCBub3Rlc1NlY3Rpb247IiwiY29uc3QgcHJpb3JpdHlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbmNvbnN0IHByaW9yaXR5TGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG5wcmlvcml0eUxlZ2VuZC50ZXh0Q29udGVudCA9ICdUb2RvIFByaW9yaXR5JztcbnByaW9yaXR5U2VjdGlvbi5hcHBlbmRDaGlsZChwcmlvcml0eUxlZ2VuZCk7XG5jb25zdCBwcmlvcml0eUxpc3RWYWx1ZXMgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddO1xucHJpb3JpdHlMaXN0VmFsdWVzLmZvckVhY2goKHBWYWwpID0+IHtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByaW9yaXR5SW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gIHByaW9yaXR5SW5wdXQuaWQgPSBgdG9kby0ke3BWYWx9LXByaW9yaXR5YDtcbiAgcHJpb3JpdHlJbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHBWYWw7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBwcmlvcml0eUlucHV0LmlkO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gcFZhbDtcbiAgcHJpb3JpdHlTZWN0aW9uLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBwcmlvcml0eVNlY3Rpb24uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG59KTtcbnByaW9yaXR5U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcjdG9kby1tZWRpdW0tcHJpb3JpdHknKS5jaGVja2VkID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpb3JpdHlTZWN0aW9uOyIsImNvbnN0IGdldFN1Ym1pdFNlY3Rpb24gPSAoZm9ybUZvcikgPT4ge1xuICBjb25zdCBzdWJtaXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICBzdWJtaXRCdXR0b24udmFsdWUgPSBgQ3JlYXRlICR7Zm9ybUZvci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKS5jb25jYXQoZm9ybUZvci5zbGljZSgxKSl9YDtcbiAgc3VibWl0U2VjdGlvbi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICByZXR1cm4gc3VibWl0U2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN1Ym1pdFNlY3Rpb247IiwiY29uc3QgZ2V0VGl0bGVTZWN0aW9uID0gKGZvcm1Gb3IpID0+IHtcbiAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGl0bGVMYWJlbC5odG1sRm9yID0gYCR7Zm9ybUZvcn0tdGl0bGUtaW5wdXRgO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlSW5wdXQuaWQgPSB0aXRsZUxhYmVsLmh0bWxGb3I7XG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIHRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgcmV0dXJuIHRpdGxlU2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRpdGxlU2VjdGlvbjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHRpdGxlSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZV9zZWN0aW9uJztcbmltcG9ydCBzdWJtaXRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9zdWJtaXRfc2VjdGlvbic7XG5pbXBvcnQgcmVuZGVyQXBwRGF0YSBmcm9tICcuLi8uLi9kaXNwbGF5L2Rpc3BsYXlfcmVzdWx0cyc7XG5pbXBvcnQgeyBvcGVuUHJvamVjdFRhYiB9IGZyb20gJy4uLy4uL2Rpc3BsYXkvY2hhbmdlX2RvbSc7XG5cbmNvbnN0IGdldFByb2plY3RGb3JtID0gKGZvcm1BY3Rpb24pID0+IHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHByb2plY3RGb3JtLmlkID0gJ25ldy1wcm9qZWN0JztcblxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KCdwcm9qZWN0JykpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24oJ3Byb2plY3QnKSk7XG5cbiAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUlucHV0cyA9IHtcbiAgICAgIHRpdGxlOiBwcm9qZWN0Rm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSxcbiAgICB9O1xuICAgIGNvbnN0IHByb2plY3QgPSBmb3JtQWN0aW9uKHByb2plY3RGb3JtSW5wdXRzKTtcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIGNvbnN0IGZvcm1Nb2RhbEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0tYm94Jyk7XG4gICAgZm9ybU1vZGFsQm94LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpO1xuICAgIHJlbmRlckFwcERhdGEoKTtcbiAgICBvcGVuUHJvamVjdFRhYihwcm9qZWN0LmdldElkKCkpO1xuICB9KTtcblxuICByZXR1cm4gcHJvamVjdEZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm9qZWN0Rm9ybTsiLCJpbXBvcnQgdGl0bGVJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL3RpdGxlX3NlY3Rpb24nO1xuaW1wb3J0IGRlc2NJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2NyaXB0aW9uX3NlY3Rpb24nO1xuaW1wb3J0IGR1ZURhdGVJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2R1ZV9kYXRlX3NlY3Rpb24nO1xuaW1wb3J0IHByaW9yaXR5SW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9wcmlvcml0eV9zZWN0aW9uJztcbmltcG9ydCBub3Rlc0lucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvbm90ZXNfc2VjdGlvbic7XG5pbXBvcnQgc3VibWl0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvc3VibWl0X3NlY3Rpb24nO1xuaW1wb3J0IHJlbmRlckFwcERhdGEgZnJvbSAnLi4vLi4vZGlzcGxheS9kaXNwbGF5X3Jlc3VsdHMnO1xuaW1wb3J0IHsgb3BlblRvZG9UYWIgfSBmcm9tICcuLi8uLi9kaXNwbGF5L2NoYW5nZV9kb20nO1xuXG5jb25zdCBnZXRUb2RvRm9ybSA9IChmb3JtQWN0aW9uKSA9PiB7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICB0b2RvRm9ybS5pZCA9ICduZXctdG9kbyc7XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCgndG9kbycpKTtcblxuICBjb25zdCBwcm9qZWN0SWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByb2plY3RJZElucHV0Lm5hbWUgPSAncHJvamVjdGlkJztcbiAgcHJvamVjdElkSW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICBwcm9qZWN0SWRJbnB1dC5pZCA9ICdwcm9qZWN0LWlucHV0JztcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdElkSW5wdXQpO1xuXG4gIGNvbnN0IHRvZG9JZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb0lkSW5wdXQubmFtZSA9ICd0b2RvaWQnO1xuICB0b2RvSWRJbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gIHRvZG9JZElucHV0LmlkID0gJ3RvZG8taW5wdXQnO1xuICB0b2RvSWRJbnB1dC52YWx1ZSA9ICctMSc7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9JZElucHV0KTtcblxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbigndG9kbycpKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvRm9ybUlucHV0cyA9IHtcbiAgICAgIHRpdGxlOiB0b2RvRm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0b2RvRm9ybS5lbGVtZW50cy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGR1ZWRhdGU6IHRvZG9Gb3JtLmVsZW1lbnRzLmR1ZWRhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eTogdG9kb0Zvcm0uZWxlbWVudHMucHJpb3JpdHkudmFsdWUsXG4gICAgICBub3RlczogdG9kb0Zvcm0uZWxlbWVudHMubm90ZXMudmFsdWUsXG4gICAgICBwcm9qZWN0SWQ6IE51bWJlcih0b2RvRm9ybS5lbGVtZW50cy5wcm9qZWN0aWQudmFsdWUpLFxuICAgICAgdG9kb0lkOiBOdW1iZXIodG9kb0Zvcm0uZWxlbWVudHMudG9kb2lkLnZhbHVlKSxcbiAgICAgIGNoZWNrbGlzdDogW10sXG4gICAgfTtcbiAgICBjb25zdCB0b2RvID0gZm9ybUFjdGlvbih0b2RvRm9ybUlucHV0cyk7XG4gICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICBjb25zdCBmb3JtTW9kYWxCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtLWJveCcpO1xuICAgIGZvcm1Nb2RhbEJveC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKTtcbiAgICByZW5kZXJBcHBEYXRhKCk7XG4gICAgb3BlblRvZG9UYWIodG9kby5nZXRUb2RvSWQoKSwgdG9kby5nZXRQcm9qZWN0SWQoKSk7XG4gIH0pO1xuXG4gIHJldHVybiB0b2RvRm9ybTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRvZG9Gb3JtO1xuIiwiaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gJy4uL21vZGVscy90b2RvX2ZhY3RvcnknO1xuaW1wb3J0IHsgbmV3UHJvamVjdEluc3RhbmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3RfZmFjdG9yeSc7XG5pbXBvcnQgeyBnZXRBcHBEYXRhLCBzdG9yZUFwcERhdGEgfSBmcm9tICcuLi9tb2RlbHMvZGF0YSc7XG5cbmNvbnN0IG5leHRUb2RvSWQgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0b2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcbiAgY29uc3QgbnVtVG9kb3MgPSB0b2Rvcy5sZW5ndGg7XG4gIGNvbnN0IHRvZG9JZCA9IG51bVRvZG9zID09PSAwID8gMCA6IHRvZG9zW251bVRvZG9zIC0gMV0uZ2V0VG9kb0lkKCkgKyAxO1xuICByZXR1cm4gdG9kb0lkO1xufTtcblxuY29uc3QgbmV4dFByb2plY3RJZCA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICBjb25zdCBudW1Qcm9qZWN0cyA9IHByb2plY3RMaXN0Lmxlbmd0aDtcbiAgY29uc3QgcHJvamVjdElkID0gbnVtUHJvamVjdHMgPT09IDAgPyAxIDogcHJvamVjdExpc3RbbnVtUHJvamVjdHMgLSAxXS5nZXRJZCgpICsgMTtcbiAgcmV0dXJuIHByb2plY3RJZDtcbn07XG5cbmNvbnN0IGFkZE5ld1RvZG9Ub1Byb2plY3QgPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZWRhdGUsXG4gIHByaW9yaXR5LFxuICBub3RlcyxcbiAgcHJvamVjdElkLFxuICB0b2RvSWQsXG4gIGNoZWNrbGlzdCxcbn0pID0+IHtcbiAgbGV0IHRvZG87XG4gIGNvbnN0IHByb2plY3RMaWJyYXJ5ID0gZ2V0QXBwRGF0YSgpO1xuICBjb25zdCB7IGRlZmF1bHRQcm9qZWN0LCBvdGhlclByb2plY3RzIH0gPSBwcm9qZWN0TGlicmFyeTtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJZCA9PT0gMFxuICAgID8gZGVmYXVsdFByb2plY3RcbiAgICA6IG90aGVyUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gcHJvamVjdElkKTtcbiAgaWYgKHRvZG9JZCA9PT0gLTEpIHtcbiAgICB0b2RvSWQgPSBuZXh0VG9kb0lkKHByb2plY3QpO1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeShcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVkYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBub3RlcyxcbiAgICAgIHByb2plY3RJZCxcbiAgICAgIHRvZG9JZCxcbiAgICAgIGNoZWNrbGlzdCxcbiAgICApO1xuICAgIHByb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICB0b2RvID0gbmV3VG9kbztcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcbiAgICBjb25zdCB0b2RvVG9VcGRhdGUgPSB0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5nZXRUb2RvSWQoKSA9PT0gdG9kb0lkKTtcbiAgICBjb25zdCBuZXdUaXRsZSA9IHRpdGxlO1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgY29uc3QgbmV3RHVlRGF0ZSA9IGR1ZWRhdGU7XG4gICAgY29uc3QgbmV3UHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBjb25zdCBuZXdOb3RlcyA9IG5vdGVzO1xuICAgIGNvbnN0IG5ld0NoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICB0b2RvVG9VcGRhdGUudXBkYXRlKHtcbiAgICAgIG5ld1RpdGxlLFxuICAgICAgbmV3RGVzY3JpcHRpb24sXG4gICAgICBuZXdEdWVEYXRlLFxuICAgICAgbmV3UHJpb3JpdHksXG4gICAgICBuZXdOb3RlcyxcbiAgICAgIG5ld0NoZWNrbGlzdCxcbiAgICB9KTtcbiAgICB0b2RvID0gdG9kb1RvVXBkYXRlO1xuICB9XG4gIHN0b3JlQXBwRGF0YShwcm9qZWN0TGlicmFyeSk7XG4gIHJldHVybiB0b2RvO1xufTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICh7XG4gIHRpdGxlLFxufSkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldEFwcERhdGEoKTtcbiAgY29uc3QgcHJvamVjdElkID0gbmV4dFByb2plY3RJZChwcm9qZWN0cy5vdGhlclByb2plY3RzKTtcbiAgY29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3RJbnN0YW5jZSh0aXRsZSwgcHJvamVjdElkKTtcbiAgcHJvamVjdHMub3RoZXJQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBzdG9yZUFwcERhdGEocHJvamVjdHMpO1xuICByZXR1cm4gcHJvamVjdDtcbn07XG5cbmV4cG9ydCB7XG4gIGFkZE5ld1RvZG9Ub1Byb2plY3QsXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG59O1xuIiwiaW1wb3J0IGdldFRvZG9Gb3JtIGZyb20gJy4vZm9ybXMvdG9kb19mb3JtJztcbmltcG9ydCBnZXRQcm9qZWN0Rm9ybSBmcm9tICcuL2Zvcm1zL3Byb2plY3RfZm9ybSc7XG5pbXBvcnQgeyBhZGROZXdUb2RvVG9Qcm9qZWN0LCBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSAnLi9tZXRob2RzJztcblxuY29uc3QgZ2V0TW9kYWwgPSAoZm9ybVR5cGUpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuaWQgPSBgJHtmb3JtVHlwZX0tZm9ybS1ib3hgO1xuICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwnO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxIZWFkZXIuY2xhc3NOYW1lID0gJ21vZGFsLWhlYWRlcic7XG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnY2xvc2UnO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gIGNsb3NlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmb3JtVHlwZX0tZm9ybS1ib3hgKTtcbiAgICBtb2RhbEJveC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKTtcbiAgfTtcbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaGVhZGVyVGV4dC5jbGFzc05hbWUgPSAnZm9ybS10aXRsZSc7XG4gIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbEJvZHkuY2xhc3NOYW1lID0gJ21vZGFsLWJvZHknO1xuICBsZXQgZm9ybTtcbiAgc3dpdGNoIChmb3JtVHlwZSkge1xuICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgZm9ybSA9IGdldFByb2plY3RGb3JtKGNyZWF0ZU5ld1Byb2plY3QpO1xuICAgICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdFbnRlciBQcm9qZWN0IE5hbWUnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndG9kbyc6XG4gICAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0VudGVyIFRvZG8gRGV0YWlscyc7XG4gICAgICBmb3JtID0gZ2V0VG9kb0Zvcm0oYWRkTmV3VG9kb1RvUHJvamVjdCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbiAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCb2R5KTtcblxuICByZXR1cm4gbW9kYWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb2RhbDtcbiIsImltcG9ydCAnYWNjb3JkaW9uL3NyYy9hY2NvcmRpb24uY3NzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGdldE1vZGFsIGZyb20gJy4vZm9ybV9idWlsZGVyL21vZGFsJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9kaXNwbGF5L2Rpc3BsYXlfcmVzdWx0cyc7XG5cbmNvbnN0IGNvbnRlbnRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaDEudGV4dENvbnRlbnQgPSAnVG9EbyBMaXN0IEFwcCc7XG5oMS5pZCA9ICd0aXRsZS10YWcnO1xuY29udGVudFRhZy5hcHBlbmRDaGlsZChoMSk7XG5cbmNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tb2RhbENvbnRhaW5lci5pZCA9ICdtb2RhbC1ib3gnO1xubW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0TW9kYWwoJ3Byb2plY3QnKSk7XG5tb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRNb2RhbCgndG9kbycpKTtcbmNvbnRlbnRUYWcuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG5jb25zdCBkaXNwbGF5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmRpc3BsYXlTZWN0aW9uLmlkID0gJ3Byb2plY3RzLWRhdGEnO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RDb250cm9scy5pZCA9ICdwcm9qZWN0LWNvbnRyb2wnO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWRkUHJvamVjdEJ1dHRvbi5pZCA9ICdhZGQtcHJvamVjdC1idG4nO1xuYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5wcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5hZGRQcm9qZWN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybS1ib3gnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1mb3JtJyk7XG59O1xuZGlzcGxheVNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRyb2xzKTtcblxuY29uc3QgYXR0cmliID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hdHRyaWIuY2xhc3NOYW1lID0gJ2ltYWdlLWF0dHJpYic7XG5hdHRyaWIuaW5uZXJIVE1MID0gYFxuPHNwYW4+UGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BzZWFudG9va3RoZXNlP3V0bV9zb3VyY2U9dW5zcGxhc2gmYW1wO3V0bV9tZWRpdW09cmVmZXJyYWwmYW1wO3V0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+U2VhbiBPLjwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3MvcGhvdG9zL2JlYWNoP3V0bV9zb3VyY2U9dW5zcGxhc2gmYW1wO3V0bV9tZWRpdW09cmVmZXJyYWwmYW1wO3V0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+PC9zcGFuPlxuYDtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXR0cmliKTtcbmNvbnRlbnRUYWcuYXBwZW5kQ2hpbGQoZGlzcGxheVNlY3Rpb24pO1xuXG5yZW5kZXIoKTtcbiIsImltcG9ydCB7IHByb2plY3RGcm9tSlNPTiB9IGZyb20gJy4vcHJvamVjdF9mYWN0b3J5JztcbmltcG9ydCB7IGZha2VEYXRhIH0gZnJvbSAnLi9leGFtcGxlX2RhdGEnO1xuXG5jb25zdCBzdG9yZUFwcERhdGEgPSAoeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9KSA9PiB7XG4gIGNvbnN0IEpTT05pZmllZERhdGEgPSB7fTtcbiAgSlNPTmlmaWVkRGF0YS5kZWZhdWx0UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0LnRvSlNPTigpO1xuICBKU09OaWZpZWREYXRhLm90aGVyUHJvamVjdHMgPSBvdGhlclByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QudG9KU09OKCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShKU09OaWZpZWREYXRhKSk7XG59O1xuXG5cbmNvbnN0IGdldEFwcERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgbGV0IEpTT05pZmllZGRlZmF1bHRQcm9qZWN0O1xuICBsZXQgSlNPTmlmaWVkb3RoZXJQcm9qZWN0cztcbiAgY29uc3QgSlNPTmlmaWVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICBpZiAoIUpTT05pZmllZERhdGEpIHtcbiAgICBKU09OaWZpZWRkZWZhdWx0UHJvamVjdCA9IGZha2VEYXRhLmRlZmF1bHRQcm9qZWN0O1xuICAgIEpTT05pZmllZG90aGVyUHJvamVjdHMgPSBmYWtlRGF0YS5vdGhlclByb2plY3RzO1xuICB9IGVsc2Uge1xuICAgIEpTT05pZmllZGRlZmF1bHRQcm9qZWN0ID0gSlNPTmlmaWVkRGF0YS5kZWZhdWx0UHJvamVjdDtcbiAgICBKU09OaWZpZWRvdGhlclByb2plY3RzID0gSlNPTmlmaWVkRGF0YS5vdGhlclByb2plY3RzO1xuICB9XG4gIGRhdGEuZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RnJvbUpTT04oSlNPTmlmaWVkZGVmYXVsdFByb2plY3QpO1xuICBkYXRhLm90aGVyUHJvamVjdHMgPSBKU09OaWZpZWRvdGhlclByb2plY3RzLm1hcChwcm9qZWN0RGF0YSA9PiBwcm9qZWN0RnJvbUpTT04ocHJvamVjdERhdGEpKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBnZXRUb2RvID0gKHRvZG9JZCwgcHJvamVjdElkKSA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdFByb2plY3QsIG90aGVyUHJvamVjdHMgfSA9IGdldEFwcERhdGEoKTtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJZCA9PT0gMFxuICAgID8gZGVmYXVsdFByb2plY3RcbiAgICA6IG90aGVyUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gcHJvamVjdElkKTtcbiAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG4gIGNvbnN0IHRvZG9Ub1VwZGF0ZSA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmdldFRvZG9JZCgpID09PSB0b2RvSWQpO1xuICByZXR1cm4gdG9kb1RvVXBkYXRlO1xufTtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgaWYgKHByb2plY3RJZCAhPT0gMCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFByb2plY3QsIG90aGVyUHJvamVjdHMgfSA9IGdldEFwcERhdGEoKTtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBvdGhlclByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gcHJvamVjdElkKTtcbiAgICBvdGhlclByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIHN0b3JlQXBwRGF0YSh7IGRlZmF1bHRQcm9qZWN0LCBvdGhlclByb2plY3RzIH0pO1xuICB9XG59O1xuXG5jb25zdCBkZWxldGVUb2RvID0gKHRvZG9JZCwgcHJvamVjdElkKSA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdFByb2plY3QsIG90aGVyUHJvamVjdHMgfSA9IGdldEFwcERhdGEoKTtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJZCA9PT0gMFxuICAgID8gZGVmYXVsdFByb2plY3RcbiAgICA6IG90aGVyUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gcHJvamVjdElkKTtcbiAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG4gIGNvbnN0IHRvZG9JbmRleCA9IHRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uZ2V0VG9kb0lkKCkgPT09IHRvZG9JZCk7XG4gIHRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICBzdG9yZUFwcERhdGEoeyBkZWZhdWx0UHJvamVjdCwgb3RoZXJQcm9qZWN0cyB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldEFwcERhdGEsXG4gIHN0b3JlQXBwRGF0YSxcbiAgZ2V0VG9kbyxcbiAgZGVsZXRlUHJvamVjdCxcbiAgZGVsZXRlVG9kbyxcbn07XG4iLCJpbXBvcnQgeyBuZXdQcm9qZWN0SW5zdGFuY2UgfSBmcm9tICcuL3Byb2plY3RfZmFjdG9yeSc7XG5cbmNvbnN0IGZha2VEYXRhID0ge1xuICBkZWZhdWx0UHJvamVjdDoge1xuICAgIGlkOiAwLFxuICAgIHRpdGxlOiAnTWlzY2VsbGFuZW91cyBUYXNrcycsXG4gICAgdG9kb3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdCYXNpYyBUYXNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgYmFzaWMgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIwLTA4LTE1JyxcbiAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICBjaGVja2xpc3Q6IFtdLFxuICAgICAgICBub3RlczogJ1Rha2Ugb2YgdGhlc2UgdGhpbmdzIHdoaWxlIGRvaW5nIHRoaXMgdGFzay4nLFxuICAgICAgICBwcm9qZWN0SWQ6IDAsXG4gICAgICAgIHRvZG9JZDogMCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgb3RoZXJQcm9qZWN0czogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6ICdNYWluIFByb2plY3QnLFxuICAgICAgdG9kb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnV2FsayBDYXQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGFrZSB0aGUgY2F0IG91dCBmb3IgYSB3YWxrJyxcbiAgICAgICAgICBkdWVEYXRlOiAnMjAyMC0wOC0xNScsXG4gICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICBjaGVja2xpc3Q6IFtdLFxuICAgICAgICAgIG5vdGVzOiAnQ2F0IGlzIGtub3duIHRvIGhhdmUga2lsbGVkIG5laWdoYm91cmhvb2QgZG9ncy4gRG9uXFwndFxcbkxldCBoZXIgcm9hbSBmcmVlLicsXG4gICAgICAgICAgcHJvamVjdElkOiAxLFxuICAgICAgICAgIHRvZG9JZDogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnVG9kbyBMaXN0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ01ha2UgYSB0b2RvIGxpc3QgYXBwIGluIEphdmFzY3JpcHQnLFxuICAgICAgICAgIGR1ZURhdGU6ICcyMDIwLTA4LTIxJyxcbiAgICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgICAgY2hlY2tsaXN0OiBbXSxcbiAgICAgICAgICBub3RlczogJ0RvIHRoZSBkZXNpZ24gZmlyc3QsIGFuZCB0aGVuIHdvcmsgb24gdGhlIG1vZGVscyBldGMuJyxcbiAgICAgICAgICBwcm9qZWN0SWQ6IDEsXG4gICAgICAgICAgdG9kb0lkOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgZGVmYXVsdERhdGEgPSB7XG4gIGRlZmF1bHRQcm9qZWN0OiBuZXdQcm9qZWN0SW5zdGFuY2UoJ01pc2NlbGxhbmVvdXMgVGFza3MnLCAwKSxcbiAgb3RoZXJQcm9qZWN0czogW10sXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0RGF0YSBhcyBkZWZhdWx0LCBmYWtlRGF0YSB9O1xuIiwiaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gJy4vdG9kb19mYWN0b3J5JztcblxuY29uc3QgbmV3UHJvamVjdEluc3RhbmNlID0gKHRpdGxlLCBwcm9qZWN0SWQsIHRvZG9zKSA9PiB7XG4gIHRvZG9zID0gdG9kb3MgfHwgW107XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvSW5zdGFuY2UpID0+IHtcbiAgICB0b2Rvcy5wdXNoKHRvZG9JbnN0YW5jZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBwcm9qZWN0SWQ7XG4gIGNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG5cbiAgY29uc3QgZ2V0VG9kb1RpdGxlcyA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZXMgPSBbXTtcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgdGl0bGVzLnB1c2godG9kby50aXRsZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRpdGxlcztcbiAgfTtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiAoe1xuICAgIHRpdGxlOiBnZXRUaXRsZSgpLFxuICAgIGlkOiBnZXRJZCgpLFxuICAgIHRvZG9zOiB0b2Rvcy5tYXAodG9kbyA9PiB0b2RvLmdldEF0dHJpYnV0ZXMoKSksXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0SWQsXG4gICAgZ2V0VG9kb3MsXG4gICAgYWRkVG9kbyxcbiAgICBnZXRUb2RvVGl0bGVzLFxuICAgIHRvSlNPTixcbiAgfTtcbn07XG5cbmNvbnN0IHByb2plY3RGcm9tSlNPTiA9ICgoeyB0aXRsZSwgaWQsIHRvZG9zIH0pID0+IHtcbiAgY29uc3QgdG9kb0luc3RhbmNlcyA9IHRvZG9zLm1hcCgoe1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgcHJvamVjdElkLFxuICAgIHRvZG9JZCxcbiAgICBjaGVja2xpc3QsXG4gIH0pID0+IHRvZG9GYWN0b3J5KFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgcHJvamVjdElkLFxuICAgIHRvZG9JZCxcbiAgICBjaGVja2xpc3QsXG4gICkpO1xuICByZXR1cm4gbmV3UHJvamVjdEluc3RhbmNlKHRpdGxlLCBpZCwgdG9kb0luc3RhbmNlcyk7XG59KTtcblxuZXhwb3J0IHsgbmV3UHJvamVjdEluc3RhbmNlLCBwcm9qZWN0RnJvbUpTT04gfTtcbiIsImNvbnN0IG5ld1RvZG9JbnN0YW5jZSA9IChcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgbm90ZXMsXG4gIHByb2plY3RJZCxcbiAgdG9kb0lkLFxuICBjaGVja2xpc3QsXG4pID0+IHtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gIGNvbnN0IGdldE5vdGVzID0gKCkgPT4gbm90ZXM7XG4gIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHByb2plY3RJZDtcbiAgY29uc3QgZ2V0VG9kb0lkID0gKCkgPT4gdG9kb0lkO1xuICBjb25zdCBnZXRBdHRyaWJ1dGVzID0gKCkgPT4gKHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RJZCxcbiAgICB0b2RvSWQsXG4gICAgY2hlY2tsaXN0LFxuICB9KTtcblxuICBjb25zdCB1cGRhdGUgPSAoe1xuICAgIG5ld1RpdGxlLFxuICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgIG5ld0R1ZURhdGUsXG4gICAgbmV3UHJpb3JpdHksXG4gICAgbmV3Tm90ZXMsXG4gICAgbmV3Q2hlY2tsaXN0LFxuICB9KSA9PiB7XG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgbm90ZXMgPSBuZXdOb3RlcztcbiAgICBjaGVja2xpc3QgPSBuZXdDaGVja2xpc3Q7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBdHRyaWJ1dGVzLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0Tm90ZXMsXG4gICAgZ2V0UHJvamVjdElkLFxuICAgIGdldFRvZG9JZCxcbiAgICB1cGRhdGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdUb2RvSW5zdGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==