
interface StartData {
    [key: string]: StaticData
}

interface StaticData {
    title:string,
    text:string,
    src: string,
    cols:{id:string,name:string, src:string}[]
}

const initData:StartData = {

    "foods":{ 
        title:"Essen",
        text:"",
        src: "metacom/food/lebensmittel.jpg",
        cols:[
            { id:"vegetable", name:"Gemüse", src: "metacom/food/gemuese.jpg"},
            { id:"fruit", name:"Obst", src: "metacom/food/obst.jpg"},
            { id:"sweets", name:"Süßigkeiten", src: "metacom/food/suessigkeiten.jpg" }
            
        ] 
    },
    "transport":{ 
        title:"Fahrzeuge",
        text:"",
        src: "metacom/food/fahrzeuge.jpg",
        cols:[
            { id:"land", name:"Land/Erde", src: "metacom/transport/Erde.jpg" },
            { id:"luft", name:"Luft/Himmel", src: "metacom/transport/himmel.jpg" },
            { id:"wasser", name:"Wasser", src: "metacom/transport/see.jpg" }
            
        ] 
    }

}

export default initData;