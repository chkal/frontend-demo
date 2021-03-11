export function formatBytes( bytes: number | undefined ): string | undefined {
  return bytes !== undefined
    ? `${Math.floor( bytes / ( 1024 * 1024 ) )} MB`
    : undefined;
}