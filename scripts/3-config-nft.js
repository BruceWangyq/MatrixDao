import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x3b529d19e0d8239b5f9f6d82f21e6af0eebe0ecc",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Pills",
        description: "This NFT will give you access to MatrixDAO!",
        image: readFileSync("scripts/assets/martix.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()