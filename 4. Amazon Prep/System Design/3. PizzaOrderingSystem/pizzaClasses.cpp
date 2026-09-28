enum class PizzaSize {
    SMALL,
    MEDIUM,
    LARGE
};

class Topping {
public:
    string name;
    double price;

    Topping(string name, double price);
};

class Pizza {
private:
    PizzaSize size;
    vector<Topping*> toppings;

    double getBasePrice();

public:
    Pizza(PizzaSize size);

    void addTopping(Topping* topping);

    double calculatePrice();
};