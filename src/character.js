
import Object from './object.js'
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

/*
* Actor is an instantiation of an object, with the key difference in that it has a location in 3 Dimensional space.
*/

export default class Character extends Actor{
    constructor(Location, Controller)
    {
        this._Location = Location; // Three.js Vector3D.
        this._Controller = Controller;
    }

    goforward() {
        // Make character go fooorrwards....
    }
}