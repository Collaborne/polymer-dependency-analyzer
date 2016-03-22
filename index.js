'use strict';

const hydrolysis = require('hydrolysis');
const fs = require('fs');
const path = require('path');

/**
 * Options
 *
 * @typedef {Object} AnalyzerOptions
 * @property {string[]} endpoints
 * @property {string} destDir
 */

/**
 * Create the analyzer
 *
 * @constructor
 * @param {AnalyzerOptions} options options for the analyzer
 */
var analyzer = function(options) {
    this.endpoints = options.endpoints;
    this.outputDirectory = path.resolve(process.cwd(), options.destDir);
};

analyzer.prototype = {
    /**
     * Analyze the given endpoints, and return a Promise that resolves their dependencies
     *
     * @return
     */
    analyze: function() {
        // Grab the endpoints, analyze each of them, and then recurse through their dependencies ...
        var endpointAnalyses = this.endpoints.map(function(value) {
            return hydrolysis.Analyzer.analyze(value);
        });

        // XXX: How can we promise-ify the recursion through the dependencies?
    }
};

module.exports = analyzer;