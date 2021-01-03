textData = []; 
textDataValues = []
function Search(fullTextData, fullData){ 
    this.fullTextData = fullTextData; 
    this.fullData = fullData;
    textData = this.fullTextData.map(item => item.Text)
    textDataValues = this.fullData.map(item => item.Value)
    this.init();
}

getTerms=function(){
    return document.getElementById("searchTerm").value; 
}

Search.prototype.init = function(){
  var self = this;
  var term = document.getElementById("searchTerm");
  const data = [self.fullTextData, self.fullData]; 
  var colors = d3.scaleLinear()
                 .domain([-1,1])
                 .range(["white", "#006d77"])


    const svg = d3.select("#search").append("svg")
        .attr("width", 1600)
        .attr("height", 380)
    
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
        .attr("class", "search")

}
function update(){
  term = document.getElementById("searchTerm").value;
  indexStorage = []
  var colors = d3.scaleLinear()
                 .domain([-1,1])
                 .range(["white", "#006d77"]) 
  if(term != ""){
      for(var index = 0; index < textData.length; index++){
          if(textData[index].includes(term)){
            indexStorage.push(index)
          }
      }
    d3.selectAll("rect")
    .style("fill", function(d,i){
        for(var x = 0; x < indexStorage.length; x++){
            if(i == indexStorage[x]){
                console.log(indexStorage[x]);
                console.log(i)
            }
        }
        return "red"; 
  })
  }
  
  return true; 
}





