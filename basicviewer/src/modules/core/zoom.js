/**
 Creates an ESRI basemaps dijit.
 Also contains a function to recreate an overview map (apparently needed when basemap is switched).
 */
define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/Dialog", "dojo/ready", "dojo/dom-construct", "dojo/_base/lang", "dojo/topic", "./utilities/maphandler", "dijit/layout/ContentPane"
    , "dijit/Menu", "esri/dijit/BasemapGallery", "dijit/registry", "dojo/aspect" /*, "./custommenu"*/
    , "dijit/form/Button", "dojo/dom", "dojo/dom-construct"],
    function(declare, WidgetBase, Dialog, ready,  domConstruct, lang, topic, mapHandler, ContentPane, Menu, BasemapGallery, registry, aspect /*, custommenu*/
        , Button, dom, domConstruct){
        return declare([WidgetBase, Button], {
            // The ESRI map object to bind to the TOC. Set in constructor
            map: null,
            //The application configuration properties (originated as configOptions from app.js then overridden by AGO if applicable)
            AppConfig: null,

            //*** Create the basemap gallery
            constructor: function(args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this,args);
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;
            },
            onClick: function() {
                this.map.onClick = function (evt) {
                    var clickX = evt.mapPoint.x;
                    var clickY = evt.mapPoint.y;
                    var queryTask, query;
                    queryTask = new esri.tasks.QueryTask("http://mesgisservices.com/ArcGIS/rest/services/MDE-DFIRM/DFIRM_Webmercator/MapServer/13/");
                    query = new esri.tasks.Query();
                    query.returnGeometry = false;
                    query.spatialRel="esriSpatialRelIntersects";
                    query.geometry = evt.mapPoint;
                    query.geometryType="esriGeometryPoint";
                    query.inSR=102100;
                    queryTask.execute(query, processArray, errorClbk);

                    //on querytask success add the features
                    function processArray(featureSet) {
                        var intersect;
                        if (featureSet.features.length == 1) {
                            intersect = "true";
                        }
                        else{
                            intersect = "false";
                        };

                    };
                    //error message if querytask errors
                    function errorClbk(errorMsg) {
                        alert(errorMsg);
                    };

                    dfirmWindow = new Dialog({
                        title: "DFirm Panel",
                        style: "width: 700px"
                    });
                    var myX
                    var myMapDiv = dojo.create("div", { id: "mymap" });
                    dfirmWindow.set("content", myMapDiv);


                    var webmap = {};
                    webmap.item = {
                        "title":"Soil Survey Map of USA",
                        "snippet": "This map shows the Soil Survey Geographic (SSURGO) by the United States Department of Agriculture's Natural Resources Conservation Service.",
                        "extent": [[-139.4916, 10.7191],[-52.392, 59.5199]]
                    };

                    webmap.itemData = {
                        "operationalLayers": [{
                            "url": "http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/Soil_Survey_Map/MapServer",
                            "visibility": true,
                            "opacity": 0.75,
                            "title": "Soil Survey Map",
                            "itemId": "204d94c9b1374de9a21574c9efa31164"
                        }],
                        "baseMap": {
                            "baseMapLayers": [{
                                "opacity": 1,
                                "visibility": true,
                                "url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer"
                            },{
                                "isReference": true,
                                "opacity": 1,
                                "visibility": true,
                                "url": "http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer"
                            }],
                            "title": "World_Terrain_Base"
                        },
                        "version": "1.1"
                    };


                    var mapDeferred = esri.arcgis.utils.createMap(webmap, "mymap", {
                        mapOptions: {
                            slider: false
                        },

                        geometryServiceURL: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
                    });

                    mapDeferred.then(function(response) {
                        map = response.map;
                        var initExtent = new esri.geometry.Extent({"xmin":-13529153.240034927,"ymin":4665612.430933277,"xmax":-13281497.268391073,"ymax":4756113.872422882,"spatialReference":{"wkid":102100}});
                        map.setExtent(initExtent);
                        var layers = response.itemInfo.itemData.operationalLayers;

                        if(map.loaded){
                            initMap(layers);
                        } else{
                            dojo.connect(map,"onLoad",function(){
                                initMap(layers);
                            });
                        }
                    }, function(error){
                        console.log("Map creation failed: ", dojo.toJson(error));
                    });

                    function initMap(layers){
                        //add a scalebar
                        var scalebar = new esri.dijit.Scalebar({
                            map:map,
                            scalebarUnit: "english"
                        });
                    }

                    dfirmWindow.show();
                }

            }

        });
    });
