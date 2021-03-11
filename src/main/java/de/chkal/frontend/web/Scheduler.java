package de.chkal.frontend.web;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Schedule;
import javax.ejb.Stateless;

@Stateless
public class Scheduler {

  @Schedule(hour = "*", minute = "*", second = "*/10", persistent = false)
  public void tick() {

    List<byte[]> store = new ArrayList<>();

    for( int i = 0; i < 18; i++ ) {

      // allocate some memory
      store.add( new byte[10 * 1024 * 1024] );

      // wait a bit
      try {
        Thread.sleep( 500 );
      }
      catch( InterruptedException e ) {
        throw new IllegalStateException( e );
      }

    }

  }

}
