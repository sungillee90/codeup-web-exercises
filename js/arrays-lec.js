console.log("HIHIHIHIHIHIH ARAAY")

// var douglas = "Douglas H";
// var fer = "Fer M";

// To create array, must use []
// JS will combine all the datatypes for you.
var cohort = ["Douglas H", "Sophie K", "Fer M", 1, 3.4];

console.log('cohort.length: ' + cohort.length);
console.log(cohort);
console.log('Index of Fer M: ' + cohort.indexOf("Fer M"));
console.log('get Fer: ' + cohort[1]);

// if the item (array) that you are looking for does NOT exist you will get -1

for (var index = 0; index <= cohort.length; index++) {
    console.log('cohort[index]: ' + index ,cohort[index]);
}

console.log(cohort[0]);
console.log(cohort[1]);
console.log(cohort[2]);
console.log(cohort[3]);
console.log(cohort[4]);