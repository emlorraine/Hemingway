(function(){
    var instance = null;
    function init() {
    Promise.all([
        d3.csv("../data/full_polarity.csv"),
        d3.csv("../data/full_sentence.csv"),
        d3.csv("../data/full_subjectivity.csv"),
        d3.csv("../data/full.csv")
    ]).then(function (files) {
      for (var i = 0; i < files.length; ++i) {
        var polarityData = files[0];
        var fullTextData = files[1];
        var subjectivityData = files[2]; 
        var fullData = files[3]; 
      }
      var sentimentGraph = new Sentiment(fullTextData, polarityData, subjectivityData); 
      var polarityGraph = new Polarity(fullTextData, polarityData, subjectivityData); 
      var fullGraph = new Full(fullTextData, fullData); 
      var restaurantGraph = new Restaurant(fullTextData, fullData); 
    });
    }
    function Main(){
        if(instance  !== null){
            throw new Error("Cannot instantiate more than one Class");
        }
    }
    Main.getInstance = function(){
        var self = this
        if(self.instance == null){
            self.instance = new Main();
            init();
        }
        return instance;
    }
    Main.getInstance();
})();