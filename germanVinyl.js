let nombre = "German Heavy Metal Collection";
let añoCreación = 2024;
let formato = "Vinyl"; 
let canciones = ["Balls to the Wall", "Future World", "Princess of the Dawn", "Fast as a Shark", "To the Metal"];
let albums = [
    {
        nombre: "Balls to the Wall",
        añoEstreno: 1983,
        banda: "Accept",
        canciones: ["Balls to the Wall", "London Leatherboys", "Turn Me On"]
    },
    {
        nombre: "Keeper of the Seven Keys Part II",
        añoEstreno: 1988,
        banda: "Helloween",
        canciones: ["Eagle Fly Free", "I Want Out", "Dr. Stein"]
    },
    {
        nombre: "Reign of Fear",
        añoEstreno: 1986,
        banda: "Rage",
        canciones: ["Scared to Death", "Deceiver", "Echoes of Evil"]
    },
    {
        nombre: "To the Metal",
        añoEstreno: 2010,
        banda: "Gamma Ray",
        canciones: ["To the Metal", "Empathy", "All You Need to Know"]
    },
    {
        nombre: "Restless and Wild",
        añoEstreno: 1982,
        banda: "Accept",
        canciones: ["Fast as a Shark", "Restless and Wild", "Princess of the Dawn"]
    },
    {
        nombre: "Metalmorphosis",
        añoEstreno: 2011,
        banda: "Brainstorm",
        canciones: ["Shiva's Tears", "Worlds Are Comin' Through", "Fire Walk with Me"]
    }
];

console.log("Nombre:", nombre);
console.log("Año de creación:", añoCreación);
console.log("Formato:", formato);
console.log("Canciones favoritas:", canciones.join(", "));

console.log("Álbums:");
albums.forEach(album => {
    console.log(`- ${album.nombre} (${album.añoEstreno}) por ${album.banda}`);
    console.log("  Canciones destacadas: " + album.canciones.join(", "));
});

