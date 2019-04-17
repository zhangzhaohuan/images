webpackJsonp([25],{

/***/ "./src/assets/home/footer/icon_facebook.svg":
/*!**************************************************!*\
  !*** ./src/assets/home/footer/icon_facebook.svg ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon_facebook.9ad5fbdd.svg";

/***/ }),

/***/ "./src/assets/home/footer/icon_line.svg":
/*!**********************************************!*\
  !*** ./src/assets/home/footer/icon_line.svg ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon_line.c6c3af9e.svg";

/***/ }),

/***/ "./src/assets/home/footer/icon_twitter.svg":
/*!*************************************************!*\
  !*** ./src/assets/home/footer/icon_twitter.svg ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon_twitter.774c517d.svg";

/***/ }),

/***/ "./src/assets/home/header/logo.svg":
/*!*****************************************!*\
  !*** ./src/assets/home/header/logo.svg ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.70193c7b.svg";

/***/ }),

/***/ "./src/components/home/footer/index.js":
/*!*********************************************!*\
  !*** ./src/components/home/footer/index.js ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_intl_universal__ = __webpack_require__(/*! react-intl-universal */ "./node_modules/react-intl-universal/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_intl_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_utils_axios_common__ = __webpack_require__(/*! utils/axios/common */ "./src/utils/axios/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils_axios_messageCenter__ = __webpack_require__(/*! utils/axios/messageCenter */ "./src/utils/axios/messageCenter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils_cookie__ = __webpack_require__(/*! utils/cookie */ "./src/utils/cookie.js");

var _jsxFileName = "/Users/zhangzhaohuan/work/project/INKEX-FE/src/components/home/footer/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Bottom = function (_Component) {
  _inherits(Bottom, _Component);

  function Bottom(props) {
    var _this2 = this;

    _classCallCheck(this, Bottom);

    var _this = _possibleConstructorReturn(this, (Bottom.__proto__ || Object.getPrototypeOf(Bottom)).call(this, props));

    _this.getAboutList = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res, status, data;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_5_utils_axios_messageCenter__["b" /* getListInfo */])('list', 'about', _this.lang);

            case 2:
              res = _context.sent;
              status = res.status, data = res.data;

              if (status === 200 && data !== []) {
                data.forEach(function (item) {
                  _this.aboutList.push({
                    title: item.description,
                    routerID: item.name,
                    router: item.parent
                  });
                });
                _this.forceUpdate();
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));
    _this.getSupportList = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var res, status, data;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_5_utils_axios_messageCenter__["b" /* getListInfo */])('list', 'support', _this.lang);

            case 2:
              res = _context2.sent;
              status = res.status, data = res.data;

              if (status === 200 && data !== []) {
                data.forEach(function (item) {
                  _this.supportList.push({
                    title: item.description,
                    routerID: item.name,
                    router: item.parent
                  });
                });
                _this.forceUpdate();
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));
    _this.getFrendShipList = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var res, status, data;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_5_utils_axios_messageCenter__["b" /* getListInfo */])('list', 'friendship', _this.lang);

            case 2:
              res = _context3.sent;
              status = res.status, data = res.data;

              if (status === 200 && data !== []) {
                data.forEach(function (item) {
                  _this.frendShip.push({
                    name: item.description,
                    url: item.url
                  });
                });
                _this.forceUpdate();
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }));

    _this.toAPI = function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(e) {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4_utils_axios_common__["j" /* userInfo */])();

              case 2:
                res = _context4.sent;

                if (res.data) {
                  _this.props.history.push("/home/user/api");
                } else {
                  window.open("https://inkex.zendesk.com/hc/" + _this.zendeskLang + "/categories/360000736411-%E6%8E%A5%E5%85%A5api");
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this2);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.aboutList = [];
    _this.supportList = [];
    _this.frendShip = [];
    _this.lang = Object(__WEBPACK_IMPORTED_MODULE_6_utils_cookie__["a" /* getCookie */])('lang').replace('-', '_');
    _this.zendeskLang = '';
    return _this;
  }

  _createClass(Bottom, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var lang = Object(__WEBPACK_IMPORTED_MODULE_6_utils_cookie__["a" /* getCookie */])('lang');
      switch (lang) {
        case 'zh-CN':
        case 'zh':
          this.zendeskLang = 'zh-cn';break;
        case 'en-US':
          this.zendeskLang = 'en-us';break;
        case 'ko-KR':
          this.zendeskLang = 'ko';break;
        default:
          return;
      }
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Promise.all([this.getAboutList(), this.getSupportList(), this.getFrendShipList()]);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidMount;
    }()

    // 关于我们列表


    // 用户支持列表  


    // 友情链接列表

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState = function () {
        return;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { className: "bottom-main", __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "bottom-top clear", __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { className: "bottom-item fl", __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "h1",
              { className: "logo", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { className: "", src: __webpack_require__(/*! assets/home/header/logo.svg */ "./src/assets/home/header/logo.svg"), alt: "", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "div",
              { className: "record", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
                },
                __self: this
              },
              "\xA9 2017-2018 INK.PRO"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "ul",
            { className: "about fl", __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              { style: { margin: "0 0 12px" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("About_Us")
            ),
            this.aboutList.map(function (item, index) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "li",
                { key: index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                  },
                  __self: _this3
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
                  { to: "/home/" + item.router + "/" + item.routerID, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    },
                    __self: _this3
                  },
                  item.title
                )
              );
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "ul",
            { className: "support fl", __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              { style: { margin: "0 0 12px" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Support")
            ),
            this.supportList.map(function (item, index) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "li",
                { key: index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  },
                  __self: _this3
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
                  { to: "/home/" + item.router + "/" + item.routerID, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 139
                    },
                    __self: _this3
                  },
                  item.title
                )
              );
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "ul",
            { className: "help fl", __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              { style: { margin: "0 0 12px" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Help_Center")
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 163
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                {
                  href: "https://inkex.zendesk.com/hc/" + this.zendeskLang + "/categories/360000676512-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98",
                  target: "_blank",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Common_Problems")
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 171
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                { onClick: this.toAPI, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("API")
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 174
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                {
                  href: "https://inkex.zendesk.com/hc/" + this.zendeskLang + "/categories/360000683011-%E6%96%B0%E6%89%8B%E6%8C%87%E5%AF%BC",
                  target: "_blank",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Novice_Guidance")
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 182
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                {
                  href: "https://inkex.zendesk.com/hc/" + this.zendeskLang + "/categories/360000676592-%E8%B4%B9%E7%8E%87%E6%A0%87%E5%87%86",
                  target: "_blank",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Rate_Description")
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "ul",
            { className: "msg fr", __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              { style: { margin: "0 0 12px" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 192
                },
                __self: this
              },
              "email@email.com"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              { style: { fontSize: 12 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 193
                },
                __self: this
              },
              "1550 Bryant Street STE 750 \u65E7\u91D1\u5C71\uFF0CCA 94103"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "ul",
            { className: "contact fr", __source: {
                fileName: _jsxFileName,
                lineNumber: 197
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              { style: { margin: "0 0 12px" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 198
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Contact_Us")
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 199
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                { href: "javascript:;", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
                  src: __webpack_require__(/*! assets/home/footer/icon_facebook.svg */ "./src/assets/home/footer/icon_facebook.svg"),
                  alt: "",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                { href: "javascript:;", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
                  style: { margin: "0 12px" },
                  src: __webpack_require__(/*! assets/home/footer/icon_twitter.svg */ "./src/assets/home/footer/icon_twitter.svg"),
                  alt: "",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                { href: "javascript:;", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: __webpack_require__(/*! assets/home/footer/icon_line.svg */ "./src/assets/home/footer/icon_line.svg"), alt: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                  },
                  __self: this
                })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", { style: { marginTop: 30 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { className: "link", __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "span",
            { className: "link-title", __source: {
                fileName: _jsxFileName,
                lineNumber: 221
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Link")
          ),
          this.frendShip.map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { key: index, href: item.url, target: "_blank", className: "link-name", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 227
                },
                __self: _this3
              },
              item.name
            );
          })
        )
      );
    }
  }]);

  return Bottom;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Bottom);

/***/ }),

/***/ "./src/utils/axios/messageCenter.js":
/*!******************************************!*\
  !*** ./src/utils/axios/messageCenter.js ***!
  \******************************************/
/*! exports provided: getInformation, getListInfo */
/*! exports used: getInformation, getListInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getListInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request__ = __webpack_require__(/*! ../request */ "./src/utils/request.js");


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var getInformation = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(modules, parent, lang, sort, page, size) {
    var url, rs;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = '/api/ui/info/' + modules + '/' + parent + '/' + lang + (sort ? '?sort=' + sort : '') + (page || page == 0 ? '?page=' + page : '') + (size ? '&size=' + size : '');
            _context.next = 3;
            return Object(__WEBPACK_IMPORTED_MODULE_1__request__["b" /* get */])(url);

          case 3:
            rs = _context.sent;
            return _context.abrupt('return', rs || {});

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getInformation(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

var getListInfo = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(modules, parent, lang) {
    var url, rs;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = '/api/ui/info/' + modules + '/?parent=' + parent + '&language=' + lang;
            _context2.next = 3;
            return Object(__WEBPACK_IMPORTED_MODULE_1__request__["b" /* get */])(url);

          case 3:
            rs = _context2.sent;
            return _context2.abrupt('return', rs || {});

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getListInfo(_x7, _x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

});
//# sourceMappingURL=25.chunk.js.map