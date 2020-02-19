function boardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  
  boardMember.prototype.veto = function() {
    return ``
  }
}