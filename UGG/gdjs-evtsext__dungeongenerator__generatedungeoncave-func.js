
if (typeof gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave !== "undefined") {
  gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave = {};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final = [];

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex2 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex5 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachObjects2 = [];

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachObjects5 = [];

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachTemporary2 = null;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachTemporary5 = null;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachTotalCount2 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachTotalCount5 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects8= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects8= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects8= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects8= [];


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDWalkerObjectObjects7Objects = Hashtable.newFrom({"WalkerObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].getVariables().get("__DungeonGenerator").getChild("Xpos")).setNumber(Math.round((Number(eventsFunctionContext.getArgument("MapWidth")) || 0) / 2 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerOffsetX"))));
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].getVariables().get("__DungeonGenerator").getChild("Ypos")).setNumber(Math.round((Number(eventsFunctionContext.getArgument("MapHeight")) || 0) / 2 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerOffsetY"))));
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].getVariables().get("__DungeonGenerator").getChild("StartXpos")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].getVariables().get("__DungeonGenerator").getChild("Xpos"))));
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].getVariables().get("__DungeonGenerator").getChild("StartYpos")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7[i].getVariables().get("__DungeonGenerator").getChild("Ypos"))));
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDWalkerObjectObjects7Objects, 0, 0, "" + eventsFunctionContext.getArgument("Layer"));
}

{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerOffsetX").add(1);
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount6 = Math.max(1, (Number(eventsFunctionContext.getArgument("WalkerSize")) || 0));
for (let repeatIndex6 = 0;repeatIndex6 < repeatCount6;++repeatIndex6) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerOffsetX").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerOffsetY").add(1);
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerOffsetX").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerOffsetY").setNumber(0);
}
}

}


{



}


{


const repeatCount4 = Math.max(1, (Number(eventsFunctionContext.getArgument("WalkerSize")) || 0));
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[i].getVariables().get("__DungeonGenerator").getChild("Xpos")).sub(1);
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[i].getVariables().get("__DungeonGenerator").getChild("Xpos")).add(1);
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[i].getVariables().get("__DungeonGenerator").getChild("Ypos")).sub(1);
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[i].getVariables().get("__DungeonGenerator").getChild("Ypos")).add(1);
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[i].getVariables().get("__DungeonGenerator").getChild("Xpos")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[i].getVariables().get("__DungeonGenerator").getChild("StartXpos"))));
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[i].getVariables().get("__DungeonGenerator").getChild("Ypos")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[i].getVariables().get("__DungeonGenerator").getChild("StartYpos"))));
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("InitiateRestart"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerMap").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[0].getVariables()).get("__DungeonGenerator").getChild("Xpos")))).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[0].getVariables()).get("__DungeonGenerator").getChild("Ypos"))))) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6 */
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerMap").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[0].getVariables()).get("__DungeonGenerator").getChild("Xpos")))).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6[0].getVariables()).get("__DungeonGenerator").getChild("Ypos")))).setNumber(1);
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("FloorCreated").add(1);
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("InitiateRestart"), false);
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoRight").setNumber(0.5 * ((Number(eventsFunctionContext.getArgument("MapWidth")) || 0) / ((Number(eventsFunctionContext.getArgument("MapWidth")) || 0) + (Number(eventsFunctionContext.getArgument("MapHeight")) || 0))));
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoLeft").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoRight")));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoUp").setNumber(0.5 * ((Number(eventsFunctionContext.getArgument("MapHeight")) || 0) / ((Number(eventsFunctionContext.getArgument("MapWidth")) || 0) + (Number(eventsFunctionContext.getArgument("MapHeight")) || 0))));
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoDown").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoUp")));
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber").setNumber(gdjs.randomFloatInRange(0, 1));
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber")) >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoLeft"));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoLeft"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoLeft")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoRight"));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoLeft")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoRight"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoLeft")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoRight")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoUp"));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoLeft")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoRight")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ChanceToGoUp"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("RandomNumber")) <= 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5);
for (var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i].getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i].getVariables().get("__DungeonGenerator").getChild("Xpos")) < (Number(eventsFunctionContext.getArgument("MinBorder")) || 0) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.indexOf(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[j]) === -1 )
            gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5);
for (var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i].getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i].getVariables().get("__DungeonGenerator").getChild("Xpos")) >= (Number(eventsFunctionContext.getArgument("MapWidth")) || 0) - (Number(eventsFunctionContext.getArgument("MinBorder")) || 0) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.indexOf(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[j]) === -1 )
            gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5);
for (var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i].getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i].getVariables().get("__DungeonGenerator").getChild("Ypos")) < (Number(eventsFunctionContext.getArgument("MinBorder")) || 0) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.indexOf(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[j]) === -1 )
            gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5);
for (var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i].getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i].getVariables().get("__DungeonGenerator").getChild("Ypos")) >= (Number(eventsFunctionContext.getArgument("MapHeight")) || 0) - (Number(eventsFunctionContext.getArgument("MinBorder")) || 0) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.indexOf(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[j]) === -1 )
            gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4_1final, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("InitiateRestart"), true);
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerRestarts").add(1);
}
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4);

