'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var draftJs = require('draft-js');
var ReactDOM = _interopDefault(require('react-dom'));
var draftJsButtons = require('draft-js-buttons');

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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

var getDisplayName = function getDisplayName(WrappedComponent) {
  var component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

var createDecorator = (function (_ref) {
  var store = _ref.store;
  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      _inherits(BlockAlignmentDecorator, _Component);

      function BlockAlignmentDecorator() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, BlockAlignmentDecorator);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BlockAlignmentDecorator)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
          if (_this.props.blockProps.isFocused && _this.props.blockProps.isCollapsedSelection) {
            // TODO figure out if and how to achieve this without fetching the DOM node
            // eslint-disable-next-line react/no-find-dom-node
            var blockNode = ReactDOM.findDOMNode(_assertThisInitialized(_this));
            var boundingRect = blockNode.getBoundingClientRect();
            store.updateItem('setAlignment', _this.props.blockProps.setAlignment);
            store.updateItem('alignment', _this.props.blockProps.alignment);
            store.updateItem('boundingRect', boundingRect);
            store.updateItem('visibleBlock', _this.props.block.getKey()); // Only set visibleBlock to null in case it's the current one. This is important
            // in case the focus directly switches from one block to the other. Then the
            // Alignment tool should not be hidden, but just moved.
          } else if (store.getItem('visibleBlock') === _this.props.block.getKey()) {
            store.updateItem('visibleBlock', null);
          }
        });

        return _this;
      }

      _createClass(BlockAlignmentDecorator, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          // Set visibleBlock to null if the block is deleted
          store.updateItem('visibleBlock', null);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              blockProps = _this$props.blockProps,
              style = _this$props.style,
              elementProps = _objectWithoutProperties(_this$props, ["blockProps", "style"]);

          var alignment = blockProps.alignment;
          var newStyle = style;

          if (alignment === 'left') {
            newStyle = _objectSpread2({}, style, {
              "float": 'left'
            });
          } else if (alignment === 'right') {
            newStyle = _objectSpread2({}, style, {
              "float": 'right'
            });
          } else if (alignment === 'center') {
            newStyle = _objectSpread2({}, style, {
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block'
            });
          }

          return React__default.createElement(WrappedComponent, _extends({}, elementProps, {
            blockProps: blockProps,
            style: newStyle
          }));
        }
      }]);

      return BlockAlignmentDecorator;
    }(React.Component), _defineProperty(_class, "displayName", "Alignment(".concat(getDisplayName(WrappedComponent), ")")), _defineProperty(_class, "WrappedComponent", WrappedComponent.WrappedComponent || WrappedComponent), _temp;
  };
});

var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');

  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

var AlignmentTool =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AlignmentTool, _React$Component);

  function AlignmentTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AlignmentTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AlignmentTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      position: {},
      alignment: null
    });

    _defineProperty(_assertThisInitialized(_this), "onVisibilityChanged", function (visibleBlock) {
      setTimeout(function () {
        var position;

        var boundingRect = _this.props.store.getItem('boundingRect');

        if (visibleBlock) {
          var relativeParent = getRelativeParent(_this.toolbar.parentElement);
          var toolbarHeight = _this.toolbar.clientHeight;
          var relativeRect = relativeParent ? relativeParent.getBoundingClientRect() : document.body.getBoundingClientRect();
          position = {
            top: boundingRect.top - relativeRect.top - toolbarHeight,
            left: boundingRect.left - relativeRect.left + boundingRect.width / 2,
            transform: 'translate(-50%) scale(1)',
            transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
            visibility: 'hidden'
          };
        } else {
          position = {
            transform: 'translate(-50%) scale(0)',
            visibility: 'visible'
          };
        }

        var alignment = _this.props.store.getItem('alignment') || 'default';

        _this.setState({
          alignment: alignment,
          position: position
        });
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "onAlignmentChange", function (alignment) {
      _this.setState({
        alignment: alignment
      });
    });

    return _this;
  }

  _createClass(AlignmentTool, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.props.store.subscribeToItem('visibleBlock', this.onVisibilityChanged);
      this.props.store.subscribeToItem('alignment', this.onAlignmentChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.unsubscribeFromItem('visibleBlock', this.onVisibilityChanged);
      this.props.store.unsubscribeFromItem('alignment', this.onAlignmentChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var defaultButtons = [draftJsButtons.AlignBlockDefaultButton, draftJsButtons.AlignBlockLeftButton, draftJsButtons.AlignBlockCenterButton, draftJsButtons.AlignBlockRightButton];
      var theme = this.props.theme;
      return React__default.createElement("div", {
        tabIndex: -1,
        className: theme.alignmentToolStyles.alignmentTool,
        style: this.state.position,
        ref: function ref(toolbar) {
          _this2.toolbar = toolbar;
        }
      }, defaultButtons.map(function (Button, index) {
        return React__default.createElement(Button
        /* the index can be used here as the buttons list won't change */
        , {
          key: index,
          tabIndex: -1,
          alignment: _this2.state.alignment,
          setAlignment: _this2.props.store.getItem('setAlignment'),
          theme: theme.buttonStyles
        });
      }));
    }
  }]);

  return AlignmentTool;
}(React__default.Component);

