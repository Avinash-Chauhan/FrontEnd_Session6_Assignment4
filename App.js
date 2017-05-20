//this is a script file and no need to write script tags ,below i have declared and assigned age,name etc using array of objects
var i;
//var myArray=[{Name:"Praveen", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}},{Name:"Arun", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}},{Name:"Suraj", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}},{Name:"Ramesh", Age:25, Salary: 20000, Address:{City: "Hyderabad", State: "AndraPradesh", Pincode: 500048}}];
var myArray =[{Name:"Praveen", Age:25, Salary: 20000, City: "Hyderabad", State: "AndraPradesh", Pincode: 500048},
              {Name:"Arun", Age:27, Salary: 30000, City: "Nagpur", State: "Gurgaon", Pincode: 555001},
              {Name:"Suraj", Age:28, Salary: 380000, City: "Raichur", State: "Karnataka", Pincode: 589001},
              {Name:"Ramesh", Age:26, Salary: 250000, City: "Vijaywada", State: "AndraPradesh", Pincode: 500249},
              {Name:"Prakash", Age:30, Salary: 650000, City: "Bangalore", State: "Karnataka", Pincode: 585148}];

//using for in loop to access and loop through all objects attributes in myArray
    for(i in myArray)
	{
		//below code prints value in the console window
        console.log("My Name is : "+myArray[i].Name ,",", "My Age is : "+myArray[i].Age ,",", "My Salary is : "+myArray[i].Salary,"&","live in : "+myArray[i].City,"of state "+myArray[i].State
	                ,"&","Pincode is "+myArray[i].Pincode);
		//console.log(myArray[i]);
	}