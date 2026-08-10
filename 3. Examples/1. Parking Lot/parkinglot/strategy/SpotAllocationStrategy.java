package parkinglot.strategy;

import java.util.List;
import java.util.Optional;

import parkinglot.model.entities.Spot;
import parkinglot.model.entities.Vehicle;

public interface SpotAllocationStrategy {
    Optional<Spot> findSpot(Vehicle vehicle, List<Spot> spots);

}