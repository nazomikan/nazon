/**
 * nazon.js / BSD licensed.
 * Copyright (c) 2011, @nazomikan all rights reserved.
 */

/*jslint devel: true, undef: false, newcap: false, nomen: true, maxerr: 50, indent: 4 */
/*global window */
(function (win) {
    'use strict';
    var app = {},
        _modules = {},
        _controllers = {};

    function debugConsole(msg, type) {
        switch (type) {
        case 1:
            msg = 'error: ' + msg;
            break;
        default:
            break;
        }

        if (console && console.log) {
            console.log(msg);
        } else {
            alert(msg);
        }
    }

    function _addModule(nameSpace, fn) {
        if (_modules.hasOwnProperty(nameSpace)) {
            debugConsole('[ ' + nameSpace  + ' ]  module is already registred');
        } else {
            _modules[nameSpace] = fn;
        }
    }

    function _require(nameSpace) {
        if (!_modules.hasOwnProperty(nameSpace)) {
            debugConsole('[ ' + nameSpace  + ' ]  module is not register', 1);
            return false;
        }
        return _modules[nameSpace];
    }

    function _registController(nameSpace, controller) {
        _controllers[nameSpace] = controller;
        controller();
    }

    app.lib = win.nazon  = {
        app         : app,
        controllers : _controllers,
        require     : _require,
        addModule   : _addModule,
        actionController: _registController
    };

}(window));
