
if (typeof gdjs.evtsExt__CurvedMovement__AddCubicCurve !== "undefined") {
  gdjs.evtsExt__CurvedMovement__AddCubicCurve.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__AddCubicCurve = {};


gdjs.evtsExt__CurvedMovement__AddCubicCurve.userFunc0x1541c40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const pathName = eventsFunctionContext.getArgument("PathName");
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;

let curvedPath = curvedPaths.get(pathName);
if (!curvedPath) {
    curvedPath = new gdjs.__curvedMovementExtension.CurvedPath();
    curvedPaths.set(pathName, curvedPath);
}

let firstControlX = eventsFunctionContext.getArgument("FirstControlX");
let firstControlY = eventsFunctionContext.getArgument("FirstControlY");
let secondControlX = eventsFunctionContext.getArgument("SecondControlX");
let secondControlY = eventsFunctionContext.getArgument("SecondControlY");
let destinationX = eventsFunctionContext.getArgument("DestinationX");
let destinationY = eventsFunctionContext.getArgument("DestinationY");
let isRelative = eventsFunctionContext.getArgument("IsRelative");

curvedPath.addCurve(
    firstControlX,
    firstControlY,
    secondControlX,
    secondControlY,
    destinationX,
    destinationY,
    isRelative
);

};
gdjs.evtsExt__CurvedMovement__AddCubicCurve.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__AddCubicCurve.userFunc0x1541c40(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__CurvedMovement__AddCubicCurve.func = function(runtimeScene, PathName, FirstControlX, FirstControlY, SecondControlX, SecondControlY, DestinationX, DestinationY, IsRelative, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CurvedMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CurvedMovement"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PathName") return PathName;
if (argName === "FirstControlX") return FirstControlX;
if (argName === "FirstControlY") return FirstControlY;
if (argName === "SecondControlX") return SecondControlX;
if (argName === "SecondControlY") return SecondControlY;
if (argName === "DestinationX") return DestinationX;
if (argName === "DestinationY") return DestinationY;
if (argName === "IsRelative") return IsRelative;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__AddCubicCurve.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CurvedMovement__AddCubicCurve.registeredGdjsCallbacks = [];