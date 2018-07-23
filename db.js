var mongoose = require('mongoose');
mongoose.connect('mongodb://test@test.com:Password_123@ds018268.mlab.com:18268/securing-restful-api-with-jwt', {useNewUrlParser: true } );
//mongoose.connect('mongodb://Username:Password@cluster0-shard-00-00-jueel.mongodb.net:27017/test?replicaSet=Cluster0-shard-0', { useNewUrlParser: true } );