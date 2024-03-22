import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { totalReviews } from "../data/data";

const B2CResearchChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current).append("svg").attr("height", "300");

    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
    const containerWidth = chartRef.current.offsetWidth; // Get container width
    const width = containerWidth - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    const totalReviewsX = containerWidth / 2 - 10;
    const totalReviewsY = margin.top;

    const xScale = d3
      .scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, (d) => d.value)]);
    const yScale = d3
      .scaleBand()
      .range([height, 0])
      .domain(data.map((d) => d.label))
      .padding(0.5);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .style("fill", "black");

    g.selectAll(".domain").attr("stroke", "black");

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", (d) => yScale(d.label))
      .attr("width", (d) => xScale(d.value))
      .attr("height", yScale.bandwidth())
      .attr("fill", (d, i) => colorScale(i));

    // Add text labels inside bars with adjusted font size
    g.selectAll(".bar-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr("x", (d) => xScale(d.value) - 5)
      .attr("y", (d) => yScale(d.label) + yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text((d) => d.value)
      .style("font-size", "8px")
      .style("fill", "black")
      .style("font-weight", "bold");

    // Render total reviews value outside the bars

    svg
      .append("text")
      .attr("class", "total-reviews")
      .attr("x", totalReviewsX)
      .attr("y", totalReviewsY)
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text(`Total Reviews: ${totalReviews}`);

    return () => {
      svg.remove();
    };
  }, [data]);

  return <div ref={chartRef} className="relative bg-white w-fit h-fit m-2 shadow-white shadow-md border border-r-2 border-black"></div>;
};

export default B2CResearchChart;
