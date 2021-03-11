import React, { useState } from "react";
import { fetchSystemInfo, SystemInfo } from "./client";
import { useInterval } from "react-use";
import { Table } from "./Table";
import { TableRow } from "./TableRow";
import { formatBytes } from "./utils";
import { Logo } from "./Logo";

const App: React.FunctionComponent = () => {

  // system info fetched from the server
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>( null );

  // poll for updated system info every 500ms
  useInterval( () => {
    fetchSystemInfo()
      .then( data => setSystemInfo( data ) )
      .catch( e => console.error( e.toString() ) );
  }, 500 );

  // render the UI
  return (
    <>

      {/* Logo */}
      <div className={"logo-wrapper"}>
        <Logo/>
      </div>

      {/* Time */}
      <div className={"time-wrapper"}>
        {systemInfo ? new Date( systemInfo.time ).toLocaleString() : "..."}
      </div>

      {/* Tables */}
      <div className={"table-wrapper"}>

        <Table header={"Virtual Machine"}>
          <TableRow label={"Vendor"}>
            {systemInfo?.jvm.vendor}
          </TableRow>
          <TableRow label={"Name"}>
            {systemInfo?.jvm.name}
          </TableRow>
          <TableRow label={"Version"}>
            {systemInfo?.jvm.version}
          </TableRow>
        </Table>

        <Table header={"Operating System"}>
          <TableRow label={"Name"}>
            {systemInfo?.os.name}
          </TableRow>
          <TableRow label={"Architecture"}>
            {systemInfo?.os.arch}
          </TableRow>
          <TableRow label={"Version"}>
            {systemInfo?.os.version}
          </TableRow>
        </Table>

        <Table header={"User"}>
          <TableRow label={"Username"}>
            {systemInfo?.user.name}
          </TableRow>
          <TableRow label={"Home Directory"}>
            {systemInfo?.user.home}
          </TableRow>
          <TableRow label={"Language"}>
            {systemInfo?.user.lang}
          </TableRow>
          <TableRow label={"TimeZone"}>
            {systemInfo?.user.timezone}
          </TableRow>
        </Table>

        <Table header={"System"}>
          <TableRow label={"Processors"}>
            {systemInfo?.sys.processors}
          </TableRow>
          <TableRow label={"Max Memory"}>
            {formatBytes( systemInfo?.sys.maxMemory )}
          </TableRow>
          <TableRow label={"Total Memory"}>
            {formatBytes( systemInfo?.sys.totalMemory )}
          </TableRow>
          <TableRow label={"Free Memory"}>
            {formatBytes( systemInfo?.sys.freeMemory )}
          </TableRow>
        </Table>

      </div>

    </>
  );

};

export { App };