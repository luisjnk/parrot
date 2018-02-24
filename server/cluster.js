var cluster = require('cluster')
, cpus = require('os').cpus()
;
if (cluster.isMaster) {
    console.log('cluster', cluster)
cpus.forEach(function(cpu) {
cluster.fork();
});
cluster.on('listening', function(worker) {
console.log("Cluster %d is connected", worker.process.pid);
});
cluster.on('disconnect', function(worker) {
console.log('Cluster %d is diconnected.', worker.process.pid);
});
cluster.on('exit', function(worker) {
console.log('Cluster %d is out.', worker.process.pid);
});
} else {
require('./server');
}
