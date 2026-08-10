# Parking Lot Example

## Structure

```text
parkinglot/
  model/
    entities/
      Spot.java
      Vehicle.java
    enums/
      SpotType.java
      VehicleType.java
```

The example is split into entities and enums so it is easier to expand later with managers, services, and allocation logic.

## Interview Notes

### 1. How to allocate a parking spot to a vehicle?

Basic approach:

- Scan all spots linearly and pick the first valid available spot.
- Time complexity is O(n), simple to implement, okay for small parking lots.

Optimized approach:

- Keep available spots indexed by spot type.
- Example: `availableByType[BIKE]`, `availableByType[COMPACT]`, `availableByType[LARGE]`.
- Allocation becomes near O(1) for finding a candidate spot.

Nearest spot approach:

- Maintain sorted sets / priority queues by distance from entry gate.
- Pick nearest available spot for the vehicle type.
- After park/unpark, update the data structure.

### 2. Multi-floor, multi-entry, multi-exit design

Questions to answer in interview:

- Nearest to which gate? Entry gate, exit gate, or user preference?
- Should allocation minimize walking distance or reduce traffic congestion?
- Should VIP / handicapped / EV spots have higher priority rules?

Practical strategy:

- Track each floor and each spot with metadata:
  - floorId
  - spotType
  - distanceToEntry[gateId]
  - distanceToExit[gateId]
- For each gate, maintain per-type min-heaps of available spots sorted by distance.
- On entry, use that gate's heap to choose the best spot quickly.

### 3. Rules to clarify early in system design rounds

- Compatibility rules:
  - BIKE -> BIKE spot only
  - CAR -> COMPACT or LARGE
  - TRUCK -> LARGE only
- Spot reservation window (if allocated but not occupied yet).
- Handling concurrent requests from multiple entry gates.
- What happens when lot is full (waitlist vs reject).

### 4. Data structures to mention

- `Map<SpotType, Set<SpotId>>` for free spots by type.
- `Map<GateId, Map<SpotType, PriorityQueue<Spot>>>` for nearest-spot lookup.
- `Map<SpotId, Spot>` and `Map<TicketId, Ticket>` for quick updates.

### 5. Interview progression (good flow)

1. Start with simple O(n) allocation and clean object model.
2. Add type-based indexing to reduce search cost.
3. Add gate-aware nearest allocation for scale.
4. Address concurrency, consistency, and failure handling.
