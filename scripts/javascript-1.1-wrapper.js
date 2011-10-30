/*jslint
  undef: true,
  browser: false,
  // maxlen: 80
  // newcap: false
  // strict: true
*/

/*==============================================================================
  Boolean
*/

// Boolean.prototype.toSource
// Boolean.prototype.toString
// Boolean.prototype.valueOf

/*
  Function methods
*/

/**
 * @return {String} source of the current function
 * @since JavaScript 1.3
 */
function functionProtoFunctToSource() {
  return this.toString();
}

// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference%3aGlobal_Objects%3aFunction%3atoString
// function toString(indentation) {
//   
// }

function functionProtoFuncApply() {
  // "this" refers to caller
  // "arguments" refers to this proto function
  
  var funcCode = this.toSource();
  var indexOfBracket = funcCode.indexOf('{');
  funcCode = funcCode.substring(indexOfBracket + 1);
  var indexOfLastBracket = funcCode.indexOf('}');
  funcCode = funcCode.substring(0, indexOfLastBracket);
  var indexOfThisStatement = funcCode.indexOf('this');
  // alert(indexOfThisStatement);
  // alert(funcCode.substring(0, 8));
  // alert(funcCode.length);
  
  var codeBeforeThis = funcCode.substring(0, indexOfThisStatement);
  var codeAfterThis = funcCode.substring(indexOfThisStatement + 4, funcCode.length - 1);
  
  var newCode = codeBeforeThis + 'thisRef' + codeAfterThis;
  // alert(newCode);
  var newMethod = new Function('thisRef', newCode);
  newMethod(arguments[0]);
  
  //--------
  // var inner = new Function('method', 'arg', 'return method;');
  //   // inner(this, arguments[0]);
  //   var test = arguments[0];
  //   with (this) {
  //     // this(test);
  //     with(test) {
  //       alert(this);
  //     }
  //     // this(this);
  //     // inner(test);
  //   }
  //   // var test = new this(arguments[0]);
  //   // alert(test);
}

function functionProtoFuncCall() {
  this(arguments);
}

Function.prototype.apply = functionProtoFuncApply;
Function.prototype.call = functionProtoFuncApply;
Function.prototype.toSource = functionProtoFunctToSource;

/*
  Function properties
*/
// Function.prototype.arguments
// Function.prototype.arity
// Function.prototype.caller
// Function.prototype.constructor
// Function.prototype.length
// Function.prototype.name
// Function.prototype.__parent__
// Function.prototype.__proto__

/*
  Function methods
*/
// Function.prototype.apply
// Function.prototype.call
// Function.prototype.toSource
// Function.prototype.toString

// Already defined
// Function.prototype.length
// function arity() {
//  return arguments.length;
// }
// 
// Function.prototype.arity = arity();

/*==============================================================================
  Number
*/
// Date.prototype.now
// Date.prototype.parse
// Date.prototype.UTC

/*==============================================================================
  Number
*/
// Number.prototype.MAX_VALUE
// Number.prototype.MIN_VALUE
// Number.prototype.NaN
// Number.prototype.NEGATIVE_INFINITY
// Number.prototype.POSITIVE_INFINITY

// Number.prototype.toExponential
// Number.prototype.toFixed
// Number.prototype.toLocaleString
// Number.prototype.toPrecision
// Number.prototype.toSource
// Number.prototype.toString
// Number.prototype.valueOf

/*==============================================================================
  Infinity
*/

function Infinity() {
  
}

/*==============================================================================
  Object
*/

function objectProtoFuncHasOwnProperty(property) {
  var prop = property.toString(property);
  if (this[property]) {
    return true;
  }
  else {
    return false;
  }
  // alert(this);
}

function objectProtoFuncPropertyIsEnumerable(property) {
  var prop = property.toString(property);
  if (this[property]) {
    return true;
  }
  else {
    return false;
  }
}

