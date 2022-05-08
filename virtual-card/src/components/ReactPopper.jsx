import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";
import { usePopper } from "react-popper";

const Components = () => {
  return <div>hi</div>;
};

const PopOver = ({ children, ReferenceComponent }) => {
  const [visible, setVisibility] = useState(false);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom-end",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  const onMouseLeaveFunction = () => {
    setVisibility(false);
  };

  const onMouseEnterFunction = () => {
    setVisibility(true);
  };

  return (
    <React.Fragment>
      <div
        className="z-10"
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
      >
        <div
          className={classNames(
            ["z-10"],
            { flex: visible },
            { hidden: !visible }
          )}
        >
          {children(onMouseLeaveFunction)}
        </div>
      </div>

      <div ref={referenceRef} onClick={() => onMouseEnterFunction()}>
        {ReferenceComponent}
      </div>
    </React.Fragment>
  );
};

export default PopOver;
