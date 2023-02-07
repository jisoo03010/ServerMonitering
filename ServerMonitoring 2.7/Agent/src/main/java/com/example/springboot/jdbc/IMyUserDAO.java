package com.example.springboot.jdbc;


import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface IMyUserDAO {


	 public int UserServerInfo(String CpuUsage, String MemoryFreespace, String
			 MemoryTotalSpace, float CpuCore,
	 float CpuProcessors, String ServerName);
}