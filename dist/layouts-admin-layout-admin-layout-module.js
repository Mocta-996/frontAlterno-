(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "0WpG":
/*!*****************************************************************!*\
  !*** ./node_modules/@ngui/map/__ivy_ngcc__/esm2015/ngui-map.js ***!
  \*****************************************************************/
/*! exports provided: BicyclingLayer, NavigatorGeolocation, OptionBuilder, NG_MAP_CONFIG_TOKEN, NgMapApiLoader, NgMapAsyncApiLoader, NgMapAsyncCallbackApiLoader, NguiMapComponent, InfoWindow, CustomMarker, Circle, DataLayer, DirectionsRenderer, DrawingManager, GeoCoder, GroundOverlay, HeatmapLayer, KmlLayer, Marker, NguiMap, PlacesAutoComplete, Polygon, Polyline, StreetViewPanorama, TrafficLayer, TransitLayer, NguiMapModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return BicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorGeolocation", function() { return NavigatorGeolocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionBuilder", function() { return OptionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_MAP_CONFIG_TOKEN", function() { return NG_MAP_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapApiLoader", function() { return NgMapApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncApiLoader", function() { return NgMapAsyncApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncCallbackApiLoader", function() { return NgMapAsyncCallbackApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapComponent", function() { return NguiMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return InfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarker", function() { return CustomMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayer", function() { return DataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return DirectionsRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoCoder", function() { return GeoCoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return KmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMap", function() { return NguiMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesAutoComplete", function() { return PlacesAutoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return TrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return TransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapModule", function() { return NguiMapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BaseMapDirective; });
/* harmony import */ var C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * return json string from json-like string
 * @param {?} str
 * @return {?}
 */


var _c0 = ["*"];
var _c1 = ["template"];

function jsonize(str) {
  try {
    // if parsable already, return as it is
    JSON.parse(str);
    return str;
  } catch (
  /** @type {?} */
  e) {
    // if not parsable, change little
    return str.replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
    // wrap keys without double quote
    function (_, $1) {
      return '"' + $1 + '":';
    }).replace(/'([^']+)'/g, // replacing single quote to double quote
    // replacing single quote to double quote
    function (_, $1) {
      return '"' + $1 + '"';
    });
  }
}
/**
 * Returns string to an object by using JSON.parse()
 * @param {?} input
 * @return {?}
 */


function getJSON(input) {
  if (typeof input === 'string') {
    var
    /** @type {?} */
    re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng

    if (input.match(re)) {
      input = '[' + input + ']';
    }

    return JSON.parse(jsonize(input));
  } else {
    return input;
  }
}
/**
 * json type definition
 * @record
 */

/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 * @param {?} str
 * @return {?}
 */


function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}
/**
 * @return {?}
 */


function isMapsApiLoaded() {
  return typeof google === 'object' && typeof google.maps === 'object';
}
/**
 * @param {?} component
 * @param {?} libName
 * @return {?}
 */


function missingLibraryError(component, libName) {
  return Error("".concat(component, ": library '").concat(libName, "' is missing, please ensure to include it in a 'libraries' parameter.\n    Example:\n      NguiMapModule.forRoot({\n        apiUrl: 'https://maps.googleapis.com/maps/api/js?libraries=").concat(libName, "'\n      })\n  "));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @abstract
 */


var BaseMapDirective = /*#__PURE__*/function () {
  /**
   * @param {?} nguiMapComponent
   * @param {?} mapObjectName
   * @param {?} inputs
   * @param {?} outputs
   */
  function BaseMapDirective(nguiMapComponent, mapObjectName, inputs, outputs) {
    var _this = this;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BaseMapDirective);

    this.nguiMapComponent = nguiMapComponent;
    this.mapObjectName = mapObjectName;
    this.inputs = inputs;
    this.outputs = outputs; // this should be redefined on each childr directive

    this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this._subscriptions = [];
    this.nguiMap = this.nguiMapComponent['nguiMap'];
    this.optionBuilder = this.nguiMapComponent['optionBuilder']; // all outputs must be initialized

    this.outputs.forEach(function (output) {
      return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    });
    this.mapObjectName = mapObjectName;
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(BaseMapDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      if (this.nguiMapComponent.mapIdledOnce) {
        // map is ready already
        this.initialize();
      } else {
        this.nguiMapComponent.mapReady$.subscribe(function (map) {
          return _this2.initialize();
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "initialize",
    value: function initialize() {
      this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this); // will be set after geocoded

      typeof this.objectOptions.position === 'string' && delete this.objectOptions.position;
      typeof this.objectOptions.center === 'string' && delete this.objectOptions.center; // noinspection TypeScriptUnresolvedFunction

      if (this.libraryName) {
        if (!google.maps[this.libraryName]) {
          throw missingLibraryError(this.mapObjectName, this.libraryName);
        }

        this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
      } else {
        this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
      }

      this.mapObject.setMap(this.nguiMapComponent.map);
      this.mapObject['mapObjectName'] = this.mapObjectName;
      this.mapObject['nguiMapComponent'] = this.nguiMapComponent; // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.nguiMap.updateGoogleObject(this.mapObject, changes);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._subscriptions.map(function (subscription) {
        return subscription.unsubscribe();
      });

      this.nguiMapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);

      if (this.mapObject) {
        this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
      }
    }
  }]);

  return BaseMapDirective;
}();

BaseMapDirective.ɵfac = function BaseMapDirective_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinvalidFactory"]();
};

BaseMapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: BaseMapDirective,
  outputs: {
    initialized$: "initialized$"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});
BaseMapDirective.propDecorators = {
  "initialized$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */

var OptionBuilder = /*#__PURE__*/function () {
  function OptionBuilder() {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, OptionBuilder);
  }

  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(OptionBuilder, [{
    key: "googlizeAllInputs",
    value:
    /**
     * @param {?} definedInputs
     * @param {?} userInputs
     * @return {?}
     */
    function googlizeAllInputs(definedInputs, userInputs) {
      var _this3 = this;

      var
      /** @type {?} */
      options = {}; // if options given from user, only take options and ignore other inputs

      if (userInputs.options) {
        options = userInputs.options;

        if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
          console.error('when "options" are used, other options are ignored');
        }
      } else {
        // if options not given, process all user inputs
        definedInputs.forEach(function (input) {
          if (userInputs[input] !== undefined) {
            options[input] = _this3.googlize(userInputs[input], {
              key: input
            });
          }
        });
      }

      return options;
    }
    /**
     * @param {?} inputs
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "googlizeMultiple",
    value: function googlizeMultiple(inputs, options) {
      options = options || {};

      for (var
      /** @type {?} */
      key in inputs) {
        var
        /** @type {?} */
        val = inputs[key]; // (non-strings are fully converted)

        if (typeof val !== 'string') {
          options[key] = val;
        } else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
          options[key] = this.googlize(val, {
            key: key
          });
        }
      } // for(var key in attrs)


      return options;
    }
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "googlize",
    value: function googlize(input, options) {
      options = options || {};
      var
      /** @type {?} */
      output = input;

      if (typeof input === 'string') {
        // convert string to a google object
        if (input === 'false') {
          output = false;
        } else if (input === '0') {
          output = 0;
        } else {
          output = // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
          this.getJSONParsed(input, options)
          /* Foo.Bar(...) -> new google.maps.Foo.Bar(...) */
          || this.getAnyMapObject(input)
          /*  MapTypeID.HYBRID -> new google.maps.MapTypeID.HYBRID */
          || this.getAnyMapConstant(input, options)
          /*  2016-06-20 -> new Date('2016-06-20') */
          || this.getDateObject(input) || input;
        }
      }

      if (options['key']) {
        var
        /** @type {?} */
        key =
        /** @type {?} */
        options['key'];

        if (output instanceof Array) {
          // e.g., [1, 2]
          if (key === 'bounds') {
            output = new google.maps.LatLngBounds(output[0], output[1]);
          } else if (key === 'icons') {
            output = this.getMapIcons(output);
          } else if (key === 'position' || key.match(/^geoFallback/)) {
            output = this.getLatLng(output);
          }
        } else if (output instanceof Object) {
          if (key === 'icon') {
            output = this.getMarkerIcon(output);
          } else if (key.match(/ControlOptions$/)) {
            output = this.getMapControlOption(output);
          }
        }
      } // delete keys only for processing, not used by google


      delete output['doNotConverStringToNumber'];
      delete output['key'];
      return output;
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getLatLng",
    value: function getLatLng(input) {
      var
      /** @type {?} */
      output;

      if (input[0].constructor === Array) {
        // [[1,2],[3,4]]
        output =
        /** @type {?} */
        input.map(function (el) {
          return new google.maps.LatLng(el[0], el[1]);
        });
      } else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
        output = new google.maps.LatLng(input[0], input[1]);
      }

      return output;
    }
    /**
     * @param {?} input
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "getJSONParsed",
    value: function getJSONParsed(input, options) {
      var
      /** @type {?} */
      output;

      try {
        output = getJSON(input);

        if (output instanceof Array) {
          // [{a:1}] : not lat/lng ones
          if (output[0].constructor !== Object) {
            // [[1,2],[3,4]] or [1,2]
            output = this.getLatLng(output);
          }
        } else if (output === Object(output)) {
          // check for nested hashes and convert to Google API options
          var
          /** @type {?} */
          newOptions = options;
          newOptions['doNotConverStringToNumber'] = true;
          output = this.googlizeMultiple(output, newOptions);
        }
      } catch (
      /** @type {?} */
      e) {}

      return output;
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getAnyMapObject",
    value: function getAnyMapObject(input) {
      var
      /** @type {?} */
      output;

      if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
        try {
          output = Function("return new google.maps.".concat(input, ";"))();
        } catch (
        /** @type {?} */
        e) {}
      }

      return output;
    }
    /**
     * @param {?} input
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "getAnyMapConstant",
    value: function getAnyMapConstant(input, options) {
      var
      /** @type {?} */
      output;

      if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
        // e.g. MapTypeID.HYBRID
        try {
          var
          /** @type {?} */
          matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
          output = google.maps[matches[1]][matches[2]];
        } catch (
        /** @type {?} */
        e) {}
      } else if (input.match(/^[A-Z]+$/)) {
        // e.g. HYBRID
        try {
          var
          /** @type {?} */
          capitalizedKey =
          /** @type {?} */
          options['key'].charAt(0).toUpperCase() +
          /** @type {?} */
          options['key'].slice(1);
          output = google.maps[capitalizedKey][input];
        } catch (
        /** @type {?} */
        e) {}
      }

      return output;
    }
    /**
     * streetviewControl, panControl, etc, not a general control
     * @param {?} controlOptions
     * @return {?}
     */

  }, {
    key: "getMapControlOption",
    value: function getMapControlOption(controlOptions) {
      var
      /** @type {?} */
      newControlOptions = controlOptions;

      for (var
      /** @type {?} */
      key in newControlOptions) {
        // assign the right values
        if (newControlOptions[key]) {
          var
          /** @type {?} */
          value = newControlOptions[key];

          if (typeof value === 'string') {
            value =
            /** @type {?} */
            value.toUpperCase();
          } else if (key === 'mapTypeIds') {
            value =
            /** @type {?} */
            value.map(function (str) {
              if (str.match(/^[A-Z]+$/)) {
                // if constant
                return google.maps.MapTypeId[str.toUpperCase()];
              } else {
                // else, custom map-type
                return str;
              }
            });
          }

          if (key === 'style') {
            var
            /** @type {?} */
            objName = key.replace(/Options$/, '') + 'Style';
            newControlOptions[key] = google.maps[objName][
            /** @type {?} */
            value];
          } else if (key === 'position') {
            newControlOptions[key] = google.maps.ControlPosition[
            /** @type {?} */
            value];
          } else {
            newControlOptions[key] = value;
          }
        }
      }

      return newControlOptions;
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getDateObject",
    value: function getDateObject(input) {
      var
      /** @type {?} */
      output;

      if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
        try {
          output = new Date(input);
        } catch (
        /** @type {?} */
        e) {}
      }

      return output;
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getMapIcons",
    value: function getMapIcons(input) {
      return input.map(function (el) {
        if (el.icon.path.match(/^[A-Z_]+$/)) {
          el.icon.path = google.maps.SymbolPath[el.icon.path];
        }

        return el;
      });
    }
    /**
     * @param {?} input
     * @return {?}
     */

  }, {
    key: "getMarkerIcon",
    value: function getMarkerIcon(input) {
      var
      /** @type {?} */
      output = input;

      if (('' + output.path).match(/^[A-Z_]+$/)) {
        output.path = google.maps.SymbolPath[output.path];
      }

      for (var
      /** @type {?} */
      key in output) {
        var
        /** @type {?} */
        arr = output[key];

        if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
          output[key] = new google.maps.Point(arr[0], arr[1]);
        } else if (key === 'size' || key === 'scaledSize') {
          output[key] = new google.maps.Size(arr[0], arr[1]);
        }
      }

      return output;
    }
    /**
     * @param {?} definedInputs
     * @param {?} userInputs
     * @return {?}
     */

  }, {
    key: "onlyOptionsGiven",
    value: function onlyOptionsGiven(definedInputs, userInputs) {
      for (var
      /** @type {?} */
      i = 0; i < definedInputs.length; i++) {
        var
        /** @type {?} */
        input = definedInputs[i];

        if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
          return false;
        }
      }

      return true;
    }
  }]);

  return OptionBuilder;
}();

OptionBuilder.ɵfac = function OptionBuilder_Factory(t) {
  return new (t || OptionBuilder)();
};

OptionBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: OptionBuilder,
  factory: OptionBuilder.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](OptionBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 *  service for navigator.geolocation methods
 */


var NavigatorGeolocation = /*#__PURE__*/function () {
  function NavigatorGeolocation() {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NavigatorGeolocation);
  }

  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NavigatorGeolocation, [{
    key: "getCurrentPosition",
    value:
    /**
     * @param {?=} geoLocationOptions
     * @return {?}
     */
    function getCurrentPosition(geoLocationOptions) {
      geoLocationOptions = geoLocationOptions || {
        timeout: 5000
      };
      return new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (responseObserver) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            responseObserver.next(position);
            responseObserver.complete();
          }, function (evt) {
            return responseObserver.error(evt);
          }, geoLocationOptions);
        } else {
          responseObserver.error('Browser Geolocation service failed.');
        }
      });
    }
  }]);

  return NavigatorGeolocation;
}();

NavigatorGeolocation.ɵfac = function NavigatorGeolocation_Factory(t) {
  return new (t || NavigatorGeolocation)();
};

NavigatorGeolocation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NavigatorGeolocation,
  factory: NavigatorGeolocation.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NavigatorGeolocation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var NG_MAP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('NG_MAP_CONFIG_TOKEN');
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @abstract
 */

var NgMapApiLoader = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function NgMapApiLoader(config) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgMapApiLoader);

    this.config = config;
    this.api$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1);
    this.config = this.config || {
      apiUrl: 'https://maps.google.com/maps/api/js'
    };
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgMapApiLoader, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.api$.complete();
    }
  }]);

  return NgMapApiLoader;
}();

NgMapApiLoader.ɵfac = function NgMapApiLoader_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinvalidFactory"]();
};

NgMapApiLoader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgMapApiLoader
});

var NgMapAsyncCallbackApiLoader = /*#__PURE__*/function (_NgMapApiLoader) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NgMapAsyncCallbackApiLoader, _NgMapApiLoader);

  var _super = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(NgMapAsyncCallbackApiLoader);

  /**
   * @param {?} zone
   * @param {?} config
   */
  function NgMapAsyncCallbackApiLoader(zone, config) {
    var _this4;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgMapAsyncCallbackApiLoader);

    _this4 = _super.call(this, config);
    _this4.zone = zone;
    return _this4;
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgMapAsyncCallbackApiLoader, [{
    key: "load",
    value: function load() {
      var _this5 = this;

      if (typeof window === 'undefined') {
        return;
      }

      if (isMapsApiLoaded()) {
        this.api$.next(google.maps);
      } else if (!document.querySelector('#ngui-map-api')) {
        /** @type {?} */
        window['nguiMapRef'] =
        /** @type {?} */
        window['nguiMapRef'] || [];

        /** @type {?} */
        window['nguiMapRef'].push({
          zone: this.zone,
          componentFn: function componentFn() {
            return _this5.api$.next(google.maps);
          }
        });
        this.addGoogleMapsApi();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "addGoogleMapsApi",
    value: function addGoogleMapsApi() {
      /** @type {?} */
      window['initNguiMap'] =
      /** @type {?} */
      window['initNguiMap'] || function () {
        /** @type {?} */
        window['nguiMapRef'].forEach(function (nguiMapRef) {
          nguiMapRef.zone.run(function () {
            nguiMapRef.componentFn();
          });
        });

        /** @type {?} */
        window['nguiMapRef'].splice(0,
        /** @type {?} */
        window['nguiMapRef'].length);
      };

      var
      /** @type {?} */
      script = document.createElement('script');
      script.id = 'ngui-map-api'; // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";

      var
      /** @type {?} */
      apiUrl = this.config.apiUrl;
      apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
      script.src = apiUrl + 'callback=initNguiMap';
      document.querySelector('body').appendChild(script);
    }
  }]);

  return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader);

NgMapAsyncCallbackApiLoader.ɵfac = function NgMapAsyncCallbackApiLoader_Factory(t) {
  return new (t || NgMapAsyncCallbackApiLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](NG_MAP_CONFIG_TOKEN, 8));
};

NgMapAsyncCallbackApiLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NgMapAsyncCallbackApiLoader,
  factory: NgMapAsyncCallbackApiLoader.ɵfac
});
/** @nocollapse */

NgMapAsyncCallbackApiLoader.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [NG_MAP_CONFIG_TOKEN]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgMapAsyncCallbackApiLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [NG_MAP_CONFIG_TOKEN]
      }]
    }];
  }, null);
})();

var NgMapAsyncApiLoader = /*#__PURE__*/function (_NgMapApiLoader2) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NgMapAsyncApiLoader, _NgMapApiLoader2);

  var _super2 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(NgMapAsyncApiLoader);

  /**
   * @param {?} config
   */
  function NgMapAsyncApiLoader(config) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgMapAsyncApiLoader);

    return _super2.call(this, config);
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgMapAsyncApiLoader, [{
    key: "load",
    value: function load() {
      var _this6 = this;

      if (typeof window === 'undefined') {
        return;
      }

      if (isMapsApiLoaded()) {
        this.api$.next(google.maps);
      } else if (!document.querySelector('#ngui-map-api')) {
        var
        /** @type {?} */
        script = document.createElement('script');
        script.id = 'ngui-map-api';
        script.async = true;

        script.onload = function () {
          return _this6.api$.next(google.maps);
        };

        script.src = this.config.apiUrl;
        document.querySelector('body').appendChild(script);
      }
    }
  }]);

  return NgMapAsyncApiLoader;
}(NgMapApiLoader);

NgMapAsyncApiLoader.ɵfac = function NgMapAsyncApiLoader_Factory(t) {
  return new (t || NgMapAsyncApiLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](NG_MAP_CONFIG_TOKEN, 8));
};

NgMapAsyncApiLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NgMapAsyncApiLoader,
  factory: NgMapAsyncApiLoader.ɵfac
});
/** @nocollapse */

NgMapAsyncApiLoader.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [NG_MAP_CONFIG_TOKEN]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgMapAsyncApiLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [NG_MAP_CONFIG_TOKEN]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */


var GeoCoder = /*#__PURE__*/function () {
  /**
   * @param {?} apiLoader
   */
  function GeoCoder(apiLoader) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, GeoCoder);

    this.apiLoader = apiLoader;
    this.apiLoaderSubs = [];
  }
  /**
   * @param {?} options
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(GeoCoder, [{
    key: "geocode",
    value: function geocode(options) {
      var _this7 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (responseObserver) {
        _this7.apiLoaderSubs.push(_this7.apiLoader.api$.subscribe(function () {
          return _this7.requestGeocode(options, responseObserver);
        }));
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.apiLoaderSubs.map(function (sub) {
        return sub.unsubscribe();
      });
    }
    /**
     * @param {?} options
     * @param {?} observer
     * @return {?}
     */

  }, {
    key: "requestGeocode",
    value: function requestGeocode(options, observer) {
      var
      /** @type {?} */
      geocoder = new google.maps.Geocoder();
      geocoder.geocode(options, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          observer.next(results);
          observer.complete();
        } else {
          observer.error(results);
        }
      });
    }
  }]);

  return GeoCoder;
}();

GeoCoder.ɵfac = function GeoCoder_Factory(t) {
  return new (t || GeoCoder)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](NgMapApiLoader));
};

GeoCoder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: GeoCoder,
  factory: GeoCoder.ɵfac
});
/** @nocollapse */

GeoCoder.ctorParameters = function () {
  return [{
    type: NgMapApiLoader
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](GeoCoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: NgMapApiLoader
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * collection of map instance-related properties and methods
 */


var NguiMap = /*#__PURE__*/function () {
  /**
   * @param {?} geoCoder
   * @param {?} optionBuilder
   * @param {?} zone
   */
  function NguiMap(geoCoder, optionBuilder, zone) {
    var _this8 = this;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NguiMap);

    this.geoCoder = geoCoder;
    this.optionBuilder = optionBuilder;
    this.zone = zone;

    this.updateGoogleObject = function (object, changes) {
      var
      /** @type {?} */
      val,
      /** @type {?} */
      currentValue,
      /** @type {?} */
      setMethodName;

      if (object) {
        for (var
        /** @type {?} */
        key in changes) {
          setMethodName = "set".concat(key.replace(/^[a-z]/, function (x) {
            return x.toUpperCase();
          }));
          currentValue = changes[key].currentValue;

          if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
            // To preserve setMethod name in Observable callback, wrap it as a function, then execute
            (function (setMethodName) {
              _this8.geoCoder.geocode({
                address: currentValue
              }).subscribe(function (results) {
                if (typeof object[setMethodName] === 'function') {
                  object[setMethodName](results[0].geometry.location);
                } else {
                  console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' + 'Please check Google Maps API documentation, and use "setOptions" instead.');
                }
              });
            })(setMethodName);
          } else {
            val = _this8.optionBuilder.googlize(currentValue);

            if (typeof object[setMethodName] === 'function') {
              object[setMethodName](val);
            } else {
              console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' + 'Please check Google Maps API documentation, and use "setOptions" instead.');
            }
          }
        }
      }
    };
  }
  /**
   * @param {?} definedEvents
   * @param {?} thisObj
   * @param {?} prefix
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NguiMap, [{
    key: "setObjectEvents",
    value: function setObjectEvents(definedEvents, thisObj, prefix) {
      var _this9 = this;

      definedEvents.forEach(function (definedEvent) {
        var
        /** @type {?} */
        eventName = _this9.getEventName(definedEvent),

        /** @type {?} */
        zone = _this9.zone;

        zone.runOutsideAngular(function () {
          thisObj[prefix].addListener(eventName, function (event) {
            var
            /** @type {?} */
            param = event ? event : {};
            param.target = this;
            zone.run(function () {
              return thisObj[definedEvent].emit(param);
            });
          });
        });
      });
    }
    /**
     * @param {?} definedEvents
     * @param {?} thisObj
     * @param {?} prefix
     * @return {?}
     */

  }, {
    key: "clearObjectEvents",
    value: function clearObjectEvents(definedEvents, thisObj, prefix) {
      var _this10 = this;

      definedEvents.forEach(function (definedEvent) {
        var
        /** @type {?} */
        eventName = _this10.getEventName(definedEvent);

        _this10.zone.runOutsideAngular(function () {
          if (thisObj[prefix]) {
            google.maps.event.clearListeners(thisObj[prefix], eventName);
          }
        });
      });

      if (thisObj[prefix]) {
        if (thisObj[prefix].setMap) {
          thisObj[prefix].setMap(null);
        }

        delete thisObj[prefix].nguiMapComponent;
        delete thisObj[prefix];
      }
    }
    /**
     * @param {?} definedEvent
     * @return {?}
     */

  }, {
    key: "getEventName",
    value: function getEventName(definedEvent) {
      return definedEvent.replace(/([A-Z])/g, function ($1) {
        return "_".concat($1.toLowerCase());
      }) // positionChanged -> position_changed
      .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
    }
  }]);

  return NguiMap;
}();

NguiMap.ɵfac = function NguiMap_Factory(t) {
  return new (t || NguiMap)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](GeoCoder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]));
};

NguiMap.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NguiMap,
  factory: NguiMap.ɵfac
});
/** @nocollapse */

NguiMap.ctorParameters = function () {
  return [{
    type: GeoCoder
  }, {
    type: OptionBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NguiMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: GeoCoder
    }, {
      type: OptionBuilder
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS = ['backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor', 'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom', 'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel', 'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'zoomControlOptions', 'mapTypeControlOptions', 'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'options', 'geoFallbackCenter'];
var OUTPUTS = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle', 'maptypeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick', 'tilesloaded', 'tile_changed', 'zoom_changed', 'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'];

var NguiMapComponent = /*#__PURE__*/function () {
  /**
   * @param {?} optionBuilder
   * @param {?} elementRef
   * @param {?} geolocation
   * @param {?} geoCoder
   * @param {?} nguiMap
   * @param {?} apiLoader
   * @param {?} zone
   */
  function NguiMapComponent(optionBuilder, elementRef, geolocation, geoCoder, nguiMap, apiLoader, zone) {
    var _this11 = this;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NguiMapComponent);

    this.optionBuilder = optionBuilder;
    this.elementRef = elementRef;
    this.geolocation = geolocation;
    this.geoCoder = geoCoder;
    this.nguiMap = nguiMap;
    this.apiLoader = apiLoader;
    this.zone = zone;
    this.mapReady$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.mapOptions = {};
    this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    this.infoWindows = {};
    this.mapIdledOnce = false;
    this.initializeMapAfterDisplayed = false;
    apiLoader.load(); // all outputs needs to be initialized,
    // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs

    OUTPUTS.forEach(function (output) {
      return _this11[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NguiMapComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this12 = this;

      this.apiLoaderSub = this.apiLoader.api$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(function () {
        return _this12.initializeMap();
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      if (this.initializeMapAfterDisplayed && this.el && this.el.offsetWidth > 0) {
        this.initializeMap();
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.inputChanges$.next(changes);
    }
    /**
     * @return {?}
     */

  }, {
    key: "initializeMap",
    value: function initializeMap() {
      var _this13 = this;

      this.el = this.elementRef.nativeElement.querySelector('.google-map');

      if (this.el && this.el.offsetWidth === 0) {
        this.initializeMapAfterDisplayed = true;
        return;
      }

      this.initializeMapAfterDisplayed = false;
      this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
      this.mapOptions.zoom = this.mapOptions.zoom || 15;
      typeof this.mapOptions.center === 'string' && delete this.mapOptions.center;
      this.zone.runOutsideAngular(function () {
        _this13.map = new google.maps.Map(_this13.el, _this13.mapOptions);
        _this13.map['mapObjectName'] = 'NguiMapComponent';

        if (!_this13.mapOptions.center) {
          // if center is not given as lat/lng
          _this13.setCenter();
        } // set google events listeners and emits to this outputs listeners


        _this13.nguiMap.setObjectEvents(OUTPUTS, _this13, 'map');

        _this13.map.addListener('idle', function () {
          if (!_this13.mapIdledOnce) {
            _this13.mapIdledOnce = true;
            setTimeout(function () {
              // Why????, subsribe and emit must not be in the same cycle???
              _this13.mapReady$.emit(_this13.map);
            });
          }
        }); // update map when input changes


        _this13.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (changes) {
          return _this13.nguiMap.updateGoogleObject(_this13.map, changes);
        })).subscribe();

        if (typeof window !== 'undefined' &&
        /** @type {?} */
        window['nguiMapRef']) {
          // expose map object for test and debugging on (<any>window)

          /** @type {?} */
          window['nguiMapRef'].map = _this13.map;
        }
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "setCenter",
    value: function setCenter() {
      var _this14 = this;

      if (!this['center']) {
        // center is not from user. Thus, we set the current location
        this.geolocation.getCurrentPosition().subscribe(function (position) {
          var
          /** @type {?} */
          latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          _this14.map.setCenter(latLng);
        }, function (error) {
          console.error('ngui-map: Error finding the current position');

          _this14.map.setCenter(_this14.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        });
      } else if (typeof this['center'] === 'string') {
        this.geoCoder.geocode({
          address: this['center']
        }).subscribe(function (results) {
          _this14.map.setCenter(results[0].geometry.location);
        }, function (error) {
          _this14.map.setCenter(_this14.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        });
      }
    }
    /**
     * @param {?} id
     * @param {?} anchor
     * @return {?}
     */

  }, {
    key: "openInfoWindow",
    value: function openInfoWindow(id, anchor) {
      this.infoWindows[id].open(anchor);
    }
    /**
     * @param {?} id
     * @return {?}
     */

  }, {
    key: "closeInfoWindow",
    value: function closeInfoWindow(id) {
      // if infoWindow for id exists, close the infoWindow
      if (this.infoWindows[id]) this.infoWindows[id].close();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.inputChanges$.complete();

      if (this.el && !this.initializeMapAfterDisplayed) {
        this.nguiMap.clearObjectEvents(OUTPUTS, this, 'map');
      }

      if (this.apiLoaderSub) {
        this.apiLoaderSub.unsubscribe();
      }
    }
    /**
     * @param {?} mapObjectName
     * @param {?} mapObject
     * @return {?}
     */

  }, {
    key: "addToMapObjectGroup",
    value: function addToMapObjectGroup(mapObjectName, mapObject) {
      var
      /** @type {?} */
      groupName = toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers

      this.map[groupName] = this.map[groupName] || [];
      this.map[groupName].push(mapObject);
    }
    /**
     * @param {?} mapObjectName
     * @param {?} mapObject
     * @return {?}
     */

  }, {
    key: "removeFromMapObjectGroup",
    value: function removeFromMapObjectGroup(mapObjectName, mapObject) {
      var
      /** @type {?} */
      groupName = toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers

      if (this.map && this.map[groupName]) {
        var
        /** @type {?} */
        index = this.map[groupName].indexOf(mapObject);
        index > -1 && this.map[groupName].splice(index, 1);
      }
    }
  }]);

  return NguiMapComponent;
}();

NguiMapComponent.ɵfac = function NguiMapComponent_Factory(t) {
  return new (t || NguiMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NavigatorGeolocation), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](GeoCoder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMap), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NgMapApiLoader), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]));
};

NguiMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NguiMapComponent,
  selectors: [["ngui-map"]],
  inputs: {
    backgroundColor: "backgroundColor",
    center: "center",
    disableDefaultUI: "disableDefaultUI",
    disableDoubleClickZoom: "disableDoubleClickZoom",
    draggable: "draggable",
    draggableCursor: "draggableCursor",
    draggingCursor: "draggingCursor",
    heading: "heading",
    keyboardShortcuts: "keyboardShortcuts",
    mapMaker: "mapMaker",
    mapTypeControl: "mapTypeControl",
    mapTypeId: "mapTypeId",
    maxZoom: "maxZoom",
    minZoom: "minZoom",
    noClear: "noClear",
    overviewMapControl: "overviewMapControl",
    panControl: "panControl",
    panControlOptions: "panControlOptions",
    rotateControl: "rotateControl",
    scaleControl: "scaleControl",
    scrollwheel: "scrollwheel",
    streetView: "streetView",
    styles: "styles",
    tilt: "tilt",
    zoom: "zoom",
    streetViewControl: "streetViewControl",
    zoomControl: "zoomControl",
    zoomControlOptions: "zoomControlOptions",
    mapTypeControlOptions: "mapTypeControlOptions",
    overviewMapControlOptions: "overviewMapControlOptions",
    rotateControlOptions: "rotateControlOptions",
    scaleControlOptions: "scaleControlOptions",
    streetViewControlOptions: "streetViewControlOptions",
    fullscreenControl: "fullscreenControl",
    fullscreenControlOptions: "fullscreenControlOptions",
    options: "options",
    geoFallbackCenter: "geoFallbackCenter"
  },
  outputs: {
    bounds_changed: "bounds_changed",
    center_changed: "center_changed",
    click: "click",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    dragstart: "dragstart",
    heading_changed: "heading_changed",
    idle: "idle",
    maptypeid_changed: "maptypeid_changed",
    mousemove: "mousemove",
    mouseout: "mouseout",
    mouseover: "mouseover",
    projection_changed: "projection_changed",
    resize: "resize",
    rightclick: "rightclick",
    tilesloaded: "tilesloaded",
    tile_changed: "tile_changed",
    zoom_changed: "zoom_changed",
    mapClick: "mapClick",
    mapMouseover: "mapMouseover",
    mapMouseout: "mapMouseout",
    mapMousemove: "mapMousemove",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    mapDragstart: "mapDragstart",
    mapReady$: "mapReady$"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([NguiMap, OptionBuilder, GeoCoder, NavigatorGeolocation]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "google-map"]],
  template: function NguiMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1);
    }
  },
  styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
  encapsulation: 2
});
/** @nocollapse */

