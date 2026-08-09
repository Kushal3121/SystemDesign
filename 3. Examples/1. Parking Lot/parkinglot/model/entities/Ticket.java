package parkinglot.model.entities;

import java.time.Instant;

import parkinglot.model.enums.SpotType;
import parkinglot.model.enums.TicketStatus;
import parkinglot.model.enums.VehicleType;

public class Ticket {
    private final String ticketId;
    private final Instant entryTime;
    private TicketStatus status;

    // Spot snapshot
    private final String spotId;
    private final SpotType spotType;

    // Vehicle snapshot
    private final String vehicleId;
    private final VehicleType vehicleType;

    public Ticket(String ticketId, Vehicle vehicle, Spot spot) {
        this.ticketId = ticketId;
        this.spotId = spot.getId();
        this.vehicleId = vehicle.getPlate();
        this.entryTime = Instant.now();
        this.status = TicketStatus.ACTIVE;
        this.spotType = spot.getType();
        this.vehicleType = vehicle.getType();
    }

    public String getTicketId() {
        return ticketId;
    }

    public Instant getEntryTime() {
        return entryTime;
    }

    public TicketStatus getStatus() {
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

    public void setStatus(TicketStatus status) {
        // This method can be used to update the ticket status (e.g., from ACTIVE to PAID or LOST)
        this.status = status;
    }
}