Object.prototype.hasOwnProperty = objectProtoFuncHasOwnProperty;
// Object.prototype.__parent__
// Object.prototype.__proto__
// Object.prototype.__defineGetter__
// Object.prototype.__defineSetter__
Object.prototype.propertyIsEnumerable = objectProtoFuncPropertyIsEnumerable;
// Object.prototype.watch
// Object.prototype.unwatch
// Object.prototype.toLocaleString
// Object.prototype.__lookupGetter__
// Object.prototype.__lookupSetter__
// Object.prototype.__noSuchMethod__
// Object.prototype.isPrototypeOf

// Object.prototype.create
// Object.prototype.defineProperty
// Object.prototype.defineProperties
// Object.prototype.getOwnPropertyDescriptor
// Object.prototype.getPrototypeOf


/*==============================================================================
  String
*/

function stringProtoFuncSubstr() {
  
}

/**
 * @param {Number} index index char for the code
 * @since JavaScript 1.2
 */
function stringProtoFuncCharCodeAt(pos) {

}

function stringProtoFuncConcat() {
  
}

function stringProtoFuncLocaleCompare() {
  
}

function stringProtoFuncMatch() {
  
}

function stringProtoFuncQuote() {
  
}

function stringProtoFuncReplace() {
  
}

function stringProtoFuncSearch() {
  
}

function stringProtoFuncSlice() {
  
}

function stringProtoFuncTrim() {
  
}

function stringProtoFuncTrimLeft() {
  
}

function stringProtoFuncTrimRight() {
  
}

function stringProtoFuncToLocaleLowerCase() {
  
}

function stringProtoFuncToLocaleUpperCase() {
  
}

String.prototype.charCodeAt = stringProtoFuncCharCodeAt;
// String.prototype.fromCharCode
// String.prototype.charAt
// String.prototype.charCodeAt
// String.prototype.concat
// String.prototype.indexOf
// String.prototype.lastIndexOf
// String.prototype.localeCompare
// String.prototype.match
// String.prototype.quote
// String.prototype.replace
// String.prototype.search
// String.prototype.slice
// String.prototype.split
// String.prototype.substr
// String.prototype.substring
// String.prototype.toLocaleLowerCase
// String.prototype.toLocaleUpperCase
// String.prototype.toLowerCase
// String.prototype.toSource
// String.prototype.toString
// String.prototype.toUpperCase
// String.prototype.trim
// String.prototype.trimLeft
// String.prototype.trimRight
// String.prototype.valueOf

/*
  HTML wrapper methods
*/
// String.prototype.anchor
// String.prototype.big
// String.prototype.blink
// String.prototype.bold
// String.prototype.fixed
// String.prototype.fontcolor
// String.prototype.fontsize
// String.prototype.italics
// String.prototype.link
// String.prototype.small
// String.prototype.strike
// String.prototype.sub
// String.prototype.sup

/**
 * @param {String} str string to match
 * @return {Object}
 */
function exec(str) {
  return str;
}

// function matchStar(regexpChar, regexp, text) {
//   do {
//     if (matchHere(regexp, text)) {
//       return 1;
//     }
//   } while (text[0] && (text[1] == regexpChar || regexpChar == '.'));
//   return 0;
// }
// function matchHere(regexp, text) {
//   if (!regexp[0]) {
//     return 1;
//   }
//   if (regexp[1] === '*') {
//     return matchStar(regexp[0], regexp.slice(2), text);
//   }
//   if (regexp[0] === '$' && !regexp[1]) {
//     return text[0] ? false : true;
//   }
//   if (text[0] && (regexp[0] === '.' || regexp[0] === text[0])) {
//     return matchHere(regexp.slice(1), text.slice(1));
//   }
//   return 0;
// }
// 
// /*
//   @return {Array}
// */
// function match(regexp /*pattern*/, text) {
//   if (regexp[0] === '^') {
//     return matchHere(regexp.slice(1), text);
//   }
//   do {
//     if (matchHere(regexp, text)) {
//       return 1;
//     }
//     text = text.slice(1);
//   } while (text[0]);
//   return 0;
// }

