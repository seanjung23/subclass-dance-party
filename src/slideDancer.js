var makeSlideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.linedUp = false;
  this.$node.addClass('slide');
  this.$node.append('<img src="dancers/disco1.jpg" alt="disco dancer" />');
};

makeSlideDancer.prototype = Object.create(makeDancer.prototype);

makeSlideDancer.prototype.constructor = makeSlideDancer;

makeSlideDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  var x = $('body').height() * Math.random();
  var y = $('body').width() * Math.random();

  this.setPosition(x, y);

};

makeSliderDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //if lined up is true
  //  left is 50%
  //  change some prop in css to stop sliding
  var styleSettings = {
    top: top,
    left: left,
    transition: slow
  };
  if (this.linedUp) {
    styleSettings = {
      top: '50%',
      left: '50%',
    };
    this.$node.removeProp('transition-duration');
    this.$node.removeProp('transform');
  }
  this.$node.css(styleSettings);
};

makeSlideDancer.prototype.lineUp = function () {
  this.linedUp = true;
  var styleSettings = {
    left: '50%'
  };

  this.$node.css(styleSettings);
};