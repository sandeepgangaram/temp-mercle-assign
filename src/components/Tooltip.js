import React, { useState } from "react";

const Tooltip = (props) => {
  const { title, description, message, children } = props;

  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className="tooltip">
          <p className="tooltip-title">{title}</p>
          <p className="tooltip-desc">{description}</p>
          <p className="tooltip-message">
            <em>{message}</em>
          </p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
