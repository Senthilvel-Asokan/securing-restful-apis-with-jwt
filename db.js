var mongoose = require('mongoose');
mongoose.connect('mongodb://test%40test.com:P%40ssword_123@ds249311.mlab.com:49311/securing-restful-api-with-jwt', { useNewUrlParser: true } );
//mongoose.connect('mongodb://Username:Password@cluster0-shard-00-00-jueel.mongodb.net:27017/test?replicaSet=Cluster0-shard-0', { useNewUrlParser: true } );