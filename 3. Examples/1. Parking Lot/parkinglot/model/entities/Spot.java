package parkinglot.model.entities;

import parkinglot.model.enums.SpotType;

public class Spot {
    private final String id;
    private final SpotType type;
    private Vehicle parkedVehicle;

    public Spot(String id, SpotType type) {
        this.id = id;
        this.type = type;
        this.parkedVehicle = null;
    }

    public String getId() {
        return id;
    }

    public SpotType getType() {
        return type;
    }

    public Vehicle getVehicle() {
        return parkedVehicle;
    }

    public boolean isAvailable() {
        return parkedVehicle == null;
    }

    public void parkVehicle(Vehicle vehicle) {
        if (isAvailable()) {
            this.parkedVehicle = vehicle;
        } else {
            throw new IllegalStateException("Spot is already occupied.");
        }
    }

    public void removeVehicle() {
        if (!isAvailable()) {
            this.parkedVehicle = null;
        } else {
            throw new IllegalStateException("Spot is already empty.");
        }
    }
}