"use client";

import { truncateHtml } from "@/utils/trumcate";
// import { truncateHtml } from "@/utils/truncateHtml";
import React, { useState, useEffect } from "react";

interface ExpandableHtmlTextProps {
  htmlContent: string;
  limit?: number;
}

const ExpandableHtmlText: React.FC<ExpandableHtmlTextProps> = ({
  htmlContent,
  limit = 1000,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [truncatedHtml, setTruncatedHtml] = useState("");

  useEffect(() => {
    if (htmlContent.length > limit) {
      setTruncatedHtml(truncateHtml(htmlContent, limit));
    } else {
      setTruncatedHtml(htmlContent);
    }
  }, [htmlContent, limit]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isTruncated = htmlContent.length > limit;

  return (
    <div className="text-tms-black text-sm md:text-base leading-5">
      {isExpanded ? (
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="space-y-3 md:space-y-4 lg:space-y-7"
        />
      ) : (
        <span>
          <span
            dangerouslySetInnerHTML={{ __html: truncatedHtml }}
            className="space-y-3 md:space-y-4 lg:space-y-7"
          />
          {isTruncated && (
            <>
              ...{" "}
              <button onClick={toggleExpand} className="inline text-tms-black ">
                Read More
              </button>
            </>
          )}
        </span>
      )}

      {isExpanded && isTruncated && (
        <button
          onClick={toggleExpand}
          className="block mt-2 text-tms-black underline"
        >
          Read Less
        </button>
      )}
    </div>
  );
};

export default ExpandableHtmlText;