function match() {}

function replace() {

}

function RegExp(pattern, flags) {
  this.pattern = pattern;
  this.flags = flags;

  this.lastIndex = 0;
  this.ignoreCase = false;
  this.global = false;
  this.multiline = false;
  this.source = null;
  return this;
}

RegExp.prototype = Function.prototype;
RegExp.prototype.exec = exec;
RegExp.prototype.match = match;
RegExp.prototype.replace = replace;

/**=============================================================================
 * Array methods
*/

function arrayProtoFuncIsArray() {
  return this &&
    typeof this == 'object' &&
    typeof this.length == 'number' &&
    typeof this.reverse == 'function';// &&
    // !(this.propertyIsEnumerable('length'));
}

/*
  Mutator methods
*/

function arrayProtoFuncPush(element) {
  this[this.length] = element;
  var argsLength = arguments.length;
  for (var n = 0; n < argsLength; n++) {
    
  }
  argsLength = null;
  return n;
}

function arrayProtoFuncPop() {
  var index = this.length - 1;
  var element = this[index];
  delete this[index];
  this.length = index;
  index = null;
  return element;
}

function arrayProtoFuncSlice(begin, end) {
  // alert(begin[0]);
  var theBegin = begin || 0;
  var theEnd = end || this.length || 0;
  var array = new Array();
  for (var n = theBegin; n <= theEnd; n++) {
    array.push(this[n]);
  }
  theBegin = theEnd = n = null;
  return array;
}

/**
 * @return {Object} first element of the array
 * @since JavaScript 1.2
 */
function arrayProtoFuncShift() {
  var element = this[0],
      length = this.length;
  if (length < 1) {
    return null;
  }
  // we cannot assign this, so iterating through array
  for (var idx = 1; idx < length; idx++) {
    this[idx - 1] = this[idx];
  }
  this[length - 1] = null;
  this.length = length - 1;
  length = null;
  return element;
}

/**
 * @return {Object} arguments set
 * @since JavaScript 1.2
 */
function arrayProtoFuncUnShift() {
  var length = this.length,
      argsLength = arguments.length-1;
  
  // Moving
  for (var idx = length; idx > 0; idx--) {
    this[idx + argsLength - 1] = this[idx - 1];
  }
  
  // Inserting
  for (idx = 0; idx < argsLength; idx++) {
    this[idx] = arguments[idx];
  }
  return length;
}

/**
 * @param {Number} index at which to start changing the array
 * @return {Array} an array containing the removed elements
 * @since JavaScript 1.2
 */
function arrayProtoFuncSplice(index, howMany) {
  var length = this.length,
      argsLength = arguments.length,
      deleteCount = 0;
  
  if (argsLength < 1) {
    return new Array();
  }
  
  if (!argsLength || !arguments[0]) {
    return null;
  }
  
  deleteCount = length - index;
  
  if (argsLength > 1) {
    deleteCount = Math.min(Math.max(arguments[1], 0), length - index);
  }
  
  var result = new Array();
  for (var idx = 0; idx < deleteCount; idx++) {
    result[idx] = this[idx + index];
  }
  // result.length = deleteCount;
  
  var additionalArgs = Math.max(argsLength - 2, 0);
  if (additionalArgs != deleteCount) {
    if (additionalArgs < deleteCount) {
      if (!index && this.isArray()) {
        
      }
      else {
        for (idx = length; idx > length - deleteCount; idx++) {
          if (this[idx + deleteCount]) {
            this[idx + additionalArgs] = this[idx + deleteCount];
          } else {
            delete this[idx + additionalArgs];
            this.length = this.length - 1; 
          }
        }
        for (idx = length; idx > length - deleteCount + additionalArgs; idx--) {
          delete this[idx - 1];
          this.length = this.length - 1;
        }
      }
    }
    else {
      if (!index && this.isArray()) {
      } else {
        for (idx = length - deleteCount; idx > index; idx--) {
          if (this[idx + deleteCount - 1]) {
            this[idx + additionalArgs - 1] = this[idx + deleteCount - 1];
          }
          else {
            delete this[idx + additionalArgs - 1];
          }
        }
      }
    }
  }
  for (idx = 0; idx < additionalArgs; idx++) {
    this[idx + index] = arguments[idx + 2];
  }
  deleteCount = length = null;
  return result;
}