NguiMapComponent.ctorParameters = function () {
  return [{
    type: OptionBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: NavigatorGeolocation
  }, {
    type: GeoCoder
  }, {
    type: NguiMap
  }, {
    type: NgMapApiLoader
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }];
};

NguiMapComponent.propDecorators = {
  "mapReady$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NguiMapComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'ngui-map',
      providers: [NguiMap, OptionBuilder, GeoCoder, NavigatorGeolocation],
      styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
      inputs: INPUTS,
      outputs: OUTPUTS,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  "
    }]
  }], function () {
    return [{
      type: OptionBuilder
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: NavigatorGeolocation
    }, {
      type: GeoCoder
    }, {
      type: NguiMap
    }, {
      type: NgMapApiLoader
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }];
  }, {
    mapReady$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$1 = [];
var OUTPUTS$1 = [];

var BicyclingLayer = /*#__PURE__*/function (_BaseMapDirective) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BicyclingLayer, _BaseMapDirective);

  var _super3 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(BicyclingLayer);

  /**
   * @param {?} nguiMapComp
   */
  function BicyclingLayer(nguiMapComp) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BicyclingLayer);

    return _super3.call(this, nguiMapComp, 'BicyclingLayer', INPUTS$1, OUTPUTS$1);
  }

  return BicyclingLayer;
}(BaseMapDirective);

BicyclingLayer.ɵfac = function BicyclingLayer_Factory(t) {
  return new (t || BicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

BicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: BicyclingLayer,
  selectors: [["bicycling-layer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

BicyclingLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](BicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > bicycling-layer',
      inputs: INPUTS$1,
      outputs: OUTPUTS$1
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$2 = ['content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'];
var OUTPUTS$2 = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

var InfoWindow = /*#__PURE__*/function () {
  /**
   * @param {?} elementRef
   * @param {?} nguiMap
   * @param {?} nguiMapComponent
   */
  function InfoWindow(elementRef, nguiMap, nguiMapComponent) {
    var _this15 = this;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, InfoWindow);

    this.elementRef = elementRef;
    this.nguiMap = nguiMap;
    this.nguiMapComponent = nguiMapComponent;
    this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.objectOptions = {};
    this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    this.elementRef.nativeElement.style.display = 'none';
    OUTPUTS$2.forEach(function (output) {
      return _this15[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(InfoWindow, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this16 = this;

      if (this.nguiMapComponent.mapIdledOnce) {
        // map is ready already
        this.initialize();
      } else {
        this.nguiMapComponent.mapReady$.subscribe(function (map) {
          return _this16.initialize();
        });
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.inputChanges$.next(changes);
    }
    /**
     * @return {?}
     */

  }, {
    key: "initialize",
    value: function initialize() {
      var _this17 = this;

      this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS$2, this);
      this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
      this.infoWindow['mapObjectName'] = 'InfoWindow'; // register infoWindow ids to NguiMap, so that it can be opened by id

      if (this.elementRef.nativeElement.id) {
        this.nguiMapComponent.infoWindows[this.elementRef.nativeElement.id] = this;
      } else {
        console.error('An InfoWindow must have an id. e.g. id="detail"');
      } // set google events listeners and emits to this outputs listeners


      this.nguiMap.setObjectEvents(OUTPUTS$2, this, 'infoWindow'); // update object when input changes

      this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (changes) {
        return _this17.nguiMap.updateGoogleObject(_this17.infoWindow, changes);
      })).subscribe();
      this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
      this.initialized$.emit(this.infoWindow);
    }
    /**
     * @param {?} anchor
     * @return {?}
     */

  }, {
    key: "open",
    value: function open(anchor) {
      // set content and open it
      this.infoWindow.setContent(this.template.element.nativeElement);
      this.infoWindow.open(this.nguiMapComponent.map, anchor);
    }
    /**
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      // check if infoWindow exists, and closes it
      if (this.infoWindow) this.infoWindow.close();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.inputChanges$.complete();

      if (this.infoWindow) {
        this.nguiMap.clearObjectEvents(OUTPUTS$2, this, 'infoWindow');
        delete this.infoWindow;
      }
    }
  }]);

  return InfoWindow;
}();

InfoWindow.ɵfac = function InfoWindow_Factory(t) {
  return new (t || InfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMap), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

InfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: InfoWindow,
  selectors: [["info-window"]],
  viewQuery: function InfoWindow_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    content: "content",
    disableAutoPan: "disableAutoPan",
    maxWidth: "maxWidth",
    pixelOffset: "pixelOffset",
    position: "position",
    zIndex: "zIndex",
    options: "options"
  },
  outputs: {
    closeclick: "closeclick",
    content_changed: "content_changed",
    domready: "domready",
    position_changed: "position_changed",
    zindex_changed: "zindex_changed",
    initialized$: "initialized$"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["template", ""]],
  template: function InfoWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
/** @nocollapse */

InfoWindow.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: NguiMap
  }, {
    type: NguiMapComponent
  }];
};

InfoWindow.propDecorators = {
  "initialized$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }],
  "template": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['template', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](InfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'ngui-map > info-window',
      inputs: INPUTS$2,
      outputs: OUTPUTS$2,
      template: "<div #template><ng-content></ng-content></div>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: NguiMap
    }, {
      type: NguiMapComponent
    }];
  }, {
    initialized$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['template', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
      }]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$3 = ['position']; // to avoid DOM event conflicts map_*

var OUTPUTS$3 = ['animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged', 'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick', 'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged', 'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 * @param {?} htmlEl
 * @param {?} position
 * @return {?}
 */

function getCustomMarkerOverlayView(htmlEl, position) {
  var CustomMarkerOverlayView = /*#__PURE__*/function (_google$maps$OverlayV) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CustomMarkerOverlayView, _google$maps$OverlayV);

    var _super4 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomMarkerOverlayView);

    /**
     * @param {?} htmlEl
     * @param {?} position
     */
    function CustomMarkerOverlayView(htmlEl, position) {
      var _this18;

      Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CustomMarkerOverlayView);

      _this18 = _super4.call(this);
      _this18.visible = true;

      _this18.setPosition = function (position) {
        _this18.htmlEl.style.visibility = 'hidden';

        if (position.constructor.name === 'Array') {
          _this18.position = new google.maps.LatLng(position[0], position[1]);
        } else if (typeof position === 'string') {
          var
          /** @type {?} */
          geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            address: position
          }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              _this18.setPosition(results[0].geometry.location);
            } else {}
          });
        } else if (position && typeof position.lng === 'function') {
          _this18.position = position;
        }

        if (_this18.getProjection() && typeof _this18.position.lng === 'function') {
          var
          /** @type {?} */
          positionOnMap = function positionOnMap() {
            var
            /** @type {?} */
            projection = _this18.getProjection();

            if (!projection) {
              return;
            }

            var
            /** @type {?} */
            posPixel = projection.fromLatLngToDivPixel(_this18.position);
            var
            /** @type {?} */
            x = Math.round(posPixel.x - _this18.htmlEl.offsetWidth / 2);
            var
            /** @type {?} */
            y = Math.round(posPixel.y - _this18.htmlEl.offsetHeight / 2);
            _this18.htmlEl.style.left = x + 'px';
            _this18.htmlEl.style.top = y + 'px';
            _this18.htmlEl.style.visibility = 'visible';
          };

          if (_this18.htmlEl.offsetWidth && _this18.htmlEl.offsetHeight) {
            positionOnMap();
          } else {
            setTimeout(function () {
              return positionOnMap();
            });
          }
        }
      };

      _this18.htmlEl = htmlEl;
      _this18.position = position;
      return _this18;
    }
    /**
     * @return {?}
     */


    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomMarkerOverlayView, [{
      key: "onAdd",
      value: function onAdd() {
        this.getPanes().overlayMouseTarget.appendChild(this.htmlEl); // required for correct display inside google maps container

        this.htmlEl.style.position = 'absolute';
      }
      /**
       * @return {?}
       */

    }, {
      key: "draw",
      value: function draw() {
        this.setPosition(this.position);
        this.setZIndex(this.zIndex);
        this.setVisible(this.visible);
      }
      /**
       * @return {?}
       */

    }, {
      key: "onRemove",
      value: function onRemove() {//
      }
      /**
       * @return {?}
       */

    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.position;
      }
      /**
       * @param {?} zIndex
       * @return {?}
       */

    }, {
      key: "setZIndex",
      value: function setZIndex(zIndex) {
        zIndex && (this.zIndex = zIndex);
        /* jshint ignore:line */

        this.htmlEl.style.zIndex = this.zIndex;
      }
      /**
       * @param {?} visible
       * @return {?}
       */

    }, {
      key: "setVisible",
      value: function setVisible(visible) {
        this.htmlEl.style.display = visible ? 'inline-block' : 'none';
        this.visible = visible;
      }
    }]);

    return CustomMarkerOverlayView;
  }(google.maps.OverlayView);

  return new CustomMarkerOverlayView(htmlEl, position);
}

var CustomMarker = /*#__PURE__*/function () {
  /**
   * @param {?} nguiMapComponent
   * @param {?} elementRef
   * @param {?} nguiMap
   */
  function CustomMarker(nguiMapComponent, elementRef, nguiMap) {
    var _this19 = this;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CustomMarker);

    this.nguiMapComponent = nguiMapComponent;
    this.elementRef = elementRef;
    this.nguiMap = nguiMap;
    this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    this.elementRef.nativeElement.style.display = 'none';
    OUTPUTS$3.forEach(function (output) {
      return _this19[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomMarker, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this20 = this;

      if (this.nguiMapComponent.mapIdledOnce) {
        // map is ready already
        this.initialize();
      } else {
        this.nguiMapComponent.mapReady$.subscribe(function (map) {
          return _this20.initialize();
        });
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.inputChanges$.next(changes);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.inputChanges$.complete();
      this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);

      if (this.mapObject) {
        this.nguiMap.clearObjectEvents(OUTPUTS$3, this, 'mapObject');
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "initialize",
    value: function initialize() {
      var _this21 = this;

      this.el = this.elementRef.nativeElement;
      this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
      this.mapObject.setMap(this.nguiMapComponent.map); // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(OUTPUTS$3, this, 'mapObject'); // update object when input changes

      this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (changes) {
        return _this21.nguiMap.updateGoogleObject(_this21.mapObject, changes);
      })).subscribe();
      this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
  }]);

  return CustomMarker;
}();

CustomMarker.ɵfac = function CustomMarker_Factory(t) {
  return new (t || CustomMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMap));
};

CustomMarker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CustomMarker,
  selectors: [["custom-marker"]],
  inputs: {
    position: "position"
  },
  outputs: {
    animationChanged: "animationChanged",
    click: "click",
    clickableChanged: "clickableChanged",
    cursorChanged: "cursorChanged",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    draggableChanged: "draggableChanged",
    dragstart: "dragstart",
    flatChanged: "flatChanged",
    iconChanged: "iconChanged",
    mousedown: "mousedown",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    positionChanged: "positionChanged",
    rightclick: "rightclick",
    shapeChanged: "shapeChanged",
    titleChanged: "titleChanged",
    visibleChanged: "visibleChanged",
    zindexChanged: "zindexChanged",
    map_click: "map_click",
    map_mouseover: "map_mouseover",
    map_mouseout: "map_mouseout",
    map_mouseup: "map_mouseup",
    map_mousedown: "map_mousedown",
    map_drag: "map_drag",
    map_dragend: "map_dragend",
    initialized$: "initialized$"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CustomMarker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
/** @nocollapse */

CustomMarker.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: NguiMap
  }];
};

CustomMarker.propDecorators = {
  "initialized$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](CustomMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'ngui-map > custom-marker',
      inputs: INPUTS$3,
      outputs: OUTPUTS$3,
      template: "\n    <ng-content></ng-content>\n  "
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: NguiMap
    }];
  }, {
    initialized$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$4 = ['center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options', 'geoFallbackCenter'];
var OUTPUTS$4 = ['centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick'];

var Circle = /*#__PURE__*/function (_BaseMapDirective2) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Circle, _BaseMapDirective2);

  var _super5 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Circle);

  /**
   * @param {?} nguiMapComp
   */
  function Circle(nguiMapComp) {
    var _this22;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Circle);

    _this22 = _super5.call(this, nguiMapComp, 'Circle', INPUTS$4, OUTPUTS$4);
    _this22.nguiMapComp = nguiMapComp;
    _this22.objectOptions =
    /** @type {?} */
    {};
    return _this22;
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Circle, [{
    key: "initialize",
    value: function initialize() {
      Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(Circle.prototype), "initialize", this).call(this);

      this.setCenter();
    }
    /**
     * @return {?}
     */

  }, {
    key: "setCenter",
    value: function setCenter() {
      var _this23 = this;

      if (!this['center']) {
        this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (center) {
          var
          /** @type {?} */
          latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);

          _this23.mapObject.setCenter(latLng);
        }, function (error) {
          console.error('ngui-map, error in finding the current position');

          _this23.mapObject.setCenter(_this23.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        }));
      } else if (typeof this['center'] === 'string') {
        this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({
          address: this['center']
        }).subscribe(function (results) {
          _this23.mapObject.setCenter(results[0].geometry.location);
        }, function (error) {
          console.error('ngui-map, error in finding location from', _this23['center']);

          _this23.mapObject.setCenter(_this23.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
        }));
      }
    }
  }]);

  return Circle;
}(BaseMapDirective);

Circle.ɵfac = function Circle_Factory(t) {
  return new (t || Circle)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

Circle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: Circle,
  selectors: [["circle"], ["map-circle"]],
  inputs: {
    center: "center",
    clickable: "clickable",
    draggable: "draggable",
    editable: "editable",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    map: "map",
    radius: "radius",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex",
    options: "options",
    geoFallbackCenter: "geoFallbackCenter"
  },
  outputs: {
    centerChanged: "centerChanged",
    click: "click",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    dragstart: "dragstart",
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    radiusChanged: "radiusChanged",
    rightclick: "rightclick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

Circle.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Circle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map>circle, ngui-map>map-circle',
      inputs: INPUTS$4,
      outputs: OUTPUTS$4
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$5 = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson', 'geoJsonUrl'];
var OUTPUTS$5 = ['addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'];

var DataLayer = /*#__PURE__*/function (_BaseMapDirective3) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DataLayer, _BaseMapDirective3);

  var _super6 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(DataLayer);

  /**
   * @param {?} nguiMapComponent
   */
  function DataLayer(nguiMapComponent) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DataLayer);

    return _super6.call(this, nguiMapComponent, 'Data', INPUTS$5, OUTPUTS$5);
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DataLayer, [{
    key: "initialize",
    value: function initialize() {
      if (this['geoJson']) {
        // addGeoJson from an object
        this.nguiMapComponent.map.data.addGeoJson(this['geoJson']);
      } else if (this['geoJsonUrl']) {
        // loadGeoJson from a URL
        this.nguiMapComponent.map.data.loadGeoJson(this['geoJsonUrl']);
      } else {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        this.nguiMapComponent.map.data.add(this.objectOptions);
      } // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()


      this.mapObject = this.nguiMapComponent.map.data; // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
  }]);

  return DataLayer;
}(BaseMapDirective);

DataLayer.ɵfac = function DataLayer_Factory(t) {
  return new (t || DataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

DataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: DataLayer,
  selectors: [["data-layer"]],
  inputs: {
    controlPosition: "controlPosition",
    controls: "controls",
    drawingMode: "drawingMode",
    featureFactory: "featureFactory",
    style: "style",
    geoJson: "geoJson",
    geoJsonUrl: "geoJsonUrl"
  },
  outputs: {
    addfeature: "addfeature",
    click: "click",
    dblclick: "dblclick",
    mousedown: "mousedown",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    removefeature: "removefeature",
    removeproperty: "removeproperty",
    rightclick: "rightclick",
    setgeometry: "setgeometry",
    setproperty: "setproperty"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

DataLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](DataLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > data-layer',
      inputs: INPUTS$5,
      outputs: OUTPUTS$5
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$6 = ['directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions', 'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer', 'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'];
var OUTPUTS$6 = ['directions_changed'];

var DirectionsRenderer = /*#__PURE__*/function (_BaseMapDirective4) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DirectionsRenderer, _BaseMapDirective4);

  var _super7 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(DirectionsRenderer);

  /**
   * @param {?} nguiMapComponent
   * @param {?} geolocation
   */
  function DirectionsRenderer(nguiMapComponent, geolocation) {
    var _this24;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DirectionsRenderer);

    _this24 = _super7.call(this, nguiMapComponent, 'DirectionsRenderer', INPUTS$6, OUTPUTS$6);
    _this24.geolocation = geolocation;
    return _this24;
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DirectionsRenderer, [{
    key: "initialize",
    value: function initialize() {
      this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);

      if (typeof this.objectOptions['panel'] === 'string') {
        // find a Node for panel
        this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
      }

      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
      this.directionsRenderer.setMap(this.nguiMapComponent.map); // set google events listeners and emidirectionsRenderer to this outputs listeners

      this.showDirections(this.directionsRequest);
      this.nguiMap.setObjectEvents(this.outputs, this, 'directionsRenderer');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.directionsRenderer);
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var
      /** @type {?} */
      newOptions = {};

      for (var
      /** @type {?} */
      key in changes) {
        if (this.inputs.indexOf(key) !== -1) {
          newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
        }
      }

      if (changes['directionsRequest'] && this.directionsRenderer) {
        this.directionsService && this.showDirections(this.directionsRequest);
      }
    }
    /**
     * @param {?} directionsRequest
     * @return {?}
     */

  }, {
    key: "showDirections",
    value: function showDirections(directionsRequest) {
      var _this25 = this;

      this.directionsService.route(directionsRequest, function (response, status) {
        // in some-case the callback is called during destroy component,
        // we should make sure directionsRenderer is still defined (cancelling `route` callback is not possible).
        if (!_this25.directionsRenderer) {
          return;
        }

        if (status === google.maps.DirectionsStatus.OK) {
          _this25.directionsRenderer.setDirections(response);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(DirectionsRenderer.prototype), "ngOnDestroy", this).call(this);

      this.nguiMap.clearObjectEvents(this.outputs, this, 'directionsRenderer');
    }
  }]);

  return DirectionsRenderer;
}(BaseMapDirective);

DirectionsRenderer.ɵfac = function DirectionsRenderer_Factory(t) {
  return new (t || DirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NavigatorGeolocation));
};

DirectionsRenderer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: DirectionsRenderer,
  selectors: [["directions-renderer"]],
  inputs: {
    directions: "directions",
    draggable: "draggable",
    hideRouteList: "hideRouteList",
    infoWindow: "infoWindow",
    panel: "panel",
    markerOptions: "markerOptions",
    polylineOptions: "polylineOptions",
    preserveViewport: "preserveViewport",
    routeIndex: "routeIndex",
    suppressBicyclingLayer: "suppressBicyclingLayer",
    suppressInfoWindows: "suppressInfoWindows",
    suppressMarkers: "suppressMarkers",
    suppressPolylines: "suppressPolylines",
    directionsRequest: ["directions-request", "directionsRequest"]
  },
  outputs: {
    directions_changed: "directions_changed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

DirectionsRenderer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }, {
    type: NavigatorGeolocation
  }];
};

DirectionsRenderer.propDecorators = {
  "directionsRequest": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['directions-request']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](DirectionsRenderer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > directions-renderer',
      inputs: INPUTS$6,
      outputs: OUTPUTS$6
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }, {
      type: NavigatorGeolocation
    }];
  }, {
    directionsRequest: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['directions-request']
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$7 = ['options', 'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode', 'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'];
var OUTPUTS$7 = ['circlecomplete', 'markercomplete', 'overlaycomplete', 'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'];

var DrawingManager = /*#__PURE__*/function (_BaseMapDirective5) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DrawingManager, _BaseMapDirective5);

  var _super8 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(DrawingManager);

  /**
   * @param {?} nguiMapComp
   */
  function DrawingManager(nguiMapComp) {
    var _this26;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DrawingManager);

    _this26 = _super8.call(this, nguiMapComp, 'DrawingManager', INPUTS$7, OUTPUTS$7);
    _this26.libraryName = 'drawing';
    return _this26;
  }

  return DrawingManager;
}(BaseMapDirective);

DrawingManager.ɵfac = function DrawingManager_Factory(t) {
  return new (t || DrawingManager)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

DrawingManager.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: DrawingManager,
  selectors: [["drawing-manager"]],
  inputs: {
    options: "options",
    circleOptions: "circleOptions",
    drawingControl: "drawingControl",
    drawingControlOptions: "drawingControlOptions",
    drawingMode: "drawingMode",
    map: "map",
    markerOptions: "markerOptions",
    polygonOptions: "polygonOptions",
    polylineOptions: "polylineOptions",
    rectangleOptions: "rectangleOptions"
  },
  outputs: {
    circlecomplete: "circlecomplete",
    markercomplete: "markercomplete",
    overlaycomplete: "overlaycomplete",
    polygoncomplete: "polygoncomplete",
    polylinecomplete: "polylinecomplete",
    rectanglecomplete: "rectanglecomplete"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

DrawingManager.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](DrawingManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > drawing-manager',
      inputs: INPUTS$7,
      outputs: OUTPUTS$7
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$8 = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS$8 = ['click', 'dblclick'];

var GroundOverlay = /*#__PURE__*/function (_BaseMapDirective6) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(GroundOverlay, _BaseMapDirective6);

  var _super9 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(GroundOverlay);

  /**
   * @param {?} nguiMapComp
   */
  function GroundOverlay(nguiMapComp) {
    var _this27;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, GroundOverlay);

    _this27 = _super9.call(this, nguiMapComp, 'GroundOverlay', INPUTS$8, OUTPUTS$8);
    _this27.objectOptions =
    /** @type {?} */
    {};
    return _this27;
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(GroundOverlay, [{
    key: "initialize",
    value: function initialize() {
      // url, bounds are not the options of GroundOverlay
      this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this); // noinspection TypeScriptUnresolvedFunction

      this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
      this.mapObject.setMap(this.nguiMapComponent.map);
      this.mapObject['mapObjectName'] = this.mapObjectName; // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
  }]);

  return GroundOverlay;
}(BaseMapDirective);

GroundOverlay.ɵfac = function GroundOverlay_Factory(t) {
  return new (t || GroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

GroundOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: GroundOverlay,
  selectors: [["ground-overlay"]],
  inputs: {
    url: "url",
    bounds: "bounds",
    clickable: "clickable",
    opacity: "opacity"
  },
  outputs: {
    click: "click",
    dblclick: "dblclick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

GroundOverlay.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](GroundOverlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > ground-overlay',
      inputs: INPUTS$8,
      outputs: OUTPUTS$8
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$9 = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS$9 = [];

var HeatmapLayer = /*#__PURE__*/function (_BaseMapDirective7) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HeatmapLayer, _BaseMapDirective7);

  var _super10 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(HeatmapLayer);

  /**
   * @param {?} nguiMapComp
   */
  function HeatmapLayer(nguiMapComp) {
    var _this28;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HeatmapLayer);

    _this28 = _super10.call(this, nguiMapComp, 'HeatmapLayer', INPUTS$9, OUTPUTS$9);
    _this28.libraryName = 'visualization';
    return _this28;
  }

  return HeatmapLayer;
}(BaseMapDirective);

HeatmapLayer.ɵfac = function HeatmapLayer_Factory(t) {
  return new (t || HeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

HeatmapLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: HeatmapLayer,
  selectors: [["heatmap-layer"]],
  inputs: {
    data: "data",
    dissipating: "dissipating",
    gradient: "gradient",
    maxIntensity: "maxIntensity",
    opacity: "opacity",
    radius: "radius",
    options: "options"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

HeatmapLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HeatmapLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > heatmap-layer',
      inputs: INPUTS$9,
      outputs: OUTPUTS$9
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$10 = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS$10 = ['click', 'defaultviewport_changed', 'status_changed'];

var KmlLayer = /*#__PURE__*/function (_BaseMapDirective8) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(KmlLayer, _BaseMapDirective8);

  var _super11 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(KmlLayer);

  /**
   * @param {?} nguiMapComp
   */
  function KmlLayer(nguiMapComp) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, KmlLayer);

    return _super11.call(this, nguiMapComp, 'KmlLayer', INPUTS$10, OUTPUTS$10);
  }

  return KmlLayer;
}(BaseMapDirective);

KmlLayer.ɵfac = function KmlLayer_Factory(t) {
  return new (t || KmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

KmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: KmlLayer,
  selectors: [["kml-layer"]],
  inputs: {
    clickable: "clickable",
    preserveViewport: "preserveViewport",
    screenOverlays: "screenOverlays",
    suppressInfoWindows: "suppressInfoWindows",
    url: "url",
    zIndex: "zIndex",
    options: "options"
  },
  outputs: {
    click: "click",
    defaultviewport_changed: "defaultviewport_changed",
    status_changed: "status_changed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

KmlLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](KmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > kml-layer',
      inputs: INPUTS$10,
      outputs: OUTPUTS$10
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$11 = ['anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity', 'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options', 'geoFallbackPosition'];
var OUTPUTS$11 = ['animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged', 'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick', 'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'];

var Marker = /*#__PURE__*/function (_BaseMapDirective9) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Marker, _BaseMapDirective9);

  var _super12 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Marker);

  /**
   * @param {?} nguiMapComp
   */
  function Marker(nguiMapComp) {
    var _this29;

    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Marker);

    _this29 = _super12.call(this, nguiMapComp, 'Marker', INPUTS$11, OUTPUTS$11);
    _this29.nguiMapComp = nguiMapComp;
    _this29.objectOptions =
    /** @type {?} */
    {};
    return _this29;
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Marker, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this30 = this;

      if (this.nguiMapComponent.mapIdledOnce) {
        // map is ready already
        this.initialize();
      } else {
        this.nguiMapComponent.mapReady$.subscribe(function (map) {
          return _this30.initialize();
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "initialize",
    value: function initialize() {
      Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(Marker.prototype), "initialize", this).call(this);

      this.setPosition();
    }
    /**
     * @return {?}
     */

  }, {
    key: "setPosition",
    value: function setPosition() {
      var _this31 = this;

      if (!this['position']) {
        this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (position) {
          var
          /** @type {?} */
          latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          _this31.mapObject.setPosition(latLng);
        }, function (error) {
          console.error('ngui-map, error finding the current location');

          _this31.mapObject.setPosition(_this31.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
        }));
      } else if (typeof this['position'] === 'string') {
        this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({
          address: this['position']
        }).subscribe(function (results) {
          _this31.mapObject.setPosition(results[0].geometry.location);
        }, function (error) {
          console.error('ngui-map, error finding the location from', _this31['position']);

          _this31.mapObject.setPosition(_this31.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
        }));
      }
    }
  }]);

  return Marker;
}(BaseMapDirective);

Marker.ɵfac = function Marker_Factory(t) {
  return new (t || Marker)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

Marker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: Marker,
  selectors: [["marker"]],
  inputs: {
    anchorPoint: "anchorPoint",
    animation: "animation",
    clickable: "clickable",
    cursor: "cursor",
    draggable: "draggable",
    icon: "icon",
    label: "label",
    opacity: "opacity",
    optimized: "optimized",
    place: "place",
    position: "position",
    shape: "shape",
    title: "title",
    visible: "visible",
    zIndex: "zIndex",
    options: "options",
    geoFallbackPosition: "geoFallbackPosition"
  },
  outputs: {
    animationChanged: "animationChanged",
    click: "click",
    clickableChanged: "clickableChanged",
    cursorChanged: "cursorChanged",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    draggableChanged: "draggableChanged",
    dragstart: "dragstart",
    flatChanged: "flatChanged",
    iconChanged: "iconChanged",
    mousedown: "mousedown",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    positionChanged: "positionChanged",
    rightclick: "rightclick",
    shapeChanged: "shapeChanged",
    titleChanged: "titleChanged",
    visibleChanged: "visibleChanged",
    zindexChanged: "zindexChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

Marker.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Marker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > marker',
      inputs: INPUTS$11,
      outputs: OUTPUTS$11
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var PlacesAutoComplete =
/**
 * @param {?} optionBuilder
 * @param {?} elementRef
 * @param {?} apiLoader
 */
function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
  var _this32 = this;

  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, PlacesAutoComplete);

  this.optionBuilder = optionBuilder;
  this.elementRef = elementRef;
  this.apiLoader = apiLoader;
  this.place_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
  this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"](); // only called when map is ready

  this.initialize = function () {
    _this32.objectOptions = _this32.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this32);

    if (!google.maps.places) {
      throw missingLibraryError('PlacesAutoComplete', 'places');
    }

    _this32.autocomplete = new google.maps.places.Autocomplete(_this32.elementRef.nativeElement, _this32.objectOptions);

    _this32.autocomplete.addListener('place_changed', function (place) {
      _this32.place_changed.emit(_this32.autocomplete.getPlace());
    });

    _this32.initialized$.emit(_this32.autocomplete);
  };

  apiLoader.load();
  apiLoader.api$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(function () {
    return _this32.initialize();
  });
};

PlacesAutoComplete.ɵfac = function PlacesAutoComplete_Factory(t) {
  return new (t || PlacesAutoComplete)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NgMapApiLoader));
};

PlacesAutoComplete.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: PlacesAutoComplete,
  selectors: [["", "places-auto-complete", ""]],
  inputs: {
    bounds: "bounds",
    componentRestrictions: "componentRestrictions",
    types: "types"
  },
  outputs: {
    place_changed: "place_changed",
    initialized$: "initialized$"
  }
});
/** @nocollapse */

PlacesAutoComplete.ctorParameters = function () {
  return [{
    type: OptionBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: NgMapApiLoader
  }];
};

PlacesAutoComplete.propDecorators = {
  "bounds": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  "componentRestrictions": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  "types": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  "place_changed": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['place_changed']
  }],
  "initialized$": [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](PlacesAutoComplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[places-auto-complete]'
    }]
  }], function () {
    return [{
      type: OptionBuilder
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: NgMapApiLoader
    }];
  }, {
    place_changed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['place_changed']
    }],
    initialized$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    componentRestrictions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    types: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$12 = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options'];
var OUTPUTS$12 = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

var Polygon = /*#__PURE__*/function (_BaseMapDirective10) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Polygon, _BaseMapDirective10);

  var _super13 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Polygon);

  /**
   * @param {?} nguiMapComp
   */
  function Polygon(nguiMapComp) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Polygon);

    return _super13.call(this, nguiMapComp, 'Polygon', INPUTS$12, OUTPUTS$12);
  }

  return Polygon;
}(BaseMapDirective);

Polygon.ɵfac = function Polygon_Factory(t) {
  return new (t || Polygon)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

Polygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: Polygon,
  selectors: [["polygon"], ["map-polygon"]],
  inputs: {
    clickable: "clickable",
    draggable: "draggable",
    editable: "editable",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    geodesic: "geodesic",
    paths: "paths",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex",
    options: "options"
  },
  outputs: {
    click: "click",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    dragstart: "dragstart",
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    rightclick: "rightclick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

Polygon.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Polygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map>polygon, ngui-map>map-polygon',
      inputs: INPUTS$12,
      outputs: OUTPUTS$12
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$13 = ['clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'];
var OUTPUTS$13 = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

var Polyline = /*#__PURE__*/function (_BaseMapDirective11) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Polyline, _BaseMapDirective11);

  var _super14 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Polyline);

  /**
   * @param {?} nguiMapComp
   */
  function Polyline(nguiMapComp) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Polyline);

    return _super14.call(this, nguiMapComp, 'Polyline', INPUTS$13, OUTPUTS$13);
  }

  return Polyline;
}(BaseMapDirective);

