const registeredHomes = [];

const getAllHomes = (req, res, next) => {
  res.render("home", {
    registeredHomes,
  });
};

const addHome = (req, res, next) => {
  res.render("addHomeForm");
};

const homeDetails = (req, res, next) => {
  registeredHomes.push(req.body);
  res.render("homeAdded");
};

module.exports = {
  getAllHomes,
  addHome,
  homeDetails,
};
