export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  // The function's name should rather be updateBenefitAndExpireValue
  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => {
      // Magic Pill is always the same (that's MAGIC !!!)
      if (drug.name === "Magic Pill") {
        return drug;
      }

      if (drug.name === "Fervex") {
        // No use to add benefit since it will always be 0 when expiresIn is already inferior as 0.
        if (drug.benefit < 50 && drug.expiresIn >= 0) {
          this.addBenefit(drug);
          if (drug.expiresIn < 11) {
            this.addBenefit(drug);
          }
          if (drug.expiresIn < 6) {
            this.addBenefit(drug);
          }
        }
      }
      // Always good to drink some herbal tea
      else if (drug.name === "Herbal Tea") {
        if (drug.benefit < 50) {
          this.addBenefit(drug);
        }
      }
      // Dafalgan is HERE
      else if (drug.name === "Dafalgan") {
        this.decreaseBenefit(drug, 2);
      }
      // Decrease the rest
      else {
        this.decreaseBenefit(drug);
      }

      drug.expiresIn = drug.expiresIn - 1;

      if (drug.expiresIn < 0) {
        // The older Herbel Tea gets, the better it tastes (or benefit) :D, but not to much, never more than 50
        if (drug.name === "Herbal Tea") {
          if (drug.benefit < 50) {
            this.addBenefit(drug);
          }
        }
        // Fervex sucks when it expires, be carefull
        else if (drug.name === "Fervex") {
          drug.benefit = 0;
        }
        // Dafalgan is HERE
        else if (drug.name === "Dafalgan") {
          this.decreaseBenefit(drug, 2);
        }
        // Decrease the rest
        else {
          this.decreaseBenefit(drug);
        }
      }

      return drug;
    });

    return this.drugs;
  }

  addBenefit(drug) {
    drug.benefit = drug.benefit + 1;
  }

  decreaseBenefit(drug, rate = 1) {
    if (drug.benefit > 0) {
      drug.benefit = drug.benefit - rate;
    }
  }
}
