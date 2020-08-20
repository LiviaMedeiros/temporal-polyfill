// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.date.prototype.getfields
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Temporal.Date.prototype.getFields,
  "function",
  "`typeof Date.prototype.getFields` is `function`"
);

verifyProperty(Temporal.Date.prototype, "getFields", {
  writable: true,
  enumerable: false,
  configurable: true,
});
