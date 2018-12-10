'use strict';
/**
 * Get type
 * @param {any} arg Need to get the type of data
 * @returns {object}
 */
let t,
    type = arg => (t = typeof arg) === "object" ? {}.toString.call(arg).slice(8,-1).toLowerCase() : t,
    name = arg => (t = type(arg)) === "function" ? arg.name : t === "undefined" ? undefined : arg.constructor.name;
module.exports = arg => {return {type:type(arg),name:name(arg)}};