import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { totalReviews } from '../data/data';

const B2CResearchChart = ({ data }) => {
  const [hoveredBarData, setHoveredBarData] = useState(null);
  const chartRef = useRef(null);
  const tooltipRef = useRef(null); // Add a ref for the tooltip

  useEffect(() => {
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", 400)
      .attr("height", 300);

    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
    const width = svg.attr("width") - margin.left - margin.right;
    const height = svg.attr("height") - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, d => d.value)]);

    const yScale = d3.scaleBand()
      .range([height, 0])
      .domain(data.map(d => d.label))
      .padding(0.5);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    g.append("g")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .style("fill", "black"); // Set Y label text color to black

    g.selectAll(".domain").attr("stroke", "black");

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", d => yScale(d.label))
      .attr("width", d => xScale(d.value))
      .attr("height", yScale.bandwidth())
      .attr("fill", (d, i) => colorScale(i))
      .on("mouseover", (event, d) => {
        setHoveredBarData(d);
      })
      .on("mouseout", () => {
        setHoveredBarData(null);
      });

    // Add text labels inside bars with adjusted font size
    g.selectAll(".bar-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr("x", d => xScale(d.value) - 5)
      .attr("y", d => yScale(d.label) + yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text(d => d.value)
      .style("font-size", "8px") // Adjust font size for better readability
      .style("fill", "black") // Set text color to black
      .style("font-weight","bold")
    // Update tooltip position on mousemove
    svg.on("mousemove", (event) => {
      if (hoveredBarData) {
        const tooltipPosition = {
          left: event.pageX + 10,
          top: event.pageY + 10
        };
        d3.select(tooltipRef.current)
          .style("left", `${tooltipPosition.left}px`)
          .style("top", `${tooltipPosition.top}px`);
      }
    });

    // Render total reviews value outside the bars
    svg.append("text")
      .attr("class", "total-reviews")
      .attr("x", width / 2)
      .attr("y", margin.top + 10)
      .style("font-size","16px")
      .style("font-weight","bold")
      .text(`Total Reviews: ${totalReviews}`);

    return () => {
      svg.remove();
    };
  }, [data, hoveredBarData]);

  return (
    <div ref={chartRef} className="relative bg-white w-fit h-fit">
      {hoveredBarData && (
        <div ref={tooltipRef} className="tooltip absolute text-black border border-gray-300 p-2 shadow-lg">
          <h3>{hoveredBarData.label}</h3>
          <p>{hoveredBarData.details}</p>
        </div>
      )}
    </div>
  );
};

export default B2CResearchChart;