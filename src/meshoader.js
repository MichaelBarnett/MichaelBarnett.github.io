import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

class Mesh {

    constructor(ImportFile, isLoaded) {
        this._importFile = ImportFile;
        this._isLoaded = isLoaded;
    }

    load()
    {
        this._isLoaded = true;
    }
}

export default class MeshContainer
{
    constructor()
    {
        this.Meshes = []
    }

    //addMesh()
}