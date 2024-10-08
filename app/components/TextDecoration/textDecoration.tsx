/** @format */

import React, { useState, useEffect } from "react";
import { Heading, background } from "@chakra-ui/react";
interface TextWithLineProps {
  text: string;
  color?: string;
  lineColor?: string;
  undecorate?: boolean;
}

const TextWithLine: React.FC<TextWithLineProps> = ({
  text,
  color,
  lineColor,
  undecorate,
}) => {
  return (
    <div>
      <Heading color={color ? color : "#000000"} textAlign={"center"}>
        {text && text}
      </Heading>
      {!undecorate ? (
        <div style={{ paddingLeft: 15}}>
          <div
            style={{
              width: `${text?.length + 2}em`,
              borderWidth: `2.5px`,
              borderColor: lineColor ? lineColor : "red",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          <div
            style={{
              width: `${text?.length}em`,
              borderWidth: `2.5px`,
              borderColor: lineColor ? lineColor : "red",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              marginLeft: "1em",
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TextWithLine;
