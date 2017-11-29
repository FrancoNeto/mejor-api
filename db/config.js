function connectMongo(mongoose) {
  var db = mongoose.connection;

  var USER_DB = "mejor_user";
  var USER_PASSWORD = "mejor_user";
  var DB = "mejor_db";

  db.on('error', console.error);
  db.once('open', () => {
    console.log('Conected to MongoDB.')
  });

  var connection = mongoose.connect(`mongodb://${USER_DB}:${USER_PASSWORD}@ds025232.mlab.com:25232/${DB}`, {
    useMongoClient: true
  });
  mongoose.Promise = global.Promise;
};

module.exports.connect = connectMongo;