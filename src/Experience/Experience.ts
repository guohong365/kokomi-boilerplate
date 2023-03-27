import * as kokomi from "kokomi.js";
import * as THREE from "three";

import { resources } from "./resources";

import Controls from "./Controls";
import World from "./World/World";
import Debug from "./Utils/Debug";

export default class Experience extends kokomi.Base {
  assetManager: kokomi.AssetManager;
  controls: Controls;
  world: World;
  debug: Debug;
  constructor(sel = "#sketch") {
    super(sel);

    (window as any).experience = this;

    this.renderer.physicallyCorrectLights = true;

    kokomi.beautifyRender(this.renderer);

    kokomi.enableShadow(this.renderer);

    this.renderer.setClearColor("#000000");

    this.camera.position.set(6, 4, 8);
    (this.camera as THREE.PerspectiveCamera).fov = 35;
    this.camera.updateProjectionMatrix();

    this.assetManager = new kokomi.AssetManager(this, resources);

    this.controls = new Controls(this);

    this.world = new World(this);

    this.debug = new Debug();
  }
}
