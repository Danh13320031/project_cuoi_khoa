import express from "express";

const publicFile = (app) => {
  app.use(express.static("public"));
};

export default publicFile;
