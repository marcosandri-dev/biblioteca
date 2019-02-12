import React from "react";

const Pagination = () => {
  return (
    <div class="center tc pa3 ma3">
      <span class="link dim black ba pa3 mr1">{"<<"}</span>
      <span class="link dim white bg-black ba pa3 mr1">1</span>
      <span class="link dim black ba pa3 mr1">2</span>
      <span class="link dim black ba pa3 mr1">3</span>
      <span class="link dim black ba pa3 mr1">{">>"}</span>
    </div>
  );
};

export default Pagination;
