#include <iostream>
#include <vector>
using namespace std;

enum class PizzaSize {
    SMALL,
    MEDIUM,
    LARGE
};

class Topping {
public:
    string name;
    double price;

    Topping(string name, double price)
        : name(name), price(price) {}
};

class Pizza {
private:
    PizzaSize size;
    vector<Topping*> toppings;

    double getBasePrice() {

        if (size == PizzaSize::SMALL) {
            return 8.0;
        }

        if (size == PizzaSize::MEDIUM) {
            return 10.0;
        }

        return 12.0;
    }

public:
    Pizza(PizzaSize size)
        : size(size) {}

    void addTopping(Topping* topping) {
        toppings.push_back(topping);
    }

    double calculatePrice() {

        double total = getBasePrice();

        for (Topping* topping : toppings) {
            total += topping->price;
        }

        return total;
    }
};

int main() {

    Topping cheese("Cheese", 2.0);
    Topping olives("Olives", 1.0);

    Pizza pizza(PizzaSize::LARGE);

    pizza.addTopping(&cheese);
    pizza.addTopping(&olives);

    cout << pizza.calculatePrice() << endl;

    return 0;
}