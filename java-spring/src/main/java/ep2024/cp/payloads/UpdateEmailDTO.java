package ep2024.cp.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UpdateEmailDTO(
        @NotBlank(message = "Email must not be empty!")
        @Email(message = "Email should be valid")
        String email
) {
}