import React from "react";

interface Props {
  label: string;
}

const TableRow: React.FunctionComponent<Props> = props => {

  return (
    <tr>
      <td className={"label"}>
        {props.label}
      </td>
      <td className={"value"}>
        {props.children}
      </td>
    </tr>
  );

};

export { TableRow };