Polyline.ɵfac = function Polyline_Factory(t) {
  return new (t || Polyline)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

Polyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: Polyline,
  selectors: [["polyline"]],
  inputs: {
    clickable: "clickable",
    draggable: "draggable",
    editable: "editable",
    geodesic: "geodesic",
    icons: "icons",
    path: "path",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex",
    options: "options"
  },
  outputs: {
    click: "click",
    dblclick: "dblclick",
    drag: "drag",
    dragend: "dragend",
    dragstart: "dragstart",
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseout: "mouseout",
    mouseover: "mouseover",
    mouseup: "mouseup",
    rightclick: "rightclick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

Polyline.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Polyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > polyline',
      inputs: INPUTS$13,
      outputs: OUTPUTS$13
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$14 = ['selector', 'options', 'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom', 'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl', 'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano', 'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'];
var OUTPUTS$14 = ['closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed', 'visible_changed', 'zoom_changed'];

var StreetViewPanorama = /*#__PURE__*/function (_BaseMapDirective12) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(StreetViewPanorama, _BaseMapDirective12);

  var _super15 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(StreetViewPanorama);

  /**
   * @param {?} nguiMapComp
   */
  function StreetViewPanorama(nguiMapComp) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, StreetViewPanorama);

    return _super15.call(this, nguiMapComp, 'StreetViewPanorama', INPUTS$14, OUTPUTS$14);
  }
  /**
   * @return {?}
   */


  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(StreetViewPanorama, [{
    key: "initialize",
    value: function initialize() {
      this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
      var
      /** @type {?} */
      element;

      if (this.objectOptions.selector) {
        // noinspection TypeScriptValidateTypes
        element = document.querySelector(this['selector']);
        delete this.objectOptions.selector;
      } else {
        element = this.nguiMapComponent.el;
      } // will be set after geocoded


      typeof this.objectOptions.position === 'string' && delete this.objectOptions.position;
      this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
      this.mapObject['mapObjectName'] = this.mapObjectName;
      this.mapObject['nguiMapComponent'] = this.nguiMapComponent; // set google events listeners and emits to this outputs listeners

      this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
      this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
      this.initialized$.emit(this.mapObject);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.nguiMapComponent.el) {
        this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
      }
    }
  }]);

  return StreetViewPanorama;
}(BaseMapDirective);

StreetViewPanorama.ɵfac = function StreetViewPanorama_Factory(t) {
  return new (t || StreetViewPanorama)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

StreetViewPanorama.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: StreetViewPanorama,
  selectors: [["street-view-panorama"]],
  inputs: {
    selector: "selector",
    options: "options",
    addressControl: "addressControl",
    addressControlOptions: "addressControlOptions",
    clickToGo: "clickToGo",
    disableDefaultUI: "disableDefaultUI",
    disableDoubleClickZoom: "disableDoubleClickZoom",
    enableCloseButton: "enableCloseButton",
    fullscreenControl: "fullscreenControl",
    fullscreenControlOptions: "fullscreenControlOptions",
    imageDateControl: "imageDateControl",
    linksControl: "linksControl",
    motionTracking: "motionTracking",
    motionTrackingControl: "motionTrackingControl",
    panControl: "panControl",
    panControlOptions: "panControlOptions",
    pano: "pano",
    position: "position",
    pov: "pov",
    scrollwheel: "scrollwheel",
    showRoadLabels: "showRoadLabels",
    visible: "visible",
    zoomControl: "zoomControl",
    zoomControlOptions: "zoomControlOptions"
  },
  outputs: {
    closeclick: "closeclick",
    pano_changed: "pano_changed",
    position_changed: "position_changed",
    pov_changed: "pov_changed",
    resize: "resize",
    status_changed: "status_changed",
    visible_changed: "visible_changed",
    zoom_changed: "zoom_changed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

StreetViewPanorama.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](StreetViewPanorama, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > street-view-panorama',
      inputs: INPUTS$14,
      outputs: OUTPUTS$14
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$15 = ['autoRefresh', 'options'];
var OUTPUTS$15 = [];

var TrafficLayer = /*#__PURE__*/function (_BaseMapDirective13) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TrafficLayer, _BaseMapDirective13);

  var _super16 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(TrafficLayer);

  /**
   * @param {?} nguiMapComp
   */
  function TrafficLayer(nguiMapComp) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, TrafficLayer);

    return _super16.call(this, nguiMapComp, 'TrafficLayer', INPUTS$15, OUTPUTS$15);
  }

  return TrafficLayer;
}(BaseMapDirective);

TrafficLayer.ɵfac = function TrafficLayer_Factory(t) {
  return new (t || TrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

TrafficLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: TrafficLayer,
  selectors: [["traffic-layer"]],
  inputs: {
    autoRefresh: "autoRefresh",
    options: "options"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

TrafficLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](TrafficLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > traffic-layer',
      inputs: INPUTS$15,
      outputs: OUTPUTS$15
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var INPUTS$16 = [];
var OUTPUTS$16 = [];

var TransitLayer = /*#__PURE__*/function (_BaseMapDirective14) {
  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TransitLayer, _BaseMapDirective14);

  var _super17 = Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitLayer);

  /**
   * @param {?} nguiMapComp
   */
  function TransitLayer(nguiMapComp) {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, TransitLayer);

    return _super17.call(this, nguiMapComp, 'TransitLayer', INPUTS$16, OUTPUTS$16);
  }

  return TransitLayer;
}(BaseMapDirective);

TransitLayer.ɵfac = function TransitLayer_Factory(t) {
  return new (t || TransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NguiMapComponent));
};

TransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: TransitLayer,
  selectors: [["transit-layer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

TransitLayer.ctorParameters = function () {
  return [{
    type: NguiMapComponent
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](TransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'ngui-map > transit-layer',
      inputs: INPUTS$16,
      outputs: OUTPUTS$16
    }]
  }], function () {
    return [{
      type: NguiMapComponent
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


var COMPONENTS_DIRECTIVES = [NguiMapComponent, InfoWindow, Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay, TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer, StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer, DrawingManager];

var NguiMapModule = /*#__PURE__*/function () {
  function NguiMapModule() {
    Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NguiMapModule);
  }

  Object(C_Users_PC_CASA_Documents_guidetour_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NguiMapModule, null, [{
    key: "forRoot",
    value:
    /**
     * @param {?=} config
     * @return {?}
     */
    function forRoot() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        ngModule: NguiMapModule,
        providers: [{
          provide: NG_MAP_CONFIG_TOKEN,
          useValue: config
        }]
      };
    }
  }]);

  return NguiMapModule;
}();

NguiMapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: NguiMapModule
});
NguiMapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function NguiMapModule_Factory(t) {
    return new (t || NguiMapModule)();
  },
  providers: [GeoCoder, NavigatorGeolocation, NguiMap, OptionBuilder, {
    provide: NgMapApiLoader,
    useClass: NgMapAsyncCallbackApiLoader
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NguiMapModule, {
    declarations: function declarations() {
      return [NguiMapComponent, InfoWindow, Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay, TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer, StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer, DrawingManager];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]];
    },
    exports: function exports() {
      return [NguiMapComponent, InfoWindow, Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay, TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer, StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer, DrawingManager];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NguiMapModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
      declarations: COMPONENTS_DIRECTIVES,
      exports: [COMPONENTS_DIRECTIVES],
      providers: [GeoCoder, NavigatorGeolocation, NguiMap, OptionBuilder, {
        provide: NgMapApiLoader,
        useClass: NgMapAsyncCallbackApiLoader
      }]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "3Buq":
/*!*******************************************!*\
  !*** ./src/app/icons/icons.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "3Puv":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div>\n    <div>\n        <div class=\"row\">\n            <div>\n                <div class=\"card\">\n                    <div class=\"header text-center\">\n                        <h4 class=\"title\">Promedio de Bancos del sistema </h4>\n                        <p class=\"category\">Del ultimo año.</p>\n                        <br>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n  \n    </div>\n  </div>\n  \n  \n  \n  <div class=\"text-center\">\n  \n    <select class=\"form-control\" (ngModelChange)=\"changedvalue()\"   name=\"selectedbank\" [(ngModel)]=\"selectedbank\"  required>\n      <option *ngFor=\"let list of priorityList\" [value]=\"list.value\">\n        {{list.label}}\n      </option>\n  </select>\n  \n  <button type=\"button\" (click)=\"Graficar()\"  class=\"btn btn-success\">Graficar</button>\n  \n  \n  </div>\n  \n  <div class=\"aline\">\n  \n    <lbd-chart\n    [title]=\"'Promedio de Ranking Bancario'\"\n    [subtitle]=\"'en rango de Abril 2020 a Abril 2021'\"\n    [chartType]=\"hoursChartType\"\n    [chartData]=\"hoursChartData\"\n    [chartOptions]=\"hoursChartOptions\"\n    [chartResponsive]=\"hoursChartResponsive\"\n    [legendItems]=\"hoursChartLegendItems\"\n    [withHr]=\"true\"\n    [footerIconClass]=\"'fa fa-history'\"\n    [footerText]=\"\">\n    </lbd-chart>\n    {{footer}}\n  </div>\n  \n  \n  \n  \n  \n  <div class=\"container\" *ngIf=\"visiblehide\">\n    <h3>Bancos</h3>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item  uno\">{{banks[0]}}</li>\n      <li class=\"list-group-item  dos\">{{banks[1]}}</li>\n      <li class=\"list-group-item tres\">{{banks[2]}}</li>\n      <li class=\"list-group-item t4\">{{banks[3]}}</li>\n      <li class=\"list-group-item t5\">{{banks[4]}}</li>\n      <li class=\"list-group-item t6\">{{banks[5]}}</li>\n      <li class=\"list-group-item t7\">{{banks[6]}}</li>\n      <li class=\"list-group-item t8\">{{banks[7]}}</li>\n      <li class=\"list-group-item  t9\">{{banks[8]}}</li>\n      <li class=\"list-group-item  t10\">{{banks[9]}}</li>\n      <li class=\"list-group-item t11\">{{banks[10]}}</li>\n      <li class=\"list-group-item t12\">{{banks[11]}}</li>\n      <li class=\"list-group-item t13\">{{banks[12]}}</li>\n      <li class=\"list-group-item t14\">{{banks[13]}}</li>\n      <li class=\"list-group-item t15\">{{banks[14]}}</li>\n      <li class=\"list-group-item t16\">{{banks[15]}}</li>\n    </ul>\n    </div>\n    <table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td>Larry</td>\n      <td>the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n\n\n\n");

/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var UserComponent = /** @class */ (function () {
    function UserComponent(servicio) {
        this.servicio = servicio;
        this.codigo = "";
        this.nombreusuario = "";
        this.password = "";
        this.password2 = "";
        this.rol = "1";
        this.estado = "0";
        this.fecharegistro = "";
        this.errorpassworda = "";
        this.visiblehide = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        // this.  islogged() 
        this.codigo = localStorage.getItem('codigo');
        this.nombreusuario = localStorage.getItem('nombreusuario');
        this.estado = localStorage.getItem('estado');
        this.password = localStorage.getItem('password');
        this.rol = localStorage.getItem('rol');
        this.fecharegistro = localStorage.getItem('fecharegistro');
    };
    UserComponent.prototype.baja = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('codigo', this.codigo);
        this.servicio.postForm(formData, 'eliminar_usuario').subscribe(function (msg) {
            console.log('la respuesta->', msg);
            // this.servicio.setearparametros(msg)
            _this.servicio.message('Usuario eliminado!', 'success');
            // this.router.navigate(['/listado']);
            localStorage.clear();
            // this.servicio.navegarwithparamas2('dashboard',"","0");
            //     formData.append('password', 'abc');
        }, function (err) {
            _this.servicio.message('hubo un error contactando al server', 'error');
        });
    };
    UserComponent.prototype.islogged = function () {
        var code = localStorage.getItem('user');
        console.log('la code->', code);
        if (code == null || code.length == 0) {
            console.log('la code2->', code);
            this.servicio.navegarwithparamas2('dashboard', "", "0");
            return;
        }
        console.log('la code3->', code);
    };
    UserComponent.prototype.Actualizar = function () {
        console.log('la Actualizar->');
        if (this.password.length == 0) {
            this.visiblehide = true;
            this.errorpassworda = "El password debe ir no en blanco";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        if (this.password != this.password2) {
            this.visiblehide = true;
            this.errorpassworda = "Las contraseñas no son iguales";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        if (this.codigo.length == 0) {
            this.visiblehide = true;
            this.errorpassworda = "El user debe ir no en blanco";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        if (this.nombreusuario.length == 0) {
            this.visiblehide = true;
            this.errorpassworda = "El nombre debe ir no en blanco";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        if (this.estado == null) {
            this.visiblehide = true;
            this.errorpassworda = "Debe seleccionar un estado";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        console.log('la Actualizar2->');
        this.editar();
    };
    UserComponent.prototype.editar = function () {
        var _this = this;
        var newpass = this.servicio.tomd5(this.password);
        var formData = new FormData();
        formData.append('user', this.codigo);
        formData.append('codigo', this.codigo);
        formData.append('password', newpass);
        formData.append('nombre', this.nombreusuario);
        formData.append('estado', this.estado);
        formData.append('fecha', this.fecharegistro);
        formData.append('rol', this.rol);
        this.servicio.postForm(formData, 'actualizar_usuario').subscribe(function (msg) {
            console.log('la respuesta->', msg);
            // this.servicio.setearparametros(msg)
            _this.servicio.message('Usuario actualizado!', 'success');
            // this.router.navigate(['/listado']);
            //     formData.append('password', 'abc');
        }, function (err) {
            _this.servicio.message('hubo un error contactando al server', 'error');
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: services_service_1.ServicesService }
    ]; };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "NP/T").default,
            styles: [__webpack_require__(/*! ./user.component.css */ "hEVk").default]
        }),
        __metadata("design:paramtypes", [services_service_1.ServicesService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "4G6T":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent.ctorParameters = function () { return []; };
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'app-notifications',
            template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "FTXL").default,
            styles: [__webpack_require__(/*! ./notifications.component.css */ "C+6a").default]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;


/***/ }),

/***/ "8+yc":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var IconsComponent = /** @class */ (function () {
    function IconsComponent(servicio) {
        this.servicio = servicio;
        this.meses = [];
        this.banks = [];
        this.body = [];
    }
    IconsComponent.prototype.cargar = function () {
        // this.servicio.getDataget("datos") .subscribe(data=>{
        //   this.cargar1(data)
        // });
        var data1 = __webpack_require__(/*! ./data.json */ "JX/p"); // forward slashes will depend on the file location
        this.cargar1(data1);
    };
    IconsComponent.prototype.cargar1 = function (data1) {
        // this.servicio.getDataget("https://reqres.in/api/users?page=2") .subscribe(data=>{
        //  this.servicio.getDataget("http://34.68.221.224/Reporte/datos") .subscribe(data=>{
        var v = 0;
        var k = 0;
        var m = 0;
        // var data =  JSON.parse(localStorage.getItem('ram')); 
        //   console.log('la data7 es->',data);
        // console.log('la data7 es->',JSON.stringify(data));
        var data = data1.Bancos;
        if (data) {
            var years = [];
            this.meses.push("Perfil Financiero");
            var name;
            var name1;
            for (var i = 0; i < data.length; i++) {
                var obj = data[i].Anio;
                // console.log('obj es->',obj);
                // console.log('mont1 es->',mont1);
                // console.log('mont2 es->',mont1[0]);
                var f = obj[0];
                if (v == 0) {
                    for (var key in f) {
                        if (f.hasOwnProperty(key)) {
                            console.log(key + " -> ESTE ES EL MES");
                            years.push(key);
                            ++v;
                        }
                    }
                }
            }
            // console.log(' data[ 0].Anio 5 es->',JSON.stringify( data[ 0].Anio));
            for (var j = 0; j < 1; j++) {
                obj = data[j].Anio;
                for (var i = 0; i < years.length; i++) {
                    var mont1 = obj[0][years[i]];
                    for (name in mont1[0]) {
                        // console.log('mont2 es->',name);
                        this.meses.push(name);
                    }
                }
            }
            // console.log('this.meses33 es->',JSON.stringify(this.meses));
            //   for (var j = 0; j < 1;j++)
            //   {
            //     obj = data[j].Anio;
            //       for (var i = 0; i < years.length; i++){
            //           var mont1 = obj[0][years[i]];
            //           for (name in mont1[0]) {
            //             // console.log('mont2 es->',name);
            //                 this.meses.push(name);
            //             }
            //       }
            // } 
        }
        //   set data banks
        k = 0;
        m = 0;
        // console.log('years es->',JSON.stringify(years));
        if (data) {
            var name;
            var name1;
            // for (var i = 0; i < data.length; i++)
            var body2 = [];
            for (var i = 0; i < data.length; i++) {
                // console.log('data.Bancos[i] e s->',data[i]);
                var row = [];
                var row2 = [];
                var bank = [];
                // console.log('Anio entro s->');
                var nombre = data[i].Nombre;
                row.push(nombre);
                bank.push(nombre);
                var obj = data[i].Anio;
                for (var j = 0; j < years.length; j++) {
                    var mont1 = obj[0][years[j]];
                    // console.log(key + " -> " + p[key]);
                    var p = mont1[0];
                    for (var key in p) {
                        if (p.hasOwnProperty(key)) {
                            // console.log(key + " -> " + p[key]);
                            row.push(p[key]);
                            row2.push(p[key]);
                        }
                    }
                }
                // console.log('row.body es->',row);
                this.body.push(row);
                body2.push(row2);
            }
            console.log('this.body es->', this.body);
            // console.log('body es->',JSON.stringify(this.body));
            // console.log('body2 es->',JSON.stringify(body2));
            var column = [];
            var row2 = [];
            var k = 0;
            for (var j = 0; j < body2.length; j++) {
                k = body2[j].length;
            }
            var row4 = [];
            // console.log(' k  es->', k);
            for (var jd = 0; jd < k; jd++) {
                column = [];
                for (var jl = 0; jl < body2.length; jl++) {
                    // console.log('columnkey  es->',JSON.stringify(body2[jl]));
                    for (var j = 0; j < body2[jl].length; j++) {
                        // console.log(key + " -> " + p[key]);
                        if (j == jd)
                            column.push(body2[jl][j]);
                    }
                }
                // console.log('column  es->',jd,JSON.stringify(column));
                var sorrtedArray = column.sort(function (n1, n2) { return n1 - n2; });
                // console.log('column  sorrtedArray->',JSON.stringify(sorrtedArray));
                row2 = [];
                for (var j = 0; j < sorrtedArray.length; j++) {
                    var kvArray = [
                        {
                            number: j,
                            valor: sorrtedArray[j],
                            column: jd,
                        }
                    ];
                    row2.push(kvArray);
                    // console.log('row2orrtedArray->',JSON.stringify(row2));
                }
                row4.push(row2);
            }
            console.log('row4rray->', JSON.stringify(row4));
            /*      for (var ek = 0; ek< row4.length; ek++){
                   // console.log("colrow4 [ek]umn es -> " +row4 [ek]);
                   // console.log("colrow4 [ek]umn es -> " +JSON.stringify(row4 [ek]));
                   var kJ :any=JSON.stringify(row4 [ek])
                      for (var eki = 0; eki< row4 [ek].length; eki++){
                       var ff=row4 [ek][eki]
                     console.log("colrow4oo [ek]umn es -> " +JSON.stringify(row4 [ek][eki]) );
                     console.log("column es -> " +ff[0].column);
         
                     }
                  
                     // for (var ek = 0; ek< row4.length; ek++){
         
                     // }
                
               } */
            for (var j = 0; j < this.body.length; j++) {
                //    for (var j = 0; j< 1; j++){
                for (var k = 1; k < this.body[j].length; k++) {
                    var col = k - 1;
                    console.log("this.body[j] valuemonth es CON J,k " + this.body[j][k], j, k);
                    var valuemonth = this.body[j][k];
                    for (var ek = 0; ek < row4.length; ek++) {
                        var kJ = JSON.stringify(row4[ek]);
                        for (var eki = 0; eki < row4[ek].length; eki++) {
                            var ff = row4[ek][eki];
                            console.log("colrow4oo [ek]umn es -> " + JSON.stringify(row4[ek][eki]));
                            console.log("column es -> " + ff[0].column);
                            if (col == ff[0].column) {
                                if (valuemonth == ff[0].valor) {
                                    this.body[j][k] = ff[0].number;
                                }
                            }
                        }
                    }
                }
            }
            console.log('this.bodyf es->', this.body);
        }
    };
    IconsComponent.prototype.islogged = function () {
        var code = localStorage.getItem('user');
        console.log('la code->', code);
        if (code == null || code.length == 0) {
            this.servicio.navegarwithparamas2('dashboard', "", "0");
            return;
        }
    };
    IconsComponent.prototype.Loguearse = function () {
        this.servicio.navegar('login');
        /*
            const jsonData={correo:Fcorreo,password:Fpass}
            this.servicio.postLogin(jsonData).subscribe(msg=>{
              console.log('la respuesta->',msg);
              this.servicio.setearparametros(msg)
              this.message('Bienvenido!','success')
              this.router.navigate(['/listado']);
        
            },err=>{
              this.message('credenciales incorrectas','error')
            }) */
    };
    IconsComponent.prototype.ngOnInit = function () {
        this.islogged();
        this.cargar();
        this.tableData1 = {
            headerRow: this.meses,
            dataRows: this.body
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    IconsComponent.ctorParameters = function () { return [
        { type: services_service_1.ServicesService }
    ]; };
    IconsComponent = __decorate([
        core_1.Component({
            selector: 'app-icons',
            template: __webpack_require__(/*! raw-loader!./icons.component.html */ "sqUA").default,
            styles: [__webpack_require__(/*! ./icons.component.css */ "3Buq").default]
        }),
        __metadata("design:paramtypes", [services_service_1.ServicesService])
    ], IconsComponent);
    return IconsComponent;
}());
exports.IconsComponent = IconsComponent;


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var lbd_chart_component_1 = __webpack_require__(/*! ../lbd/lbd-chart/lbd-chart.component */ "vUmn");
var Chartist = __webpack_require__(/*! chartist */ "uki+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var router_2 = __webpack_require__(/*! @angular/router */ "tyNb");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, servicio, route) {
        var _this = this;
        this.router = router;
        this.servicio = servicio;
        this.route = route;
        var navigation = this.router.getCurrentNavigation();
        var state;
        try {
            var ar = this.route.params.subscribe(function (params) {
                // this.id = +params['id']; // (+) converts string 'id' to a number
                // console.log( "param1 es"+params);
                // console.log( "param1 es"+JSON.stringify(params));
                console.log("param1 es" + params.id);
                if (params.id == "4") {
                    _this.servicio.salir();
                    _this.showNotification('top', 'center', 'Cerro sesion correctamente!');
                }
                // In a real app: dispatch action to load the details here.
            });
        }
        catch (error) {
        }
        try {
            state = navigation.extras.state;
            if (state.example2 == "1") {
                var user = localStorage.getItem('user');
                var m1 = "Bienvenido al sistema <b>  " + user + "</b> !";
                this.showNotification('top', 'center', m1);
            }
            else {
                if (state.example2 == "0") {
                    var m1 = "Debe estar logueado para usar el sistema";
                    console.log("param1 es" + state.example);
                    this.showNotification('top', 'center', m1);
                }
            }
        }
        catch (error) {
        }
    }
    HomeComponent.prototype.showNotification = function (from, align, message1) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: message1
        }, {
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.emailChartType = lbd_chart_component_1.ChartType.Pie;
        this.emailChartData = {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        };
        this.emailChartLegendItems = [
            { title: 'Open', imageClass: 'fa fa-circle text-info' },
            { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
            { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
        ];
        this.hoursChartType = lbd_chart_component_1.ChartType.Line;
        this.hoursChartData = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
                [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
                [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [73, 73, 74, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [500, 500, 500, 508, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
                [600, 600, 600, 108, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };
        this.hoursChartOptions = {
            low: 0,
            high: 800,
            showArea: true,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: false,
            showPoint: false,
        };
        this.hoursChartResponsive = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.hoursChartLegendItems = [
            { title: 'Open', imageClass: 'fa fa-circle text-info' },
            { title: 'Click', imageClass: 'fa fa-circle text-danger' },
            { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
        ];
        this.activityChartType = lbd_chart_component_1.ChartType.Bar;
        this.activityChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };
        this.activityChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.activityChartResponsive = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.activityChartLegendItems = [
            { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
            { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
        ];
    };
    HomeComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: services_service_1.ServicesService },
        { type: router_2.ActivatedRoute }
    ]; };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t").default,
            styles: [__webpack_require__(/*! ./home.component.css */ "RV7M").default]
        }),
        __metadata("design:paramtypes", [router_1.Router, services_service_1.ServicesService, router_2.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "C+6a":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "FTXL":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"text-center\">\n\n                <img src=\"assets/img/faces/IMG.png\"class=\"img-fluid\" alt=\"\">\n             \n              \n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLayoutModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var lbd_module_1 = __webpack_require__(/*! ../../lbd/lbd.module */ "gWRF");
var map_1 = __webpack_require__(/*! @ngui/map */ "0WpG");
var admin_layout_routing_1 = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
var home_component_1 = __webpack_require__(/*! ../../home/home.component */ "9vUh");
var user_component_1 = __webpack_require__(/*! ../../user/user.component */ "3nXK");
var tables_component_1 = __webpack_require__(/*! ../../tables/tables.component */ "ZGr1");
var typography_component_1 = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
var icons_component_1 = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
var maps_component_1 = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
var notifications_component_1 = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
var upgrade_component_1 = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
var login_component_1 = __webpack_require__(/*! ../../login/login.component */ "vtpD");
var promedio_component_1 = __webpack_require__(/*! ../../promedio/promedio.component */ "iP5s");
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(admin_layout_routing_1.AdminLayoutRoutes),
                forms_1.FormsModule,
                lbd_module_1.LbdModule,
                map_1.NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
            ],
            declarations: [
                home_component_1.HomeComponent,
                user_component_1.UserComponent,
                tables_component_1.TablesComponent,
                typography_component_1.TypographyComponent,
                icons_component_1.IconsComponent,
                maps_component_1.MapsComponent,
                notifications_component_1.NotificationsComponent,
                upgrade_component_1.UpgradeComponent,
                login_component_1.LoginComponent,
                promedio_component_1.PromedioComponent
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
exports.AdminLayoutModule = AdminLayoutModule;


/***/ }),

/***/ "JX/p":
/*!*********************************!*\
  !*** ./src/app/icons/data.json ***!
  \*********************************/
/*! exports provided: Bancos, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Bancos\":[{\"_id\":\"banco1\",\"Nombre\":\"Agromercantil De Guatemala, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"30465000.0\",\"MAYO\":\"30413900.0\",\"JUNIO\":\"30251400.0\",\"JULIO\":\"30013300.0\",\"AGOSTO\":\"30753500.0\",\"SEPTIEMBRE\":\"31390100.0\",\"OCTUBRE\":\"32026600.0\",\"NOVIEMBRE\":\"32020200.0\",\"DICIEMBRE\":\"31812000.0\"}],\"2021\":[{\"ENERO\":\"31855300.0\",\"FEBRERO\":\"31969300.0\",\"MARZO\":\"31679100.0\",\"ABRIL\":\"32333500.0\"}]}]},{\"_id\":\"banco2\",\"Nombre\":\"AZTECA DE GUATEMALA, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"1851650.0\",\"MAYO\":\"1868620.0\",\"JUNIO\":\"1903220.0\",\"JULIO\":\"1957530.0\",\"AGOSTO\":\"2011020.0\",\"SEPTIEMBRE\":\"1918900.0\",\"OCTUBRE\":\"1914410.0\",\"NOVIEMBRE\":\"1917870.0\",\"DICIEMBRE\":\"1934440.0\"}],\"2021\":[{\"ENERO\":\"1911080.0\",\"FEBRERO\":\"1911610.0\",\"MARZO\":\"1943000.0\",\"ABRIL\":\"1936620.0\"}]}]},{\"_id\":\"banco3\",\"Nombre\":\"CITIBANK, N.A., SUCURSAL GUATEMALA\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"2600880.0\",\"MAYO\":\"2921710.0\",\"JUNIO\":\"3408260.0\",\"JULIO\":\"3518190.0\",\"AGOSTO\":\"3593980.0\",\"SEPTIEMBRE\":\"4302800.0\",\"OCTUBRE\":\"4110370.0\",\"NOVIEMBRE\":\"4229060.0\",\"DICIEMBRE\":\"4824520.0\"}],\"2021\":[{\"ENERO\":\"4594840.0\",\"FEBRERO\":\"4336360.0\",\"MARZO\":\"4130180.0\",\"ABRIL\":\"4312210.0\"}]}]},{\"_id\":\"banco4\",\"Nombre\":\"CREDICORP, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"0.0\",\"MAYO\":\"0.0\",\"JUNIO\":\"0.0\",\"JULIO\":\"0.0\",\"AGOSTO\":\"0.0\",\"SEPTIEMBRE\":\"0.0\",\"OCTUBRE\":\"0.0\",\"NOVIEMBRE\":\"416242.0\",\"DICIEMBRE\":\"425317.0\"}],\"2021\":[{\"ENERO\":\"430598.0\",\"FEBRERO\":\"447673.0\",\"MARZO\":\"463326.0\",\"ABRIL\":\"493224.0\"}]}]},{\"_id\":\"banco5\",\"Nombre\":\"DE AMÉRICA CENTRAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"31016300.0\",\"MAYO\":\"31803400.0\",\"JUNIO\":\"32977400.0\",\"JULIO\":\"32812500.0\",\"AGOSTO\":\"33393600.0\",\"SEPTIEMBRE\":\"33468700.0\",\"OCTUBRE\":\"33914800.0\",\"NOVIEMBRE\":\"34342100.0\",\"DICIEMBRE\":\"34480900.0\"}],\"2021\":[{\"ENERO\":\"34701100.0\",\"FEBRERO\":\"34902000.0\",\"MARZO\":\"35026500.0\",\"ABRIL\":\"34464500.0\"}]}]},{\"_id\":\"banco6\",\"Nombre\":\"DE ANTIGUA, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"1402770.0\",\"MAYO\":\"1393240.0\",\"JUNIO\":\"1402500.0\",\"JULIO\":\"1414460.0\",\"AGOSTO\":\"1431590.0\",\"SEPTIEMBRE\":\"1446980.0\",\"OCTUBRE\":\"1459070.0\",\"NOVIEMBRE\":\"1482880.0\",\"DICIEMBRE\":\"1467480.0\"}],\"2021\":[{\"ENERO\":\"1488320.0\",\"FEBRERO\":\"1509600.0\",\"MARZO\":\"1496360.0\",\"ABRIL\":\"1536310.0\"}]}]},{\"_id\":\"banco7\",\"Nombre\":\"DE CRÉDITO, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"0.0\",\"MAYO\":\"0.0\",\"JUNIO\":\"0.0\",\"JULIO\":\"0.0\",\"AGOSTO\":\"0.0\",\"SEPTIEMBRE\":\"0.0\",\"OCTUBRE\":\"0.0\",\"NOVIEMBRE\":\"0.0\",\"DICIEMBRE\":\"0.0\"}],\"2021\":[{\"ENERO\":\"0.0\",\"FEBRERO\":\"0.0\",\"MARZO\":\"0.0\",\"ABRIL\":\"0.0\"}]}]},{\"_id\":\"banco8\",\"Nombre\":\"DE DESARROLLO RURAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"76164100.0\",\"MAYO\":\"76932100.0\",\"JUNIO\":\"79791100.0\",\"JULIO\":\"80592800.0\",\"AGOSTO\":\"81648500.0\",\"SEPTIEMBRE\":\"82010800.0\",\"OCTUBRE\":\"83741800.0\",\"NOVIEMBRE\":\"84433500.0\",\"DICIEMBRE\":\"85157500.0\"}],\"2021\":[{\"ENERO\":\"85620300.0\",\"FEBRERO\":\"86213100.0\",\"MARZO\":\"86113700.0\",\"ABRIL\":\"87432100.0\"}]}]},{\"_id\":\"banco9\",\"Nombre\":\"DE LOS TRABAJADORES\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"26835400.0\",\"MAYO\":\"27168400.0\",\"JUNIO\":\"27575100.0\",\"JULIO\":\"27573100.0\",\"AGOSTO\":\"28485700.0\",\"SEPTIEMBRE\":\"28563500.0\",\"OCTUBRE\":\"29184900.0\",\"NOVIEMBRE\":\"28029400.0\",\"DICIEMBRE\":\"27839500.0\"}],\"2021\":[{\"ENERO\":\"28121500.0\",\"FEBRERO\":\"28133800.0\",\"MARZO\":\"28416600.0\",\"ABRIL\":\"28676100.0\"}]}]},{\"_id\":\"banco10\",\"Nombre\":\"EL CRÉDITO HIPOTECARIO NACIONAL DE GUATEMALA\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"4078780.0\",\"MAYO\":\"5713570.0\",\"JUNIO\":\"5728250.0\",\"JULIO\":\"5374710.0\",\"AGOSTO\":\"5010880.0\",\"SEPTIEMBRE\":\"5329520.0\",\"OCTUBRE\":\"5150880.0\",\"NOVIEMBRE\":\"4997680.0\",\"DICIEMBRE\":\"5701980.0\"}],\"2021\":[{\"ENERO\":\"5231400.0\",\"FEBRERO\":\"5393020.0\",\"MARZO\":\"5356310.0\",\"ABRIL\":\"5534610.0\"}]}]},{\"_id\":\"banco11\",\"Nombre\":\"FICOHSA GUATEMALA, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"2697340.0\",\"MAYO\":\"2685160.0\",\"JUNIO\":\"2634630.0\",\"JULIO\":\"2642600.0\",\"AGOSTO\":\"2685800.0\",\"SEPTIEMBRE\":\"2787220.0\",\"OCTUBRE\":\"2796940.0\",\"NOVIEMBRE\":\"2846270.0\",\"DICIEMBRE\":\"3063500.0\"}],\"2021\":[{\"ENERO\":\"3031790.0\",\"FEBRERO\":\"3154880.0\",\"MARZO\":\"3200300.0\",\"ABRIL\":\"3165140.0\"}]}]},{\"_id\":\"banco12\",\"Nombre\":\"G&T CONTINENTAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"54821800.0\",\"MAYO\":\"54911400.0\",\"JUNIO\":\"55161700.0\",\"JULIO\":\"54956600.0\",\"AGOSTO\":\"54885400.0\",\"SEPTIEMBRE\":\"54812000.0\",\"OCTUBRE\":\"55939800.0\",\"NOVIEMBRE\":\"55685000.0\",\"DICIEMBRE\":\"55751600.0\"}],\"2021\":[{\"ENERO\":\"56554400.0\",\"FEBRERO\":\"56947900.0\",\"MARZO\":\"56174000.0\",\"ABRIL\":\"56565800.0\"}]}]},{\"_id\":\"banco13\",\"Nombre\":\"INDUSTRIAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"101912000.0\",\"MAYO\":\"101048000.0\",\"JUNIO\":\"102052000.0\",\"JULIO\":\"102438000.0\",\"AGOSTO\":\"103331000.0\",\"SEPTIEMBRE\":\"103231000.0\",\"OCTUBRE\":\"106788000.0\",\"NOVIEMBRE\":\"107179000.0\",\"DICIEMBRE\":\"109249000.0\"}],\"2021\":[{\"ENERO\":\"109911000.0\",\"FEBRERO\":\"109004000.0\",\"MARZO\":\"111010000.0\",\"ABRIL\":\"112363000.0\"}]}]},{\"_id\":\"banco14\",\"Nombre\":\"INMOBILIARIO, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"1702180.0\",\"MAYO\":\"1717110.0\",\"JUNIO\":\"1841950.0\",\"JULIO\":\"1880190.0\",\"AGOSTO\":\"1870560.0\",\"SEPTIEMBRE\":\"1911580.0\",\"OCTUBRE\":\"1894310.0\",\"NOVIEMBRE\":\"1945690.0\",\"DICIEMBRE\":\"1987350.0\"}],\"2021\":[{\"ENERO\":\"2037150.0\",\"FEBRERO\":\"1981540.0\",\"MARZO\":\"1972200.0\",\"ABRIL\":\"2037960.0\"}]}]},{\"_id\":\"banco15\",\"Nombre\":\"INTERNACIONAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"10726500.0\",\"MAYO\":\"10228200.0\",\"JUNIO\":\"10499900.0\",\"JULIO\":\"10533600.0\",\"AGOSTO\":\"10648800.0\",\"SEPTIEMBRE\":\"10755500.0\",\"OCTUBRE\":\"10795300.0\",\"NOVIEMBRE\":\"11090000.0\",\"DICIEMBRE\":\"11180500.0\"}],\"2021\":[{\"ENERO\":\"11322300.0\",\"FEBRERO\":\"11317500.0\",\"MARZO\":\"11173700.0\",\"ABRIL\":\"11439200.0\"}]}]},{\"_id\":\"banco16\",\"Nombre\":\"INV, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"954767.0\",\"MAYO\":\"929117.0\",\"JUNIO\":\"920440.0\",\"JULIO\":\"945003.0\",\"AGOSTO\":\"936259.0\",\"SEPTIEMBRE\":\"939945.0\",\"OCTUBRE\":\"948356.0\",\"NOVIEMBRE\":\"939617.0\",\"DICIEMBRE\":\"930519.0\"}],\"2021\":[{\"ENERO\":\"929271.0\",\"FEBRERO\":\"932459.0\",\"MARZO\":\"930229.0\",\"ABRIL\":\"913513.0\"}]}]},{\"_id\":\"banco17\",\"Nombre\":\"PROMERICA, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"15654400.0\",\"MAYO\":\"15983600.0\",\"JUNIO\":\"16212100.0\",\"JULIO\":\"16373200.0\",\"AGOSTO\":\"16534700.0\",\"SEPTIEMBRE\":\"16860600.0\",\"OCTUBRE\":\"17095000.0\",\"NOVIEMBRE\":\"17681500.0\",\"DICIEMBRE\":\"17485100.0\"}],\"2021\":[{\"ENERO\":\"17969900.0\",\"FEBRERO\":\"17855200.0\",\"MARZO\":\"17813600.0\",\"ABRIL\":\"18026700.0\"}]}]},{\"_id\":\"banco18\",\"Nombre\":\"VIVIBANCO, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"728253.0\",\"MAYO\":\"723639.0\",\"JUNIO\":\"721420.0\",\"JULIO\":\"728939.0\",\"AGOSTO\":\"763408.0\",\"SEPTIEMBRE\":\"755784.0\",\"OCTUBRE\":\"774077.0\",\"NOVIEMBRE\":\"784319.0\",\"DICIEMBRE\":\"775345.0\"}],\"2021\":[{\"ENERO\":\"788552.0\",\"FEBRERO\":\"790974.0\",\"MARZO\":\"765157.0\",\"ABRIL\":\"765152.0\"}]}]}]}");

/***/ }),

/***/ "N4/V":
/*!*******************************************!*\
  !*** ./src/app/promedio/data_bancos.json ***!
  \*******************************************/
/*! exports provided: Bancos, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Bancos\":[{\"Anio\":[{\"2020\":[{\"ABRIL\":\"5\",\"AGOSTO\":\"5\",\"DICIEMBRE\":\"5\",\"JULIO\":\"5\",\"JUNIO\":\"5\",\"MAYO\":\"5\",\"NOVIEMBRE\":\"5\",\"OCTUBRE\":\"5\",\"SEPTIEMBRE\":\"5\"}],\"2021\":[{\"ABRIL\":\"5\",\"ENERO\":\"5\",\"FEBRERO\":\"5\",\"MARZO\":\"5\"}]}],\"Nombre\":\"Agromercantil De Guatemala, S. A.\",\"_id\":\"banco1\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"12\",\"AGOSTO\":\"12\",\"DICIEMBRE\":\"13\",\"JULIO\":\"12\",\"JUNIO\":\"12\",\"MAYO\":\"12\",\"NOVIEMBRE\":\"13\",\"OCTUBRE\":\"12\",\"SEPTIEMBRE\":\"12\"}],\"2021\":[{\"ABRIL\":\"13\",\"ENERO\":\"13\",\"FEBRERO\":\"13\",\"MARZO\":\"13\"}]}],\"Nombre\":\"AZTECA DE GUATEMALA, S. A.\",\"_id\":\"banco2\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"11\",\"AGOSTO\":\"10\",\"DICIEMBRE\":\"10\",\"JULIO\":\"10\",\"JUNIO\":\"10\",\"MAYO\":\"10\",\"NOVIEMBRE\":\"10\",\"OCTUBRE\":\"10\",\"SEPTIEMBRE\":\"10\"}],\"2021\":[{\"ABRIL\":\"10\",\"ENERO\":\"10\",\"FEBRERO\":\"10\",\"MARZO\":\"10\"}]}],\"Nombre\":\"CITIBANK, N.A., SUCURSAL GUATEMALA\",\"_id\":\"banco3\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"17\",\"AGOSTO\":\"17\",\"DICIEMBRE\":\"17\",\"JULIO\":\"17\",\"JUNIO\":\"17\",\"MAYO\":\"17\",\"NOVIEMBRE\":\"17\",\"OCTUBRE\":\"17\",\"SEPTIEMBRE\":\"17\"}],\"2021\":[{\"ABRIL\":\"17\",\"ENERO\":\"17\",\"FEBRERO\":\"17\",\"MARZO\":\"17\"}]}],\"Nombre\":\"CREDICORP, S. A.\",\"_id\":\"banco4\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"4\",\"AGOSTO\":\"4\",\"DICIEMBRE\":\"4\",\"JULIO\":\"4\",\"JUNIO\":\"4\",\"MAYO\":\"4\",\"NOVIEMBRE\":\"4\",\"OCTUBRE\":\"4\",\"SEPTIEMBRE\":\"4\"}],\"2021\":[{\"ABRIL\":\"4\",\"ENERO\":\"4\",\"FEBRERO\":\"4\",\"MARZO\":\"4\"}]}],\"Nombre\":\"DE AMÉRICA CENTRAL, S. A.\",\"_id\":\"banco5\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"14\",\"AGOSTO\":\"14\",\"DICIEMBRE\":\"14\",\"JULIO\":\"14\",\"JUNIO\":\"14\",\"MAYO\":\"14\",\"NOVIEMBRE\":\"14\",\"OCTUBRE\":\"14\",\"SEPTIEMBRE\":\"14\"}],\"2021\":[{\"ABRIL\":\"14\",\"ENERO\":\"14\",\"FEBRERO\":\"14\",\"MARZO\":\"14\"}]}],\"Nombre\":\"DE ANTIGUA, S. A.\",\"_id\":\"banco6\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"18\",\"AGOSTO\":\"18\",\"DICIEMBRE\":\"18\",\"JULIO\":\"18\",\"JUNIO\":\"18\",\"MAYO\":\"18\",\"NOVIEMBRE\":\"18\",\"OCTUBRE\":\"18\",\"SEPTIEMBRE\":\"18\"}],\"2021\":[{\"ABRIL\":\"18\",\"ENERO\":\"18\",\"FEBRERO\":\"18\",\"MARZO\":\"18\"}]}],\"Nombre\":\"DE CRÉDITO, S. A.\",\"_id\":\"banco7\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"2\",\"AGOSTO\":\"2\",\"DICIEMBRE\":\"2\",\"JULIO\":\"2\",\"JUNIO\":\"2\",\"MAYO\":\"2\",\"NOVIEMBRE\":\"2\",\"OCTUBRE\":\"2\",\"SEPTIEMBRE\":\"2\"}],\"2021\":[{\"ABRIL\":\"2\",\"ENERO\":\"2\",\"FEBRERO\":\"2\",\"MARZO\":\"2\"}]}],\"Nombre\":\"DE DESARROLLO RURAL, S. A.\",\"_id\":\"banco8\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"6\",\"AGOSTO\":\"6\",\"DICIEMBRE\":\"6\",\"JULIO\":\"6\",\"JUNIO\":\"6\",\"MAYO\":\"6\",\"NOVIEMBRE\":\"6\",\"OCTUBRE\":\"6\",\"SEPTIEMBRE\":\"6\"}],\"2021\":[{\"ABRIL\":\"6\",\"ENERO\":\"6\",\"FEBRERO\":\"6\",\"MARZO\":\"6\"}]}],\"Nombre\":\"DE LOS TRABAJADORES\",\"_id\":\"banco9\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"9\",\"AGOSTO\":\"9\",\"DICIEMBRE\":\"9\",\"JULIO\":\"9\",\"JUNIO\":\"9\",\"MAYO\":\"9\",\"NOVIEMBRE\":\"9\",\"OCTUBRE\":\"9\",\"SEPTIEMBRE\":\"9\"}],\"2021\":[{\"ABRIL\":\"9\",\"ENERO\":\"9\",\"FEBRERO\":\"9\",\"MARZO\":\"9\"}]}],\"Nombre\":\"EL CRÉDITO HIPOTECARIO NACIONAL DE GUATEMALA\",\"_id\":\"banco10\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"10\",\"AGOSTO\":\"11\",\"DICIEMBRE\":\"11\",\"JULIO\":\"11\",\"JUNIO\":\"11\",\"MAYO\":\"11\",\"NOVIEMBRE\":\"11\",\"OCTUBRE\":\"11\",\"SEPTIEMBRE\":\"11\"}],\"2021\":[{\"ABRIL\":\"11\",\"ENERO\":\"11\",\"FEBRERO\":\"11\",\"MARZO\":\"11\"}]}],\"Nombre\":\"FICOHSA GUATEMALA, S. A.\",\"_id\":\"banco11\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"3\",\"AGOSTO\":\"3\",\"DICIEMBRE\":\"3\",\"JULIO\":\"3\",\"JUNIO\":\"3\",\"MAYO\":\"3\",\"NOVIEMBRE\":\"3\",\"OCTUBRE\":\"3\",\"SEPTIEMBRE\":\"3\"}],\"2021\":[{\"ABRIL\":\"3\",\"ENERO\":\"3\",\"FEBRERO\":\"3\",\"MARZO\":\"3\"}]}],\"Nombre\":\"G&T CONTINENTAL, S. A.\",\"_id\":\"banco12\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"1\",\"AGOSTO\":\"1\",\"DICIEMBRE\":\"1\",\"JULIO\":\"1\",\"JUNIO\":\"1\",\"MAYO\":\"1\",\"NOVIEMBRE\":\"1\",\"OCTUBRE\":\"1\",\"SEPTIEMBRE\":\"1\"}],\"2021\":[{\"ABRIL\":\"1\",\"ENERO\":\"1\",\"FEBRERO\":\"1\",\"MARZO\":\"1\"}]}],\"Nombre\":\"INDUSTRIAL, S. A.\",\"_id\":\"banco13\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"13\",\"AGOSTO\":\"13\",\"DICIEMBRE\":\"12\",\"JULIO\":\"13\",\"JUNIO\":\"13\",\"MAYO\":\"13\",\"NOVIEMBRE\":\"12\",\"OCTUBRE\":\"13\",\"SEPTIEMBRE\":\"13\"}],\"2021\":[{\"ABRIL\":\"12\",\"ENERO\":\"12\",\"FEBRERO\":\"12\",\"MARZO\":\"12\"}]}],\"Nombre\":\"INMOBILIARIO, S. A.\",\"_id\":\"banco14\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"8\",\"AGOSTO\":\"8\",\"DICIEMBRE\":\"8\",\"JULIO\":\"8\",\"JUNIO\":\"8\",\"MAYO\":\"8\",\"NOVIEMBRE\":\"8\",\"OCTUBRE\":\"8\",\"SEPTIEMBRE\":\"8\"}],\"2021\":[{\"ABRIL\":\"8\",\"ENERO\":\"8\",\"FEBRERO\":\"8\",\"MARZO\":\"8\"}]}],\"Nombre\":\"INTERNACIONAL, S. A.\",\"_id\":\"banco15\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"15\",\"AGOSTO\":\"15\",\"DICIEMBRE\":\"15\",\"JULIO\":\"15\",\"JUNIO\":\"15\",\"MAYO\":\"15\",\"NOVIEMBRE\":\"15\",\"OCTUBRE\":\"15\",\"SEPTIEMBRE\":\"15\"}],\"2021\":[{\"ABRIL\":\"15\",\"ENERO\":\"15\",\"FEBRERO\":\"15\",\"MARZO\":\"15\"}]}],\"Nombre\":\"INV, S. A.\",\"_id\":\"banco16\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"7\",\"AGOSTO\":\"7\",\"DICIEMBRE\":\"7\",\"JULIO\":\"7\",\"JUNIO\":\"7\",\"MAYO\":\"7\",\"NOVIEMBRE\":\"7\",\"OCTUBRE\":\"7\",\"SEPTIEMBRE\":\"7\"}],\"2021\":[{\"ABRIL\":\"7\",\"ENERO\":\"7\",\"FEBRERO\":\"7\",\"MARZO\":\"7\"}]}],\"Nombre\":\"PROMERICA, S. A.\",\"_id\":\"banco17\"},{\"Anio\":[{\"2020\":[{\"ABRIL\":\"16\",\"AGOSTO\":\"16\",\"DICIEMBRE\":\"16\",\"JULIO\":\"16\",\"JUNIO\":\"16\",\"MAYO\":\"16\",\"NOVIEMBRE\":\"16\",\"OCTUBRE\":\"16\",\"SEPTIEMBRE\":\"16\"}],\"2021\":[{\"ABRIL\":\"16\",\"ENERO\":\"16\",\"FEBRERO\":\"16\",\"MARZO\":\"16\"}]}],\"Nombre\":\"VIVIBANCO, S. A.\",\"_id\":\"banco18\"}]}");

/***/ }),

/***/ "NL5l":
/*!***********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGdyYWRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "NP/T":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Editar Perfil</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Nombre</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"nombreusuario\"  [(ngModel)]=\"nombreusuario\" placeholder=\"Nombre\" value={{nombreusuario}}>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                        <label>Usuario</label>\n                                        <input type=\"text\" class=\"form-control\"  name=\"codigo\" [(ngModel)]=\"codigo\" placeholder=\"codigo\" value={{codigo}}>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Estado</label>\n                                        <select class=\"form-select\" [(ngModel)]=\"estado\"  name=\"estado\" aria-label=\"Default select example\">                                          \n                                            <option value=\"1\">Activo</option>\n                                            <option value=\"0\">Desactivado</option>\n                                           \n                                          </select>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>password</label>\n                                        <input type=\"password\"  name=\"password\"  [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"password\" >\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>Repita password</label>\n                                        <input type=\"password\"  name=\"password2\" [(ngModel)]=\"password2\" class=\"form-control\" placeholder=\"password2\" >\n                                    </div>\n                                </div>\n                            </div>\n\n                          \n\n                              <div class=\"alert alert-danger\" *ngIf=\"visiblehide\"  role=\"alert\">\n                                {{errorpassworda}}\n                              </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Fecha</label>\n                                        <input type=\"text\"   name=\"fecharegistro\" disabled [(ngModel)]=\"fecharegistro\"  class=\"form-control\" placeholder=\"fecharegistro\" value={{fecharegistro}}>\n                                    </div>\n                                </div>\n                             \n                            </div>\n\n                         \n                            <button (click)=\"Actualizar()\"  class=\"btn btn-info btn-fill pull-right\">Actualizar</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-user\">\n                    <div class=\"image\">\n                        <img src=\"https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-260nw-1682415103.jpg\" alt=\"...\"/>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"author\">\n                            <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"assets/img/faces/descarga.png\" alt=\"...\"/>\n\n                                <h4 class=\"title\">{{nombre}}<br />\n                                    <small>{{username}}</small>\n                                    <button (click)=\"baja()\"  class=\"btn btn-danger btn-fill pull-right\">Dar de baja</button>\n\n                                </h4>\n                            </a>\n                        </div>\n                        <p class=\"description text-center\"> \"Usuario del portal\"\n                        </p>\n\n                    </div>\n                    <hr>\n                    <div class=\"text-center\">\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "O5tJ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\" >\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"header\">\n                      <h4 class=\"title\">Crear Perfil</h4>\n                  </div>\n                  <div class=\"content\">\n                      <form>\n                          <div class=\"row\">\n                              <div class=\"col-md-5\">\n                                  <div class=\"form-group\">\n                                      <label>Nombre</label>\n                                      <input type=\"text\" class=\"form-control\" name=\"nombre\"  [(ngModel)]=\"nombre\" placeholder=\"Nombre\" value={{nombre}}>\n                                  </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                      <label>Usuario</label>\n                                      <input type=\"text\" class=\"form-control\"  name=\"codigo\" [(ngModel)]=\"codigo\" placeholder=\"codigo\" value={{codigo}}>\n                                  </div>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group\">\n                                      <label for=\"exampleInputEmail1\">Estado</label>\n                                      <select class=\"form-select\" [(ngModel)]=\"estado\"  name=\"estado\" aria-label=\"Default select example\">                                          \n                                          <option value=\"1\">Activo</option>\n                                          <option value=\"0\">Desactivado</option>\n                                         \n                                        </select>\n                                  </div>\n                              </div>\n                          </div>\n\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                  <div class=\"form-group\">\n                                      <label>password</label>\n                                      <input type=\"password\"  name=\"password\"  [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"password\" >\n                                  </div>\n                              </div>\n                              <div class=\"col-md-6\">\n                                  <div class=\"form-group\">\n                                      <label>Repita password</label>\n                                      <input type=\"password\"  name=\"password2\" [(ngModel)]=\"password2\" class=\"form-control\" placeholder=\"password2\" >\n                                  </div>\n                              </div>\n                          </div>\n\n                        \n\n                            <div class=\"alert alert-danger\" *ngIf=\"visiblehide\"  role=\"alert\">\n                              {{errorpassworda}}\n                            </div>\n\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group\">\n                                      <label>Fecha</label>\n                                      <input type=\"text\"   name=\"fecha\" disabled [(ngModel)]=\"fecha\"  class=\"form-control\" placeholder=\"fecha\" value={{fecha}}>\n                                  </div>\n                              </div>\n                           \n                          </div>\n\n                       \n                          <button (click)=\"Actualizar()\"  class=\"btn btn-info btn-fill pull-right\">Crear Perfil</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-user\">\n                  <div class=\"image\">\n                      <img src=\"https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-260nw-1682415103.jpg\" alt=\"...\"/>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"author\">\n                          <a href=\"#\">\n                              <img class=\"avatar border-gray\" src=\"assets/img/faces/descarga.png\" alt=\"...\"/>\n\n                              <h4 class=\"title\">{{nombre}}<br />\n                                  <small>{{username}}</small>\n                              </h4>\n                          </a>\n                      </div>\n                      <p class=\"description text-center\"> \"Usuario del portal\"\n                      </p>\n                  </div>\n                  <hr>\n                  <div class=\"text-center\">\n                      <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                      <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                      <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Oq/h":
/*!*************************************************!*\
  !*** ./src/app/promedio/promedio.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-four{\r\n    color:rgb(98, 65, 158) !important;\r\n  }\r\n\r\n  .aline{\r\n  margin-left: 15px!important;\r\n  /* font-size: 16px; */\r\n  }\r\n\r\n  .ct-chart{\r\n          width:1015px!important;\r\n          /* font-size: 16px!important;; */\r\n          }\r\n\r\n  .uno{\r\n            background-color:#33F0FF;\r\n            color:black;\r\n            /* font-size: 16px!important;; */\r\n            }\r\n\r\n  .dos{\r\n              background-color:#CF0833;\r\n              color:white;\r\n              /* font-size: 16px!important;; */\r\n              }\r\n\r\n  .tres{\r\n                background-color:#EC890C;\r\n                color:black;\r\n                /* font-size: 16px!important;; */\r\n                }\r\n\r\n  .t4{\r\n                  background-color:#940CEC;\r\n                  color:white;\r\n                  }\r\n\r\n  .t5{\r\n                    background-color:#7BAE36;\r\n                    color:black;\r\n                    /* font-size: 16px!important;; */\r\n                    }\r\n\r\n  .t6{\r\n                      background-color:#2B80C3;\r\n                      color:white;\r\n                      /* font-size: 16px!important;; */\r\n                      }\r\n\r\n  .t7{\r\n                        background-color:#4E5459;\r\n                        color:white;\r\n                        }\r\n\r\n  .t8{\r\n                          background-color:#B51A0D;\r\n                          color:white;\r\n                          }\r\n\r\n  .t9{\r\n                            background-color:#112345;\r\n                            color:white;\r\n                            }\r\n\r\n  .t10{\r\n                              background-color:#BD1D00;\r\n                              color:white;\r\n                              }\r\n\r\n  .t11{\r\n                                background-color:#6BC4CA;\r\n                                color:blue;\r\n                                }\r\n\r\n  .t12{\r\n                                  background-color:#D62E47;\r\n                                  color:white;\r\n                                  }\r\n\r\n  .t13{\r\n                                    background-color:#2E4FD6;\r\n                                    color:white;\r\n                                    }\r\n\r\n  .t14{\r\n                                      background-color:#8DA1F3;\r\n                                      color:black;\r\n                                      }\r\n\r\n  .t15{\r\n                                        background-color:#AC34FE;\r\n                                        color:white;\r\n                                        }\r\n\r\n  .t16{\r\n                                          background-color:#2E2C2E;\r\n                                          color:white;\r\n                                          }                                             \r\n\r\n              \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21lZGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7RUFDbkM7O0VBRUE7RUFDQSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCOztFQUlNO1VBQ0Usc0JBQXNCO1VBQ3RCLGdDQUFnQztVQUNoQzs7RUFHQTtZQUNFLHdCQUF3QjtZQUN4QixXQUFXO1lBQ1gsZ0NBQWdDO1lBQ2hDOztFQUNBO2NBQ0Usd0JBQXdCO2NBQ3hCLFdBQVc7Y0FDWCxnQ0FBZ0M7Y0FDaEM7O0VBR0E7Z0JBQ0Usd0JBQXdCO2dCQUN4QixXQUFXO2dCQUNYLGdDQUFnQztnQkFDaEM7O0VBQ0E7a0JBQ0Usd0JBQXdCO2tCQUN4QixXQUFXO2tCQUNYOztFQUVBO29CQUNFLHdCQUF3QjtvQkFDeEIsV0FBVztvQkFDWCxnQ0FBZ0M7b0JBQ2hDOztFQUNBO3NCQUNFLHdCQUF3QjtzQkFDeEIsV0FBVztzQkFDWCxnQ0FBZ0M7c0JBQ2hDOztFQUVBO3dCQUNFLHdCQUF3Qjt3QkFDeEIsV0FBVzt3QkFDWDs7RUFDQTswQkFDRSx3QkFBd0I7MEJBQ3hCLFdBQVc7MEJBQ1g7O0VBRUE7NEJBQ0Usd0JBQXdCOzRCQUN4QixXQUFXOzRCQUNYOztFQUNBOzhCQUNFLHdCQUF3Qjs4QkFDeEIsV0FBVzs4QkFDWDs7RUFFQTtnQ0FDRSx3QkFBd0I7Z0NBQ3hCLFVBQVU7Z0NBQ1Y7O0VBQ0E7a0NBQ0Usd0JBQXdCO2tDQUN4QixXQUFXO2tDQUNYOztFQUVBO29DQUNFLHdCQUF3QjtvQ0FDeEIsV0FBVztvQ0FDWDs7RUFDQTtzQ0FDRSx3QkFBd0I7c0NBQ3hCLFdBQVc7c0NBQ1g7O0VBQ0E7d0NBQ0Usd0JBQXdCO3dDQUN4QixXQUFXO3dDQUNYOztFQUFFOzBDQUNBLHdCQUF3QjswQ0FDeEIsV0FBVzswQ0FDWCIsImZpbGUiOiJwcm9tZWRpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZm91cntcclxuICAgIGNvbG9yOnJnYig5OCwgNjUsIDE1OCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hbGluZXtcclxuICBtYXJnaW4tbGVmdDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xyXG4gIH1cclxuXHJcbiAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jdC1jaGFydHtcclxuICAgICAgICAgIHdpZHRoOjEwMTVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAvKiBmb250LXNpemU6IDE2cHghaW1wb3J0YW50OzsgKi9cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgLnVub3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzNGMEZGO1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgLyogZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDs7ICovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvc3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDRjA4MzM7XHJcbiAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgLyogZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDs7ICovXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgLnRyZXN7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQzg5MEM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgICAgIC8qIGZvbnQtc2l6ZTogMTZweCFpbXBvcnRhbnQ7OyAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnQ0e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5NDBDRUM7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAudDV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojN0JBRTM2O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGZvbnQtc2l6ZTogMTZweCFpbXBvcnRhbnQ7OyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudDZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyQjgwQzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8qIGZvbnQtc2l6ZTogMTZweCFpbXBvcnRhbnQ7OyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC50N3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNEU1NDU5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudDh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojQjUxQTBEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnQ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMTEyMzQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudDEwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNCRDFEMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudDExe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzZCQzRDQTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudDEye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRDYyRTQ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnQxM3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMkU0RkQ2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudDE0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzhEQTFGMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnQxNXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0FDMzRGRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAudDE2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyRTJDMkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4iXX0= */");

/***/ }),

/***/ "PO8C":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"header text-center\">\n                        <h4 class=\"title\">Light Bootstrap Dashboard PRO Angular </h4>\n                        <p class=\"category\">Looking for more components? Please check our Premium Version of Light Bootstrap Dashboard Angular.</p>\n                        <br>\n                    </div>\n                    <div class=\"content table-responsive table-full-width table-upgrade\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th class=\"text-center\">Free</th>\n                                    <th class=\"text-center\">PRO</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Components</td>\n                                    <td>16</td>\n                                    <td>115+</td>\n                                </tr>\n                                <tr>\n                                    <td>Plugins</td>\n                                    <td>4</td>\n                                    <td>14+</td>\n                                </tr>\n                                <tr>\n                                    <td>Example Pages</td>\n                                    <td>4</td>\n                                    <td>22+</td>\n                                </tr>\n                                <tr>\n                                    <td>Documentation</td>\n                                    <td>\n                                        <i class=\"fa fa-check text-success\"></i>\n                                    </td>\n                                    <td>\n                                        <i class=\"fa fa-check text-success\"></i>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>SASS Files</td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Login/Register/Lock Pages</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Premium Support</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>Free</td>\n                                    <td>Just $49</td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                    </td>\n                                    <td>\n                                        <a target=\"_blank\" href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2/?ref=lbd-angular2-free\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "UQji":
/*!*********************************************!*\
  !*** ./src/app/tables/tables.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Wwls":
/*!*****************************************************!*\
  !*** ./src/app/typography/typography.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\r\nbody {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.app-header {\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n.login-wrapper {\r\n  height: 100%;\r\n \r\n}\r\n\r\n.positronx {\r\n  text-decoration: none;\r\n  color: #ffffff;\r\n}\r\n\r\n.box {\r\n  position: relative;\r\n  top: 0;\r\n  opacity: 1;\r\n  float: left;\r\n  padding: 60px 50px 40px 50px;\r\n  width: 100%;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  transform: scale(1);\r\n  -webkit-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  z-index: 5;\r\n  max-width: 330px;\r\n}\r\n\r\n.box.back {\r\n  transform: scale(.95);\r\n  -webkit-transform: scale(.95);\r\n  -ms-transform: scale(.95);\r\n  top: -20px;\r\n  opacity: .8;\r\n  z-index: -1;\r\n}\r\n\r\n.box:before {\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  top: -10px;\r\n  background: rgba(255, 255, 255, .6);\r\n  left: 0;\r\n  transform: scale(.95);\r\n  -webkit-transform: scale(.95);\r\n  -ms-transform: scale(.95);\r\n  z-index: -1;\r\n}\r\n\r\n.login-wrapper .example-form {\r\n  min-width: 100%;\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.login-wrapper .example-full-width,\r\n.login-wrapper .btn-block {\r\n  width: 100%;\r\n}\r\n\r\n.login-wrapper mat-card-header {\r\n  text-align: center;\r\n  width: 100%;\r\n  display: block;\r\n  font-weight: 700;\r\n}\r\n\r\n.login-wrapper mat-card-header mat-card-title {\r\n  font-size: 30px;\r\n  margin: 0;\r\n}\r\n\r\n.login-wrapper .mat-card {\r\n  padding: 40px 70px 50px;\r\n}\r\n\r\n.login-wrapper .mat-stroked-button {\r\n  border: 1px solid currentColor;\r\n  line-height: 54px;\r\n  background: #FFF7FA;\r\n}\r\n\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\r\n  padding: 0.8375em 0;\r\n}\r\n\r\n.padre {\r\n    /*background: yellow;\r\n    height: 150px;\r\n    /*IMPORTANTE*/\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n    background-image: url(https://images7.alphacoders.com/708/708805.jpg);\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n    font-family: 'Roboto', sans-serif;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJLQUEySztFQUMzSywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsOEdBQThHO0FBQ2hIOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsT0FBTztFQUNQLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJOztpQkFFYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFFQUFxRTtJQUNyRSwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUNBQWlDO0VBQ25DIiwiZmlsZSI6InR5cG9ncmFwaHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tWHBseVRhMVphLUkvVk1TZ0l5QVlrSEkvQUFBQUFBQUFEeE0vb0wtckQ2VlA0dHMvdzExODQtaDY2Ni9BbmRyb2lkLUxvbGxpcG9wLXdhbGxwYXBlcnMtR29vZ2xlLU5vdy1XYWxscGFwZXItMi5wbmcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gXHJcbn1cclxuXHJcbi5wb3NpdHJvbngge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxufVxyXG5cclxuLmJveC5iYWNrIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uYm94OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcclxuLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9jayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiA0MHB4IDcwcHggNTBweDtcclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkY3RkE7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuODM3NWVtIDA7XHJcbn1cclxuXHJcbi5wYWRyZSB7XHJcbiAgICAvKmJhY2tncm91bmQ6IHllbGxvdztcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAvKklNUE9SVEFOVEUqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzNy5hbHBoYWNvZGVycy5jb20vNzA4LzcwODgwNS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICB9Il19 */");

/***/ }),

/***/ "YpYv":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "ZGr1":
/*!********************************************!*\
  !*** ./src/app/tables/tables.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var TablesComponent = /** @class */ (function () {
    function TablesComponent(servicio) {
        this.servicio = servicio;
        this.meses = [];
        this.banks = [];
        this.body = [];
    }
    TablesComponent.prototype.cargar = function () {
        var _this = this;
        this.servicio.getDataget("datos").subscribe(function (data) {
            _this.cargar1(data);
        });
        // var data1 = require('./data_bancos.json'); // forward slashes will depend on the file location
        // this.cargar1(data1)
    };
    TablesComponent.prototype.cargar1 = function (data1) {
        // this.servicio.getDataget("https://reqres.in/api/users?page=2") .subscribe(data=>{
        //  this.servicio.getDataget("http://34.68.221.224/Reporte/datos") .subscribe(data=>{
        var v = 0;
        var k = 0;
        var m = 0;
        // var data =  JSON.parse(localStorage.getItem('ram')); 
        //   console.log('la data7 es->',data);
        // console.log('la data7 es->',JSON.stringify(data));
        var data = data1.Bancos;
        if (data) {
            var years = [];
            this.meses.push("Perfil Financiero");
            var name;
            var name1;
            for (var i = 0; i < data.length; i++) {
                var obj = data[i].Anio;
                // console.log('obj es->',obj);
                // console.log('mont1 es->',mont1);
                // console.log('mont2 es->',mont1[0]);
                var f = obj[0];
                if (v == 0) {
                    for (var key in f) {
                        if (f.hasOwnProperty(key)) {
                            console.log(key + " -> ESTE ES EL MES");
                            years.push(key);
                            ++v;
                        }
                    }
                }
            }
            console.log(' data[ 0].Anio 5 es->', JSON.stringify(data[0].Anio));
            for (var j = 0; j < 1; j++) {
                obj = data[j].Anio;
                for (var i = 0; i < years.length; i++) {
                    var mont1 = obj[0][years[i]];
                    for (name in mont1[0]) {
                        // console.log('mont2 es->',name);
                        this.meses.push(name);
                    }
                }
            }
            console.log('this.meses33 es->', JSON.stringify(this.meses));
            //   for (var j = 0; j < 1;j++)
            //   {
            //     obj = data[j].Anio;
            //       for (var i = 0; i < years.length; i++){
            //           var mont1 = obj[0][years[i]];
            //           for (name in mont1[0]) {
            //             // console.log('mont2 es->',name);
            //                 this.meses.push(name);
            //             }
            //       }
            // } 
        }
        //   set data banks
        k = 0;
        m = 0;
        console.log('years es->', JSON.stringify(years));
        if (data) {
            var name;
            var name1;
            // for (var i = 0; i < data.length; i++)
            for (var i = 0; i < data.length; i++) {
                // console.log('data.Bancos[i] e s->',data[i]);
                var row = [];
                // console.log('Anio entro s->');
                var nombre = data[i].Nombre;
                row.push(nombre);
                var obj = data[i].Anio;
                for (var j = 0; j < years.length; j++) {
                    var mont1 = obj[0][years[j]];
                    // console.log(key + " -> " + p[key]);
                    var p = mont1[0];
                    for (var key in p) {
                        if (p.hasOwnProperty(key)) {
                            // console.log(key + " -> " + p[key]);
                            row.push(p[key]);
                        }
                    }
                }
                console.log('row.body es->', row);
                this.body.push(row);
            }
            console.log('this.body es->', this.body);
            console.log('body es->', JSON.stringify(this.body));
        }
    };
    TablesComponent.prototype.islogged = function () {
        var code = localStorage.getItem('user');
        console.log('la code->', code);
        if (code == null || code.length == 0) {
            this.servicio.navegarwithparamas2('dashboard', "", "0");
            return;
        }
    };
    TablesComponent.prototype.Loguearse = function () {
        this.servicio.navegar('login');
        /*
            const jsonData={correo:Fcorreo,password:Fpass}
            this.servicio.postLogin(jsonData).subscribe(msg=>{
              console.log('la respuesta->',msg);
              this.servicio.setearparametros(msg)
              this.message('Bienvenido!','success')
              this.router.navigate(['/listado']);
        
            },err=>{
              this.message('credenciales incorrectas','error')
            }) */
    };
    TablesComponent.prototype.ngOnInit = function () {
        this.islogged();
        this.cargar();
        this.tableData1 = {
            headerRow: this.meses,
            dataRows: this.body
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    TablesComponent.ctorParameters = function () { return [
        { type: services_service_1.ServicesService }
    ]; };
    TablesComponent = __decorate([
        core_1.Component({
            selector: 'app-tables',
            template: __webpack_require__(/*! raw-loader!./tables.component.html */ "eq6L").default,
            styles: [__webpack_require__(/*! ./tables.component.css */ "UQji").default]
        }),
        __metadata("design:paramtypes", [services_service_1.ServicesService])
    ], TablesComponent);
    return TablesComponent;
}());
exports.TablesComponent = TablesComponent;


/***/ }),

/***/ "Zfkz":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent.ctorParameters = function () { return []; };
    UpgradeComponent = __decorate([
        core_1.Component({
            selector: 'app-upgrade',
            template: __webpack_require__(/*! raw-loader!./upgrade.component.html */ "PO8C").default,
            styles: [__webpack_require__(/*! ./upgrade.component.css */ "NL5l").default]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());
exports.UpgradeComponent = UpgradeComponent;


/***/ }),

/***/ "ZuDf":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lbd/lbd-chart/lbd-chart.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "eq6L":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/tables.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n \n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Ranking Bancario</h4>\n                        <p class=\"category\">Información financiera necesaria para el análisis\n                            de los indicadores financieros</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                          <table class=\"table table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "gWRF":
/*!***********************************!*\
  !*** ./src/app/lbd/lbd.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LbdModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var lbd_chart_component_1 = __webpack_require__(/*! ./lbd-chart/lbd-chart.component */ "vUmn");
var LbdModule = /** @class */ (function () {
    function LbdModule() {
    }
    LbdModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule
            ],
            declarations: [
                lbd_chart_component_1.LbdChartComponent
            ],
            exports: [
                lbd_chart_component_1.LbdChartComponent
            ]
        })
    ], LbdModule);
    return LbdModule;
}());
exports.LbdModule = LbdModule;