for (gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex5 = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex5 < gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4.length;++gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex5) {
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length = 0;


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachTemporary5 = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4[gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex5];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList9(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("StepsTaken").add(1);
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("FloorCreated")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("FloorGoal"));
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList10(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableRemoveChild(runtimeScene.getScene().getVariables().get("__DungeonGenerator"), "WalkerMap");
}
}

}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList11(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDTerrainObjectObjects5Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDFloorObjectObjects5Objects = Hashtable.newFrom({"FloorObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerMap").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX"))).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY")))) == 0;
if (isConditionTrue_0) {
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDTerrainObjectObjects5Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX")) * (Number(eventsFunctionContext.getArgument("TileSize")) || 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY")) * (Number(eventsFunctionContext.getArgument("TileSize")) || 0), "" + eventsFunctionContext.getArgument("Layer"));
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5[i].setWidth((Number(eventsFunctionContext.getArgument("TileSize")) || 0));
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5[i].setHeight((Number(eventsFunctionContext.getArgument("TileSize")) || 0));
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerMap").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX"))).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY")))) == 1;
if (isConditionTrue_0) {
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDFloorObjectObjects5Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX")) * (Number(eventsFunctionContext.getArgument("TileSize")) || 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY")) * (Number(eventsFunctionContext.getArgument("TileSize")) || 0), "" + eventsFunctionContext.getArgument("Layer"));
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5[i].setWidth((Number(eventsFunctionContext.getArgument("TileSize")) || 0));
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5[i].setHeight((Number(eventsFunctionContext.getArgument("TileSize")) || 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX").add(1);
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount4 = (Number(eventsFunctionContext.getArgument("MapWidth")) || 0);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList13(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY").add(1);
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY").setNumber(0);
}
}

}


{



}


{


const repeatCount2 = (Number(eventsFunctionContext.getArgument("MapHeight")) || 0);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList14(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("FloorGoal").setNumber(Math.round(((Number(eventsFunctionContext.getArgument("MapWidth")) || 0) - 2 * (Number(eventsFunctionContext.getArgument("MinBorder")) || 0)) * ((Number(eventsFunctionContext.getArgument("MapHeight")) || 0) - 2 * (Number(eventsFunctionContext.getArgument("MinBorder")) || 0)) * (Number(eventsFunctionContext.getArgument("FloorPercentage")) || 0)));
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("StepsTaken").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("FloorCreated").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("WalkerRestarts").setNumber(0);
}
}

}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList12(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList15(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDTerrainObjectObjects3Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDFloorObjectObjects3Objects = Hashtable.newFrom({"FloorObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDWallObjectObjects3Objects = Hashtable.newFrom({"WallObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("FloorObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects2, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDTerrainObjectObjects3Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDFloorObjectObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3 */
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDWallObjectObjects3Objects, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3[0].getPointX("")), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3[0].getPointY("")), "" + eventsFunctionContext.getArgument("Layer"));
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3[i].setWidth((Number(eventsFunctionContext.getArgument("TileSize")) || 0));
}
}
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3[i].setHeight((Number(eventsFunctionContext.getArgument("TileSize")) || 0));
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("TerrainObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1);

for (gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex2 = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex2 < gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1.length;++gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex2) {
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects2.length = 0;


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachTemporary2 = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1[gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachIndex2];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects2.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList17(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDFloorObjectObjects1Objects = Hashtable.newFrom({"FloorObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects1});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDWallObjectObjects1Objects = Hashtable.newFrom({"WallObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects1});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("CalculateNeighbors");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FloorObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("WallObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects1);
{gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.func(runtimeScene, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDFloorObjectObjects1Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDWallObjectObjects1Objects, eventsFunctionContext);
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDTerrainObjectObjects1Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDFloorObjectObjects1Objects = Hashtable.newFrom({"FloorObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects1});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("WalkerObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("FloorObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TerrainObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("DeleteUnused");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDTerrainObjectObjects1Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.mapOfGDgdjs_9546evtsExt_9595_9595DungeonGenerator_9595_9595GenerateDungeonCave_9546GDFloorObjectObjects1Objects, true, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList16(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList18(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList19(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList20(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.func = function(runtimeScene, TileSize, MapWidth, MapHeight, TerrainObject, FloorObject, Layer, WalkerObject, FloorPercentage, WalkerSize, MinBorder, DeleteUnused, WallObject, CalculateNeighbors, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"TerrainObject": TerrainObject
, "FloorObject": FloorObject
, "WalkerObject": WalkerObject
, "WallObject": WallObject
},
  _objectArraysMap: {
"TerrainObject": gdjs.objectsListsToArray(TerrainObject)
, "FloorObject": gdjs.objectsListsToArray(FloorObject)
, "WalkerObject": gdjs.objectsListsToArray(WalkerObject)
, "WallObject": gdjs.objectsListsToArray(WallObject)
},
  _behaviorNamesMap: {
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
if (argName === "MapWidth") return MapWidth;
if (argName === "MapHeight") return MapHeight;
if (argName === "Layer") return Layer;
if (argName === "FloorPercentage") return FloorPercentage;
if (argName === "WalkerSize") return WalkerSize;
if (argName === "MinBorder") return MinBorder;
if (argName === "DeleteUnused") return DeleteUnused;
if (argName === "CalculateNeighbors") return CalculateNeighbors;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects8.length = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.eventsList21(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDTerrainObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDFloorObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWalkerObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.GDWallObjectObjects8.length = 0;


return;
}

gdjs.evtsExt__DungeonGenerator__GenerateDungeonCave.registeredGdjsCallbacks = [];