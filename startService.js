var Service = require('node-windows').Service;
const pkg = require('./package.json');

// Create a new service object
var svc = new Service({
  name: pkg.name,
  description: `Resolume control`,
  script: 'c:\\resolume-arena-pc-control\\index.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  , workingDirectory: 'c:\\resolume-arena-pc-control\\'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();