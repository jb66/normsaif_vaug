'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroImage,
  //ViroMaterials,
} from 'react-viro';

export default class HelloWorldSceneARmod extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  getARScene() {
    //console.log("move")
    return (
      <ViroImage
      source={require("./res/ruler.png")}
      position={[0, -.5, -1]} scale={[.9, .1, 0.3]}
      //onClick={this._onClick}
      //onDrag={this._onDrag}
    />             
    )
}

/*
getARSceneV() {
  //console.log("move")
  return (
    <ViroImage
    source={require("./res/vscale.png")}
    position={[0, -.8, -1]} scale={[.4, .1, 0.3]}
    onClick={this._onClick}
    onDrag={this._onDrag} 
  />             
  )
}
*/

  render() {
  return (
    <ViroARScene onTrackingUpdated={this._onInitialized} >
    { this.state.isTracking ? this.constructor : this.getARScene()}
    </ViroARScene>
  );
}
/*
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
      { this.state.isTracking ? this.constructor : this.getARSceneV()}
      </ViroARScene>
    );
  }
*/
  _onClick(source) {
    console.log("We just Clicked the image!");
  }

  _onDrag(draggedToPosition, source) {
    console.log("Dragged to: x" + draggedToPosition[0] + " y:" + draggedToPosition[1] + " z: " + draggedToPosition[2]); 
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        //text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
//ViroMaterials.createMaterials({
  //grid: {
    //diffuseTexture: require('./res/ruler.png'),
  //},
//});

module.exports = HelloWorldSceneARmod;