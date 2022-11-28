package com.example.springboot.jdbc;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

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
}