function arrayProtoFuncConcat() {
  var argsLength = arguments.length;
  // for (var idx = 0; )
  var arr = new Array(),
      n = 0, i = 0, curArg = this;
      alert(curArg);
  while (1) {
    if (arrayProtoFuncIsArray(curArg)) {
      for (var k=0; k < curArg.length; k++) {
        if (curArg[k]) {
          arr[n] = this[k];
        }
        n++;
      }
    } else {
      arr[n] = curArg;
      n++;
    }
    if (i == argsLength) {
      break;
    }
    curArg = arguments[i];
    ++i;
  }
  arr.length = n;
  return arr;
}

function arrayProtoFuncReverse() {
  var arr = new Array(), i;
  for (i = this.length-1; i >= 0; i--) {
    arr[i] = this[this.length-1-i];
  }
  return arr;
}

function arrayProtoFuncIndexOf() {
  var length = this.length,
      searchElement = arguments[0],
      i = arguments[1] || 0;
      
  for (; i < length; i++) {
    if (!this[i]) {
      continue;
    }
    if (searchElement == this[i]) {
      return i;
    }
  }
  return -1;
}

function arrayProtoFuncLastIndexOf() {
  var length = this.length,
      searchElement = arguments[0],
      i = arguments[1] || length - 1;
      
  for (; i >= 0; i--) {
    if (!this[i]) {
      continue;
    }
    if (searchElement == this[i]) {
      return i;
    }
  }
  return -1;
}

function arrayProtoFuncFilter() {
  var length = this.length,
      filterIndex = 0, k = 0,
      resultArray = new Array(),
      func = arguments[0],
      result;
  for (; k < length; k++) {
    result = func(this[k]);
    if (result) {
      resultArray.push(this[k]);
    }
  }
  return resultArray;
}

function arrayProtoFuncForEach() {
  var length = this.length,
      k = 0,
      resultArray = new Array(),
      func = arguments[0],
      applyThis = arguments[1],
      result;
  if (typeof func == 'function') {
    for (; k < length; k++) {
      func(this[k], k, this);
    }
  }
  return undefined;
}



  Array.prototype.isArray = arrayProtoFuncIsArray;

// Array.prototype['[]'] = 'test';
// var arrayProtoFuncPushSupport = Array.prototype.push;
// if (!arrayProtoFuncPushSupport) {
  Array.prototype.push = arrayProtoFuncPush;
// }

// var arrayProtoFuncPopSupport = Array.prototype.pop;
// if (!arrayProtoFuncPopSupport) {
  Array.prototype.pop = arrayProtoFuncPop;
// }

// var arrayProtoFuncSliceSupport = Array.prototype.slice;
// if (arrayProtoFuncSliceSupport) {
  Array.prototype.slice = arrayProtoFuncSlice;
// }
// var arrayProtoFuncShiftSupport = Array.prototype.shift;
// if (arrayProtoFuncShiftSupport) {
  Array.prototype.shift = arrayProtoFuncShift;
// }
// var arrayProtoFuncUnShiftSupport = Array.prototype.unshift;
// if (arrayProtoFuncUnShiftSupport) {
  Array.prototype.unshift = arrayProtoFuncUnShift;
