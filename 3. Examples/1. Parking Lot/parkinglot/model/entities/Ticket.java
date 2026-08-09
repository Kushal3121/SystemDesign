package parkinglot.model.entities;

import parkinglot.model.enums.SpotType;
import parkinglot.model.enums.VehicleType;

public class Ticket {
    private final String ticketId;
    private final long entryTime;
    private final String status;
    private final String spotId;
    private final String vehicleId;
    private final SpotType spotType;
    private final VehicleType vehicleType;

    public Ticket(String ticketId, String spotId, String vehicleId, long entryTime, String status, SpotType spotType, VehicleType vehicleType) {
        this.ticketId = ticketId;
        this.spotId = spotId;
        this.vehicleId = vehicleId;
        this.entryTime = entryTime;
        this.status = status;
        this.spotType = spotType;
        this.vehicleType = vehicleType;
    }

    public String getTicketId() {
        return ticketId;
    }

    public long getEntryTime() {
        return entryTime;
    }

    public String getStatus() {
        return status;
    }

    public String getSpotId() {
        return spotId;
    }

    public String getVehicleId() {
        return vehicleId;
    }

    public SpotType getSpotType() {
        return spotType;
    }

    public VehicleType getVehicleType() {
        return vehicleType;
    }
}
