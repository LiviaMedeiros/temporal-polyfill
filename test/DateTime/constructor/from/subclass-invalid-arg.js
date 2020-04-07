// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.datetime.from
---*/

let called = false;

class MyDateTime extends Temporal.DateTime {
  constructor(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
    called = true;
    super(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
  }
}

assert.throws(RangeError, () => MyDateTime.from("-271821-04-19T00:00", { disambiguation: "reject" }));
assert.throws(RangeError, () => MyDateTime.from("+275760-09-14T00:00", { disambiguation: "reject" }));
assert.sameValue(called, false);
