import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  suite("Test benefit's functions", () => {
    it("should increase benefit", () => {
      const drugTest = [new Drug("test", 2, 3)];
      const drugResult = [new Drug("test", 2, 4)];

      const pharmacy = new Pharmacy(drugTest);
      pharmacy.increaseBenefit(pharmacy.drugs[0]);

      expect(pharmacy.drugs).toEqual(drugResult);
    });

    it("should increase benefit by 2", () => {
      const drugTest = [new Drug("test", 2, 3)];
      const drugResult = [new Drug("test", 2, 5)];

      const pharmacy = new Pharmacy(drugTest);
      pharmacy.increaseBenefit(pharmacy.drugs[0], 2);

      expect(pharmacy.drugs).toEqual(drugResult);
    });

    it("should decrease benefit", () => {
      const drugTest = [new Drug("test", 2, 3)];
      const drugResult = [new Drug("test", 2, 2)];

      const pharmacy = new Pharmacy(drugTest);
      pharmacy.decreaseBenefit(pharmacy.drugs[0]);

      expect(pharmacy.drugs).toEqual(drugResult);
    });

    it("should decrease benefit by 2", () => {
      const drugTest = [new Drug("test", 2, 3)];
      const drugResult = [new Drug("test", 2, 1)];

      const pharmacy = new Pharmacy(drugTest);
      pharmacy.decreaseBenefit(pharmacy.drugs[0], 2);

      expect(pharmacy.drugs).toEqual(drugResult);
    });
  });

  it("should decrease expiresIn", () => {
    const drugTest = [new Drug("test", 2, 3)];
    const drugResult = [new Drug("test", 1, 3)];

    const pharmacy = new Pharmacy(drugTest);
    pharmacy.descreaseExpiresIn(pharmacy.drugs[0]);

    expect(pharmacy.drugs).toEqual(drugResult);
  });

  suite("Test function updatePharmacyByName with default parameters", () => {
    it("should decrease benefit of normal drug", () => {
      const drugTest = [new Drug("test", 15, 3)];
      const drugResult = [new Drug("test", 15, 2)];

      const pharmacy = new Pharmacy(drugTest);
      pharmacy.updatePharmacyByName(pharmacy.drugs[0]);

      expect(pharmacy.drugs).toEqual(drugResult);
    });

    it("should increase Fervex's benefit", () => {
      const drugTest = [new Drug("Fervex", 15, 3)];
      const drugResult = [new Drug("Fervex", 15, 4)];

      const pharmacy = new Pharmacy(drugTest);
      pharmacy.updatePharmacyByName(pharmacy.drugs[0]);

      expect(pharmacy.drugs).toEqual(drugResult);
    });

    it("should increase Herbal Tea's benefit", () => {
      const drugTest = [new Drug("Herbal Tea", 15, 3)];
      const drugResult = [new Drug("Herbal Tea", 15, 4)];

      const pharmacy = new Pharmacy(drugTest);
      pharmacy.updatePharmacyByName(pharmacy.drugs[0]);

      expect(pharmacy.drugs).toEqual(drugResult);
    });

    it("should decrease Dafalgan's benefit by 2", () => {
      const drugTest = [new Drug("Dafalgan", 15, 3)];
      const drugResult = [new Drug("Dafalgan", 15, 1)];

      const pharmacy = new Pharmacy(drugTest);
      pharmacy.updatePharmacyByName(pharmacy.drugs[0]);

      expect(pharmacy.drugs).toEqual(drugResult);
    });
  });

  suite(
    "Test function updatePharmacyByName with second parameter descreaseExpiresIn equal true",
    () => {
      it("should decrease benefit of normal drug and decrease expiresIn", () => {
        const drugTest = [new Drug("test", 15, 3)];
        const drugResult = [new Drug("test", 14, 2)];

        const pharmacy = new Pharmacy(drugTest);
        pharmacy.updatePharmacyByName(pharmacy.drugs[0], true);

        expect(pharmacy.drugs).toEqual(drugResult);
      });

      it("should increase benefit of Fervex drug and decrease expiresIn", () => {
        const drugTest = [new Drug("Fervex", 15, 3)];
        const drugResult = [new Drug("Fervex", 14, 4)];

        const pharmacy = new Pharmacy(drugTest);
        pharmacy.updatePharmacyByName(pharmacy.drugs[0], true);

        expect(pharmacy.drugs).toEqual(drugResult);
      });

      it("should increase Herbal Tea's benefit and decrease expiresIn", () => {
        const drugTest = [new Drug("Herbal Tea", 15, 3)];
        const drugResult = [new Drug("Herbal Tea", 14, 4)];

        const pharmacy = new Pharmacy(drugTest);
        pharmacy.updatePharmacyByName(pharmacy.drugs[0], true);

        expect(pharmacy.drugs).toEqual(drugResult);
      });

      it("should decrease Dafalgan's benefit by  and decrease expiresIn", () => {
        const drugTest = [new Drug("Dafalgan", 15, 3)];
        const drugResult = [new Drug("Dafalgan", 14, 1)];

        const pharmacy = new Pharmacy(drugTest);
        pharmacy.updatePharmacyByName(pharmacy.drugs[0], true);

        expect(pharmacy.drugs).toEqual(drugResult);
      });
    }
  );

  it("should decrease the benefit and expiresIn", () => {
    const drugsTest = [
      new Drug("Dafalgan", 2, 3),
      new Drug("Herbal Tea", 2, 3),
      new Drug("Fervex", 2, 3),
      new Drug("Doliprane", 2, 3)
    ];
    const drugsResult = [
      new Drug("Dafalgan", 1, 1),
      new Drug("Herbal Tea", 1, 4),
      new Drug("Fervex", 1, 6),
      new Drug("Doliprane", 1, 2)
    ];
    const pharmacy = new Pharmacy(drugsTest);

    expect(pharmacy.updatePharmacy()).toEqual(drugsResult);
  });
});
