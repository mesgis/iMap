/** A pattern to use for custom tools. Implements a floating pane with custom content (or an esri dijit) inside.
*  dojo/text! and xstyle/css! are used to dynamically load an HTML fragment and CSS sheet for this module. Update to your file names.
*  utilities/maphandler is a singleton object containing a reference to the map object and other properties/fxns- such as enabling/disabling popups.
*  A good help sample: http://dojotoolkit.org/documentation/tutorials/1.8/recipes/custom_widget/
*  If using an esri dijit, they should all be AMD-compatible. Help: http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#inside_dojo_amd
*
*  Note: It seems when working with map layer events (e.g. "onClick"),
*  in order to work with modules, dojo/aspect after() or before() functions should be used.
*/
define(["dojo/_base/declare", "dojo/dom-construct", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/on", "dijit/registry"
    , "dojo/text!./DDTDetails.html", "dojo/_base/lang"
    , "dojo/dom", "dojo/query", "dojox/charting/Chart", "dojox/charting/themes/Claro", ".././../../core/utilities/maphandler"
    , "dojox/charting/plot2d/Pie", "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MoveSlice", "xstyle/css!./ddt.css"],
    function (declare, domConstruct, WidgetBase, TemplatedMixin, on, registry, template, lang
                , dom, query, Chart, theme, mapHandler, PiePlot, Tooltip, MoveSlice) {
        return declare([WidgetBase, TemplatedMixin], {
            //*** Properties needed for this style of module
            // The template HTML fragment (as a string, created in dojo/text definition above)
            templateString: template
            // The CSS class to be applied to the root node in our template
			, baseClass: "ddtDiv"
            // The ESRI map object to bind to the TOC. Set in constructor
            , map: null
            // The source data for the chart. Manually set or make a request to a service for the data in the constructor
            , chartData: null

            //*** Creates the floating pane. Should be included in your module and be re-usable without modification (if using floating pane)
            , constructor: function (args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this, args);
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;

            }

            //The widget has been added to the DOM, though not visible yet. This is the recommended place to do most of the module's work
            , postCreate: function () {
                this.inherited(arguments);
            }

            /* A standard module event handler. In the postcreate and startup handlers,
            * you can assume the module has been created.  You don't need to add a handler function if you are not writing code in it.
            */
            , startup: function () {
                this.inherited(arguments);

            }
        });
    });