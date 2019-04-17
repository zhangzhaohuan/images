webpackJsonp([30],{

/***/ "./src/assets/funds/icon_finance_gray.svg":
/*!************************************************!*\
  !*** ./src/assets/funds/icon_finance_gray.svg ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon_finance_gray.c69dbc6d.svg";

/***/ }),

/***/ "./src/components/funds/index.js":
/*!***************************************!*\
  !*** ./src/components/funds/index.js ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Funds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_intl_universal__ = __webpack_require__(/*! react-intl-universal */ "./node_modules/react-intl-universal/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_intl_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_privateRouter_privateRoute__ = __webpack_require__(/*! ../common/privateRouter/privateRoute */ "./src/components/common/privateRouter/privateRoute.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_MyLoadingComponent__ = __webpack_require__(/*! ../../utils/MyLoadingComponent */ "./src/utils/MyLoadingComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loadable__);
var _jsxFileName = "/Users/zhangzhaohuan/work/project/INKEX-FE/src/components/funds/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 资金管理
 */






// 按需加载



var AccountBalance = __WEBPACK_IMPORTED_MODULE_6_react_loadable___default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(22).then(__webpack_require__.bind(null, /*! ./accountBalance */ "./src/components/funds/accountBalance/index.js"));
  },
  loading: __WEBPACK_IMPORTED_MODULE_5__utils_MyLoadingComponent__["a" /* MyLoadingComponent */]
});
var Deposit = __WEBPACK_IMPORTED_MODULE_6_react_loadable___default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, /*! ./deposit */ "./src/components/funds/deposit/index.js"));
  },
  loading: __WEBPACK_IMPORTED_MODULE_5__utils_MyLoadingComponent__["a" /* MyLoadingComponent */]
});
var Withdraw = __WEBPACK_IMPORTED_MODULE_6_react_loadable___default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, /*! ./withdraw */ "./src/components/funds/withdraw/index.js"));
  },
  loading: __WEBPACK_IMPORTED_MODULE_5__utils_MyLoadingComponent__["a" /* MyLoadingComponent */]
});
var FundsRecords = __WEBPACK_IMPORTED_MODULE_6_react_loadable___default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(26).then(__webpack_require__.bind(null, /*! ./fundsRecords */ "./src/components/funds/fundsRecords/index.js"));
  },
  loading: __WEBPACK_IMPORTED_MODULE_5__utils_MyLoadingComponent__["a" /* MyLoadingComponent */]
});
var AddressManage = __WEBPACK_IMPORTED_MODULE_6_react_loadable___default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, /*! ./addressManage */ "./src/components/funds/addressManage/index.js"));
  },
  loading: __WEBPACK_IMPORTED_MODULE_5__utils_MyLoadingComponent__["a" /* MyLoadingComponent */]
});

var Funds = function (_Component) {
  _inherits(Funds, _Component);

  function Funds() {
    _classCallCheck(this, Funds);

    return _possibleConstructorReturn(this, (Funds.__proto__ || Object.getPrototypeOf(Funds)).apply(this, arguments));
  }

  _createClass(Funds, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "content-main", __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "funds-menu", __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
              { to: "/home/funds", style: { color: "#fff" }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                style: { marginRight: 8 },
                src: __webpack_require__(/*! assets/funds/icon_finance_gray.svg */ "./src/assets/funds/icon_finance_gray.svg"),
                alt: "",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Funds")
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ul",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                { to: "/home/funds/account", activeClassName: "selected", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Account_Balance")
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], { type: "arrow-right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                { to: "/home/funds/deposit", activeClassName: "selected", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Funds_Deposit")
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], { type: "arrow-right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                { to: "/home/funds/withdraw", activeClassName: "selected", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Funds_Withdraw")
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], { type: "arrow-right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                {
                  to: "/home/funds/funds-records",
                  activeClassName: "selected",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Funds_Records")
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], { type: "arrow-right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                {
                  to: "/home/funds/address-manage",
                  activeClassName: "selected",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_3_react_intl_universal___default.a.get("Address_Management")
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], { type: "arrow-right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  },
                  __self: this
                })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "funds-content", __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["f" /* Switch */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_privateRouter_privateRoute__["a" /* default */], {
              path: "/home/funds/account",
              component: AccountBalance,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_privateRouter_privateRoute__["a" /* default */], { path: "/home/funds/deposit", component: Deposit, __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_privateRouter_privateRoute__["a" /* default */], { path: "/home/funds/withdraw", component: Withdraw, __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_privateRouter_privateRoute__["a" /* default */], {
              path: "/home/funds/funds-records",
              component: FundsRecords,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_privateRouter_privateRoute__["a" /* default */], {
              path: "/home/funds/address-manage",
              component: AddressManage,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Redirect */], { from: "/home/funds", to: "/home/funds/account", __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Funds;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

});
//# sourceMappingURL=30.chunk.js.map