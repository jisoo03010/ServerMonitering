package com.example.demo.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the info database table.
 * 
 */
@Entity
@NamedQuery(name="Info.findAll", query="SELECT i FROM Info i")
public class Info implements Serializable {
	private static final long serialVersionUID = 1L;

	private int age;

	private String id;

	public Info() {
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

}