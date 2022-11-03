package com.example.demo.repository;

import com.example.demo.entity.MonitoringDB;
//import com.example.springboot.Controller.HomeController;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;/
import org.springframework.stereotype.Repository;

@Repository
// crud 기능을 제공하는 인터페이스
//  db 접근 메서드 사용하기 위함 ( entity 접속 )
public interface UserRepository extends JpaRepository<MonitoringDB, String> {
	//jpql
	@Query(value = "select * from mydb.MonitoringDB where startdate between date_add(startdate, INTERVAL -60 second) and startdate order by startdate desc limit 60", nativeQuery = true)
	public List<MonitoringDB> selectAllSQL();
}
