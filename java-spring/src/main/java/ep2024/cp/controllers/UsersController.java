package ep2024.cp.controllers;

import ep2024.cp.entities.User;
import ep2024.cp.payloads.*;
import ep2024.cp.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    //get my profile
    @GetMapping("/me")
    public User getMyProfile(@AuthenticationPrincipal User loggedUser) {
        return usersService.findById(loggedUser.getId());
    }

    //get all profiles
    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public Page<User> getAllUsers(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size, @RequestParam(defaultValue = "id") String sortBy) {
        return usersService.getUsers(page, size, sortBy);
    }

    //update user
    @PutMapping("/{id}")
    public User findByIdAndUpdate(@PathVariable UUID id, @RequestBody NewUserDTO body) {
        return usersService.findByIdAndUpdate(id, body);
    }

    //delete user
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize("hasAuthority('ADMIN')")
    public void findByIdAndDelete(@PathVariable UUID id) {
        usersService.findByIdAndDelete(id);
    }

    // Edit user info
    @PatchMapping("/{id}/email")
    public UpdateEmailResponseDTO updateEmail(@PathVariable UUID id, @RequestBody UpdateEmailDTO dto) {
        return usersService.updateEmail(id, dto);
    }

    @PatchMapping("/{id}/name")
    public UpdateNameResponseDTO updateName(@PathVariable UUID id, @RequestBody UpdateNameDTO dto) {
        return usersService.updateName(id, dto);
    }

    @PatchMapping("/{id}/surname")
    public UpdateSurnameResponseDTO updateSurname(@PathVariable UUID id, @RequestBody UpdateSurnameDTO dto) {
        return usersService.updateSurname(id, dto);
    }

    @PatchMapping("/{id}/username")
    public UpdateUsernameResponseDTO updateUsername(@PathVariable UUID id, @RequestBody UpdateUsernameDTO dto) {
        return usersService.updateUsername(id, dto);
    }

    @PatchMapping("/{id}/password")
    public UpdatePasswordResponseDTO changePassword(@PathVariable UUID id, @RequestBody UpdatePasswordDTO dto) {
        return usersService.changePassword(id, dto);
    }

    //upload avatar
    @PostMapping("/{id}/avatar")
    public User uploadAvatar(@PathVariable UUID id, @RequestParam("avatar") MultipartFile image) throws IOException {
        String avatarURL = usersService.uploadAvatar(image);
        return usersService.updateAvatar(id, avatarURL);
    }
}

