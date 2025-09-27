
if (typeof gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes !== "undefined") {
  gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes = {};
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects4= [];


gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))) == (( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) + 1)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3[i].setHeight((Number(eventsFunctionContext.getArgument("TileSize")) || 0) * Math.max(1, (Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0)));
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))) == (( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) + 1)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2[i].setWidth((Number(eventsFunctionContext.getArgument("TileSize")) || 0) * Math.max(1, (Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0)));
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))) == (( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) - 1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3[i].setWidth((Number(eventsFunctionContext.getArgument("TileSize")) || 0) * Math.max(1, (Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0)));
}
}

{ //Subevents
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))) == (( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) - 1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2[i].setHeight((Number(eventsFunctionContext.getArgument("TileSize")) || 0) * Math.max(1, (Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0)));
}
}

{ //Subevents
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2[i].setHeight((Number(eventsFunctionContext.getArgument("TileSize")) || 0));
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2[i].setWidth((Number(eventsFunctionContext.getArgument("TileSize")) || 0));
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) > 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter").add(1);
}
}

}


};gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.func = function(runtimeScene, HallwayObject, PathfinderObject, PathfindingBehavior, TileSize, HallwayWidth, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"HallwayObject": HallwayObject
, "PathfinderObject": PathfinderObject
},
  _objectArraysMap: {
"HallwayObject": gdjs.objectsListsToArray(HallwayObject)
, "PathfinderObject": gdjs.objectsListsToArray(PathfinderObject)
},
  _behaviorNamesMap: {
"PathfindingBehavior": PathfindingBehavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DungeonGenerator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DungeonGenerator"),
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
if (argName === "TileSize") return TileSize;
if (argName === "HallwayWidth") return HallwayWidth;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects4.length = 0;

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects4.length = 0;


return;
}

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.registeredGdjsCallbacks = [];