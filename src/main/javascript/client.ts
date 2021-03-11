export async function fetchSystemInfo(): Promise<SystemInfo> {

  const response = await fetch( "/api/system-info" );

  if( response.ok && response.headers.get( "Content-Type" ) === "application/json" ) {
    return await response.json();
  }

  throw new Error( "Failed to fetch system info!" );

}

export interface SystemInfo {
  time: number;
  jvm: {
    vendor: string;
    name: string;
    version: string;
  }
  os: {
    arch: string;
    name: string;
    version: string;
  }
  user: {
    name: string;
    home: string;
    lang: string;
    timezone: string;
  }
  sys: {
    processors: number;
    maxMemory: number;
    totalMemory: number;
    freeMemory: number;
  }
}