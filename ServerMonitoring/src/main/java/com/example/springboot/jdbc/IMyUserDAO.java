package com.example.springboot.jdbc;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface IMyUserDAO {

	public List<MyUserDTO> CPUlistDAO();
	public void writeDao(String cpuusage, String memoryfreespace, String memorytotalspace, int cpucore, int  cpuprocessors);
	public List<MyUserDTO> MemorylistDAO();
	public List<MyUserDTO> DeletelistDAO();
	public void deleted();
	public int  ArrayListInsertDAO( String ServerName, String ServerIP,  String ServerPort, String ServerIN, String ServerPw );
	public List<MyUserDTO> ServerListDAO();
	public List<MyUserDTO> SelectFormDataDAO(String ServerName);
	public int UpdateFormDAO(@Param("serverName")String serverName,  @Param("ServerIP")String ServerIP, 
			@Param("ServerPort")String ServerPort, @Param("ServerIN")String ServerIN, @Param("ServerPw")String ServerPw, @Param("serverName2")String serverName2 );
	public List<MyUserDTO> SelectServerName();
}
