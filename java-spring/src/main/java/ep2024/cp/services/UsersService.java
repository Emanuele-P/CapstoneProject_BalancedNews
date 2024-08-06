package ep2024.cp.services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import ep2024.cp.entities.Role;
import ep2024.cp.entities.User;
import ep2024.cp.exceptions.BadRequestException;
import ep2024.cp.exceptions.NotFoundException;
import ep2024.cp.payloads.*;
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

    public UpdateEmailResponseDTO updateEmail(UUID userId, UpdateEmailDTO dto) {
        User user = findById(userId);
        usersRepository.findByEmail(dto.email()).ifPresent(existingUser -> {
            if (!existingUser.getId().equals(userId)) {
                throw new BadRequestException("The email address:" + dto.email() + " is already in use!");
            }
        });
        user.setEmail(dto.email());
        usersRepository.save(user);
        return new UpdateEmailResponseDTO(user.getId());
    }

    public UpdateNameResponseDTO updateName(UUID userId, UpdateNameDTO dto) {
        User user = findById(userId);
        user.setName(dto.name());
        usersRepository.save(user);
        return new UpdateNameResponseDTO(user.getId());
    }

    public UpdateSurnameResponseDTO updateSurname(UUID userId, UpdateSurnameDTO dto) {
        User user = findById(userId);
        user.setSurname(dto.surname());
        usersRepository.save(user);
        return new UpdateSurnameResponseDTO(user.getId());
    }

    public UpdateUsernameResponseDTO updateUsername(UUID userId, UpdateUsernameDTO dto) {
        User user = findById(userId);
        usersRepository.findByUsername(dto.username()).ifPresent(existingUser -> {
            if (!existingUser.getId().equals(userId)) {
                throw new BadRequestException("The username: " + dto.username() + " is already in use!");
            }
        });
        user.setUsername(dto.username());
        usersRepository.save(user);
        return new UpdateUsernameResponseDTO(user.getId());
    }

    public UpdatePasswordResponseDTO changePassword(UUID userId, UpdatePasswordDTO dto) {
        User user = findById(userId);
        if (!bcrypt.matches(dto.oldPassword(), user.getPassword())) {
            throw new BadRequestException("Your existing password is incorrect!");
        }
        user.setPassword(bcrypt.encode(dto.newPassword()));
        usersRepository.save(user);
        return new UpdatePasswordResponseDTO(user.getId());
    }
}
