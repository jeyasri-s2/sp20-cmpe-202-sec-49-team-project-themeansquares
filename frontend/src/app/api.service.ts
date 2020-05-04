import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //api_url = "https://api.wasaequreshi.com/"
  api_url = "http://localhost:8020/"
  prod_api_url = "https://api.wasaequreshi.com/"
  location_endpoint = "location"

  constructor(private http: HttpClient) {

  }

  public callLogin(formObj: any) {
    var end_point = "authNew"


    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json','Accept':'application/json',
               'Access-Control-Allow-Origin': '*' });
      console.log(params)

      let username = (formObj.get('username').value);
      let password = (formObj.get('password').value);
   //const options = { params: new HttpParams({fromString: "_page=1&_limit=20"}) };
   var params = '?username='+username+'&password='+password;

    return this.http.get(this.api_url + end_point+params)
  }
  registerUserAPI(formObj: any)
  {
    const formData = new FormData();
    formData.append('file', formObj.get('file').value);
    formData.append('bgfile', formObj.get('bgfile').value);






  }

public getAllLocations(){
    let headers = { 'Content-Type': 'application/json','Accept':'application/json',
               'Access-Control-Allow-Origin': '*' };
    return this.http.get(this.api_url + this.location_endpoint,{headers})


}
  /*
      POST Request
      regFormGroup format:
          {
            "address": {
                "state": "ca",
                "city": "random city",
                "street": "random street",
                "zipCode": 94086
            },
            "userId": {
                "password": "password",
                "username": "jeyasriCustomer"
            },
            "firstName": "Jeyasri",
            "lastName": "Customer",
            "licenseNumber": "747324",
            "licenseExpDate": "1994-05-22",
            "membershipStartDate": "2020-05-01",
            "membershipEndDate": "2021-05-01",
            "email": "jeyasriCustomer@gmail.com",
            "creditCard" : "35485739857",
            "creditCardExpDate" : "2022-05-20",
            "cvv" : "454"
          
          }
    /registration API return:
        Success:
          {"role":"Customer","id":"4","status":"200","username":"WasaeCustomer"}
        Error:
          {"message":"<some reason it failed>","status":"400"}
  */
    regAPI(regFormGroup) {
      let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
      let body = JSON.stringify(regFormGroup.value);
      let end_point = "registration";
      return this.http.post(this.prod_api_url + end_point, body, {headers});
    }

    /*
        POST Request
        damageFormGroup format:
          {
              "vehicleTypeId": {
                  "id" : 2
              },
              "damageType": "It broke alot more",
              "damageFee": 700.0
          }
        /addDamage API return:
          Success:
            {"status":"200"}
          Error:
            No failure possible
    */
    addDamageAPI(damageFormGroup) {
      let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
      let body = JSON.stringify(damageFormGroup.value);
      let end_point = "addDamage";
      return this.http.post(this.prod_api_url + end_point, body, {headers});
    }

    /*
        POST Request
        employeeFormGroup format:
          {
            "userId": {
                "password": "notsecure",
                "username": "wqureshiAdmin"
            },
            "firstName": "Wasae",
            "lastName": "Admin"
          }
        /createEmployee API return:
          Success:
            {"status":"200"}
          Error:
            No failure possible, please don't run multuple times on same data :)
    */
   createEmployeeAPI(employeeFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(employeeFormGroup.value);
    let end_point = "createEmployee";
    return this.http.post(this.prod_api_url + end_point, body, {headers});
  }

  /*
        POST Request
        priceFormGroup format:
         {
            "hourlyPrice": 50.0,
            "hourlyRange": "10 - 10",
            
            "vehicleTypeId": {
                "id": 1
            },
            "lateFee": 40.0
        }
        /addPrice API return:
          Success:
            {"status":"200"}
          Error:
            {"message":"Price for that hourly range and vehicle type exist already","status":"400"}
    */
   addPriceAPI(priceFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(priceFormGroup.value);
    let end_point = "addPrice";
    return this.http.post(this.prod_api_url + end_point, body, {headers});
  }

  /*
        POST Request
        authFormGroup format:
          {
              "username" : "jeyasriAdmin",
              "password" : "password"
            
          }
        /auth API return:
          Success:
            {"role":"Employee","id":"1","status":"200","username":"jeyasriAdmin"}
          Error:
            {"message":"Invalid password","status":"400"}
            {"message":"User does not exist","status":"400"}
    */
   authAPI(authFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(authFormGroup.value);
    let end_point = "auth";
    return this.http.post(this.prod_api_url + end_point, body, {headers});
  }
  
   /*
        POST Request
        locationFormGroup format:
          .set('contactNumber', locationFormGroup.contactNumber)
          .set('name', locationFormGroup.name)
          .set('vehicleCapacity', locationFormGroup.vehicleCapacity)
          .set('street', locationFormGroup.street)
          .set('city', locationFormGroup.city)
          .set('state', locationFormGroup.state)
          .set('zipcode', locationFormGroup.zipcode)
        /location API return:
          Success:
            subarna will add
          Error:
           subarna will add
    */
   addLocationAPI(locationFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(locationFormGroup.value);
    var params = new HttpParams()
      .set('contactNumber', locationFormGroup.contactNumber)
      .set('name', locationFormGroup.name)
      .set('vehicleCapacity', locationFormGroup.vehicleCapacity)
      .set('street', locationFormGroup.street)
      .set('city', locationFormGroup.city)
      .set('state', locationFormGroup.state)
      .set('zipcode', locationFormGroup.zipcode)
    let end_point = "location";
    return this.http.post(this.prod_api_url + end_point, {}, {headers, params});
  }

   /*
        POST Request
        reservationFormGroup format:
          {
              "username" : "jeyasriAdmin",
              "password" : "password"
            
          }
        /reservation API return:
          Success:
            {"role":"Employee","id":"1","status":"200","username":"jeyasriAdmin"}
          Error:
            {"message":"Invalid password","status":"400"}
            {"message":"User does not exist","status":"400"}
    */
   addReservationAPI(reservationFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(reservationFormGroup.value);
    let end_point = "reservation";
    return this.http.post(this.prod_api_url + end_point, body, {headers});
  }

  /*
        POST Request
        vehicleFormGroup format:
          {
              .set('licensePlate', vehicleFormGroup.licensePlate)
              .set('model', vehicleFormGroup.model)
              .set('make', vehicleFormGroup.make)
              .set('status', vehicleFormGroup.status)
              .set('vIN', vehicleFormGroup.vIN)
              .set('year', vehicleFormGroup.year)
              .set('vehicleTypeId', vehicleFormGroup.vehicleTypeId)
              .set('vehicleCondition', vehicleFormGroup.vehicleCondition)
              .set('locationId', vehicleFormGroup.locationId)
            
          }
        /vehicle API return:
          Success:
            subarna will add
          Error:
           subarna will add
    */
   addVehicleAPI(vehicleFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(vehicleFormGroup.value);
    let end_point = "vehicle";
    var params = new HttpParams()
      .set('licensePlate', vehicleFormGroup.licensePlate)
      .set('model', vehicleFormGroup.model)
      .set('make', vehicleFormGroup.make)
      .set('status', vehicleFormGroup.status)
      .set('vIN', vehicleFormGroup.vIN)
      .set('year', vehicleFormGroup.year)
      .set('vehicleTypeId', vehicleFormGroup.vehicleTypeId)
      .set('vehicleCondition', vehicleFormGroup.vehicleCondition)
      .set('locationId', vehicleFormGroup.locationId)
    return this.http.post(this.prod_api_url + end_point, {}, {headers, params});
  }

  /*
        PUT Request
        customerFormGroup format:
          {
              "creditCard": "35485739857",
              "creditCardExpDate": "2022-05-20",
              "id": 2,
              "userId": {
                  "id": 3,
                  "password": "notsecure",
                  "username": "wqureshi5"
              },
              "firstName": "Wasae",
              "lastName": "Qureshi",
              "cvv": "454",
              "licenseNumber": "747324",
              "licenseExpDate": "1994-05-22",
              "membershipStartDate": "2020-05-03",
              "membershipEndDate": "2020-11-03",
              "email": "different5@gmail.com",
              "address": {
                  "state": "ca",
                  "id": 5,
                  "street": "random street",
                  "zipCode": 94086,
                  "city": "random city"
              }
          }
        /updateCustomer API return:
          Success:
            {"status":"200"}
          Error:
            {"message":"Email taken","status":"400"}
            {"message":"username taken","status":"400"}
    */
   updateCustomerAPI(customerFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(customerFormGroup.value);
    let end_point = "updateCustomer";
    return this.http.put(this.prod_api_url + end_point, body, {headers});
  }

  /*
        PUT Request
        damageFormGroup format:
          {
                  "id": 1,
                  "vehicleTypeId": {
                      "id": 1,
                      "vehicleSize": 5,
                      "vehicleClass": "Car"
                  },
                  "damageType": "It broke",
                  "damageFee": 10.0
          }
        /updateDamage API return:
          Success:
            {"status":"200"}
          Error:
            None
    */
   updateDamageAPI(damageFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(damageFormGroup.value);
    let end_point = "updateDamage";
    return this.http.put(this.prod_api_url + end_point, body, {headers});
  }

  /*
        PUT Request
        computeInvoiceFormGroup format:
          .set('actualDropOffTime', computeInvoiceFormGroup.actualDropOffTime)
          .set('reservationId', computeInvoiceFormGroup.reservationId)
          .set('IsDamage', computeInvoiceFormGroup.IsDamage)
          .set('damageId', computeInvoiceFormGroup.damageId)
        /updatecomputeInvoice API return:
          Success:
           Ask Suburna
          Error:
           Ask Suburna
    */
   computeInvoiceAPI(computeInvoiceFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(computeInvoiceFormGroup.value);
    let end_point = "/computeInvoice";
    var params = new HttpParams()
      .set('actualDropOffTime', computeInvoiceFormGroup.actualDropOffTime)
      .set('reservationId', computeInvoiceFormGroup.reservationId)
      .set('IsDamage', computeInvoiceFormGroup.IsDamage)
      .set('damageId', computeInvoiceFormGroup.damageId)
    return this.http.put(this.prod_api_url + end_point, {}, {headers, params});
  }

  /*
        PUT Request
        locationFormGroup format:
          
          Ask Suburna
        /updatelocation API return:
          Success:
            Ask Suburna
          Error:
            Ask Suburna
    */
   updateLocationAPI(locationFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(locationFormGroup.value);
    let end_point = "location/" + locationFormGroup.id;
    return this.http.put(this.prod_api_url + end_point, body, {headers});
  }

  /*
        PUT Request
        membershipFormGroup format:
          
           .set('userId', membershipFormGroup.userId)
        /cancelMembership API return:
          Success:
            {status:200}
          Error:
            
    */
   cancelMembershipAPI(membershipFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(membershipFormGroup.value);
    let end_point = "cancelMembership";
    var params = new HttpParams()
      .set('userId', membershipFormGroup.userId)
    return this.http.put(this.prod_api_url + end_point, {}, {headers, params});
  }

  /*
        PUT Request
        membershipFormGroup format:
          
           .set('userId', membershipFormGroup.userId)
        /renewMembership API return:
          Success:
            {status:200}
          Error:
            
    */
   renewMembershipAPI(membershipFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(membershipFormGroup.value);
    let end_point = "renewMembership";
    var params = new HttpParams()
      .set('userId', membershipFormGroup.userId)
    return this.http.put(this.prod_api_url + end_point, {}, {headers, params});
  }

  /*
        PUT Request
        priceFormGroup format:
          {
              "hourlyPrice": 50.0,
              "hourlyRange": "6 - 9",
              "id": 1,
              "vehicleTypeId": {
                  "id": 1,
                  "vehicleSize": 5,
                  "vehicleClass": "Car"
              },
              "lateFee": 50.0
          }
          
        /updatePrice API return:
          Success:
           {"status":"200"}
    */
   updatePriceAPI(priceFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(priceFormGroup.value);
    let end_point = "updatePrice"
    return this.http.put(this.prod_api_url + end_point, body, {headers});
  }

   /*
        PUT Request
        reservationFormGroup format:
          ask subrana 
        /reservationCancel API return:
          ask subrana 
    */
   cancelReservationAPI(reservationFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(reservationFormGroup.value);
    let end_point = "/reservationCancel/" + reservationFormGroup.reservationId + "/" + reservationFormGroup.isLatefee
    return this.http.put(this.prod_api_url + end_point, body, {headers});
  }

   /*
        PUT Request
        vehicleFormGroup format:
          ask subrana 
        /updateVehicleWithLocationAPI API return:
          ask subrana 
    */
   updateVehicleWithLocationAPI(vehicleFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(vehicleFormGroup.value);
    let end_point = "/vehicle/" + vehicleFormGroup.id + "/" + vehicleFormGroup.vehicleTypeId + "/" + reservationFormGroup.locationId
    return this.http.put(this.prod_api_url + end_point, body, {headers});
  }

  /*
        PUT Request
        vehicleFormGroup format:
          ask subrana 
        /updateVehicleAPI API return:
          ask subrana 
    */
   updateVehicleAPI(vehicleFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(vehicleFormGroup.value);
    let end_point = "/vehicle/" + vehicleFormGroup.id 
    return this.http.put(this.prod_api_url + end_point, body, {headers});
  }

  /*
        PUT Request
        vehicleTypeFormGroup format:
           {
              "id" : 1, 
              "vehicleSize": 5,
              "vehicleClass": "Carrry"
            }
        /updateVehicleType API return:
          {"status":"200"}
    */
   updateVehicleTypeAPI(vehicleTypeFormGroup) {
    let headers = { 'Content-Type': 'application/json','Accept':'application/json', "Access-Control-Allow-Origin": "*"};
    let body = JSON.stringify(vehicleTypeFormGroup.value);
    let end_point = "updateVehicleType"
    return this.http.put(this.prod_api_url + end_point, body, {headers});
  }

}
