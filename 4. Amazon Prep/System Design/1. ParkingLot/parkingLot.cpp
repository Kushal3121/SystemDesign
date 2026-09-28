#include <iostream>
#include <vector>
using namespace std;

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

    Vehicle(string plate, VehicleType type)
        : licensePlate(plate), type(type) {}
};

class ParkingSpot {
private:
    int id;
    SpotType type;
    Vehicle* vehicle;

public:
    ParkingSpot(int id, SpotType type)
        : id(id), type(type), vehicle(nullptr) {}

    bool isFree() {
        return vehicle == nullptr;
    }

    void park(Vehicle* v) {
        vehicle = v;
    }

    void removeVehicle() {
        vehicle = nullptr;
    }

    SpotType getType() {
        return type;
    }

    int getId() {
        return id;
    }
};

bool canFit(VehicleType vehicleType, SpotType spotType) {

    if (vehicleType == VehicleType::BIKE) {
        return true;
    }

    if (vehicleType == VehicleType::CAR) {
        return spotType == SpotType::COMPACT ||
               spotType == SpotType::LARGE;
    }

    if (vehicleType == VehicleType::TRUCK) {
        return spotType == SpotType::LARGE;
    }

    return false;
}

class Ticket {
public:
    Vehicle* vehicle;
    ParkingSpot* spot;
    long entryTime;

    Ticket(Vehicle* v, ParkingSpot* s, long time)
        : vehicle(v), spot(s), entryTime(time) {}
};

class ParkingLot {
private:
    vector<ParkingSpot*> spots;

public:
    void addSpot(ParkingSpot* spot) {
        spots.push_back(spot);
    }

    ParkingSpot* findSpot(Vehicle* vehicle) {

        for (ParkingSpot* spot : spots) {

            if (spot->isFree() &&
                canFit(vehicle->type, spot->getType())) {

                return spot;
            }
        }

        return nullptr;
    }

    Ticket* parkVehicle(Vehicle* vehicle, long currentTime) {

        ParkingSpot* spot = findSpot(vehicle);

        if (spot == nullptr) {
            return nullptr;
        }

        spot->park(vehicle);

        return new Ticket(vehicle, spot, currentTime);
    }

    double exitVehicle(Ticket* ticket, long exitTime) {

        long duration = exitTime - ticket->entryTime;

        double fee = duration * 10;

        ticket->spot->removeVehicle();

        return fee;
    }
};