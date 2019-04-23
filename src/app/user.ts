export  class  User {
    fName: string;
    category: string;
    domicile: string;
    birth: string;
    marksheet: string;
    policeClearance: string;
    passport: string;
    declaration: string;
    date:string;
    fatherName:string;
    motherName:string;

    constructor(fName, category, domicile, birth, marksheet, policeClearance, passport, declaration,date,fatherName,motherName){
        this.fName = fName;
        this.category = category;
        this.domicile = domicile;
        this.birth = birth;
        this.marksheet = marksheet;
        this.policeClearance = policeClearance;
        this.passport = passport;
        this.declaration = declaration;
        this.date = date;
        this.fatherName=fatherName;
        this.motherName=motherName;
    }

   
}