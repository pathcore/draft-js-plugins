'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var EditorUtils = _interopDefault(require('draft-js-plugins-utils'));
var PropTypes = _interopDefault(require('prop-types'));
var clsx = _interopDefault(require('clsx'));
var prependHttp = _interopDefault(require('prepend-http'));
var tlds = _interopDefault(require('tlds'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  entityKey: PropTypes.string,
  getEditorState: PropTypes.func.isRequired
};

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      entityKey = _ref.entityKey,
      getEditorState = _ref.getEditorState,
      target = _ref.target;
  var entity = getEditorState().getCurrentContent().getEntity(entityKey);
  var entityData = entity ? entity.get('data') : undefined;
  var href = entityData && entityData.url || undefined;
  return React__default.createElement("a", {
    className: className,
    title: href,
    href: href,
    target: target,
    rel: "noopener noreferrer"
  }, children);
};

Link.propTypes = propTypes;

/* eslint-disable  arrow-body-style */
var v4 = '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}';
var v6seg = '[0-9a-fA-F]{1,4}';
var v6 = "\n(\n(?:".concat(v6seg, ":){7}(?:").concat(v6seg, "|:)|                                // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:").concat(v6seg, ":){6}(?:").concat(v4, "|:").concat(v6seg, "|:)|                         // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:").concat(v6seg, ":){5}(?::").concat(v4, "|(:").concat(v6seg, "){1,2}|:)|                 // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:").concat(v6seg, ":){4}(?:(:").concat(v6seg, "){0,1}:").concat(v4, "|(:").concat(v6seg, "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:").concat(v6seg, ":){3}(?:(:").concat(v6seg, "){0,2}:").concat(v4, "|(:").concat(v6seg, "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:").concat(v6seg, ":){2}(?:(:").concat(v6seg, "){0,3}:").concat(v4, "|(:").concat(v6seg, "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:").concat(v6seg, ":){1}(?:(:").concat(v6seg, "){0,4}:").concat(v4, "|(:").concat(v6seg, "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::((?::").concat(v6seg, "){0,5}:").concat(v4, "|(?::").concat(v6seg, "){1,7}|:))           // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(%[0-9a-zA-Z]{1,})?                                           // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

var ipRegex = function ipRegex(opts) {
  return opts && opts.exact ? new RegExp("(?:^".concat(v4, "$)|(?:^").concat(v6, "$)")) : new RegExp("(?:".concat(v4, ")|(?:").concat(v6, ")"), 'g');
};

ipRegex.v4 = function (opts) {
  return opts && opts.exact ? new RegExp("^".concat(v4, "$")) : new RegExp(v4, 'g');
};

ipRegex.v6 = function (opts) {
  return opts && opts.exact ? new RegExp("^".concat(v6, "$")) : new RegExp(v6, 'g');
};

var urlRegex = (function (_opts) {
  var opts = Object.assign({
    strict: true
  }, _opts);
  var protocol = "(?:(?:[a-z]+:)?//)".concat(opts.strict ? '' : '?');
  var auth = '(?:\\S+(?::\\S*)?@)?';
  var ip = ipRegex.v4().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.".concat(opts.strict ? "(?:[a-z\\u00a1-\\uffff]{2,})" : "(?:".concat(tlds.sort(function (a, b) {
    return b.length - a.length;
  }).join('|'), ")"), ")\\.?");
  var port = '(?::\\d{2,5})?';
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:localhost|").concat(ip, "|").concat(host).concat(domain).concat(tld, ")").concat(port).concat(path);
  return opts.exact ? new RegExp("(?:^".concat(regex, "$)"), 'i') : new RegExp(regex, 'ig');
});

