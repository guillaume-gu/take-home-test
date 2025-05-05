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

  updatePharmacy() {
    this.drugs = this.drugs.map((drug) => {
      // Magic Pill is always the same (that's MAGIC !!!)
      if (drug.name === "Magic Pill") {
        return drug;
      }

      this.updatePharmacyByName(drug, true);

      if (drug.expiresIn >= 0) {
        return drug;
      }

      this.updatePharmacyByName(drug);

      return drug;
    });

    return this.drugs;
  }

  updatePharmacyByName(drug, descreaseExpiresIn = false) {
    if (drug.name === "Fervex") {
      this.udpateFervex(drug);
    } else if (drug.name === "Herbal Tea") {
      this.updateHerbalTea(drug);
    } else if (drug.name === "Dafalgan") {
      this.updateDafalgan(drug);
    } else {
      this.updateDefaultDrug(drug);
    }

    if (descreaseExpiresIn) {
      this.descreaseExpiresIn(drug);
    }
  }

  udpateFervex(drug) {
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    } else if (drug.benefit < 50) {
      const isInf6 = drug.expiresIn < 6;
      const isInf11 = drug.expiresIn < 11;
      const valToIncrease = isInf6 ? 3 : isInf11 ? 2 : 1;
      this.increaseBenefit(drug, valToIncrease);
    }
  }

  updateHerbalTea(drug) {
    if (drug.benefit < 50) {
      this.increaseBenefit(drug);
    }
  }

  updateDafalgan(drug) {
    this.decreaseBenefit(drug, 2);
  }

  updateDefaultDrug(drug) {
    this.decreaseBenefit(drug);
  }

  descreaseExpiresIn(drug) {
    drug.expiresIn = drug.expiresIn - 1;
  }

  increaseBenefit(drug, rate = 1) {
    drug.benefit = drug.benefit + rate;
  }

  decreaseBenefit(drug, rate = 1) {
    if (drug.benefit > 0) {
      drug.benefit = drug.benefit - rate;
    }
  }
}
