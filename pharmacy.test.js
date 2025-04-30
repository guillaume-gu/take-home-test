import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should add benefit", () => {
    const drugTest = [new Drug("test", 2, 3)];
    const drugResult = [new Drug("test", 2, 4)];

    const pharmacy = new Pharmacy(drugTest);
    pharmacy.addBenefit(pharmacy.drugs[0]);

    expect(pharmacy.drugs).toEqual(drugResult);
  });

  it("should decrease benefit", () => {
    const drugTest = [new Drug("test", 2, 3)];
    const drugResult = [new Drug("test", 2, 2)];

    const pharmacy = new Pharmacy(drugTest);
    pharmacy.decreaseBenefit(pharmacy.drugs[0]);

    expect(pharmacy.drugs).toEqual(drugResult);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugTest = [new Drug("test", 2, 3)];
    const drugResult = [new Drug("test", 1, 2)];
    const pharmacy = new Pharmacy(drugTest);

    expect(pharmacy.updateBenefitValue()).toEqual(drugResult);
  });
});
