// URL: https://beta.observablehq.com/@mathisonian/d3-change-line-chart
// Title: D3 Change Line Chart
// Author: Matthew Conlen (@mathisonian)
// Version: 216
// Runtime version: 1

const m0 = {
  id: "06951ce3a3aabdec@216",
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
d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([margin.left, width - margin.right])
)})
    },
    {
      name: "y",
      inputs: ["d3","data","height","margin"],
      value: (function(d3,data,height,margin){return(
d3.scaleLog()
    .domain([d3.min(data, d => d.value * 0.9), d3.max(data, d => d.value / 0.9)])
    .range([height - margin.bottom, margin.top])
)})
    },
    {
      name: "xAxis",
      inputs: ["height","margin","d3","x","width"],
      value: (function(height,margin,d3,x,width){return(
g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
  .call(g => g.select(".domain").remove())
)})
    },
    {
      name: "yAxis",
      inputs: ["margin","d3","y","format","width"],
      value: (function(margin,d3,y,format,width){return(
g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y)
      .tickValues(d3.ticks(...y.domain(), 10))
      .tickFormat(format))
  .call(g => g.selectAll(".tick line").clone()
      .attr("stroke-opacity", d => d === 1 ? null : 0.2)
      .attr("x2", width - margin.left - margin.right))
  .call(g => g.select(".domain").remove())
)})
    },
    {
      name: "format",
      inputs: ["d3"],
      value: (function(d3)
{
  const f = d3.format("+.0%");
  return x => x === 1 ? "0%" : f(x - 1);
}
)
    },
    {
      name: "line",
      inputs: ["d3","x","y"],
      value: (function(d3,x,y){return(
d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value))
)})
    },
    {
      name: "data",
      inputs: ["require"],
      value: (async function(require)
{
  const data = await require("@observablehq/aapl");
  const base = data[0].close;
  return data.map(({date, close}) => ({date, value: close / base}));
}
)
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://d3js.org/d3.v5.min.js")
)})
    }
  ]
};

const notebook = {
  id: "06951ce3a3aabdec@216",
  modules: [m0]
};

export default notebook;