// }
// var arrayProtoFuncSpliceSupport = Array.prototype.splice;
// if (arrayProtoFuncSpliceSupport) {
  Array.prototype.splice = arrayProtoFuncSplice;
// }

  Array.prototype.concat = arrayProtoFuncConcat;

/*
  Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
*/
// Array.prototype.reverse = arrayProtoFuncReverse;

// Array.prototype.sort

// No need
/**
 * @since JavaScript 1.1
 */
// Array.prototype.join
// Array.prototype.toSource

// No need
/**
 * @since JavaScript 1.1
 */
// Array.prototype.toString

/**
 * @return {Object} arguments set
 * @since JavaScript 1.6
 */
Array.prototype.indexOf = arrayProtoFuncIndexOf;
/**
 * @return {Object} arguments set
 * @since JavaScript 1.6
 */
Array.prototype.lastIndexOf = arrayProtoFuncLastIndexOf;

/**
 * @return {Object} arguments set
 * @since JavaScript 1.6
 */
Array.prototype.filter = arrayProtoFuncFilter;

/**
 * @return {Object} arguments set
 * @since JavaScript 1.6
 */
Array.prototype.forEach = arrayProtoFuncForEach;
// Array.prototype.every
// Array.prototype.map
// Array.prototype.some
// Array.prototype.reduce
// Array.prototype.reduceRight
/*==============================================================================
  Error
*/

function Error(message, fileName, lineNumber) {
  this.message = message || null;
  this.fileName = fileName || null;
  this.lineNumber = lineNumber || null;
}

// Error.prototype.constructor
// Error.prototype.message
// Error.prototype.name

// Error.prototype.description
// Error.prototype.number

// Error.prototype.stack

// Error.prototype.toSource
// Error.prototype.toString

function EvalError() {
  
}

function RangeError() {
  
}

function ReferenceError() {
  
}

function SyntaxError() {
  
}

function TypeError() {
  
}

function URIError() {
  
}

function Event() {
  
}

// Event.prototype.AT_TARGET
// Event.prototype.BLUR: 8192
// Event.prototype.BUBBLING_PHASE: 3
// Event.prototype.CAPTURING_PHASE: 1
// Event.prototype.CHANGE: 32768
// Event.prototype.CLICK: 64
// Event.prototype.DBLCLICK: 128
// Event.prototype.DRAGDROP: 2048
// Event.prototype.FOCUS: 4096
// Event.prototype.KEYDOWN: 256
// Event.prototype.KEYPRESS: 1024
// Event.prototype.KEYUP: 512
// Event.prototype.MOUSEDOWN: 1
// Event.prototype.MOUSEDRAG: 32
// Event.prototype.MOUSEMOVE: 16
// Event.prototype.MOUSEOUT: 8
// Event.prototype.MOUSEOVER: 4
// Event.prototype.MOUSEUP: 2
// Event.prototype.SELECT: 16384
// 
// Event.prototype.initEvent: function initEvent() {
// Event.prototype.preventDefault: function preventDefault() {
// Event.prototype.stopImmediatePropagation: function stopImmediatePropagation() {
// Event.prototype.stopPropagation: function stopPropagation() {
// Event.prototype.__proto__: Object
// Event.prototype.__proto__: Object
// Event.prototype.__defineGetter__: function __defineGetter__() {
// Event.prototype.__defineSetter__: function __defineSetter__() {
// Event.prototype.__lookupGetter__: function __lookupGetter__() {
// Event.prototype.__lookupSetter__: function __lookupSetter__() {
// Event.prototype.constructor: function Object() {
// Event.prototype.hasOwnProperty: function hasOwnProperty() {
// Event.prototype.isPrototypeOf: function isPrototypeOf() {
// Event.prototype.propertyIsEnumerable: function propertyIsEnumerable() {
// Event.prototype.toLocaleString: function toLocaleString() {
// Event.prototype.toString: function toString() {
// Event.prototype.valueOf: function valueOf() {

