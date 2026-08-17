package parkinglot.strategy;

import java.util.UUID;

import parkinglot.model.entities.Payment;
import parkinglot.model.enums.PaymentType;

public class CardPaymentStrategy implements PaymentStrategy {

    @Override
    public Payment pay(String ticketId, double amount) {
        // Generate a unique payment ID for the transaction
        String paymentId = UUID.randomUUID().toString(); 

        return new Payment(paymentId, ticketId, amount, PaymentType.CARD);
    }
    
}
