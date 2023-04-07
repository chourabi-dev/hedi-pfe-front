import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  addNewVehicule(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/vehicules/add',data,
      
      httpOptions

    )
  }

  
  addNewMachine(name){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/machines/add',{name:name},
      
      httpOptions

    )
  }



  machinesList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/machines/list',
      
      httpOptions

    )
  }
 





 
  


  notificationsList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/list',
      
      httpOptions

    )
  }

  updateNotifications(){
        
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/update',
      
      httpOptions

    )
  }
  



  


  getEmployeesList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/list',
      
      httpOptions

    )
  }



  deleteEmployee(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/delete/'+id,
      
      httpOptions

    )
  }


  deleteMachine(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/machines/delete/'+id,
      
      httpOptions

    )
  }


  addNewIntervention( data ){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/interventions/add',data,
      
      httpOptions

    )
  }


  getMyInterventions(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/interventions/mylist',
      
      httpOptions

    )
  }

  getAllInterventionsList(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/interventions/list',
      
      httpOptions

    )
  }



  getMoreData(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/data/list',
      
      httpOptions

    )
  }


  getCategoriesList(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/categories/list',
      
      httpOptions

    )
  }


  getDoctorsList(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/doctors/list',
      
      httpOptions

    )
  }


  getDoctorsByCategoryAndName(category,name){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/doctors/search?category='+category+'&name='+name,
      
      httpOptions

    )
  }



  getDoctorsByID(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/doctors/details/'+id,
      
      httpOptions

    )
  }



  addCategory(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/categories/add',data,
      
      httpOptions

    )
  }




  addDoctor(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/doctors/add',data,
      
      httpOptions

    )
  }


  


  bookDoctor(data,id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/doctors/book/doctor/'+id,data,
      
      httpOptions

    )
  }



  getConnectedDoctorReservations(){ 

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/doctors/get-Doctor-reservations',
      
      httpOptions

    )
  }


  getConnectedUserReservations(){ 

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/get-my-reservations',
      
      httpOptions

    )
  }


  getReservationByID(id){ 

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/get-reservation-by-id/'+id,
      
      httpOptions

    )
  }



  


   
  
  changeReservationsStatus(id,status){ 

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/doctors/reservation/change-status/'+id+'?status='+status,
      
      httpOptions

    )
  }





    
  getServicesCategories(){ 

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/categories-services-list', 
      httpOptions 
    )
  }


      
  getServicesLocations(){ 

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/categories-services-location-list', 
      httpOptions 
    )
  }




  addServiceProvider(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/utilities/add-service-provider',data,
      
      httpOptions

    )
  }


  getServiceProviders(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/service-providers',
      
      httpOptions

    )
  }


  getServiceProvidersByDoctorLocation(location){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/service-providers-by-location-of-doctor?location='+location,
      
      httpOptions

    )
  }


  connectedServiceProviderReservations(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/service-providers-reservations',
      
      httpOptions

    )
  }


  
  



  addServiceReservation(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/utilities/add-service-to-reservation',data,
      
      httpOptions

    )
  }



  

  getBookedServiceInThisTrip(reservation){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/get-booked-service-by-reservation/'+reservation,
      
      httpOptions

    )
  }

  closeServiceStatus(id){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/close-service-booking/'+id,
      
      httpOptions

    )
  }


  
  closeReservation(id){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/close-reservation/'+id,
      
      httpOptions

    )
  }



    
  getAllReservations( ){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/utilities/get-all-reservations',
      
      httpOptions

    )
  }

  
}
