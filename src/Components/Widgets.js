import React from "react";
import "./widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const NewsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkdeIn News</h2>
        <InfoIcon />
      </div>
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
      {NewsArticle("BiTCOIN HITS HIGH", "Top news - 9877 readers")}
    </div>
  );
};

export default Widgets;
