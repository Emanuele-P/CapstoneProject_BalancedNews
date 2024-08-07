package ep2024.cp.payloads;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UpdateUsernameDTO(@NotBlank(message = "Username must not be empty!")
                                @Size(min = 3, max = 30, message = "Username must be between 3 and 30 characters.")
                                String username) {
}
