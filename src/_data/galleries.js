"use strict";
const fastglob = require("fast-glob");
const fs = require("fs");
console.log("here");
module.exports = async () => {
  // Create a "glob" of all cat json files
  let galleries = [];
  const galleryDirs = await fastglob("**", {
    caseSensitiveMatch: false,
    onlyDirectories: true,
    cwd: "./src/galleries/"
  });
  for (let i = 0; i < galleryDirs.length; i++) {
    let galleryDir = galleryDirs[i];
    let galleryFiles = await fastglob("*.jpg", {
      caseSensitiveMatch: false,
      cwd: "./src/galleries/" + galleryDir
    })
    galleries.push({gallery: galleryDir, files: galleryFiles});
  }
  return galleries;
};
