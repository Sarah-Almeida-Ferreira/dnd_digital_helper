export class Atributo {
  public nome: String = ""
  public valor: number | null = null
  public modificador: number | null = null

  constructor(atr?: Partial<Atributo>) {
    Object.assign(this, atr)
  }

  obterModificador(): number | null {
    if (this.valor) {
      this.valor = Number(this.valor)

      if (this.valor === 1) {
        this.modificador = -5;
      } else if (this.valor >= 2 && this.valor <= 3) {
        this.modificador = -4;
      } else if (this.valor >= 4 && this.valor <= 5) {
        this.modificador = -3;
      } else if (this.valor >= 6 && this.valor <= 7) {
        this.modificador = -2;
      } else if (this.valor >= 8 && this.valor <= 9) {
        this.modificador = -1;
      } else if (this.valor >= 10 && this.valor <= 11) {
        this.modificador = 0;
      } else if (this.valor >= 12 && this.valor <= 13) {
        this.modificador = 1;
      } else if (this.valor >= 14 && this.valor <= 15) {
        this.modificador = 2;
      } else if (this.valor >= 16 && this.valor <= 17) {
        this.modificador = 3;
      } else if (this.valor >= 18 && this.valor <= 19) {
        this.modificador = 4;
      } else if (this.valor >= 20 && this.valor <= 21) {
        this.modificador = 5;
      } else if (this.valor >= 22 && this.valor <= 23) {
        this.modificador = 6;
      } else if (this.valor >= 24 && this.valor <= 25) {
        this.modificador = 7;
      } else if (this.valor >= 26 && this.valor <= 27) {
        this.modificador = 8;
      } else if (this.valor >= 28 && this.valor <= 29) {
        this.modificador = 9;
      } else if (this.valor === 30) {
        this.modificador = 10;
      } else {
        this.modificador = null
      }
    }
    return this.modificador
  }
}