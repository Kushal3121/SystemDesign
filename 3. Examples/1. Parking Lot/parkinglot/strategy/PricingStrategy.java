package parkinglot.strategy;

import java.time.Instant;

import parkinglot.model.entities.Ticket;

public interface PricingStrategy {

    double calculateFee(Ticket ticket, Instant exitTime);

}