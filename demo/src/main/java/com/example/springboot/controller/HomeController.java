package com.example.springboot.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@Controller
public class HomeController  {

	
	@RequestMapping("/java")  
	public static void main(String[] args) {      
		System.out.println("helloWorld!!!");  
	}   
	
	
	@RequestMapping("/d")  
	public String Index() {      
		return "index";  
	}
	
	
	
	@RequestMapping("/index")
	public String indexPage()  {
		return "WEB-INF/jsp/index";
	}

	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping("/db")
	public String index(Model model) {
		User user = userRepository.findById("nowonbun").get();
		model.addAttribute("data", user.getName());
		return "WEB-INF/jsp/intro";
	}

}
