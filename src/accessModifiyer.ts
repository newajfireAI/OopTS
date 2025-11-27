class BackAccount{
    readonly AccountID: number; // you can only read the property but you can't edit it
    public userName: string;
    protected TotalBalance: number; // you can user Private as well, but if you use Private then you can access the property TotalBalance on the only this(BackAccount) class. but when you use protected then you can use this propery on other instance but you can't change it

    constructor( AccountId: number, userName:string, TotalBalance: number){
        this.AccountID = AccountId;
        this.userName = userName;
        this.TotalBalance = TotalBalance;
    }

    addBalance(numOfamount: number){
        return this.TotalBalance+numOfamount
    }

    subBalance(numOfamount: number){
        return this.TotalBalance-numOfamount
    }


}


const MyAccount = new BackAccount(222, "Shale Newaj", 120)

console.log(MyAccount.addBalance(120))
console.log(MyAccount.subBalance(40))