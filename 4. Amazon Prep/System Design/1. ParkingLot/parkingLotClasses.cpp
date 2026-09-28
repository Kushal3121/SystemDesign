1. Parking Lot - 
enum class VehicleType {
    BIKE,
    CAR,
    TRUCK
};

enum class SpotType {
    BIKE,
    COMPACT,
    LARGE
};

class Vehicle {
public:
    string licensePlate;
    VehicleType type;

    Vehicle(string plate, VehicleType type);
};

class ParkingSpot {
private:
    int id;
    SpotType type;
    Vehicle* vehicle;

public:
    ParkingSpot(int id, SpotType type);

    bool isFree();
    void park(Vehicle* vehicle);
    void removeVehicle();

    SpotType getType();
    int getId();
};

bool canFit(VehicleType vehicleType, SpotType spotType);

class Ticket {
public:
    Vehicle* vehicle;
    ParkingSpot* spot;
    long entryTime;

    Ticket(Vehicle* vehicle, ParkingSpot* spot, long entryTime);
};

class ParkingLot {
private:
    vector<ParkingSpot*> spots;

public:
    void addSpot(ParkingSpot* spot);

    ParkingSpot* findSpot(Vehicle* vehicle);

    Ticket* parkVehicle(Vehicle* vehicle, long currentTime);

    double exitVehicle(Ticket* ticket, long exitTime);
};