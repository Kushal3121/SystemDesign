package parkinglot.strategy;

import parkinglot.model.entities.Payment;

public interface PaymentStrategy {
    Payment pay(String ticketId, double amount);
}
