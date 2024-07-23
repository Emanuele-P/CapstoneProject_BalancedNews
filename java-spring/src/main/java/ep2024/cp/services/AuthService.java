package ep2024.cp.services;

import ep2024.cp.entities.User;
import ep2024.cp.exceptions.UnauthorizedException;
import ep2024.cp.payloads.UserLoginDTO;
import ep2024.cp.security.JWTTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UsersService usersService;

    @Autowired
    private PasswordEncoder bcrypt;

    @Autowired
    private JWTTools jwtTools;


    public String authenticateUserAndGenerateToken(UserLoginDTO payload) {

        User user = usersService.findByEmail(payload.email());
        if (bcrypt.matches(payload.password(), user.getPassword())) {
            return jwtTools.createToken(user);
        } else {
            throw new UnauthorizedException("Your credentials are incorrect!");
        }
    }
}
