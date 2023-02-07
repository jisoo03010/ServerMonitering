package com.example.java;

import java.net.InetAddress;

public class test {
	static String ServerName = null;
	public static void GetServerName() {

			try {
				ServerName =InetAddress.getLocalHost().getHostName();
			} catch (java.net.UnknownHostException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		System.out.println(ServerName);
	}
	
}
