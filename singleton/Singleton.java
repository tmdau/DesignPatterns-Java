/*
  	The Singleton's purpose is to control object creation, limiting the number of obejcts to one only. 
  	Since there is only one Singleton instance, any instance fields of a Singleton will occur only once per class, just like static fields.
  	Singletons often control access to resources such as database connections or sockets.
	For example, if you have a license for only one connection for your database or your JDBC driver has trouble with multithreading, 
	the Singleton makes sure that only one connection is made or that only one thread can access the connection at a time.
 * */


/*
 * The easiest implementation consists of a private constructor and a field to hold its result, and a static accessor method with a name like getInstance().
   The private field can be assigned from within a static initializer block or, more simply, using an initializer. 
   The getInstance( ) method (which must be public) then simply returns this instance −
 * 
 * */


public class SingletonRun {
	public static void main(String[] args) {
		Singleton tmp = Singleton.getInstance();
		tmp.demoMethod();
	}
}


class Singleton {

	private static Singleton singleton = new Singleton();

	
	private Singleton() {
	}

	public static Singleton getInstance() {
		return singleton;
	}

	protected static void demoMethod() {
		System.out.println("demoMethod for singleton");
	}
}
