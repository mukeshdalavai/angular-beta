import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }



gettracksurl : string = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=7d6e67fa3d63711e20bc33161a317f6d&format=json";

 getAllTracks()
 {
   console.log("Hitting Services");
   return this.http.get<any>(this.gettracksurl);
 }

 saveRestaurant(restaurant){
   var saveRestaurantUrl= "http://localhost:8080/api/v1/restaurant-profile/";
   console.log("Saving Restaurant", restaurant);
   return this.http.post<any>(saveRestaurantUrl,restaurant);
 }

 saveCharity(charity){
  var saveCharityUrl= "http://localhost:8080/api/v1/charity-profile/";
  console.log("Saving Charity", charity);
  return this.http.post<any>(saveCharityUrl,charity);
}

saveDeliveryBoy(deliveryBoy){
  var saveDeliveryBoyUrl= "http://localhost:8080/api/v1/deliveryBoy-profile/";
  console.log("Saving DeliveryBoy", deliveryBoy);
  return this.http.post<any>(saveDeliveryBoyUrl,deliveryBoy);
 }
 
 fetchRestaurantProfile(username){
  var url= `http://localhost:8080/api/v1/restaurant-profile/?username=${username}`;
  console.log("Fetching Restaurant With Username : ", username);
  return this.http.get<any>(url);
 }
 
 fetchCharityProfile(username){
  var url= `http://localhost:8080/api/v1/charity-profile/?username=${username}`;
  console.log("Fetching Charity With Username : ", username);
  return this.http.get<any>(url);
 }
 
 fetchDeliveryBoyProfile(username){
  var url= `http://localhost:8080/api/v1/deliveryBoy-profile/?username=${username}`;
  console.log("Fetching Delivery Boy With Username : ", username);
  return this.http.get<any>(url);
 }
 
 updateRestaurantDetails(details){
 
  var url= "http://localhost:8060/updateRestaurantDetails";
  // var header = new HttpHeaders();
  // header.append("Content-Type","application/json");
  console.log("Updating Restaurant Details With Username : ", details.restaurantId , " And Food Availability : " , details.foodAvailability);
  return this.http.put<any>(url,details);
 }
 
 fetchRestaurantLogs(username){
   var url= `http://localhost:8090/api/v1/restaurant-logs/?username=${username}`;
   console.log("Fetching Restaurant's Logs With Username : ", username);
   return this.http.get<any>(url);
  }
 
  fetchRestaurantFoodStatus(username){
   var url= `http://localhost:8090/api/v1/restaurant-status/?username=${username}`;
   console.log("Fetching Restaurant's Food Status With Username : ", username);
   return this.http.get<any>(url);
  }
 
 fetchCharityLogs(username){
   var url= `http://localhost:8070/api/v1/charity-logs/?username=${username}`;
   console.log("Fetching Charity's Logs With Username : ", username);
   return this.http.get<any>(url);
  }
 
 fetchCharityFoodStatus(username){
  var url= `http://localhost:8070/api/v1/charity-status/?username=${username}`;
  console.log("Fetching Charity's Food Status With Username : ", username);
  return this.http.get<any>(url);
 }
 
 fetchDeliveryBoyLogs(username){
   var url= `http://localhost:8040/api/v1/deliveryBoy-logs/?username=${username}`;
   console.log("Fetching Delivery Boy's Route Status With Username : ", username);
   return this.http.get<any>(url);
  }
 
 fetchDeliveryBoyRoute(username){
   var url= `http://localhost:8040/api/v1/deliveryBoy-status/?username=${username}`;
   console.log("Fetching Delivery Boy's Route Status With Username : ", username);
   return this.http.get<any>(url);
  }
}