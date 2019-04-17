webpackJsonp([28],{

/***/ "./src/assets/common/icon-submitform.svg":
/*!***********************************************!*\
  !*** ./src/assets/common/icon-submitform.svg ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon-submitform.ff7342ed.svg";

/***/ }),

/***/ "./src/assets/home/header/funds.svg":
/*!******************************************!*\
  !*** ./src/assets/home/header/funds.svg ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/funds.ecebe2c5.svg";

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

/***/ "./src/assets/home/header/user.svg":
/*!*****************************************!*\
  !*** ./src/assets/home/header/user.svg ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/user.d046c746.svg";

/***/ }),

/***/ "./src/components/home/header/index.js":
/*!*********************************************!*\
  !*** ./src/components/home/header/index.js ***!
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_intl_universal__ = __webpack_require__(/*! react-intl-universal */ "./node_modules/react-intl-universal/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_intl_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils_cookie_js__ = __webpack_require__(/*! utils/cookie.js */ "./src/utils/cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils_axios_common__ = __webpack_require__(/*! utils/axios/common */ "./src/utils/axios/common.js");

var _jsxFileName = '/Users/zhangzhaohuan/work/project/INKEX-FE/src/components/home/header/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var confirm = __WEBPACK_IMPORTED_MODULE_2_antd__["l" /* Modal */].confirm;

