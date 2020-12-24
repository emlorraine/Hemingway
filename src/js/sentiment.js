function Sentiment(fullTextData, polarityData, subjectivityData){ 
    this.fullTextData = fullTextData; 
    this.polarityData = polarityData;
    this.subjectivityData = subjectivityData
    this.init(); 
}

Sentiment.prototype.init = function(){


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


    const svg = d3.select("#sentiment").append("svg")
        .attr("width", 1500)
        .attr("height", 1000)
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
            return (i%100)*12; 
        })
        .attr("y", function(d,i){
            return Math.floor(i/100)%100*12;
        })
        .attr("fill", function(d,i){
            console.log(self.subjectivityData[i].Value)
            return colors(self.subjectivityData[i].Value); 
        }) 
}

