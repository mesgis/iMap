/* This is the place to define your Web Map as a JSON object, if you do not want to do it in ArcGIS Online.
 See the following links for help and examples on defining a Web Map:
 http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#intro_webmap
 http://resources.arcgis.com/en/help/arcgis-web-map-json/

 ***
 To enable the ability for users to save or share their map, generate a GUID for the webmap and specify as an "id" property
 in the JSON objects "item" property.

 Can use this website to generate a GUID- http://www.guidgenerator.com/online-guid-generator.aspx

 Also, set an id property for each operational layer, to enable saving and sharing.  The id does not need to be a GUID, just unique.
 ***

 Two properties are required for the web map: "item" and "itemData".  See the first link above for an example

 {
     "item": {
        "id": "5caf4ec5-4d38-42fd-bc94-c7a1a1cf3ddb",
         "title":"Soil Survey Map of USA",
         "snippet": "Detailed description of data",
         "extent": [[-139.4916, 10.7191],[-52.392, 59.5199]]
     },
     "itemData": {
         "operationalLayers": [{
             "url": "http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/Soil_Survey_Map/MapServer",
             "visibility": true,
             "opacity": 0.75,
             "title": "Soil Survey Map",
             "id": "204d94c9b1374de9a21574c9efa31164"
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
     }
 }
 */
{
"item": {
    "id": "08409d26-342a-462b-836a-ddf7a4f46c2d",
        "title":"DFIRM",
        "snippet": "Detailed description of data",
        "extent": [[-81.1889,37.3287],[-73.7512, 40.2272]]
}, "itemData": {
    "operationalLayers": [{
    "url": "http://mesgisservices.com/ArcGIS/rest/services/MDE-DFIRM/DFIRM_Webmercator/MapServer",
    "id": "DFIRM_Watersheds_5207",
    "visibility": true,
    "opacity": 0.6,
    "title": "DFIRM_Watersheds",
    "layers": [{
      "id": 1,
      "popupInfo": {
        "title": "Within {Name} watershed",
        "fieldInfos": [
          {
            "fieldName": "OBJECTID",
            "label": "OBJECTID",
            "isEditable": true,
            "tooltip": "",
            "visible": false,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "TNMID",
            "label": "TNMID",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "MetaSource",
            "label": "MetaSource",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "SourceData",
            "label": "SourceData",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "SourceOrig",
            "label": "SourceOrig",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "SourceFeat",
            "label": "SourceFeat",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "LoadDate",
            "label": "LoadDate",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "GNIS_ID",
            "label": "GNIS_ID",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "AreaAcres",
            "label": "AreaAcres",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "AreaSqKm",
            "label": "AreaSqKm",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "States",
            "label": "States",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "HUC12",
            "label": "HUC12",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "Name",
            "label": "Name",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "HUType",
            "label": "HUType",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "HUMod",
            "label": "HUMod",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "ToHUC",
            "label": "ToHUC",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "NonContrib",
            "label": "NonContrib",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "NonContr_1",
            "label": "NonContr_1",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "Shape",
            "label": "Shape",
            "isEditable": true,
            "tooltip": "",
            "visible": false,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "Shape.area",
            "label": "Shape.area",
            "isEditable": true,
            "tooltip": "",
            "visible": false,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "Shape.len",
            "label": "Shape.len",
            "isEditable": true,
            "tooltip": "",
            "visible": false,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          }
        ],
        "description": "<a href=\"http://mesgis.com/dfirm_ddt/{HUC12}.zip\" target=\"_blank\">Click here to download data<\/a>\n        ",
        "showAttachments": true,
        "mediaInfos": []
      }
    },
    {
      "id": 2,
      "popupInfo": {
        "title": "Within {Name} watershed",
        "fieldInfos": [
          {
            "fieldName": "OBJECTID",
            "label": "OBJECTID",
            "isEditable": true,
            "tooltip": "",
            "visible": false,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "TNMID",
            "label": "TNMID",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "MetaSource",
            "label": "MetaSource",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "SourceData",
            "label": "SourceData",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "SourceOrig",
            "label": "SourceOrig",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "SourceFeat",
            "label": "SourceFeat",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "LoadDate",
            "label": "LoadDate",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "GNIS_ID",
            "label": "GNIS_ID",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "AreaAcres",
            "label": "AreaAcres",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "AreaSqKm",
            "label": "AreaSqKm",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "States",
            "label": "States",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "HUC12",
            "label": "HUC12",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "Name",
            "label": "Name",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "HUType",
            "label": "HUType",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "HUMod",
            "label": "HUMod",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "ToHUC",
            "label": "ToHUC",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "NonContrib",
            "label": "NonContrib",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "NonContr_1",
            "label": "NonContr_1",
            "isEditable": true,
            "tooltip": "",
            "visible": true,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "Shape",
            "label": "Shape",
            "isEditable": true,
            "tooltip": "",
            "visible": false,
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "Shape.area",
            "label": "Shape.area",
            "isEditable": true,
            "tooltip": "",
            "visible": false,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          },
          {
            "fieldName": "Shape.len",
            "label": "Shape.len",
            "isEditable": true,
            "tooltip": "",
            "visible": false,
            "format": {
              "places": 2,
              "digitSeparator": true
            },
            "stringFieldOption": "textbox"
          }
        ],
        "description": "<a href=\"http://mesgis.com/dfirm_ddt/{HUC12}.zip\" target=\"_blank\">Click here to download data<\/a>\n        ",
        "showAttachments": true,
        "mediaInfos": []
      }
    }]
  }],
  "baseMap": {
    "baseMapLayers": [
      {
        "id": "World_Light_Gray_Base_274",
        "opacity": 1,
        "visibility": true,
        "url": "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer"
      },
      {
        "id": "World_Light_Gray_Reference_9725",
        "isReference": true,
        "opacity": 1,
        "visibility": true,
        "url": "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer"
      }
    ],
    "title": "World_Light_Gray_Base"
  },
    "version": "2.3"
}
}