/*
  DOM
*/
function documentCreateElement(tagName) {
  document.write('<'+tagName+'>DIV<'+tagName+'/>');
}

document.createElement = documentCreateElement;

function Node() {
  
}

// Node.prototype.ATTRIBUTE_NODE
// Node.prototype.CDATA_SECTION_NODE
// Node.prototype.COMMENT_NODE
// Node.prototype.DOCUMENT_FRAGMENT_NODE
// Node.prototype.DOCUMENT_NODE
// Node.prototype.DOCUMENT_POSITION_CONTAINED_BY
// Node.prototype.DOCUMENT_POSITION_CONTAINS
// Node.prototype.DOCUMENT_POSITION_DISCONNECTED
// Node.prototype.DOCUMENT_POSITION_FOLLOWING
// Node.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
// Node.prototype.DOCUMENT_POSITION_PRECEDING
// Node.prototype.DOCUMENT_TYPE_NODE
// Node.prototype.ELEMENT_NODE
// Node.prototype.ENTITY_NODE
// Node.prototype.ENTITY_REFERENCE_NODE
// Node.prototype.NOTATION_NODE
// Node.prototype.PROCESSING_INSTRUCTION_NODE
// Node.prototype.TEXT_NODE

// Node.prototype.addEventListener
// Node.prototype.appendChild
// Node.prototype.cloneNode
// Node.prototype.compareDocumentPosition
// Node.prototype.dispatchEvent
// Node.prototype.hasAttributes
// Node.prototype.hasChildNodes
// Node.prototype.insertBefore
// Node.prototype.isDefaultNamespace
// Node.prototype.isEqualNode
// Node.prototype.isSameNode
// Node.prototype.isSupported
// Node.prototype.lookupNamespaceURI
// Node.prototype.lookupPrefix
// Node.prototype.normalize
// Node.prototype.removeChild
// Node.prototype.removeEventListener
// Node.prototype.replaceChild
// Node.prototype.__proto__

function Element() {
  
}

// Element.prototype.blur
// Element.prototype.contains
// Element.prototype.focus
// Element.prototype.getAttribute
// Element.prototype.getAttributeNS
// Element.prototype.getAttributeNode
// Element.prototype.getAttributeNodeNS
// Element.prototype.getBoundingClientRect
// Element.prototype.getClientRects
// Element.prototype.getElementsByClassName
// Element.prototype.getElementsByTagName
// Element.prototype.getElementsByTagNameNS
// Element.prototype.hasAttribute
// Element.prototype.hasAttributeNS
// Element.prototype.querySelector
// Element.prototype.querySelectorAll
// Element.prototype.removeAttribute
// Element.prototype.removeAttributeNS
// Element.prototype.removeAttributeNode
// Element.prototype.scrollByLines
// Element.prototype.scrollByPages
// Element.prototype.scrollIntoView
// Element.prototype.scrollIntoViewIfNeeded
// Element.prototype.setAttribute
// Element.prototype.setAttributeNS
// Element.prototype.setAttributeNode
// Element.prototype.setAttributeNodeNS
// Element.prototype.webkitMatchesSelector
// Element.prototype.__proto_

function Entity() {
  
}

function EntityReference() {
  
}

function Notation() {
  
}

function ProcessingInstruction() {
  
}

function Comment() {
  
}

function CDATASection() {
  
}

function Attr() {
  
}

function Text() {
  
}

function documentGetElementById(id) {
  alert(id);
}

function documentClear() {
  
}

function documentHasFocus() {
  
}

function documentProtoAdoptNode() {
  alert('Adopt');
}

document.prototype = new Object();
document.adoptNode = documentProtoAdoptNode;

document.getElementById = documentGetElementById;
document.clear = documentClear;
document.hasFocus = documentHasFocus;

function HTMLDivElement() {
  
}