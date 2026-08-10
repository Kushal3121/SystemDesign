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
        List<SpotType> preferredSpotTypes = getPreferredSpotTypes(vehicle);

        // Iterate through the preferred spot types and find the first available spot of that type.
        for (SpotType preferredType : preferredSpotTypes) {
            for (Spot spot : spots) {
                if (spot.isAvailable() && spot.getType() == preferredType) {
                    return Optional.of(spot);
                }
            }
        }

        return Optional.empty();
    }

    // This method defines the preferred spot types for each vehicle type.
    private List<SpotType> getPreferredSpotTypes(Vehicle vehicle) {
        
        if (vehicle.getType() == VehicleType.BIKE) {
            return List.of(
                    SpotType.BIKE,
                    SpotType.COMPACT,
                    SpotType.LARGE
            );
        }

        if (vehicle.getType() == VehicleType.CAR) {
            return List.of(
                    SpotType.COMPACT,
                    SpotType.LARGE
            );
        }

        if (vehicle.getType() == VehicleType.TRUCK) {
            return List.of(
                    SpotType.LARGE
            );
        }

        return List.of();
    }

}