/***/ }),

/***/ "hEVk":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nfontvalueerrro {\r\n    color: rgb(221, 10, 10);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7RUFDekIiLCJmaWxlIjoidXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZvbnR2YWx1ZWVycnJvIHtcclxuICAgIGNvbG9yOiByZ2IoMjIxLCAxMCwgMTApO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "iP5s":
/*!************************************************!*\
  !*** ./src/app/promedio/promedio.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromedioComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var lbd_chart_component_1 = __webpack_require__(/*! ../lbd/lbd-chart/lbd-chart.component */ "vUmn");
var Chartist = __webpack_require__(/*! chartist */ "uki+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var router_2 = __webpack_require__(/*! @angular/router */ "tyNb");
var PromedioComponent = /** @class */ (function () {
    function PromedioComponent(router, route, servicio) {
        this.router = router;
        this.route = route;
        this.servicio = servicio;
        this.titulo = " en rango de Abril a Mayo";
        this.selectedbank = " ";
        this.datageneral = [];
        this.yearsl = [];
        this.visiblehide = false;
        this.meses = [];
        this.banks = [];
        this.body = [];
        this.footer = [];
        this.priorityList = [];
        this.param1 = this.route.snapshot.params.param1;
        var navigation = this.router.getCurrentNavigation();
        var state = navigation.extras.state;
        console.log("state es " + state);
        //  this.route.params.subscribe(params => {
        //     // var id = +params['id']; // (+) converts string 'id' to a number
        //     console.log( "params es "+JSON.stringify(params));
        //     // In a real app: dispatch action to load the details here.
        //  });
        // if(state!=undefined) 
        try {
            console.log("param1 es" + state.example);
            this.cargar(state.example);
        }
        catch (error) {
            this.cargar(0);
            console.log('this.body es->', this.body);
            this.hoursChartLegendItems = [
                { title: this.banks[0], imageClass: 'fa fa-circle text-info' },
                { title: this.banks[1], imageClass: 'fa fa-circle text-danger' },
                { title: this.banks[3], imageClass: 'fa fa-circle text-warning' },
                { title: this.banks[4], imageClass: 'fa fa-circle text-primary ' },
                { title: this.banks[5], imageClass: 'fa fa-circle text-success' },
                { title: this.banks[6], imageClass: 'fa fa-circle text-primary ' },
                { title: this.banks[7], imageClass: 'fa fa-circle text-secondary' },
                { title: this.banks[8], imageClass: 'fa fa-circle text-danger' },
                { title: this.banks[9], imageClass: 'fa fa-circle text-dark' },
                { title: this.banks[10], imageClass: 'fa fa-circle text-danger' },
                { title: this.banks[11], imageClass: 'fa fa-circle text-info' },
                { title: this.banks[12], imageClass: 'fa fa-circle text-danger' },
                { title: this.banks[13], imageClass: 'fa fa-circle text-primary' },
                { title: this.banks[14], imageClass: 'fa fa-circle text-primary' },
                { title: this.banks[15], imageClass: 'fa fa-circle text-primary' },
                { title: this.banks[16], imageClass: 'fa fa-circle text-dark' },
                { title: this.banks[17], imageClass: 'fa fa-circle text-dark' }
            ];
        }
        this.vergrafico();
    }
    PromedioComponent.prototype.islogged = function () {
        var code = localStorage.getItem('user');
        console.log('la code->', code);
        if (code == null || code.length == 0) {
            this.servicio.navegarwithparamas2('dashboard', "", "0");
            return;
        }
    };
    PromedioComponent.prototype.Graficar = function () {
        console.log(' selectedbank es->', this.selectedbank);
        this.servicio.navegarwithparamas('promedio', this.selectedbank);
        // this.  changedvalue()
        //     console.log(' selectedbank es->',this.selectedbank);
        //     var y=false
        //     if ("Todos los Bancos"==this.selectedbank) {
        //       y=true
        //     }
        //      this.reloadgraficos(y)
        //     this.hoursChartLegendItems = [
        //       { title: this.selectedbank, imageClass: 'fa fa-circle text-info' },
        //     ];
        //     this.hoursChartData = {
        //       labels: this.meses,
        //       series:  this.body
        //     };
        // this.  vergrafico()
    };
    PromedioComponent.prototype.changedvalue = function () {
        //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
        //     return false;
        // }
        // this.router.onSameUrlNavigation = 'reload';
    };
    PromedioComponent.prototype.reloadgraficos = function (y) {
        this.body = [];
        var data = this.datageneral;
        var years = this.yearsl;
        for (var i = 0; i < data.length; i++) {
            //  console.log('data.Bancos[i] e s->',data[i]);
            var row = [];
            // console.log('Anio entro s->');
            var nombre = data[i].Nombre;
            // row.push(nombre);
            var obj = data[i].Anio;
            for (var j = 0; j < years.length; j++) {
                var mont1 = obj[0][years[j]];
                // console.log(key + " -> " + p[key]);
                var p = mont1[0];
                for (var key in p) {
                    if (p.hasOwnProperty(key)) {
                        // console.log(key + " -> " + p[key]);
                        // var numberValue = Number(this.selectedbank);
                        row.push(p[key]);
                    }
                }
            }
            if (nombre == this.selectedbank && y == false) {
                console.log("ombre==this.selectedbank && y==false con nombre" + nombre);
                this.body.push(row);
            }
            else if (y == true) {
                console.log("y==true" + nombre);
                this.body.push(row);
            }
        }
        console.log('this.body es->', this.body);
        // console.log('body es->',JSON.stringify(this.body));
    };
    PromedioComponent.prototype.cargar = function (nameselected) {
        // this.servicio.getDataget("datos") .subscribe(data=>{
        //   this.cargar1(nameselected,data)
        // });
        // var data1 = require('./data.json'); // forward slashes will depend on the file location
        var data1 = __webpack_require__(/*! ./data_bancos.json */ "N4/V"); // forward slashes will depend on the file location
        this.cargar1(nameselected, data1);
    };
    PromedioComponent.prototype.cargar1 = function (nameselected, data1) {
        var indexselected = Number(nameselected);
        var nemselected = "Todos los Bancos";
        // this.servicio.getDataget("https://reqres.in/api/users?page=2") .subscribe(data=>{
        //  this.servicio.getDataget("http://34.68.221.224/Reporte/datos") .subscribe(data=>{
        var v = 0;
        var k = 0;
        var m = 0;
        // var data =  JSON.parse(localStorage.getItem('ram')); 
        console.log('la data7 es->', data1);
        // console.log('la data7 es->',JSON.stringify(data));
        var data = data1.Bancos;
        this.datageneral = data;
        if (data) {
            var years = [];
            // this.meses.push("Perfil Financiero");
            var c = 0;
            var name;
            var name1;
            var a = { value: 0, label: "Todos los Bancos" };
            ++c;
            this.priorityList.push(a);
            for (var i = 0; i < data.length; i++) {
                var obj = data[i].Anio;
                var Nombr = data[i].Nombre;
                // console.log( " Nombr-> " + Nombr);
                this.banks.push(Nombr);
                // var Nombre = Nombr[0];
                a = { value: c, label: Nombr };
                ++c;
                this.priorityList.push(a);
                // for (var key in Nombre) {
                //   if (Nombre.hasOwnProperty(key)) {
                //       // console.log(key + " -> " + p[key]);
                //    
                //   }
                // }
                // console.log('obj es->',obj);
                // console.log('mont1 es->',mont1);
                // console.log('mont2 es->',mont1[0]);
                var f = obj[0];
                if (v == 0) {
                    for (var key in f) {
                        if (f.hasOwnProperty(key)) {
                            console.log(key + " -> ESTE ES EL MES");
                            years.push(key);
                            ++v;
                        }
                    }
                }
            }
            //   convert data name to index this.banks
            // for (var nb in this.priorityList) {
            //   console.log(' nb["value"] es->',nb["value"]);
            //   if(nb["value"]== indexselected) {
            //     nemselected=nb["label"]
            //   }
            //   }
            var fh = this.priorityList;
            for (var key in fh) {
                if (fh.hasOwnProperty(key)) {
                    var indexkey = Number(key);
                    if (indexkey == indexselected) {
                        var bb = fh[key];
                        nemselected = bb.label;
                        console.log(bb.label + " -> ESTE ES EL bb");
                    }
                    // console.log(key + " -> ESTE ES EL MES" );
                    // console.log(JSON.stringify(fh[key]) + " -> ESTE ES EL MvalueES" );
                }
            }
            console.log(' indexselected es->', indexselected);
            console.log(' nemselected777 es->', nemselected);
            this.yearsl = years;
            // console.log(' this.banks es->',JSON.stringify(this.banks));
            // console.log(' data[ 0].Anio 5 es->',JSON.stringify( data[ 0].Anio));
            console.log(' this.banks.length es->', this.banks.length);
            for (var j = 0; j < 1; j++) {
                obj = data[j].Anio;
                for (var i = 0; i < years.length; i++) {
                    var mont1 = obj[0][years[i]];
                    for (name in mont1[0]) {
                        // console.log('mont2 es->',name);
                        this.meses.push(name);
                    }
                }
            }
            console.log('this.meses33 es->', JSON.stringify(this.meses));
            //   for (var j = 0; j < 1;j++)
            //   {
            //     obj = data[j].Anio;
            //       for (var i = 0; i < years.length; i++){
            //           var mont1 = obj[0][years[i]];
            //           for (name in mont1[0]) {
            //             // console.log('mont2 es->',name);
            //                 this.meses.push(name);
            //             }
            //       }
            // } 
        }
        //   set data banks
        k = 0;
        m = 0;
        if (data) {
            var name;
            var name1;
            //   for (var i = 0; i < 7; i++)
            for (var i = 0; i < data.length; i++) {
                // console.log('data.Bancos[i] e s->',data[i]);
                var row = [];
                // console.log('Anio entro s->');
                var nombre = data[i].Nombre;
                // row.push(nombre);
                var obj = data[i].Anio;
                for (var j = 0; j < years.length; j++) {
                    var mont1 = obj[0][years[j]];
                    // console.log(key + " -> " + p[key]);
                    var p = mont1[0];
                    for (var key in p) {
                        if (p.hasOwnProperty(key)) {
                            // console.log(key + " -> " + p[key]);
                            row.push(p[key]);
                        }
                    }
                }
                if (nemselected == nombre) {
                    console.log("ombre==this.selectedbank && y==false con nombre" + nombre);
                    this.body.push(row);
                    this.footer = row;
                    //  let text = ""
                    //  for (let x in row) {
                    //    text += "<tr><td>" + row[x] + "</td></tr>";
                    //  }
                    //  this.footer=text
                }
                else if (nemselected == "Todos los Bancos") {
                    console.log("y==true");
                    this.body.push(row);
                }
            }
            // console.log('this.body es->',this.body);
            // console.log('body es->',JSON.stringify(this.body));
        }
        if (indexselected == 0) {
            this.visiblehide = true;
            this.hoursChartLegendItems = [
                { title: this.banks[0], imageClass: 'fa fa-circle uno' },
                { title: this.banks[1], imageClass: 'fa fa-circle dos' },
                { title: this.banks[3], imageClass: 'fa fa-circle tres' },
                { title: this.banks[4], imageClass: 'fa fa-circle t4' },
                { title: this.banks[5], imageClass: 'fa fa-circle t5' },
                { title: this.banks[6], imageClass: 'fa fa-circle t6' },
                { title: this.banks[7], imageClass: 'fa fa-circle t7' },
                { title: this.banks[8], imageClass: 'fa fa-circle t8' },
                { title: this.banks[9], imageClass: 'fa fa-circle t9' },
                { title: this.banks[10], imageClass: 'fa fa-circle t10' },
                { title: this.banks[11], imageClass: 'fa fa-circle t11' },
                { title: this.banks[12], imageClass: 'fa fa-circle t12' },
                { title: this.banks[13], imageClass: 'fa fa-circle t13' },
                { title: this.banks[14], imageClass: 'fa fa-circle t14' },
                { title: this.banks[15], imageClass: 'fa fa-circle t15' },
                { title: this.banks[16], imageClass: 'fa fa-circle t16' },
                { title: this.banks[17], imageClass: 'fa fa-circle t17' }
            ];
        }
        else
            this.hoursChartLegendItems = [
                { title: nemselected, imageClass: 'fa fa-circle text-info' },
            ];
    };
    PromedioComponent.prototype.vergrafico = function () {
        this.titulo = " en rango de Abril 2020 a Abril 2021";
        this.hoursChartType = lbd_chart_component_1.ChartType.Line;
        this.hoursChartData = {
            labels: this.meses,
            series: this.body
        };
        this.hoursChartOptions = {
            low: 0,
            high: 20,
            showArea: false,
            height: '245px',
            axisX: {
                showGrid: true,
            },
            axisY: {
                onlyInteger: true,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: true,
        };
        this.hoursChartResponsive = [
            ['screen and (max-width: 940px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
    };
    PromedioComponent.prototype.ngOnInit = function () {
        this.islogged();
    };
    PromedioComponent.ctorParameters = function () { return [
        { type: router_2.Router },
        { type: router_1.ActivatedRoute },
        { type: services_service_1.ServicesService }
    ]; };
    PromedioComponent = __decorate([
        core_1.Component({
            selector: 'app-promedio',
            template: __webpack_require__(/*! raw-loader!./promedio.component.html */ "pNp1").default,
            styles: [__webpack_require__(/*! ./promedio.component.css */ "Oq/h").default]
        }),
        __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute, services_service_1.ServicesService])
    ], PromedioComponent);
    return PromedioComponent;
}());
exports.PromedioComponent = PromedioComponent;
// console.log(' this.banks.length es->',this.banks.length);


/***/ }),

/***/ "oBmT":
/*!********************************!*\
  !*** ./src/app/maps/data.json ***!
  \********************************/
/*! exports provided: Bancos, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Bancos\":[{\"_id\":\"banco1\",\"Nombre\":\"Agromercantil De Guatemala, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"30465000.0\",\"MAYO\":\"30413900.0\",\"JUNIO\":\"30251400.0\",\"JULIO\":\"30013300.0\",\"AGOSTO\":\"30753500.0\",\"SEPTIEMBRE\":\"31390100.0\",\"OCTUBRE\":\"32026600.0\",\"NOVIEMBRE\":\"32020200.0\",\"DICIEMBRE\":\"31812000.0\"}],\"2021\":[{\"ENERO\":\"31855300.0\",\"FEBRERO\":\"31969300.0\",\"MARZO\":\"31679100.0\",\"ABRIL\":\"32333500.0\"}]}]},{\"_id\":\"banco2\",\"Nombre\":\"AZTECA DE GUATEMALA, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"1851650.0\",\"MAYO\":\"1868620.0\",\"JUNIO\":\"1903220.0\",\"JULIO\":\"1957530.0\",\"AGOSTO\":\"2011020.0\",\"SEPTIEMBRE\":\"1918900.0\",\"OCTUBRE\":\"1914410.0\",\"NOVIEMBRE\":\"1917870.0\",\"DICIEMBRE\":\"1934440.0\"}],\"2021\":[{\"ENERO\":\"1911080.0\",\"FEBRERO\":\"1911610.0\",\"MARZO\":\"1943000.0\",\"ABRIL\":\"1936620.0\"}]}]},{\"_id\":\"banco3\",\"Nombre\":\"CITIBANK, N.A., SUCURSAL GUATEMALA\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"2600880.0\",\"MAYO\":\"2921710.0\",\"JUNIO\":\"3408260.0\",\"JULIO\":\"3518190.0\",\"AGOSTO\":\"3593980.0\",\"SEPTIEMBRE\":\"4302800.0\",\"OCTUBRE\":\"4110370.0\",\"NOVIEMBRE\":\"4229060.0\",\"DICIEMBRE\":\"4824520.0\"}],\"2021\":[{\"ENERO\":\"4594840.0\",\"FEBRERO\":\"4336360.0\",\"MARZO\":\"4130180.0\",\"ABRIL\":\"4312210.0\"}]}]},{\"_id\":\"banco4\",\"Nombre\":\"CREDICORP, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"0.0\",\"MAYO\":\"0.0\",\"JUNIO\":\"0.0\",\"JULIO\":\"0.0\",\"AGOSTO\":\"0.0\",\"SEPTIEMBRE\":\"0.0\",\"OCTUBRE\":\"0.0\",\"NOVIEMBRE\":\"416242.0\",\"DICIEMBRE\":\"425317.0\"}],\"2021\":[{\"ENERO\":\"430598.0\",\"FEBRERO\":\"447673.0\",\"MARZO\":\"463326.0\",\"ABRIL\":\"493224.0\"}]}]},{\"_id\":\"banco5\",\"Nombre\":\"DE AMÉRICA CENTRAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"31016300.0\",\"MAYO\":\"31803400.0\",\"JUNIO\":\"32977400.0\",\"JULIO\":\"32812500.0\",\"AGOSTO\":\"33393600.0\",\"SEPTIEMBRE\":\"33468700.0\",\"OCTUBRE\":\"33914800.0\",\"NOVIEMBRE\":\"34342100.0\",\"DICIEMBRE\":\"34480900.0\"}],\"2021\":[{\"ENERO\":\"34701100.0\",\"FEBRERO\":\"34902000.0\",\"MARZO\":\"35026500.0\",\"ABRIL\":\"34464500.0\"}]}]},{\"_id\":\"banco6\",\"Nombre\":\"DE ANTIGUA, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"1402770.0\",\"MAYO\":\"1393240.0\",\"JUNIO\":\"1402500.0\",\"JULIO\":\"1414460.0\",\"AGOSTO\":\"1431590.0\",\"SEPTIEMBRE\":\"1446980.0\",\"OCTUBRE\":\"1459070.0\",\"NOVIEMBRE\":\"1482880.0\",\"DICIEMBRE\":\"1467480.0\"}],\"2021\":[{\"ENERO\":\"1488320.0\",\"FEBRERO\":\"1509600.0\",\"MARZO\":\"1496360.0\",\"ABRIL\":\"1536310.0\"}]}]},{\"_id\":\"banco7\",\"Nombre\":\"DE CRÉDITO, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"0.0\",\"MAYO\":\"0.0\",\"JUNIO\":\"0.0\",\"JULIO\":\"0.0\",\"AGOSTO\":\"0.0\",\"SEPTIEMBRE\":\"0.0\",\"OCTUBRE\":\"0.0\",\"NOVIEMBRE\":\"0.0\",\"DICIEMBRE\":\"0.0\"}],\"2021\":[{\"ENERO\":\"0.0\",\"FEBRERO\":\"0.0\",\"MARZO\":\"0.0\",\"ABRIL\":\"0.0\"}]}]},{\"_id\":\"banco8\",\"Nombre\":\"DE DESARROLLO RURAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"76164100.0\",\"MAYO\":\"76932100.0\",\"JUNIO\":\"79791100.0\",\"JULIO\":\"80592800.0\",\"AGOSTO\":\"81648500.0\",\"SEPTIEMBRE\":\"82010800.0\",\"OCTUBRE\":\"83741800.0\",\"NOVIEMBRE\":\"84433500.0\",\"DICIEMBRE\":\"85157500.0\"}],\"2021\":[{\"ENERO\":\"85620300.0\",\"FEBRERO\":\"86213100.0\",\"MARZO\":\"86113700.0\",\"ABRIL\":\"87432100.0\"}]}]},{\"_id\":\"banco9\",\"Nombre\":\"DE LOS TRABAJADORES\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"26835400.0\",\"MAYO\":\"27168400.0\",\"JUNIO\":\"27575100.0\",\"JULIO\":\"27573100.0\",\"AGOSTO\":\"28485700.0\",\"SEPTIEMBRE\":\"28563500.0\",\"OCTUBRE\":\"29184900.0\",\"NOVIEMBRE\":\"28029400.0\",\"DICIEMBRE\":\"27839500.0\"}],\"2021\":[{\"ENERO\":\"28121500.0\",\"FEBRERO\":\"28133800.0\",\"MARZO\":\"28416600.0\",\"ABRIL\":\"28676100.0\"}]}]},{\"_id\":\"banco10\",\"Nombre\":\"EL CRÉDITO HIPOTECARIO NACIONAL DE GUATEMALA\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"4078780.0\",\"MAYO\":\"5713570.0\",\"JUNIO\":\"5728250.0\",\"JULIO\":\"5374710.0\",\"AGOSTO\":\"5010880.0\",\"SEPTIEMBRE\":\"5329520.0\",\"OCTUBRE\":\"5150880.0\",\"NOVIEMBRE\":\"4997680.0\",\"DICIEMBRE\":\"5701980.0\"}],\"2021\":[{\"ENERO\":\"5231400.0\",\"FEBRERO\":\"5393020.0\",\"MARZO\":\"5356310.0\",\"ABRIL\":\"5534610.0\"}]}]},{\"_id\":\"banco11\",\"Nombre\":\"FICOHSA GUATEMALA, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"2697340.0\",\"MAYO\":\"2685160.0\",\"JUNIO\":\"2634630.0\",\"JULIO\":\"2642600.0\",\"AGOSTO\":\"2685800.0\",\"SEPTIEMBRE\":\"2787220.0\",\"OCTUBRE\":\"2796940.0\",\"NOVIEMBRE\":\"2846270.0\",\"DICIEMBRE\":\"3063500.0\"}],\"2021\":[{\"ENERO\":\"3031790.0\",\"FEBRERO\":\"3154880.0\",\"MARZO\":\"3200300.0\",\"ABRIL\":\"3165140.0\"}]}]},{\"_id\":\"banco12\",\"Nombre\":\"G&T CONTINENTAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"54821800.0\",\"MAYO\":\"54911400.0\",\"JUNIO\":\"55161700.0\",\"JULIO\":\"54956600.0\",\"AGOSTO\":\"54885400.0\",\"SEPTIEMBRE\":\"54812000.0\",\"OCTUBRE\":\"55939800.0\",\"NOVIEMBRE\":\"55685000.0\",\"DICIEMBRE\":\"55751600.0\"}],\"2021\":[{\"ENERO\":\"56554400.0\",\"FEBRERO\":\"56947900.0\",\"MARZO\":\"56174000.0\",\"ABRIL\":\"56565800.0\"}]}]},{\"_id\":\"banco13\",\"Nombre\":\"INDUSTRIAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"101912000.0\",\"MAYO\":\"101048000.0\",\"JUNIO\":\"102052000.0\",\"JULIO\":\"102438000.0\",\"AGOSTO\":\"103331000.0\",\"SEPTIEMBRE\":\"103231000.0\",\"OCTUBRE\":\"106788000.0\",\"NOVIEMBRE\":\"107179000.0\",\"DICIEMBRE\":\"109249000.0\"}],\"2021\":[{\"ENERO\":\"109911000.0\",\"FEBRERO\":\"109004000.0\",\"MARZO\":\"111010000.0\",\"ABRIL\":\"112363000.0\"}]}]},{\"_id\":\"banco14\",\"Nombre\":\"INMOBILIARIO, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"1702180.0\",\"MAYO\":\"1717110.0\",\"JUNIO\":\"1841950.0\",\"JULIO\":\"1880190.0\",\"AGOSTO\":\"1870560.0\",\"SEPTIEMBRE\":\"1911580.0\",\"OCTUBRE\":\"1894310.0\",\"NOVIEMBRE\":\"1945690.0\",\"DICIEMBRE\":\"1987350.0\"}],\"2021\":[{\"ENERO\":\"2037150.0\",\"FEBRERO\":\"1981540.0\",\"MARZO\":\"1972200.0\",\"ABRIL\":\"2037960.0\"}]}]},{\"_id\":\"banco15\",\"Nombre\":\"INTERNACIONAL, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"10726500.0\",\"MAYO\":\"10228200.0\",\"JUNIO\":\"10499900.0\",\"JULIO\":\"10533600.0\",\"AGOSTO\":\"10648800.0\",\"SEPTIEMBRE\":\"10755500.0\",\"OCTUBRE\":\"10795300.0\",\"NOVIEMBRE\":\"11090000.0\",\"DICIEMBRE\":\"11180500.0\"}],\"2021\":[{\"ENERO\":\"11322300.0\",\"FEBRERO\":\"11317500.0\",\"MARZO\":\"11173700.0\",\"ABRIL\":\"11439200.0\"}]}]},{\"_id\":\"banco16\",\"Nombre\":\"INV, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"954767.0\",\"MAYO\":\"929117.0\",\"JUNIO\":\"920440.0\",\"JULIO\":\"945003.0\",\"AGOSTO\":\"936259.0\",\"SEPTIEMBRE\":\"939945.0\",\"OCTUBRE\":\"948356.0\",\"NOVIEMBRE\":\"939617.0\",\"DICIEMBRE\":\"930519.0\"}],\"2021\":[{\"ENERO\":\"929271.0\",\"FEBRERO\":\"932459.0\",\"MARZO\":\"930229.0\",\"ABRIL\":\"913513.0\"}]}]},{\"_id\":\"banco17\",\"Nombre\":\"PROMERICA, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"15654400.0\",\"MAYO\":\"15983600.0\",\"JUNIO\":\"16212100.0\",\"JULIO\":\"16373200.0\",\"AGOSTO\":\"16534700.0\",\"SEPTIEMBRE\":\"16860600.0\",\"OCTUBRE\":\"17095000.0\",\"NOVIEMBRE\":\"17681500.0\",\"DICIEMBRE\":\"17485100.0\"}],\"2021\":[{\"ENERO\":\"17969900.0\",\"FEBRERO\":\"17855200.0\",\"MARZO\":\"17813600.0\",\"ABRIL\":\"18026700.0\"}]}]},{\"_id\":\"banco18\",\"Nombre\":\"VIVIBANCO, S. A.\",\"Anio\":[{\"2020\":[{\"ABRIL\":\"728253.0\",\"MAYO\":\"723639.0\",\"JUNIO\":\"721420.0\",\"JULIO\":\"728939.0\",\"AGOSTO\":\"763408.0\",\"SEPTIEMBRE\":\"755784.0\",\"OCTUBRE\":\"774077.0\",\"NOVIEMBRE\":\"784319.0\",\"DICIEMBRE\":\"775345.0\"}],\"2021\":[{\"ENERO\":\"788552.0\",\"FEBRERO\":\"790974.0\",\"MARZO\":\"765157.0\",\"ABRIL\":\"765152.0\"}]}]}]}");

/***/ }),

