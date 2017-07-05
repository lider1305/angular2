import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component"
import {CountDownComponent} from "./CountDownComponent";

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,CountDownComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}
