function Restaurant(fullTextData, fullData){ 
    this.fullTextData = fullTextData; 
    this.fullData = fullData;
    this.init(); 
}

Restaurant.prototype.init = function(){
  var self = this;
  const data = [self.fullTextData, self.fullData];
  keys = ["restaurant", "food", "table", "meal", "hunger", "hungry", "full", "dinner", "lunch", "breakfast", "cafe", "cafes", "eating", "eat", "kitchen", "dining"]
  var colors = d3.scaleLinear()
                 .domain([-1,1])
                 .range(["white", "#006d77"])

    var div = d3.select("body").append("div")
        .attr("class", "tooltip-donut")
        .style("opacity", 0);

    const svg = d3.select("#restaurant").append("svg")
        .attr("width", 1600)
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
            const textDataValues = data[1].map(item => item.Value)
            const textData = data[0].map(item => item.Text) 
            var index = i
            var phrase = textData[[index]]
            var arr = phrase.split(' ')
            for(var i = 0; i < keys.length; i++){
                if(arr.includes(keys[i])){
                    // console.log(arr)
                    return colors(self.fullData[i].Value); 
                }
            }
            return("fill", "#d3d3d3")
        })       
        // .on('mouseover', function (d,i,x) {
        //     console.log(i)
        //     console.log(d)
        //     const textDataValues = data[1].map(item => item.Value)
        //     const textData = data[0].map(item => item.Text)
            
        //     var index = (textDataValues.indexOf(i.Value))
        //     d3.select(this)
        //         .transition()
        //         .duration(100)
        //         .attr('stroke', 'black')
            // var phrase = (textData[index])
            // let arr = phrase.split(' ')
            //     if(arr.includes(keys[i])){
                    // console.log("TEXT:")
                    // console.log(arr)
                    // svg.append("text")
                    //     .text(function(d, i){
                    //         return("Text: " + textData[index]);
                    //     })
                    //     .attr("x", 0)
                    //     .attr("y", 315);
                    // svg.append("text")
                    //     .text(function(d, i){
                    //         return("Sentiment value: " + textDataValues[index])
                    //     })
                    //     .attr("x", 0)
                    //     .attr("y", 350);
                // }
        // .on('mouseout', function (d, i) {
        //   d3.select(this).transition()
        //        .attr('stroke', 'none')
        //         div.transition()
        //             .style("opacity", 1);
        //   d3.selectAll("text").remove(); 
        // })


}

