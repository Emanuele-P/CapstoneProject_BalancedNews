package ep2024.cp.payloads;

public class UpdateRequest {
    private String value;

    public UpdateRequest() {
    }

    public UpdateRequest(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
