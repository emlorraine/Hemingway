function Restaurant(fullTextData, fullData){ 
    this.fullTextData = fullTextData; 
    this.fullData = fullData;
    this.init(); 
}

Restaurant.prototype.init = function(){
  var self = this;

  keys = ["restaurant", "food", "table", "public", "home", "meal", "dinner", "lunch", "breakfast", "cafe", "eating", "eat", "kitchen", "dining"]

  var colors = d3.scaleOrdinal()
                 .domain([0,1])
                 .range([
                 "#3bb6c3",
                 "#38b1bd",
                 "#36acb8",
                 "#34a7b3",
                 "#31a2ae",
                 "#2f9da9",
                 "#2d98a4",
                 "#2a939e",
                 "#288f99",
                 "#268a94",
                 "#24858f",
                 "#21808a",
                 "#1f7b85",
                 "#1d767f",
                 "#1a717a",
                 "#186c75",
                 "#166870",
                 "#14636b",
                 "#115e66",
                 "#0f5960",
                 "#0d545b",
                 "#0a4f56",
                 "#084a51",
                 "#06454c",
                 "#044147"])

    var div = d3.select("body").append("div")
        .attr("class", "tooltip-donut")
        .style("opacity", 0);

    const svg = d3.select("#restaurant").append("svg")
        .attr("width", 1500)
        .attr("height", 300)
        .attr("class", "cluster");
    svg.selectAll("rect")
        .data(this.fullData, function(d){
            return d; 
        })
        .enter()
        .append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("x", function(d,i){
            return (i%100)*13; 
        })
        .attr("y", function(d,i){
            return Math.floor(i/100)%100*13;
        })
        .attr("fill", function(d,i){
            var phrase = (self.fullTextData[i].Text)
            let arr = phrase.split(' ')
            for(var i = 0; i < keys.length; i++){
                if(arr.includes(keys[i])){
                    return colors(self.fullData[i].Value); 
                }
            }
            return("fill", "#d3d3d3")
        }) 
        .on('mouseover', function (d, i) {
          var x = (event.pageX) + "px"
          var y = (event.pageY) + "px"
          console.log(x)
          console.log(y)
          d3.select(this).transition()
               .attr('stroke', 'black')
                div.transition()
                .style("opacity", 1)
        })
        .on('mouseout', function (d, i) {
          d3.select(this).transition()
               .attr('stroke', 'none')
                div.transition()
                    .style("opacity", 1);
        })


}