var createStore = function createStore(initialState) {
  var state = initialState || {};
  var listeners = {};

  var subscribeToItem = function subscribeToItem(key, callback) {
    listeners[key] = listeners[key] || [];
    listeners[key].push(callback);
  };

  var unsubscribeFromItem = function unsubscribeFromItem(key, callback) {
    listeners[key] = listeners[key].filter(function (listener) {
      return listener !== callback;
    });
  };

  var updateItem = function updateItem(key, item) {
    state = _objectSpread2({}, state, _defineProperty({}, key, item));

    if (listeners[key]) {
      listeners[key].forEach(function (listener) {
        return listener(state[key]);
      });
    }
  };

  var getItem = function getItem(key) {
    return state[key];
  };

  return {
    subscribeToItem: subscribeToItem,
    unsubscribeFromItem: unsubscribeFromItem,
    updateItem: updateItem,
    getItem: getItem
  };
};

var buttonStyles = {
  buttonWrapper: "b1o3d9ef",
  button: "bqhx34k",
  active: "anjpt6t"
};
var alignmentToolStyles = {
  alignmentTool: "a104hbyz"
};
var defaultTheme = {
  buttonStyles: buttonStyles,
  alignmentToolStyles: alignmentToolStyles
};

var createSetAlignment = function createSetAlignment(contentBlock, _ref) {
  var getEditorState = _ref.getEditorState,
      setEditorState = _ref.setEditorState;
  return function (data) {
    var entityKey = contentBlock.getEntityAt(0);

    if (entityKey) {
      var editorState = getEditorState();
      var contentState = editorState.getCurrentContent();
      var newContentState = contentState.mergeEntityData(entityKey, data);
      setEditorState(draftJs.EditorState.forceSelection(draftJs.EditorState.push(editorState, newContentState, 'apply-entity'), editorState.getSelection()));
    }
  };
};

var index = (function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = createStore({
    isVisible: false
  });
  var _config$theme = config.theme,
      theme = _config$theme === void 0 ? defaultTheme : _config$theme;

  var DecoratedAlignmentTool = function DecoratedAlignmentTool(props) {
    return React__default.createElement(AlignmentTool, _extends({}, props, {
      store: store,
      theme: theme
    }));
  };

  return {
    initialize: function initialize(_ref2) {
      var getReadOnly = _ref2.getReadOnly,
          getEditorState = _ref2.getEditorState,
          setEditorState = _ref2.setEditorState;
      store.updateItem('getReadOnly', getReadOnly);
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    decorator: createDecorator({
      config: config,
      store: store
    }),
    blockRendererFn: function blockRendererFn(contentBlock, _ref3) {
      var getEditorState = _ref3.getEditorState,
          setEditorState = _ref3.setEditorState;
      var entityKey = contentBlock.getEntityAt(0);
      var contentState = getEditorState().getCurrentContent();
      var alignmentData = entityKey ? contentState.getEntity(entityKey).data : {};
      return {
        props: {
          alignment: alignmentData.alignment || 'default',
          setAlignment: createSetAlignment(contentBlock, {
            getEditorState: getEditorState,
            setEditorState: setEditorState
          })
        }
      };
    },
    AlignmentTool: DecoratedAlignmentTool
  };
});

exports.default = index;
