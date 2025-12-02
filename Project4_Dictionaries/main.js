var Animal = {
    Species: "Dog",
    Color: "Brown",
    Breed: "Labrador",
    Age: 5,
    Sound: "Bark!"
};
      function my_Directory() {
        document.getElementById("Directory").innerHTML = "The " + Animal.Breed + " says " + Animal.Sound;
    }  
    function delete_Property() 
        {
            delete Animal.Sound;
            document.getElementById("Directory").innerHTML = Animal.Sound;
            document.getElementById("Directory").innerHTML = Animal.Sound;
    }