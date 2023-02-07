package com.example.springboot.jdbc;


import java.sql.Time;

import lombok.Data;

@Data
public class  MyUserDTO {

	private String CpuUsage;

	// 메모리 사용 가능한 공간 / 메모리 남은 용량

	private String MemoryFreespace;

	// 메모리 총 저장 용량
	private String MemoryTotalSpace;

	// cpu 코어 개수
	private int CpuCore;

	// cpu 프로세서 개수
	private int CpuProcessors;

	// @CreationTimestamp
	private Time id;

	
	
	

	private String ServerName;
	private String ServerIP;
	private String  ServerPort;
	private String ServerIN;
	private String ServerPw;
	
	
	
	public String getServerName() {
		return ServerName;
	}

	public void setServerName(String serverName) {
		ServerName = serverName;
	}

	public String getServerIP() {
		return ServerIP;
	}

	public void setServerIP(String serverIP) {
		ServerIP = serverIP;
	}

	public String getServerPort() {
		return ServerPort;
	}

	public void setServerPort(String serverPort) {
		ServerPort = serverPort;
	}

	public String getServerIN() {
		return ServerIN;
	}

	public void setServerIN(String serverIN) {
		ServerIN = serverIN;
	}

	public String getServerPw() {
		return ServerPw;
	}

	public void setServerPw(String serverPw) {
		ServerPw = serverPw;
	}

	public MyUserDTO() {

	}

	public MyUserDTO(String CpuUsage, String MemoryFreespace, String MemoryTotalSpace, int CpuCore, int CpuProcessors) {

		this.CpuUsage = CpuUsage;
		this.MemoryFreespace = MemoryFreespace;
		this.MemoryTotalSpace = MemoryTotalSpace;
		this.CpuCore = CpuCore;
		this.CpuProcessors = CpuProcessors;
	}

	public static MyUserDTO createMember(String CpuUsage, String MemoryFreespace, String MemoryTotalSpace, int CpuCore,
			int CpuProcessors) {
		return new MyUserDTO(CpuUsage, MemoryFreespace, MemoryTotalSpace, CpuCore, CpuProcessors);
	}

	public String getCpuUsage() {
		return CpuUsage;
	}

	public void setCpuUsage(String CpuUsage) {
		this.CpuUsage = CpuUsage;
	}

	public String getMemoryFreespace() {
		return MemoryFreespace;
	}

	public void setMemoryFreespace(String MemoryFreespace) {
		this.MemoryFreespace = MemoryFreespace;
	}

	public String getMemoryTotalSpace() {
		return MemoryTotalSpace;
	}

	public void setMemoryTotalSpace(String MemoryTotalSpace) {
		this.MemoryTotalSpace = MemoryTotalSpace;
	}

	public int getCpuCore() {
		return CpuCore;
	}

	public void setCpuCore(int CpuCore) {
		this.CpuCore = CpuCore;
	}

	public int getCpuProcessors() {
		return CpuProcessors;
	}

	public void setCpuProcessors(int CpuProcessors) {
		this.CpuProcessors = CpuProcessors;
	}

	public Time getId() {
		return id;
	}

	public void setId(Time id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "{" + CpuUsage + "," + MemoryFreespace + ", " + MemoryTotalSpace + ", " + CpuCore + ", " + CpuProcessors
				+ ", " + id + "}";
	}

}
