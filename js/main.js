// Lista array icone
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

//1.Selezione referenze
const container = $(".icons");


//2.Colorare le icone in base al tipo
const blue = "#0000ff";
const purple = "#800080";
const orange = "#ffa500";

const newIcons = icons.map( (icon) => {

    return {
        ...icon,
        color: (icon.type === "animal") ? blue : (icon.type === "vegetable") ? orange : purple
    }
});


//3.Ciclo forEach per stampare a schermo
newIcons.forEach( (icon) => {
    const {family, prefix, name, color} = icon;

    const html =
    `
    <div class="icon">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="title">${name}</div>  
    </div>
    `;

    container.append(html);
});

console.log(icons);
console.log(newIcons);


//3.Filter icons by type
const select =$("#type");
const types = getType(icons);

//Generare opzioni
genOption(types, select);




//*FUNZIONI
//Funzione per selezionare icone dal tipo di elemento
function colorIcons(icons, colors) {

  //Get types
  const types = getType(icons);
  console.log(types);

  //Assegnare colore al type
  const newIcons = icons.map((icon) => {
      const indexType = types.indexOf(icon.type);

      return {
          ...icon,
          color: colors[indexType]
      };
  });
  return newIcons;
};



//Funzione per estrapolare il tipo senza doppioni
function getType(icons) {   //per evitare doppioni
    const types = [];

    icons.forEach((icon) => {
        if(! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });
    return types;
};


//Funzione generare opzione by type
function genOption(types, select) {
  types.forEach((opt) => {
      select.append(`<option value="${opt}">${opt}</option>`);
  });
};















