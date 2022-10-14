package com.example.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@SuppressWarnings("serial")
@Data
@Entity // 객체와 테이블 매핑
@Table(name = "USER") // 테이블 지정
public class Membererd implements Serializable {
	
	
	@Id
	@Column(name = "ID") // 컬럼 지정
	private String id;

	@Column(name = "NAME")
	private String name;


}