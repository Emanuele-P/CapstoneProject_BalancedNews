package ep2024.cp.payloads;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UpdateNameDTO(
        @NotBlank(message = "Name must not be empty!")
        @Size(min = 3, max = 30, message = "Name must be between 3 and 30 characters.")
        String name
) {
}