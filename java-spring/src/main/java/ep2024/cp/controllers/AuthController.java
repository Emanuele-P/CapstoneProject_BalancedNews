package ep2024.cp.controllers;

import ep2024.cp.entities.User;
import ep2024.cp.exceptions.BadRequestException;
import ep2024.cp.payloads.NewUserDTO;
import ep2024.cp.payloads.UserLoginDTO;
import ep2024.cp.payloads.UserLoginResponseDTO;
import ep2024.cp.security.JWTTools;
import ep2024.cp.services.AuthService;
import ep2024.cp.services.UserRolesService;
import ep2024.cp.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UsersService usersService;

    @Autowired
    private JWTTools jwtTools;

    @Autowired
    private UserRolesService rolesService;


    @PostMapping("/login")
    public UserLoginResponseDTO login(@RequestBody UserLoginDTO payload) {
        return new UserLoginResponseDTO(authService.authenticateUserAndGenerateToken(payload));
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public User saveUser(@RequestBody @Validated NewUserDTO body, BindingResult validationResult) {
        if (validationResult.hasErrors()) {
            throw new BadRequestException(validationResult.getAllErrors());
        }
        return usersService.save(body);
    }
}
