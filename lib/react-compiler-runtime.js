// Mock for react/compiler-runtime — Sanity packages use React Compiler
// but our app runs React 18. This no-op satisfies the import.
'use strict'
exports.c = function(size) {
  return new Array(size)
}
