export default function validate(input){
    let error={};
    if(!input.name){
    error.name= 'A breed is required...'
    }
    if(!input.hp){
    error.hp= 'A HP is required...'
    }
    if(!input.image){
        error.image= 'A image is required...'
    }
    if(!input.str){
        error.str= 'Please full the camp...'
    }
    if(!input.def){
        error.def= 'Please full the camp...'
    }
    if(!input.vel){
        error.vel= 'Please full the camp...'
    }
    if(!input.height){
        error.height= 'Please full the camp...'
    }
    if(!input.weight){
        error.weight= 'Please full the camp...'
    }
    if(!input.types){
      error.types= 'Please Select a type...'
    }
    if (!input.image.includes("https://" || "http://") &&
            !input.image.includes(".jpg" || ".jpeg" || ".png")
          ) {
            error.image = "Enter a valid URL (.jpg, .jpeg, .png)";
          }
   
        
    return error;
}