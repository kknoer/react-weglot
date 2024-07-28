"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWeglot = void 0;
var react_1 = require("react");
var useWeglot = function (api_key, defaultLanguage) {
    if (defaultLanguage === void 0) { defaultLanguage = 'en'; }
    var _a = (0, react_1.useState)(defaultLanguage), language = _a[0], setLanguage = _a[1];
    (0, react_1.useEffect)(function () {
        var script = document.createElement('script');
        script.src = 'https://cdn.weglot.com/weglot.min.js';
        script.async = true;
        document.body.appendChild(script);
        var x = setInterval(function () {
            // @ts-ignore
            Weglot.initialize({ api_key: api_key });
            //@ts-ignore
            if (Weglot.initialized) {
                //@ts-ignore
                Weglot.switchTo(language);
                clearInterval(x);
            }
        }, 500);
        return function () {
            document.body.removeChild(script);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        // @ts-ignore
        if (window.Weglot) {
            // @ts-ignore
            if (window.Weglot.initialized) {
                // @ts-ignore
                window.Weglot.switchTo(language);
            }
        }
    }, [language]);
    return [language, setLanguage];
};
exports.useWeglot = useWeglot;
//# sourceMappingURL=weglot.js.map