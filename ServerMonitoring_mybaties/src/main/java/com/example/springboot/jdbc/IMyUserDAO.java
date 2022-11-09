package com.example.springboot.jdbc;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface IMyUserDAO {

	public List<MyUserDTO> listDAO();
	public void writeDao(String cpuusage, String memoryfreespace, String memorytotalspace, int cpucore, int  cpuprocessors);
}
//저장기능
		