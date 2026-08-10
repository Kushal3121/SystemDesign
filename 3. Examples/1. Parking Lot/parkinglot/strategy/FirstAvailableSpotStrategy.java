package parkinglot.strategy;

import java.util.List;
import java.util.Optional;

import parkinglot.model.entities.Spot;
import parkinglot.model.entities.Vehicle;
import parkinglot.model.enums.SpotType;
import parkinglot.model.enums.VehicleType;

public class FirstAvailableSpotStrategy implements SpotAllocationStrategy {

    @Override
    public Optional<Spot> findSpot(Vehicle vehicle, List<Spot> spots) {

        // Find the first available spot that can accommodate the vehicle
        for (Spot spot : spots) {
            if (spot.isAvailable() && isCompatible(vehicle, spot)) {
                return Optional.of(spot);
            }
        }

        return Optional.empty();
    }

    // Check if the vehicle can fit in the spot based on their types
    private boolean isCompatible(Vehicle vehicle, Spot spot) {

        VehicleType vehicleType = vehicle.getType();
        SpotType spotType = spot.getType();

        if (vehicleType == VehicleType.BIKE) {
            return spotType == SpotType.BIKE
                    || spotType == SpotType.COMPACT
                    || spotType == SpotType.LARGE;
        }

        if (vehicleType == VehicleType.CAR) {
            return spotType == SpotType.COMPACT
                    || spotType == SpotType.LARGE;
        }

        if (vehicleType == VehicleType.TRUCK) {
            return spotType == SpotType.LARGE;
        }

        return false;
    }
}