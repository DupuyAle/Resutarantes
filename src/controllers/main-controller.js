const mainController = {
  index: (req, res) => {
    res.render("index");
  },
  aboutus: (req, res) => {
    res.render("aboutus");
  },
  contact: (req, res) => {
    res.render("contact");
  },
  login: (req, res) => {
    res.render("login");
  },
};

module.exports = mainController;
