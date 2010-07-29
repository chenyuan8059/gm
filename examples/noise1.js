var gm = require('../gm')
  , dir = __dirname + '/imgs'

gm(dir + '/original.png')
  .noise(0.3)
  .write(dir + '/noise1.jpg', function(err){
    if (err) return console.dir(arguments)
    console.log(this.outname + ' created :: ' + arguments[3])
  }
) 
