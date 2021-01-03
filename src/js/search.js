function Search(fullTextData, fullData){ 
    this.fullTextData = fullTextData; 
    this.fullData = fullData;
    this.init(); 
}

Search.prototype.init = function(){
  var self = this;
  const data = [self.fullTextData, self.fullData]; 
  var colors = d3.scaleLinear()
                 .domain([-1,1])
                 .range(["white", "#006d77"])


    const svg = d3.select("#search").append("svg")
        .attr("width", 1600)
        .attr("height", 350)
        .attr("class", "cluster")
    
    svg.selectAll("rect")
        .data(data[0], function(d,i){
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
                    return("Subjectivity value: " + textDataValues[index])
                })
                .attr("x", 0)
                .attr("y", 350);

        })
       .on('mouseout', function () {
          d3.select(this).transition()
            .attr('stroke', 'none')
          d3.selectAll("text").remove(); 
        })


}

