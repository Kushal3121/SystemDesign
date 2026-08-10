package parkinglot.strategy;

import java.time.Duration;
import java.time.Instant;

import parkinglot.model.entities.Ticket;
import parkinglot.model.enums.VehicleType;

public class HourlyPricingStrategy implements PricingStrategy {

    private static final double BIKE_RATE = 2.0;
    private static final double CAR_RATE = 5.0;
    private static final double TRUCK_RATE = 8.0;

    @Override
    public double calculateFee(Ticket ticket, Instant exitTime) {

        Duration duration = Duration.between(ticket.getEntryTime(), exitTime);

        if (duration.isNegative()) {
            throw new IllegalArgumentException("Exit time cannot be before entry time.");
        }

        // Calculate total hours, rounding up to the next whole hour
        double totalHours = duration.toSeconds() / 3600.0;
        long chargedHours = Math.max(1, (long) Math.ceil(totalHours));

        // Determine the hourly rate based on the vehicle type
        double hourlyRate = getHourlyRate(ticket.getVehicleType());
        return chargedHours * hourlyRate;
    }

    private double getHourlyRate(VehicleType vehicleType) {

        switch (vehicleType) {
            case BIKE:
                return BIKE_RATE;

            case CAR:
                return CAR_RATE;

            case TRUCK:
                return TRUCK_RATE;

            default:
                throw new IllegalArgumentException("Unsupported vehicle type.");
        }
    }
}