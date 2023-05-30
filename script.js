let day = document.getElementById('day').value
let month = document.getElementById('month').value
let year = document.getElementById('year').value
let calculatedDays = document.getElementById('calculated-days')
let calculatedMonths= document.getElementById('calculated-months')
let calculatedYears= document.getElementById('calculated-years')


let currentDate = new Date()
let date = new Date(`${year}-${month}-${day}`)
let label = document.querySelectorAll('label')





const age =(year, month, day, currentDate, calculatedDays, calculatedMonths, calculatedYears)=>{    
    let dateAge=0
    let monthAge=0
    let yearAge=0

    console.log(currentDate.getFullYear())
    if(currentDate.getDate()>=day){
        dateAge = currentDate.getDate()-day
    }
    else{
        monthAge--
        dateAge=31+currentDate.getDate()-day
    }

    if (currentDate.getMonth() >= month-1)  
 
        monthAge = currentDate.getMonth() - month+1;  
    else {      
        monthAge = 12 + currentDate.getMonth()- month+1;  
    }  

    if(currentDate.getDate()>=day&&currentDate.getMonth() >= month-1){
        yearAge=currentDate.getFullYear()-year
    }
    else{
        yearAge=currentDate.getFullYear()-year-1
    }

    printAge(year, month, day, calculatedDays, calculatedMonths, calculatedYears, dateAge, monthAge,yearAge)
}


// gets value and prints it onto screen if the inputed value is valid
const printAge= (ear, month, day, calculatedDays, calculatedMonths, calculatedYears, dateAge, monthAge,yearAge)=>{ 
    if (!checkDay(day, month, year)||!checkMonth(month)||!checkYear(currentDate, year)){
        document.querySelector('.alert').innerText="Must be valid date!"
        label.forEach(label=>{
            label.style.color='hsl(0, 100%, 67%)'
        })

    }
    else{
        calculatedYears.innerText = yearAge
        calculatedMonths.innerText= monthAge
        calculatedDays.innerText=  dateAge
        document.querySelector('.alert').innerText=null
        label.forEach(label=>{
            label.style.color='black'
        })
        
    }
    
}
    

// checks if inputed days are the valid and correct for the month

const checkDay=(day, month,year)=>{
    const listOfDays =[31,28,31,30,31,30,31,31,30,31,30,31]
    if(month==1||month>2){
        if(day>listOfDays[month-1]){
            return false
        }
    }
    else if(month==2){
        let leapYear=false
        if(year%4==0){
            leapYear=true
        }
        if(leapYear==false&&day>=29){
            return false
        }
        else if(leapYear==true && day>29){
            return false
        }
    }    
    return true
}

    
const checkMonth = month=>{
    return month<13?true:false
}

    
const checkYear=(currentDate, year)=>{
    return currentDate.getFullYear()-year >=0?true:false
}




let calculate = ()=>{
    let day = document.getElementById('day').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value
    let calculatedDays = document.getElementById('calculated-days')
    let calculatedMonths= document.getElementById('calculated-months')
    let calculatedYears= document.getElementById('calculated-years')

    
    let currentDate = new Date()
    currentDate.toISOString().split('T')[0]
    let date = new Date(`${year}-${month}-${day}`)
    let diff= currentDate-date
    
    if(checkInput()){
        age(year, month, day, currentDate, calculatedDays, calculatedMonths, calculatedYears, diff)
    }

}

const checkInput = ()=>{
    let day = document.getElementById('day').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value
    let numbers = document.querySelectorAll('.number')

    if(year===""||month===""||day===""){
        numbers.forEach(number=>{
            number.innerText='--'
        })
        return false
    }
    else{
        return true
    }
}

checkInput()