var mailRegex = (function () {
  return /^((mailto:[^<>()/[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
});

var URLUtils = {
  isUrl: function isUrl(text) {
    return urlRegex().test(text);
  },
  isMail: function isMail(text) {
    return mailRegex().test(text);
  },
  normaliseMail: function normaliseMail(email) {
    if (email.toLowerCase().startsWith('mailto:')) {
      return email;
    }

    return "mailto:".concat(email);
  },
  normalizeUrl: function normalizeUrl(url) {
    return prependHttp(url);
  }
};

var AddLinkForm =
/*#__PURE__*/
function (_Component) {
  _inherits(AddLinkForm, _Component);

  function AddLinkForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddLinkForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddLinkForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: '',
      isInvalid: false
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (node) {
      _this.input = node;
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var value = _ref.target.value;
      var nextState = {
        value: value
      };

      if (_this.state.isInvalid && URLUtils.isUrl(URLUtils.normalizeUrl(value))) {
        nextState.isInvalid = false;
      }

      _this.setState(nextState);
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      return _this.props.onOverrideContent(undefined);
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();

        _this.submit();
      } else if (e.key === 'Escape') {
        e.preventDefault();

        _this.onClose();
      }
    });

    return _this;
  }

  _createClass(AddLinkForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.input.focus();
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this$props = this.props,
          getEditorState = _this$props.getEditorState,
          setEditorState = _this$props.setEditorState;
      var url = this.state.value;

      if (!URLUtils.isMail(URLUtils.normaliseMail(url))) {
        url = URLUtils.normalizeUrl(url);

        if (!URLUtils.isUrl(url)) {
          this.setState({
            isInvalid: true
          });
          return;
        }
      } else {
        url = URLUtils.normaliseMail(url);
      }

      setEditorState(EditorUtils.createLinkAtSelection(getEditorState(), url));
      this.input.blur();
      this.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          placeholder = _this$props2.placeholder;
      var _this$state = this.state,
          value = _this$state.value,
          isInvalid = _this$state.isInvalid;
      var className = isInvalid ? clsx(theme.input, theme.inputInvalid) : theme.input;
      return React__default.createElement("input", {
        className: className,
        onBlur: this.onClose,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        placeholder: placeholder,
        ref: this.onRef,
        type: "text",
        value: value
      });
    }
  }]);

  return AddLinkForm;
}(React.Component);

_defineProperty(AddLinkForm, "propTypes", {
  getEditorState: PropTypes.func.isRequired,
  setEditorState: PropTypes.func.isRequired,
  onOverrideContent: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  placeholder: PropTypes.string
});

_defineProperty(AddLinkForm, "defaultProps", {
  placeholder: 'Enter a URL and press enter'
});

var LinkButton =
/*#__PURE__*/
function (_Component) {
  _inherits(LinkButton, _Component);

  function LinkButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LinkButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LinkButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onAddLinkClick", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var _this$props = _this.props,
          ownTheme = _this$props.ownTheme,
          placeholder = _this$props.placeholder,
          onOverrideContent = _this$props.onOverrideContent;

      var content = function content(props) {
        return React__default.createElement(AddLinkForm, _extends({}, props, {
          placeholder: placeholder,
          theme: ownTheme
        }));
      };

      onOverrideContent(content);
    });

    return _this;
  }

  _createClass(LinkButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          onRemoveLinkAtSelection = _this$props2.onRemoveLinkAtSelection;
      var hasLinkSelected = !!this.props.getEditorState && EditorUtils.hasEntity(this.props.store.getEditorState(), 'LINK');
      var className = hasLinkSelected ? clsx(theme.button, theme.active) : theme.button;
      return React__default.createElement("div", {
        className: theme.buttonWrapper,
        onMouseDown: this.onMouseDown
      }, React__default.createElement("button", {
        className: className,
        onClick: hasLinkSelected ? onRemoveLinkAtSelection : this.onAddLinkClick,
        type: "button"
      }, React__default.createElement("svg", {
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg"
      }, React__default.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      }), React__default.createElement("path", {
        d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
      }))));
    }
  }]);

  return LinkButton;
}(React.Component);

_defineProperty(LinkButton, "propTypes", {
  placeholder: PropTypes.string,
  store: PropTypes.object.isRequired,
  ownTheme: PropTypes.object.isRequired,
  onRemoveLinkAtSelection: PropTypes.func.isRequired
});

var matchesEntityType = function matchesEntityType(type) {
  return type === 'LINK';
};
function strategy(contentBlock, cb, contentState) {
  if (!contentState) return;
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && matchesEntityType(contentState.getEntity(entityKey).getType());
  }, cb);
}

var defaultTheme = {
  input: "i1ory7x8",
  inputInvalid: "i1y3taou",
  link: "l8pem19"
};

var index = (function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$theme = config.theme,
      theme = _config$theme === void 0 ? defaultTheme : _config$theme,
      placeholder = config.placeholder,
      Link$1 = config.Link,
      linkTarget = config.linkTarget;
  var store = {
    getEditorState: undefined,
    setEditorState: undefined
  };

  var DecoratedDefaultLink = function DecoratedDefaultLink(props) {
    return React__default.createElement(Link, _extends({}, props, {
      className: theme.link,
      target: linkTarget
    }));
  };

  var DecoratedLinkButton = function DecoratedLinkButton(props) {
    return React__default.createElement(LinkButton, _extends({}, props, {
      ownTheme: theme,
      store: store,
      placeholder: placeholder,
      onRemoveLinkAtSelection: function onRemoveLinkAtSelection() {
        return store.setEditorState(EditorUtils.removeLinkAtSelection(store.getEditorState()));
      }
    }));
  };

  return {
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    decorators: [{
      strategy: strategy,
      matchesEntityType: matchesEntityType,
      component: Link$1 || DecoratedDefaultLink
    }],
    LinkButton: DecoratedLinkButton
  };
});

exports.default = index;
