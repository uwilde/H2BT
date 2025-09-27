
gdjs.evtsExt__SineMovement__SineMovement = gdjs.evtsExt__SineMovement__SineMovement || {};

/**
 * Behavior generated from Sine Movement (deprecated)
 */
gdjs.evtsExt__SineMovement__SineMovement.SineMovement = class SineMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.HorizontalSpeed = behaviorData.HorizontalSpeed !== undefined ? behaviorData.HorizontalSpeed : Number("60") || 0;
    this._behaviorData.VerticalSpeed = behaviorData.VerticalSpeed !== undefined ? behaviorData.VerticalSpeed : Number("60") || 0;
    this._behaviorData.HorizontalDistance = behaviorData.HorizontalDistance !== undefined ? behaviorData.HorizontalDistance : Number("100") || 0;
    this._behaviorData.VerticalDistance = behaviorData.VerticalDistance !== undefined ? behaviorData.VerticalDistance : Number("0") || 0;
    this._behaviorData.CenterPointX = behaviorData.CenterPointX !== undefined ? behaviorData.CenterPointX : Number("0") || 0;
    this._behaviorData.CenterPointY = behaviorData.CenterPointY !== undefined ? behaviorData.CenterPointY : Number("0") || 0;
    this._behaviorData.SineProgressX = Number("0") || 0;
    this._behaviorData.SineProgressY = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.HorizontalSpeed !== newBehaviorData.HorizontalSpeed)
      this._behaviorData.HorizontalSpeed = newBehaviorData.HorizontalSpeed;
    if (oldBehaviorData.VerticalSpeed !== newBehaviorData.VerticalSpeed)
      this._behaviorData.VerticalSpeed = newBehaviorData.VerticalSpeed;
    if (oldBehaviorData.HorizontalDistance !== newBehaviorData.HorizontalDistance)
      this._behaviorData.HorizontalDistance = newBehaviorData.HorizontalDistance;
    if (oldBehaviorData.VerticalDistance !== newBehaviorData.VerticalDistance)
      this._behaviorData.VerticalDistance = newBehaviorData.VerticalDistance;
    if (oldBehaviorData.CenterPointX !== newBehaviorData.CenterPointX)
      this._behaviorData.CenterPointX = newBehaviorData.CenterPointX;
    if (oldBehaviorData.CenterPointY !== newBehaviorData.CenterPointY)
      this._behaviorData.CenterPointY = newBehaviorData.CenterPointY;
    if (oldBehaviorData.SineProgressX !== newBehaviorData.SineProgressX)
      this._behaviorData.SineProgressX = newBehaviorData.SineProgressX;
    if (oldBehaviorData.SineProgressY !== newBehaviorData.SineProgressY)
      this._behaviorData.SineProgressY = newBehaviorData.SineProgressY;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    HorizontalSpeed: this._behaviorData.HorizontalSpeed,
    VerticalSpeed: this._behaviorData.VerticalSpeed,
    HorizontalDistance: this._behaviorData.HorizontalDistance,
    VerticalDistance: this._behaviorData.VerticalDistance,
    CenterPointX: this._behaviorData.CenterPointX,
    CenterPointY: this._behaviorData.CenterPointY,
    SineProgressX: this._behaviorData.SineProgressX,
    SineProgressY: this._behaviorData.SineProgressY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.HorizontalSpeed !== undefined)
      this._behaviorData.HorizontalSpeed = networkSyncData.props.HorizontalSpeed;
    if (networkSyncData.props.VerticalSpeed !== undefined)
      this._behaviorData.VerticalSpeed = networkSyncData.props.VerticalSpeed;
    if (networkSyncData.props.HorizontalDistance !== undefined)
      this._behaviorData.HorizontalDistance = networkSyncData.props.HorizontalDistance;
    if (networkSyncData.props.VerticalDistance !== undefined)
      this._behaviorData.VerticalDistance = networkSyncData.props.VerticalDistance;
    if (networkSyncData.props.CenterPointX !== undefined)
      this._behaviorData.CenterPointX = networkSyncData.props.CenterPointX;
    if (networkSyncData.props.CenterPointY !== undefined)
      this._behaviorData.CenterPointY = networkSyncData.props.CenterPointY;
    if (networkSyncData.props.SineProgressX !== undefined)
      this._behaviorData.SineProgressX = networkSyncData.props.SineProgressX;
    if (networkSyncData.props.SineProgressY !== undefined)
      this._behaviorData.SineProgressY = networkSyncData.props.SineProgressY;
  }

  // Properties:
  
  _getHorizontalSpeed() {
    return this._behaviorData.HorizontalSpeed !== undefined ? this._behaviorData.HorizontalSpeed : Number("60") || 0;
  }
  _setHorizontalSpeed(newValue) {
    this._behaviorData.HorizontalSpeed = newValue;
  }
  _getVerticalSpeed() {
    return this._behaviorData.VerticalSpeed !== undefined ? this._behaviorData.VerticalSpeed : Number("60") || 0;
  }
  _setVerticalSpeed(newValue) {
    this._behaviorData.VerticalSpeed = newValue;
  }
  _getHorizontalDistance() {
    return this._behaviorData.HorizontalDistance !== undefined ? this._behaviorData.HorizontalDistance : Number("100") || 0;
  }
  _setHorizontalDistance(newValue) {
    this._behaviorData.HorizontalDistance = newValue;
  }
  _getVerticalDistance() {
    return this._behaviorData.VerticalDistance !== undefined ? this._behaviorData.VerticalDistance : Number("0") || 0;
  }
  _setVerticalDistance(newValue) {
    this._behaviorData.VerticalDistance = newValue;
  }
  _getCenterPointX() {
    return this._behaviorData.CenterPointX !== undefined ? this._behaviorData.CenterPointX : Number("0") || 0;
  }
  _setCenterPointX(newValue) {
    this._behaviorData.CenterPointX = newValue;
  }
  _getCenterPointY() {
    return this._behaviorData.CenterPointY !== undefined ? this._behaviorData.CenterPointY : Number("0") || 0;
  }
  _setCenterPointY(newValue) {
    this._behaviorData.CenterPointY = newValue;
  }
  _getSineProgressX() {
    return this._behaviorData.SineProgressX !== undefined ? this._behaviorData.SineProgressX : Number("0") || 0;
  }
  _setSineProgressX(newValue) {
    this._behaviorData.SineProgressX = newValue;
  }
  _getSineProgressY() {
    return this._behaviorData.SineProgressY !== undefined ? this._behaviorData.SineProgressY : Number("0") || 0;
  }
  _setSineProgressY(newValue) {
    this._behaviorData.SineProgressY = newValue;
  }
}

