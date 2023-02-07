package com.example.java;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class GetHostName {

	static String Name = null;
	public static void main(String[] args) {
		try {
			Name= InetAddress.getLocalHost().getHostName();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}

	System.out.println(Name);
	}
}
