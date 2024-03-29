import { r as reactExports, g as getDefaultExportFromCjs } from './index-56dc948b.js';

var jsxRuntime$2 = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}var Fragment = reactJsxRuntime_production_min.Fragment=l;var jsx = reactJsxRuntime_production_min.jsx=q;var jsxs = reactJsxRuntime_production_min.jsxs=q;

var jsxRuntime = jsxRuntime$2.exports;

'use strict';

if ("production" === 'production') {
  jsxRuntime$2.exports = reactJsxRuntime_production_min;
} else {
  module.exports = require('./cjs/react-jsx-runtime.development.js');
}

var jsxRuntimeExports = jsxRuntime$2.exports;
const jsxRuntime$1 = /*@__PURE__*/getDefaultExportFromCjs(jsxRuntimeExports);

const Button = ({ text }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: text });
};

export { Button };
//# sourceMappingURL=index-875c99e6.js.map
