package ep2024.cp.services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    @Autowired
    private Cloudinary cloudinaryUploader;

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
        usersRepository.findByEmail(body.email()).ifPresent(
                user -> {
                    throw new BadRequestException("The email address: " + body.email() + " is already in use!");
                }
        );
        usersRepository.findByUsername(body.username()).ifPresent(
                user -> {
                    throw new BadRequestException("Username " + body.username() + " is already in use!");
                }
        );

        User newUser = new User();
        newUser.setEmail(body.email());
        newUser.setPassword(bcrypt.encode(body.password()));
        newUser.setName(body.name());
        newUser.setSurname(body.surname());
        newUser.setUsername(body.username());
        newUser.setAvatar("https://ui-avatars.com/api/?name=" + body.name() + "+" + body.surname());

        Role newRole = userRolesService.findByName("USER");
        List<Role> roles = new ArrayList<>();
        roles.add(newRole);
        newUser.setRoles(roles);
        return usersRepository.save(newUser);
    }

    public User findByIdAndUpdate(UUID userId, NewUserDTO updatedUser) {
        User found = this.findById(userId);
        found.setEmail(updatedUser.email());
        found.setPassword(bcrypt.encode(updatedUser.password()));
        found.setName(updatedUser.name());
        found.setSurname(updatedUser.surname());
        found.setUsername(updatedUser.username());
        found.setAvatar("https://ui-avatars.com/api/?name=" + updatedUser.name() + "+" + updatedUser.surname());
        return usersRepository.save(found);
    }

    public void findByIdAndDelete(UUID userId) {
        User found = this.findById(userId);
        usersRepository.delete(found);
    }

    public String uploadAvatar(MultipartFile file) throws IOException {
        return (String) cloudinaryUploader.uploader().upload(file.getBytes(), ObjectUtils.emptyMap()).get("url");
    }

    public User updateAvatar(UUID userId, String url) {
        User employee = this.findById(userId);
        employee.setAvatar(url);
        return usersRepository.save(employee);
    }

    public User updateEmail(UUID userId, String email) {
        User user = findById(userId);
        usersRepository.findByEmail(email).ifPresent(existingUser -> {
            if (!existingUser.getId().equals(userId)) {
                throw new BadRequestException("The email address:" + email + " is already in use!");
            }
        });
        user.setEmail(email);
        return usersRepository.save(user);
    }

    public User updatePassword(UUID userId, String password) {
        User user = findById(userId);
        user.setPassword(bcrypt.encode(password));
        return usersRepository.save(user);
    }

    public User updateUsername(UUID userId, String username) {
        User user = findById(userId);
        usersRepository.findByUsername(username).ifPresent(existingUser -> {
            if (!existingUser.getId().equals(userId)) {
                throw new BadRequestException("The username: " + username + " is already in use!");
            }
        });
        user.setUsername(username);
        return usersRepository.save(user);
    }

    public User updateName(UUID userId, String name) {
        User user = findById(userId);
        user.setName(name);
        return usersRepository.save(user);
    }

    public User updateSurname(UUID userId, String surname) {
        User user = findById(userId);
        user.setSurname(surname);
        return usersRepository.save(user);
    }
}