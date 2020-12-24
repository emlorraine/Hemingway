function Full(fullTextData, fullData){ 
    this.fullTextData = fullTextData; 
    this.fullData = fullData;
    this.init(); 
}

Full.prototype.init = function(){
  var self = this;
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

    // var tip = d3.tip()
    //     .attr('class', 'd3-tip')
    //     .html(function(d) { return d; })

    const svg = d3.select("#full").append("svg")
        .attr("width", 1500)
        .attr("height", 300)
        .attr("class", "cluster")
        // .call(tip);

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
            return colors(self.fullData[i].Value); 
        }) 
        .on('mouseover', function (d, i) {
        //   tip.show
          d3.select(this).transition()
               .attr('stroke', 'black')
                div.transition()
                .style("opacity", 1)
        })
        .on('mouseout', function (d, i) {
        //   tip.hide
          d3.select(this).transition()
               .attr('stroke', 'none')
                div.transition()
                    .style("opacity", 1);
        })




}

