export const test = (req, res) =>{
  console.log("It's working");
  res.render("test", {pageTitle:'TEST'});
};
