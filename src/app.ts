import "reflect-metadata";
import express from 'express';
import { DataSource, LessThan, TreeRepositoryUtils } from 'typeorm';
import { User} from "./entity/user";
import { Profile } from "./entity/profile";
import { Company } from "./entity/Company";
import { Product } from "./entity/Product";

const app =express();
app.use(express.json());
const port =3000;

app.get('/',async function (req,res){
     const companyRepo =AppDataSource.getRepository(Company);
//many-to-Many relation




    //  const companyFound =await companyRepo.find({
    //     relations : {
    //         product :true
    //     },
    //     where : {
    //         product : {
    //             price : LessThan (45000),
    //         }
    //     }
    //  });
        let product : Product[]= [];
        
        let iphone = new Product();
        iphone.name="11 pro max";
        iphone.price= 52200;
      
        let ipad = new Product();
        ipad.name="ipad";
        ipad.price= 99900;

        let mac = new Product();
        mac.name="laptop";
        mac.price= 22000;
      
    product.push(ipad,iphone,mac);
        let company : Company = new Company();
        company.name= "apple";
        company.Adress="California";
        company.product =product;
    const datainsert = await companyRepo.save(company);
     res.json(datainsert);

    // const userRepo =AppDataSource.getRepository(User);
    // const profileRepo =AppDataSource.getRepository(Profile);
    //find 
//          const allRecords = await userRepo.find({ relations: {profile : true}});
//          res.json(allRecords);
    //      const userFound =await userRepo.findOne({where : {id: 8}});
    // if(userFound){
    //     userFound.lastName ="oishi";
    //     userFound.firstName="rishat";
    //     userFound.age=52;
    //     userFound.profile.gender= "male";
    //     userFound.profile.Adress="b baria";
    
    //     const updateRecord = await userRepo.save(userFound);
    //     res.json(updateRecord);
    // }
    // else {
    //     res.send('updated')
    // }

    //delect
    // await userRepo.delete(8);
    // res.send("Done");

//     let profile : Profile = new Profile();
//     profile.gender = 'female',
//     profile.Adress='mirpur-14';
//     // const profilinsert =await profileRepo.save(profile);
//  //insert Data
//     let user : User = new User();
//     user.firstName = "oishi";
//     user.lastName = "Chowdhury";
//     user.age= 20;
//     user.profile = profile;
//     const userunsert = await userRepo.save(user);
//     res.json(userunsert)
//update
    // await userRepo.update(1,{firstName: "aothoi", lastName: "aoyhoi", age: 20, profile: });
    // res.send("update")
//FIND BY ENTITY 
    // const record = await userRepo.findOne({where:{firstName:"mimon"}})
    // res.json(record);

})
const AppDataSource = new DataSource({
    type : "postgres",
    host : "localhost",
    port:   5432,
    username : "test",
    password: "test",
    database: "test",
    entities :["src/entity/*{ts,.js}"],
    synchronize: true,
    logging :true,
});

AppDataSource.initialize()
.then(() =>{
    console.log("connected done");
    app.listen(port, ()=>{
        console.log(`server port ${port}.`);

 })
}
)


   
