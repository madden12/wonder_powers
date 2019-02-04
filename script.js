// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...
// document.querySelector("#activate-flight").addEventListener("click", function(){
//         document.getElementById("flight").classList.toggle("enabled");
// })

// document.querySelector("#activate-mindreading").addEventListener("click", function(){
//     document.getElementById("mindreading").classList.toggle("enabled");
// })

// document.querySelector("#activate-xray").addEventListener("click", function(){
//     document.getElementById("xray").classList.toggle("enabled");

// })
// ***********can use classList.replace("disabled", "enabled")***********

// document.querySelectorAll(".disabled").addEventListener("click",function (){
//     document.getElementsByClassName(".disabled").classList.toggle("enabled");

// })

function activatePower(event){
    // console.log(event.target.id.split("-")[1]);
    // select correct section
    const sectionId = event.target.id.split("-")[1];
    const sectionToChange = document.querySelector(`#${sectionId}`)
    sectionToChange.classList.replace("disabled", "enabled")
}
const activateAllPowers = () => {
   const allSections =  document.querySelectorAll(".power");
   allSections.forEach(function (singleSection){
       singleSection.classList.replace("disabled", "enabled");
  })
}
                                            
 document.querySelector("#activate-all").addEventListener("click", activateAllPowers);

 const deactivateAllPowers = () => {
    const allSections =  document.querySelectorAll(".power");
    allSections.forEach(function (singleSection){
        singleSection.classList.replace("enabled", "disabled");
   })
 }
                                             
  document.querySelector("#deactivate-all").addEventListener("click", deactivateAllPowers)




