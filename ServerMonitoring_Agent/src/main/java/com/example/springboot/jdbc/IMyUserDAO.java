package com.example.springboot.jdbc;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface IMyUserDAO {

	public void writeDao(String cpuusage, String memoryfreespace, String memorytotalspace, int cpucore, int  cpuprocessors);
	//public List<MyUserDTO> DeletelistDAO();
	public void deleted();
	
	public List<MyUserDTO> CpuSend(String  ServerName);
	public List<MyUserDTO> MemorySend(String ServerName);
	
	
	public int  Auth( String ServerName, String ServerIP,  String ServerPort, String ServerIN, String ServerPw );
	public List<MyUserDTO> ServerPeople();
	
	
	public List<MyUserDTO> SelectForm(String ServerName);
	public int UpdateForm(@Param("serverName")String serverName,  @Param("ServerIP")String ServerIP,
			@Param("ServerPort")String ServerPort, @Param("ServerIN")String ServerIN, @Param("ServerPw")String ServerPw, @Param("serverName2")String serverName2 );
	public List<MyUserDTO> SelectServerName();
	public int DeleteForm(@Param("ServerName")String serverName);
	
	

	//public int UserServerInfo(float CpuUsage, float MemoryFreespace, float MemoryTotalSpace, float CpuCore,
			//float CpuProcessors, String ServerName);
}