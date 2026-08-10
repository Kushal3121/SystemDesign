package parkinglot.model.entities;

import parkinglot.model.enums.PaymentType;

public class Payment {
    private final String paymentId;
    private final String ticketId;
    private final double amount;
    private final PaymentType type;

    public Payment(String paymentId, String ticketId, double amount, PaymentType type) {
        this.paymentId = paymentId;
        this.ticketId = ticketId;
        this.amount = amount;
        this.type = type;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public String getTicketId() {
        return ticketId;
    }

    public double getAmount() {
        return amount;
    }

    public PaymentType getType() {
        return type;
    }
}
