package ep2024.cp.services;

import ep2024.cp.entities.Role;
import ep2024.cp.exceptions.NotFoundException;
import ep2024.cp.repositories.UserRolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRolesService {
    @Autowired
    private UserRolesRepository roleRepository;

    public Role findByName(String name) {
        return roleRepository.findByName(name)
                .orElseThrow(() -> new NotFoundException("Role not found: " + name));
    }

    public Role save(Role role) {
        return roleRepository.save(role);
    }
}
