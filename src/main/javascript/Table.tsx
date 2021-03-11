import React from "react";

interface Props {
  header: string;
}

const Table: React.FunctionComponent<Props> = props => {

  return (
    <table className={"table"} cellSpacing={0}>
      <thead>
        <tr>
          <th colSpan={2}>
            {props.header}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );

};

export { Table };