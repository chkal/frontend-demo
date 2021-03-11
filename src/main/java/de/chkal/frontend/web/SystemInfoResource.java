package de.chkal.frontend.web;

import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/system-info")
public class SystemInfoResource {

  @GET
  public JsonObject getSystemInfo() {

    Runtime runtime = Runtime.getRuntime();

    return Json.createObjectBuilder()
      .add( "time", System.currentTimeMillis() )
      .add( "jvm", Json.createObjectBuilder()
        .add( "vendor", System.getProperty( "java.vm.vendor" ) )
        .add( "name", System.getProperty( "java.vm.name" ) )
        .add( "version", System.getProperty( "java.vm.version" ) )
        .build()
      )
      .add( "os", Json.createObjectBuilder()
        .add( "arch", System.getProperty( "os.arch" ) )
        .add( "name", System.getProperty( "os.name" ) )
        .add( "version", System.getProperty( "os.version" ) )
        .build()
      )
      .add( "user", Json.createObjectBuilder()
        .add( "name", System.getProperty( "user.name" ) )
        .add( "home", System.getProperty( "user.home" ) )
        .add( "lang", System.getProperty( "user.language" ) )
        .add( "timezone", System.getProperty( "user.timezone" ) )
        .build()
      )
      .add( "sys", Json.createObjectBuilder()
        .add( "processors", runtime.availableProcessors() )
        .add( "maxMemory", runtime.maxMemory() )
        .add( "totalMemory", runtime.totalMemory() )
        .add( "freeMemory", runtime.freeMemory() )
        .build()
      )
      .build();

  }

}
