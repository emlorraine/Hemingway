function Full(fullTextData, fullData){ 
    this.fullTextData = fullTextData; 
    this.fullData = fullData;
    this.init(); 
}

Full.prototype.init = function(){
  var self = this;
  const data = [self.fullTextData, self.fullData]; 
  var colors = d3.scale.threshold()
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


    const svg = d3.select("#full").append("svg")
        .attr("width", 1600)
        .attr("height", 250)
        .attr("class", "cluster")
    
    svg.selectAll("rect")
        .data(data[0], function(d,i){
            // var index = self.fullTextData.indexOf(self.fullTextData[i])
            // console.log(index)
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

