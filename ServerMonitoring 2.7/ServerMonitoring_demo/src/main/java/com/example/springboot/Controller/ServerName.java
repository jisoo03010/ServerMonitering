package com.example.springboot.Controller;

public class ServerName {
	static String ServerNam;

	public static String getServerNam() {
		return ServerNam;
	}

	public static void setServerNam(String serverNam) {
		ServerNam = serverNam;
	}

	@Override
	public String toString() {
		return ServerNam;
	}

}
