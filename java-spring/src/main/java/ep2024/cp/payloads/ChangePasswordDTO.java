package ep2024.cp.payloads;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ChangePasswordDTO(
        @NotBlank(message = "Old password must not be empty!")
        String oldPassword,

        @NotBlank(message = "New password must not be empty!")
        @Size(min = 8, max = 20, message = "New password must be between 8 and 20 characters.")
        String newPassword
) {
}
