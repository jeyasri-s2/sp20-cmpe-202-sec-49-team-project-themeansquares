package themeansquare.controller;

import themeansquare.service.IRegistration;
import themeansquare.service.internal.Registration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

	@GetMapping("/registration")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name, @RequestParam(value = "test", defaultValue = "test") String test) {
        IRegistration reg = new Registration();
        return String.format("Hello %s!", test);
	}

}




