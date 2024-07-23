package ep2024.cp.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "roles")
@NoArgsConstructor
@Getter
@Setter
public class Role {
    @ManyToMany(mappedBy = "roles")
    @JsonBackReference
    List<User> users;
    @Id
    @GeneratedValue
    private UUID id;
    private String name;

    public Role(String name) {
        this.name = name;
    }
}