/**
 * Shared data generated from Sine Movement (deprecated)
 */
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.SharedData = class SineMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SineMovement_SineMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SineMovement_SineMovementSharedData = new gdjs.evtsExt__SineMovement__SineMovement.SineMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._SineMovement_SineMovementSharedData;
}

// Methods:
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointX((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointY((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()));
}
}
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX()) + Math.cos(gdjs.toRad((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressX()))) * (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY()) + Math.sin(gdjs.toRad((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressY()))) * (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance()));
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgressX(gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressX() + ((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgressY(gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressY() + ((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressY());}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressX());}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed());}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed());}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance());}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistance = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance());}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistance = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX());}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY());}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointY((Number(eventsFunctionContext.getArgument("Value")) || 0));
}
}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointX((Number(eventsFunctionContext.getArgument("Value")) || 0));
}
}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalDistance((Number(eventsFunctionContext.getArgument("Value")) || 0));
}
}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistance = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalDistance((Number(eventsFunctionContext.getArgument("Value")) || 0));
}
}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistance = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalSpeed((Number(eventsFunctionContext.getArgument("Value")) || 0));
}
}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalSpeed((Number(eventsFunctionContext.getArgument("Value")) || 0));
}
}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects2= [];


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgressX(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgressY(0);
}
}
}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCounters = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SineMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SineMovement"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("SineMovement::SineMovement", gdjs.evtsExt__SineMovement__SineMovement.SineMovement);
