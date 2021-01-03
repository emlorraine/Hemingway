function Polarity(fullTextData, polarityData, subjectivityData){ 
    this.fullTextData = fullTextData; 
    this.polarityData = polarityData;
    this.subjectivityData = subjectivityData
    this.init(); 
}

Polarity.prototype.init = function(){
  var self = this;
  const data = [self.fullTextData, self.polarityData]; 
  var colors = d3.scaleLinear()
                 .domain([-1,1])
                 .range(["white", "#006d77"])
                
    var div = d3.select("body").append("div")
        .attr("class", "tooltip-donut")
        .style("opacity", 0);

    const svg = d3.select("#polarity").append("svg")
        .attr("width", 1600)
        .attr("height", 350)
        .attr("class", "cluster");
    svg.selectAll("rect")
        .data(this.fullTextData, function(d){
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
            return colors(self.polarityData[i].Value); 
        }) 
        .on('mouseover', function (d,i) {
            const textDataValues = data[1].map(item => item.Value)
            const textData = data[0].map(item => item.Text)
            var index = (textData.indexOf(i.Text))
            d3.select(this)
                .transition()
                .duration(100)
                .attr('stroke', 'black')
            svg.append("text")
                .text(function(d, i){
                    return("Text: " + textData[index]);
                })
                .attr("x", 0)
                .attr("y", 315);
            svg.append("text")
                .text(function(d, i){
                    return("Polar value: " + textDataValues[index])
                })
                .attr("x", 0)
                .attr("y", 350);
        })
        .on('mouseout', function (d, i) {
          d3.select(this).transition()
               .attr('stroke', 'none')
                div.transition()
                    .style("opacity", 1);
          d3.selectAll("text").remove(); 
        })


}