/***/ "pNp1":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promedio/promedio.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div>\n  <div>\n      <div class=\"row\">\n          <div>\n              <div class=\"card\">\n                  <div class=\"header text-center\">\n                      <h4 class=\"title\">Promedio de Bancos del sistema </h4>\n                      <p class=\"category\">Del ultimo año.</p>\n                      <br>\n                  </div>\n                  \n              </div>\n          </div>\n      </div>\n\n  </div>\n</div>\n\n\n\n<div class=\"text-center\">\n\n  <select class=\"form-control\" (ngModelChange)=\"changedvalue()\"   name=\"selectedbank\" [(ngModel)]=\"selectedbank\"  required>\n    <option *ngFor=\"let list of priorityList\" [value]=\"list.value\">\n      {{list.label}}\n    </option>\n</select>\n\n<button type=\"button\" (click)=\"Graficar()\"  class=\"btn btn-success\">Graficar</button>\n\n\n</div>\n\n<div class=\"aline\">\n\n  <lbd-chart\n  [title]=\"'Promedio de Ranking Bancario'\"\n  [subtitle]=\"'en rango de Abril 2020 a Abril 2021'\"\n  [chartType]=\"hoursChartType\"\n  [chartData]=\"hoursChartData\"\n  [chartOptions]=\"hoursChartOptions\"\n  [chartResponsive]=\"hoursChartResponsive\"\n  [legendItems]=\"hoursChartLegendItems\"\n  [withHr]=\"true\"\n  [footerIconClass]=\"'fa fa-history'\"\n  [footerText]=\"\">\n  </lbd-chart>\n\n</div>\n\n\n\n\n\n<div class=\"container\" *ngIf=\"visiblehide\">\n  <h3>Bancos</h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item  uno\">{{banks[0]}}</li>\n    <li class=\"list-group-item  dos\">{{banks[1]}}</li>\n    <li class=\"list-group-item tres\">{{banks[2]}}</li>\n    <li class=\"list-group-item t4\">{{banks[3]}}</li>\n    <li class=\"list-group-item t5\">{{banks[4]}}</li>\n    <li class=\"list-group-item t6\">{{banks[5]}}</li>\n    <li class=\"list-group-item t7\">{{banks[6]}}</li>\n    <li class=\"list-group-item t8\">{{banks[7]}}</li>\n    <li class=\"list-group-item  t9\">{{banks[8]}}</li>\n    <li class=\"list-group-item  t10\">{{banks[9]}}</li>\n    <li class=\"list-group-item t11\">{{banks[10]}}</li>\n    <li class=\"list-group-item t12\">{{banks[11]}}</li>\n    <li class=\"list-group-item t13\">{{banks[12]}}</li>\n    <li class=\"list-group-item t14\">{{banks[13]}}</li>\n    <li class=\"list-group-item t15\">{{banks[14]}}</li>\n    <li class=\"list-group-item t16\">{{banks[15]}}</li>\n  </ul>\n  </div>\n  \n\n\n\n  \n\n<table class=\"table\">\n \n  <tbody>\n    <tr  >\n\n      <td *ngFor=\"let group of footer\">\n        {{group}}\n    </td>\n      \n    \n    </tr>\n    \n  </tbody>\n</table>");

/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLayoutRoutes = void 0;
var home_component_1 = __webpack_require__(/*! ../../home/home.component */ "9vUh");
var user_component_1 = __webpack_require__(/*! ../../user/user.component */ "3nXK");
var tables_component_1 = __webpack_require__(/*! ../../tables/tables.component */ "ZGr1");
var typography_component_1 = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
var icons_component_1 = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
var maps_component_1 = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
var notifications_component_1 = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
var upgrade_component_1 = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
var login_component_1 = __webpack_require__(/*! ../../login/login.component */ "vtpD");
var promedio_component_1 = __webpack_require__(/*! ../../promedio/promedio.component */ "iP5s");
var create_component_1 = __webpack_require__(/*! ../../create/create.component */ "Khja");
var register_component_1 = __webpack_require__(/*! ../../register/register.component */ "1W4x");
register_component_1.RegisterComponent;
exports.AdminLayoutRoutes = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: tables_component_1.TablesComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'promedio', component: promedio_component_1.PromedioComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'create', component: create_component_1.CreateComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'Register', component: register_component_1.RegisterComponent },
    { path: 'upgrade', component: upgrade_component_1.UpgradeComponent },
];


/***/ }),