var Top = function (_Component) {
  _inherits(Top, _Component);

  function Top(props) {
    var _this2 = this;

    _classCallCheck(this, Top);

    var _this = _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));

    _this.changeLanguage = function (e) {
      // 相同语种不切换
      if (e !== Object(__WEBPACK_IMPORTED_MODULE_5_utils_cookie_js__["a" /* getCookie */])('lang')) {
        Object(__WEBPACK_IMPORTED_MODULE_5_utils_cookie_js__["b" /* setCookie */])('lang', e, 7);
        window.location.reload();
      }
    };

    _this.login = function () {
      var history = _this.props.history;

      history.push('/login');
    };

    _this.register = function () {
      var history = _this.props.history;

      history.push('/register');
    };

    _this.logout = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_6_utils_axios_common__["g" /* logout */])();

            case 2:
              res = _context.sent;

              if (res.status === 200) {
                localStorage.setItem('isLogin', false);
                window.location.reload();
              } else {
                //退出登陆失败
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.showConfirm = function () {
      var that = _this;
      confirm({
        title: __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Verify_Logout'),
        onOk: function onOk() {
          that.logout();
        }
      });
    };

    _this.toAPI = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(e) {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_6_utils_axios_common__["j" /* userInfo */])();

              case 2:
                res = _context2.sent;

                if (res.data) {
                  _this.props.history.push('/home/user/api');
                } else {
                  window.open('https://inkex.zendesk.com/hc/' + _this.zendeskLang + '/categories/360000736411-%E6%8E%A5%E5%85%A5api');
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.renderHelp = function () {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'ul',
        { style: { minWidth: 81 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: _this2
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { style: { marginTop: 3 }, className: 'helpcenter-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://inkex.zendesk.com/hc/' + _this.zendeskLang + '/categories/360000676512-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98', target: '_blank', __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'helpcenter-item-span helpcenter-1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Common_Problems')
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { className: 'helpcenter-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { onClick: _this.toAPI, __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'helpcenter-item-span helpcenter-2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('API')
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { className: 'helpcenter-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://inkex.zendesk.com/hc/' + _this.zendeskLang + '/categories/360000683011-%E6%96%B0%E6%89%8B%E6%8C%87%E5%AF%BC', target: '_blank', __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'helpcenter-item-span helpcenter-3', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Novice_Guidance')
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { style: { marginBottom: 0 }, className: 'helpcenter-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: 'https://inkex.zendesk.com/hc/' + _this.zendeskLang + '/categories/360000676592-%E8%B4%B9%E7%8E%87%E6%A0%87%E5%87%86"', target: '_blank', __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'helpcenter-item-span helpcenter-4', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Rate_Description')
            )
          )
        )
      );
    };

    _this.renderPersonal = function () {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'ul',
        { style: { minWidth: 81 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: _this2
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { className: 'personal-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
            { to: '/home/user', __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'personal-item-span item-1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 139
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('User_Personal_Center')
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { style: { margin: '8px 0' }, className: 'personal-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
            { to: '/home/user/security/index', __source: {
                fileName: _jsxFileName,
                lineNumber: 143
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'personal-item-span item-2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 144
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Security_Settings')
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { className: 'personal-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { onClick: _this.showConfirm, __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'personal-item-span item-3', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Logout')
            )
          )
        )
      );
    };

    _this.renderLang = function () {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'ul',
        { style: { minWidth: 30 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: _this2
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { className: 'language-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { onClick: function onClick() {
                return _this.changeLanguage('zh-CN');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'language-item-span', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 159
                },
                __self: _this2
              },
              '\u4E2D\u6587'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { className: 'language-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { onClick: function onClick() {
                return _this.changeLanguage('en-US');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'language-item-span', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 160
                },
                __self: _this2
              },
              'EN'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { className: 'language-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { onClick: function onClick() {
                return _this.changeLanguage('ko-KR');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'language-item-span', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 161
                },
                __self: _this2
              },
              '\uD55C\uAD6D\uC5B4'
            )
          )
        )
      );
    };

    _this.renderLoginStatus = function () {
      if (localStorage.getItem('isLogin') === 'true') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'is-login', __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            { style: { marginRight: '32px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 170
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: 'https://inkex.zendesk.com/hc/' + _this.zendeskLang + '/requests/new', target: '_blank', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 171
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { style: { marginRight: 8, marginTop: -2 }, src: __webpack_require__(/*! assets/common/icon-submitform.svg */ "./src/assets/common/icon-submitform.svg"), alt: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 172
                },
                __self: _this2
              }),
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('User_Order_Title')
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            { style: { marginRight: '32px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
              { to: '/home/funds', style: { color: '#fff' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { style: { marginRight: 8 }, src: __webpack_require__(/*! assets/home/header/funds.svg */ "./src/assets/home/header/funds.svg"), alt: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 178
                },
                __self: _this2
              }),
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Funds')
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["o" /* Popover */],
            {
              placement: 'bottom',
              content: _this.renderPersonal(),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 182
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { style: { marginRight: 28 }, src: __webpack_require__(/*! assets/home/header/user.svg */ "./src/assets/home/header/user.svg"), alt: '', __source: {
                fileName: _jsxFileName,
                lineNumber: 186
              },
              __self: _this2
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["o" /* Popover */],
            {
              placement: 'bottom',
              content: _this.renderLang(),
              trigger: 'click',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { style: { marginRight: 8 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 193
                },
                __self: _this2
              },
              _this.defaultLang
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], { type: 'down', __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              },
              __self: _this2
            })
          )
        );
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'un-login', __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Button */],
            { className: 'but_primary but_sign', onClick: _this.register, __source: {
                fileName: _jsxFileName,
                lineNumber: 200
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Register')
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Button */],
            { className: 'but_primary but_login', onClick: _this.login, __source: {
                fileName: _jsxFileName,
                lineNumber: 201
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Login')
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["o" /* Popover */],
            {
              placement: 'bottom',
              content: _this.renderLang(),
              trigger: 'click',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 208
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { style: { marginRight: 8 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 213
                },
                __self: _this2
              },
              _this.defaultLang
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], { type: 'down', __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              },
              __self: _this2
            })
          )
        );
      }
    };

    _this.defaultLang = '';
    _this.zendeskLang = '';
    return _this;
  }

  _createClass(Top, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!Object(__WEBPACK_IMPORTED_MODULE_5_utils_cookie_js__["a" /* getCookie */])('lang')) {
        var _lang = window.navigator.language;
        if (_lang === 'zh') _lang = 'zh-CN';
        Object(__WEBPACK_IMPORTED_MODULE_5_utils_cookie_js__["b" /* setCookie */])("lang", _lang);
      }
      var lang = Object(__WEBPACK_IMPORTED_MODULE_5_utils_cookie_js__["a" /* getCookie */])('lang');
      switch (lang) {
        case 'zh-CN':
        case 'zh':
          this.defaultLang = '中文';this.zendeskLang = 'zh-cn';break;
        case 'en-US':
          this.defaultLang = 'EN';this.zendeskLang = 'en-us';break;
        case 'ko-KR':
          this.defaultLang = '한국어';this.zendeskLang = 'ko';break;
        default:
          return;
      }
    }

    // 退出登录二次确认


    // 帮助中心

    // 个人设置

    // 语言设置

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState = function () {
        return;
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'top-main', __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
            { to: '/home', __source: {
                fileName: _jsxFileName,
                lineNumber: 230
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: '', src: __webpack_require__(/*! assets/home/header/logo.svg */ "./src/assets/home/header/logo.svg"), alt: '', __source: {
                fileName: _jsxFileName,
                lineNumber: 231
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'nav', __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 235
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 236
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
                { to: '/home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Home')
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 239
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
                { to: '/exchange', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Exchange')
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 240
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
                { to: '/home/notice', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Notice')
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'li',
              { className: 'helpcenter', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 241
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["o" /* Popover */],
                {
                  placement: 'bottom',
                  content: this.renderHelp(),
                  onClick: function onClick() {
                    window.open('https://inkex.zendesk.com/hc/' + _this3.zendeskLang);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  { style: { marginRight: 8 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 247
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get('Help_Center')
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], { type: 'down', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                  },
                  __self: this
                })
              )
            )
          )
        ),
        this.renderLoginStatus()
      );
    }
  }]);

  return Top;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["g" /* withRouter */])(Top));

/***/ })

});
//# sourceMappingURL=28.chunk.js.map