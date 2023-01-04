import * as kokomi from "kokomi.js";

import type Experience from "../Experience";

export default class World extends kokomi.Component {
  declare base: Experience;
  constructor(base: Experience) {
    super(base);

    this.base.assetManager.on("ready", () => {});
  }
}
