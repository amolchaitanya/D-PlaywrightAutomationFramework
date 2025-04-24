import {Page} from "@playwright/test";
import { error } from "console";


export default class LoginPage {


constructor (page) {
    this.page = page;
    this.usernameinputselector = "#username";
    this.passwordinputselector ="#password";
    this.loginbuttonselector ="#Login";
    
}

async navigatetoLoginPage(){
    await this.page.goto("/");
}

async fillUsername(){
    await this.page.fill(this.usernameinputselector, "username");
}

async fillPassword(){

    await this.page.fill(this.passwordinputselector,"password");
}

async clickLoginbutton(){

    await this.page.click(this.loginbuttonselector).catch((error) =>{

        console.error("Error logging in"+ error)
        throw error;
    }    )
    .then(()=>console.log("clicked login successfully"))
}

}
