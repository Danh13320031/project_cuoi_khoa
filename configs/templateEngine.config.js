import ejs from "ejs";

const templateEngine = (app) => {
  app.set("views", "./views");
  app.set("view engines", "ejs");
  ejs.delimiter = "%";
};

export default templateEngine;
