// shop.js
import { phone } from "./phone"; 

export class shop extends phone {
  constructor(brand, shopname) {
    super(brand); 
    this.shopname = shopname;
    console.log(`Name of Phone: ${brand}`);
    console.log(`Name of shop: ${shopname}`);
  }

  shopOrigin(shoplocation) {
    console.log(`Shop location: ${shoplocation}`);
  }
}