/***/ "sqUA":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n \n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Ranking Bancario</h4>\n                        <p class=\"category\">Información financiera necesaria para el análisis\n                            de los indicadores financieros</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                          <table class=\"table table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "uki+":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root['Chartist'] = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /* Chartist.js 0.11.4
   * Copyright © 2019 Gion Kunz
   * Free to use under either the WTFPL license or the MIT license.
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
   */

  /**
   * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
   *
   * @module Chartist.Core
   */
  var Chartist = {
    version: '0.11.4'
  };

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * This object contains all namespaces used within Chartist.
     *
     * @memberof Chartist.Core
     * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
     */

    Chartist.namespaces = {
      svg: 'http://www.w3.org/2000/svg',
      xmlns: 'http://www.w3.org/2000/xmlns/',
      xhtml: 'http://www.w3.org/1999/xhtml',
      xlink: 'http://www.w3.org/1999/xlink',
      ct: 'http://gionkunz.github.com/chartist-js/ct'
    };
    /**
     * Helps to simplify functional style code
     *
     * @memberof Chartist.Core
     * @param {*} n This exact value will be returned by the noop function
     * @return {*} The same value that was provided to the n parameter
     */

    Chartist.noop = function (n) {
      return n;
    };
    /**
     * Generates a-z from a number 0 to 26
     *
     * @memberof Chartist.Core
     * @param {Number} n A number from 0 to 26 that will result in a letter a-z
     * @return {String} A character from a-z based on the input number n
     */


    Chartist.alphaNumerate = function (n) {
      // Limit to a-z
      return String.fromCharCode(97 + n % 26);
    };
    /**
     * Simple recursive object extend
     *
     * @memberof Chartist.Core
     * @param {Object} target Target object where the source will be merged into
     * @param {Object...} sources This object (objects) will be merged into target and then target is returned
     * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
     */


    Chartist.extend = function (target) {
      var i, source, sourceProp;
      target = target || {};

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];

        for (var prop in source) {
          sourceProp = source[prop];

          if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
            target[prop] = Chartist.extend(target[prop], sourceProp);
          } else {
            target[prop] = sourceProp;
          }
        }
      }

      return target;
    };
    /**
     * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
     *
     * @memberof Chartist.Core
     * @param {String} str
     * @param {String} subStr
     * @param {String} newSubStr
     * @return {String}
     */


    Chartist.replaceAll = function (str, subStr, newSubStr) {
      return str.replace(new RegExp(subStr, 'g'), newSubStr);
    };
    /**
     * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
     *
     * @memberof Chartist.Core
     * @param {Number} value
     * @param {String} unit
     * @return {String} Returns the passed number value with unit.
     */


    Chartist.ensureUnit = function (value, unit) {
      if (typeof value === 'number') {
        value = value + unit;
      }

      return value;
    };
    /**
     * Converts a number or string to a quantity object.
     *
     * @memberof Chartist.Core
     * @param {String|Number} input
     * @return {Object} Returns an object containing the value as number and the unit as string.
     */


    Chartist.quantity = function (input) {
      if (typeof input === 'string') {
        var match = /^(\d+)\s*(.*)$/g.exec(input);
        return {
          value: +match[1],
          unit: match[2] || undefined
        };
      }

      return {
        value: input
      };
    };
    /**
     * This is a wrapper around document.querySelector that will return the query if it's already of type Node
     *
     * @memberof Chartist.Core
     * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
     * @return {Node}
     */


    Chartist.querySelector = function (query) {
      return query instanceof Node ? query : document.querySelector(query);
    };
    /**
     * Functional style helper to produce array with given length initialized with undefined values
     *
     * @memberof Chartist.Core
     * @param length
     * @return {Array}
     */


    Chartist.times = function (length) {
      return Array.apply(null, new Array(length));
    };
    /**
     * Sum helper to be used in reduce functions
     *
     * @memberof Chartist.Core
     * @param previous
     * @param current
     * @return {*}
     */


    Chartist.sum = function (previous, current) {
      return previous + (current ? current : 0);
    };
    /**
     * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
     *
     * @memberof Chartist.Core
     * @param {Number} factor
     * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
     */


    Chartist.mapMultiply = function (factor) {
      return function (num) {
        return num * factor;
      };
    };
    /**
     * Add helper to be used in `Array.map` for adding a addend to each value of an array.
     *
     * @memberof Chartist.Core
     * @param {Number} addend
     * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
     */


    Chartist.mapAdd = function (addend) {
      return function (num) {
        return num + addend;
      };
    };
    /**
     * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
     *
     * @memberof Chartist.Core
     * @param arr
     * @param cb
     * @return {Array}
     */


    Chartist.serialMap = function (arr, cb) {
      var result = [],
          length = Math.max.apply(null, arr.map(function (e) {
        return e.length;
      }));
      Chartist.times(length).forEach(function (e, index) {
        var args = arr.map(function (e) {
          return e[index];
        });
        result[index] = cb.apply(null, args);
      });
      return result;
    };
    /**
     * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
     *
     * @memberof Chartist.Core
     * @param {Number} value The value that should be rounded with precision
     * @param {Number} [digits] The number of digits after decimal used to do the rounding
     * @returns {number} Rounded value
     */


    Chartist.roundWithPrecision = function (value, digits) {
      var precision = Math.pow(10, digits || Chartist.precision);
      return Math.round(value * precision) / precision;
    };
    /**
     * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
     *
     * @memberof Chartist.Core
     * @type {number}
     */


    Chartist.precision = 8;
    /**
     * A map with characters to escape for strings to be safely used as attribute values.
     *
     * @memberof Chartist.Core
     * @type {Object}
     */

    Chartist.escapingMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;'
    };
    /**
     * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
     * If called with null or undefined the function will return immediately with null or undefined.
     *
     * @memberof Chartist.Core
     * @param {Number|String|Object} data
     * @return {String}
     */

    Chartist.serialize = function (data) {
      if (data === null || data === undefined) {
        return data;
      } else if (typeof data === 'number') {
        data = '' + data;
      } else if (typeof data === 'object') {
        data = JSON.stringify({
          data: data
        });
      }

      return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
      }, data);
    };
    /**
     * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
     *
     * @memberof Chartist.Core
     * @param {String} data
     * @return {String|Number|Object}
     */


    Chartist.deserialize = function (data) {
      if (typeof data !== 'string') {
        return data;
      }

      data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
      }, data);

      try {
        data = JSON.parse(data);
        data = data.data !== undefined ? data.data : data;
      } catch (e) {}

      return data;
    };
    /**
     * Create or reinitialize the SVG element for the chart
     *
     * @memberof Chartist.Core
     * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
     * @param {String} width Set the width of the SVG element. Default is 100%
     * @param {String} height Set the height of the SVG element. Default is 100%
     * @param {String} className Specify a class to be added to the SVG element
     * @return {Object} The created/reinitialized SVG element
     */


    Chartist.createSvg = function (container, width, height, className) {
      var svg;
      width = width || '100%';
      height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
      // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

      Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
        return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
      }).forEach(function removePreviousElement(svg) {
        container.removeChild(svg);
      }); // Create svg object with width and height or use 100% as default

      svg = new Chartist.Svg('svg').attr({
        width: width,
        height: height
      }).addClass(className);
      svg._node.style.width = width;
      svg._node.style.height = height; // Add the DOM node to our container

      container.appendChild(svg._node);
      return svg;
    };
    /**
     * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
     *
     * @param  {Object} data The data object that is passed as second argument to the charts
     * @return {Object} The normalized data object
     */


    Chartist.normalizeData = function (data, reverse, multi) {
      var labelCount;
      var output = {
        raw: data,
        normalized: {}
      }; // Check if we should generate some labels based on existing series data

      output.normalized.series = Chartist.getDataArray({
        series: data.series || []
      }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
      // multi series data and we need to find the largest series if they are un-even

      if (output.normalized.series.every(function (value) {
        return value instanceof Array;
      })) {
        // Getting the series with the the most elements
        labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
          return series.length;
        }));
      } else {
        // We're dealing with Pie data so we just take the normalized array length
        labelCount = output.normalized.series.length;
      }

      output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

      Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
        return '';
      }));

      if (reverse) {
        Chartist.reverseData(output.normalized);
      }

      return output;
    };
    /**
     * This function safely checks if an objects has an owned property.
     *
     * @param {Object} object The object where to check for a property
     * @param {string} property The property name
     * @returns {boolean} Returns true if the object owns the specified property
     */


    Chartist.safeHasProperty = function (object, property) {
      return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
    };
    /**
     * Checks if a value is considered a hole in the data series.
     *
     * @param {*} value
     * @returns {boolean} True if the value is considered a data hole
     */


    Chartist.isDataHoleValue = function (value) {
      return value === null || value === undefined || typeof value === 'number' && isNaN(value);
    };
    /**
     * Reverses the series, labels and series data arrays.
     *
     * @memberof Chartist.Core
     * @param data
     */


    Chartist.reverseData = function (data) {
      data.labels.reverse();
      data.series.reverse();

      for (var i = 0; i < data.series.length; i++) {
        if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
          data.series[i].data.reverse();
        } else if (data.series[i] instanceof Array) {
          data.series[i].reverse();
        }
      }
    };
    /**
     * Convert data series into plain array
     *
     * @memberof Chartist.Core
     * @param {Object} data The series object that contains the data to be visualized in the chart
     * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
     * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
     * @return {Array} A plain array that contains the data to be visualized in the chart
     */


    Chartist.getDataArray = function (data, reverse, multi) {
      // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
      // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
      function recursiveConvert(value) {
        if (Chartist.safeHasProperty(value, 'value')) {
          // We are dealing with value object notation so we need to recurse on value property
          return recursiveConvert(value.value);
        } else if (Chartist.safeHasProperty(value, 'data')) {
          // We are dealing with series object notation so we need to recurse on data property
          return recursiveConvert(value.data);
        } else if (value instanceof Array) {
          // Data is of type array so we need to recurse on the series
          return value.map(recursiveConvert);
        } else if (Chartist.isDataHoleValue(value)) {
          // We're dealing with a hole in the data and therefore need to return undefined
          // We're also returning undefined for multi value output
          return undefined;
        } else {
          // We need to prepare multi value output (x and y data)
          if (multi) {
            var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
            // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
            // If multi is a string then it's assumed that it specified which dimension should be filled as default

            if (typeof multi === 'string') {
              multiValue[multi] = Chartist.getNumberOrUndefined(value);
            } else {
              multiValue.y = Chartist.getNumberOrUndefined(value);
            }

            multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
            multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
            return multiValue;
          } else {
            // We can return simple data
            return Chartist.getNumberOrUndefined(value);
          }
        }
      }

      return data.series.map(recursiveConvert);
    };
    /**
     * Converts a number into a padding object.
     *
     * @memberof Chartist.Core
     * @param {Object|Number} padding
     * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
     * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
     */


    Chartist.normalizePadding = function (padding, fallback) {
      fallback = fallback || 0;
      return typeof padding === 'number' ? {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      } : {
        top: typeof padding.top === 'number' ? padding.top : fallback,
        right: typeof padding.right === 'number' ? padding.right : fallback,
        bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
        left: typeof padding.left === 'number' ? padding.left : fallback
      };
    };

    Chartist.getMetaData = function (series, index) {
      var value = series.data ? series.data[index] : series[index];
      return value ? value.meta : undefined;
    };
    /**
     * Calculate the order of magnitude for the chart scale
     *
     * @memberof Chartist.Core
     * @param {Number} value The value Range of the chart
     * @return {Number} The order of magnitude
     */


    Chartist.orderOfMagnitude = function (value) {
      return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
    };
    /**
     * Project a data length into screen coordinates (pixels)
     *
     * @memberof Chartist.Core
     * @param {Object} axisLength The svg element for the chart
     * @param {Number} length Single data value from a series array
     * @param {Object} bounds All the values to set the bounds of the chart
     * @return {Number} The projected data length in pixels
     */


    Chartist.projectLength = function (axisLength, length, bounds) {
      return length / bounds.range * axisLength;
    };
    /**
     * Get the height of the area in the chart for the data series
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @return {Number} The height of the area in the chart for the data series
     */


    Chartist.getAvailableHeight = function (svg, options) {
      return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
    };
    /**
     * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
     *
     * @memberof Chartist.Core
     * @param {Array} data The array that contains the data to be visualized in the chart
     * @param {Object} options The Object that contains the chart options
     * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
     * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
     */


    Chartist.getHighLow = function (data, options, dimension) {
      // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
      options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
      var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
      var findHigh = options.high === undefined;
      var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

      function recursiveHighLow(data) {
        if (data === undefined) {
          return undefined;
        } else if (data instanceof Array) {
          for (var i = 0; i < data.length; i++) {
            recursiveHighLow(data[i]);
          }
        } else {
          var value = dimension ? +data[dimension] : +data;

          if (findHigh && value > highLow.high) {
            highLow.high = value;
          }

          if (findLow && value < highLow.low) {
            highLow.low = value;
          }
        }
      } // Start to find highest and lowest number recursively


      if (findHigh || findLow) {
        recursiveHighLow(data);
      } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
      // used to generate the chart. This is useful when the chart always needs to contain the position of the
      // invisible reference value in the view i.e. for bipolar scales.


      if (options.referenceValue || options.referenceValue === 0) {
        highLow.high = Math.max(options.referenceValue, highLow.high);
        highLow.low = Math.min(options.referenceValue, highLow.low);
      } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
      // to set the high or low to 0 depending on the polarity


      if (highLow.high <= highLow.low) {
        // If both values are 0 we set high to 1
        if (highLow.low === 0) {
          highLow.high = 1;
        } else if (highLow.low < 0) {
          // If we have the same negative value for the bounds we set bounds.high to 0
          highLow.high = 0;
        } else if (highLow.high > 0) {
          // If we have the same positive value for the bounds we set bounds.low to 0
          highLow.low = 0;
        } else {
          // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
          highLow.high = 1;
          highLow.low = 0;
        }
      }

      return highLow;
    };
    /**
     * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {Boolean}
     */


    Chartist.isNumeric = function (value) {
      return value === null ? false : isFinite(value);
    };
    /**
     * Returns true on all falsey values except the numeric value 0.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {boolean}
     */


    Chartist.isFalseyButZero = function (value) {
      return !value && value !== 0;
    };
    /**
     * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {*}
     */


    Chartist.getNumberOrUndefined = function (value) {
      return Chartist.isNumeric(value) ? +value : undefined;
    };
    /**
     * Checks if provided value object is multi value (contains x or y properties)
     *
     * @memberof Chartist.Core
     * @param value
     */


    Chartist.isMultiValue = function (value) {
      return typeof value === 'object' && ('x' in value || 'y' in value);
    };
    /**
     * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
     *
     * @memberof Chartist.Core
     * @param value
     * @param dimension
     * @param defaultValue
     * @returns {*}
     */


    Chartist.getMultiValue = function (value, dimension) {
      if (Chartist.isMultiValue(value)) {
        return Chartist.getNumberOrUndefined(value[dimension || 'y']);
      } else {
        return Chartist.getNumberOrUndefined(value);
      }
    };
    /**
     * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
     *
     * @memberof Chartist.Core
     * @param {Number} num An integer number where the smallest factor should be searched for
     * @returns {Number} The smallest integer factor of the parameter num.
     */


    Chartist.rho = function (num) {
      if (num === 1) {
        return num;
      }

      function gcd(p, q) {
        if (p % q === 0) {
          return q;
        } else {
          return gcd(q, p % q);
        }
      }

      function f(x) {
        return x * x + 1;
      }

      var x1 = 2,
          x2 = 2,
          divisor;

      if (num % 2 === 0) {
        return 2;
      }

      do {
        x1 = f(x1) % num;
        x2 = f(f(x2)) % num;
        divisor = gcd(Math.abs(x1 - x2), num);
      } while (divisor === 1);

      return divisor;
    };
    /**
     * Calculate and retrieve all the bounds for the chart and return them in one array
     *
     * @memberof Chartist.Core
     * @param {Number} axisLength The length of the Axis used for
     * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
     * @param {Number} scaleMinSpace The minimum projected length a step should result in
     * @param {Boolean} onlyInteger
     * @return {Object} All the values to set the bounds of the chart
     */


    Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
      var i,
          optimizationCounter = 0,
          newMin,
          newMax,
          bounds = {
        high: highLow.high,
        low: highLow.low
      };
      bounds.valueRange = bounds.high - bounds.low;
      bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
      bounds.step = Math.pow(10, bounds.oom);
      bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
      bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
      bounds.range = bounds.max - bounds.min;
      bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
      // If we are already below the scaleMinSpace value we will scale up

      var length = Chartist.projectLength(axisLength, bounds.step, bounds);
      var scaleUp = length < scaleMinSpace;
      var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

      if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
        bounds.step = 1;
      } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
        // If step 1 was too small, we can try the smallest factor of range
        // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
        // is larger than the scaleMinSpace we should go for it.
        bounds.step = smallestFactor;
      } else {
        // Trying to divide or multiply by 2 and find the best step value
        while (true) {
          if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
            bounds.step *= 2;
          } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
            bounds.step /= 2;

            if (onlyInteger && bounds.step % 1 !== 0) {
              bounds.step *= 2;
              break;
            }
          } else {
            break;
          }

          if (optimizationCounter++ > 1000) {
            throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
          }
        }
      }

      var EPSILON = 2.221E-16;
      bounds.step = Math.max(bounds.step, EPSILON);

      function safeIncrement(value, increment) {
        // If increment is too small use *= (1+EPSILON) as a simple nextafter
        if (value === (value += increment)) {
          value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
        }

        return value;
      } // Narrow min and max based on new step


      newMin = bounds.min;
      newMax = bounds.max;

      while (newMin + bounds.step <= bounds.low) {
        newMin = safeIncrement(newMin, bounds.step);
      }

      while (newMax - bounds.step >= bounds.high) {
        newMax = safeIncrement(newMax, -bounds.step);
      }

      bounds.min = newMin;
      bounds.max = newMax;
      bounds.range = bounds.max - bounds.min;
      var values = [];

      for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
        var value = Chartist.roundWithPrecision(i);

        if (value !== values[values.length - 1]) {
          values.push(value);
        }
      }

      bounds.values = values;
      return bounds;
    };
    /**
     * Calculate cartesian coordinates of polar coordinates
     *
     * @memberof Chartist.Core
     * @param {Number} centerX X-axis coordinates of center point of circle segment
     * @param {Number} centerY X-axis coordinates of center point of circle segment
     * @param {Number} radius Radius of circle segment
     * @param {Number} angleInDegrees Angle of circle segment in degrees
     * @return {{x:Number, y:Number}} Coordinates of point on circumference
     */


    Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    };
    /**
     * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
     * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
     */


    Chartist.createChartRect = function (svg, options, fallbackPadding) {
      var hasAxis = !!(options.axisX || options.axisY);
      var yAxisOffset = hasAxis ? options.axisY.offset : 0;
      var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

      var width = svg.width() || Chartist.quantity(options.width).value || 0;
      var height = svg.height() || Chartist.quantity(options.height).value || 0;
      var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

      width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
      height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
      var chartRect = {
        padding: normalizedPadding,
        width: function width() {
          return this.x2 - this.x1;
        },
        height: function height() {
          return this.y1 - this.y2;
        }
      };

      if (hasAxis) {
        if (options.axisX.position === 'start') {
          chartRect.y2 = normalizedPadding.top + xAxisOffset;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        } else {
          chartRect.y2 = normalizedPadding.top;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
        }

        if (options.axisY.position === 'start') {
          chartRect.x1 = normalizedPadding.left + yAxisOffset;
          chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        } else {
          chartRect.x1 = normalizedPadding.left;
          chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
        }
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      }

      return chartRect;
    };
    /**
     * Creates a grid line based on a projected value.
     *
     * @memberof Chartist.Core
     * @param position
     * @param index
     * @param axis
     * @param offset
     * @param length
     * @param group
     * @param classes
     * @param eventEmitter
     */


    Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
      var positionalData = {};
      positionalData[axis.units.pos + '1'] = position;
      positionalData[axis.units.pos + '2'] = position;
      positionalData[axis.counterUnits.pos + '1'] = offset;
      positionalData[axis.counterUnits.pos + '2'] = offset + length;
      var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

      eventEmitter.emit('draw', Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData));
    };
    /**
     * Creates a grid background rect and emits the draw event.
     *
     * @memberof Chartist.Core
     * @param gridGroup
     * @param chartRect
     * @param className
     * @param eventEmitter
     */


    Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
      var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height()
      }, className, true); // Event for grid background draw

      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
    };
    /**
     * Creates a label based on a projected value and an axis.
     *
     * @memberof Chartist.Core
     * @param position
     * @param length
     * @param index
     * @param labels
     * @param axis
     * @param axisOffset
     * @param labelOffset
     * @param group
     * @param classes
     * @param useForeignObject
     * @param eventEmitter
     */


    Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
      var labelElement;
      var positionalData = {};
      positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
      positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
      positionalData[axis.units.len] = length;
      positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

      if (useForeignObject) {
        // We need to set width and height explicitly to px as span will not expand with width and height being
        // 100% in all browsers
        var content = document.createElement('span');
        content.className = classes.join(' ');
        content.setAttribute('xmlns', Chartist.namespaces.xhtml);
        content.innerText = labels[index];
        content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
        content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
        labelElement = group.foreignObject(content, Chartist.extend({
          style: 'overflow: visible;'
        }, positionalData));
      } else {
        labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
      }

      eventEmitter.emit('draw', Chartist.extend({
        type: 'label',
        axis: axis,
        index: index,
        group: group,
        element: labelElement,
        text: labels[index]
      }, positionalData));
    };
    /**
     * Helper to read series specific options from options object. It automatically falls back to the global option if
     * there is no option in the series options.
     *
     * @param {Object} series Series object
     * @param {Object} options Chartist options object
     * @param {string} key The options key that should be used to obtain the options
     * @returns {*}
     */


    Chartist.getSeriesOption = function (series, options, key) {
      if (series.name && options.series && options.series[series.name]) {
        var seriesOptions = options.series[series.name];
        return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
      } else {
        return options[key];
      }
    };
    /**
     * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
     *
     * @memberof Chartist.Core
     * @param {Object} options Options set by user
     * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
     * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
     * @return {Object} The consolidated options object from the defaults, base and matching responsive options
     */


    Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
      var baseOptions = Chartist.extend({}, options),
          currentOptions,
          mediaQueryListeners = [],
          i;

      function updateCurrentOptions(mediaEvent) {
        var previousOptions = currentOptions;
        currentOptions = Chartist.extend({}, baseOptions);

        if (responsiveOptions) {
          for (i = 0; i < responsiveOptions.length; i++) {
            var mql = window.matchMedia(responsiveOptions[i][0]);

            if (mql.matches) {
              currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
            }
          }
        }

        if (eventEmitter && mediaEvent) {
          eventEmitter.emit('optionsChanged', {
            previousOptions: previousOptions,
            currentOptions: currentOptions
          });
        }
      }

      function removeMediaQueryListeners() {
        mediaQueryListeners.forEach(function (mql) {
          mql.removeListener(updateCurrentOptions);
        });
      }

      if (!window.matchMedia) {
        throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
      } else if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          mql.addListener(updateCurrentOptions);
          mediaQueryListeners.push(mql);
        }
      } // Execute initially without an event argument so we get the correct options


      updateCurrentOptions();
      return {
        removeMediaQueryListeners: removeMediaQueryListeners,
        getCurrentOptions: function getCurrentOptions() {
          return Chartist.extend({}, currentOptions);
        }
      };
    };
    /**
     * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
     * valueData property describing the segment.
     *
     * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
     * points with undefined values are discarded.
     *
     * **Options**
     * The following options are used to determine how segments are formed
     * ```javascript
     * var options = {
     *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
     *   fillHoles: false,
     *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
     *   increasingX: false
     * };
     * ```
     *
     * @memberof Chartist.Core
     * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
     * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
     * @param {Object} options Options set by user
     * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
     */


    Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
      var defaultOptions = {
        increasingX: false,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var segments = [];
      var hole = true;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        // If this value is a "hole" we set the hole flag
        if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
          // if(valueData[i / 2].value === undefined) {
          if (!options.fillHoles) {
            hole = true;
          }
        } else {
          if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
            // X is not increasing, so we need to make sure we start a new segment
            hole = true;
          } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


          if (hole) {
            segments.push({
              pathCoordinates: [],
              valueData: []
            }); // As we have a valid value now, we are not in a "hole" anymore

            hole = false;
          } // Add to the segment pathCoordinates and valueData


          segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
          segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
      }

      return segments;
    };
  })(this || global, Chartist);

  ;
  /**
  * Chartist path interpolation functions.
  *
  * @module Chartist.Interpolation
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.Interpolation = {};
    /**
     * This interpolation function does not smooth the path and the result is only containing lines and no curves.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.none({
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @return {Function}
     */

    Chartist.Interpolation.none = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function none(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var hole = true;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2];

          if (Chartist.getMultiValue(currData.value) !== undefined) {
            if (hole) {
              path.move(currX, currY, false, currData);
            } else {
              path.line(currX, currY, false, currData);
            }

            hole = false;
          } else if (!options.fillHoles) {
            hole = true;
          }
        }

        return path;
      };
    };
    /**
     * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
     *
     * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.simple({
     *     divisor: 2,
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the simple interpolation factory function.
     * @return {Function}
     */


    Chartist.Interpolation.simple = function (options) {
      var defaultOptions = {
        divisor: 2,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var d = 1 / Math.max(1, options.divisor);
      return function simple(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var length = (currX - prevX) * d;
          var currData = valueData[i / 2];

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = currX = prevData = undefined;
          }
        }

        return path;
      };
    };
    /**
     * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
     *
     * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 1,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the cardinal factory function.
     * @return {Function}
     */


    Chartist.Interpolation.cardinal = function (options) {
      var defaultOptions = {
        tension: 1,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var t = Math.min(1, Math.max(0, options.tension)),
          c = 1 - t;
      return function cardinal(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the cardinal function

          segments.forEach(function (segment) {
            paths.push(cardinal(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
              z;

          for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +pathCoordinates[i - 2],
              y: +pathCoordinates[i - 1]
            }, {
              x: +pathCoordinates[i],
              y: +pathCoordinates[i + 1]
            }, {
              x: +pathCoordinates[i + 2],
              y: +pathCoordinates[i + 3]
            }, {
              x: +pathCoordinates[i + 4],
              y: +pathCoordinates[i + 5]
            }];

            if (z) {
              if (!i) {
                p[0] = {
                  x: +pathCoordinates[iLen - 2],
                  y: +pathCoordinates[iLen - 1]
                };
              } else if (iLen - 4 === i) {
                p[3] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
              } else if (iLen - 2 === i) {
                p[2] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
                p[3] = {
                  x: +pathCoordinates[2],
                  y: +pathCoordinates[3]
                };
              }
            } else {
              if (iLen - 4 === i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                };
              }
            }

            path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
          }

          return path;
        }
      };
    };
    /**
     * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
     *
     * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.monotoneCubic({
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the monotoneCubic factory function.
     * @return {Function}
     */


    Chartist.Interpolation.monotoneCubic = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function monotoneCubic(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles,
          increasingX: true
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the monotoneCubic fn function

          segments.forEach(function (segment) {
            paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var xs = [],
              ys = [],
              i,
              n = pathCoordinates.length / 2,
              ms = [],
              ds = [],
              dys = [],
              dxs = [],
              path; // Populate x and y coordinates into separate arrays, for readability

          for (i = 0; i < n; i++) {
            xs[i] = pathCoordinates[i * 2];
            ys[i] = pathCoordinates[i * 2 + 1];
          } // Calculate deltas and derivative


          for (i = 0; i < n - 1; i++) {
            dys[i] = ys[i + 1] - ys[i];
            dxs[i] = xs[i + 1] - xs[i];
            ds[i] = dys[i] / dxs[i];
          } // Determine desired slope (m) at each point using Fritsch-Carlson method
          // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


          ms[0] = ds[0];
          ms[n - 1] = ds[n - 2];

          for (i = 1; i < n - 1; i++) {
            if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
              ms[i] = 0;
            } else {
              ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

              if (!isFinite(ms[i])) {
                ms[i] = 0;
              }
            }
          } // Now build a path from the slopes


          path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

          for (i = 0; i < n - 1; i++) {
            path.curve( // First control point
            xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
            xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
            xs[i + 1], ys[i + 1], false, valueData[i + 1]);
          }

          return path;
        }
      };
    };
    /**
     * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.step({
     *     postpone: true,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param options
     * @returns {Function}
     */


    Chartist.Interpolation.step = function (options) {
      var defaultOptions = {
        postpone: true,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function step(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              if (options.postpone) {
                // If postponed we should draw the step line with the value of the previous value
                path.line(currX, prevY, false, prevData);
              } else {
                // If not postponed we should draw the step line with the value of the current value
                path.line(prevX, currY, false, currData);
              } // Line to the actual point (this should only be a Y-Axis movement


              path.line(currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = prevY = prevData = undefined;
          }
        }

        return path;
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * A very basic event module that helps to generate and catch events.
  *
  * @module Chartist.Event
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.EventEmitter = function () {
      var handlers = [];
      /**
       * Add an event handler for a specific event
       *
       * @memberof Chartist.Event
       * @param {String} event The event name
       * @param {Function} handler A event handler function
       */

      function addEventHandler(event, handler) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      }
      /**
       * Remove an event handler of a specific event name or remove all event handlers for a specific event.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name where a specific or all handlers should be removed
       * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
       */


      function removeEventHandler(event, handler) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          // If handler is set we will look for a specific handler and only remove this
          if (handler) {
            handlers[event].splice(handlers[event].indexOf(handler), 1);

            if (handlers[event].length === 0) {
              delete handlers[event];
            }
          } else {
            // If no handler is specified we remove all handlers for this event
            delete handlers[event];
          }
        }
      }
      /**
       * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name that should be triggered
       * @param {*} data Arbitrary data that will be passed to the event handler callback functions
       */


      function emit(event, data) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          handlers[event].forEach(function (handler) {
            handler(data);
          });
        } // Emit event to star event handlers


        if (handlers['*']) {
          handlers['*'].forEach(function (starHandler) {
            starHandler(event, data);
          });
        }
      }

      return {
        addEventHandler: addEventHandler,
        removeEventHandler: removeEventHandler,
        emit: emit
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * This module provides some basic prototype inheritance utilities.
  *
  * @module Chartist.Class
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    function listToArray(list) {
      var arr = [];

      if (list.length) {
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i]);
        }
      }

      return arr;
    }
    /**
     * Method to extend from current prototype.
     *
     * @memberof Chartist.Class
     * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
     * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
     * @return {Function} Constructor function of the new class
     *
     * @example
     * var Fruit = Class.extend({
       * color: undefined,
       *   sugar: undefined,
       *
       *   constructor: function(color, sugar) {
       *     this.color = color;
       *     this.sugar = sugar;
       *   },
       *
       *   eat: function() {
       *     this.sugar = 0;
       *     return this;
       *   }
       * });
     *
     * var Banana = Fruit.extend({
       *   length: undefined,
       *
       *   constructor: function(length, sugar) {
       *     Banana.super.constructor.call(this, 'Yellow', sugar);
       *     this.length = length;
       *   }
       * });
     *
     * var banana = new Banana(20, 40);
     * console.log('banana instanceof Fruit', banana instanceof Fruit);
     * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
     * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
     * console.log(banana.sugar);
     * console.log(banana.eat().sugar);
     * console.log(banana.color);
     */


    function extend(properties, superProtoOverride) {
      var superProto = superProtoOverride || this.prototype || Chartist.Class;
      var proto = Object.create(superProto);
      Chartist.Class.cloneDefinitions(proto, properties);

      var constr = function constr() {
        var fn = proto.constructor || function () {},
            instance; // If this is linked to the Chartist namespace the constructor was not called with new
        // To provide a fallback we will instantiate here and return the instance


        instance = this === Chartist ? Object.create(proto) : this;
        fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
        // This will not harm when the constructor has been called with new as the returned value is ignored

        return instance;
      };

      constr.prototype = proto;
      constr.super = superProto;
      constr.extend = this.extend;
      return constr;
    } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


    function cloneDefinitions() {
      var args = listToArray(arguments);
      var target = args[0];
      args.splice(1, args.length - 1).forEach(function (source) {
        Object.getOwnPropertyNames(source).forEach(function (propName) {
          // If this property already exist in target we delete it first
          delete target[propName]; // Define the property with the descriptor from source

          Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
        });
      });
      return target;
    }

    Chartist.Class = {
      extend: extend,
      cloneDefinitions: cloneDefinitions
    };
  })(this || global, Chartist);

  ;
  /**
  * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
  *
  * @module Chartist.Base
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
    // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
    // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
    // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
    // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
    // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

    /**
     * Updates the chart which currently does a full reconstruction of the SVG DOM
     *
     * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
     * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
     * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
     * @memberof Chartist.Base
     */

    function update(data, options, override) {
      if (data) {
        this.data = data || {};
        this.data.labels = this.data.labels || [];
        this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

        this.eventEmitter.emit('data', {
          type: 'update',
          data: this.data
        });
      }

      if (options) {
        this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
        // Otherwise we re-create the optionsProvider at this point

        if (!this.initializeTimeoutId) {
          this.optionsProvider.removeMediaQueryListeners();
          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        }
      } // Only re-created the chart if it has been initialized yet


      if (!this.initializeTimeoutId) {
        this.createChart(this.optionsProvider.getCurrentOptions());
      } // Return a reference to the chart object to chain up calls


      return this;
    }
    /**
     * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
     *
     * @memberof Chartist.Base
     */


    function detach() {
      // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
      // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
      if (!this.initializeTimeoutId) {
        window.removeEventListener('resize', this.resizeListener);
        this.optionsProvider.removeMediaQueryListeners();
      } else {
        window.clearTimeout(this.initializeTimeoutId);
      }

      return this;
    }
    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event. Check the examples for supported events.
     * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */


    function on(event, handler) {
      this.eventEmitter.addEventHandler(event, handler);
      return this;
    }
    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event for which a handler should be removed
     * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */


    function off(event, handler) {
      this.eventEmitter.removeEventHandler(event, handler);
      return this;
    }

    function initialize() {
      // Add window resize listener that re-creates the chart
      window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
      // This will also register a listener that is re-creating the chart based on media changes

      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

      this.eventEmitter.addEventHandler('optionsChanged', function () {
        this.update();
      }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
      // Initialize all relevant plugins with our chart object and the plugin options specified in the config

      if (this.options.plugins) {
        this.options.plugins.forEach(function (plugin) {
          if (plugin instanceof Array) {
            plugin[0](this, plugin[1]);
          } else {
            plugin(this);
          }
        }.bind(this));
      } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


      this.eventEmitter.emit('data', {
        type: 'initial',
        data: this.data
      }); // Create the first chart

      this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
      // This is important if the chart gets initialized on the same element twice

      this.initializeTimeoutId = undefined;
    }
    /**
     * Constructor of chart base class.
     *
     * @param query
     * @param data
     * @param defaultOptions
     * @param options
     * @param responsiveOptions
     * @constructor
     */


    function Base(query, data, defaultOptions, options, responsiveOptions) {
      this.container = Chartist.querySelector(query);
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.defaultOptions = defaultOptions;
      this.options = options;
      this.responsiveOptions = responsiveOptions;
      this.eventEmitter = Chartist.EventEmitter();
      this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
      this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

      this.resizeListener = function resizeListener() {
        this.update();
      }.bind(this);

      if (this.container) {
        // If chartist was already initialized in this container we are detaching all event listeners first
        if (this.container.__chartist__) {
          this.container.__chartist__.detach();
        }

        this.container.__chartist__ = this;
      } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
      // the chart was created.


      this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
    } // Creating the chart base class


    Chartist.Base = Chartist.Class.extend({
      constructor: Base,
      optionsProvider: undefined,
      container: undefined,
      svg: undefined,
      eventEmitter: undefined,
      createChart: function createChart() {
        throw new Error('Base chart type can\'t be instantiated!');
      },
      update: update,
      detach: detach,
      on: on,
      off: off,
      version: Chartist.version,
      supportsForeignObject: false
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG module for simple SVG DOM abstraction
  *
  * @module Chartist.Svg
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var document = globalRoot.document;
    /**
     * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
     *
     * @memberof Chartist.Svg
     * @constructor
     * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
     * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} className This class or class list will be added to the SVG element
     * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
     * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     */

    function Svg(name, attributes, className, parent, insertFirst) {
      // If Svg is getting called with an SVG element we just return the wrapper
      if (name instanceof Element) {
        this._node = name;
      } else {
        this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

        if (name === 'svg') {
          this.attr({
            'xmlns:ct': Chartist.namespaces.ct
          });
        }
      }

      if (attributes) {
        this.attr(attributes);
      }

      if (className) {
        this.addClass(className);
      }

      if (parent) {
        if (insertFirst && parent._node.firstChild) {
          parent._node.insertBefore(this._node, parent._node.firstChild);
        } else {
          parent._node.appendChild(this._node);
        }
      }
    }
    /**
     * Set attributes on the current SVG element of the wrapper you're currently working on.
     *
     * @memberof Chartist.Svg
     * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
     * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
     * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
     */


    function attr(attributes, ns) {
      if (typeof attributes === 'string') {
        if (ns) {
          return this._node.getAttributeNS(ns, attributes);
        } else {
          return this._node.getAttribute(attributes);
        }
      }

      Object.keys(attributes).forEach(function (key) {
        // If the attribute value is undefined we can skip this one
        if (attributes[key] === undefined) {
          return;
        }

        if (key.indexOf(':') !== -1) {
          var namespacedAttribute = key.split(':');

          this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
        } else {
          this._node.setAttribute(key, attributes[key]);
        }
      }.bind(this));
      return this;
    }
    /**
     * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
     *
     * @memberof Chartist.Svg
     * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
     * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
     */


    function elem(name, attributes, className, insertFirst) {
      return new Chartist.Svg(name, attributes, className, this, insertFirst);
    }
    /**
     * Returns the parent Chartist.SVG wrapper object
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
     */


    function parent() {
      return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
    }
    /**
     * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
     */


    function root() {
      var node = this._node;

      while (node.nodeName !== 'svg') {
        node = node.parentNode;
      }

      return new Chartist.Svg(node);
    }
    /**
     * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
     */


    function querySelector(selector) {
      var foundNode = this._node.querySelector(selector);

      return foundNode ? new Chartist.Svg(foundNode) : null;
    }
    /**
     * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
     */


    function querySelectorAll(selector) {
      var foundNodes = this._node.querySelectorAll(selector);

      return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
    }
    /**
     * Returns the underlying SVG node for the current element.
     *
     * @memberof Chartist.Svg
     * @returns {Node}
     */


    function getNode() {
      return this._node;
    }
    /**
     * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
     *
     * @memberof Chartist.Svg
     * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
     * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
     * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
     */


    function foreignObject(content, attributes, className, insertFirst) {
      // If content is string then we convert it to DOM
      // TODO: Handle case where content is not a string nor a DOM Node
      if (typeof content === 'string') {
        var container = document.createElement('div');
        container.innerHTML = content;
        content = container.firstChild;
      } // Adding namespace to content element


      content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
      // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

      var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

      fnObj._node.appendChild(content);

      return fnObj;
    }
    /**
     * This method adds a new text element to the current Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} t The text that should be added to the text element that is created
     * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
     */


    function text(t) {
      this._node.appendChild(document.createTextNode(t));

      return this;
    }
    /**
     * This method will clear all child nodes of the current wrapper object.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The same wrapper object that got emptied
     */


    function empty() {
      while (this._node.firstChild) {
        this._node.removeChild(this._node.firstChild);
      }

      return this;
    }
    /**
     * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The parent wrapper object of the element that got removed
     */


    function remove() {
      this._node.parentNode.removeChild(this._node);

      return this.parent();
    }
    /**
     * This method will replace the element with a new element that can be created outside of the current DOM.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
     * @return {Chartist.Svg} The wrapper of the new element
     */


    function replace(newElement) {
      this._node.parentNode.replaceChild(newElement._node, this._node);

      return newElement;
    }
    /**
     * This method will append an element to the current element as a child.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
     * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
     * @return {Chartist.Svg} The wrapper of the appended object
     */


    function append(element, insertFirst) {
      if (insertFirst && this._node.firstChild) {
        this._node.insertBefore(element._node, this._node.firstChild);
      } else {
        this._node.appendChild(element._node);
      }

      return this;
    }
    /**
     * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
     *
     * @memberof Chartist.Svg
     * @return {Array} A list of classes or an empty array if there are no classes on the current element
     */


    function classes() {
      return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
    }
    /**
     * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function addClass(names) {
      this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
      }).join(' '));

      return this;
    }
    /**
     * Removes one or a space separated list of classes from the current element.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeClass(names) {
      var removedClasses = names.trim().split(/\s+/);

      this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
        return removedClasses.indexOf(name) === -1;
      }).join(' '));

      return this;
    }
    /**
     * Removes all classes from the current element.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeAllClasses() {
      this._node.setAttribute('class', '');

      return this;
    }
    /**
     * Get element height using `getBoundingClientRect`
     *
     * @memberof Chartist.Svg
     * @return {Number} The elements height in pixels
     */


    function height() {
      return this._node.getBoundingClientRect().height;
    }
    /**
     * Get element width using `getBoundingClientRect`
     *
     * @memberof Chartist.Core
     * @return {Number} The elements width in pixels
     */


    function width() {
      return this._node.getBoundingClientRect().width;
    }
    /**
     * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
     * **An animations object could look like this:**
     * ```javascript
     * element.animate({
     *   opacity: {
     *     dur: 1000,
     *     from: 0,
     *     to: 1
     *   },
     *   x1: {
     *     dur: '1000ms',
     *     from: 100,
     *     to: 200,
     *     easing: 'easeOutQuart'
     *   },
     *   y1: {
     *     dur: '2s',
     *     from: 0,
     *     to: 100
     *   }
     * });
     * ```
     * **Automatic unit conversion**
     * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
     * **Guided mode**
     * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
     * If guided mode is enabled the following behavior is added:
     * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
     * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
     * - The animate element will be forced to use `fill="freeze"`
     * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
     * - After the animation the element attribute value will be set to the `to` value of the animation
     * - The animate element is deleted from the DOM
     *
     * @memberof Chartist.Svg
     * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
     * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
     * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
     * @return {Chartist.Svg} The current element where the animation was added
     */


    function animate(animations, guided, eventEmitter) {
      if (guided === undefined) {
        guided = true;
      }

      Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
        function createAnimate(animationDefinition, guided) {
          var attributeProperties = {},
              animate,
              timeout,
              easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
          // be part of the animate element attributes.

          if (animationDefinition.easing) {
            // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
            easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
            delete animationDefinition.easing;
          } // If numeric dur or begin was provided we assume milli seconds


          animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
          animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

          if (easing) {
            animationDefinition.calcMode = 'spline';
            animationDefinition.keySplines = easing.join(' ');
            animationDefinition.keyTimes = '0;1';
          } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


          if (guided) {
            animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

            attributeProperties[attribute] = animationDefinition.from;
            this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
            // which needs to be in ms aside

            timeout = Chartist.quantity(animationDefinition.begin || 0).value;
            animationDefinition.begin = 'indefinite';
          }

          animate = this.elem('animate', Chartist.extend({
            attributeName: attribute
          }, animationDefinition));

          if (guided) {
            // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
            setTimeout(function () {
              // If beginElement fails we set the animated attribute to the end position and remove the animate element
              // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
              // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
              try {
                animate._node.beginElement();
              } catch (err) {
                // Set animated attribute to current animated value
                attributeProperties[attribute] = animationDefinition.to;
                this.attr(attributeProperties); // Remove the animate element as it's no longer required

                animate.remove();
              }
            }.bind(this), timeout);
          }

          if (eventEmitter) {
            animate._node.addEventListener('beginEvent', function handleBeginEvent() {
              eventEmitter.emit('animationBegin', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }.bind(this));
          }

          animate._node.addEventListener('endEvent', function handleEndEvent() {
            if (eventEmitter) {
              eventEmitter.emit('animationEnd', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }

            if (guided) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties); // Remove the animate element as it's no longer required

              animate.remove();
            }
          }.bind(this));
        } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


        if (animations[attribute] instanceof Array) {
          animations[attribute].forEach(function (animationDefinition) {
            createAnimate.bind(this)(animationDefinition, false);
          }.bind(this));
        } else {
          createAnimate.bind(this)(animations[attribute], guided);
        }
      }.bind(this));
      return this;
    }

    Chartist.Svg = Chartist.Class.extend({
      constructor: Svg,
      attr: attr,
      elem: elem,
      parent: parent,
      root: root,
      querySelector: querySelector,
      querySelectorAll: querySelectorAll,
      getNode: getNode,
      foreignObject: foreignObject,
      text: text,
      empty: empty,
      remove: remove,
      replace: replace,
      append: append,
      classes: classes,
      addClass: addClass,
      removeClass: removeClass,
      removeAllClasses: removeAllClasses,
      height: height,
      width: width,
      animate: animate
    });
    /**
     * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
     *
     * @memberof Chartist.Svg
     * @param {String} feature The SVG 1.1 feature that should be checked for support.
     * @return {Boolean} True of false if the feature is supported or not
     */

    Chartist.Svg.isSupported = function (feature) {
      return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
    };
    /**
     * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
     *
     * @memberof Chartist.Svg
     */


    var easingCubicBeziers = {
      easeInSine: [0.47, 0, 0.745, 0.715],
      easeOutSine: [0.39, 0.575, 0.565, 1],
      easeInOutSine: [0.445, 0.05, 0.55, 0.95],
      easeInQuad: [0.55, 0.085, 0.68, 0.53],
      easeOutQuad: [0.25, 0.46, 0.45, 0.94],
      easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
      easeInCubic: [0.55, 0.055, 0.675, 0.19],
      easeOutCubic: [0.215, 0.61, 0.355, 1],
      easeInOutCubic: [0.645, 0.045, 0.355, 1],
      easeInQuart: [0.895, 0.03, 0.685, 0.22],
      easeOutQuart: [0.165, 0.84, 0.44, 1],
      easeInOutQuart: [0.77, 0, 0.175, 1],
      easeInQuint: [0.755, 0.05, 0.855, 0.06],
      easeOutQuint: [0.23, 1, 0.32, 1],
      easeInOutQuint: [0.86, 0, 0.07, 1],
      easeInExpo: [0.95, 0.05, 0.795, 0.035],
      easeOutExpo: [0.19, 1, 0.22, 1],
      easeInOutExpo: [1, 0, 0, 1],
      easeInCirc: [0.6, 0.04, 0.98, 0.335],
      easeOutCirc: [0.075, 0.82, 0.165, 1],
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
      easeInBack: [0.6, -0.28, 0.735, 0.045],
      easeOutBack: [0.175, 0.885, 0.32, 1.275],
      easeInOutBack: [0.68, -0.55, 0.265, 1.55]
    };
    Chartist.Svg.Easing = easingCubicBeziers;
    /**
     * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
     * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
     *
     * @memberof Chartist.Svg
     * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
     * @constructor
     */

    function SvgList(nodeList) {
      var list = this;
      this.svgElements = [];

      for (var i = 0; i < nodeList.length; i++) {
        this.svgElements.push(new Chartist.Svg(nodeList[i]));
      } // Add delegation methods for Chartist.Svg


      Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
        return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
      }).forEach(function (prototypeProperty) {
        list[prototypeProperty] = function () {
          var args = Array.prototype.slice.call(arguments, 0);
          list.svgElements.forEach(function (element) {
            Chartist.Svg.prototype[prototypeProperty].apply(element, args);
          });
          return list;
        };
      });
    }

    Chartist.Svg.List = Chartist.Class.extend({
      constructor: SvgList
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG path module for SVG path description creation and modification.
  *
  * @module Chartist.Svg.Path
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';
    /**
     * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var elementDescriptions = {
      m: ['x', 'y'],
      l: ['x', 'y'],
      c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
      a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
    };
    /**
     * Default options for newly created SVG path objects.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var defaultOptions = {
      // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
      accuracy: 3
    };

    function element(command, params, pathElements, pos, relative, data) {
      var pathElement = Chartist.extend({
        command: relative ? command.toLowerCase() : command.toUpperCase()
      }, params, data ? {
        data: data
      } : {});
      pathElements.splice(pos, 0, pathElement);
    }

    function forEachParam(pathElements, cb) {
      pathElements.forEach(function (pathElement, pathElementIndex) {
        elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
          cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
        });
      });
    }
    /**
     * Used to construct a new path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
     * @param {Object} options Options object that overrides the default objects. See default options for more details.
     * @constructor
     */


    function SvgPath(close, options) {
      this.pathElements = [];
      this.pos = 0;
      this.close = close;
      this.options = Chartist.extend({}, defaultOptions, options);
    }
    /**
     * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
     * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
     */


    function position(pos) {
      if (pos !== undefined) {
        this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
        return this;
      } else {
        return this.pos;
      }
    }
    /**
     * Removes elements from the path starting at the current position.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} count Number of path elements that should be removed from the current position.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function remove(count) {
      this.pathElements.splice(this.pos, count);
      return this;
    }
    /**
     * Use this function to add a new move SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the move element.
     * @param {Number} y The y coordinate for the move element.
     * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function move(x, y, relative, data) {
      element('M', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new line SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the line element.
     * @param {Number} y The y coordinate for the line element.
     * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function line(x, y, relative, data) {
      element('L', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
     * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
     * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
     * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function curve(x1, y1, x2, y2, x, y, relative, data) {
      element('C', {
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new non-bezier curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} rx The radius to be used for the x-axis of the arc.
     * @param {Number} ry The radius to be used for the y-axis of the arc.
     * @param {Number} xAr Defines the orientation of the arc
     * @param {Number} lAf Large arc flag
     * @param {Number} sf Sweep flag
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
      element('A', {
        rx: +rx,
        ry: +ry,
        xAr: +xAr,
        lAf: +lAf,
        sf: +sf,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function parse(path) {
      // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
      var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
        if (element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

      if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
        chunks.pop();
      } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
      // For example {command: 'M', x: '10', y: '10'}


      var elements = chunks.map(function (chunk) {
        var command = chunk.shift(),
            description = elementDescriptions[command.toLowerCase()];
        return Chartist.extend({
          command: command
        }, description.reduce(function (result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

      var spliceArgs = [this.pos, 0];
      Array.prototype.push.apply(spliceArgs, elements);
      Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

      this.pos += elements.length;
      return this;
    }
    /**
     * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
     *
     * @memberof Chartist.Svg.Path
     * @return {String}
     */


    function stringify() {
      var accuracyMultiplier = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function (path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
          return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
        }.bind(this));
        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
    }
    /**
     * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function scale(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] *= paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function translate(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] += paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
     * The method signature of the callback function looks like this:
     * ```javascript
     * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
     * ```
     * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function transform(transformFnc) {
      forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
        var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

        if (transformed || transformed === 0) {
          pathElement[paramName] = transformed;
        }
      });
      return this;
    }
    /**
     * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
     * @return {Chartist.Svg.Path}
     */


    function clone(close) {
      var c = new Chartist.Svg.Path(close || this.close);
      c.pos = this.pos;
      c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
        return Chartist.extend({}, pathElement);
      });
      c.options = Chartist.extend({}, this.options);
      return c;
    }
    /**
     * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} command The command you'd like to use to split the path
     * @return {Array<Chartist.Svg.Path>}
     */


    function splitByCommand(command) {
      var split = [new Chartist.Svg.Path()];
      this.pathElements.forEach(function (pathElement) {
        if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
          split.push(new Chartist.Svg.Path());
        }

        split[split.length - 1].pathElements.push(pathElement);
      });
      return split;
    }
    /**
     * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
     *
     * @memberof Chartist.Svg.Path
     * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
     * @param {boolean} close If the newly created path should be a closed path
     * @param {Object} options Path options for the newly created path.
     * @return {Chartist.Svg.Path}
     */


    function join(paths, close, options) {
      var joinedPath = new Chartist.Svg.Path(close, options);

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        for (var j = 0; j < path.pathElements.length; j++) {
          joinedPath.pathElements.push(path.pathElements[j]);
        }
      }

      return joinedPath;
    }

    Chartist.Svg.Path = Chartist.Class.extend({
      constructor: SvgPath,
      position: position,
      remove: remove,
      move: move,
      line: line,
      curve: curve,
      arc: arc,
      scale: scale,
      translate: translate,
      transform: transform,
      parse: parse,
      stringify: stringify,
      clone: clone,
      splitByCommand: splitByCommand
    });
    Chartist.Svg.Path.elementDescriptions = elementDescriptions;
    Chartist.Svg.Path.join = join;
  })(this || global, Chartist);

  ;
  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    var axisUnits = {
      x: {
        pos: 'x',
        len: 'width',
        dir: 'horizontal',
        rectStart: 'x1',
        rectEnd: 'x2',
        rectOffset: 'y2'
      },
      y: {
        pos: 'y',
        len: 'height',
        dir: 'vertical',
        rectStart: 'y2',
        rectEnd: 'y1',
        rectOffset: 'x1'
      }
    };

    function Axis(units, chartRect, ticks, options) {
      this.units = units;
      this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
      this.chartRect = chartRect;
      this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
      this.gridOffset = chartRect[units.rectOffset];
      this.ticks = ticks;
      this.options = options;
    }

    function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
      var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
      var projectedValues = this.ticks.map(this.projectValue.bind(this));
      var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
      projectedValues.forEach(function (projectedValue, index) {
        var labelOffset = {
          x: 0,
          y: 0
        }; // TODO: Find better solution for solving this problem
        // Calculate how much space we have available for the label

        var labelLength;

        if (projectedValues[index + 1]) {
          // If we still have one label ahead, we can calculate the distance to the next tick / label
          labelLength = projectedValues[index + 1] - projectedValue;
        } else {
          // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
          // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
          // still be visible inside of the chart padding.
          labelLength = Math.max(this.axisLength - projectedValue, 30);
        } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


        if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
          return;
        } // Transform to global coordinates using the chartRect
        // We also need to set the label offset for the createLabel function


        if (this.units.pos === 'x') {
          projectedValue = this.chartRect.x1 + projectedValue;
          labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
          // different offset as for positioned with end (bottom)

          if (chartOptions.axisX.position === 'start') {
            labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          } else {
            labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          }
        } else {
          projectedValue = this.chartRect.y1 - projectedValue;
          labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
          // different offset as for positioned with end (right side)

          if (chartOptions.axisY.position === 'start') {
            labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
          } else {
            labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
          }
        }

        if (axisOptions.showGrid) {
          Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
        }

        if (axisOptions.showLabel) {
          Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
        }
      }.bind(this));
    }

    Chartist.Axis = Chartist.Class.extend({
      constructor: Axis,
      createGridAndLabels: createGridAndLabels,
      projectValue: function projectValue(value, index, data) {
        throw new Error('Base axis can\'t be instantiated!');
      }
    });
    Chartist.Axis.units = axisUnits;
  })(this || global, Chartist);

  ;
  /**
  * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
  *   scaleMinSpace: 20,
  *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
  *   onlyInteger: true,
  *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
  *   referenceValue: 5
  * };
  * ```
  *
  * @module Chartist.AutoScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function AutoScaleAxis(axisUnit, data, chartRect, options) {
      // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
      this.range = {
        min: this.bounds.min,
        max: this.bounds.max
      };
      Chartist.AutoScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
    }

    Chartist.AutoScaleAxis = Chartist.Axis.extend({
      constructor: AutoScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
  *   divisor: 4,
  *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
  *   ticks: [1, 10, 20, 30]
  * };
  * ```
  *
  * @module Chartist.FixedScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function FixedScaleAxis(axisUnit, data, chartRect, options) {
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.divisor = options.divisor || 1;
      this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
        return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
      }.bind(this));
      this.ticks.sort(function (a, b) {
        return a - b;
      });
      this.range = {
        min: highLow.low,
        max: highLow.high
      };
      Chartist.FixedScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.ticks, options);
      this.stepLength = this.axisLength / this.divisor;
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }

    Chartist.FixedScaleAxis = Chartist.Axis.extend({
      constructor: FixedScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
  *   ticks: ['One', 'Two', 'Three'],
  *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
  *   stretch: true
  * };
  * ```
  *
  * @module Chartist.StepAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function StepAxis(axisUnit, data, chartRect, options) {
      Chartist.StepAxis.super.constructor.call(this, axisUnit, chartRect, options.ticks, options);
      var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
      this.stepLength = this.axisLength / calc;
    }

    function projectValue(value, index) {
      return this.stepLength * index;
    }

    Chartist.StepAxis = Chartist.Axis.extend({
      constructor: StepAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
  *
  * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
  *
  * @module Chartist.Line
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Line
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the labels to the chart area
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the labels to the chart area
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // If the line should be drawn or not
      showLine: true,
      // If dots should be drawn or not
      showPoint: true,
      // If the line chart should draw an area
      showArea: false,
      // The base for the area chart that will be used to close the area shape (is normally 0)
      areaBase: 0,
      // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
      lineSmooth: true,
      // If the line chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
      fullWidth: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var axisX, axisY;

      if (options.axisX.type === undefined) {
        axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          ticks: data.normalized.labels,
          stretch: options.fullWidth
        }));
      } else {
        axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if (options.axisY.type === undefined) {
        axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
          low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
        }));
      } else {
        axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }

      axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        var pathCoordinates = [],
            pathData = [];
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var p = {
            x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
          };
          pathCoordinates.push(p.x, p.y);
          pathData.push({
            value: value,
            valueIndex: valueIndex,
            meta: Chartist.getMetaData(series, valueIndex)
          });
        }.bind(this));
        var seriesOptions = {
          lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
          showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
          showLine: Chartist.getSeriesOption(series, options, 'showLine'),
          showArea: Chartist.getSeriesOption(series, options, 'showArea'),
          areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
        };
        var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
        // index, value and meta data

        var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
        // Points are drawn from the pathElements returned by the interpolation function
        // Small offset for Firefox to render squares correctly

        if (seriesOptions.showPoint) {
          path.pathElements.forEach(function (pathElement) {
            var point = seriesElement.elem('line', {
              x1: pathElement.x,
              y1: pathElement.y,
              x2: pathElement.x + 0.01,
              y2: pathElement.y
            }, options.classNames.point).attr({
              'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
              'ct:meta': Chartist.serialize(pathElement.data.meta)
            });
            this.eventEmitter.emit('draw', {
              type: 'point',
              value: pathElement.data.value,
              index: pathElement.data.valueIndex,
              meta: pathElement.data.meta,
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              group: seriesElement,
              element: point,
              x: pathElement.x,
              y: pathElement.y
            });
          }.bind(this));
        }

        if (seriesOptions.showLine) {
          var line = seriesElement.elem('path', {
            d: path.stringify()
          }, options.classNames.line, true);
          this.eventEmitter.emit('draw', {
            type: 'line',
            values: data.normalized.series[seriesIndex],
            path: path.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            series: series,
            seriesIndex: seriesIndex,
            seriesMeta: series.meta,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: line
          });
        } // Area currently only works with axes that support a range!


        if (seriesOptions.showArea && axisY.range) {
          // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
          // the area is not drawn outside the chart area.
          var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

          var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

          path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
            // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
            return pathSegment.pathElements.length > 1;
          }).map(function convertToArea(solidPathSegments) {
            // Receiving the filtered solid path segments we can now convert those segments into fill areas
            var firstElement = solidPathSegments.pathElements[0];
            var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
            // We then insert a new move that should start at the area base and draw a straight line up or down
            // at the end of the path we add an additional straight line to the projected area base value
            // As the closing option is set our path will be automatically closed

            return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
          }).forEach(function createArea(areaPath) {
            // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
            // and adding the created DOM elements to the correct series group
            var area = seriesElement.elem('path', {
              d: areaPath.stringify()
            }, options.classNames.area, true); // Emit an event for each area that was drawn

            this.eventEmitter.emit('draw', {
              type: 'area',
              values: data.normalized.series[seriesIndex],
              path: areaPath.clone(),
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              chartRect: chartRect,
              index: seriesIndex,
              group: seriesElement,
              element: area
            });
          }.bind(this));
        }
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: axisY.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new line chart.
     *
     * @memberof Chartist.Line
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple line chart
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // As options we currently only set a static size of 300x200 px
     * var options = {
     *   width: '300px',
     *   height: '200px'
     * };
     *
     * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
     * new Chartist.Line('.ct-chart', data, options);
     *
     * @example
     * // Use specific interpolation function with configuration from the Chartist.Interpolation module
     *
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [
     *     [1, 1, 8, 1, 7]
     *   ]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 0.2
     *   })
     * });
     *
     * @example
     * // Create a line chart with responsive options
     *
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
     * var responsiveOptions = [
     *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
     *     showPoint: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return Mon, Tue, Wed etc. on medium screens
     *         return value.slice(0, 3);
     *       }
     *     }
     *   }],
     *   ['screen and (max-width: 640px)', {
     *     showLine: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return M, T, W etc. on small screens
     *         return value[0];
     *       }
     *     }
     *   }]
     * ];
     *
     * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
     *
     */


    function Line(query, data, options, responsiveOptions) {
      Chartist.Line.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating line chart type in Chartist namespace


    Chartist.Line = Chartist.Base.extend({
      constructor: Line,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
  *
  * @module Chartist.Bar
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Bar
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the chart drawing area to the border of the container
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum width in pixel of the scale steps
        scaleMinSpace: 30,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the chart drawing area to the border of the container
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
      referenceValue: 0,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // Specify the distance in pixel of bars in a group
      seriesBarDistance: 15,
      // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
      stackBars: false,
      // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
      // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
      stackMode: 'accumulate',
      // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
      horizontalBars: false,
      // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
      distributeSeries: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If the bar chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-bar',
        horizontalBars: 'ct-horizontal-bars',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        bar: 'ct-bar',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data;
      var highLow;

      if (options.distributeSeries) {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
        data.normalized.series = data.normalized.series.map(function (value) {
          return [value];
        });
      } else {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      } // Create new svg element


      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

      if (options.stackBars && data.normalized.series.length !== 0) {
        // If stacked bars we need to calculate the high low from stacked values from each series
        var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
          return Array.prototype.slice.call(arguments).map(function (value) {
            return value;
          }).reduce(function (prev, curr) {
            return {
              x: prev.x + (curr && curr.x) || 0,
              y: prev.y + (curr && curr.y) || 0
            };
          }, {
            x: 0,
            y: 0
          });
        });
        highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
      } else {
        highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
      } // Overrides of high / low from settings


      highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
      highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

      if (options.distributeSeries && options.stackBars) {
        // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
        // use only the first label for the step axis
        labelAxisTicks = data.normalized.labels.slice(0, 1);
      } else {
        // If distributed series are enabled but stacked bars aren't, we should use the series labels
        // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
        // as the bars are normalized
        labelAxisTicks = data.normalized.labels;
      } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


      if (options.horizontalBars) {
        if (options.axisX.type === undefined) {
          valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        }

        if (options.axisY.type === undefined) {
          labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
        }
      } else {
        if (options.axisX.type === undefined) {
          labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
        }

        if (options.axisY.type === undefined) {
          valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        }
      } // Projected 0 point


      var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

      var stackedBarValues = [];
      labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
        var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

        var periodHalfLength; // Current series SVG element

        var seriesElement; // We need to set periodHalfLength based on some options combinations

        if (options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
          // which is the series count and divide by 2
          periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
        } else if (options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
          // length by 2
          periodHalfLength = labelAxis.axisLength / 2;
        } else {
          // On regular bar charts we should just use the series length
          periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
        } // Adding the series group to the series element


        seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

          if (options.distributeSeries && !options.stackBars) {
            // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
            // on the step axis for label positioning
            labelAxisValueIndex = seriesIndex;
          } else if (options.distributeSeries && options.stackBars) {
            // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
            // 0 for projection on the label step axis
            labelAxisValueIndex = 0;
          } else {
            // On regular bar charts we just use the value index to project on the label step axis
            labelAxisValueIndex = valueIndex;
          } // We need to transform coordinates differently based on the chart layout


          if (options.horizontalBars) {
            projected = {
              x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
            };
          } else {
            projected = {
              x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
            };
          } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
          // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
          // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
          // add any automated positioning.


          if (labelAxis instanceof Chartist.StepAxis) {
            // Offset to center bar between grid lines, but only if the step axis is not stretched
            if (!labelAxis.options.stretch) {
              projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
            } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


            projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
          } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


          previousStack = stackedBarValues[valueIndex] || zeroPoint;
          stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

          if (value === undefined) {
            return;
          }

          var positions = {};
          positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
          positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

          if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
            // Stack mode: accumulate (default)
            // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
            // We want backwards compatibility, so the expected fallback without the 'stackMode' option
            // to be the original behaviour (accumulate)
            positions[labelAxis.counterUnits.pos + '1'] = previousStack;
            positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
          } else {
            // Draw from the zero line normally
            // This is also the same code for Stack mode: overlap
            positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
            positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
          } // Limit x and y so that they are within the chart rect


          positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
          positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
          positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
          positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
          var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

          bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
            'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(metaData)
          });
          this.eventEmitter.emit('draw', Chartist.extend({
            type: 'bar',
            value: value,
            index: valueIndex,
            meta: metaData,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            group: seriesElement,
            element: bar
          }, positions));
        }.bind(this));
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: valueAxis.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new bar chart and returns API object that you can use for later changes.
     *
     * @memberof Chartist.Bar
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple bar chart
     * var data = {
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
     * new Chartist.Bar('.ct-chart', data);
     *
     * @example
     * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
     * new Chartist.Bar('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5, 6, 7],
     *   series: [
     *     [1, 3, 2, -5, -3, 1, -6],
     *     [-5, -2, -4, -1, 2, -3, 1]
     *   ]
     * }, {
     *   seriesBarDistance: 12,
     *   low: -10,
     *   high: 10
     * });
     *
     */


    function Bar(query, data, options, responsiveOptions) {
      Chartist.Bar.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating bar chart type in Chartist namespace


    Chartist.Bar = Chartist.Base.extend({
      constructor: Bar,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
  *
  * @module Chartist.Pie
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Pie
     */

    var defaultOptions = {
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: 5,
      // Override the class names that are used to generate the SVG structure of the chart
      classNames: {
        chartPie: 'ct-chart-pie',
        chartDonut: 'ct-chart-donut',
        series: 'ct-series',
        slicePie: 'ct-slice-pie',
        sliceDonut: 'ct-slice-donut',
        sliceDonutSolid: 'ct-slice-donut-solid',
        label: 'ct-label'
      },
      // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
      startAngle: 0,
      // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
      total: undefined,
      // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
      donut: false,
      // If specified the donut segments will be drawn as shapes instead of strokes.
      donutSolid: false,
      // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
      // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
      donutWidth: 60,
      // If a label should be shown or not
      showLabel: true,
      // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
      labelOffset: 0,
      // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
      labelPosition: 'inside',
      // An interpolation function for the label value
      labelInterpolationFnc: Chartist.noop,
      // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
      labelDirection: 'neutral',
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If true empty values will be ignored to avoid drawing unncessary slices and labels
      ignoreEmptyValues: false
    };
    /**
     * Determines SVG anchor position based on direction and center parameter
     *
     * @param center
     * @param label
     * @param direction
     * @return {string}
     */

    function determineAnchorPosition(center, label, direction) {
      var toTheRight = label.x > center.x;

      if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
        return 'start';
      } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
        return 'end';
      } else {
        return 'middle';
      }
    }
    /**
     * Creates the pie chart
     *
     * @param options
     */


    function createChart(options) {
      var data = Chartist.normalizeData(this.data);
      var seriesGroups = [],
          labelsGroup,
          chartRect,
          radius,
          labelRadius,
          totalDataSum,
          startAngle = options.startAngle; // Create SVG.js draw

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

      chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

      radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

      totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, 0);
      var donutWidth = Chartist.quantity(options.donutWidth);

      if (donutWidth.unit === '%') {
        donutWidth.value *= radius / 100;
      } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
      // Unfortunately this is not possible with the current SVG Spec
      // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


      radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
      // if regular pie chart it's half of the radius

      if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
        labelRadius = radius;
      } else if (options.labelPosition === 'center') {
        // If labelPosition is center we start with 0 and will later wait for the labelOffset
        labelRadius = 0;
      } else if (options.donutSolid) {
        labelRadius = radius - donutWidth.value / 2;
      } else {
        // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
        // slice
        labelRadius = radius / 2;
      } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


      labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      }; // Check if there is only one non-zero value in the series array.

      var hasSingleValInSeries = data.raw.series.filter(function (val) {
        return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
      }).length === 1; // Creating the series groups

      data.raw.series.forEach(function (series, index) {
        seriesGroups[index] = this.svg.elem('g', null, null);
      }.bind(this)); //if we need to show labels we create the label group now

      if (options.showLabel) {
        labelsGroup = this.svg.elem('g', null, null);
      } // Draw the series
      // initialize series groups


      data.raw.series.forEach(function (series, index) {
        // If current value is zero and we are ignoring empty values then skip to next value
        if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

        seriesGroups[index].attr({
          'ct:series-name': series.name
        }); // Use series class from series data or if not set generate one

        seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

        var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

        var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees

        if (endAngle - overlappigStartAngle >= 359.99) {
          endAngle = overlappigStartAngle + 359.99;
        }

        var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
            end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
        var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

        var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

        if (!options.donut) {
          path.line(center.x, center.y);
        } else if (options.donutSolid) {
          donutSolidRadius = radius - donutWidth.value;
          innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
          innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
          path.line(innerStart.x, innerStart.y);
          path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
        } // Create the SVG path
        // If this is a donut chart we add the donut class, otherwise just a regular slice


        var pathClassName = options.classNames.slicePie;

        if (options.donut) {
          pathClassName = options.classNames.sliceDonut;

          if (options.donutSolid) {
            pathClassName = options.classNames.sliceDonutSolid;
          }
        }

        var pathElement = seriesGroups[index].elem('path', {
          d: path.stringify()
        }, pathClassName); // Adding the pie series value to the path

        pathElement.attr({
          'ct:value': data.normalized.series[index],
          'ct:meta': Chartist.serialize(series.meta)
        }); // If this is a donut, we add the stroke-width as style attribute

        if (options.donut && !options.donutSolid) {
          pathElement._node.style.strokeWidth = donutWidth.value + 'px';
        } // Fire off draw event


        this.eventEmitter.emit('draw', {
          type: 'slice',
          value: data.normalized.series[index],
          totalDataSum: totalDataSum,
          index: index,
          meta: series.meta,
          series: series,
          group: seriesGroups[index],
          element: pathElement,
          path: path.clone(),
          center: center,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle
        }); // If we need to show labels we need to add the label for this slice now

        if (options.showLabel) {
          var labelPosition;

          if (data.raw.series.length === 1) {
            // If we have only 1 series, we can position the label in the center of the pie
            labelPosition = {
              x: center.x,
              y: center.y
            };
          } else {
            // Position at the labelRadius distance from center and between start and end angle
            labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
          }

          var rawValue;

          if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
            rawValue = data.normalized.labels[index];
          } else {
            rawValue = data.normalized.series[index];
          }

          var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

          if (interpolatedValue || interpolatedValue === 0) {
            var labelElement = labelsGroup.elem('text', {
              dx: labelPosition.x,
              dy: labelPosition.y,
              'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
            }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

            this.eventEmitter.emit('draw', {
              type: 'label',
              index: index,
              group: labelsGroup,
              element: labelElement,
              text: '' + interpolatedValue,
              x: labelPosition.x,
              y: labelPosition.y
            });
          }
        } // Set next startAngle to current endAngle.
        // (except for last slice)


        startAngle = endAngle;
      }.bind(this));
      this.eventEmitter.emit('created', {
        chartRect: chartRect,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new pie chart and returns an object that can be used to redraw the chart.
     *
     * @memberof Chartist.Pie
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object with a version and an update method to manually redraw the chart
     *
     * @example
     * // Simple pie chart example with four series
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * });
     *
     * @example
     * // Drawing a donut chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * }, {
     *   donut: true
     * });
     *
     * @example
     * // Using donut, startAngle and total to draw a gauge chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   donut: true,
     *   donutWidth: 20,
     *   startAngle: 270,
     *   total: 200
     * });
     *
     * @example
     * // Drawing a pie chart with padding and labels that are outside the pie
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   chartPadding: 30,
     *   labelOffset: 50,
     *   labelDirection: 'explode'
     * });
     *
     * @example
     * // Overriding the class names for individual series as well as a name and meta data.
     * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
     * // to a ct:meta attribute.
     * new Chartist.Pie('.ct-chart', {
     *   series: [{
     *     value: 20,
     *     name: 'Series 1',
     *     className: 'my-custom-class-one',
     *     meta: 'Meta One'
     *   }, {
     *     value: 10,
     *     name: 'Series 2',
     *     className: 'my-custom-class-two',
     *     meta: 'Meta Two'
     *   }, {
     *     value: 70,
     *     name: 'Series 3',
     *     className: 'my-custom-class-three',
     *     meta: 'Meta Three'
     *   }]
     * });
     */


    function Pie(query, data, options, responsiveOptions) {
      Chartist.Pie.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating pie chart type in Chartist namespace


    Chartist.Pie = Chartist.Base.extend({
      constructor: Pie,
      createChart: createChart,
      determineAnchorPosition: determineAnchorPosition
    });
  })(this || global, Chartist);

  return Chartist;
});

