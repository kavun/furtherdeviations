define(["handlebars"], function(Handlebars) {
  var buildMap = {};

  return {

    // http://requirejs.org/docs/plugins.html#apiload
    load: function (name, parentRequire, onload, config) {

      if (config.isBuild) {
        // Use node.js file system module to load the template.
        // Sorry, no Rhino support.
        var fs = nodeRequire("fs");
        var fsPath = config.dirBaseUrl + "/" + name + ".hbs";
        buildMap[name] = fs.readFileSync(fsPath).toString();
        onload();
      }
      else {
        // In browsers use the text-plugin to the load template. This way we
        // don't have to deal with ajax stuff
        parentRequire(["text!" + name + ".hbs"], function(raw) {
          // Just return the compiled template
          onload(Handlebars.compile(raw));
        });
      }

    },

    // http://requirejs.org/docs/plugins.html#apiwrite
    write: function (pluginName, name, write) {
      var compiled = Handlebars.precompile(buildMap[name]);
      // Write out precompiled version of the template function as AMD
      // definition.
      write(
        "define('hbs!" + name + "', ['handlebars'], function(Handlebars){ \n" +
          "return Handlebars.template(" + compiled.toString() + ");\n" +
        "});\n"
      );
    }

  };
});
