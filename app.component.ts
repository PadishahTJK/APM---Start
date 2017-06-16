//IMPORTS  members  we need

// import { Component } from '@angular/core';


// Component  Decorator  defines  METADATA
// @Component({
//     selector: 'pm-app',
//     template: `
//         <h1>Angular2: Getting Started   Let see  what it brings </h1>
//     `
// })
// // here defining  Properties  and Classes

// export class AppComponent { 
//     pageTitle: string = 'ProductMng';
// }


// @Component({
//     selector: 'pm-app',
//     template: '<div> <h1> {{pageTilte}} </h1> </div>'
    
// })

// export class AppComponent{
//     pageTitle: string = 'productManagement';
// }

// @Component({
//     selector:'pm-app',
//     template:' <h1>Angular 2: Keep it Learning </h1>'
// })

// export class AppComponent{

// }

import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

// @Component({
//    // selector:'<pm-app>',
//    selector: 'pm-app',
//    template: `
//         <div> 
//         <h1> {{pageTilte}} </h1>
//         <div> First Component </div>
//         </div>
//           `
// })

@Component({
    selector: 'pm-app',
    template: `
    <prov-prov> </prov-prov>
    <div>
    <h1>{{pageTitle}}</h1>
    <div>   First Component </div>
    <pm-products>Loading..</pm-products>
    </div>
    <br />
    <test-ma> </test-ma>

    <br/><br/><br/>
    <taftish> </taftish>
    <br/><br/><br/>
   
     `,
     //Creating  a provider  that  can  return 
    providers:[ProductService]

})

export class AppComponent {
    pageTitle: string = 'Product  Management';
    
}