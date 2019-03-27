const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
  keepAlive: true
});

module.exports.User = require("./user");
<<<<<<< HEAD

=======
>>>>>>> 4560ea6d85e0f3d24b4f3160db5859825f4a7a23
