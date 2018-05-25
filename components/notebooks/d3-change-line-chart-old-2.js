// URL: https://beta.observablehq.com/@mathisonian/d3-change-line-chart
// Title: D3 Change Line Chart
// Author: Matthew Conlen (@mathisonian)
// Version: 237
// Runtime version: 1

const d3 = require('d3');

const m0 = {
  id: "06951ce3a3aabdec@237",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# D3 Change Line Chart

The change in AAPL stock price relative to its April 24, 2007 price of $93.24.`
)})
    },
    {
      name: "chart",
      inputs: ["d3","DOM","width","height","xAxis","yAxis","data","line"],
      value: (function(d3,DOM,width,height,xAxis,yAxis,data,line)
{
  const svg = d3.select(DOM.svg(width, height));

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

  return svg.node();
}
)
    },
    {
      name: "height",
      value: (function(){return(
600
)})
    },
    {
      name: "margin",
      value: (function(){return(
{top: 20, right: 30, bottom: 30, left: 50}
)})
    },
    {
      name: "x",
      inputs: ["d3","data","margin","width"],
      value: (function(d3,data,margin,width){return(
d3.scaleLinear()
    .domain(d3.extent(data, d => d[0]))
    .range([margin.left, width - margin.right])
)})
    },
    {
      name: "y",
      inputs: ["d3","data","height","margin"],
      value: (function(d3,data,height,margin){return(
d3.scaleLinear()
    .domain([d3.min(data, d => d[1] * 0.9), d3.max(data, d => d[1] / 0.9)])
    .range([height - margin.bottom, margin.top])
)})
    },
    {
      name: "xAxis",
      inputs: ["height","margin","d3","x"],
      value: (function(height,margin,d3,x){return(
g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x))
)})
    },
    {
      name: "yAxis",
      inputs: ["margin","d3","y"],
      value: (function(margin,d3,y){return(
g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y))
)})
    },
    {
      name: "line",
      inputs: ["d3","x","y"],
      value: (function(d3,x,y){return(
d3.line()
    .x(d => x(d[0]))
    .y(d => y(d[1]))
)})
    },
    {
      name: "data",
      value: (function()
{
  return [[0, 1], [1, 0], [2, 4]];
}
)
    },
    {
      name: "d3",
      value: (function(){return d3})
    }
  ]
};

const notebook = {
  id: "06951ce3a3aabdec@237",
  modules: [m0]
};

export default notebook;
