const form = document.querySelector('form')
//const height =parseInt(document.querySelector('#height').value)
//const weight =parseInt(document.querySelector('#Weight').value)
// this will be wrong gave you empty value
form.addEventListener('submit',function(z){
z.preventDefault()
const height =parseInt(document.querySelector('#height').value)
const weight =parseInt(document.querySelector('#Weight').value)
const result =document.querySelector('#result')
if (height===''|| height<0||isNaN(height)) 
{
    result.innerHTML = `pleae Enter valid value  ${height}`;

}
else if (weight===''|| weight<0||isNaN(weight)) 
{
    result.innerHTML = `pleae Enter valid value ${weight} `;
    
}
else
{
     const bmi = (weight/ ((height*height)/10000)).toFixed(2)
     // show the reulst 
     result.innerHTML = `<span>${bmi}</span>`;
    
}

})