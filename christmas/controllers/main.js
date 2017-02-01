module.exports = {
  index: function(req, res){
    console.log("Main controller hit")
    res.render('../index')
  },
  challenge1: function(req, res){
    console.log("Challenge 1 hit")
  },

}
