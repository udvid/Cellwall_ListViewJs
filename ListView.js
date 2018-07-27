var Cw = Cw || {};
/**
 * ----------------------------------------------
 * ListView class
 * ----------------------------------------------
 * @param dataSource
 * @param template
 * @constructor
 */
Cw.ListView = function (dataSource, template) {
    this.DataSource = dataSource;
    this.Template = template;
};

Cw.ListView.prototype = {
    /**
     * ------------------------------------------
     * Replace template tags with variable data
     * ------------------------------------------
     * @param content
     * @param data
     * @returns {*}
     * @constructor
     */
    Replace: function (content, data) {
        var newContent = content;
        Object.keys(data).forEach(function(key) {
            newContent = newContent.replace("[@" + key + "]", data[key]);
        });
        return newContent;
    },

    /**
     * --------------------------------------------
     * Create a simple list
     * --------------------------------------------
     * @returns {*}
     * @constructor
     */
    Create: function () {
        return this.Replace(this.Template, this.DataSource);
    },

    /**
     * ---------------------------------------------
     * Create a list for database resultset
     * ---------------------------------------------
     * @returns {string}
     * @constructor
     */
    CreateBlock: function () {
        var output = "";
        for (var i = 0; i < this.DataSource.length; i++)
        {
            output += this.Replace(this.Template, this.DataSource[i]);
        }
        return output;
    }
};
