"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mjmlCore = require("mjml-core");

var _yolk = require("@cuckoointernet/yolk");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Layout = /*#__PURE__*/function (_BodyComponent) {
  _inherits(Layout, _BodyComponent);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    var initialDatas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Layout);

    _this = _super.call(this, initialDatas);

    _defineProperty(_assertThisInitialized(_this), "headStyle", function (breakpoint) {
      return "\n\t\t.mj-layout {\n\t\t\tborder: 10px solid ".concat(_yolk.colours.core.yellow, " !important;\n\t\t}\n\t\t@media only screen and (max-width:").concat(breakpoint, ") {\n\t\t\t.mj-layout {\n\t\t\t\tborder-color: blue !important;\n\t\t\t}\n\t\t}\n\t");
    });

    _defineProperty(_assertThisInitialized(_this), "componentHeadStyle", function (breakpoint) {
      return "\n\t\t@media only screen and (max-width:".concat(breakpoint, ") {\n\t\t\t.mj-layout-").concat(_this.cssId, " {\n\t\t\t\twidth: ").concat(_this.cssId * 60, "px !important;\n\t\t\t}\n\t\t}\n\t");
    });

    _this.cssId = Math.floor(Math.random() * 9) + 1;
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return this.renderMJML("\n\t\t\t<mj-section css-class=\"mj-layout mj-layout-".concat(this.cssId, "\">\n\t\t\t\t<mj-column background-color=").concat(this.getAttribute('background-color'), ">\n\t\t\t\t\t").concat(this.renderChildren(this.props.children, {
        rawXML: true,
        renderer: function renderer(component) {
          return component.render;
        }
      }), "\n\t\t\t\t</mj-column>\n\t\t\t</mj-section>\n\t\t"));
    }
  }]);

  return Layout;
}(_mjmlCore.BodyComponent);

exports["default"] = Layout;

_defineProperty(Layout, "dependencies", {
  'mj-layout': ['mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar'],
  'mj-wrapper': ['mj-layout'],
  'mj-body': ['mj-layout']
});

_defineProperty(Layout, "allowedAttributes", {
  'background-color': 'color',
  color: 'color'
});

_defineProperty(Layout, "defaultAttributes", {
  'background-color': 'white',
  color: 'black'
});