/***/ }),

/***/ "un8i":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(servicio) {
        this.servicio = servicio;
        this.codigo = "";
        this.nombre = "";
        this.password = "";
        this.password2 = "";
        this.rol = "1";
        this.estado = "1";
        this.fecha = "";
        this.errorpassworda = "";
        this.visiblehide = false;
    }
    TypographyComponent.prototype.ngOnInit = function () {
        this.islogged();
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        var curr_year = d.getFullYear();
        // var months = new Array("Jan", "Feb", "Mar",
        //   "Apr", "May", "Jun", "Jul", "Aug", "Sep",
        //   "Oct", "Nov", "Dec");  
        var months = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
        var today = curr_year + "-" + months[curr_month] + "-" + curr_date;
        this.fecha = '' + today;
    };
    TypographyComponent.prototype.Actualizar = function () {
        console.log('la Actualizar->');
        if (this.password.length == 0) {
            this.visiblehide = true;
            this.errorpassworda = "El password debe ir no en blanco";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        if (this.password != this.password2) {
            this.visiblehide = true;
            this.errorpassworda = "Las contraseñas no son iguales";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        if (this.codigo.length == 0) {
            this.visiblehide = true;
            this.errorpassworda = "El user debe ir no en blanco";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        if (this.nombre.length == 0) {
            this.visiblehide = true;
            this.errorpassworda = "El nombre debe ir no en blanco";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        if (this.estado == null) {
            this.visiblehide = true;
            this.errorpassworda = "Debe seleccionar un estado";
            return;
        }
        else {
            this.errorpassworda = "";
            this.visiblehide = false;
        }
        console.log('la Actualizar2->');
        this.crear();
    };
    TypographyComponent.prototype.islogged = function () {
        var code = localStorage.getItem('user');
        console.log('la code->', code);
        if (code == null || code.length == 0) {
            this.servicio.navegarwithparamas2('dashboard', "", "0");
            return;
        }
    };
    TypographyComponent.prototype.crear = function () {
        var _this = this;
        var newpass = this.servicio.tomd5(this.password);
        var formData = new FormData();
        formData.append('codigo', this.codigo);
        formData.append('password', newpass);
        formData.append('nombre', this.nombre);
        formData.append('estado', this.estado);
        formData.append('fecha', this.fecha);
        formData.append('rol', this.rol);
        this.servicio.postForm(formData, 'guardar_usuario').subscribe(function (msg) {
            console.log('la respuesta->', msg);
            // this.servicio.setearparametros(msg)
            _this.servicio.message('Usuario creado!', 'success');
            // this.router.navigate(['/listado']);
            //     formData.append('password', 'abc');
        }, function (err) {
            _this.servicio.message('hubo un error contactando al server', 'error');
        });
    };
    TypographyComponent.ctorParameters = function () { return [
        { type: services_service_1.ServicesService }
    ]; };
    TypographyComponent = __decorate([
        core_1.Component({
            selector: 'app-typography',
            template: __webpack_require__(/*! raw-loader!./typography.component.html */ "O5tJ").default,
            styles: [__webpack_require__(/*! ./typography.component.css */ "Wwls").default]
        }),
        __metadata("design:paramtypes", [services_service_1.ServicesService])
    ], TypographyComponent);
    return TypographyComponent;
}());
exports.TypographyComponent = TypographyComponent;


/***/ }),

/***/ "urC5":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var lbd_chart_component_1 = __webpack_require__(/*! ../lbd/lbd-chart/lbd-chart.component */ "vUmn");
var Chartist = __webpack_require__(/*! chartist */ "uki+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var router_2 = __webpack_require__(/*! @angular/router */ "tyNb");
var MapsComponent = /** @class */ (function () {
    function MapsComponent(router, route, servicio) {
        this.router = router;
        this.route = route;
        this.servicio = servicio;
        this.titulo = " en rango de Abril a Mayo";
        this.selectedbank = " ";
        this.datageneral = [];
        this.yearsl = [];
        this.visiblehide = false;
        this.meses = [];
        this.banks = [];
        this.body = [];
        this.footer = "";
        this.priorityList = [];
        this.param1 = this.route.snapshot.params.param1;
        var navigation = this.router.getCurrentNavigation();
        var state = navigation.extras.state;
        console.log("state es " + state);
        //  this.route.params.subscribe(params => {
        //     // var id = +params['id']; // (+) converts string 'id' to a number
        //     console.log( "params es "+JSON.stringify(params));
        //     // In a real app: dispatch action to load the details here.
        //  });
        // if(state!=undefined) 
        try {
            console.log("param1 es" + state.example);
            this.cargar(state.example);
        }
        catch (error) {
            this.cargar(0);
            console.log('this.body es->', this.body);
            this.hoursChartLegendItems = [
                { title: this.banks[0], imageClass: 'fa fa-circle text-info' },
                { title: this.banks[1], imageClass: 'fa fa-circle text-danger' },
                { title: this.banks[3], imageClass: 'fa fa-circle text-warning' },
                { title: this.banks[4], imageClass: 'fa fa-circle text-primary ' },
                { title: this.banks[5], imageClass: 'fa fa-circle text-success' },
                { title: this.banks[6], imageClass: 'fa fa-circle text-primary ' },
                { title: this.banks[7], imageClass: 'fa fa-circle text-secondary' },
                { title: this.banks[8], imageClass: 'fa fa-circle text-danger' },
                { title: this.banks[9], imageClass: 'fa fa-circle text-dark' },
                { title: this.banks[10], imageClass: 'fa fa-circle text-danger' },
                { title: this.banks[11], imageClass: 'fa fa-circle text-info' },
                { title: this.banks[12], imageClass: 'fa fa-circle text-danger' },
                { title: this.banks[13], imageClass: 'fa fa-circle text-primary' },
                { title: this.banks[14], imageClass: 'fa fa-circle text-primary' },
                { title: this.banks[15], imageClass: 'fa fa-circle text-primary' },
                { title: this.banks[16], imageClass: 'fa fa-circle text-dark' },
                { title: this.banks[17], imageClass: 'fa fa-circle text-dark' }
            ];
        }
        this.vergrafico();
    }
    MapsComponent.prototype.islogged = function () {
        var code = localStorage.getItem('user');
        console.log('la code->', code);
        if (code == null || code.length == 0) {
            this.servicio.navegarwithparamas2('dashboard', "", "0");
            return;
        }
    };
    MapsComponent.prototype.Graficar = function () {
        console.log(' selectedbank es->', this.selectedbank);
        this.servicio.navegarwithparamas('promedio', this.selectedbank);
        // this.  changedvalue()
        //     console.log(' selectedbank es->',this.selectedbank);
        //     var y=false
        //     if ("Todos los Bancos"==this.selectedbank) {
        //       y=true
        //     }
        //      this.reloadgraficos(y)
        //     this.hoursChartLegendItems = [
        //       { title: this.selectedbank, imageClass: 'fa fa-circle text-info' },
        //     ];
        //     this.hoursChartData = {
        //       labels: this.meses,
        //       series:  this.body
        //     };
        // this.  vergrafico()
    };
    MapsComponent.prototype.changedvalue = function () {
        //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
        //     return false;
        // }
        // this.router.onSameUrlNavigation = 'reload';
    };
    MapsComponent.prototype.reloadgraficos = function (y) {
        this.body = [];
        var data = this.datageneral;
        var years = this.yearsl;
        for (var i = 0; i < data.length; i++) {
            //  console.log('data.Bancos[i] e s->',data[i]);
            var row = [];
            // console.log('Anio entro s->');
            var nombre = data[i].Nombre;
            // row.push(nombre);
            var obj = data[i].Anio;
            for (var j = 0; j < years.length; j++) {
                var mont1 = obj[0][years[j]];
                // console.log(key + " -> " + p[key]);
                var p = mont1[0];
                for (var key in p) {
                    if (p.hasOwnProperty(key)) {
                        // console.log(key + " -> " + p[key]);
                        // var numberValue = Number(this.selectedbank);
                        row.push(p[key]);
                    }
                }
            }
            if (nombre == this.selectedbank && y == false) {
                console.log("ombre==this.selectedbank && y==false con nombre" + nombre);
                this.body.push(row);
            }
            else if (y == true) {
                console.log("y==true" + nombre);
                this.body.push(row);
            }
        }
        console.log('this.body es->', this.body);
        // console.log('body es->',JSON.stringify(this.body));
    };
    MapsComponent.prototype.cargar = function (nameselected) {
        // this.servicio.getDataget("datos") .subscribe(data=>{
        //   this.cargar1(nameselected,data)
        // });
        var data1 = __webpack_require__(/*! ./data.json */ "oBmT"); // forward slashes will depend on the file location
        this.cargar1(nameselected, data1);
    };
    MapsComponent.prototype.cargar1 = function (nameselected, data1) {
        var indexselected = Number(nameselected);
        var nemselected = "Todos los Bancos";
        // this.servicio.getDataget("https://reqres.in/api/users?page=2") .subscribe(data=>{
        //  this.servicio.getDataget("http://34.68.221.224/Reporte/datos") .subscribe(data=>{
        var v = 0;
        var k = 0;
        var m = 0;
        // var data =  JSON.parse(localStorage.getItem('ram')); 
        //   console.log('la data7 es->',data);
        // console.log('la data7 es->',JSON.stringify(data));
        var data = data1.Bancos;
        this.datageneral = data;
        if (data) {
            var years = [];
            // this.meses.push("Perfil Financiero");
            var c = 0;
            var name;
            var name1;
            var a = { value: 0, label: "Todos los Bancos" };
            ++c;
            this.priorityList.push(a);
            for (var i = 0; i < data.length; i++) {
                var obj = data[i].Anio;
                var Nombr = data[i].Nombre;
                // console.log( " Nombr-> " + Nombr);
                this.banks.push(Nombr);
                // var Nombre = Nombr[0];
                a = { value: c, label: Nombr };
                ++c;
                this.priorityList.push(a);
                // for (var key in Nombre) {
                //   if (Nombre.hasOwnProperty(key)) {
                //       // console.log(key + " -> " + p[key]);
                //    
                //   }
                // }
                // console.log('obj es->',obj);
                // console.log('mont1 es->',mont1);
                // console.log('mont2 es->',mont1[0]);
                var f = obj[0];
                if (v == 0) {
                    for (var key in f) {
                        if (f.hasOwnProperty(key)) {
                            console.log(key + " -> ESTE ES EL MES");
                            years.push(key);
                            ++v;
                        }
                    }
                }
            }
            //   convert data name to index this.banks
            // for (var nb in this.priorityList) {
            //   console.log(' nb["value"] es->',nb["value"]);
            //   if(nb["value"]== indexselected) {
            //     nemselected=nb["label"]
            //   }
            //   }
            var fh = this.priorityList;
            for (var key in fh) {
                if (fh.hasOwnProperty(key)) {
                    var indexkey = Number(key);
                    if (indexkey == indexselected) {
                        var bb = fh[key];
                        nemselected = bb.label;
                        console.log(bb.label + " -> ESTE ES EL bb");
                    }
                    // console.log(key + " -> ESTE ES EL MES" );
                    // console.log(JSON.stringify(fh[key]) + " -> ESTE ES EL MvalueES" );
                }
            }
            console.log(' indexselected es->', indexselected);
            console.log(' nemselected777 es->', nemselected);
            this.yearsl = years;
            // console.log(' this.banks es->',JSON.stringify(this.banks));
            // console.log(' data[ 0].Anio 5 es->',JSON.stringify( data[ 0].Anio));
            console.log(' this.banks.length es->', this.banks.length);
            for (var j = 0; j < 1; j++) {
                obj = data[j].Anio;
                for (var i = 0; i < years.length; i++) {
                    var mont1 = obj[0][years[i]];
                    for (name in mont1[0]) {
                        // console.log('mont2 es->',name);
                        this.meses.push(name);
                    }
                }
            }
            console.log('this.meses33 es->', JSON.stringify(this.meses));
            //   for (var j = 0; j < 1;j++)
            //   {
            //     obj = data[j].Anio;
            //       for (var i = 0; i < years.length; i++){
            //           var mont1 = obj[0][years[i]];
            //           for (name in mont1[0]) {
            //             // console.log('mont2 es->',name);
            //                 this.meses.push(name);
            //             }
            //       }
            // } 
        }
        //   set data banks
        k = 0;
        m = 0;
        var body2 = [];
        if (data) {
            var name;
            var name1;
            //   for (var i = 0; i < 7; i++)
            for (var i = 0; i < data.length; i++) {
                // console.log('data.Bancos[i] e s->',data[i]);
                var row = [];
                var row2 = [];
                // console.log('Anio entro s->');
                var nombre = data[i].Nombre;
                // row.push(nombre);
                var obj = data[i].Anio;
                for (var j = 0; j < years.length; j++) {
                    var mont1 = obj[0][years[j]];
                    // console.log(key + " -> " + p[key]);
                    var p = mont1[0];
                    for (var key in p) {
                        if (p.hasOwnProperty(key)) {
                            // console.log(key + " -> " + p[key]);
                            row.push(p[key]);
                        }
                    }
                }
                if (nemselected == nombre) {
                    console.log("ombre==this.selectedbank && y==false con nombre" + nombre);
                    this.body.push(row);
                    this.footer = JSON.stringify(row);
                }
                else if (nemselected == "Todos los Bancos") {
                    console.log("y==true");
                    this.body.push(row);
                    body2.push(row2);
                }
            }
            // console.log('this.body es->',this.body);
            // console.log('body es->',JSON.stringify(this.body));
            var column = [];
            var row2 = [];
            var k = 0;
            for (var j = 0; j < body2.length; j++) {
                k = body2[j].length;
            }
            var row4 = [];
            // console.log(' k  es->', k);
            for (var jd = 0; jd < k; jd++) {
                column = [];
                for (var jl = 0; jl < body2.length; jl++) {
                    // console.log('columnkey  es->',JSON.stringify(body2[jl]));
                    for (var j = 0; j < body2[jl].length; j++) {
                        // console.log(key + " -> " + p[key]);
                        if (j == jd)
                            column.push(body2[jl][j]);
                    }
                }
                // console.log('column  es->',jd,JSON.stringify(column));
                var sorrtedArray = column.sort(function (n1, n2) { return n1 - n2; });
                // console.log('column  sorrtedArray->',JSON.stringify(sorrtedArray));
                row2 = [];
                for (var j = 0; j < sorrtedArray.length; j++) {
                    var kvArray = [
                        {
                            number: j,
                            valor: sorrtedArray[j],
                            column: jd,
                        }
                    ];
                    row2.push(kvArray);
                    // console.log('row2orrtedArray->',JSON.stringify(row2));
                }
                row4.push(row2);
            }
            console.log('row4rray->', JSON.stringify(row4));
            /*      for (var ek = 0; ek< row4.length; ek++){
                   // console.log("colrow4 [ek]umn es -> " +row4 [ek]);
                   // console.log("colrow4 [ek]umn es -> " +JSON.stringify(row4 [ek]));
                   var kJ :any=JSON.stringify(row4 [ek])
                      for (var eki = 0; eki< row4 [ek].length; eki++){
                       var ff=row4 [ek][eki]
                     console.log("colrow4oo [ek]umn es -> " +JSON.stringify(row4 [ek][eki]) );
                     console.log("column es -> " +ff[0].column);
         
                     }
                  
                     // for (var ek = 0; ek< row4.length; ek++){
         
                     // }
                
               } */
            for (var j = 0; j < this.body.length; j++) {
                //    for (var j = 0; j< 1; j++){
                for (var k = 1; k < this.body[j].length; k++) {
                    var col = k - 1;
                    console.log("this.body[j] valuemonth es CON J,k " + this.body[j][k], j, k);
                    var valuemonth = this.body[j][k];
                    for (var ek = 0; ek < row4.length; ek++) {
                        var kJ = JSON.stringify(row4[ek]);
                        for (var eki = 0; eki < row4[ek].length; eki++) {
                            var ff = row4[ek][eki];
                            console.log("colrow4oo [ek]umn es -> " + JSON.stringify(row4[ek][eki]));
                            console.log("column es -> " + ff[0].column);
                            if (col == ff[0].column) {
                                if (valuemonth == ff[0].valor) {
                                    this.body[j][k] = ff[0].number;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (indexselected == 0) {
            this.visiblehide = true;
            this.hoursChartLegendItems = [
                { title: this.banks[0], imageClass: 'fa fa-circle uno' },
                { title: this.banks[1], imageClass: 'fa fa-circle dos' },
                { title: this.banks[3], imageClass: 'fa fa-circle tres' },
                { title: this.banks[4], imageClass: 'fa fa-circle t4' },
                { title: this.banks[5], imageClass: 'fa fa-circle t5' },
                { title: this.banks[6], imageClass: 'fa fa-circle t6' },
                { title: this.banks[7], imageClass: 'fa fa-circle t7' },
                { title: this.banks[8], imageClass: 'fa fa-circle t8' },
                { title: this.banks[9], imageClass: 'fa fa-circle t9' },
                { title: this.banks[10], imageClass: 'fa fa-circle t10' },
                { title: this.banks[11], imageClass: 'fa fa-circle t11' },
                { title: this.banks[12], imageClass: 'fa fa-circle t12' },
                { title: this.banks[13], imageClass: 'fa fa-circle t13' },
                { title: this.banks[14], imageClass: 'fa fa-circle t14' },
                { title: this.banks[15], imageClass: 'fa fa-circle t15' },
                { title: this.banks[16], imageClass: 'fa fa-circle t16' },
                { title: this.banks[17], imageClass: 'fa fa-circle t17' }
            ];
        }
        else
            this.hoursChartLegendItems = [
                { title: nemselected, imageClass: 'fa fa-circle text-info' },
            ];
    };
    MapsComponent.prototype.vergrafico = function () {
        this.titulo = " en rango de Abril 2020 a Abril 2021";
        this.hoursChartType = lbd_chart_component_1.ChartType.Line;
        this.hoursChartData = {
            labels: this.meses,
            series: this.body
        };
        this.hoursChartOptions = {
            low: 0,
            high: 20,
            showArea: false,
            height: '245px',
            axisX: {
                showGrid: true,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: true,
        };
        this.hoursChartResponsive = [
            ['screen and (max-width: 940px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
    };
    MapsComponent.prototype.ngOnInit = function () {
        this.islogged();
    };
    MapsComponent.ctorParameters = function () { return [
        { type: router_2.Router },
        { type: router_1.ActivatedRoute },
        { type: services_service_1.ServicesService }
    ]; };
    MapsComponent = __decorate([
        core_1.Component({
            selector: 'app-maps',
            template: __webpack_require__(/*! raw-loader!./maps.component.html */ "3Puv").default,
            styles: [__webpack_require__(/*! ./maps.component.css */ "YpYv").default]
        }),
        __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute, services_service_1.ServicesService])
    ], MapsComponent);
    return MapsComponent;
}());
exports.MapsComponent = MapsComponent;
// console.log(' this.banks.length es->',this.banks.length);


/***/ }),

/***/ "vUmn":
/*!******************************************************!*\
  !*** ./src/app/lbd/lbd-chart/lbd-chart.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LbdChartComponent = exports.ChartType = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var Chartist = __webpack_require__(/*! chartist */ "uki+");
var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType = exports.ChartType || (exports.ChartType = {}));
var LbdChartComponent = /** @class */ (function () {
    function LbdChartComponent() {
    }
    LbdChartComponent_1 = LbdChartComponent;
    LbdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "lbd-chart-" + LbdChartComponent_1.currentId++;
    };
    LbdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new Chartist.Pie("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new Chartist.Line("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new Chartist.Bar("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    var LbdChartComponent_1;
    LbdChartComponent.currentId = 1;
    LbdChartComponent.ctorParameters = function () { return []; };
    LbdChartComponent.propDecorators = {
        title: [{ type: core_1.Input }],
        subtitle: [{ type: core_1.Input }],
        chartClass: [{ type: core_1.Input }],
        chartType: [{ type: core_1.Input }],
        chartData: [{ type: core_1.Input }],
        chartOptions: [{ type: core_1.Input }],
        chartResponsive: [{ type: core_1.Input }],
        footerIconClass: [{ type: core_1.Input }],
        footerText: [{ type: core_1.Input }],
        legendItems: [{ type: core_1.Input }],
        withHr: [{ type: core_1.Input }]
    };
    LbdChartComponent = LbdChartComponent_1 = __decorate([
        core_1.Component({
            selector: 'lbd-chart',
            template: __webpack_require__(/*! raw-loader!./lbd-chart.component.html */ "ZuDf").default,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], LbdChartComponent);
    return LbdChartComponent;
}());
exports.LbdChartComponent = LbdChartComponent;


/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map