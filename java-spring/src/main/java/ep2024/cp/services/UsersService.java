package ep2024.cp.services;

import ep2024.cp.entities.Role;
import ep2024.cp.entities.User;
import ep2024.cp.exceptions.BadRequestException;
import ep2024.cp.exceptions.NotFoundException;
import ep2024.cp.payloads.NewUserDTO;
import ep2024.cp.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private UserRolesService userRolesService;

    @Autowired
    private PasswordEncoder bcrypt;

    public Page<User> getUsers(int pageNumber, int pageSize, String sortBy) {
        if (pageSize > 20) pageSize = 20;
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy));
        return usersRepository.findAll(pageable);
    }

    public User findById(UUID userId) {
        return this.usersRepository.findById(userId).orElseThrow(() -> new NotFoundException(userId));
    }

    public User findByEmail(String email) {
        return usersRepository.findByEmail(email).orElseThrow(() -> new NotFoundException("User with email " + email + " not found!"));
    }

    public User save(NewUserDTO body) {
        this.usersRepository.findByEmail(body.email()).ifPresent(
                user -> {
                    throw new BadRequestException("The email address: " + body.email() + " is already in use!");
                }
        );

        User newUser = new User();
        newUser.setEmail(body.email());
        newUser.setPassword(bcrypt.encode(body.password()));
        newUser.setName(body.name());
        newUser.setSurname(body.surname());
        newUser.setUsername(body.name() + " " + body.surname());
        newUser.setAvatar("https://ui-avatars.com/api/?name=" + body.name() + "+" + body.surname());

        Role newRole = userRolesService.findByName("USER");
        List<Role> roles = new ArrayList<>();
        roles.add(newRole);
        newUser.setRoles(roles);
        return usersRepository.save(newUser);
    }
}