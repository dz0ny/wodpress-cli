 var Porter = require('./lib/node-porter.js').Porter;
var g = new Porter({
      'groupA': {
        'resourceA': ['get', '/test1'],
        'resourceB': ['put', '/test1'],
        'resourceC': ['put', '/test1']
      },
      'groupB': {
        'resourceA': ['post', '/test2'],
        'resourceB': ['get', '/test2/:id']
      }
    }).use({host:"google.si"})

  g.groupB.resourceB({"id":1988},function(a,b,c) {
    
  })